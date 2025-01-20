import { createClient } from 'next-sanity';

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "i7r8upi1",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  useCdn: true,
  apiVersion:"2025-01-20",
  token: process.env.SANITY_API_READ_TOKEN,
  });

  export default client;

  
