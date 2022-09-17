import { useRouter } from 'next/router';

export default function users({ dataUser, dataMachine }) {
  // const router = useRouter();
  // const { userId } = router.query;
  console.log(dataMachine);

  return (
    <>
      <h1>Users</h1>
      <p>Hello {dataUser.data.name}!</p>
      <h1> Tus maquinas</h1>
      {dataMachine.data.map((machine) => {
        return <h1 key={machine._id}> {machine.reference}</h1>;
      })}
    </>
  );
}

export async function getServerSideProps({ params }) {
  // primera carga de la pagina dentro de pagina
  const user = await fetch(`http://localhost:3000/api/users/${params.userId}`, {
    method: 'GET',
  });
  const dataUser = await user.json();

  const machines = await fetch(`http://localhost:3000/api/machines`, {
    method: 'GET',
  });
  const dataMachine = await machines.json();

  return {
    props: {
      dataUser,
      dataMachine,
    },
  };
}
