const Product = () => {
    const products = [
        { id: 1, name: "Laptop", price: 1200 },
        { id: 2, name: "Phone", price: 800 },
        { id: 3, name: "Tablet", price: 400 },
        { id: 4, name: "Monitor", price: 300 }
    ];

    const highProducts = products.filter((value) => value.price > 500)

    return(
        <ol>
            {
                highProducts.map((value) => (
                    <li key={value.id}>
                        {value.name}: {value.price}
                    </li>
                ))
            }
        </ol>
    )
}
export default Product;