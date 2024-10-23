import { compare } from 'bcrypt'
import { prisma } from '../../../../../lib/prisma'
import NextAuth, { type NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt'
  },
  pages: {
    signIn: '/login',
  },
  providers: [
    CredentialsProvider({
      name: 'Sign in',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'hello@example.com'
        },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) {
          throw new Error("Email and password are required");
        }

        const user = await prisma.user.findUnique({
          where: {
            Email: credentials.email
          }
        })

        if (!user) {
          throw new Error("User with given email was not found");
        }

        const isPasswordValid = await compare(
          credentials.password,
          user.Password
        )

        if (!isPasswordValid) {
          throw new Error("Invalid password");
        }

        return {
          id: user.Id + '',
          email: user.Email,
          name: `${user.FirstName} ${user.LastName}`,
        }
      }
    })
  ],
  callbacks: {
    session: ({ session, token }) => {
      // TODO: Add Picture?
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
        }
      }
    },
    jwt: ({ token, user }) => {
      if (user) {
        const u = user as unknown as any
        return {
          ...token,
          id: u.id,
        }
      }
      return token
    }
  }
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }