import { useRouter } from 'next/router';
import Footer from '../../components/Footer';
import NavUser from '../../components/NavUser';

export default function serPage() {
  const router = useRouter();
  const { userId } = router.query;
  return (
    <>
      {/* <NavUser /> */}
      <h1>Users Page</h1>
      <p>Welcome {userId}</p>
      <Footer />
    </>
  );
}
