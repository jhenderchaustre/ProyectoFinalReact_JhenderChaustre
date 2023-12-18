const ItemListContainer = ({productsData}) => {
    console.log(productsData)
    return (
        <div style={{textAlign: 'center', marginTop: '230px', fontSize: '3rem'}}>
                <div>
                    {
                        productsData.map(products => {
                            return(
                                <div key={products.id}>
                                    <div>{products.title}</div>
                                    <div>{products.description}</div>
                                    <div>{products.price}</div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
    )
} 
export default ItemListContainer;