export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      setlist: {
        Row: {
          created_at: string
          id: number
          name: string
          url: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          name: string
          url?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          name?: string
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
          venue: number | null
        }
        Insert: {
          date: string
          end_time: string
          event?: string | null
          fb_url?: string | null
          id?: number
          start_time: string
          venue?: number | null
        }
        Update: {
          date?: string
          end_time?: string
          event?: string | null
          fb_url?: string | null
          id?: number
          start_time?: string
          venue?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "show_venue_fkey"
            columns: ["venue"]
            referencedRelation: "venue"
            referencedColumns: ["id"]
          }
        ]
      }
      venue: {
        Row: {
          city: string | null
          id: number
          name: string
          state: string | null
          website_url: string | null
        }
        Insert: {
          city?: string | null
          id?: number
          name: string
          state?: string | null
          website_url?: string | null
        }
        Update: {
          city?: string | null
          id?: number
          name?: string
          state?: string | null
          website_url?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
