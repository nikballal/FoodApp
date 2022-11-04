import Header from "./components/Layout/Header";
import { Fragment, useState } from "react";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = (e) => {
    e.preventDefault();
    setCartIsShown(true);
  };

  const hideCartHandler = (e) => {
    e.preventDefault();
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart closeCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      {/* pass down to HeaderButton component */}
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
