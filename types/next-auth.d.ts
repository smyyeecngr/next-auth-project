import 'next-auth';
declare module 'next-auth' {
  interface Session {
    accessToken?: string;
    idToken?: string;
    user: {
      name?: string | null;
      email?: string | null;
      image?: string | null;
      role?: string;
    };
  }
  interface User {
    role?: string;
  }
}
