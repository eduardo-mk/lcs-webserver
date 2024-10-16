import NextAuth from 'next-auth';
import { googleAuthConfig } from '../../../services/google-oauth-config';

export default NextAuth(googleAuthConfig);
