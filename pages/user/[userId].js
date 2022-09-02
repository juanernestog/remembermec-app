import { useRouter } from 'next/router';

export default function users() {
  const router = useRouter();
  const { userId } = router.query;

  return (
    <>
      <h1>Users</h1>
      <p>Hello {userId}!</p>
    </>
  );
}
