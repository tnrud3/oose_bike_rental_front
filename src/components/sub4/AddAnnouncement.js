import "./AddAnnouncement.css"

export default function AddAnnouncement() {
    return(
        <div className="add_container">
            <div className="input_container">
                <input className="title_input" placeholder="제목을 입력해주세요"/>
                <br />
                <input className="content_input" placeholder="내용을 입력해주세요"/>
            </div>
        </div>
    )
}