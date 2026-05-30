export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.5"
  }
  public: {
    Tables: {
      applications: {
        Row: {
          admin_notes: string | null
          budget_range: string | null
          company: string | null
          created_at: string
          email: string
          experience_level: string | null
          full_name: string
          goals: string
          how_did_you_hear: string | null
          id: string
          language: string
          phone: string | null
          preferred_dates: string | null
          preferred_duration_days: number | null
          role: string | null
          status: Database["public"]["Enums"]["application_status"]
          team_size: number | null
          whatsapp: string | null
        }
        Insert: {
          admin_notes?: string | null
          budget_range?: string | null
          company?: string | null
          created_at?: string
          email: string
          experience_level?: string | null
          full_name: string
          goals: string
          how_did_you_hear?: string | null
          id?: string
          language?: string
          phone?: string | null
          preferred_dates?: string | null
          preferred_duration_days?: number | null
          role?: string | null
          status?: Database["public"]["Enums"]["application_status"]
          team_size?: number | null
          whatsapp?: string | null
        }
        Update: {
          admin_notes?: string | null
          budget_range?: string | null
          company?: string | null
          created_at?: string
          email?: string
          experience_level?: string | null
          full_name?: string
          goals?: string
          how_did_you_hear?: string | null
          id?: string
          language?: string
          phone?: string | null
          preferred_dates?: string | null
          preferred_duration_days?: number | null
          role?: string | null
          status?: Database["public"]["Enums"]["application_status"]
          team_size?: number | null
          whatsapp?: string | null
        }
        Relationships: []
      }
      bookings: {
        Row: {
          add_ons: Json
          created_at: string
          deposit_cents: number | null
          email: string
          experience_level: string | null
          id: string
          language: string
          name: string
          notes: string | null
          offering_id: string | null
          phone: string | null
          preferred_date: string | null
          preferred_duration_days: number | null
          retreat_date_id: string | null
          room_type: string | null
          source: Database["public"]["Enums"]["offering_source"]
          status: Database["public"]["Enums"]["booking_status"]
          stripe_session_id: string | null
          total_cents: number | null
          whatsapp: string | null
        }
        Insert: {
          add_ons?: Json
          created_at?: string
          deposit_cents?: number | null
          email: string
          experience_level?: string | null
          id?: string
          language?: string
          name: string
          notes?: string | null
          offering_id?: string | null
          phone?: string | null
          preferred_date?: string | null
          preferred_duration_days?: number | null
          retreat_date_id?: string | null
          room_type?: string | null
          source: Database["public"]["Enums"]["offering_source"]
          status?: Database["public"]["Enums"]["booking_status"]
          stripe_session_id?: string | null
          total_cents?: number | null
          whatsapp?: string | null
        }
        Update: {
          add_ons?: Json
          created_at?: string
          deposit_cents?: number | null
          email?: string
          experience_level?: string | null
          id?: string
          language?: string
          name?: string
          notes?: string | null
          offering_id?: string | null
          phone?: string | null
          preferred_date?: string | null
          preferred_duration_days?: number | null
          retreat_date_id?: string | null
          room_type?: string | null
          source?: Database["public"]["Enums"]["offering_source"]
          status?: Database["public"]["Enums"]["booking_status"]
          stripe_session_id?: string | null
          total_cents?: number | null
          whatsapp?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "bookings_offering_id_fkey"
            columns: ["offering_id"]
            isOneToOne: false
            referencedRelation: "offerings"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bookings_retreat_date_id_fkey"
            columns: ["retreat_date_id"]
            isOneToOne: false
            referencedRelation: "retreat_dates"
            referencedColumns: ["id"]
          },
        ]
      }
      coach_credentials: {
        Row: {
          created_at: string
          description: string | null
          id: string
          logo_url: string | null
          published: boolean
          sort_order: number
          title: string
          verified: boolean
          year: number | null
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          logo_url?: string | null
          published?: boolean
          sort_order?: number
          title: string
          verified?: boolean
          year?: number | null
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          logo_url?: string | null
          published?: boolean
          sort_order?: number
          title?: string
          verified?: boolean
          year?: number | null
        }
        Relationships: []
      }
      faqs: {
        Row: {
          answer: string
          category: string
          created_at: string
          id: string
          published: boolean
          question: string
          sort_order: number
        }
        Insert: {
          answer: string
          category?: string
          created_at?: string
          id?: string
          published?: boolean
          question: string
          sort_order?: number
        }
        Update: {
          answer?: string
          category?: string
          created_at?: string
          id?: string
          published?: boolean
          question?: string
          sort_order?: number
        }
        Relationships: []
      }
      leads: {
        Row: {
          created_at: string
          email: string
          id: string
          language: string
          message: string | null
          name: string
          phone: string | null
          source: Database["public"]["Enums"]["offering_source"] | null
          status: string
          whatsapp: string | null
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          language?: string
          message?: string | null
          name: string
          phone?: string | null
          source?: Database["public"]["Enums"]["offering_source"] | null
          status?: string
          whatsapp?: string | null
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          language?: string
          message?: string | null
          name?: string
          phone?: string | null
          source?: Database["public"]["Enums"]["offering_source"] | null
          status?: string
          whatsapp?: string | null
        }
        Relationships: []
      }
      media: {
        Row: {
          alt: string | null
          category: string | null
          created_at: string
          id: string
          kind: string
          published: boolean
          sort_order: number
          url: string
        }
        Insert: {
          alt?: string | null
          category?: string | null
          created_at?: string
          id?: string
          kind?: string
          published?: boolean
          sort_order?: number
          url: string
        }
        Update: {
          alt?: string | null
          category?: string | null
          created_at?: string
          id?: string
          kind?: string
          published?: boolean
          sort_order?: number
          url?: string
        }
        Relationships: []
      }
      offerings: {
        Row: {
          created_at: string
          description: string | null
          duration_label: string | null
          features: Json
          id: string
          price_cents: number | null
          price_label: string | null
          published: boolean
          slug: string
          sort_order: number
          source: Database["public"]["Enums"]["offering_source"]
          subtitle: string | null
          title: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          duration_label?: string | null
          features?: Json
          id?: string
          price_cents?: number | null
          price_label?: string | null
          published?: boolean
          slug: string
          sort_order?: number
          source: Database["public"]["Enums"]["offering_source"]
          subtitle?: string | null
          title: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string | null
          duration_label?: string | null
          features?: Json
          id?: string
          price_cents?: number | null
          price_label?: string | null
          published?: boolean
          slug?: string
          sort_order?: number
          source?: Database["public"]["Enums"]["offering_source"]
          subtitle?: string | null
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      retreat_dates: {
        Row: {
          capacity: number | null
          created_at: string
          end_date: string
          id: string
          notes: string | null
          published: boolean
          source: Database["public"]["Enums"]["offering_source"]
          spots_remaining: number | null
          start_date: string
          status: string
          title: string
        }
        Insert: {
          capacity?: number | null
          created_at?: string
          end_date: string
          id?: string
          notes?: string | null
          published?: boolean
          source: Database["public"]["Enums"]["offering_source"]
          spots_remaining?: number | null
          start_date: string
          status?: string
          title: string
        }
        Update: {
          capacity?: number | null
          created_at?: string
          end_date?: string
          id?: string
          notes?: string | null
          published?: boolean
          source?: Database["public"]["Enums"]["offering_source"]
          spots_remaining?: number | null
          start_date?: string
          status?: string
          title?: string
        }
        Relationships: []
      }
      testimonials: {
        Row: {
          author_location: string | null
          author_name: string
          author_role: string | null
          avatar_url: string | null
          created_at: string
          id: string
          published: boolean
          quote: string
          rating: number | null
          sort_order: number
          source: Database["public"]["Enums"]["offering_source"]
        }
        Insert: {
          author_location?: string | null
          author_name: string
          author_role?: string | null
          avatar_url?: string | null
          created_at?: string
          id?: string
          published?: boolean
          quote: string
          rating?: number | null
          sort_order?: number
          source: Database["public"]["Enums"]["offering_source"]
        }
        Update: {
          author_location?: string | null
          author_name?: string
          author_role?: string | null
          avatar_url?: string | null
          created_at?: string
          id?: string
          published?: boolean
          quote?: string
          rating?: number | null
          sort_order?: number
          source?: Database["public"]["Enums"]["offering_source"]
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
    }
    Enums: {
      app_role: "admin" | "editor" | "user"
      application_status:
        | "submitted"
        | "reviewing"
        | "accepted"
        | "rejected"
        | "scheduled"
      booking_status: "pending" | "confirmed" | "cancelled" | "completed"
      offering_source:
        | "local_class"
        | "holiday_retreat"
        | "founder_retreat"
        | "private_coaching"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "editor", "user"],
      application_status: [
        "submitted",
        "reviewing",
        "accepted",
        "rejected",
        "scheduled",
      ],
      booking_status: ["pending", "confirmed", "cancelled", "completed"],
      offering_source: [
        "local_class",
        "holiday_retreat",
        "founder_retreat",
        "private_coaching",
      ],
    },
  },
} as const
