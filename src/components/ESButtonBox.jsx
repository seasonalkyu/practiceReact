import React, {useState} from "react";
import styled from "styled-components"

const ESButtonStatus = {
    ON: "on",
    OFF: "off"
}

const ESButtonBox = (prop) => {
    const {name, desc, isOn} = prop.buttonInfo;
     /* destructuring
        https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
    */

    const [buttonStatus, setButtonStatus] = useState(isOn);

    const EnableCircle = <div style={{ paddingRight: "8px" }}><ESEnableCircle /></div>
    const DisableCircle = <div style={{ paddingRight: "8px" }}><ESDisableCircle /></div>

    const handleButtonToOff = () => {
            setButtonStatus(ESButtonStatus.OFF);
    }

    const handleButtonToOn = () => {
        setButtonStatus(ESButtonStatus.ON);
    }

    return ( <_ESButtonBox>
        {/* Name */}
        <div style={{height: "30px", lineHeight: "40px",padding:"10px 0px"}}><ESButtonName>{name}</ESButtonName></div>
        {/* line-height가 있는 div로 감싼 이유
        /* vertical align과 strut 때문
            https://devblog.kakaostyle.com/ko/2019-04-29-1-vertical-align-line-box/
            http://blog.hivelab.co.kr/%EA%B3%B5%EC%9C%A0-vertical-align-%ED%8C%8C%ED%97%A4%EC%B9%98%EA%B8%B0-1%EB%B6%80/
        */}

        {/* Buttons */}
        <div style={{paddingLeft:"12px"}}>
            <ESRadioButton 
                onClick={handleButtonToOff}
                data-buttontype={ESButtonStatus.OFF}>
                {buttonStatus === ESButtonStatus.OFF
                    ? EnableCircle
                    : DisableCircle
                }
                <div style={{flexGrow: "1", lineHeight: "25px"}}><span style={{fontSize: "14px"}}>해제</span></div>
            </ESRadioButton>
        </div>
        <div style={{paddingLeft:"12px"}}>
            <ESRadioButton 
                onClick={handleButtonToOn}
                data-buttontype={ESButtonStatus.ON}>
                {buttonStatus === ESButtonStatus.ON
                    ? EnableCircle
                    : DisableCircle
                }
                <div style={{flexGrow: "1", lineHeight: "25px"}}><span style={{fontSize: "14px"}}>설정</span></div>
                </ESRadioButton>
        </div>

        {/* Description */}
        <div style={{height: "25px", lineHeight: "13px"}}><ESButtonDescription>{desc}</ESButtonDescription></div>
    </_ESButtonBox>)
    }
    
export default ESButtonBox;

const _ESButtonBox = styled.div`
    width: 100%;
    height: 150px;

    display: flex;
    flex-direction: column;

    border-bottom: 1px solid;

`
///////////////////
// 설정 이름
const ESButtonName = styled.span`
    height: 20px;

    //flex-grow: 1;

    font-weight: 600;
    font-size: 16px;
    //border: 1px solid;
`
/* vertical align과 strut
http://blog.hivelab.co.kr/%EA%B3%B5%EC%9C%A0-vertical-align-%ED%8C%8C%ED%97%A4%EC%B9%98%EA%B8%B0-1%EB%B6%80/
*/
/////////////////////////
// 버튼
const ESRadioButton = styled.div`
    height: 24px;
    margin-bottom: 16px;

    display: flex;

    cursor: pointer;

    //border: 1px solid;
`
const ESEnableCircle = styled.div`
    width: 8px;
    height: 8px;
    border: 8px solid #0095f6;
    border-radius: 50%;
`
const ESDisableCircle = styled.div`
    width: 8px;
    height: 8px;

    border-radius: 50%;

    border: 8px solid #FFF;
    background-color: #FFF;

    box-shadow: 0.8px 0.8px 1px 1.5px #CCCCCC;

`

/* CSS 원 그리기
https://oursmalljoy.com/css-%EC%9B%90-%EA%B7%B8%EB%A6%AC%EA%B8%B0-border-radius%EB%A1%9C-%EA%B0%84%EB%8B%A8%ED%9E%88-%EB%A7%8C%EB%93%A4-%EC%88%98-%EC%9E%88%EB%8B%A4/
*/
/* 박스에 그림자 효과(음영 처리)하기
https://webisfree.com/2014-01-14/[css]-%ED%85%8C%EB%91%90%EB%A6%AC-%EB%B0%8F-%EC%9A%94%EC%86%8C%EC%97%90-%EA%B7%B8%EB%A6%BC%EC%9E%90-%ED%9A%A8%EA%B3%BC-%EB%B6%80%EC%97%AC%ED%95%98%EA%B8%B0-box-shadow
https://www.codingfactory.net/10628
*/

////////////////////
// 설정 설명
const ESButtonDescription = styled.span`
    display:inline-block;
    height: 16px;

    font-size: 12px;
    color: rgb(142, 142, 142);
    //border: 1px solid;
`