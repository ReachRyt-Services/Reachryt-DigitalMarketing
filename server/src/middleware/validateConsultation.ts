import { z } from 'zod';

export const SERVICE_INTEREST_OPTIONS = [
  'whatsapp-automation',
  'instagram-dm-workflows',
  'white-label-services',
  'admission-campaign-marketing',
  'education-seo-digital-growth',
  'full-stack-education-automation',
] as const;

export const INSTITUTION_TYPE_OPTIONS = [
  'school',
  'college',
  'university',
  'coaching-training',
  'educational-organization',
  'agency-partner',
] as const;

const stripTags = (val: string) => val.replace(/<[^>]*>?/gm, '').trim();

export const consultationSchema = z.object({
  fullName: z
    .string()
    .transform(stripTags)
    .pipe(
      z
        .string()
        .min(2, 'Please enter your full name (at least 2 characters).')
        .max(100, 'Name cannot exceed 100 characters.')
    ),
  institutionName: z
    .string()
    .transform(stripTags)
    .pipe(
      z
        .string()
        .min(2, 'Please enter your institution or agency name.')
        .max(150, 'Institution name cannot exceed 150 characters.')
    ),
  institutionType: z.enum(INSTITUTION_TYPE_OPTIONS, {
    errorMap: () => ({ message: 'Please select a valid institution or partner type.' }),
  }),
  workEmail: z
    .string()
    .trim()
    .toLowerCase()
    .email('Please enter a valid work email address.')
    .max(120, 'Email cannot exceed 120 characters.'),
  phoneNumber: z
    .string()
    .transform(stripTags)
    .pipe(
      z
        .string()
        .min(7, 'Please enter a valid contact phone or WhatsApp number.')
        .max(25, 'Phone number cannot exceed 25 characters.')
        .regex(/^[+\d\s\-()]+$/, 'Phone number can only contain digits, spaces, +, -, and parentheses.')
    ),
  serviceInterest: z.enum(SERVICE_INTEREST_OPTIONS, {
    errorMap: () => ({ message: 'Please select the primary service you are interested in.' }),
  }),
  message: z
    .string()
    .transform(stripTags)
    .pipe(
      z
        .string()
        .min(10, 'Please share a brief overview of your requirements (at least 10 characters).')
        .max(2000, 'Message cannot exceed 2000 characters.')
    ),
});

export type ConsultationInput = z.infer<typeof consultationSchema>;
