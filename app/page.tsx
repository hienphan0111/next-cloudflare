import axios from 'axios';

const URL =
  'https://next-cloudflare-1hb.pages.dev/api/test-api' ||
  'http://localhost:3000/api/test-api';

export default async function Home() {
  const data: { data: any } = await axios.get(URL);
  console.log(data.data);
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <p className='text-white'>{data.data.hello}</p>
    </main>
  );
}
