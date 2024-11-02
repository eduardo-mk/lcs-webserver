const baseUrl = process.env.BACKEND_URL;
export const emailConfirmationUrl = `${baseUrl}/api/v1/patient/confirm-email-contact`;
export const registerUserUrl = `${baseUrl}/api/v1/patient/registration`;
export const googleOAuthRequestUrl = `${baseUrl}/api/v1/login/google-oauth/request`;
