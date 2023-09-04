import axios from "axios";
import { FC, memo, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Header } from "../layout/Header";
import { Footer } from "../layout/Footer";
import "../../style/NewsDetail.scss";
import type { News } from "../../types/news";


export const NewsDetail: FC = memo(() => {
  const { newsId } = useParams<{ newsId: string }>();
  const [ news, setNews ] = useState<News | null >(null);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/news/${newsId}`)
      .then((res) => {
        console.log('res  ', res)
        setNews(res.data)
      })
      .catch((error) => console.log(error));
  },[newsId]);

  function formatDate(dateString: string): string {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    return `${year}.${month}.${day}`;
  }

  return (
    <>
      <Header />
      <div className="single wrapper">
        <h1 className="page-title">{news?.title}</h1>
        <div className="news-content">
          <p className="date">{news ? formatDate(news.created_at) : 'Loading...'}</p>
          <div className="content" dangerouslySetInnerHTML={{ __html: news?.html_content || '' }} />
        </div>
        <Link className="news-link" to="/news">一覧に戻る</Link>
      </div>
      <Footer />
    </>
  );
});