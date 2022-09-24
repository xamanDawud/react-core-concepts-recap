import logo from "./logo.svg";
import "./App.css";

function App() {
  let products = [
    { name: "Laptop", Price: 50000 },
    { name: "Tablet", Price: 30000 },
    { name: "Iphone", Price: 90000 },
    { name: "Desktop", Price: 150000 },
    { name: "Mac Air", Price: 13000 },
    { name: "Laptop Bag", Price: 3000 },
  ];
  return (
    <div className="App">
      {products.map((product) => (
        <Products name={product.name} price={product.Price}></Products>
      ))}

      {/* <Products name="Bottole" price="2354"></Products>
      <Products name="Book" price="$234"></Products> */}
    </div>
  );
}

function Products(props) {
  return (
    <div className="products_style">
      <h1>Name: {props.name}</h1>
      <p>Price: {props.price}</p>
    </div>
  );
}

export default App;
