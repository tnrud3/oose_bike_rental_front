import "./AddAnnouncement.css"
import {Link} from "react-router-dom";

export default function AddAnnouncement() {
    return(
        <div className="container">
            <h2>공지사항 등록</h2>
            <div className="announce_input_container">
                <textarea className="title_input" placeholder="제목을 입력해주세요">

                </textarea>
                <br />
                <textarea className="content_input" placeholder="내용을 입력해주세요">

                </textarea>
            </div>
            <div className="button_container">
                <Link to="/announcement"><button className="add_button">등록</button></Link>
            </div>
        </div>
    )
}