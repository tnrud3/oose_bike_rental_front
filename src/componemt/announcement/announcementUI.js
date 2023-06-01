import Paging from "./Paging";

export default function Announcement() {
    const dummy = [
        "title1", "title2", "title3"
    ]

    return(
        <div className="main_container">

            <Paging last_page={dummy.length / 10 + 1}></Paging>
        </div>
    )
}