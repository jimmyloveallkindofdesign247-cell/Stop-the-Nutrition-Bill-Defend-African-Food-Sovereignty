/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface PetitionSignature {
  id: string;
  fullName: string;
  email: string;
  country: string;
  region: string;
  note?: string;
  timestamp: string;
  verified: boolean;
}

export interface ReportedBill {
  id: string;
  country: string;
  billTitle: string;
  legislativeBody: string;
  status: string;
  summary: string;
  reporterName: string;
  reporterEmail: string;
  dateReported: string;
}

export const CAMPAIGN_HASHTAGS = ['#StoptheNutritionBill', '#FreeAfrica'];
export const PRIMARY_HASHTAG = '#StoptheNutritionBill';
export const CAMPAIGN_URL = typeof window !== 'undefined' ? window.location.origin : 'https://stop-the-nutrition-bill.org';

export const BASE_SIGNATURE_COUNT = 12400;

export const INITIAL_SIGNATURES: PetitionSignature[] = [
  {
    id: 'sig-1',
    fullName: 'Dr. Amina Bello',
    email: 'a***@agroecology.org',
    country: 'Nigeria',
    region: 'Abuja FCT',
    note: 'Ancestral grains and traditional postpartum broths are our heritage. Criminalizing community nutrition advice is unacceptable.',
    timestamp: '5 minutes ago',
    verified: true,
  },
  {
    id: 'sig-2',
    fullName: 'Kwame Mensah',
    email: 'k***@heritagefoods.gh',
    country: 'Ghana',
    region: 'Accra',
    note: 'Solidarity from Ghana. We must stop this corporate template before it spreads through ECOWAS.',
    timestamp: '14 minutes ago',
    verified: true,
  },
  {
    id: 'sig-3',
    fullName: 'Wanjiku Mwangi',
    email: 'w***@farmersvoice.ke',
    country: 'Kenya',
    region: 'Nairobi',
    note: 'African food sovereignty belongs to our families, farmers, and elders. Stand united!',
    timestamp: '22 minutes ago',
    verified: true,
  },
  {
    id: 'sig-4',
    fullName: 'Chinedu Eze',
    email: 'c***@gmail.com',
    country: 'Nigeria',
    region: 'Enugu',
    note: 'HB 2659 will destroy informal herbal knowledge passed down for centuries. Withdraw it now.',
    timestamp: '35 minutes ago',
    verified: true,
  },
  {
    id: 'sig-5',
    fullName: 'Thabo Mokoena',
    email: 't***@africafreedom.za',
    country: 'South Africa',
    region: 'Johannesburg',
    note: 'Hands off indigenous African superfoods. No corporate patenting of our culinary roots!',
    timestamp: '48 minutes ago',
    verified: true,
  },
  {
    id: 'sig-6',
    fullName: 'Ngozi Adebayo',
    email: 'n***@diaspora.co.uk',
    country: 'Diaspora (UK)',
    region: 'London',
    note: 'The global diaspora stands with our people back home. Say no to centralized nutrition councils!',
    timestamp: '1 hour ago',
    verified: true,
  },
];

export const REGIONS_LIST = [
  { value: 'Nigeria', label: 'Nigeria (National Assembly Target)' },
  { value: 'Ghana', label: 'Ghana' },
  { value: 'Kenya', label: 'Kenya' },
  { value: 'South Africa', label: 'South Africa' },
  { value: 'Uganda', label: 'Uganda' },
  { value: 'Tanzania', label: 'Tanzania' },
  { value: 'Rwanda', label: 'Rwanda' },
  { value: 'Cameroon', label: 'Cameroon' },
  { value: 'Senegal', label: 'Senegal' },
  { value: 'Ethiopia', label: 'Ethiopia' },
  { value: 'Diaspora (UK)', label: 'Diaspora — United Kingdom' },
  { value: 'Diaspora (US)', label: 'Diaspora — United States' },
  { value: 'Diaspora (Canada)', label: 'Diaspora — Canada' },
  { value: 'Diaspora (Europe)', label: 'Diaspora — Europe' },
  { value: 'Diaspora (Global)', label: 'Diaspora — Other / Global' },
];

export const SAMPLE_TWEETS = [
  {
    title: 'Urgent Call to Action',
    text: 'African food sovereignty is under attack. Say NO to Nigeria’s HB 2659 and restrictive laws that criminalize traditional knowledge and corporate-regulate indigenous crops! Sign the petition & stand for #FreeAfrica. #StoptheNutritionBill',
  },
  {
    title: 'Defend Ancestral Wisdom',
    text: 'Grandmothers, herbal practitioners, and community healers have kept our people healthy for generations. We will not allow centralized boards to outlaw our culinary heritage! Join the fight: #StoptheNutritionBill #FreeAfrica',
  },
  {
    title: 'Exposing Corporate Monopoly',
    text: 'HB 2659 risks opening doors to foreign corporate control over native African diets while threatening uncertified community food guidance with heavy penalties. Say NO! #StoptheNutritionBill #FreeAfrica',
  },
];

export function generateSocialShareUrl(platform: string, customMessage?: string, url?: string): string {
  const shareUrl = encodeURIComponent(url || CAMPAIGN_URL);
  const defaultText = customMessage || `Say NO to HB 2659! Protect African Food Sovereignty & reject corporate control of our traditional heritage. #StoptheNutritionBill #FreeAfrica`;
  const encodedText = encodeURIComponent(defaultText);

  switch (platform.toLowerCase()) {
    case 'twitter':
    case 'x':
      return `https://twitter.com/intent/tweet?text=${encodedText}&url=${shareUrl}`;
    case 'facebook':
      return `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}&quote=${encodedText}`;
    case 'whatsapp':
      return `https://api.whatsapp.com/send?text=${encodedText}%20${shareUrl}`;
    case 'telegram':
      return `https://t.me/share/url?url=${shareUrl}&text=${encodedText}`;
    case 'reddit':
      return `https://www.reddit.com/submit?url=${shareUrl}&title=${encodedText}`;
    case 'threads':
      return `https://www.threads.net/intent/post?text=${encodedText}%20${shareUrl}`;
    case 'line':
      return `https://social-plugins.line.me/lineit/share?url=${shareUrl}&text=${encodedText}`;
    case 'wechat':
    case 'tiktok':
    case 'instagram':
    case 'youtube':
    case 'bilibili':
      // Platforms that do not have direct prefilled GET share URLs return the campaign URL or app link for copy/modal
      return shareUrl;
    default:
      return `https://twitter.com/intent/tweet?text=${encodedText}&url=${shareUrl}`;
  }
}

export function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

export function formatNumberWithCommas(num: number): string {
  return num.toLocaleString('en-US');
}

export const STORAGE_KEYS = {
  SIGNATURES: 'stnb_signatures_v1',
  USER_SIGNED: 'stnb_user_signed_v1',
  REPORTED_BILLS: 'stnb_reported_bills_v1',
};
