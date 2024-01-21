import { useState } from "react";
import { collection, getFirestore, addDoc } from "firebase/firestore";
import Swal from 'sweetalert2';

const CreateProduct = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [category, setCategory] = "";

  const handleCreateProduct = () => {
    const data = {
      title,
      description,
      price,
      thumbnail,
      category,
    };
    const db = getFirestore();

    if (title === '' || description === '' || price === '' || thumbnail === '' || category === '') {
      return (
        Swal.fire({
      icon: "warning",
      title: "Alerta",
      text: "Debe completar todos los campos",
    }
    ))
    };

    const productCollection = collection(db, "products");
    addDoc(productCollection, data).then({ id });
  };
  return (
    <div>
      <h1>Crear Producto</h1>
      <input
        type="text"
        placeholder="Titulo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="text"
        placeholder="Descripción"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <input
        type="number"
        placeholder="Precio"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <input
        type="text"
        placeholder="Imagen"
        value={thumbnail}
        onChange={(e) => setThumbnail(e.target.value)}
      />

      <input
        type="text"
        placeholder="Categoria"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />

      <button onClick={handleCreateProduct}>Crear</button>
    </div>
  );
};


export default CreateProduct;
