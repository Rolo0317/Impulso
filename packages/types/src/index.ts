export type PropertyStatus = "available" | "reserved" | "negotiation" | "sold";

export type LeadTemperature = "hot" | "warm" | "cold";

export type PropertyImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  blurDataURL: string;
};

export type Property = {
  id: string;
  slug: string;
  title: string;
  description?: string;
  type?: "apartamento" | "casa" | "lote" | "local";
  city: string;
  neighborhood?: string;
  floor?: number;
  price: number;
  debtPrice?: number;
  monthlyPayment?: number;
  termYears?: number;
  initialPayment?: number;
  bedrooms: number;
  bathrooms: number;
  area: number;
  status: PropertyStatus;
  operation?: string;
  agency?: string;
  subsidy?: string;
  financing?: boolean;
  amenities?: string[];
  images: PropertyImage[];
  tags: string[];
};

export type LeadSource = "web" | "whatsapp" | "referral" | "campaign";

export type Lead = {
  id: string;
  name: string;
  phone: string;
  budgetRange: string;
  purchaseTimeline: string;
  source: LeadSource;
  temperature: LeadTemperature;
  score: number;
  createdAt: string;
};
