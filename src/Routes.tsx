import { Route, Routes } from "react-router-dom";

import Home from "./pages/HomePage/Home";
import GamesList from "./pages/GamesList/GamesList";
import GameDetails from "./pages/GameDetails/GameDetails";
import SearchPage from "./pages/Search/SearchPage";
import Developers from "./pages/Developers/Developers";
import Publishers from "./pages/Publishers/Publishers";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/games" element={<GamesList />} />
      <Route path="/games/:gameId" element={<GameDetails />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/developers" element={<Developers />} />
      <Route path="/publishers" element={<Publishers />} />
    </Routes>
  );
};

export default AppRoutes;
