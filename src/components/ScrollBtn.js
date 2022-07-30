import React from "react";

// CSS 관련 Imports
import styled from 'styled-components'
// import { RiArrowUpSFill } from 'react-icons/ri'

import { ReactComponent as SlideUp } from "../../src/css/Button/SlideUp.svg";

const ScrollBtn = (props) => {

  return (

    <div>
      <SlideUp onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }) }}/>
    </div>
    // <div>     
    //    {/* <Btn onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }) }}> <RiArrowUpSFill size="40" /> </Btn> */}
    //   {/* <img src={BannerImg} width="80" height="80"> </img> */}
    // </div>
  )

}

const Btn = styled.button`
  position: absolute;
  width: 80px;
  height: 80px;
  left: 270px;
  top: 10px;

  background: url(.png);
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.5));
`


// const Btn = styled.button`
//   position: fixed;
//   z-index: 100;
//   bottom: 30px;
//   right: 35px;
//   display:flex;
//   justify-content:center;
//   align-items:center;
//   width: 55px;
//   height: 55px;
//   background-color: #fff;
//   border: 1.5px solid #eee;
//   border-radius: 120px;
//   font-size : 28px;
//   padding:0px;
//   color: #4c4c4c;
//   cursor:pointer;

//   &:hover{
//     background: #eee;
//     transition: background 0.5s;
//   }
// `

export default ScrollBtn;