import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

export default async function AdminPage() {
  const session = await getServerSession(authOptions);
  return (
    <main className="p-10">
      <h1 className="text-3xl">Admin Panel</h1>
      <p>Only for admins. You are {session?.user?.role}</p>
    </main>
  );
}
