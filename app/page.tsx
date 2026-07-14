'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [data, setData] = useState<{ message: string; timestamp: string } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/hello')
      .then((res) => res.json())
      .then((data: any) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-900 text-white">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex flex-col gap-4">
        <h1 className="text-4xl font-bold mb-8 text-orange-500">Next.js on Cloudflare Pages</h1>
        
        <div className="p-6 border border-gray-700 rounded-xl bg-gray-800 w-full max-w-md">
          <h2 className="text-xl font-semibold mb-2">API Response:</h2>
          {loading ? (
            <p className="text-gray-400">Loading from Edge...</p>
          ) : data ? (
            <div className="space-y-2">
              <p className="text-green-400 font-bold">{data.message}</p>
              <p className="text-xs text-gray-500">Fetched at: {data.timestamp}</p>
            </div>
          ) : (
            <p className="text-red-400">Failed to fetch data.</p>
          )}
        </div>
      </div>
    </main>
  );
}
