import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { IconName } from "react-icons/im";
import Layout from "./Layout";
import Landing from "./Landing";
import Create from "./Create";
import Event from "./Event";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Landing />}/>
        <Route path="create" element={<Create />} />          
        <Route path="event" element={<Event />} />          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
