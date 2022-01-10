import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';
import {
    faShoppingBag
  } from "@fortawesome/free-solid-svg-icons";

import './Detail.scss';

const Watch = () => {
    let [watch, setWatch] = useState([]);       // watch라는 state를 만들어두고 빈배열을 생성

    useEffect(() => {
        let info = localStorage.getItem('watched');     // getItem으로 받아옴
       
        if (info == null) {
            info = []
        }
        else {
            info = JSON.parse(info);
        }
        setWatch(info) 
         // setWatch 변경함수 안에 담음
     
    }, []);

    
    return (
        <div className="watchBox">
            <p>최근에 보신 상품은 최대 5개까지 저장합니다</p>
                <ul>
                    {                       
                        watch.length === 0? <div className='notWatch'>최근에 보신 상품이 없습니다</div>
                        : watch.map((num, i) => {
                            return (
                                <div className='watchBox_title'>
                                    <li key={i}>
                                        <img src={'https://raw.githubusercontent.com/WhiteDog1004/ShoesShop/main/shoes/shoes'+ (watch[i].id + 1) +'.jpg'} width='100%' alt={i}/> 
                                    </li>
                                    <div>                                       
                                        <h1>{num.title}</h1>
                                        <p>{num.content}</p>
                                        <p>{num.price}원</p>
                                        <Link to={'/detail/'+ (num.id)}><Button variant="success"><FontAwesomeIcon icon={faShoppingBag} /> 보러가기</Button></Link>
                                    </div>
                                </div>
                            )
                        })
                    }               
                </ul>   
        </div>
    );
};

 

 

export default Watch;