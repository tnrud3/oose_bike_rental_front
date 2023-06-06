import React from 'react';
import {Link } from 'react-router-dom';

function BicyclePage(){
    return(
        <div className = "container">
            <div class = "header">
                자전거 관리
            </div>
            <div>
                <Link to="/bicycle/search">
                    <button class = "SearchBtn">
                        자전거 검색
                    </button>
                </Link>
            </div>
            <div>
                <Link to="/bicycle/insert">
                    <button class = "InsertBtn">
                        자전거 등록
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default BicyclePage;