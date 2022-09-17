import { useRouter } from 'next/router';

export default function serPage() {
  const router = useRouter();
  const { userId } = router.query;
  return (
    <>
      <h1>Users Page</h1>
      <p>Welcome {userId}</p>
    </>
  );
}
