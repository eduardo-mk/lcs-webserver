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
        },
      },
      profile(profile) {
        return {
          id: profile.sub,
          email: profile.email,
          name: profile.name,
          firstName: profile.given_name,
          lastName: profile.family_name,
          email_verified: profile.email_verified,
        };
      },
      style: { logo: '/google.svg', bg: '#fff', text: '#000' },
    }),
  ],
  callbacks: {
    async session({ session, token, user }) {
      if (
        token &&
        typeof token.firstName === 'string' &&
        typeof token.lastName === 'string'
      ) {
        session.user.firstName = token.firstName;
        session.user.lastName = token.lastName;
        if(typeof token.email_verified === 'boolean') {
          session.user.email_verified = token.email_verified
        }

      }
      return session;
    },
    async jwt({ token, user }) {
      // Add firstName and lastName to the JWT token if user exists
      if (user) {
        token.firstName = user.firstName;
        token.lastName = user.lastName;
        token.email_verified = user.email_verified;
      }
      return token;
    },
  },
};
