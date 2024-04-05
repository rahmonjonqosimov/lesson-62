import Header from "./components/header/Header.js";
import Categories from "./components//categories/Categories.js";
import Topheader from "./components/topheader/Topheader.js";
import Products from "./components//products/Products.js";
import Hero from "./components/hero/Hero.js";
function App() {
  return (
    <div className="App">
      <Topheader />
      <Header />
      <Hero />
      <Categories />
      <Products />
    </div>
  );
}

export default App;
