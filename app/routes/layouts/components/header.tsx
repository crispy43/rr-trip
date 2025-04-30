import { Link } from 'react-router';

export default function Header() {
  return (
    <header>
      <div className="container">
        <h1>여행을 떠나요</h1>
        <nav>
          <ul className="nav">
            <li>
              <Link to="/">홈</Link>
            </li>
            <li>
              <Link to="/product">여행 상품</Link>
            </li>
            <li>
              <Link to="/reservation">예약/문의</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
