import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ActivityPage from "./pages/ActivityPage";
import Hero from "./components/Hero";
import Foodcourt from "./pages/foodcourt";
import RestaurantPage from "./pages/Restraunt";
import About from "./pages/About";
import PlayYourWay from "./components/PlayYourWay";
import NowPlaying from "./components/NowPlaying";
import BookSlot from "./components/BookSlot";
import Marquee from "./components/Marquee";
import Footer from "./components/Footer";
import Events from "./pages/Events";

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <PlayYourWay />
              <NowPlaying />
              <BookSlot />
              <Marquee />
              <Footer />
            </>
          }
        />
        <Route path="/foodcourt" element={<Foodcourt />} />
        <Route path="/events" element={<Events />} />
        <Route path="/about" element={<About />} />
        <Route path="/restaurant" element={<RestaurantPage />} />
        <Route path="/activities/:activityName" element={<ActivityPage />} />
      </Routes>
    </div>
  );
}

export default App;
