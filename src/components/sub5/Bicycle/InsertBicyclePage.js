
function InsertBicyclePage(){

    return(
        <div className="InsertBicyclePage">
            <div className="header">
                <h1>대여소 등록</h1>
            </div>
            <div className = "bicycleID">
                <span>자전거 ID:</span>
                <input type="text" placeholder="자전거 ID 입력" />
            </div>
            <button className="InsertBtn">등록</button>
        </div>
    );

}

export default InsertBicyclePage;