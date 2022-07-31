import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import BookReview from "./Components/BookReview/BookReview";
import DashBoard from "./Components/DashBoard/DashBoard";
import Blogs from "./Components/Blogs/Blogs";
import NotFoundPage from "./Components/NotFoundPage/NotFoundPage";
import Review from "./Components/Review/Review";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/bookreview" element={<BookReview></BookReview>}></Route>
        <Route path="/dashBoard" element={<DashBoard></DashBoard>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/review" element={<Review></Review>}></Route>
        <Route path="*" element={<NotFoundPage></NotFoundPage>}></Route>
      </Routes>
    </div>
  );
}

export default App;
