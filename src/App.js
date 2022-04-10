import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import BookReview from "./Components/BookReview/BookReview";
import DashBoard from "./Components/DashBoard/DashBoard";
import Blogs from "./Components/Blogs/Blogs";
import NotFoundPage from "./Components/NotFoundPage/NotFoundPage";

function App() {
  return (
    <div className="App">
      <h2>Welcome to my Home.</h2>
      <Navbar></Navbar>
      <Routes>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/bookReview" element={<BookReview></BookReview>}></Route>
        <Route path="/dashBoard" element={<DashBoard></DashBoard>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="*" element={<NotFoundPage></NotFoundPage>}></Route>
      </Routes>
    </div>
  );
}

export default App;
