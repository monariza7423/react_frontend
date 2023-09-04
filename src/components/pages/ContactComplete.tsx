import { FC, memo } from "react";
import { Header } from "../layout/Header";
import { Footer } from "../layout/Footer";
import { Link } from "react-router-dom";

export const ContactComplete: FC = memo(() => {
  return(
    <>
      <Header />
      <h1>お問合わせを受け付けました</h1>
      <Link to="/contact">戻る</Link>
      <Footer />
    </>
  )
})