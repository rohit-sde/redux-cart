import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
    {
        id: "p1",
        price: 9,
        title: "My First Book",
        description: "the first book i ever wrote ",
    },
    {
        id: "p2",
        price: 5,
        title: "My Second Book",
        description: "the Second book i ever wrote ",
    },
];
const Products = (props) => {
    return (
        <section className={classes.products}>
            <h2>Buy your favorite products</h2>
            <ul>
                {DUMMY_PRODUCTS.map((product) => (
                    <ProductItem
                        key={product.id}
                        title={product.title}
                        price={product.price}
                        description={product.description}
                    />
                ))}
            </ul>
        </section>
    );
};

export default Products;
