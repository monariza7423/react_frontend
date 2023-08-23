import { FC, memo } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../components/pages/Home";
import { About } from "../components/pages/About";
import { Page404 } from "../components/pages/Page404";
import { Works } from "../components/pages/Works";

export const Router: FC = memo(() => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" >
          <Route index={true} element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/works" element={<Works />} />
        </Route>
        <Route path="/*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
});