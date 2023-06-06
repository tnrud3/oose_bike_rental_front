import React from 'react';
import './Read.css';

const Read = () => {
    const handleRead = (e) => {
        e.preventDefault();
        //TODO 읽기 처리 로직
    };

    return (
        <div className="read-page">
            <div className="read-content read-content-read">
                <div>
                    <h2>Read</h2>
                    <form className="wrapper-box" role="form" onSubmit={handleRead}>
                        <div className="form-control form-control-read">ID : il*****21</div>
                        <div className="form-control form-control-read">Name : 이순신</div>
                        <div className="form-control form-control-read">Phone : 010-****-****</div>
                        <div className="form-control form-control-read">E-mail : 123@a.com</div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Read;