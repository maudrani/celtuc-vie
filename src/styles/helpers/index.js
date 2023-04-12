import { css } from 'styled-components';

export const helpers = css`
  .o-hidden {
    overflow: hidden;
  }

  .position-re {
    position: relative;
  }

  .ontop {
    position: relative;
    z-index: 7;
  }

  .full-over {
    position: absolute !important;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }

  .full-width {
    width: 100% !important;
  }

  .main-color {
    color: ${({ theme }) => theme.colors.bright_turquoise} !important;
  }

  .bg-gray {
    background-color: ${({ theme }) => theme.colors.soft_peach};
  }

  .bg-gray .primery-shadow {
    -webkit-box-shadow: 0px 4px 30px -4px rgba(0, 0, 0, 0.2);
    box-shadow: 0px 4px 30px -4px rgba(0, 0, 0, 0.2);
  }

  .bg-dark {
    background-color: ${({ theme }) => theme.colors.cod_gray} !important;
  }

  .bg-dark .primery-shadow {
    -webkit-box-shadow: 0px 4px 40px -4px rgba(255, 255, 255, 0.2);
    box-shadow: 0px 4px 40px -4px rgba(255, 255, 255, 0.2);
  }

  .bg-color {
    background-color: ${({ theme }) =>
      theme.colors.bright_turquoise} !important;
  }

  .bg-color .primery-shadow {
    -webkit-box-shadow: 0px 4px 40px -4px rgba(255, 255, 255, 0.2);
    box-shadow: 0px 4px 40px -4px rgba(255, 255, 255, 0.2);
  }

  .sub-bg {
    background: ${({ theme }) => theme.colors.wild_sand};
  }

  .bg-img {
    background-size: cover;
    background-repeat: no-repeat;
  }

  .bg-center {
    background-position: center center;
  }

  .bg-fixed {
    background-attachment: fixed;
  }

  .bg-repeat {
    background-size: auto;
    background-repeat: repeat;
  }

  .section-padding {
    padding: 120px 0;
  }

  .section-ptb {
    padding: 80px 0;
  }

  .cmd-padding {
    padding: 0 10px;
  }

  .csm-padding {
    padding: 0 5px;
  }

  .head-pt {
    padding: 80px 0 0;
  }

  .head-pb {
    padding: 0 0 80px;
  }

  .rounded {
    border-radius: 5px;
  }

  .circle {
    border-radius: 50%;
  }

  .unlist {
    list-style: none;
  }

  .undecro:hover {
    text-decoration: none;
  }

  .inline {
    display: inline-block;
  }

  .valign {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }

  .primery-shadow {
    -webkit-box-shadow: 0px 8px 30px -4px rgba(0, 0, 0, 0.1);
    box-shadow: 0px 8px 30px -4px rgba(0, 0, 0, 0.1);
  }

  .padding5 {
    padding-right: 5%;
    padding-left: 5%;
  }

  /*-------------------------------------------------------
					 text color
-------------------------------------------------------*/
  .text-white {
    color: ${({ theme }) => theme.colors.white};
  }

  .text-black {
    color: ${({ theme }) => theme.colors.black};
  }

  .text-extra-light-gray {
    color: ${({ theme }) => theme.colors.nobel};
  }

  /*-------------------------------------------------------
					font-weight
-------------------------------------------------------*/
  .fw-100 {
    font-weight: 100 !important;
  }

  .fw-200 {
    font-weight: 200 !important;
  }

  .fw-300 {
    font-weight: 300 !important;
  }

  .fw-400 {
    font-weight: 400 !important;
  }

  .fw-500 {
    font-weight: 500 !important;
  }

  .fw-600 {
    font-weight: 600 !important;
  }

  .fw-700 {
    font-weight: 700 !important;
  }

  .fw-800 {
    font-weight: 800 !important;
  }

  .fw-900 {
    font-weight: 900 !important;
  }

  /*-------------------------------------------------------
					 font-size
-------------------------------------------------------*/
  .fz-10 {
    font-size: 10px !important;
  }

  .fz-12 {
    font-size: 12px !important;
  }

  .fz-14 {
    font-size: 14px !important;
  }

  .fz-15 {
    font-size: 15px !important;
  }

  .fz-16 {
    font-size: 16px !important;
  }

  .fz-18 {
    font-size: 18px !important;
  }

  .fz-20 {
    font-size: 20px !important;
  }

  .fz-22 {
    font-size: 22px !important;
  }

  .fz-25 {
    font-size: 25px !important;
  }

  .fz-30 {
    font-size: 30px !important;
  }

  .fz-40 {
    font-size: 40px !important;
  }

  .fz-50 {
    font-size: 50px !important;
  }

  /*-------------------------------------------------------
					line-height
-------------------------------------------------------*/
  .line-height-10 {
    line-height: 10px;
  }

  .line-height-13 {
    line-height: 13px;
  }

  .line-height-18 {
    line-height: 18px;
  }

  .line-height-20 {
    line-height: 20px;
  }

  .line-height-24 {
    line-height: 24px;
  }

  .line-height-22 {
    line-height: 22px;
  }

  .line-height-26 {
    line-height: 26px;
  }

  .line-height-28 {
    line-height: 28px;
  }

  .line-height-30 {
    line-height: 30px;
  }

  .line-height-35 {
    line-height: 35px;
  }

  .line-height-40 {
    line-height: 40px;
  }

  .line-height-45 {
    line-height: 45px;
  }

  .line-height-50 {
    line-height: 50px;
  }

  .line-height-55 {
    line-height: 55px;
  }

  .line-height-60 {
    line-height: 60px;
  }

  .line-height-65 {
    line-height: 65px;
  }

  .line-height-70 {
    line-height: 70px;
  }

  .line-height-75 {
    line-height: 75px;
  }

  .line-height-80 {
    line-height: 80px;
  }

  .line-height-85 {
    line-height: 85px;
  }

  .line-height-90 {
    line-height: 90px;
  }

  .line-height-95 {
    line-height: 95px;
  }

  .line-height-100 {
    line-height: 100px;
  }

  .line-height-110 {
    line-height: 110px;
  }

  .line-height-120 {
    line-height: 120px;
  }

  /*-------------------------------------------------------
					text-transform
-------------------------------------------------------*/
  .text-u {
    text-transform: uppercase !important;
  }

  .text-l {
    text-transform: lowercase !important;
  }

  .text-c {
    text-transform: capitalize !important;
  }

  .text-non {
    text-transform: none !important;
  }

  .text-i {
    font-style: italic;
  }

  /*-------------------------------------------------------
					 letter-spacing
-------------------------------------------------------*/
  .ls0 {
    letter-spacing: 0px !important;
  }

  .ls1 {
    letter-spacing: 1px !important;
  }

  .ls2 {
    letter-spacing: 2px !important;
  }

  .ls3 {
    letter-spacing: 3px !important;
  }

  .ls4 {
    letter-spacing: 4px !important;
  }

  .ls5 {
    letter-spacing: 5px !important;
  }

  .ls10 {
    letter-spacing: 10px !important;
  }

  /*-------------------------------------------------------
			 margin-top  (0/100) +5
-------------------------------------------------------*/
  .mt-0 {
    margin-top: 0 !important;
  }

  .mt-5 {
    margin-top: 5px !important;
  }

  .mt-10 {
    margin-top: 10px !important;
  }

  .mt-15 {
    margin-top: 15px !important;
  }

  .mt-20 {
    margin-top: 20px !important;
  }

  .mt-25 {
    margin-top: 25px !important;
  }

  .mt-30 {
    margin-top: 30px !important;
  }

  .mt-35 {
    margin-top: 35px !important;
  }

  .mt-40 {
    margin-top: 40px !important;
  }

  .mt-45 {
    margin-top: 45px !important;
  }

  .mt-50 {
    margin-top: 50px !important;
  }

  .mt-55 {
    margin-top: 55px !important;
  }

  .mt-60 {
    margin-top: 60px !important;
  }

  .mt-62 {
    margin-top: 62px !important;
  }

  .mt-65 {
    margin-top: 65px !important;
  }

  .mt-70 {
    margin-top: 70px !important;
  }

  .mt-75 {
    margin-top: 75px !important;
  }

  .mt-80 {
    margin-top: 80px !important;
  }

  .mt-85 {
    margin-top: 85px !important;
  }

  .mt-90 {
    margin-top: 90px !important;
  }

  .mt-95 {
    margin-top: 95px !important;
  }

  .mt-100 {
    margin-top: 100px !important;
  }

  /*-------------------------------------------------------
			 margin-bottom  (0/100) +5
-------------------------------------------------------*/
  .mb-0 {
    margin-bottom: 0 !important;
  }

  .mb-5 {
    margin-bottom: 5px !important;
  }

  .mb-10 {
    margin-bottom: 10px !important;
  }

  .mb-15 {
    margin-bottom: 15px !important;
  }

  .mb-20 {
    margin-bottom: 20px !important;
  }

  .mb-25 {
    margin-bottom: 25px !important;
  }

  .mb-30 {
    margin-bottom: 30px !important;
  }

  .mb-35 {
    margin-bottom: 35px !important;
  }

  .mb-40 {
    margin-bottom: 40px !important;
  }

  .mb-45 {
    margin-bottom: 45px !important;
  }

  .mb-50 {
    margin-bottom: 50px !important;
  }

  .mb-55 {
    margin-bottom: 55px !important;
  }

  .mb-60 {
    margin-bottom: 60px !important;
  }

  .mb-62 {
    margin-bottom: 62px !important;
  }

  .mb-65 {
    margin-bottom: 65px !important;
  }

  .mb-70 {
    margin-bottom: 70px !important;
  }

  .mb-75 {
    margin-bottom: 75px !important;
  }

  .mb-80 {
    margin-bottom: 80px !important;
  }

  .mb-85 {
    margin-bottom: 85px !important;
  }

  .mb-90 {
    margin-bottom: 90px !important;
  }

  .mb-95 {
    margin-bottom: 95px !important;
  }

  .mb-100 {
    margin-bottom: 100px !important;
  }

  /*-------------------------------------------------------
			padding-top  (0/100) +5
-------------------------------------------------------*/
  .pt-0 {
    padding-top: 0 !important;
  }

  .pt-5 {
    padding-top: 5px !important;
  }

  .pt-10 {
    padding-top: 10px !important;
  }

  .pt-15 {
    padding-top: 15px !important;
  }

  .pt-20 {
    padding-top: 20px !important;
  }

  .pt-25 {
    padding-top: 25px !important;
  }

  .pt-30 {
    padding-top: 30px !important;
  }

  .pt-35 {
    padding-top: 35px !important;
  }

  .pt-40 {
    padding-top: 40px !important;
  }

  .pt-45 {
    padding-top: 45px !important;
  }

  .pt-50 {
    padding-top: 50px !important;
  }

  .pt-55 {
    padding-top: 55px !important;
  }

  .pt-60 {
    padding-top: 60px !important;
  }

  .pt-65 {
    padding-top: 65px !important;
  }

  .pt-70 {
    padding-top: 70px !important;
  }

  .pt-75 {
    padding-top: 75px !important;
  }

  .pt-80 {
    padding-top: 80px !important;
  }

  .pt-85 {
    padding-top: 85px !important;
  }

  .pt-90 {
    padding-top: 90px !important;
  }

  .pt-95 {
    padding-top: 95px !important;
  }

  .pt-100 {
    padding-top: 100px !important;
  }

  /*-------------------------------------------------------
		 padding-bottom  (0/100) +5
-------------------------------------------------------*/
  .pb-0 {
    padding-bottom: 0 !important;
  }

  .pb-5 {
    padding-bottom: 5px !important;
  }

  .pb-10 {
    padding-bottom: 10px !important;
  }

  .pb-15 {
    padding-bottom: 15px !important;
  }

  .pb-20 {
    padding-bottom: 20px !important;
  }

  .pb-25 {
    padding-bottom: 25px !important;
  }

  .pb-30 {
    padding-bottom: 30px !important;
  }

  .pb-35 {
    padding-bottom: 35px !important;
  }

  .pb-40 {
    padding-bottom: 40px !important;
  }

  .pb-45 {
    padding-bottom: 45px !important;
  }

  .pb-50 {
    padding-bottom: 50px !important;
  }

  .pb-55 {
    padding-bottom: 55px !important;
  }

  .pb-60 {
    padding-bottom: 60px !important;
  }

  .pb-65 {
    padding-bottom: 65px !important;
  }

  .pb-70 {
    padding-bottom: 70px !important;
  }

  .pb-75 {
    padding-bottom: 75px !important;
  }

  .pb-80 {
    padding-bottom: 80px !important;
  }

  .pb-85 {
    padding-bottom: 85px !important;
  }

  .pb-90 {
    padding-bottom: 90px !important;
  }

  .pb-95 {
    padding-bottom: 95px !important;
  }

  .pb-100 {
    padding-bottom: 100px !important;
  }

  .no-padding {
    padding: 0 !important;
  }
`;
