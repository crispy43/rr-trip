export const meta = () => {
  return [{ title: '여행을 떠나요 - 예약 / 문의' }];
};

export default function Reservation() {
  return (
    <>
      <h1 className="container">여행 예약 요청</h1>
      <form className="reservation-form">
        <div className="form-group">
          <label htmlFor="name">이름</label>
          <input type="text" id="name" name="name" placeholder="홍길동" />
        </div>

        <div className="form-group">
          <label htmlFor="phone">연락처</label>
          <input type="text" id="phone" name="phone" placeholder="010-1234-5678" />
        </div>

        <div className="form-group">
          <label htmlFor="date">여행 시작 날짜</label>
          <input type="date" id="date" name="date" />
        </div>

        <div className="form-group">
          <label htmlFor="people">인원 수</label>
          <select id="people" name="people">
            <option value="1">1명</option>
            <option value="2">2명</option>
            <option value="3">3명</option>
            <option value="4">4명 이상</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="message">기타 요청 사항</label>
          <textarea
            id="message"
            name="message"
            placeholder="특별히 요청하실 내용이 있다면 적어주세요."
          />
        </div>

        <div className="form-group checkbox">
          <input type="checkbox" id="agree" name="agree" />
          <label htmlFor="agree">이용 약관에 동의합니다</label>
        </div>

        <button type="submit" className="btn">
          예약 요청 보내기
        </button>
      </form>
    </>
  );
}
