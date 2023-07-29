//import react router dom
import { Routes, Route } from "react-router-dom";

import ScanSiswa from "../views/ScanSiswa";
import Home from "../views/Home";
import Test from "../views/Test";

function RoutesIndex() {
  return (
    <Routes>
      {/* route "/" */}
      <Route path="/" element={<Home />} />

      {/* route "/posts" */}
      <Route path="/scan" element={<Test />} />

      {/* route "/posts" */}
      <Route path="/posts" element={<ScanSiswa />} />

      {/* route "/posts/create" */}
      <Route path="/posts/create" element={<ScanSiswa />} />

      {/* route "/posts/edit/:id" */}
      <Route path="/posts/edit/:id" element={<ScanSiswa />} />
    </Routes>
  );
}

export default RoutesIndex;
