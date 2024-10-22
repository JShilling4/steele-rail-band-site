export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  graphql_public: {
    Tables: {
      [_ in never]: never;
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      graphql: {
        Args: {
          operationName?: string;
          query?: string;
          variables?: Json;
          extensions?: Json;
        };
        Returns: Json;
      };
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
  public: {
    Tables: {
      contact: {
        Row: {
          email: string | null;
          fb_url: string | null;
          id: number;
          name: string;
          phone: string | null;
        };
        Insert: {
          email?: string | null;
          fb_url?: string | null;
          id?: number;
          name: string;
          phone?: string | null;
        };
        Update: {
          email?: string | null;
          fb_url?: string | null;
          id?: number;
          name?: string;
          phone?: string | null;
        };
        Relationships: [];
      };
      member: {
        Row: {
          first_name: string;
          id: number;
          image_url: string | null;
          last_name: string | null;
          permission_level: string | null;
          phone: string | null;
          profile_color: string | null;
          sort_order: number | null;
          title: string;
          user_id: string | null;
        };
        Insert: {
          first_name: string;
          id?: number;
          image_url?: string | null;
          last_name?: string | null;
          permission_level?: string | null;
          phone?: string | null;
          profile_color?: string | null;
          sort_order?: number | null;
          title: string;
          user_id?: string | null;
        };
        Update: {
          first_name?: string;
          id?: number;
          image_url?: string | null;
          last_name?: string | null;
          permission_level?: string | null;
          phone?: string | null;
          profile_color?: string | null;
          sort_order?: number | null;
          title?: string;
          user_id?: string | null;
        };
        Relationships: [];
      };
      rehearsal: {
        Row: {
          date: string;
          id: number;
          new_songs: number[] | null;
          notes: string | null;
          review_songs: number[] | null;
          start_time: string | null;
        };
        Insert: {
          date: string;
          id?: number;
          new_songs?: number[] | null;
          notes?: string | null;
          review_songs?: number[] | null;
          start_time?: string | null;
        };
        Update: {
          date?: string;
          id?: number;
          new_songs?: number[] | null;
          notes?: string | null;
          review_songs?: number[] | null;
          start_time?: string | null;
        };
        Relationships: [];
      };
      set: {
        Row: {
          id: number;
          songs: number[] | null;
        };
        Insert: {
          id?: number;
          songs?: number[] | null;
        };
        Update: {
          id?: number;
          songs?: number[] | null;
        };
        Relationships: [];
      };
      setlist: {
        Row: {
          id: number;
          name: string;
          sets: number[] | null;
          url: string | null;
        };
        Insert: {
          id?: number;
          name: string;
          sets?: number[] | null;
          url?: string | null;
        };
        Update: {
          id?: number;
          name?: string;
          sets?: number[] | null;
          url?: string | null;
        };
        Relationships: [];
      };
      show: {
        Row: {
          date: string;
          end_time: string;
          event: string | null;
          fb_url: string | null;
          id: number;
          start_time: string;
          venue: number;
        };
        Insert: {
          date: string;
          end_time: string;
          event?: string | null;
          fb_url?: string | null;
          id?: number;
          start_time: string;
          venue: number;
        };
        Update: {
          date?: string;
          end_time?: string;
          event?: string | null;
          fb_url?: string | null;
          id?: number;
          start_time?: string;
          venue?: number;
        };
        Relationships: [
          {
            foreignKeyName: "show_venue_fkey";
            columns: ["venue"];
            isOneToOne: false;
            referencedRelation: "venue";
            referencedColumns: ["id"];
          },
        ];
      };
      show_images: {
        Row: {
          caption: string | null;
          created_at: string;
          id: number;
          url: string;
        };
        Insert: {
          caption?: string | null;
          created_at?: string;
          id?: number;
          url: string;
        };
        Update: {
          caption?: string | null;
          created_at?: string;
          id?: number;
          url?: string;
        };
        Relationships: [];
      };
      song: {
        Row: {
          artist: string;
          download_url: string | null;
          id: number;
          is_highlighted: boolean;
          length: number | null;
          link_url: string | null;
          specials: string[] | null;
          status: Database["public"]["Enums"]["song_status"];
          title: string;
          vocal_lead: number | null;
        };
        Insert: {
          artist: string;
          download_url?: string | null;
          id?: number;
          is_highlighted?: boolean;
          length?: number | null;
          link_url?: string | null;
          specials?: string[] | null;
          status: Database["public"]["Enums"]["song_status"];
          title: string;
          vocal_lead?: number | null;
        };
        Update: {
          artist?: string;
          download_url?: string | null;
          id?: number;
          is_highlighted?: boolean;
          length?: number | null;
          link_url?: string | null;
          specials?: string[] | null;
          status?: Database["public"]["Enums"]["song_status"];
          title?: string;
          vocal_lead?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: "song_vocal_lead_fkey";
            columns: ["vocal_lead"];
            isOneToOne: false;
            referencedRelation: "member";
            referencedColumns: ["id"];
          },
        ];
      };
      venue: {
        Row: {
          address: string | null;
          city: string | null;
          contact: number | null;
          id: number;
          is_private: boolean;
          name: string;
          phone: string | null;
          serves_food: boolean;
          state: string | null;
          website_url: string | null;
        };
        Insert: {
          address?: string | null;
          city?: string | null;
          contact?: number | null;
          id?: number;
          is_private?: boolean;
          name: string;
          phone?: string | null;
          serves_food?: boolean;
          state?: string | null;
          website_url?: string | null;
        };
        Update: {
          address?: string | null;
          city?: string | null;
          contact?: number | null;
          id?: number;
          is_private?: boolean;
          name?: string;
          phone?: string | null;
          serves_food?: boolean;
          state?: string | null;
          website_url?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "venue_contact_fkey";
            columns: ["contact"];
            isOneToOne: false;
            referencedRelation: "contact";
            referencedColumns: ["id"];
          },
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      set_type: "3h" | "4h" | "4h Rock";
      song_mood: "fast dance" | "slow dance" | "drink" | "singalong";
      song_status:
        | "suggested"
        | "next"
        | "learning"
        | "active"
        | "burner"
        | "killed";
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type PublicSchema = Database[Extract<keyof Database, "public">];

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R;
      }
      ? R
      : never
    : never;

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I;
      }
      ? I
      : never
    : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U;
      }
      ? U
      : never
    : never;

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never;

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database;
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never;
