import React, { useEffect, useState } from 'react';
import { Button, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Detail.scss';
import "slick-carousel/slick/slick.css";
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';


function Footer(){
    return(
        <>
            <div className='footerText'>
                <hr />
                <span>
                    <a href='#'>회사소개</a>
                </span>
                <span>
                    <a href='#'>이용약관</a>
                </span>
                <span>
                    <a href='#'><strong>개인정보처리방침</strong></a>
                </span>
                <span>
                    <a href='#'>고객센터</a>
                </span>
                <p>Copyright 2021. 이기현 All rights reserved.</p>
            </div>
        </>
    )
}


export default Footer;