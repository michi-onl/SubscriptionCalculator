import {
  MonitorPlay,
  ChevronsLeftRightEllipsis,
  Volume2,
  Laptop,
  LucideIcon,
  ShoppingCart,
  Newspaper,
  HardDrive,
  Gamepad2,
} from "lucide-react";

export type Currency = "USD" | "EUR";

export interface CurrencyPricing {
  USD: number;
  EUR: number;
}

export interface Service {
  name: string;
  monthly_cost: CurrencyPricing;
  plan: string;
  note?: string;
}

export interface ServiceCategory {
  [serviceId: string]: Service;
}

export interface SubscriptionData {
  subscriptions: {
    streaming_services: ServiceCategory;
    music_and_audio: ServiceCategory;
    software_and_apps: ServiceCategory;
    shopping_and_delivery: ServiceCategory;
    news_and_media: ServiceCategory;
    cloud_storage: ServiceCategory;
    gaming: ServiceCategory;
    communication: ServiceCategory;
  };
  calculation_settings: {
    selected_currency: Currency;
    supported_currencies: Currency[];
    tax_rate: number;
  };
}

export interface SelectedServices {
  [serviceId: string]: boolean;
}

export type CategoryKey = keyof SubscriptionData["subscriptions"];

export interface CategoryConfig {
  [key: string]: {
    label: string;
    icon: LucideIcon;
  };
}

export const subscriptionData: SubscriptionData = {
  subscriptions: {
    streaming_services: {
      netflix: {
        name: "Netflix",
        monthly_cost: {
          USD: 15.49,
          EUR: 12.99,
        },
        plan: "Standard",
      },
      amazon_prime_video: {
        name: "Amazon Prime Video",
        monthly_cost: {
          USD: 8.99,
          EUR: 8.99,
        },
        plan: "Monthly",
      },
      disney_plus: {
        name: "Disney+",
        monthly_cost: {
          USD: 7.99,
          EUR: 8.99,
        },
        plan: "Monthly",
      },
      hulu: {
        name: "Hulu",
        monthly_cost: {
          USD: 7.99,
          EUR: 0.0,
        },
        plan: "Basic with Ads",
        note: "Not available in EU",
      },
      hbo_max: {
        name: "HBO Max",
        monthly_cost: {
          USD: 15.99,
          EUR: 8.99,
        },
        plan: "Ad-Free",
      },
      apple_tv_plus: {
        name: "Apple TV+",
        monthly_cost: {
          USD: 6.99,
          EUR: 6.99,
        },
        plan: "Monthly",
      },
      paramount_plus: {
        name: "Paramount+",
        monthly_cost: {
          USD: 5.99,
          EUR: 5.99,
        },
        plan: "Essential",
      },
      youtube_premium: {
        name: "YouTube Premium",
        monthly_cost: {
          USD: 13.99,
          EUR: 11.99,
        },
        plan: "Individual",
      },
      peacock: {
        name: "Peacock",
        monthly_cost: {
          USD: 5.99,
          EUR: 0.0,
        },
        plan: "Premium",
        note: "Not available in EU",
      },
    },
    music_and_audio: {
      spotify: {
        name: "Spotify",
        monthly_cost: {
          USD: 10.99,
          EUR: 9.99,
        },
        plan: "Premium",
      },
      apple_music: {
        name: "Apple Music",
        monthly_cost: {
          USD: 10.99,
          EUR: 9.99,
        },
        plan: "Individual",
      },
      amazon_music: {
        name: "Amazon Music",
        monthly_cost: {
          USD: 9.99,
          EUR: 9.99,
        },
        plan: "Unlimited",
      },
      pandora: {
        name: "Pandora",
        monthly_cost: {
          USD: 4.99,
          EUR: 0.0,
        },
        plan: "Plus",
        note: "Not available in EU",
      },
      audible: {
        name: "Audible",
        monthly_cost: {
          USD: 14.95,
          EUR: 9.95,
        },
        plan: "Plus",
      },
      siriusxm: {
        name: "SiriusXM",
        monthly_cost: {
          USD: 16.99,
          EUR: 0.0,
        },
        plan: "All Access",
        note: "Not available in EU",
      },
      youtube_music: {
        name: "YouTube Music",
        monthly_cost: {
          USD: 10.99,
          EUR: 9.99,
        },
        plan: "Premium",
      },
      tidal: {
        name: "Tidal",
        monthly_cost: {
          USD: 10.99,
          EUR: 9.99,
        },
        plan: "HiFi",
      },
    },
    software_and_apps: {
      microsoft_365: {
        name: "Microsoft 365",
        monthly_cost: {
          USD: 6.99,
          EUR: 6.99,
        },
        plan: "Personal",
      },
      adobe_creative_suite: {
        name: "Adobe Creative Suite",
        monthly_cost: {
          USD: 52.99,
          EUR: 59.99,
        },
        plan: "All Apps",
      },
      canva_pro: {
        name: "Canva Pro",
        monthly_cost: {
          USD: 12.99,
          EUR: 11.99,
        },
        plan: "Pro",
      },
      grammarly: {
        name: "Grammarly",
        monthly_cost: {
          USD: 12.0,
          EUR: 12.0,
        },
        plan: "Premium",
      },
      lastpass: {
        name: "LastPass",
        monthly_cost: {
          USD: 3.0,
          EUR: 3.0,
        },
        plan: "Premium",
      },
      notion: {
        name: "Notion",
        monthly_cost: {
          USD: 8.0,
          EUR: 8.0,
        },
        plan: "Personal Pro",
      },
      zoom: {
        name: "Zoom",
        monthly_cost: {
          USD: 14.99,
          EUR: 13.99,
        },
        plan: "Pro",
      },
      one_password: {
        name: "1Password",
        monthly_cost: {
          USD: 2.99,
          EUR: 2.99,
        },
        plan: "Individual",
      },
      bitwarden: {
        name: "Bitwarden",
        monthly_cost: {
          USD: 0.80,
          EUR: 0.70,
        },
        plan: "Premium",
      },
    },
    shopping_and_delivery: {
      amazon_prime: {
        name: "Amazon Prime",
        monthly_cost: {
          USD: 14.98,
          EUR: 8.99,
        },
        plan: "Monthly",
      },
      walmart_plus: {
        name: "Walmart+",
        monthly_cost: {
          USD: 12.95,
          EUR: 0.0,
        },
        plan: "Monthly",
        note: "Not available in EU",
      },
      instacart_plus: {
        name: "Instacart+",
        monthly_cost: {
          USD: 9.99,
          EUR: 0.0,
        },
        plan: "Monthly",
        note: "Not available in EU",
      },
      dashpass: {
        name: "DashPass",
        monthly_cost: {
          USD: 9.99,
          EUR: 0.0,
        },
        plan: "Monthly",
        note: "Not available in EU",
      },
      uber_one: {
        name: "Uber One",
        monthly_cost: {
          USD: 9.99,
          EUR: 5.99,
        },
        plan: "Monthly",
      },
    },
    news_and_media: {
      nyt: {
        name: "New York Times",
        monthly_cost: {
          USD: 17.0,
          EUR: 17.0,
        },
        plan: "Digital",
      },
      washington_post: {
        name: "Washington Post",
        monthly_cost: {
          USD: 10.0,
          EUR: 10.0,
        },
        plan: "Digital",
      },
      wall_street_journal: {
        name: "Wall Street Journal",
        monthly_cost: {
          USD: 38.99,
          EUR: 38.99,
        },
        plan: "Digital",
      },
      medium: {
        name: "Medium",
        monthly_cost: {
          USD: 5.0,
          EUR: 5.0,
        },
        plan: "Membership",
      },
      substack: {
        name: "Substack Pro",
        monthly_cost: {
          USD: 8.0,
          EUR: 8.0,
        },
        plan: "Pro",
      },
    },
    cloud_storage: {
      dropbox: {
        name: "Dropbox",
        monthly_cost: {
          USD: 9.99,
          EUR: 9.99,
        },
        plan: "Plus",
      },
      google_one: {
        name: "Google One",
        monthly_cost: {
          USD: 1.99,
          EUR: 1.99,
        },
        plan: "100GB",
      },
      icloud: {
        name: "iCloud+",
        monthly_cost: {
          USD: 0.99,
          EUR: 0.99,
        },
        plan: "50GB",
      },
      onedrive: {
        name: "OneDrive",
        monthly_cost: {
          USD: 1.99,
          EUR: 1.99,
        },
        plan: "100GB",
      },
      box: {
        name: "Box",
        monthly_cost: {
          USD: 10.0,
          EUR: 10.0,
        },
        plan: "Personal Pro",
      },
    },
    gaming: {
      xbox_game_pass: {
        name: "Xbox Game Pass",
        monthly_cost: {
          USD: 16.99,
          EUR: 12.99,
        },
        plan: "Ultimate",
      },
      playstation_plus: {
        name: "PlayStation Plus",
        monthly_cost: {
          USD: 17.99,
          EUR: 16.99,
        },
        plan: "Premium",
      },
      nintendo_switch_online: {
        name: "Nintendo Switch Online",
        monthly_cost: {
          USD: 3.99,
          EUR: 3.99,
        },
        plan: "Individual",
      },
      apple_arcade: {
        name: "Apple Arcade",
        monthly_cost: {
          USD: 4.99,
          EUR: 4.99,
        },
        plan: "Monthly",
      },
      ea_play: {
        name: "EA Play",
        monthly_cost: {
          USD: 4.99,
          EUR: 3.99,
        },
        plan: "Monthly",
      },
    },
    communication: {
      internet: {
        name: "Internet",
        monthly_cost: {
          USD: 60.0,
          EUR: 45.0,
        },
        plan: "High Speed",
      },
      cable_tv: {
        name: "Cable TV",
        monthly_cost: {
          USD: 90.0,
          EUR: 60.0,
        },
        plan: "HD",
      },
      mobile_phone: {
        name: "Mobile Phone",
        monthly_cost: {
          USD: 45.0,
          EUR: 25.0,
        },
        plan: "Unlimited",
      },
    },
  },
  calculation_settings: {
    selected_currency: "USD",
    supported_currencies: ["USD", "EUR"],
    tax_rate: 0.0,
  },
};

export const categoryConfig: CategoryConfig = {
  streaming_services: { label: "Streaming", icon: MonitorPlay },
  music_and_audio: { label: "Music & Audio", icon: Volume2 },
  software_and_apps: { label: "Software & Apps", icon: Laptop },
  shopping_and_delivery: { label: "Shopping & Delivery", icon: ShoppingCart },
  news_and_media: { label: "News & Media", icon: Newspaper },
  cloud_storage: { label: "Cloud Storage", icon: HardDrive },
  gaming: { label: "Gaming", icon: Gamepad2 },
  communication: { label: "Communication", icon: ChevronsLeftRightEllipsis },
};
