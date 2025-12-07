import { LucideIcon } from 'lucide-react';

/**
 * Navigation link structure
 */
export interface NavLink {
  name: string;
  href: string;
}

/**
 * Service offering with full details
 */
export interface ServiceOffering {
  icon: LucideIcon;
  title: string;
  colorClass: string;
  shadowColor: string;
  borderClass: string;
  description: string;
  items: string[];
}

/**
 * Statistics for outcomes section
 */
export interface Stat {
  label: string;
  value: number;
  suffix: string;
  icon: LucideIcon;
  color: string;
}

/**
 * Case study details
 */
export interface CaseStudy {
  client: string;
  title: string;
  resultVal: number;
  resultSuffix: string;
  desc: string;
  theme: string;
  gradient: string;
  border: string;
  shadow: string;
}

/**
 * Contact form data
 */
export interface ContactFormData {
  email: string;
  inquiry: 'strategy' | 'training' | 'pilot' | 'ictus-apps' | 'other' | 'general';
}

/**
 * Form state types
 */
export type FormState = 'idle' | 'submitting' | 'success' | 'error';
