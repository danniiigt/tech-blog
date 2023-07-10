import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import prisma from "@/lib/prisma";

export async function getSession(req = null, res = null) {
  if (req && res) {
    return await getServerSession(req, res, authOptions);
  }

  return await getServerSession(authOptions);
}

export default async function getCurrentUser(req = null, res = null) {
  try {
    const session = await getSession(req, res);

    if (!session?.user?.email) {
      return null;
    }

    const currentUser = await prisma.user.findUnique({
      where: {
        email: session.user.email,
      },
    });

    if (!currentUser) {
      return null;
    }

    return {
      ...currentUser,
      createdAt: currentUser.createdAt.toISOString(),
      updatedAt: currentUser.updatedAt.toISOString(),
      emailVerified: currentUser.emailVerified?.toISOString() || null,
      hashedPassword: null,
    };
  } catch (error) {
    return null;
  }
}
