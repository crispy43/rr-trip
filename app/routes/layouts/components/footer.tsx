export default function Footer() {
  return (
    <footer>
      <div className="container flex flex-col gap-[83px] pt-[124px]">
        <div className="flex justify-between text-[23px]/[1.5] font-semibold text-[#ffffff]">
          <span>개인정보취급방침</span>
          <span>이용약관</span>
          <span>선불충전금 운용내역 안내</span>
          <span>민원접수</span>
          <span>고객센터</span>
        </div>
        <div className="mt-[9px] text-[23px]/[1.5] font-normal text-[#ffffff]">
          <p>
            주식회사 씨드파이낸셜 | 서울시 금천구 가산디지털2로 144, 현대테라타워 가산 DK
            507-508호
          </p>
          <p className="flex gap-[50px]">
            <span>T. 02) 862 - 6446</span>
            <span>|</span>
            <span>F. 02) 555-6985</span>
            <span>|</span>
            <span>사업자번호 : 320-86-02487</span>
            <span>|</span>
            <span>대표자 : 권성호</span>
          </p>
          <p className="mt-[31px]">All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
