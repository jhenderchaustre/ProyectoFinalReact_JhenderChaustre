import { useState } from "react"

const CreateProduct = () => {
    const [title, setTitle] = useState ("");
    const [description, setDescription] = useState ("");
    const [price, setPrice] = useState ("");
    const [thumbnail, setThumbnail] = useState ("");
    const [category, setCategory] = ("");
  return (
    <div>
       <h1>Crear Producto</h1>
       <input type="text" placeholder="Titulo" value= {title}/>
       <input type="text" placeholder="Descripción" value={description}/>
       <input type="number" placeholder="Precio" value={price}/>
       <input type="text" placeholder="Imagen" value={thumbnail}/>
       <input type="text" placeholder="Categoria" value={category}/>
       <button>Crear</button>
    </div>
  )
}

export default CreateProduct
