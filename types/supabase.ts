export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      contact: {
        Row: {
          email: string | null
          id: number
          name: string
          phone: string | null
        }
        Insert: {
          email?: string | null
          id?: number
          name: string
          phone?: string | null
        }
        Update: {
          email?: string | null
          id?: number
          name?: string
          phone?: string | null
        }
        Relationships: []
      }
      member: {
        Row: {
          first_name: string
          id: number
          image_url: string | null
          last_name: string | null
          profile_color: string | null
          title: string
        }
        Insert: {
          first_name: string
          id?: number
          image_url?: string | null
          last_name?: string | null
          profile_color?: string | null
          title: string
        }
        Update: {
          first_name?: string
          id?: number
          image_url?: string | null
          last_name?: string | null
          profile_color?: string | null
          title?: string
        }
        Relationships: []
      }
      rehearsal: {
        Row: {
          agenda: string[] | null
          date: string
          id: number
          include_new_songs: boolean
          start_time: string | null
        }
        Insert: {
          agenda?: string[] | null
          date: string
          id?: number
          include_new_songs?: boolean
          start_time?: string | null
        }
        Update: {
          agenda?: string[] | null
          date?: string
          id?: number
          include_new_songs?: boolean
          start_time?: string | null
        }
        Relationships: []
      }
      set: {
        Row: {
          id: number
          name: string
          notes: string | null
          songs: number[] | null
          sort_order: number
          type: Database["public"]["Enums"]["set_type"] | null
        }
        Insert: {
          id?: number
          name: string
          notes?: string | null
          songs?: number[] | null
          sort_order?: number
          type?: Database["public"]["Enums"]["set_type"] | null
        }
        Update: {
          id?: number
          name?: string
          notes?: string | null
          songs?: number[] | null
          sort_order?: number
          type?: Database["public"]["Enums"]["set_type"] | null
        }
        Relationships: []
      }
      setlist: {
        Row: {
          id: number
          name: string
          sets: number[]
          url: string | null
        }
        Insert: {
          id?: number
          name: string
          sets?: number[]
          url?: string | null
        }
        Update: {
          id?: number
          name?: string
          sets?: number[]
          url?: string | null
        }
        Relationships: []
      }
      show: {
        Row: {
          date: string
          end_time: string
          event: string | null
          fb_url: string | null
          id: number
          start_time: string
          venue: number
        }
        Insert: {
          date: string
          end_time: string
          event?: string | null
          fb_url?: string | null
          id?: number
          start_time: string
          venue: number
        }
        Update: {
          date?: string
          end_time?: string
          event?: string | null
          fb_url?: string | null
          id?: number
          start_time?: string
          venue?: number
        }
        Relationships: [
          {
            foreignKeyName: "show_venue_fkey"
            columns: ["venue"]
            isOneToOne: false
            referencedRelation: "venue"
            referencedColumns: ["id"]
          }
        ]
      }
      show_images: {
        Row: {
          caption: string | null
          created_at: string
          id: number
          url: string
        }
        Insert: {
          caption?: string | null
          created_at?: string
          id?: number
          url: string
        }
        Update: {
          caption?: string | null
          created_at?: string
          id?: number
          url?: string
        }
        Relationships: []
      }
      song: {
        Row: {
          artist: string
          download_url: string | null
          id: number
          link_url: string | null
          mood: Database["public"]["Enums"]["song_mood"] | null
          specials: string[] | null
          status: Database["public"]["Enums"]["song_status"]
          title: string
          vocal_lead: number | null
        }
        Insert: {
          artist: string
          download_url?: string | null
          id?: number
          link_url?: string | null
          mood?: Database["public"]["Enums"]["song_mood"] | null
          specials?: string[] | null
          status: Database["public"]["Enums"]["song_status"]
          title: string
          vocal_lead?: number | null
        }
        Update: {
          artist?: string
          download_url?: string | null
          id?: number
          link_url?: string | null
          mood?: Database["public"]["Enums"]["song_mood"] | null
          specials?: string[] | null
          status?: Database["public"]["Enums"]["song_status"]
          title?: string
          vocal_lead?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "song_vocal_lead_fkey"
            columns: ["vocal_lead"]
            isOneToOne: false
            referencedRelation: "member"
            referencedColumns: ["id"]
          }
        ]
      }
      venue: {
        Row: {
          address: string | null
          city: string | null
          contact: number | null
          id: number
          name: string
          phone: string | null
          serves_food: boolean
          state: string | null
          website_url: string | null
        }
        Insert: {
          address?: string | null
          city?: string | null
          contact?: number | null
          id?: number
          name: string
          phone?: string | null
          serves_food?: boolean
          state?: string | null
          website_url?: string | null
        }
        Update: {
          address?: string | null
          city?: string | null
          contact?: number | null
          id?: number
          name?: string
          phone?: string | null
          serves_food?: boolean
          state?: string | null
          website_url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "venue_contact_fkey"
            columns: ["contact"]
            isOneToOne: false
            referencedRelation: "contact"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      set_type: "3h" | "4h" | "Country"
      song_mood: "fast dance" | "slow dance" | "drink" | "singalong"
      song_status:
        | "suggested"
        | "next"
        | "learning"
        | "active"
        | "burner"
        | "killed"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never
