import axios from 'axios';

export default function Machine() {
  const handleSubmit = (event) => {
    event.preventDefault();
    //aquí va el post
    axios('/', 'post', { post: event }, functions.handleSubmit);
  };

  return (
    <form
      onSubmit={handleSubmit}
      action="http://localhost:3000/api/machines"
      method="post"
    >
      <title>Create new Machine</title>
      <label htmlFor="createMachine">reference</label>
      <input type="text" name="reference" required />
      <label htmlFor="">Marca</label>
      <input type="text" name="brand" required />
      <label htmlFor="name"> Año del modelo </label>
      <input type="number" name="model" max="2100" min="1900" required />
      <label htmlFor="name">Descrpcion</label>
      <input type="text-area" name="description" required />
      <label htmlFor="name">Placa</label>
      <input type="text" name="numberPlate" required />
      <button type="submit">Submit</button>
    </form>
  );
}
