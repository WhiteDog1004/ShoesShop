import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
// import styled from 'styled-components';
import './Detail.scss';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import axios from 'axios';

// let 박스 = styled.div`
//     padding : 20px;
// `;

function Detail(props) {
    let [onBox, onBoxC] = useState(<div className='alertBox'>재고가 얼마 남지 않았어요!</div>);

    let [onTab, onTabC] = useState(0);
    let [anime, animeC] = useState(false);


        let { id } = useParams();
        // Hook 
        let history = useHistory();
        // 방문기록 등을 저장해놓는 오브젝트
        let idNum = Number(id);

        let getItem = localStorage.getItem('getDefault');
            getItem = JSON.parse(getItem);



        let findItem = getItem.find(function(item){
                return item.id == id;
            });

    useEffect(()=> {
        if(findItem.stock <= 10){
            let timer = setTimeout(()=> {
                onBoxC(null);
                return ()=>{ clearTimeout(timer) }  // setTimeout 쓸 때 주의점 - 타이머 해제 기술
            }, 2000);
        } else {
            onBoxC(null);
        }

        // return function 어쩌구(){ 실행할 코드~사라질 때 실행됨  함수는 무조건 써야함 }
        // useEffect(()=> {} 여러개를 쓰고싶다면 useEffect를 또 쓰면 됨 위에서부터 순서대로 실행
    },[onBox]);
    // ,[변수] 변수를 넣으면 그 변수가 변경될때만 useEffect실행  [] 아무것도 넣지않으면 <Detail> 업데이트시 실행 되지않음 영영 실행불가

    useEffect(()=> {
        var arr = localStorage.getItem('watched'); // 'watched'라는 로컬스토리지를 가져와서 arr 변수로 만듬
        if( arr == null) { 
            var arr = []; // arr가 null이면 비어있는 배열 변수로 만듦 ( 맨처음으로 상품을 클릭하면 null임 )
        } else {
            arr = JSON.parse(arr); // null이 아니라면 "" 제거 ( JSON을 오브젝트로 바꿔주는 함수 )
        }

        // arr.push(findItem); // 클릭한 idNum 상품번호를 arr 배열에 push
        let findArr = arr.find(function(num) {
            return num.id == id;
        });

        if(findArr === undefined) {
            arr.push(findItem); 
        } 

        let findArr2 = arr.findIndex(function(num) {
            return num.id == id;
        });

        if(findArr !== undefined) { // 이미 값이 arr에 있다면 그 값을 삭제 후 최신으로 저장
            if(findArr2 <= 4) {
                arr.splice(findArr2, 1);
                arr.push(findItem);
            }
        }
        // arr = new Set(arr); // new Set()은 중복되는 것을 지워줌

        arr = [...arr]; // [...이름] 배열 양끝에있는 []를 제거함 

        if( arr.length > 5) {
            if( arr !== idNum ){
                arr.splice(0, 1);
            }
        }
        
        localStorage.setItem('watched' ,JSON.stringify(arr) ); // 로컬 스토리지에 다시 setItem을 이용해서 추가
                                                               // JSON.stringify는 JSON자료로 바꿔주는 함수 )

    }, []);

    return(
        <>
        
            <div className='alertName'><h1>{ findItem.title }</h1></div>
            
            {/* <input onChange={(e)=> { inputDataC(e.target.value)}} />
            <div>{inputData}</div> */}

            <div className="container">
                <div className="row detailBg">
                    <div className="col-md-6">
                        <img src={'https://raw.githubusercontent.com/WhiteDog1004/ShoesShop/main/shoes/shoes'+ (idNum + 1) +'.jpg'} width="100%" />
                    </div>
                    <div className="col-md-6 mt-4 textBox">
                        <h4 className="pt-5">{ findItem.title}</h4>
                        <p>{ findItem.content}</p>
                        <p>{ findItem.price}원</p>
                        <p>재고 : { findItem.stock }</p>
                        <button className="btn btn-danger" onClick={()=> {
                            props.dispatch({ type : '추가', payload : {
                                id : findItem.id, name : findItem.title, quan : 1, price : findItem.price
                            } });
                            history.push('/Cart');
                            
                        }}>주문하기</button> 
                        <button className="btn btn-primary" onClick={()=> { 
                            history.goBack();
                        }}>뒤로가기</button> 
                    </div>
                </div>
            </div> 

            { onBox }

            <Nav fill variant="tabs" defaultActiveKey="link-0" className='tabMenu'>
                <Nav.Item>
                    <Nav.Link eventKey="link-0" onClick={()=> {
                        animeC(false);
                        onTabC(0)
                    }}>상품 설명</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1" onClick={()=> {
                        animeC(false);
                        onTabC(1)
                    }}>배송 정보</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2" onClick={()=> {
                        animeC(false);
                        onTabC(2)
                    }}>기타</Nav.Link>
                </Nav.Item>
            </Nav>

            <CSSTransition in={anime} classNames='tabAnime' timeout={500}>
                <TabContent onTab={onTab} animeC={animeC}/>
            </CSSTransition>
        </>
    )
}

function TabContent(props){

    useEffect(()=> {
        props.animeC(true);
    });

    if(props.onTab === 0) {
        return <div className='tabContent'>
                    <div className='tabFirst'><img src='https://raw.githubusercontent.com/WhiteDog1004/ShoesShop/main/shoes/detail_product.jpg'/></div>
                    <p>나쁘지않네요</p>
                    <p>당장 구매 ㄱㄱ</p>
                </div>
    } else if(props.onTab === 1) {
        return <div className='tabContent'>1번째 내용입니다</div>
    } else if(props.onTab === 2) {
        return <div className='tabContent'>2번째 내용입니다</div>
    }
}

// Lifecycle Hook 옛날에 이렇게 썼음
// class Detail2 extends React.Component {
//     componentDidMount(){
//           Detail2 컴포넌트가 Mount(등장) 되었을 때 실행할 코드~
//     }
//     componentWillUnmount(){
//          Detail2 컴포넌트가 Unmount(퇴장) 되기 직전에 실행할 코드~
//     }
// }


// function StockInfo(props){
//     return (
//         <p>재고 : {props.stock[0]}</p>
//     )
// }

function shop(state){
    return {
        state : state.reducer,
        alertOpen : state.reducer2
    }
}
export default connect(shop)(Detail)