import axios from "axios";
import { FC, memo, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "../layout/Header";
import { Footer } from "../layout/Footer";
import "../../style/NewsIndex.scss";

type News = {
  id: number;
  title: string;
  text: string;
  avatar: string;
  created_at: string;
};

export const NewsIndex: FC = memo(() => {
  const [ news, setNews ] = useState<News[]>([{
    id: 0,
    title: "",
    text: "",
    avatar: "",
    created_at: "",
  }]);

  const [ maxDisplay, setMaxDisplay] = useState(5);
  const [ allNewsDisplayed, setAllNewsDisplayed] = useState(false);

  function formatDate(dateString: string): string {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    return `${year}.${month}.${day}`;
  }

  useEffect(() => {
    axios
      .get('http://127.0.0.1:8000/api/news')
      .then((res) => {
        setNews(res.data);
        if (res.data.length <= 5) {
          setAllNewsDisplayed(true);
        }
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <Header />
      <div className="news wrapper">
        <h1 className="page-title">NEWS</h1>
        <dl>
          {news.slice(0, maxDisplay).map((news) => (
            <>
              <dt>{formatDate(news.created_at)}</dt>
              <dd><Link className="link" to={`/news/${news.id}`}>{news.title}</Link></dd>
            </>
          ))}
        </dl>
        {!allNewsDisplayed && (
          <button
            onClick={() => {
              if (maxDisplay + 5 >= news.length){
                setAllNewsDisplayed(true);
              }
              setMaxDisplay(prevMax => prevMax + 5);
            }}
          >
            さらに見る
          </button>
        )}
      </div>
      <Footer />
    </>
  )
})