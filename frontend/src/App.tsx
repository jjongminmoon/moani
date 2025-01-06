import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [menu, setMenu] = useState([]);
  const [hello, setHello] = useState<[]>([]);

  useEffect(() => {
    axios.get("/api/menuList").then((res) => {
      setMenu(res.data);
    });
  }, []);

  useEffect(() => {
    axios.get("/api/hello").then((res) => {
      setHello(res.data);
    });
  }, []);

  console.log(menu);

  return (
    <>
      <p>백엔드 데이터 : {hello}</p>
    </>
  );
}

export default App;
