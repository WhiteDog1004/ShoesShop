import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Detail.scss';
import { CSSTransition } from 'react-transition-group';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import { faArrowCircleLeft, faArrowCircleRight, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';



function Slide(){

    // let [onNum, setOnNum] = useState(0);
    // let [anime, animeC] = useState(false);

    // let i = 0;
    // let [clicked, setClicked] = useState(false); 
    // let [num, setNum] = useState(0);
var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <FontAwesomeIcon icon={faArrowCircleRight} size='2x'/>,
        prevArrow: <FontAwesomeIcon icon={faArrowCircleLeft} size='2x' />,
        autoplay: true,
        autoplaySpeed: 3000,

        responsive: [ // 반응형 웹 구현 옵션
            {
                breakpoint: 1200, // 화면 사이즈 1200px
                settings: {
                  slidesToShow: 1,
                }
            },
            {
              breakpoint: 1023,
              settings: {
                slidesToShow: 1
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1
              }
            }
          ]
        };
            return (
              <Slider {...settings} className='slider'>
                <div className='slide'>
                  <h3>
                      <div className='slideText'>
                        <h1>NEW NIKE SHOES</h1>
                        <p>한층 더 가벼워진 신발</p>
                        <Button variant="outline-light">자세히 보기 <FontAwesomeIcon icon={faAngleDoubleRight}/></Button>
                      </div>
                      <img src='./img/background.jpg' alt='1' />
                  </h3>
                </div>
                <div className='slide'>
                    <h3>
                      <div className='slideText2'>
                        <h1>PINK COLOR SHOES</h1>
                        <p>여성 라이프스타일 신발</p>
                        <Button variant="outline-light">자세히 보기 <FontAwesomeIcon icon={faAngleDoubleRight}/></Button>
                      </div>
                        <img src='./img/background2.jpg' alt='2' />
                    </h3>
                </div>
                <div className='slide'>
                  <h3>
                    <div className='slideText3'>
                      <h1>BABY SHOES</h1>
                      <p>아기의 발을 지켜주세요</p>
                      <Button variant="outline-light">자세히 보기 <FontAwesomeIcon icon={faAngleDoubleRight}/></Button>
                    </div>
                    <img src='./img/background3.jpg' alt='3' />
                  </h3>
                </div>
                <div className='slide'>
                  <h3>
                    <div className='slideText3'>
                      <h1>LEATHER SHOES</h1>
                      <p>가볍고 푹신한 느낌을 받고 싶을 땐</p>
                      <Button variant="outline-light">자세히 보기 <FontAwesomeIcon icon={faAngleDoubleRight}/></Button>
                    </div>
                    <img src='./img/background4.jpg' alt='4' />
                  </h3>
                </div>
              </Slider>
            );
    }

    export default Slide;





//      나의 하드코딩 작품
//         <>
//             <ul className='slideText'>
//                 <li onClick={()=>{
//                     animeC(false);
//                     setOnNum(0);
//                 }}>아디다스 신발</li>
//                 <li onClick={()=>{
//                     animeC(false);
//                     setOnNum(1);
//                 }}>이쁜 신발</li>
//                 <li onClick={()=>{
//                     animeC(false);
//                     setOnNum(2);
//                 }}>아기 신발</li>
//                 <li onClick={()=>{
//                     animeC(false);
//                     setOnNum(3);
//                 }}>편안한 신발</li>
//             </ul>
//             <ul className='jumbo'>
//                 <CSSTransition in={anime} classNames='onAnime' timeout={500}>
//                     <TextLi onNum={onNum} animeC={animeC}/>
//                 </CSSTransition>
//             </ul>
//         </>
//     )
// }

// function TextLi(props){

// useEffect(()=> {
//     props.animeC(true);
// });

//     if(props.onNum === 0) {
//          return <li className='slide'>
//         <img src='https://whitedog1004.github.io/shoes/background.jpg'></img>
//         <h1>아디다스 신발 20% 할인</h1>
//         <p>List groups are a flexible and powerful component for displaying a series of content. Modify and extend them to support just about any content within.</p>
//         <p>Add the flush variant to remove outer borders and rounded corners to render list group items edge-to-edge in a parent container such as a Card.</p>
//         <Button variant="primary">Learn more</Button>
//         </li>
//     } else if(props.onNum === 1) {
//         return <li className='slide'>
//         <img src='https://whitedog1004.github.io/shoes/background2.jpg'></img>
//         <h1>이쁜 신발 50% 할인</h1>
//         <p>List groups are a flexible and powerful component for displaying a series of content. Modify and extend them to support just about any content within.</p>
//         <p>Add the flush variant to remove outer borders and rounded corners to render list group items edge-to-edge in a parent container such as a Card.</p>
//         <Button variant="primary">Learn more</Button>
//         </li>
//     } else if(props.onNum === 2) {
//         return <li className='slide'>
//         <img src='https://whitedog1004.github.io/shoes/background3.jpg'></img>
//         <h1>아기 신발 50% 할인</h1>
//         <p>List groups are a flexible and powerful component for displaying a series of content. Modify and extend them to support just about any content within.</p>
//         <p>Add the flush variant to remove outer borders and rounded corners to render list group items edge-to-edge in a parent container such as a Card.</p>
//         <Button variant="primary">Learn more</Button>
//         </li>
//     } else if(props.onNum === 3) {
//         return <li className='slide'>
//         <img src='https://whitedog1004.github.io/shoes/background4.jpg'></img>
//         <h1>편안한 신발 40% 할인</h1>
//         <p>List groups are a flexible and powerful component for displaying a series of content. Modify and extend them to support just about any content within.</p>
//         <p>Add the flush variant to remove outer borders and rounded corners to render list group items edge-to-edge in a parent container such as a Card.</p>
//         <Button variant="primary">Learn more</Button>
//         </li>
//     }
// }

