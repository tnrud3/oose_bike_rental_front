import {Link} from "react-router-dom";
import "./Header.css"

export default function Header() {
    return(
        <div className="main_container">
            <Link to="/"><span>메인</span></Link>
            <Link to="/signUp"><span>회원가입</span></Link>
            <Link to="/userInqury"><span>사용자 정보 조회</span></Link>
            <Link to="/rentalBike"><span>자전거 대여</span></Link>
            <Link to="/useageInqury"><span>이용 내역 조회</span></Link>
            <Link to="/paymentInqury"><span>결제 내역 조회</span></Link>
            <Link to="/statistics"><span>자전거 이용시간 통계</span></Link>
            <Link to="/announcement"><span>공지사항</span></Link>
            <Link to="/bicycle"><span>자전거 관리</span></Link>
            <Link to="/rentalOffice"><span>대여소 관리</span></Link>
        </div>
    )
}