import { IVenue } from "@/types";

export interface IShow {
  id: number;
  date: string;
  venue: IVenue;
  start_time: string;
  end_time: string;
  event: string | null;
  fb_url: string | null;
}
