import { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export const googleAuthConfig: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.OAUTH_CLIENT_ID,
      clientSecret: process.env.OAUTH_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code',
          scope: 'profile email',
        }
      },
      profile(profile) {
        return {
            id: profile.sub,
            email: profile.email,
            name: profile.name
        }
      },
      style: { logo: "/google.svg", bg: "#fff", text: "#000"}
    }),
  ],
};
