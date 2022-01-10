import React, { useContext, useState, lazy, Suspense, useEffect } from 'react';
import { Navbar, Container ,Nav, Button, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './App.css';
import Data from './data.js';
// import Detail from './Detail.js';

import List from './List.js';
import axios from 'axios';
import Cart from './Cart.js';
import Watched from './Watched.js';
import Slide from './Slide.js';
import Product from './Product.js';
import Footer from './Footer.js';
import Login from './Login.js';
import Sign from './Sign.js';


import {
  faHome,
  faList,
  faUser,
  faShoppingCart,
  faSearch,
  faSpinner,
  faEye
} from "@fortawesome/free-solid-svg-icons";

import Spinner from './spinner.js';

import { Link, Route, Switch } from 'react-router-dom';

let Detail = lazy(()=> { return import('./Detail.js')});

let infoContext = React.createContext();




function App() {

  let [shoes, shoesC] = useState( Data );
  let [btnNum,btnNumC] = useState(0);
  let [loginText,setLoginText] = useState('');

  const [loading, loadingC] = useState(false);

  useEffect(()=>{
    axios.get('https://whitedog1004.github.io/shoes/data2.json')
    .then((result)=>{
      let copy = [...result.data];
      var copyDefault = [...shoes, ...copy];
      localStorage.setItem('getDefault', JSON.stringify(copyDefault));
    })
    .catch(()=> {
      console.log('에러');
    });
  }, [])

  useEffect(()=> {
    let login = localStorage.getItem('login');
    login = JSON.parse(login);
    console.log(login);
    if( login === 1) {
      setLoginText(' 로그아웃');
    } else if( login !== 1){
      setLoginText(' 로그인');
    }
  }, [loginText])

  return (
    <div className="App">
      <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark" className='navBar'>
        <Container>
          <Navbar.Brand><Link to='/'>백견 쇼핑몰</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link as={Link} to='/'><FontAwesomeIcon icon={faHome}/> 메인</Nav.Link>
                  <Nav.Link as={Link} to='/list'><FontAwesomeIcon icon={faList}/> 상품 목록</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to='/watched'><FontAwesomeIcon icon={faEye}/> 최근 본 상품</Nav.Link>
              <Nav.Link as={Link} to='/cart'><FontAwesomeIcon icon={faShoppingCart}/> 장바구니</Nav.Link>
              <Nav.Link onClick={()=>{
                  let login = localStorage.getItem('login');
                  login = JSON.parse(login);
                  if(login === 1) {
                    login = 0;
                    localStorage.setItem('login', JSON.stringify(login));
                    window.location.reload();
                  } else {
                    window.location.href ='/#/login'
                  }
              }}>
                <FontAwesomeIcon icon={faUser}/>{ loginText }</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      { loading === true ? <Spinner /> : null }

      <Switch>
        {/* exact는 정확히 입력해야만 방문가능 */}
        {/* Main */}
        <Route exact path='/'>
          <Slide />
          <div className='container'>
            {/* <infoContext.Provider value={shoes.stock}> */}
              <div className='row'>
                <Item shoes={shoes}/> 
              </div>
            {/* </infoContext.Provider> */}
          </div>
          <Product />

          <div className='movieBox'>
            <video src='./img/bg_shoes_movie.mp4' muted loop autoPlay></video>
            <div>
              <h1>Air Dior</h1>
              <h2>새로운 변화를 주다</h2>
            </div>

          </div>

          <Footer />

        </Route>

        {/* List 신발 리스트 */}
        <Route path='/list'>

        
        <Col className='tagName container'>
          <Button className='listSet' variant="outline-dark" onClick={()=> {
              var copy = [...shoes];
              var compare = (key) => (a, b) => {
                return a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0;
                };
                copy.sort(compare('price'));
                shoesC(copy);
            }} >가격 내림순</Button>

            <Button className='listSet' variant="outline-dark" onClick={()=> {
              var copy = [...shoes];
              var compare = (key) => (a, b) => {
                return a[key] < b[key] ? 1 : a[key] > b[key] ? -1 : 0;
                };
                copy.sort(compare('price'));
                shoesC(copy);
            }}>가격 올림순</Button>

            <Button className='listSet' variant="outline-dark" onClick={()=> {
              var copy = [...shoes];
              var compare = (key) => (a, b) => {
                return a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0;
                };
                copy.sort(compare('id'));
                shoesC(copy);
            }}>최신순</Button>
          </Col>
          

          <div className='container'>
            <div className='row listBox'>
              <List shoes={shoes}/>
            </div>
          </div>


          {
            btnNum === 6 
            ? null
            : <Button variant="outline-dark" onClick={()=>{

                            //로딩 표시
                            loadingC(true);

              axios.get('https://whitedog1004.github.io/shoes/data2.json')
              .then((result)=>{
                let copy = [...result.data];
                // let splice = copy.splice(0, shoesAdd.length);

                  let i = btnNum;
                  let slice = copy.slice(i, btnNum+ 3);
                  shoesC([...shoes, ...slice]);

                  let getItem = localStorage.getItem('get');
                  getItem = [...shoes, ...copy];
                  localStorage.setItem('get', JSON.stringify(getItem));

                  btnNumC(btnNum + 3);
                  
                // console.log(copy[0])
                // let i = shoes.length;
                // let splice = copy.splice(0, i);
                // console.log(splice);

                // //로딩중 표시 삭제
                              //로딩 표시
                              loadingC(false);

                // console.log('성공했을 때 뜨는 것');
                // console.log(result.data);
                // shoesC([...shoes, ...result.data]);

                // 대괄호를 벗겨주는 딥 카피 ex) {},{},{},  {},{},{} 

              })
              .catch(()=>{
                //로딩중 표시 삭제
                console.log('실패했을 때 뜨는 것');
                loadingC(false);
              })
            }}> <FontAwesomeIcon icon={faSearch} size="2x" /> </Button>
          }


        </Route>


        {/* Detail 신발 디테일 */}
        <Route path='/detail/:id'>
          <Suspense fallback={ <Spinner />}>
            <Detail shoes={shoes} stock={shoes.stock} />
          </Suspense>
        </Route>

        {/* 최근 본 상품*/}
        <Route path='/watched'>
            <Watched />
        </Route>

        {/* Cart 장바구니 */}
        <Route path='/cart'>
          <Cart />
        </Route>

        {/* 로그인 */}
        <Route path='/login'>
          <Login />
        </Route>

        {/* 회원가입 */}
        <Route path='/sign'>
          <Sign />
        </Route>
        <Route path='/signAccess'>
          <div className='access'>
            <div>회원가입이 완료되었습니다!<br/> <Button as={Link} to='/login' variant="outline-success">로그인 페이지로</Button></div>
          </div>
        </Route>

        <Route path='/:id'>
          <div>사이트 넘버 에러</div>
        </Route>

      </Switch>

    </div>
  );
}


// props는 다른 컴포넌트 state를 가져오고 싶다면 쓸 수 있음 <자식컴포넌트 보낼이름={전송할state} />
// map(function(왼쪽, 오른쪽))  파라미터를 두개까지 넣을수있음. 
// 왼쪽은 하나하나의 데이터를 의미하고 오른쪽은 반복문 돌때마다 0 1 2 3 숫자가 올라감. 
function Item(props){

  // let stock = useContext(infoContext);


    return(
      props.shoes.map(function(num, i){
        if(i > 5){
          return;
        }
          return(
            <div className='col-md-4' key={i}>
              <Link to={'/detail/'+ (num.id)} >
                <img src={'https://whitedog1004.github.io/ShoesShop/shoes'+ (num.id + 1) +'.jpg'} width='100%' alt={i}></img>
                <h4>{ num.title }</h4>
                <span>{ num.content}</span>
                <p>{ num.price }원</p>
              </Link>
            </div>
          )
        })
    )
}


export default App;
