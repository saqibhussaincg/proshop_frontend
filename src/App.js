import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Footer from "./components/Footer";
import Header from "./components/Header";
import {Container} from 'react-bootstrap';
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from './screens/ProductScreen';

function App() {
  return (
    <BrowserRouter>
    <Header />
    <main className="py-3">
      <Container>
    <Routes>
        <Route path="/" element={<HomeScreen />}></Route>
  {/* product path ka naam hai koi component nahi jo k Product.js walay component se araha hai */}
        <Route path="/product/:id" element={<ProductScreen />}></Route>
    </Routes>
      </Container>
    </main>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
