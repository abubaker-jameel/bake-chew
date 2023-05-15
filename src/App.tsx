import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import { Home, About, Order, Contact, Error } from "./pages/index";
import { profileImg } from "./assets";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Home title="designer cake at your doorstep" />}
        />
        <Route
          path="/about"
          element={
            <About
              title="about me"
              paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis laudantium soluta neque minus, eligendi animi. Ullam delectus sapiente maxime consectetur quia, doloribus vel. Harum reiciendis iure obcaecati optio illum totam repellat libero sequi ab magni, quasi non maiores. Libero veniam tempore repellendus optio consectetur, eos quae voluptates quia omnis excepturi earum odit recusandae, id nulla iure ex nobis reprehenderit itaque dicta facilis laborum aliquam, illum minima deleniti. Dolore inventore voluptatum recusandae vitae ducimus fuga quo perferendis error quidem, necessitatibus explicabo mollitia? Quisquam tenetur, iste delectus neque quibusdam cum at a sit, tempora earum et dicta voluptatem similique officia sint animi."
              image={profileImg}
              imageName="profileImage"
            />
          }
        />
        <Route path="/order" element={<Order />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};

export default App;
