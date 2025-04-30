export const meta = () => {
  return [{ title: '여행을 떠나요 - 상품' }];
};

export default function Product() {
  return (
    <section className="product-detail">
      <h1>제주도 3박 4일 패키지</h1>
      <p>
        푸른 바다, 한라산, 전통과 현대가 어우러진 제주에서 잊지 못할 여행을 즐겨보세요.
      </p>
      <table className="schedule">
        <thead>
          <tr>
            <th>일차</th>
            <th>일정</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1일차</td>
            <td>공항 도착 후 숙소 이동, 자유시간</td>
          </tr>
          <tr>
            <td>2일차</td>
            <td>성산일출봉, 우도 투어</td>
          </tr>
          <tr>
            <td>3일차</td>
            <td>한라산 국립공원, 전통시장</td>
          </tr>
          <tr>
            <td>4일차</td>
            <td>기념품 쇼핑 후 공항 이동</td>
          </tr>
        </tbody>
      </table>

      <section className="inclusions">
        <h2>포함 내역</h2>
        <ul>
          <li>왕복 항공권</li>
          <li>호텔 숙박 3박</li>
          <li>현지 가이드 투어</li>
          <li>조식 포함</li>
        </ul>
        <h2>불포함 내역</h2>
        <ul>
          <li>개인 경비</li>
          <li>자유 시간 중 식비</li>
        </ul>
      </section>
    </section>
  );
}
