import meetup from '../siteConfig';

const serverUrl = process.env.SERVER_URL || 'http://localhost:3000';


export const publicRuntimeConfig = {
  // Will be available on both server and client
  meetup,
  serverUrl,
};
