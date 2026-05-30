
-- Roles enum and table
CREATE TYPE public.app_role AS ENUM ('admin', 'editor', 'user');

CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role app_role NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (user_id, role)
);
GRANT SELECT ON public.user_roles TO authenticated;
GRANT ALL ON public.user_roles TO service_role;
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (SELECT 1 FROM public.user_roles WHERE user_id = _user_id AND role = _role)
$$;

CREATE POLICY "Users can view their own roles" ON public.user_roles
  FOR SELECT TO authenticated USING (auth.uid() = user_id);

-- Source tag for cross-cutting lead tracking
CREATE TYPE public.offering_source AS ENUM ('local_class','holiday_retreat','founder_retreat','private_coaching');
CREATE TYPE public.booking_status AS ENUM ('pending','confirmed','cancelled','completed');
CREATE TYPE public.application_status AS ENUM ('submitted','reviewing','accepted','rejected','scheduled');

-- Offerings (CMS-editable products/packages)
CREATE TABLE public.offerings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT NOT NULL UNIQUE,
  source offering_source NOT NULL,
  title TEXT NOT NULL,
  subtitle TEXT,
  description TEXT,
  price_cents INTEGER,
  price_label TEXT,
  duration_label TEXT,
  features JSONB NOT NULL DEFAULT '[]'::jsonb,
  sort_order INTEGER NOT NULL DEFAULT 0,
  published BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT ON public.offerings TO anon, authenticated;
GRANT ALL ON public.offerings TO service_role;
ALTER TABLE public.offerings ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can view published offerings" ON public.offerings
  FOR SELECT USING (published = true);
CREATE POLICY "Admins can manage offerings" ON public.offerings
  FOR ALL TO authenticated USING (public.has_role(auth.uid(),'admin')) WITH CHECK (public.has_role(auth.uid(),'admin'));

-- Retreat dates
CREATE TABLE public.retreat_dates (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  source offering_source NOT NULL,
  title TEXT NOT NULL,
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  capacity INTEGER,
  spots_remaining INTEGER,
  status TEXT NOT NULL DEFAULT 'open',
  notes TEXT,
  published BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT ON public.retreat_dates TO anon, authenticated;
GRANT ALL ON public.retreat_dates TO service_role;
ALTER TABLE public.retreat_dates ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can view published dates" ON public.retreat_dates
  FOR SELECT USING (published = true);
CREATE POLICY "Admins can manage dates" ON public.retreat_dates
  FOR ALL TO authenticated USING (public.has_role(auth.uid(),'admin')) WITH CHECK (public.has_role(auth.uid(),'admin'));

-- Testimonials
CREATE TABLE public.testimonials (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  source offering_source NOT NULL,
  author_name TEXT NOT NULL,
  author_role TEXT,
  author_location TEXT,
  quote TEXT NOT NULL,
  rating INTEGER CHECK (rating BETWEEN 1 AND 5),
  avatar_url TEXT,
  sort_order INTEGER NOT NULL DEFAULT 0,
  published BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT ON public.testimonials TO anon, authenticated;
GRANT ALL ON public.testimonials TO service_role;
ALTER TABLE public.testimonials ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can view published testimonials" ON public.testimonials
  FOR SELECT USING (published = true);
CREATE POLICY "Admins can manage testimonials" ON public.testimonials
  FOR ALL TO authenticated USING (public.has_role(auth.uid(),'admin')) WITH CHECK (public.has_role(auth.uid(),'admin'));

-- FAQs
CREATE TABLE public.faqs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  category TEXT NOT NULL DEFAULT 'general',
  question TEXT NOT NULL,
  answer TEXT NOT NULL,
  sort_order INTEGER NOT NULL DEFAULT 0,
  published BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT ON public.faqs TO anon, authenticated;
GRANT ALL ON public.faqs TO service_role;
ALTER TABLE public.faqs ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can view published faqs" ON public.faqs
  FOR SELECT USING (published = true);
CREATE POLICY "Admins can manage faqs" ON public.faqs
  FOR ALL TO authenticated USING (public.has_role(auth.uid(),'admin')) WITH CHECK (public.has_role(auth.uid(),'admin'));

-- Coach credentials
CREATE TABLE public.coach_credentials (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  year INTEGER,
  logo_url TEXT,
  verified BOOLEAN NOT NULL DEFAULT false,
  sort_order INTEGER NOT NULL DEFAULT 0,
  published BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT ON public.coach_credentials TO anon, authenticated;
GRANT ALL ON public.coach_credentials TO service_role;
ALTER TABLE public.coach_credentials ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can view published credentials" ON public.coach_credentials
  FOR SELECT USING (published = true);
CREATE POLICY "Admins can manage credentials" ON public.coach_credentials
  FOR ALL TO authenticated USING (public.has_role(auth.uid(),'admin')) WITH CHECK (public.has_role(auth.uid(),'admin'));

-- Media gallery
CREATE TABLE public.media (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  url TEXT NOT NULL,
  alt TEXT,
  kind TEXT NOT NULL DEFAULT 'image',
  category TEXT,
  sort_order INTEGER NOT NULL DEFAULT 0,
  published BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT ON public.media TO anon, authenticated;
GRANT ALL ON public.media TO service_role;
ALTER TABLE public.media ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can view published media" ON public.media
  FOR SELECT USING (published = true);
CREATE POLICY "Admins can manage media" ON public.media
  FOR ALL TO authenticated USING (public.has_role(auth.uid(),'admin')) WITH CHECK (public.has_role(auth.uid(),'admin'));

-- Bookings
CREATE TABLE public.bookings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  source offering_source NOT NULL,
  offering_id UUID REFERENCES public.offerings(id) ON DELETE SET NULL,
  retreat_date_id UUID REFERENCES public.retreat_dates(id) ON DELETE SET NULL,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  whatsapp TEXT,
  preferred_date DATE,
  preferred_duration_days INTEGER,
  room_type TEXT,
  add_ons JSONB NOT NULL DEFAULT '[]'::jsonb,
  experience_level TEXT,
  notes TEXT,
  language TEXT NOT NULL DEFAULT 'en',
  status booking_status NOT NULL DEFAULT 'pending',
  deposit_cents INTEGER,
  total_cents INTEGER,
  stripe_session_id TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT INSERT ON public.bookings TO anon, authenticated;
GRANT ALL ON public.bookings TO service_role;
ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can create a booking" ON public.bookings
  FOR INSERT WITH CHECK (true);
CREATE POLICY "Admins can view all bookings" ON public.bookings
  FOR SELECT TO authenticated USING (public.has_role(auth.uid(),'admin'));
CREATE POLICY "Admins can update bookings" ON public.bookings
  FOR UPDATE TO authenticated USING (public.has_role(auth.uid(),'admin')) WITH CHECK (public.has_role(auth.uid(),'admin'));

-- Leads
CREATE TABLE public.leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  source offering_source,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  whatsapp TEXT,
  message TEXT,
  language TEXT NOT NULL DEFAULT 'en',
  status TEXT NOT NULL DEFAULT 'new',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT INSERT ON public.leads TO anon, authenticated;
GRANT ALL ON public.leads TO service_role;
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can create a lead" ON public.leads
  FOR INSERT WITH CHECK (true);
CREATE POLICY "Admins can view leads" ON public.leads
  FOR SELECT TO authenticated USING (public.has_role(auth.uid(),'admin'));
CREATE POLICY "Admins can update leads" ON public.leads
  FOR UPDATE TO authenticated USING (public.has_role(auth.uid(),'admin')) WITH CHECK (public.has_role(auth.uid(),'admin'));

-- Founder/Executive applications
CREATE TABLE public.applications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  whatsapp TEXT,
  company TEXT,
  role TEXT,
  team_size INTEGER,
  goals TEXT NOT NULL,
  experience_level TEXT,
  preferred_dates TEXT,
  preferred_duration_days INTEGER,
  budget_range TEXT,
  how_did_you_hear TEXT,
  language TEXT NOT NULL DEFAULT 'en',
  status application_status NOT NULL DEFAULT 'submitted',
  admin_notes TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT INSERT ON public.applications TO anon, authenticated;
GRANT ALL ON public.applications TO service_role;
ALTER TABLE public.applications ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can submit an application" ON public.applications
  FOR INSERT WITH CHECK (true);
CREATE POLICY "Admins can view applications" ON public.applications
  FOR SELECT TO authenticated USING (public.has_role(auth.uid(),'admin'));
CREATE POLICY "Admins can update applications" ON public.applications
  FOR UPDATE TO authenticated USING (public.has_role(auth.uid(),'admin')) WITH CHECK (public.has_role(auth.uid(),'admin'));

-- updated_at trigger for offerings
CREATE OR REPLACE FUNCTION public.set_updated_at()
RETURNS TRIGGER LANGUAGE plpgsql AS $$
BEGIN NEW.updated_at = now(); RETURN NEW; END $$;

CREATE TRIGGER trg_offerings_updated_at BEFORE UPDATE ON public.offerings
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- Seed initial offerings (editable placeholders)
INSERT INTO public.offerings (slug, source, title, subtitle, description, price_cents, price_label, duration_label, features, sort_order) VALUES
('local-trial', 'local_class', 'Trial Class', 'Walk in. Glove up. Find out.', 'A single introductory class. All levels welcome. No experience required.', 2500, 'From €25', '60 min', '["Coach-led session","Equipment provided","All levels welcome"]'::jsonb, 1),
('local-monthly', 'local_class', 'Monthly Membership', 'Unlimited group classes', 'Train as much as you want across our weekly schedule.', 14900, 'From €149/mo', 'Monthly', '["Unlimited group classes","Open gym access","Member events"]'::jsonb, 2),
('private-single', 'private_coaching', 'Private Session', '1:1 with the coach', 'Focused one-on-one coaching. Technique, fitness or confidence.', 9000, 'From €90', '60 min', '["1:1 attention","Tailored plan","Recovery guidance"]'::jsonb, 3),
('private-pack', 'private_coaching', '5-Session Package', 'Build a real foundation', 'Five private sessions, structured to build measurable progress.', 40000, 'From €400', '5 × 60 min', '["Structured progression","Video review","Direct messaging"]'::jsonb, 4),
('retreat-5', 'holiday_retreat', '5-Day Retreat', 'A focused reset', 'Five days of boxing, recovery and meals at Mike''s Gym Marbella.', 195000, 'From €1,950', '5 days', '["Twice-daily training","All meals","Recovery sessions","Accommodation on-site"]'::jsonb, 5),
('retreat-7', 'holiday_retreat', '7-Day Retreat', 'The full transformation', 'A full week of structured training, recovery and brand-new habits.', 265000, 'From €2,650', '7 days', '["Twice-daily training","All meals","Recovery sessions","Accommodation on-site","One private 1:1"]'::jsonb, 6),
('retreat-10', 'holiday_retreat', '10-Day Retreat', 'Go deeper', 'Ten days for those who want to come home genuinely changed.', 365000, 'From €3,650', '10 days', '["Twice-daily training","All meals","Recovery sessions","Accommodation on-site","Two private 1:1s","Mid-retreat off day"]'::jsonb, 7),
('founder-retreat', 'founder_retreat', 'Founder & Executive Retreat', 'Application only', 'A premium reset for founders, leaders and small executive teams. Application-led.', NULL, 'By application', '4–7 days', '["Small group","Bespoke programme","Discovery call","Private 1:1 included","Strategic recovery"]'::jsonb, 8);

-- Seed FAQs
INSERT INTO public.faqs (category, question, answer, sort_order) VALUES
('general', 'Do I need any experience?', 'No. Every programme has a beginner-friendly path. Coaching is scalable to your level — from your first class to fight prep.', 1),
('general', 'Where exactly is the gym?', 'Mike''s Gym Marbella, La Majadilla del Muerto 210, Las Lagunas de Mijas, 29649 — about 4 km from La Cala de Mijas and 30 minutes from Málaga airport. The site is in the hills, so directions matter — use our map.', 2),
('retreat', 'What''s included in the retreat?', 'Twice-daily training, all meals, accommodation on-site, recovery sessions and coach access throughout. Add-ons include airport transfer and private 1:1 sessions.', 3),
('retreat', 'Is airport transfer available?', 'Yes, optional. We can arrange transfer from Málaga airport (approx. 30 minutes).', 4),
('founder', 'How is the Founder Retreat different?', 'Smaller groups, application-led, bespoke programme. Built around clarity, energy and discipline — for founders and executives, not a generic group programme.', 5),
('private', 'Can I add private coaching to any programme?', 'Yes. Private 1:1 is available as an add-on to every local membership and every retreat.', 6),
('general', 'What should I bring?', 'Athletic clothing, water bottle and an open mind. Hand wraps and gloves can be provided on request for trial classes.', 7);

-- Seed coach credentials placeholders
INSERT INTO public.coach_credentials (title, description, sort_order, verified) VALUES
('Head Coach — Lodgey''s Boxing', 'Hosted at Mike''s Gym Marbella', 1, false),
('Years of competitive boxing', 'Placeholder — add verified record', 2, false),
('Professional coaching experience', 'Placeholder — add verified history', 3, false),
('Programme design for all levels', 'Beginner to fight prep', 4, false);

-- Seed testimonials placeholders
INSERT INTO public.testimonials (source, author_name, author_role, quote, rating, sort_order) VALUES
('local_class', 'Member, La Cala', 'Adult Beginners', 'Walked in nervous. Six weeks later boxing feels like the highlight of my week.', 5, 1),
('holiday_retreat', 'Retreat guest', 'Northern Europe', 'Trained twice a day, ate properly, slept eight hours. Came home as a different person.', 5, 2),
('founder_retreat', 'Founder', 'SaaS, 15 people', 'Best four days I''ve given myself all year. Clarity, energy, sharper decisions.', 5, 3),
('private_coaching', 'Private client', 'Marbella', 'Real coaching. Not a workout class with a punching bag.', 5, 4);
