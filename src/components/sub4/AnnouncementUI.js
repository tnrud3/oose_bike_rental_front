import Table from "./Table"
import "./AnnouncementUI.css"
import Paging from "./Paging";
import {Link} from "react-router-dom";

export default function Announcement() {
    const dummy = [
        {No: 1, Title: "공지사항1", content: "1234"},
        {No: 2, Title: "공지사항2", content: "1234"},
        {No: 3, Title: "공지사항3", content: "1234"},
        {No: 4, Title: "공지사항4", content: "1234"}
    ]

    return(
        <div className="container">
            <h2>공지사항</h2>
            <Table data={dummy}></Table>
            <div className="button_container">
                <Link to="add"><button className="write_button">글쓰기</button></Link>
            </div>
        </div>
    )
}