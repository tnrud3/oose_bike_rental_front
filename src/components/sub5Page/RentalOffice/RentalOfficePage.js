import React from 'react';
import {Link } from 'react-router-dom';

function RentalOfficePage(){
    return(
        <div className = "container">
            <div>
                <Link to="/rentalOffice/search">
                    <button class = "SearchBtn">
                        대여소 검색
                    </button>
                </Link>
            </div>
            <div>
                <Link to="/rentalOffice/insert">
                    <button class = "InsertBtn">
                        대여소 등록
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default RentalOfficePage;
