import { FC, memo } from "react";
import { Header } from "../layout/Header";
import { Footer } from "../layout/Footer";
import '../../style/About.scss'

export const About: FC = memo(() => {
  return(
    <>
      <Header />
      <div className="wrapper">
        <h1 className="page-title">ABOUT</h1>
        <div className="content">
          <p className="space">Xxxxx Ashley</p>
          <p className="space">
            2th Floor xxxxx Building x-x-x Nishiazabu, Minato-ku, Tokyo 106-0031 Japan
            <br />
            tel: 000-0000-0000
            <br />
            url: www.xxxxxx.jp
            <br />
            mail: xxx@xxxxxx.jp
          </p>
          <p>プロフィールテキストテキストテキストテキストテキストテキストテキストテキストテキストストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
        </div>
      </div>
      <Footer/>
    </>
  );
});