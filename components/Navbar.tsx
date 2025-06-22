'use client';
import { signIn, signOut, useSession } from 'next-auth/react';
export default function Navbar() {
  const { data: session } = useSession();
  return (
    <nav className="p-4 bg-gray-200 flex justify-between">
      <div>NextAuth App</div>
      <div>
        {session ? (
          <>
            <span className="mr-4">{session.user?.name}</span>
            <button onClick={() => signOut()}>Logout</button>
          </>
        ) : (
          <button onClick={() => signIn()}>Login</button>
        )}
      </div>
    </nav>
  );
}
