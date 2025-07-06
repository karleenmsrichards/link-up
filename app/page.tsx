'use client';

import Navbar from '../components/Navbar';

export default function Profile() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen p-6 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Your Profile</h1>
        <p>User profile details will go here.</p>
      </main>
    </>
  );
}

