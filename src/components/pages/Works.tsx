import { FC, memo, useEffect, useState } from "react";
import { Header } from "../layout/Header";
import { Footer } from "../layout/Footer";
import axios from "axios";
import '../../style/Works.scss'

type Work = {
  id: number;
  title: string;
  text: string;
  avatar: string;
};

export const Works: FC = memo(() => {
  const [ works, setWorks ] = useState<Work[]>([{
    id: 0,
    title: "",
    text: "",
    avatar: "",
  }]);

  useEffect(() => {
    axios
      .get('http://127.0.0.1:8000/api/work')
      .then((res) => setWorks(res.data))
      .catch((error) => console.log(error));
  },[]);


  return (
    <>
      <Header />
      <div className="wrapper">
        <h1 className="page-title">WORKS</h1>
        <ul className="works-list">
          {works.map((work) => (
            <li key={work.id}>
              <img className="works-image" src={work.avatar} alt="ワーク画像" />
              <p className="title">{work.title}</p>
              <p className="text">{work.text}</p>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </>
  )
})