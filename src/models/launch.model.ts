export type Launch = Pick<LaunchFull, 'name' | 'details' | 'date_utc' | 'date_unix' | 'id' | 'rocket'>;

export interface LaunchFull {
  fairings: Fairings | null;
  links: Links;
  static_fire_date_utc: string | null;
  static_fire_date_unix: number | null;
  net: boolean | null;
  window: number | null;
  rocket: string | null;
  success: boolean | null;
  failures: Failure[];
  details: string | null;
  crew: Crew[];
  ships: string[];
  capsules: string[];
  payloads: string[];
  launchpad: string;
  flight_number: number;
  name: string;
  date_utc: string;
  date_unix: number;
  date_local: string;
  date_precision: string;
  upcoming: boolean;
  cores: Core[];
  auto_update: boolean;
  tbd: boolean;
  launch_library_id: null;
  id: string;
}

export interface Links {
  patch: Patch;
  reddit: Reddit;
  flickr: Flickr;
  presskit: string | null;
  article: string;
  wikipedia: string;
  youtube_id: string;
  webcast: string;
}

export interface Patch {
  small: string;
  large: string;
}

export interface Reddit {
  campaign: string | null;
  launch: string | null;
  recovery: string | null;
  media: string | null;
}

export interface Flickr {
  small: string[];
  original: string[];
}

export interface Fairings {
  reused: boolean | null;
  recovery_attempt: boolean | null;
  recovered: boolean | null;
  ships: string[];
}

export interface Core {
  core: string | null;
  flight: number | null;
  gridfins: boolean | null;
  legs: boolean | null;
  reused: boolean | null;
  landing_attempt: boolean | null;
  landing_success: boolean | null;
  landing_type: string | null;
  landpad: string | null;
}

export interface Failure {
  time: number;
  altitude: number | null;
  reason: string;
}

export interface Crew {
  crew: string | null;
  role: string | null;
}
