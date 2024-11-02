import NextAuth from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      email: string;
      name: string;
      image?: string;
      firstName: string;
      lastName: string;
      email_verified: boolean;
    };
  }

  interface User {
    id: string;
    email: string;
    image?: string;
    firstName: string;
    lastName: string;
    email_verified: boolean;
  }
}