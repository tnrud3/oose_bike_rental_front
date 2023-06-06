import "./Table.css"

function Table({data}) {
    const colums = ["No", "Title"]
    return(
        <div className="table_container">
            <table className="announce_table">
                <thead>
                    <tr>
                        {colums.map((colum) => (
                            <th>{colum}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                {data.map(({No, Title}) => (
                    <tr>
                        <td>{No}</td>
                        <td>{Title}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table
