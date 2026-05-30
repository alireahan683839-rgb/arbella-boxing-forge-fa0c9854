
-- Fix set_updated_at search_path
CREATE OR REPLACE FUNCTION public.set_updated_at()
RETURNS TRIGGER LANGUAGE plpgsql SET search_path = public AS $$
BEGIN NEW.updated_at = now(); RETURN NEW; END $$;

-- Restrict has_role execution: only signed-in users (used inside RLS policies)
REVOKE EXECUTE ON FUNCTION public.has_role(UUID, public.app_role) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.has_role(UUID, public.app_role) TO authenticated, service_role;

-- Replace permissive INSERT policies with explicit input validation
DROP POLICY IF EXISTS "Anyone can create a booking" ON public.bookings;
CREATE POLICY "Anyone can create a booking" ON public.bookings
  FOR INSERT WITH CHECK (
    char_length(name) BETWEEN 1 AND 200
    AND char_length(email) BETWEEN 3 AND 255
    AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
    AND (phone IS NULL OR char_length(phone) <= 50)
    AND (whatsapp IS NULL OR char_length(whatsapp) <= 50)
    AND (notes IS NULL OR char_length(notes) <= 2000)
    AND language IN ('en','es','sv')
  );

DROP POLICY IF EXISTS "Anyone can create a lead" ON public.leads;
CREATE POLICY "Anyone can create a lead" ON public.leads
  FOR INSERT WITH CHECK (
    char_length(name) BETWEEN 1 AND 200
    AND char_length(email) BETWEEN 3 AND 255
    AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
    AND (phone IS NULL OR char_length(phone) <= 50)
    AND (whatsapp IS NULL OR char_length(whatsapp) <= 50)
    AND (message IS NULL OR char_length(message) <= 2000)
    AND language IN ('en','es','sv')
  );

DROP POLICY IF EXISTS "Anyone can submit an application" ON public.applications;
CREATE POLICY "Anyone can submit an application" ON public.applications
  FOR INSERT WITH CHECK (
    char_length(full_name) BETWEEN 1 AND 200
    AND char_length(email) BETWEEN 3 AND 255
    AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
    AND char_length(goals) BETWEEN 5 AND 4000
    AND (phone IS NULL OR char_length(phone) <= 50)
    AND (whatsapp IS NULL OR char_length(whatsapp) <= 50)
    AND (company IS NULL OR char_length(company) <= 200)
    AND language IN ('en','es','sv')
  );
