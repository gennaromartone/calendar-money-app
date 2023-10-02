import Image from "next/image";
import Link from "next/link";
import AuthForm from "@/modules/auth/auth-form";
import { sql } from '@vercel/postgres';

export default async function Login() {
  console.log(process.env);
  const pets = await sql`SELECT * FROM Users;`;
  //const users = await prisma.users.findMany();
  console.log('USERS', pets);

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gray-50">
      <div className="z-10 w-full max-w-md overflow-hidden rounded-2xl border border-gray-100 shadow-xl">
        <div className="flex flex-col items-center justify-center space-y-3 border-b border-gray-200 bg-white px-4 py-6 pt-8 text-center sm:px-16">
          <Link href="/">
            <Image
              src="/logo.png"
              priority
              alt="Logo"
              className="h-10 w-10 rounded-full"
              width={20}
              height={20}
            />
          </Link>
          <h3 className="text-xl font-semibold">Sign In</h3>
          <p className="text-sm text-gray-500">
            Use your email and password to sign in
          </p>
        </div>
        <AuthForm type="login" />
      </div>
    </div>
  );
}