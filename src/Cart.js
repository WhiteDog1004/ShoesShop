import React, { useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './Detail.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faShoppingCart,
    faTimesCircle,
    faTrashAlt,
    faPlus,
    faMinus
  } from "@fortawesome/free-solid-svg-icons";




function Cart(props){

    // 총 금액
    let total = [0];
    let a = 0;
    for(a = 0; a < props.state.length; a++ ){
        let b = props.state[a].price * props.state[a].quan;
        total.push(b);
    }
    const sum = total.reduce((x,y) => x+y);
    // console.log(sum); 

    // 총 수량
    let totalIdx = [0];
    let c = 0;
    for(c = 0; c < props.state.length; c++ ){
        let d = props.state[c].quan;
        totalIdx.push(d);
    }
    const sum2 = totalIdx.reduce((q,w) => q+w);
    // console.log(sum2); 

    if(props.state.length === 0) {
        return (
            <div className='noneCart'>
                <FontAwesomeIcon icon={faShoppingCart} />
                <div>
                    <p>장바구니에 아무것도 없어요!</p>
                    <span>백견 쇼핑몰을 둘러보시고 장바구니에 넣어보세요!</span>
                </div>
            </div>
        )
    }


    return(
        <div>
              <Table responsive="md">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>가격</th>
                        <th>변경</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            props.state.map(function(num, i){

                                return(
                                        <tr key={i} className='cartTr'>
                                            <td>{ i + 1 }</td>
                                            <td className='cartName'><Link to={'/detail/'+ (num.id)}>{ num.name }</Link></td>
                                            <td>{ num.quan }</td>
                                            <td>{ num.price * num.quan }</td>
                                            <td className='cartBtn'><Button variant="success" onClick={()=> {
                                                props.dispatch( { type : '증가', payload : { id : i }} )
                                                // 데이터 수정요청을 할땐 props.dispatch()
                                            }}><FontAwesomeIcon icon={faPlus}/></Button>
                                            <Button variant="warning" onClick={()=> {
                                                props.dispatch( { type : '감소', payload : { id : i } } )
                                                // 데이터 수정요청을 할땐 props.dispatch()
                                            }}><FontAwesomeIcon icon={faMinus}/></Button>
                                            <Button  variant="danger" onClick={()=> {
                                                props.dispatch( { type : '제거', payload : { key : i } } )
                                                }}><FontAwesomeIcon icon={faTrashAlt}/></Button></td>
                                        </tr>
                                )
                                
                            })   
                        }
                        <tr>
                            <td></td>
                            <td></td>
                            <td>{ sum2 }</td>
                            <td>{ sum }</td>
                            <td></td>
                        </tr>
                    </tbody>
            </Table>
            {
                props.alertOpen === true 
                ?   <div className='alertBox'>
                        <p>지금 구매하시면 할인 20%</p>
                        <Button variant="outline-danger" onClick={()=> { props.dispatch({type : '닫기' }) }}><FontAwesomeIcon icon={faTimesCircle}/></Button>
                    </div>
                : null
            }
        </div>
    )
}

function shop(state){
    return {
        state : state.reducer,
        alertOpen : state.reducer2
    }
}
export default connect(shop)(Cart)
// export default Cart;