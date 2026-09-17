export type PropertyType = 'Plot' | 'Apartment' | 'Villa' | 'Commercial';

export type Facing =
  | 'North' | 'South' | 'East' | 'West'
  | 'North-East' | 'North-West' | 'South-East' | 'South-West';

export type Approval = 'DTCP' | 'RERA' | 'CMDA' | 'Panchayat';

export type LandUse = 'Residential' | 'Commercial' | 'Farmland' | 'Industrial';

export interface Property {
  id: string;
  slug: string;
  title: string;
  projectName: string;
  builder: string;
  type: PropertyType;
  price: number; // in lakhs
  priceLabel: string;
  area: number; // sq ft
  location: string;
  corridor: string;
  city: string;
  address: string;
  coordinates: { lat: number; lng: number };
  status: 'Ready to Register' | 'Development in Progress' | 'New Launch';
  possession: string;
  description: string;
  highlights: string[];
  infrastructure: Infrastructure[];
  photos: string[];
  videoUrl?: string;
  nearbyPlaces: NearbyPlace[];
  priceBreakdown: PriceItem[];
  featured: boolean;
  newLaunch: boolean;
  createdAt: string;
  land?: LandDetails;
  bhk?: number | null;
  floorPlans?: FloorPlan[];
}

export interface LandDetails {
  use: LandUse;
  approvals: Approval[];
  approvalId: string;
  pricePerSqft: number;
  totalPlots: number;
  availablePlots: number;
  roadWidth: string;
  facingOptions: Facing[];
  appreciation: string;
  soil: string;
  waterSource: string;
  loanEligible: boolean;
  gatedCommunity: boolean;
  units: PlotUnit[];
  documents: LandDocument[];
}

export interface PlotUnit {
  id: string;
  number: string;
  area: number;
  dimensions: string;
  facing: Facing;
  corner: boolean;
  price: number;
  priceLabel: string;
  availability: 'Available' | 'On Hold' | 'Sold';
}

export interface LandDocument {
  name: string;
  detail: string;
  verified: boolean;
}

export interface Infrastructure {
  id: string;
  name: string;
  icon: string;
  category: 'Approvals' | 'Roads & Utilities' | 'Community' | 'Security';
}

export interface NearbyPlace {
  name: string;
  type: 'Metro' | 'School' | 'Hospital' | 'IT Park' | 'Airport' | 'Mall' | 'Highway' | 'Beach' | 'Park';
  distance: string;
  duration: string;
}

export interface PriceItem {
  label: string;
  amount: string;
}

export interface Corridor {
  id: string;
  name: string;
  slug: string;
  blurb: string;
  image: string;
  startingPrice: string;
  appreciation: string;
  drivers: string[];
}

export interface Layout {
  id: string;
  name: string;
  builder: string;
  location: string;
  category: PropertyType;
  status: 'Development in Progress' | 'Fully Sold' | 'New Launch';
  totalPlots: number;
  landArea: string;
  startingPrice: string;
  completionDate: string;
  description: string;
  coverImage: string;
  features: string[];
}

export interface Lead {
  id: string;
  name: string;
  mobile: string;
  email: string;
  propertyId: string;
  propertyTitle: string;
  budget: string;
  visitDate?: string;
  message?: string;
  status: 'New' | 'Contacted' | 'Hot' | 'Closed';
  createdAt: string;
}

export interface SiteVisit {
  id: string;
  propertyId: string;
  propertyTitle: string;
  name: string;
  mobile: string;
  date: string;
  time: string;
  visitors: number;
  status: 'Pending' | 'Confirmed' | 'Completed' | 'Cancelled';
}

export interface FloorPlan {
  id: string;
  bhk: number;
  area: number;
  price: number;
  priceLabel: string;
  imageUrl: string;
  description: string;
}
