import NextAuth from "next-auth"
import GitHubProvider from "next-auth/providers/github"
import { connectToDb } from "./utils"
import { User } from "./models"

export const { 
  handlers: { GET, POST }, 
  auth,
  signIn, 
  signOut 
} =  NextAuth({ 
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID, 
      clientSecret: process.env.GITHUB_SECRET
    })
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      console.log(profile)

      if (account.provider === "github") {
        connectToDb()
        console.log("Connected to database")
        
        try {
          const user = await User.findOne({ email: profile.email })
          if (!user) {
            const newUser = new User({
              userName: profile.login,
              email: profile.email,
              image: profile.avatar_url,
            })

            await newUser.save()
          }
        } catch (error) {
          console.log(error)
          return false
        }
      }
      return true
    }
  }
})
