import React, { useEffect, useState } from 'react';
import { Button, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Detail.scss';
import "slick-carousel/slick/slick.css";
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import { Link, Route, Switch, useParams } from 'react-router-dom';


function Login(){

    let [idInput,setIdInput] = useState(''); 
    let [pwInput,setPwInput] = useState(''); 

    let [emptyId, setEmptyId] = useState('');
    let [emptyPw, setEmptyPw] = useState('');

    const onChangeId = (e) => {
    	setIdInput(e.target.value)		//이벤트 발생한 value값으로 {text} 변경
    }
    const onChangePw = (e) => {
    	setPwInput(e.target.value)		//이벤트 발생한 value값으로 {text} 변경
    }

    let { id } = useParams();


    return(
        <>
            <div className='login'>
                <div className='loginBox'>
                    <div>
                        <div className='emptyLoginId'>
                            <p>아이디</p><p>{ emptyId }</p>
                        </div>
                        <input onChange={onChangeId} value={idInput}></input>
                        <div className='emptyLoginPw'>
                            <p>비밀번호</p><p>{ emptyPw }</p>
                        </div>
                        <input onChange={onChangePw} value={pwInput} type='password'></input>
                    </div>
                    <Button onClick={()=>{
                        let infoGet = localStorage.getItem('info');

                        if( infoGet == null) { 
                            infoGet = [];
                            localStorage.setItem('info', JSON.stringify(infoGet));
                        } else {
                            infoGet = JSON.parse(infoGet);
                        }

                        // 있는아이디인지 아닌지 확인
                        let findInfo = infoGet.findIndex(function(num) {
                            return num.idText == idInput;
                        }); 
                      

                        // 아이디 어레이를 가져옴
                        let findInfo2 = infoGet.find(function(num) {
                            return num.idText == idInput;
                        });

                        // 비밀번호 틀리면 언디파인드
                        let findInfoPw = infoGet.find(function(num) {
                            return num.pwText == pwInput;
                        });
                        // console.log(findInfo, findInfo2, findInfoPw);

                        if(findInfo === -1) {
                            setEmptyId('');
                            setEmptyPw('');
                            if(idInput === ''){
                                setEmptyId('아이디를 입력해주세요!');
                            } else {
                            setEmptyId('등록된 아이디가 아닙니다!');
                            }
                        } else {
                            setEmptyId('');
                            setEmptyPw('');
                            if(pwInput === ''){
                                setEmptyPw('비밀번호를 입력해주세요!');
                            } else if(findInfoPw === undefined) {
                                setEmptyPw('비밀번호가 틀렸습니다.');
                            } else if(findInfoPw !== undefined){
                                let loginAccess = localStorage.getItem('login');
                                loginAccess = JSON.parse(loginAccess);
                                loginAccess = 1;
                                localStorage.setItem('login', JSON.stringify(loginAccess));
                                window.location.href = '/ShoesShop/#/'
                                window.location.reload();
                            }
                        }

                    }}>로그인</Button>
                    <Button variant="success" as={Link} to='/sign'>회원가입</Button>
                </div>
            </div>
        </>
    )
}


export default Login;