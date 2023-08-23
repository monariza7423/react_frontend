import { FC, memo } from "react";
import { Link } from "react-router-dom";
import '../../style/Header.scss';

export const Header: FC = memo(() => {
  return (
    <header>
      <div className="site-title">
        <h1><Link to="/">MyWork</Link></h1>
      </div>
      <nav>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/works">Works</Link></li>
          <li>News</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
});