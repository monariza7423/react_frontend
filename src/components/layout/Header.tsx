import { FC, memo } from "react";
import { Link } from "react-router-dom";
import '../../style/Header.scss';

export const Header: FC = memo(() => {
  return (
    <header>
      <div className="site-title">
        <h1>
          <Link to="/">
            <img src="/images/logo.svg" alt="mywork logo" />
          </Link>
        </h1>
      </div>
      <nav>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/works">Works</Link></li>
          <li><Link to="/news">News</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
});