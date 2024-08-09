import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export const options = {
  providers: [
    GithubProvider({
      profile(profile) {
        console.log("profile github:", profile);
        let userRole = "github user";
        if (profile?.email == "ugbeadie3@gmail.com") {
          userRole = "admin";
        }
        return {
          ...profile,
          role: userRole,
        };
      },
      clientId: process.env_GITHUB_ID,
      clientSecret: process.env_GITHUB_SECRET,
    }),
    GoogleProvider({
      profile(profile) {
        console.log("profile google:", profile);

        return {
          ...profile,
          id: profile.sub,
          role: userRole,
        };
      },
      clientId: process.env_GOOGLE_ID,
      clientSecret: process.env_GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.role = user.role;
      return token;
    },
    async session({ session, token }) {
      if (session?.user) session.user.role = token.role;
      return session;
    },
  },
};
