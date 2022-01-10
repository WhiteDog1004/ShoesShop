import React, { useEffect, useRef, useState } from 'react';
import { Button, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Detail.scss';
import "slick-carousel/slick/slick.css";
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { Link, useHistory, useParams } from 'react-router-dom';


function Sign(){
    let [idText,setIdText] = useState(''); 
    let [pwText,setPwText] = useState(''); 
    let [birthText,setBirthText] = useState(''); 
    let [genderText,setGenderText] = useState(''); 
    let [emptyId, setEmptyId] = useState('');
    let [emptyPw, setEmptyPw] = useState('');
    let [emptyBirth, setEmptyBirth] = useState('');
    let [emptyGender, setEmptyGender] = useState('');

    let history = useHistory();

    const onChangeId = (e) => {
    	setIdText(e.target.value)		//이벤트 발생한 value값으로 {text} 변경
    }
    const onChangePw = (e) => {
    	setPwText(e.target.value)	
    }
    const onChangeBirth = (e) => {
    	setBirthText(e.target.value)	
    }
    const onChangeGender = (e) => {
    	setGenderText(e.target.value)		
    }

    const idRef = useRef();
    const pwRef = useRef();

    function IdFocus() {
        idRef.current.focus();

      }
      function PwFocus() {
        pwRef.current.focus();
      }

      function resetEmpty(){
        setEmptyId('');
        setEmptyPw('');
        setEmptyBirth('');
        setEmptyGender('');
      }

        function NoneText(){
          if(idText === ''){
            pwRef.current.style.outline = 'medium black'
            idRef.current.style.outline = 'auto red';
          } else if(pwText === '') {
            idRef.current.style.outline = 'medium black'
            pwRef.current.style.outline = 'auto red';
          } else {
            idRef.current.style.outline = 'medium black'
            pwRef.current.style.outline = 'medium black'
          }
        }


      let [info, setInfo] = useState([]);

      let { id } = useParams();

    return(
        <>
            <div className='sign'>
                <div className='signBox'>
                    <div>
                        <div>
                            <h4>아이디*</h4><p>{ emptyId }</p>
                        </div>
                        <form className='formBox'>
                            <input type='text' autocomplete="username" onChange={onChangeId} value={idText} ref={idRef} />
                            <div>
                                <h4>비밀번호*</h4><p>{ emptyPw }</p>
                            </div>
                            <input type='password' autocomplete="password" onChange={onChangePw} value={pwText} ref={pwRef}/><FontAwesomeIcon icon={faLock}/>
                            <div>
                                <h4>생년월일*</h4><p>{ emptyBirth }</p>
                            </div>
                            <input type='date' onChange={onChangeBirth} value={birthText}/>
                            <div>
                                <h4>성별*</h4><p>{ emptyGender }</p>
                            </div>
                            <input type='radio' name='gender' value='man' id='man' className='gender' onClick={onChangeGender} /><label for='man'>남자</label>
                            <input type='radio' name='gender' value='woman' id='woman' className='gender' onClick={onChangeGender} /><label for='woman'>여자</label>
                        </form>
                    </div>
                    <Button variant="outline-info" onClick={()=> {
                        if(idText === ''){
                            resetEmpty();
                            IdFocus();
                            NoneText();
                            setEmptyId('아이디를 입력해주세요!');
                        } else if(pwText === '') {
                            resetEmpty();
                            PwFocus();
                            NoneText();
                            setEmptyPw('비밀번호를 입력해주세요!')
                        } else if (birthText === '') {
                            resetEmpty();
                            NoneText();
                            setEmptyBirth('생년월일을 입력해주세요!');
                        } else if (genderText === '') {
                            resetEmpty();
                            NoneText();
                            setEmptyGender('성별을 선택해주세요!');
                        } else {
                            resetEmpty();
                            // console.log(idText)
                            // console.log(pwText)
                            // console.log(birthText)
                            // console.log(genderText)
                            let info = localStorage.getItem('info');     // getItem으로 받아옴
       
                            if (info == null) {
                                info = []
                            }
                            else {
                                info = JSON.parse(info);
                            }
                            let info2 = [{idText, pwText, birthText, genderText}];

                            let findInfo = info2.find(function(num) {
                                return num.id == id;
                            });

                            let findInfo2 = info.findIndex(function(num) {
                                return num.idText == idText;
                            });
                            if(findInfo2  !== -1) {
                                IdFocus();
                                setEmptyId('이미있는 아이디입니다!');
                                return;
                            }
                            info = [...info];

                            info.push(findInfo);
                            
                            localStorage.setItem('info' ,JSON.stringify(info) );
                            console.log(info);
                            window.location.href = '/#/signAccess'
                        }
                    }}>가입하기</Button>
                </div>
            </div>
        </>
    )
}

export default Sign;