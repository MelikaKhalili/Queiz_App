import { Route, Routes } from "react-router-dom";
import Login from "../Login/Login";
import Questions from "../Questions/Questions";
import Results from "../Results/Results";
import Review from "../Review/Review";
import Setup from "../Setup/Setup";

export default function RouterApp() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/setup" element={<Setup />} />
      <Route path="/questions" element={<Questions />} />
      <Route path="/results" element={<Results />} />
      <Route path="/review" element={<Review />} />
    </Routes>
  );
}
