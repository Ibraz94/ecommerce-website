import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
  useCdn: process.env.NODE_ENV === "production",
  stega: {
    studioUrl: process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}/studio`
    : `${process.env.NEXT_PUBLIC_BASE_URL}/studio`,
  }
})
