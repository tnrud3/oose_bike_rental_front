

function InsertRentalOfficePage(){

    return(
        <div className="InsertRentalOfficePage">
            <div className="header">
                <h1>대여소 등록</h1>
            </div>
            <div className="body">
                <div className = "InsertID">
                    <span>대여소 ID:</span>
                    <input type="text" placeholder="대여소 ID 입력" />
                </div>
                <div className = "InsertName">
                    <span>대여소 이름:</span>
                    <input type="text" placeholder="대여소 이름 입력"/>
                </div>
                <div className = "managerID">
                    <span>관리자 이름:</span>
                    <input type="text" placeholder="관리자 ID 입력" />
                </div>
                <button className="InsertBtn">등록</button>
            </div>
        </div>
    );
}

export default InsertRentalOfficePage;