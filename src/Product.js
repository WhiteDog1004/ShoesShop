import React, { useEffect, useState } from 'react';
import { Button, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Detail.scss';
import "slick-carousel/slick/slick.css";
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';



function Product(){
    let [fadeBox, setFadeBox] = useState(null);

    useEffect(()=>{
        document.addEventListener('scroll', function () {
            let topOffset = window.pageYOffset;
            // console.log(topOffset)
            if(topOffset > 550) {
                setFadeBox(
                    <>
                        <div className='fadeLeftBox'>
                            <img src='./img/product.jpg' alt='product_01'/>
                        </div>
                        <div className="fadeRightBox">
                            <div>
                                <h2>가죽 부츠</h2>
                                <p>편안한 여행길을 위한 신발</p>
                                <Button variant="success" >자세히 보기 <FontAwesomeIcon icon={faAngleDoubleRight}/></Button>
                                <p>9월 중순 발매 예정</p>
                            </div>
                        </div>
                    </>
                )
            }
        });    
    }, [])


    return (
        <>
            <div className="productBox">
                { fadeBox }
            </div>
            <Col>
                <div className='row fourProductBox'>
                    <div className='col-md-4 firstProduct'>
                        <img src='./img/product2.jpg' alt='product_02'/>
                        <div className='productTextBox'>
                            <h2>Red Knitted shoes</h2>
                            <p>가벼운 느낌을 원하는 당신에게</p>
                            <Button variant="outline-dark" >자세히 보기 <FontAwesomeIcon icon={faAngleDoubleRight}/></Button>
                        </div>
                    </div>
                    <div className='col-md-4 secondProduct'>
                        <img src='./img/product3.jpg' alt='product_03'/>
                        <div className='productTextBox_02'>
                            <h2>Leather Shoes</h2>
                            <p>멋짐을 추구하고싶은 당신에게</p>
                            <Button variant="outline-dark" >자세히 보기 <FontAwesomeIcon icon={faAngleDoubleRight}/></Button>
                        </div>
                    </div>
                    <div className='col-md-4 thirdProduct'>
                        <img src='./img/product4.jpg' alt='product_04'/>
                        <div className='productTextBox_03'>
                            <h2>Leather Boots</h2>
                            <p>가을의 시작은 가죽 부츠로</p>
                            <Button variant="outline-light" >자세히 보기 <FontAwesomeIcon icon={faAngleDoubleRight}/></Button>
                        </div>
                    </div>
                    <div className='col-md-4 fourthProduct'>
                        <img src='./img/product5.jpg' alt='product_05'/>
                        <div className='productTextBox_04'>
                            <h2>Jordan Shoes</h2>
                            <p>최고의 만족감을 선사해주는 신발</p>
                            <Button variant="outline-light" >자세히 보기 <FontAwesomeIcon icon={faAngleDoubleRight}/></Button>
                        </div>
                    </div>
                </div>
            </Col>
        </>
    )
}


export default Product;