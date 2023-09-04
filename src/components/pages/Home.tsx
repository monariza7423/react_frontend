import { FC, memo, useEffect, useState } from "react";
import { Header } from "../layout/Header";
import { Footer } from "../layout/Footer";
import '../../style/Home.scss';
import axios from "axios";
import { Link } from "react-router-dom";
import type { News } from "../../types/news";
import type { Work } from "../../types/work";

export const Home: FC = memo(() => {
  const [ works, setWorks ] = useState<Work[]>([]);

  useEffect(() => {
    axios
      .get('http://127.0.0.1:8000/api/work', {
        params: {
          limit: 6
        }
      })
      .then((res) => setWorks(res.data))
      .catch((error) => console.log(error));
  },[]);

  const [ news, setNews ] = useState<News[]>([]);

  function formatDate(dateString: string): string {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    return `${year}.${month}.${day}`;
  }

  useEffect(() => {
    axios
      .get('http://127.0.0.1:8000/api/news', {
        params: {
          limit: 3
        }
      })
      .then((res) => setNews(res.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <Header />
      <div className="main-visual"></div>
      <div className="wrapper">
        <div className="home-works">
          <h2 className="section-title">WORKS</h2>
          <nav>
            <ul>
              {works.map((work) => (
                <li key={work.id}><img src={work.avatar} alt="ワーク画像" /></li>
              ))}
            </ul>
          </nav>
          <Link to="/works" className="home-link">See more</Link>
        </div>
        <div className="home-news">
          <h2 className="section-title">NEWS</h2>
          <dl>
            {news.map((news) => (
              <>
                <dt>{formatDate(news.created_at)}</dt>
                <dd><Link className="link" to={`/news/${news.id}`}>{news.title}</Link></dd>
              </>
            ))}
          </dl>
          <Link to="/news" className="home-link">See more</Link>
        </div>
      </div>
      <Footer />
    </>
  )
})