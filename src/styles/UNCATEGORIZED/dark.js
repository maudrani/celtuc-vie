import { css } from 'styled-components';

export const UNCATEGORIZED_Dark = css`
  /*-----------------------------------------------------------------------------------

    Theme Name: Vie
    Theme URI: http://
    Description: Creative Agency & Portfolio
    Author: ThemesCamp
    Author URI: http://themeforest.net/user/ThemesCamp
    Version: 1.2

-----------------------------------------------------------------------------------*/
  /* ----------------------------------------------------------------

== Table Of Content

    |--- BASE

        |- typography
        |- helper classes

    |--- SHORTCODES

        |- extra
        |- overlay
        |- section-heading
        |- buttons
        |- navbar
        |- sliders
        |- intro
        |- feature-box
        |- clients
        |- counter
        |- portfolio
        |- process
        |- progress-bar
        |- tabs
        |- team
        |- testimonials
        |- blog
        |- contact-form
        |- footers

    |--- BASE

        |- responsive
	


---------------------------------------------------------------- */
  /* ====================== [ Start Typography  ] ====================== */
  /* ====================== [ End Typography  ] ====================== */
  /* ====================== [ Start Helper Classes  ] ====================== */
  /* ====================== [ End Helper Classes  ] ====================== */
  /* ====================== [ Start Preloader ] ====================== */
  /* ====================== [ End Preloader ] ====================== */
  /* ====================== [ Start Text Animation & Images ] ====================== */
  /* ====================== [ End Text Animation & Images ] ====================== */
  /* ====================== [ Start Cursor Style ] ====================== */
  /* ====================== [ End Cursor Style ] ====================== */
  /* ====================== [ Start progress-wrap ] ====================== */
  /* ====================== [ End progress-wrap ] ====================== */
  /* ====================== [ Start animate headline ] ====================== */
  /* ====================== [ End animate headline ] ====================== */
  /* ====================== [ Start Overlay ] ====================== */
  /* ====================== [ End Overlay ] ====================== */
  /* ====================== [ Start Heading ] ====================== */
  /* ====================== [ End Heading ] ====================== */
  /* ====================== [  Start Button Style ] ====================== */
  .butn {
    padding: 15px 35px;
    font-size: 13px;
    border: 1px solid transparent;
    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    transition: all 0.4s;
  }

  .butn:hover .char {
    -webkit-animation: fadeInUp 0.3s cubic-bezier(0.3, 0, 0.7, 1) both;
    animation: fadeInUp 0.3s cubic-bezier(0.3, 0, 0.7, 1) both;
    -webkit-animation-delay: calc(30ms * var(--char-index));
    animation-delay: calc(30ms * var(--char-index));
  }

  .butn.bord {
    border: 1px solid ${({ theme }) => theme.colors.white};
  }

  .butn.bord:hover {
    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.mine_shaft};
  }

  .butn.light {
    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.mine_shaft};
  }

  .butn.light:hover {
    background: transparent;
    border-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.white};
  }

  .butn.dark {
    background: ${({ theme }) => theme.colors.mine_shaft}_dark;
  }

  .butn.dark:hover {
    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.mine_shaft};
  }

  .butn.color {
    background: -webkit-gradient(
      linear,
      left top,
      right top,
      from(${({ theme }) => theme.colors.bright_turquoise}),
      color-stop(${({ theme }) => theme.colors.lavender}),
      to(${({ theme }) => theme.colors.carnation})
    );
    background: -webkit-linear-gradient(
      left,
      ${({ theme }) => theme.colors.bright_turquoise},
      ${({ theme }) => theme.colors.lavender},
      ${({ theme }) => theme.colors.carnation}
    );
    background: -o-linear-gradient(
      left,
      ${({ theme }) => theme.colors.bright_turquoise},
      ${({ theme }) => theme.colors.lavender},
      ${({ theme }) => theme.colors.carnation}
    );
    background: linear-gradient(
      to right,
      ${({ theme }) => theme.colors.bright_turquoise},
      ${({ theme }) => theme.colors.lavender},
      ${({ theme }) => theme.colors.carnation}
    );
    border: transparent;
  }

  .butn.color:hover {
    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.cod_gray};
  }

  .butn.curve {
    border-radius: 5px;
  }

  .butn.radius {
    border-radius: 30px;
  }

  .simple-btn {
    position: relative;
    padding: 7px;
    display: inline-block;
    text-transform: uppercase;
    letter-spacing: 4px;
    font-size: 13px;
    font-weight: 300;
  }

  .simple-btn:after {
    content: '';
    width: 45%;
    height: 100%;
    background: rgba(255, 255, 255, 0.05);
    position: absolute;
    left: 0;
    top: 0;
  }

  .simple-btn.right:after {
    left: auto;
    right: 0;
  }

  /* ====================== [ End Button Style ] ====================== */
  /* ====================== [ Start navbar ] ====================== */
  .navbar {
    position: absolute;
    left: 0;
    top: 0;
    padding: 0;
    margin: 0;
    width: 100%;
    background: transparent;
    border-bottom: 2px solid transparent;
    z-index: 999;
    min-height: 80px;
  }

  .navbar .icon-bar {
    color: ${({ theme }) => theme.colors.white};
  }

  .navbar .navbar-nav .nav-link {
    font-size: 12px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.white};
    padding: 15px 7px;
    margin: 10px 15px;
  }

  .navbar .navbar-nav .dropdown-menu {
    padding: 10px 0;
    border: 0;
    -webkit-box-shadow: 0px 10px 40px -4px rgba(0, 0, 0, 0.1);
    box-shadow: 0px 10px 40px -4px rgba(0, 0, 0, 0.1);
  }

  .navbar .navbar-nav .dropdown-item {
    font-size: 13px;
    padding: 10px 20px;
    opacity: 0.9;
  }

  .navbar .navbar-nav .dropdown-item:hover {
    background: transparent;
    color: ${({ theme }) => theme.colors.bright_turquoise};
  }

  .navbar .dropdown-menu {
    display: block;
    opacity: 0;
    visibility: hidden;
    border-radius: 0;
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.shark};
    min-width: 185px;
    -webkit-transform: translateY(20px);
    -ms-transform: translateY(20px);
    transform: translateY(20px);
    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    transition: all 0.4s;
  }

  .navbar .dropdown-menu.show {
    opacity: 1;
    visibility: visible;
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
  }

  .navbar .dropdown-menu .dropdown-item {
    color: ${({ theme }) => theme.colors.white};
    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    transition: all 0.4s;
    padding: 10px 25px;
    position: relative;
  }

  .navbar .dropdown-menu .dropdown-item:after {
    content: '';
    width: 0px;
    height: 1px;
    background: ${({ theme }) => theme.colors.bright_turquoise};
    position: absolute;
    left: 10px;
    top: 50%;
    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    transition: all 0.4s;
  }

  .navbar .dropdown-menu .dropdown-item:hover {
    padding-left: 30px;
  }

  .navbar .dropdown-menu .dropdown-item:hover:after {
    width: 10px;
  }

  .navbar .search {
    color: ${({ theme }) => theme.colors.white};
    padding-left: 30px;
    border-left: 1px solid rgba(255, 255, 255, 0.1);
  }

  .navbar .search .icon {
    cursor: pointer;
  }

  .navbar .search .search-form {
    position: fixed;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    background: rgba(37, 37, 49, 0.98);
    display: none;
  }

  .navbar .search .search-form form {
    width: 600px;
    position: absolute;
    left: calc(50% - 300px);
    top: 50%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
  }

  .navbar .search .search-form form input {
    padding: 15px 0;
    font-size: 80px;
    color: ${({ theme }) => theme.colors.white};
    text-transform: uppercase;
    text-align: left;
    background: transparent;
    border: 0;
    border-bottom: 2px solid ${({ theme }) => theme.colors.bright_turquoise};
  }

  .navbar .search .search-form .close {
    position: absolute;
    top: 20%;
    right: 20%;
    color: ${({ theme }) => theme.colors.white};
    font-size: 60px;
    opacity: 1;
    cursor: pointer;
  }

  .navbar .logo {
    width: 50px;
  }

  .nav-scroll {
    background: ${({ theme }) => theme.colors.shark};
    border-color: ${({ theme }) => theme.colors.mine_shaft};
    padding: 0;
    position: fixed;
    top: -80px;
    -webkit-transition: -webkit-transform 0.5s;
    transition: -webkit-transform 0.5s;
    -o-transition: transform 0.5s;
    transition: transform 0.5s;
    transition: transform 0.5s, -webkit-transform 0.5s;
    -webkit-transform: translateY(80px);
    -ms-transform: translateY(80px);
    transform: translateY(80px);
  }

  .topnav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 999999;
    padding: 30px 0;
    color: ${({ theme }) => theme.colors.white};
    -webkit-transition: all 0.7s;
    -o-transition: all 0.7s;
    transition: all 0.7s;
  }

  .topnav .container,
  .topnav .container-fluid {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }

  .topnav .container-fluid {
    padding: 0 50px;
  }

  .topnav .logo {
    width: 50px;
  }

  .topnav .menu-icon {
    margin-left: auto;
    cursor: pointer;
  }

  .topnav .menu-icon:hover .text .char {
    -webkit-animation: fadeInUp 0.3s cubic-bezier(0.3, 0, 0.7, 1) both;
    animation: fadeInUp 0.3s cubic-bezier(0.3, 0, 0.7, 1) both;
    -webkit-animation-delay: calc(30ms * var(--char-index));
    animation-delay: calc(30ms * var(--char-index));
  }

  .topnav .menu-icon .text {
    font-size: 13px;
    font-weight: 500;
    padding-left: 15px;
    display: table-cell;
    vertical-align: middle;
    position: relative;
  }

  .topnav .menu-icon .text:after {
    content: 'close';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding-left: 15px;
    opacity: 0;
    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    transition: all 0.4s;
    -webkit-transition-delay: 0.4s;
    -o-transition-delay: 0.4s;
    transition-delay: 0.4s;
  }

  .topnav .menu-icon .text .word {
    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    transition: all 0.4s;
    -webkit-transition-delay: 0.6s;
    -o-transition-delay: 0.6s;
    transition-delay: 0.6s;
  }

  .topnav .menu-icon .text.open .word {
    opacity: 0;
    -webkit-transition-delay: 0.4s;
    -o-transition-delay: 0.4s;
    transition-delay: 0.4s;
  }

  .topnav .menu-icon .text.open:after {
    opacity: 1;
    -webkit-transition-delay: 0.6s;
    -o-transition-delay: 0.6s;
    transition-delay: 0.6s;
  }

  .topnav .menu-icon .icon {
    display: table-cell;
  }

  .topnav .menu-icon .icon i {
    display: block;
    width: 20px;
    height: 3px;
    background: ${({ theme }) => theme.colors.white};
    margin: 4px 0;
  }

  .topnav.dark .menu-icon {
    color: ${({ theme }) => theme.colors.black};
  }

  .topnav.dark .menu-icon .icon i {
    background: ${({ theme }) => theme.colors.black};
  }

  .topnav.dark.navlit .menu-icon {
    color: ${({ theme }) => theme.colors.white};
  }

  .topnav.dark.navlit .menu-icon .icon i {
    background: ${({ theme }) => theme.colors.white};
  }

  .hamenu {
    position: fixed;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100vh;
    background: ${({ theme }) => theme.colors.woodsmoke};
    padding: 120px 30px 30px;
    overflow: hidden;
    z-index: 9999;
    -webkit-transition: all 0.5s cubic-bezier(1, 0, 0.55, 1);
    -o-transition: all 0.5s cubic-bezier(1, 0, 0.55, 1);
    transition: all 0.5s cubic-bezier(1, 0, 0.55, 1);
  }

  .hamenu.open .menu-links .main-menu > li .link {
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
    -webkit-transition-delay: 1s;
    -o-transition-delay: 1s;
    transition-delay: 1s;
  }

  .hamenu.open .cont-info:after {
    height: 100vh;
    -webkit-transition-delay: 1s;
    -o-transition-delay: 1s;
    transition-delay: 1s;
  }

  .hamenu.open .cont-info .item {
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
    -webkit-transition-delay: 1s;
    -o-transition-delay: 1s;
    transition-delay: 1s;
  }

  .hamenu .menu-links {
    color: ${({ theme }) => theme.colors.white};
    margin-top: 30px;
  }

  .hamenu .menu-links .o-hidden {
    display: inline-block;
  }

  .hamenu .menu-links .main-menu {
    position: relative;
    z-index: 2;
  }

  .hamenu .menu-links .main-menu.gosub > li {
    opacity: 0;
    visibility: hidden;
    -webkit-transition-delay: 0.2s !important;
    -o-transition-delay: 0.2s !important;
    transition-delay: 0.2s !important;
  }

  .hamenu .menu-links .main-menu.gosub > li .link {
    -webkit-transform: translateY(45px) !important;
    -ms-transform: translateY(45px) !important;
    transform: translateY(45px) !important;
    opacity: 0 !important;
    visibility: hidden !important;
    -webkit-transition-delay: 0.2s !important;
    -o-transition-delay: 0.2s !important;
    transition-delay: 0.2s !important;
  }

  .hamenu .menu-links .main-menu.gosub .sub-menu.sub-open {
    z-index: 3 !important;
    opacity: 1 !important;
    visibility: visible !important;
  }

  .hamenu .menu-links .main-menu > li {
    font-size: 30px;
    font-weight: 600;
    padding: 10px;
    width: -webkit-max-content;
    width: -moz-max-content;
    width: max-content;
    opacity: 1;
    visibility: visible;
    -webkit-transition: all 0.5s;
    -o-transition: all 0.5s;
    transition: all 0.5s;
  }

  .hamenu .menu-links .main-menu > li span.nm {
    opacity: 0.8;
    font-size: 11px;
    margin-right: 10px;
  }

  .hamenu .menu-links .main-menu > li .link {
    -webkit-transform: translateY(45px);
    -ms-transform: translateY(45px);
    transform: translateY(45px);
    -webkit-transition: all 0.7s;
    -o-transition: all 0.7s;
    transition: all 0.7s;
    cursor: pointer;
  }

  .hamenu .menu-links .main-menu > li .link i {
    font-size: 15px;
    margin-left: 5px;
  }

  .hamenu .menu-links .main-menu .sub-menu {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    visibility: hidden;
    z-index: -1;
    -webkit-transition-delay: 0.2s;
    -o-transition-delay: 0.2s;
    transition-delay: 0.2s;
  }

  .hamenu .menu-links .main-menu .sub-menu.sub-open {
    z-index: 3;
  }

  .hamenu .menu-links .main-menu .sub-menu.sub-open li .sub-link {
    -webkit-transform: translateY(0px);
    -ms-transform: translateY(0px);
    transform: translateY(0px);
    -webkit-transition-delay: 1s;
    -o-transition-delay: 1s;
    transition-delay: 1s;
  }

  .hamenu .menu-links .main-menu .sub-menu li {
    color: ${({ theme }) => theme.colors.gallery};
    font-size: 20px;
    font-weight: 400;
    letter-spacing: 1px;
    padding: 8px 10px;
    width: -webkit-max-content;
    width: -moz-max-content;
    width: max-content;
  }

  .hamenu .menu-links .main-menu .sub-menu li:hover {
    color: ${({ theme }) => theme.colors.white};
  }

  .hamenu .menu-links .main-menu .sub-menu li .sub-link {
    -webkit-transform: translateY(45px);
    -ms-transform: translateY(45px);
    transform: translateY(45px);
    -webkit-transition: all 0.7s;
    -o-transition: all 0.7s;
    transition: all 0.7s;
  }

  .hamenu .menu-links .main-menu .sub-menu li .sub-link.back {
    color: ${({ theme }) => theme.colors.white};
    font-size: 20px;
    font-weight: 600;
    cursor: pointer;
  }

  .hamenu .menu-links .main-menu .sub-menu li .sub-link.back i {
    margin-left: 10px;
  }

  .hamenu .menu-links .main-menu .sub-menu li .sub-link em {
    font-size: 13px;
    font-weight: 300;
    margin-left: 10px;
  }

  .hamenu .cont-info {
    color: ${({ theme }) => theme.colors.white};
    margin-top: 50px;
    position: relative;
  }

  .hamenu .cont-info:after {
    content: '';
    width: 1px;
    height: 0;
    background: rgba(255, 255, 255, 0.1);
    position: absolute;
    left: -40px;
    top: -170px;
    -webkit-transition: all 0.7s;
    -o-transition: all 0.7s;
    transition: all 0.7s;
  }

  .hamenu .cont-info .item {
    margin-bottom: 30px;
    -webkit-transform: translateY(-30px);
    -ms-transform: translateY(-30px);
    transform: translateY(-30px);
    opacity: 0;
    -webkit-transition: all 0.7s;
    -o-transition: all 0.7s;
    transition: all 0.7s;
  }

  .hamenu .cont-info .item:last-of-type {
    margin-bottom: 0;
  }

  .hamenu .cont-info .item h6 {
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;
    margin-bottom: 10px;
  }

  /* ====================== [ End navbar ] ====================== */
  /* ====================== [ Start Slider ] ====================== */
  .slider {
    position: relative;
  }

  .slider.fixed-slider {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
  }

  .slider .swiper-slide-active {
    z-index: 3;
  }

  .slider .parallax-slider {
    position: relative;
  }

  .slider .parallax-slider .swiper-slide {
    position: relative;
    overflow: hidden;
    width: 100%;
    min-height: 100vh;
    padding-bottom: 50px;
  }

  .slider .parallax-slider .swiper-slide .bg-img {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-size: cover;
  }

  .slider .parallax-slider .swiper-slide-active .caption h1[data-splitting] {
    -webkit-transition: all 0s;
    -o-transition: all 0s;
    transition: all 0s;
    opacity: 1;
    visibility: visible;
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
  }

  .slider
    .parallax-slider
    .swiper-slide-active
    .caption
    h1[data-splitting]
    .char {
    -webkit-animation: fadeInUp 0.5s cubic-bezier(0.3, 0, 0.7, 1) both;
    animation: fadeInUp 0.5s cubic-bezier(0.3, 0, 0.7, 1) both;
    -webkit-animation-delay: calc(60ms * var(--char-index));
    animation-delay: calc(60ms * var(--char-index));
  }

  .slider .parallax-slider .swiper-slide-active .caption .thin,
  .slider .parallax-slider .swiper-slide-active .caption .butn,
  .slider .parallax-slider .swiper-slide-active .caption h1,
  .slider .parallax-slider .swiper-slide-active .caption p {
    opacity: 1;
    visibility: visible;
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
  }

  .slider .parallax-slider .caption .thin {
    color: ${({ theme }) => theme.colors.bright_turquoise};
    font-size: 30px;
    font-weight: 300;
    text-transform: uppercase;
    letter-spacing: 8px;
    margin-bottom: 5px;
    opacity: 0;
    -webkit-transform: translateY(-20px);
    -ms-transform: translateY(-20px);
    transform: translateY(-20px);
    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    transition: all 0.4s;
    -webkit-transition-delay: 0.8s;
    -o-transition-delay: 0.8s;
    transition-delay: 0.8s;
  }

  .slider .parallax-slider .caption .thin span {
    color: ${({ theme }) => theme.colors.bright_turquoise};
  }

  .slider .parallax-slider .caption h1 {
    font-size: 65px;
    font-weight: 800;
    letter-spacing: 2px;
    color: ${({ theme }) => theme.colors.white};
    opacity: 0;
    -webkit-transform: translateY(20px);
    -ms-transform: translateY(20px);
    transform: translateY(20px);
    visibility: hidden;
    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    transition: all 0.4s;
    -webkit-transition-delay: 0.3s;
    -o-transition-delay: 0.3s;
    transition-delay: 0.3s;
  }

  .slider .parallax-slider .caption p {
    color: ${({ theme }) => theme.colors.gallery};
    margin-top: 15px;
    opacity: 0;
    -webkit-transform: translateY(20px);
    -ms-transform: translateY(20px);
    transform: translateY(20px);
    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    transition: all 0.4s;
    -webkit-transition-delay: 0.8s;
    -o-transition-delay: 0.8s;
    transition-delay: 0.8s;
  }

  .slider .parallax-slider .caption .butn {
    opacity: 0;
    -webkit-transform: translateY(20px);
    -ms-transform: translateY(20px);
    transform: translateY(20px);
    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    transition: all 0.4s;
    -webkit-transition-delay: 1s;
    -o-transition-delay: 1s;
    transition-delay: 1s;
  }

  .slider .parallax-slider .caption.dig h1 {
    font-weight: 800;
    font-size: 80px;
    text-transform: uppercase;
  }

  .slider .parallax-slider .caption.dig h1 .tline {
    margin-left: 80px;
  }

  .slider .parallax-slider .caption.dig h1 .whitespace {
    width: 20px;
  }

  .slider .setone {
    position: absolute;
    bottom: 8%;
    right: 40px;
    z-index: 8;
  }

  .slider .setone .swiper-nav-ctrl {
    color: ${({ theme }) => theme.colors.silver};
    font-size: 13px;
    width: 55px;
    height: 55px;
    line-height: 55px;
    text-align: center;
    margin: 5px 0;
    border: 1px solid rgba(255, 255, 255, 0.3);
    position: static;
  }

  .slider .setone .swiper-nav-ctrl:after {
    display: none;
  }

  .slider .setone.setwo {
    position: static;
  }

  .slider .setone.setwo .swiper-nav-ctrl {
    border-radius: 50%;
  }

  .slider .setone.setwo .next-ctrl {
    position: absolute;
    top: 50%;
    right: 30px;
  }

  .slider .setone.setwo .prev-ctrl {
    position: absolute;
    top: 50%;
    left: 30px;
  }

  .slider .txt-botm {
    position: absolute;
    bottom: 20px;
    left: 0;
    width: 100%;
    z-index: 8;
  }

  .slider .txt-botm .swiper-nav-ctrl {
    position: absolute;
    width: auto;
    height: auto;
    margin-top: auto;
    top: auto;
    bottom: 0;
  }

  .slider .txt-botm .swiper-nav-ctrl i {
    color: ${({ theme }) => theme.colors.silver};
    font-size: 13px;
    width: 45px;
    height: 45px;
    line-height: 45px;
    text-align: center;
    margin: 0;
    border-radius: 50%;
    display: inline-block;
    -webkit-transition: all 0.3s;
    -o-transition: all 0.3s;
    transition: all 0.3s;
  }

  .slider .txt-botm .swiper-nav-ctrl span {
    font-weight: 500;
    font-size: 12px;
    color: ${({ theme }) => theme.colors.white};
  }

  .slider .txt-botm .swiper-nav-ctrl:after {
    display: none;
  }

  .slider .txt-botm .swiper-nav-ctrl.swiper-button-next {
    right: 40px;
  }

  .slider .txt-botm .swiper-nav-ctrl.swiper-button-next i {
    margin-left: 10px;
  }

  .slider .txt-botm .swiper-nav-ctrl.swiper-button-prev {
    left: 40px;
  }

  .slider .txt-botm .swiper-nav-ctrl.swiper-button-prev i {
    margin-right: 10px;
  }

  .slider .txt-botm .swiper-nav-ctrl:hover i {
    border: 1px solid rgba(255, 255, 255, 0.3);
  }

  .slider .swiper-pagination-fraction.top {
    position: absolute;
    right: 15%;
    left: auto;
    bottom: auto;
    top: 20%;
    width: auto;
    color: ${({ theme }) => theme.colors.white};
    font-size: 40px;
    font-weight: 500;
  }

  .slider .swiper-pagination-fraction.top .swiper-pagination-current {
    font-size: 60px;
    font-weight: 700;
    position: relative;
    color: transparent;
    -webkit-text-stroke: 0.5px ${({ theme }) => theme.colors.white};
  }

  .slider .swiper-pagination-fraction.top .swiper-pagination-current:after {
    content: '/';
    color: ${({ theme }) => theme.colors.white};
    position: relative;
    margin: 0 10px;
    font-size: 12px;
    font-weight: 100;
  }

  .slider .swiper-pagination-fraction.top.botm {
    top: auto;
    bottom: 40px;
    right: 40px;
  }

  .slider .swiper-pagination-fraction.steps {
    position: absolute;
    width: 100px;
    color: ${({ theme }) => theme.colors.white};
    font-size: 15px;
    bottom: 40px;
    left: calc(50% - 50px);
    right: auto;
    top: auto;
    text-align: left;
  }

  .slider .swiper-pagination-fraction.steps:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 15%;
    width: 70%;
    height: 1px;
    background: rgba(255, 255, 255, 0.3);
  }

  .slider .swiper-pagination-fraction.steps .swiper-pagination-total {
    float: right;
  }

  .slider .social-icon {
    position: absolute;
    left: 40px;
    bottom: 40px;
    z-index: 8;
  }

  .slider .social-icon a {
    width: 40px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.05);
    color: ${({ theme }) => theme.colors.white};
    font-size: 13px;
  }

  .slider-st {
    min-height: 100vh;
    padding: 120px 0;
  }

  .slider-st .img {
    position: relative;
  }

  .slider-st .img:after {
    content: '';
    position: absolute;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
    background: -webkit-gradient(
      linear,
      left top,
      right top,
      from(${({ theme }) => theme.colors.bright_turquoise}),
      color-stop(${({ theme }) => theme.colors.lavender}),
      to(${({ theme }) => theme.colors.carnation})
    );
    background: -webkit-linear-gradient(
      left,
      ${({ theme }) => theme.colors.bright_turquoise},
      ${({ theme }) => theme.colors.lavender},
      ${({ theme }) => theme.colors.carnation}
    );
    background: -o-linear-gradient(
      left,
      ${({ theme }) => theme.colors.bright_turquoise},
      ${({ theme }) => theme.colors.lavender},
      ${({ theme }) => theme.colors.carnation}
    );
    background: linear-gradient(
      to right,
      ${({ theme }) => theme.colors.bright_turquoise},
      ${({ theme }) => theme.colors.lavender},
      ${({ theme }) => theme.colors.carnation}
    );
    border-radius: 15px;
    -webkit-transform: rotate(-3deg);
    -ms-transform: rotate(-3deg);
    transform: rotate(-3deg);
  }

  .slider-st .img:before {
    content: '';
    position: absolute;
    top: -15px;
    left: -15px;
    right: -15px;
    bottom: -15px;
    background: ${({ theme }) => theme.colors.white};
    border-radius: 15px;
    -webkit-transform: rotate(-3deg);
    -ms-transform: rotate(-3deg);
    transform: rotate(-3deg);
    opacity: 0.08;
  }

  .slider-st .img img {
    border-radius: 15px;
    -webkit-transform: rotate(3deg);
    -ms-transform: rotate(3deg);
    transform: rotate(3deg);
    position: relative;
    z-index: 2;
  }

  .slider-stwo {
    min-height: 100vh;
    position: relative;
    padding: 120px 0;
  }

  .slider-stwo:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 30%;
    height: 100%;
    background: ${({ theme }) => theme.colors.woodsmoke};
    z-index: -1;
  }

  .slider-stwo .img {
    padding-right: 30px;
  }

  .slider-stwo .img img {
    border-radius: 10px;
    -webkit-box-shadow: 0px 10px 30px rgba(255, 255, 255, 0.05);
    box-shadow: 0px 10px 30px rgba(255, 255, 255, 0.05);
  }

  .slider-stwo ul {
    margin: 30px 0 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }

  .slider-stwo ul li {
    display: inline-block;
  }

  .slider-stwo ul li div {
    display: table-cell;
  }

  .slider-stwo ul li .icon {
    width: 60px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    position: relative;
    font-size: 20px;
  }

  .slider-stwo ul li .icon .bord {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .slider-stwo ul li .icon .bord:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: ${({ theme }) => theme.colors.woodsmoke};
    border-radius: 5px;
    z-index: -1;
  }

  .slider-stwo ul li .icon .bord:before {
    content: '';
    position: absolute;
    top: -1px;
    left: -1px;
    bottom: -1px;
    right: -1px;
    border-radius: 5px;
    background: -webkit-gradient(
      linear,
      left top,
      right top,
      from(${({ theme }) => theme.colors.bright_turquoise}),
      color-stop(${({ theme }) => theme.colors.lavender}),
      to(${({ theme }) => theme.colors.carnation})
    );
    background: -webkit-linear-gradient(
      left,
      ${({ theme }) => theme.colors.bright_turquoise},
      ${({ theme }) => theme.colors.lavender},
      ${({ theme }) => theme.colors.carnation}
    );
    background: -o-linear-gradient(
      left,
      ${({ theme }) => theme.colors.bright_turquoise},
      ${({ theme }) => theme.colors.lavender},
      ${({ theme }) => theme.colors.carnation}
    );
    background: linear-gradient(
      to right,
      ${({ theme }) => theme.colors.bright_turquoise},
      ${({ theme }) => theme.colors.lavender},
      ${({ theme }) => theme.colors.carnation}
    );
    z-index: -2;
  }

  .slider-stwo ul li .cont {
    display: table-cell;
    vertical-align: middle;
    padding-left: 15px;
  }

  .slider-stwo ul li .cont p {
    font-size: 13px;
    margin-top: 5px;
  }

  .particles {
    min-height: 100vh;
    position: relative;
    z-index: 2;
    overflow: hidden;
  }

  .particles .cont h1 {
    font-size: 90px;
    font-weight: 800;
  }

  .particles .animation-wrapper {
    opacity: 0.5;
  }

  .freelancre {
    min-height: 100vh;
    padding: 100px 0;
    position: relative;
    overflow: hidden;
  }

  .freelancre:after {
    content: '';
    width: 140%;
    background: rgba(255, 255, 255, 0.01);
    height: 100%;
    -webkit-transform: rotate(15deg);
    -ms-transform: rotate(15deg);
    transform: rotate(15deg);
    position: absolute;
    top: -40%;
    left: -20%;
    z-index: -1;
  }

  .freelancre .img {
    position: relative;
    width: 280px;
    height: 280px;
    border-radius: 50%;
    z-index: 2;
  }

  .freelancre .img img {
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    border-radius: 50%;
  }

  .freelancre .img:after {
    content: '';
    background: -webkit-gradient(
      linear,
      right top,
      left top,
      from(${({ theme }) => theme.colors.bright_turquoise}),
      color-stop(${({ theme }) => theme.colors.lavender}),
      to(${({ theme }) => theme.colors.carnation})
    );
    background: -webkit-linear-gradient(
      right,
      ${({ theme }) => theme.colors.bright_turquoise},
      ${({ theme }) => theme.colors.lavender},
      ${({ theme }) => theme.colors.carnation}
    );
    background: -o-linear-gradient(
      right,
      ${({ theme }) => theme.colors.bright_turquoise},
      ${({ theme }) => theme.colors.lavender},
      ${({ theme }) => theme.colors.carnation}
    );
    background: linear-gradient(
      to left,
      ${({ theme }) => theme.colors.bright_turquoise},
      ${({ theme }) => theme.colors.lavender},
      ${({ theme }) => theme.colors.carnation}
    );
    position: absolute;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
    border-radius: 50%;
    z-index: -1;
  }

  .freelancre .cont h1 {
    font-size: 35px;
  }

  .freelancre .states {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding-bottom: 50px;
  }

  .freelancre .states .flex {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }

  .freelancre .states ul {
    margin: 0;
  }

  .freelancre .states li {
    margin-right: 100px;
  }

  .freelancre .states li:last-of-type {
    margin-right: 0;
  }

  .freelancre .states li h3 {
    font-size: 50px;
    font-weight: 400;
    margin-right: 20px;
  }

  .freelancre .states li p {
    font-size: 12px;
    text-transform: uppercase;
  }

  .freelancre .states .mail-us {
    margin-left: auto;
  }

  .freelancre .states .mail-us .text {
    text-align: right;
    padding-right: 20px;
  }

  .freelancre .states .mail-us .text h6 {
    font-size: 14px;
    margin-top: 5px;
  }

  .freelancre .states .mail-us .icon-box {
    width: 60px;
    height: 60px;
    line-height: 65px;
    text-align: center;
    border-radius: 5px;
    background: -webkit-linear-gradient(
      323.53deg,
      ${({ theme }) => theme.colors.woodsmoke} 6.69%,
      rgba(4, 4, 5, 0.1) 85.43%
    );
    background: -o-linear-gradient(
      323.53deg,
      ${({ theme }) => theme.colors.woodsmoke} 6.69%,
      rgba(4, 4, 5, 0.1) 85.43%
    );
    background: linear-gradient(
      126.47deg,
      ${({ theme }) => theme.colors.woodsmoke} 6.69%,
      rgba(4, 4, 5, 0.1) 85.43%
    );
    font-size: 30px;
  }

  .slider-bus {
    min-height: 100vh;
    position: relative;
  }

  .slider-bus .swiper-img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .slider-bus .setone {
    position: absolute;
    bottom: 8%;
    right: 40px;
    z-index: 8;
  }

  .slider-bus .setone .swiper-nav-ctrl {
    color: ${({ theme }) => theme.colors.silver};
    font-size: 13px;
    width: 55px;
    height: 55px;
    line-height: 55px;
    text-align: center;
    margin: 5px 0;
    border: 1px solid rgba(255, 255, 255, 0.3);
    position: static;
  }

  .slider-bus .setone .swiper-nav-ctrl:after {
    display: none;
  }

  .slider-bus .setone.setwo {
    position: static;
  }

  .slider-bus .setone.setwo .swiper-nav-ctrl {
    border-radius: 50%;
  }

  .slider-bus .setone.setwo .next-ctrl {
    position: absolute;
    top: 50%;
    right: 30px;
  }

  .slider-bus .setone.setwo .prev-ctrl {
    position: absolute;
    top: 50%;
    left: 30px;
  }

  .slider-bus .swiper-pagination-fraction {
    position: absolute;
    right: auto;
    left: 60px;
    bottom: 30px;
    width: auto;
    color: ${({ theme }) => theme.colors.white};
    font-size: 40px;
    font-weight: 500;
  }

  .slider-bus .swiper-pagination-fraction .swiper-pagination-current {
    font-size: 60px;
    font-weight: 700;
    position: relative;
    color: transparent;
    -webkit-text-stroke: 0.5px ${({ theme }) => theme.colors.white};
  }

  .slider-bus .swiper-pagination-fraction .swiper-pagination-current:after {
    content: '/';
    color: ${({ theme }) => theme.colors.white};
    position: relative;
    margin: 0 10px;
    font-size: 12px;
    font-weight: 100;
  }

  .slider-bus .swiper-slide-active .caption h1 {
    -webkit-transition: all 0s;
    -o-transition: all 0s;
    transition: all 0s;
    opacity: 1;
    visibility: visible;
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
  }

  .slider-bus .swiper-slide-active .caption h1 .char {
    -webkit-animation: fadeInUp 0.5s cubic-bezier(0.3, 0, 0.7, 1) both;
    animation: fadeInUp 0.5s cubic-bezier(0.3, 0, 0.7, 1) both;
    -webkit-animation-delay: calc(60ms * var(--char-index));
    animation-delay: calc(60ms * var(--char-index));
  }

  .slider-bus .swiper-slide-active .caption .thin,
  .slider-bus .swiper-slide-active .caption .simple-btn,
  .slider-bus .swiper-slide-active .caption .butn,
  .slider-bus .swiper-slide-active .caption p {
    opacity: 1;
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
  }

  .slider-bus .caption .thin {
    font-size: 16px;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 8px;
    margin-bottom: 5px;
    opacity: 0;
    -webkit-transform: translateY(-20px);
    -ms-transform: translateY(-20px);
    transform: translateY(-20px);
    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    transition: all 0.4s;
    -webkit-transition-delay: 0.8s;
    -o-transition-delay: 0.8s;
    transition-delay: 0.8s;
  }

  .slider-bus .caption h1 {
    font-size: 90px;
    font-weight: 800;
    letter-spacing: 4px;
    color: ${({ theme }) => theme.colors.white};
    opacity: 0;
    visibility: hidden;
    -webkit-transition: opacity 0.5s, visibility 0.5s;
    -o-transition: opacity 0.5s, visibility 0.5s;
    transition: opacity 0.5s, visibility 0.5s;
  }

  .slider-bus .caption p {
    color: ${({ theme }) => theme.colors.gallery};
    opacity: 0;
    -webkit-transform: translateY(20px);
    -ms-transform: translateY(20px);
    transform: translateY(20px);
    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    transition: all 0.4s;
    -webkit-transition-delay: 0.8s;
    -o-transition-delay: 0.8s;
    transition-delay: 0.8s;
  }

  .slider-bus .caption .simple-btn,
  .slider-bus .caption .butn {
    opacity: 0;
    -webkit-transform: translateY(20px);
    -ms-transform: translateY(20px);
    transform: translateY(20px);
    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    transition: all 0.4s;
    -webkit-transition-delay: 1s;
    -o-transition-delay: 1s;
    transition-delay: 1s;
  }

  .slider-bus .ontop {
    position: relative;
    z-index: 5;
  }

  .arch-slider {
    padding-bottom: 80px;
  }

  .arch-slider .parallax-slider .caption h5 {
    font-size: 50px;
    font-weight: 200;
  }

  .arch-slider .parallax-slider .caption h1 {
    font-size: 75px;
    font-weight: 600;
    letter-spacing: 2px;
  }

  .arch-slider .parallax-slider .caption p {
    font-weight: 300;
    padding-left: 100px;
    margin-left: 100px;
    position: relative;
  }

  .arch-slider .parallax-slider .caption p:after {
    content: '';
    position: absolute;
    left: 0;
    top: 10px;
    background: ${({ theme }) => theme.colors.gallery};
    width: 70px;
    height: 1px;
  }

  .arch-slider .parallax-slider .explore {
    margin-left: auto;
    margin-top: -100px;
  }

  .arch-slider .parallax-slider .explore a {
    font-size: 13px;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 2px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  }

  .arch-slider .parallax-slider .explore a i {
    font-size: 12px;
    margin-left: 10px;
  }

  .arch-slider .setting {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 50px;
    width: 300px;
    background: ${({ theme }) => theme.colors.mine_shaft}_dark;
    z-index: 4;
  }

  .arch-slider .setting .swiper-button-next,
  .arch-slider .setting .swiper-button-prev {
    color: ${({ theme }) => theme.colors.white};
  }

  .arch-slider .setting .swiper-button-next:after,
  .arch-slider .setting .swiper-button-prev:after {
    display: none;
  }

  .arch-slider .setting .next-ctrl {
    padding-left: 25px;
    margin-right: 20px;
    border-left: 1px solid rgba(255, 255, 255, 0.1);
  }

  .arch-slider .setting .prev-ctrl {
    padding-right: 25px;
    margin-left: 20px;
    border-right: 1px solid rgba(255, 255, 255, 0.1);
  }

  .arch-slider .setting .swiper-pagination-bullets {
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translateX(-50%) translateY(-50%);
    -ms-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
  }

  .arch-slider .setting .swiper-pagination-bullets .swiper-pagination-bullet {
    width: 5px;
    height: 5px;
    background: rgba(255, 255, 255, 0.4);
    border-radius: 50%;
    margin: 0 7px;
    position: relative;
    opacity: 1;
  }

  .arch-slider
    .setting
    .swiper-pagination-bullets
    .swiper-pagination-bullet-active {
    background: ${({ theme }) => theme.colors.white};
    -webkit-transform: scale(1.5);
    -ms-transform: scale(1.5);
    transform: scale(1.5);
  }

  .curve-bg {
    position: absolute;
    top: 0;
    left: -10%;
    width: 100%;
    height: 100%;
    z-index: 3;
  }

  .pages-header {
    min-height: 75vh;
    padding: 150px 0 0;
    position: relative;
  }

  .pages-header .cont h1 {
    font-size: 55px;
  }

  .pages-header .half {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 70%;
    z-index: -1;
    overflow: hidden;
  }

  .page-header .cont {
    padding: 220px 0 50px;
  }

  .page-header .cont h1 {
    font-size: 80px;
    font-weight: 600;
  }

  .page-header .img-wrapper {
    position: relative;
    min-height: 70vh;
  }

  .page-header .img-wrapper .title {
    position: absolute;
    top: 0;
    right: 0px;
    width: 100%;
    text-align: right;
    -webkit-transform: translateY(-55%);
    -ms-transform: translateY(-55%);
    transform: translateY(-55%);
    z-index: 3;
  }

  .page-header .img-wrapper .title h3 {
    font-size: 100px;
    font-weight: 900;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: ${({ theme }) => theme.colors.white};
    color: transparent;
  }

  .page-header .img-wrapper .map {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .page-header.proj-det.bg-img {
    min-height: 85vh;
    padding-bottom: 100px;
  }

  .page-header.proj-det.bg-img .item h6 {
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 4px;
    text-transform: uppercase;
    margin-bottom: 10px;
  }

  .page-header.proj-det.bg-img .item p {
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 12px;
  }

  .page-header.proj-det.bg-img .item p a {
    margin: 0 7px;
  }

  .page-header.proj-det.bg-img .item p a:first-of-type {
    margin-left: 0;
  }

  .page-header.proj-det.bg-img .item p a:last-of-type {
    margin-right: 0;
  }

  .page-header.proj-det .img-wrapper {
    min-height: 80vh;
  }

  .works-header {
    min-height: 80vh;
  }

  .works-header.hfixd {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
  }

  .works-header .capt h4 {
    font-weight: 200;
    font-size: 24px;
    line-height: 1.8;
  }

  .works-header .capt h1 {
    font-size: 60px;
    font-weight: 800;
    letter-spacing: 2px;
    text-transform: uppercase;
  }

  .works-header .capt h1 span {
    display: block;
    font-size: 20px;
    font-weight: 300;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.bright_turquoise};
  }

  .works-header .capt .bactxt {
    font-size: 30vw;
    font-weight: bold;
    color: transparent;
    -webkit-text-stroke: 1px rgba(255, 255, 255, 0.1);
    z-index: -1;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    text-align: center;
    opacity: 0.5;
  }

  .static {
    position: static;
  }

  .circle-bg {
    position: relative;
  }

  .circle-bg .circle-color {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 5;
  }

  .circle-bg .circle-color.fixed {
    position: fixed;
    pointer-events: none;
    opacity: 0.5;
  }

  .circle-bg .gradient-circle {
    position: absolute;
    left: -250px;
    top: 250px;
    right: auto;
    bottom: auto;
    z-index: -1;
    width: 500px;
    height: 500px;
    border-radius: 70%;
    background-image: -webkit-linear-gradient(
      45deg,
      ${({ theme }) => theme.colors.azure_radiance},
      ${({ theme }) => theme.colors.picton_blue}
    );
    background-image: -o-linear-gradient(
      45deg,
      ${({ theme }) => theme.colors.azure_radiance},
      ${({ theme }) => theme.colors.picton_blue}
    );
    background-image: linear-gradient(45deg, ${({ theme }) => theme.colors.azure_radiance}, ${({ theme }) => theme.colors.picton_blue});
    opacity: 0.25;
    -webkit-filter: blur(100px);
    filter: blur(100px);
  }

  .circle-bg .gradient-circle.two {
    left: auto;
    top: -250px;
    right: -250px;
    bottom: auto;
    background-image: -webkit-linear-gradient(
      45deg,
      ${({ theme }) => theme.colors.sunset_orange},
      ${({ theme }) => theme.colors.purple_heart}
    );
    background-image: -o-linear-gradient(
      45deg,
      ${({ theme }) => theme.colors.sunset_orange},
      ${({ theme }) => theme.colors.purple_heart}
    );
    background-image: linear-gradient(45deg, ${({ theme }) => theme.colors.sunset_orange}, ${({ theme }) => theme.colors.purple_heart});
  }

  .main-content {
    background: ${({ theme }) => theme.colors.woodsmoke};
    position: relative;
    z-index: 3;
    overflow-x: hidden !important;
  }

  /* ====================== [ End Slider ] ====================== */
  /* ====================== [ Start showcase ] ====================== */
  .showcase-full .parallax-slider .swiper-slide .bg-img {
    background-position: center center;
  }

  .showcase-full .parallax-slider .caption {
    position: relative;
  }

  .showcase-full .parallax-slider .caption h1 {
    font-size: 80px;
    font-weight: 700;
    letter-spacing: 1px;
    -webkit-transition: all 0.5s;
    -o-transition: all 0.5s;
    transition: all 0.5s;
    position: relative;
  }

  .showcase-full .parallax-slider .caption h1 .stroke {
    margin-bottom: 10px;
  }

  .showcase-full .parallax-slider .caption h1 .bord {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100vw;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
    height: 1px;
    background: ${({ theme }) => theme.colors.white};
    border: 0;
    opacity: 0.1;
  }

  .showcase-full .parallax-slider .caption .discover {
    position: absolute;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    right: 0;
    width: 200px;
    height: 200px;
    text-align: center;
    border: 1px solid rgba(255, 255, 255, 0.4);
    border-radius: 50%;
    font-size: 13px;
    font-weight: 200;
    letter-spacing: 4px;
    text-transform: uppercase;
    -webkit-transition-delay: 2s;
    -o-transition-delay: 2s;
    transition-delay: 2s;
    -webkit-transition: all 0.7s;
    -o-transition: all 0.7s;
    transition: all 0.7s;
    opacity: 0;
  }

  .showcase-full .parallax-slider .caption .discover span {
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translateX(-50%) translateY(-50%);
    -ms-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
    line-height: 50px;
  }

  .showcase-full .parallax-slider .swiper-slide-active .caption .discover {
    opacity: 1;
    -webkit-transition: all 0.7s;
    -o-transition: all 0.7s;
    transition: all 0.7s;
  }

  .showcase-full .dots {
    bottom: 30px;
    z-index: 1;
  }

  .showcase-full .dots span {
    background: ${({ theme }) => theme.colors.white};
    width: 5px;
    height: 5px;
    margin: 0 7px !important;
    border-radius: 50% !important;
  }

  .showcase-full .dots span.swiper-pagination-bullet-active {
    position: relative;
  }

  .showcase-full .dots span.swiper-pagination-bullet-active:after {
    content: '';
    position: absolute;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
    border: 1px solid ${({ theme }) => theme.colors.white};
    border-radius: 50%;
  }

  .showcase-carus {
    height: 100vh;
  }

  .showcase-carus .swiper-container {
    height: 100%;
  }

  .showcase-carus .caption h1,
  .showcase-carus .copy-cap h1 {
    font-size: 90px;
    font-weight: 800;
    line-height: 1.2;
    position: relative;
  }

  .showcase-carus .copy-cap {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  .showcase-carus .copy-cap .cap h1 span {
    color: transparent;
    -webkit-text-stroke: 1px ${({ theme }) => theme.colors.white};
  }

  .showcase-carus .copy-cap .cap h1 .stroke {
    color: ${({ theme }) => theme.colors.white};
    -webkit-text-stroke: 0;
  }

  .showcase-carus.circle-slide .swiper-slide {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }

  .showcase-carus.circle-slide .swiper-slide .bg-img {
    height: 500px;
    width: 500px;
    border-radius: 50%;
    margin: auto;
    background-position: center center;
  }

  .showcase-carus.circle-slide .swiper-slide .bg-img:before {
    border-radius: 50%;
  }

  .showcase-carus.circle-slide .caption,
  .showcase-carus.circle-slide .copy-cap {
    position: absolute;
    top: 0;
    left: -25%;
    width: 100%;
    height: 100%;
  }

  .showcase-carus.circle-slide .caption h1,
  .showcase-carus.circle-slide .copy-cap h1 {
    font-size: 70px;
    display: block;
  }

  .showcase-carus.circle-slide .caption h1 .stroke,
  .showcase-carus.circle-slide .copy-cap h1 .stroke {
    display: inline-block;
    color: transparent;
    -webkit-text-stroke: 1px ${({ theme }) => theme.colors.white};
  }

  .showcase-carus.circle-slide .caption h1 span,
  .showcase-carus.circle-slide .copy-cap h1 span {
    margin-left: auto;
    color: transparent;
    -webkit-text-stroke: 1px ${({ theme }) => theme.colors.white};
  }

  .showcase-carus.circle-slide .copy-cap .cap h1 span {
    color: ${({ theme }) => theme.colors.white};
    -webkit-text-stroke: 0;
  }

  .showcase-carus.circle-slide .copy-cap .cap h1 .stroke {
    color: ${({ theme }) => theme.colors.white};
    -webkit-text-stroke: 0;
  }

  .showcase-carus.circle-slide .caption h1 .stroke,
  .showcase-carus.circle-slide .copy-cap h1 .stroke {
    -webkit-transform: skewX(0) translateX(0);
    -ms-transform: skewX(0) translateX(0);
    transform: skewX(0) translateX(0);
    opacity: 1;
  }

  .showcase-carus.circle-slide .caption h1 span,
  .showcase-carus.circle-slide .copy-cap h1 span {
    -webkit-transform: skewX(0) translateX(0);
    -ms-transform: skewX(0) translateX(0);
    transform: skewX(0) translateX(0);
    opacity: 1;
  }

  .showstyle {
    height: 100vh;
  }

  .showstyle .swiper-container {
    height: 100%;
  }

  .showstyle .swiper-slide .bg-img {
    height: 70vh;
    margin: 15vh 0 0;
  }

  .showstyle .caption h1 {
    font-size: 90px;
    font-weight: 800;
    line-height: 1.2;
    -webkit-transition: all 0.5s;
    -o-transition: all 0.5s;
    transition: all 0.5s;
  }

  .showstyle .caption h1 .stroke {
    color: transparent;
    -webkit-text-stroke: 1px ${({ theme }) => theme.colors.white};
  }

  .showstyle .caption h1 span {
    margin-left: 200px;
  }

  .showstyle .caption .discover {
    margin-top: 50px;
    opacity: 0;
    -webkit-transition: all 0.7s;
    -o-transition: all 0.7s;
    transition: all 0.7s;
  }

  .showstyle .caption .discover i {
    display: inline-block;
    width: 70px;
    height: 70px;
    line-height: 70px;
    text-align: center;
    border: 1px solid ${({ theme }) => theme.colors.white};
    border-radius: 50%;
    margin-right: 10px;
  }

  .showstyle .caption .discover span {
    font-size: 13px;
    font-weight: 600;
  }

  .showcase-grid {
    height: 100vh;
  }

  .showcase-grid .swiper-container {
    height: 100%;
  }

  .showcase-grid .swiper-slide .bg-img {
    height: 76vh;
    margin: 12vh 0 0;
    position: relative;
    background-position: center center;
  }

  .div-tooltip-tit {
    display: none;
    position: absolute;
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.cod_gray};
    padding: 0 10px;
    height: 50px;
    line-height: 50px;
    font-size: 15px;
    font-weight: 600;
    z-index: 99999;
  }

  .div-tooltip-sub {
    display: none;
    position: absolute;
    background-color: ${({ theme }) => theme.colors.cod_gray};
    padding: 5px 10px;
    font-size: 13px;
    font-weight: 500;
    z-index: 99999;
  }

  /* ====================== [ end showcase ] ====================== */
  /* ====================== [ Start Intro ] ====================== */
  .about .content .co-tit {
    font-weight: 400;
    margin-bottom: 30px;
  }

  .about .img-mons .img1,
  .about .img-mons .img2,
  .about .img-mons .img3 {
    height: 200px;
    border-radius: 10px;
    overflow: hidden;
  }

  .about .img-mons .img1 img,
  .about .img-mons .img2 img,
  .about .img-mons .img3 img {
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    -o-object-position: center center;
    object-position: center center;
  }

  .about .img-mons .img2 {
    height: 240px;
  }

  .about .img-mons .img3 {
    width: 75%;
    margin-top: 20px;
  }

  .about .img-mons .img3.exp {
    background: ${({ theme }) => theme.colors.woodsmoke};
    padding: 30px;
  }

  .about .img-mons .img3.exp h2 {
    font-weight: 800;
    margin-bottom: 5px;
  }

  .about .img-mons .img3.exp h6 {
    letter-spacing: 2px;
  }

  .about .blc-img .bimg {
    padding-right: 80px;
    padding-bottom: 80px;
    position: relative;
  }

  .about .blc-img .bimg img {
    border-radius: 15px;
    overflow: hidden;
    -webkit-box-shadow: 0px 10px 30px rgba(100, 100, 100, 0.3);
    box-shadow: 0px 10px 30px rgba(100, 100, 100, 0.3);
  }

  .about .blc-img .bimg .bg-img {
    position: absolute;
    right: 0px;
    bottom: 0;
    width: 300px;
    height: 300px;
    -webkit-box-shadow: 0px 10px 30px rgba(100, 100, 100, 0.3);
    box-shadow: 0px 10px 30px rgba(100, 100, 100, 0.3);
    background-position: center center;
    border-radius: 15px;
    overflow: hidden;
  }

  .about .blc-img .skills-circle {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    background: ${({ theme }) => theme.colors.cod_gray};
    padding: 30px;
    border-radius: 15px;
    position: relative;
    margin-top: -80px;
    right: -50px;
    -webkit-box-shadow: 0px 10px 20px -5px rgba(52, 60, 70, 0.1);
    box-shadow: 0px 10px 20px -5px rgba(52, 60, 70, 0.1);
  }

  .about .blc-img .skills-circle .item:last-of-type {
    margin-left: 30px;
  }

  .about .ftbox ul {
    margin: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }

  .about .ftbox ul li {
    width: 100%;
    padding: 35px 25px;
    text-align: center;
    background: ${({ theme }) => theme.colors.woodsmoke};
    border-radius: 5px;
    position: relative;
  }

  .about .ftbox ul li.space {
    margin: 0 10px;
  }

  .about .ftbox ul li .icon {
    color: ${({ theme }) => theme.colors.bright_turquoise};
    font-size: 30px;
    margin-bottom: 20px;
  }

  .about .ftbox ul li h6 {
    font-size: 16px;
    font-weight: 400;
  }

  .about .ftbox ul li .dots span {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.gallery};
    position: absolute;
    right: 10px;
    bottom: 12px;
    opacity: 0.1;
  }

  .about .ftbox ul li .dots span:first-of-type {
    bottom: 18px;
  }

  .about .ftbox ul li .dots span:last-of-type {
    right: 16px;
  }

  .agency .content h4 {
    font-weight: 700;
    font-size: 40px;
    line-height: 1.5;
    margin-bottom: 20px;
  }

  .agency .content ul {
    margin: 0;
  }

  .agency .content ul li {
    margin-top: 25px;
    padding-left: 25px;
    position: relative;
  }

  .agency .content ul li:after {
    content: '';
    width: 10px;
    height: 10px;
    border: 1px solid ${({ theme }) => theme.colors.dusty_gray};
    border-radius: 50%;
    position: absolute;
    left: 0;
    top: 2px;
  }

  .agency .img {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    position: relative;
  }

  .agency .img .imgone {
    width: 55%;
    position: relative;
    bottom: -80px;
    margin-bottom: 80px;
    border-radius: 4px;
    border: 5px solid ${({ theme }) => theme.colors.white};
    -webkit-box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1);
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1);
    overflow: hidden;
  }

  .agency .img .imgtwo {
    width: 55%;
    position: absolute;
    right: 0;
    border-radius: 4px;
    border: 5px solid ${({ theme }) => theme.colors.white};
    -webkit-box-shadow: -15px 10px 30px rgba(0, 0, 0, 0.05);
    box-shadow: -15px 10px 30px rgba(0, 0, 0, 0.05);
    overflow: hidden;
    z-index: 2;
  }

  .agency .img .icon {
    width: 100px;
    height: 100px;
    line-height: 135px;
    text-align: center;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.white};
    position: absolute;
    bottom: 20%;
    left: 40%;
    z-index: 3;
  }

  .agency .img .icon:after {
    content: '';
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    z-index: -1;
  }

  .agency .img .icon svg {
    fill: ${({ theme }) => theme.colors.bright_turquoise};
    width: 90px;
  }

  .agency .img .exp {
    position: absolute;
    right: 0;
    bottom: 0;
  }

  .agency .img .exp h6 {
    font-size: 12px;
    color: ${({ theme }) => theme.colors.dusty_gray};
    margin-top: 5px;
    position: relative;
  }

  .agency .img .exp h6:after {
    content: '';
    width: 30px;
    height: 1px;
    background: ${({ theme }) => theme.colors.bright_turquoise};
    position: absolute;
    left: -40px;
    top: 45%;
  }

  .agency .img .exp h2 {
    font-size: 70px;
    font-weight: 700;
  }

  .agency .imgsec {
    padding-right: 30px;
  }

  .agency .imgsec .imgone {
    position: relative;
    top: 0px;
  }

  .agency .imgsec .imgtwo {
    position: relative;
    bottom: 0px;
  }

  .agency .imgsec .exp {
    padding: 10px 30px;
    position: relative;
    margin-top: 15px;
  }

  .agency .imgsec .exp:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: ${({ theme }) => theme.colors.woodsmoke};
    z-index: -1;
  }

  .agency .imgsec .exp:before {
    content: '';
    position: absolute;
    top: -1px;
    left: -1px;
    bottom: -1px;
    right: -1px;
    background: -webkit-gradient(
      linear,
      left top,
      right top,
      from(${({ theme }) => theme.colors.bright_turquoise}),
      color-stop(${({ theme }) => theme.colors.lavender}),
      to(${({ theme }) => theme.colors.carnation})
    );
    background: -webkit-linear-gradient(
      left,
      ${({ theme }) => theme.colors.bright_turquoise},
      ${({ theme }) => theme.colors.lavender},
      ${({ theme }) => theme.colors.carnation}
    );
    background: -o-linear-gradient(
      left,
      ${({ theme }) => theme.colors.bright_turquoise},
      ${({ theme }) => theme.colors.lavender},
      ${({ theme }) => theme.colors.carnation}
    );
    background: linear-gradient(
      to right,
      ${({ theme }) => theme.colors.bright_turquoise},
      ${({ theme }) => theme.colors.lavender},
      ${({ theme }) => theme.colors.carnation}
    );
    z-index: -2;
  }

  .agency .imgsec .exp h6 {
    color: ${({ theme }) => theme.colors.dusty_gray};
    margin-top: 5px;
  }

  .agency .imgsec .exp h2 {
    font-size: 70px;
    font-weight: 700;
  }

  .about-us .img {
    padding-left: 150px;
    padding-right: 50px;
    position: relative;
  }

  .about-us .img:before {
    content: '';
    position: absolute;
    top: -50px;
    right: 0;
    width: 400px;
    height: 400px;
    background-image: url(../img/dots.png);
    background-repeat: repeat;
    opacity: 0.3;
    z-index: -1;
  }

  .about-us .img .stauts {
    position: absolute;
    bottom: 50px;
    left: 30px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }

  .about-us .img .stauts .item {
    padding: 30px 20px;
    background: ${({ theme }) => theme.colors.mine_shaft}_dark;
    margin-right: 50px;
    position: relative;
  }

  .about-us .img .stauts .item:after {
    content: '';
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    border: 1px solid rgba(255, 255, 255, 0.2);
  }

  .about-us .img .stauts .item:first-of-type {
    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.bunker};
  }

  .about-us .img .stauts .item h4 {
    font-size: 45px;
    font-weight: 800;
    display: table-cell;
    vertical-align: middle;
    padding-right: 20px;
  }

  .about-us .img .stauts .item h4 span {
    font-size: 30px;
    font-weight: 500;
    margin-left: 5px;
  }

  .about-us .img .stauts .item h6 {
    font-size: 15px;
    display: table-cell;
    vertical-align: middle;
  }

  .about-cr .img img {
    width: 105%;
    margin-left: -5%;
  }

  .about-cr .cont {
    padding-left: 50px;
  }

  .about-cr .cont h3 {
    font-size: 60px;
    font-weight: 600;
    margin-bottom: 30px;
    margin-left: -120px;
  }

  .about-cr .cont h6 {
    font-size: 30px;
    font-weight: 200;
    font-style: italic;
    margin-bottom: 40px;
  }

  .about-cr .cont .vid-area {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }

  .about-cr .cont .vid-area .vid-icon {
    padding-right: 30px;
  }

  .about-cr .cont .vid-area .vid-icon .vid-butn {
    width: 70px;
    height: 70px;
    line-height: 70px;
    text-align: center;
    font-size: 20px;
    border-radius: 50%;
    position: relative;
    z-index: 2;
  }

  .about-cr .cont .vid-area .vid-icon .vid-butn:after {
    content: '';
    position: absolute;
    top: 1px;
    left: 1px;
    right: 1px;
    bottom: 1px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.woodsmoke};
    z-index: -1;
    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    transition: all 0.4s;
  }

  .about-cr .cont .vid-area .vid-icon .vid-butn:hover:after {
    -webkit-transform: scale(0);
    -ms-transform: scale(0);
    transform: scale(0);
  }

  .about-cr .cont .vid-area .text {
    font-size: 13px;
  }

  .about-cr .cont .states {
    margin-top: 50px;
  }

  .about-cr .cont .states p {
    font-size: 13px;
    margin-top: 10px;
  }

  .about-ar .img {
    position: relative;
  }

  .about-ar .img .hero-bg {
    width: 420px;
    height: 420px;
  }

  .about-ar .img .exp {
    position: absolute;
    top: 30px;
    left: 30px;
    width: 360px;
    height: 360px;
    background: rgba(35, 35, 35, 0.9);
  }

  .about-ar .img .exp h2 {
    font-size: 150px;
    font-weight: 700;
    text-align: center;
    margin: auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: ${({ theme }) => theme.colors.sorrell_brown};
    line-height: 1;
  }

  .about-ar .img .exp p {
    color: ${({ theme }) => theme.colors.sorrell_brown};
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 2px;
  }

  .about-ar .content h3 {
    font-size: 55px;
    letter-spacing: 1px;
    text-transform: uppercase;
    margin-bottom: 15px;
  }

  .hero-sec .skills-box {
    padding-left: 30px;
  }

  .hero-sec .skills-box .skill-item {
    margin-bottom: 80px;
  }

  .intro-section .htit {
    font-size: 28px;
    font-weight: 500;
  }

  .intro-section .htit span {
    font-size: 17px;
    font-weight: 300;
    color: ${({ theme }) => theme.colors.bright_turquoise};
    margin-right: 5px;
  }

  .intro-section .item h6 {
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 4px;
    text-transform: uppercase;
    margin-bottom: 10px;
  }

  .intro-section .item p {
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 11px;
  }

  .intro-section .item p a {
    margin: 0 7px;
  }

  .intro-section .item p a:first-of-type {
    margin-left: 0;
  }

  .intro-section .item p a:last-of-type {
    margin-right: 0;
  }

  .extra-text {
    font-size: 22px;
  }

  .video-wrapper {
    min-height: 500px;
  }

  .video-wrapper .vid {
    position: relative;
    z-index: 8;
  }

  .video-wrapper .vid .vid-butn:hover .icon {
    color: ${({ theme }) => theme.colors.white};
  }

  .video-wrapper .vid .vid-butn:hover .icon:before {
    -webkit-transform: scale(0);
    -ms-transform: scale(0);
    transform: scale(0);
  }

  .video-wrapper .vid .vid-butn .icon {
    color: ${({ theme }) => theme.colors.shark};
    width: 100px;
    height: 100px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    line-height: 100px;
    text-align: center;
    font-size: 17px;
    position: relative;
    -webkit-transition: all 0.5s;
    -o-transition: all 0.5s;
    transition: all 0.5s;
  }

  .video-wrapper .vid .vid-butn .icon:after {
    content: '';
    position: absolute;
    top: 5px;
    bottom: 5px;
    right: 5px;
    left: 5px;
    border: 1px solid ${({ theme }) => theme.colors.gallery};
    border-radius: 50%;
    z-index: -1;
  }

  .video-wrapper .vid .vid-butn .icon:before {
    content: '';
    position: absolute;
    top: 5px;
    bottom: 5px;
    right: 5px;
    left: 5px;
    background: ${({ theme }) => theme.colors.white};
    border-radius: 50%;
    z-index: -1;
    -webkit-transition: all 0.5s cubic-bezier(1, 0, 0, 1);
    -o-transition: all 0.5s cubic-bezier(1, 0, 0, 1);
    transition: all 0.5s cubic-bezier(1, 0, 0, 1);
  }

  .js-scroll__content {
    -webkit-transform-origin: top left;
    -ms-transform-origin: top left;
    transform-origin: top left;
    will-change: transform;
  }

  /* ====================== [ End Intro ] ====================== */
  /* ====================== [ Start services ] ====================== */
  .services {
    position: relative;
  }

  .services .container {
    position: relative;
    z-index: 2;
  }

  .services.box .item-box {
    border: 0;
    border-radius: 15px;
    background: rgba(255, 255, 255, 0.01);
  }

  .services.box .item-box .icon {
    font-size: 60px;
  }

  .services.box .item-box .icon:after {
    display: none;
  }

  .services .item-box {
    padding: 80px 30px;
    text-align: center;
    border: 1px solid rgba(255, 255, 255, 0.05);
  }

  .services .item-box .icon {
    position: relative;
    width: 80px;
    height: 80px;
    line-height: 80px;
    font-size: 40px;
    margin-bottom: 30px;
  }

  .services .item-box .icon:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: -webkit-gradient(
      linear,
      left top,
      right top,
      from(${({ theme }) => theme.colors.bright_turquoise}),
      color-stop(${({ theme }) => theme.colors.lavender}),
      to(${({ theme }) => theme.colors.carnation})
    );
    background: -webkit-linear-gradient(
      left,
      ${({ theme }) => theme.colors.bright_turquoise},
      ${({ theme }) => theme.colors.lavender},
      ${({ theme }) => theme.colors.carnation}
    );
    background: -o-linear-gradient(
      left,
      ${({ theme }) => theme.colors.bright_turquoise},
      ${({ theme }) => theme.colors.lavender},
      ${({ theme }) => theme.colors.carnation}
    );
    background: linear-gradient(
      to right,
      ${({ theme }) => theme.colors.bright_turquoise},
      ${({ theme }) => theme.colors.lavender},
      ${({ theme }) => theme.colors.carnation}
    );
    z-index: -1;
    opacity: 0.05;
  }

  .services .item-box h6 {
    line-height: 1.8;
    text-transform: capitalize;
    margin-bottom: 10px;
  }

  .services .rone > div {
    position: relative;
  }

  .services .rone > div:nth-of-type(2) {
    margin-bottom: -50px;
    margin-top: auto;
  }

  .services .rtwo > div {
    position: relative;
  }

  .services .rtwo > div:nth-of-type(2) {
    margin-bottom: -50px;
    margin-top: auto;
  }

  .services .mas-item {
    padding: 40px;
    margin: 50px 0;
    background: ${({ theme }) => theme.colors.woodsmoke};
    position: relative;
    z-index: 2;
  }

  .services .mas-item:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.colors.woodsmoke};
    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    transition: all 0.4s;
    z-index: -1;
  }

  .services .mas-item .bg-color {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.colors.bright_turquoise};
    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    transition: all 0.4s;
    z-index: -2;
  }

  .services .mas-item:hover .bg-color {
    top: 10px;
    left: 10px;
  }

  .services .mas-item .icon {
    font-size: 45px;
    color: ${({ theme }) => theme.colors.bright_turquoise};
    margin-bottom: 30px;
  }

  .services .mas-item h6 {
    font-weight: 600;
    font-size: 16px;
    line-height: 1.7;
  }

  .services .mas-item .more {
    margin-top: 20px;
    width: 100%;
    width: 45px;
    height: 45px;
    line-height: 45px;
    text-align: center;
    font-size: 12px;
    border-radius: 50%;
    border: 2px solid rgba(255, 255, 255, 0.05);
  }

  .services .step-item {
    text-align: center;
    padding: 60px;
    margin: 60px auto;
    background: ${({ theme }) => theme.colors.woodsmoke};
    position: relative;
  }

  .services .step-item.xbottom {
    bottom: -60px;
  }

  .services .step-item.xtop {
    top: -60px;
  }

  .services .step-item.xcolor {
    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.cod_gray};
  }

  .services .step-item.xcolor p {
    color: ${({ theme }) => theme.colors.mine_shaft};
  }

  .services .step-item .icon {
    color: ${({ theme }) => theme.colors.bright_turquoise};
    background: -webkit-gradient(
      linear,
      left top,
      right top,
      from(${({ theme }) => theme.colors.bright_turquoise}),
      color-stop(${({ theme }) => theme.colors.lavender}),
      to(${({ theme }) => theme.colors.carnation})
    );
    background: -webkit-linear-gradient(
      left,
      ${({ theme }) => theme.colors.bright_turquoise},
      ${({ theme }) => theme.colors.lavender},
      ${({ theme }) => theme.colors.carnation}
    );
    background: -o-linear-gradient(
      left,
      ${({ theme }) => theme.colors.bright_turquoise},
      ${({ theme }) => theme.colors.lavender},
      ${({ theme }) => theme.colors.carnation}
    );
    background: linear-gradient(
      to right,
      ${({ theme }) => theme.colors.bright_turquoise},
      ${({ theme }) => theme.colors.lavender},
      ${({ theme }) => theme.colors.carnation}
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 40px;
    margin-bottom: 30px;
  }

  .services .step-item h6 {
    margin-bottom: 20px;
  }

  .services .item {
    text-align: center;
    padding: 60px;
    background: ${({ theme }) => theme.colors.bunker};
    position: relative;
  }

  .services .item .icon {
    color: ${({ theme }) => theme.colors.bright_turquoise};
    font-size: 40px;
    margin-bottom: 40px;
  }

  .services .item h6 {
    margin-bottom: 15px;
  }

  .services.lficon .item-box {
    text-align: left;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin-top: 30px;
    padding: 60px 40px;
    border-radius: 20px;
  }

  .services.lficon .item-box.no-curve {
    border-radius: 5px;
  }

  .services.lficon .item-box .icon {
    text-align: center;
  }

  .services.lficon .item-box .cont {
    padding-left: 30px;
  }

  .feat .items {
    padding: 60px 40px;
    position: relative;
    z-index: 3;
  }

  .feat .items:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 1px;
    background: ${({ theme }) => theme.colors.woodsmoke};
    z-index: -1;
  }

  .feat .items:before {
    content: '';
    position: absolute;
    top: -1px;
    left: -1px;
    bottom: -1px;
    right: 0px;
    background: -webkit-gradient(
      linear,
      left top,
      right top,
      from(${({ theme }) => theme.colors.bright_turquoise}),
      color-stop(${({ theme }) => theme.colors.lavender}),
      to(${({ theme }) => theme.colors.carnation})
    );
    background: -webkit-linear-gradient(
      left,
      ${({ theme }) => theme.colors.bright_turquoise},
      ${({ theme }) => theme.colors.lavender},
      ${({ theme }) => theme.colors.carnation}
    );
    background: -o-linear-gradient(
      left,
      ${({ theme }) => theme.colors.bright_turquoise},
      ${({ theme }) => theme.colors.lavender},
      ${({ theme }) => theme.colors.carnation}
    );
    background: linear-gradient(
      to right,
      ${({ theme }) => theme.colors.bright_turquoise},
      ${({ theme }) => theme.colors.lavender},
      ${({ theme }) => theme.colors.carnation}
    );
    z-index: -2;
    opacity: 0;
    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    transition: all 0.4s;
  }

  .feat .items .icon {
    color: ${({ theme }) => theme.colors.silver}_chalice;
    font-size: 70px;
    margin-bottom: 30px;
  }

  .feat .items .icon svg {
    width: 1em;
    height: 1em;
  }

  .feat .items h5 {
    font-size: 22px;
    line-height: 1.5;
    margin-bottom: 20px;
  }

  .feat .items .more-stroke {
    margin-top: 30px;
  }

  .feat .items .more-stroke span {
    width: 0;
    height: 2px;
    background: ${({ theme }) => theme.colors.white};
    position: relative;
  }

  .feat .items .more-stroke span:after,
  .feat .items .more-stroke span:before {
    content: '';
    width: 0;
    height: 2px;
    background: ${({ theme }) => theme.colors.white};
    position: absolute;
    right: -1px;
  }

  .feat .items .more-stroke span:after {
    -webkit-transform: rotate(40deg);
    -ms-transform: rotate(40deg);
    transform: rotate(40deg);
    top: -4px;
  }

  .feat .items .more-stroke span:before {
    -webkit-transform: rotate(-40deg);
    -ms-transform: rotate(-40deg);
    transform: rotate(-40deg);
    top: 4px;
  }

  .feat .items.active:before {
    opacity: 1;
  }

  .feat .items.active .more-stroke span {
    width: 30px;
    -webkit-transition: width 0.3s;
    -o-transition: width 0.3s;
    transition: width 0.3s;
  }

  .feat .items.active .more-stroke span:after,
  .feat .items.active .more-stroke span:before {
    width: 12px;
    -webkit-transition: width 0.3s;
    -o-transition: width 0.3s;
    transition: width 0.3s;
    -webkit-transition-delay: 0.3s;
    -o-transition-delay: 0.3s;
    transition-delay: 0.3s;
  }

  .feat .items:hover .more-stroke span {
    width: 30px;
  }

  .feat .items:hover .more-stroke span:after,
  .feat .items:hover .more-stroke span:before {
    width: 12px;
  }

  .serv-arch .item {
    padding: 50px 30px;
    position: relative;
    z-index: 2;
  }

  .serv-arch .item:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${({ theme }) => theme.colors.mine_shaft}_dark;
    border: 1px solid rgba(255, 255, 255, 0.04);
    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    transition: all 0.4s;
    z-index: -1;
  }

  .serv-arch .item.active:after {
    opacity: 0.85;
  }

  .serv-arch .item:hover:after {
    opacity: 0.75;
  }

  .serv-arch .item:hover p {
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }

  .serv-arch .item .numb {
    font-size: 60px;
    font-weight: 700;
    margin-bottom: 10px;
    color: transparent;
    -webkit-text-stroke: 1px ${({ theme }) => theme.colors.mongoose};
  }

  .serv-arch .item h5 {
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .serv-arch .item p {
    margin-top: 60px;
    opacity: 0;
    -webkit-transform: translateY(30px);
    -ms-transform: translateY(30px);
    transform: translateY(30px);
    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    transition: all 0.4s;
  }

  .serv-arch .item .more {
    margin-top: 50px;
  }

  .min-area .img {
    padding: 120px 0 120px 80px;
    position: relative;
    z-index: 3;
  }

  .min-area .img:after {
    content: '';
    position: absolute;
    top: 0;
    right: 120px;
    bottom: 0;
    left: -300px;
    background: ${({ theme }) => theme.colors.woodsmoke};
    z-index: -1;
  }

  .min-area .content {
    padding-left: 40px;
  }

  .min-area .content h4 {
    font-weight: 700;
    font-size: 40px;
    line-height: 1.5;
    margin-bottom: 20px;
  }

  .min-area .content ul {
    margin: 0;
  }

  .min-area .content ul li {
    margin-top: 25px;
    padding-left: 25px;
    position: relative;
  }

  .min-area .content ul li:after {
    content: '';
    width: 10px;
    height: 10px;
    border: 1px solid ${({ theme }) => theme.colors.dusty_gray};
    border-radius: 50%;
    position: absolute;
    left: 0;
    top: 2px;
  }

  .min-area .content ul.feat li {
    padding: 0 0 30px 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  }

  .min-area .content ul.feat li:last-of-type {
    padding: 0;
    border: 0;
  }

  .min-area .content ul.feat li:after {
    display: none;
  }

  .min-area .content ul.feat li h6 {
    font-weight: 500;
    margin-bottom: 5px;
  }

  .min-area .content ul.feat li h6 span {
    color: ${({ theme }) => theme.colors.bright_turquoise};
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    font-size: 13px;
    border: 1px solid ${({ theme }) => theme.colors.bright_turquoise};
    border-radius: 50%;
    margin-right: 10px;
  }

  .min-area .content ul.feat li p {
    font-size: 13px;
    padding-left: 45px;
  }

  /* ====================== [ End services ] ====================== */
  /* ====================== [ Start brands ] ====================== */
  .clients .brands:hover img {
    -webkit-transform: scale(0);
    -ms-transform: scale(0);
    transform: scale(0);
    opacity: 0;
  }

  .clients .brands:hover .link {
    opacity: 1 !important;
    -webkit-transition: all 0;
    -o-transition: all 0;
    transition: all 0;
  }

  .clients .brands:hover .char {
    -webkit-animation: fadeInUp 0.3s cubic-bezier(0.3, 0, 0.7, 1) both;
    animation: fadeInUp 0.3s cubic-bezier(0.3, 0, 0.7, 1) both;
    -webkit-animation-delay: calc(20ms * var(--char-index));
    animation-delay: calc(20ms * var(--char-index));
  }

  .clients .brands .item {
    text-align: center;
    border: 1px solid rgba(255, 255, 255, 0.08);
    height: 160px;
    line-height: 160px;
  }

  .clients .brands .item.no-bord {
    border: 0;
    text-align: center;
    height: 100px;
    line-height: 100px;
  }

  .clients .brands .img {
    position: relative;
  }

  .clients .brands .img img {
    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    transition: all 0.4s;
    max-width: 75px;
    margin: auto;
  }

  .clients .brands .img .link {
    font-size: 13px;
    width: -webkit-max-content;
    width: -moz-max-content;
    width: max-content;
    position: absolute;
    top: 0;
    left: 50%;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
    opacity: 0;
    -webkit-transition: all 0.3s;
    -o-transition: all 0.3s;
    transition: all 0.3s;
  }

  .clients .bord .item {
    margin-bottom: 30px;
  }

  .clients-brand .brands:hover .img {
    -webkit-transform: scale(0);
    -ms-transform: scale(0);
    transform: scale(0);
    opacity: 0;
  }

  .clients-brand .brands:hover .link {
    opacity: 1 !important;
    -webkit-transition: all 0;
    -o-transition: all 0;
    transition: all 0;
  }

  .clients-brand .brands:hover .char {
    -webkit-animation: fadeInUp 0.3s cubic-bezier(0.3, 0, 0.7, 1) both;
    animation: fadeInUp 0.3s cubic-bezier(0.3, 0, 0.7, 1) both;
    -webkit-animation-delay: calc(20ms * var(--char-index));
    animation-delay: calc(20ms * var(--char-index));
  }

  .clients-brand .item {
    position: relative;
    text-align: center;
  }

  .clients-brand .item .link {
    font-size: 16px;
    width: -webkit-max-content;
    width: -moz-max-content;
    width: max-content;
    position: absolute;
    top: 0;
    left: 50%;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
    opacity: 0;
    -webkit-transition: all 0.3s;
    -o-transition: all 0.3s;
    transition: all 0.3s;
  }

  .clients-brand .img {
    max-width: 85px;
    margin: auto;
    position: relative;
    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    transition: all 0.4s;
  }

  /* ====================== [ End brands ] ====================== */
  /* ====================== [ Start Work ] ====================== */
  .portfolio {
    position: relative;
  }

  .portfolio .filtering {
    padding-left: 50px;
  }

  .portfolio .filtering .filter {
    padding: 15px;
    background: rgba(255, 255, 255, 0.02);
    border-radius: 30px;
    display: inline-block;
  }

  .portfolio .filtering span {
    font-weight: 500;
    font-size: 12px;
    letter-spacing: 1px;
    text-transform: uppercase;
    margin: 0 20px;
    cursor: pointer;
    position: relative;
  }

  .portfolio .filtering span.active {
    color: ${({ theme }) => theme.colors.bright_turquoise};
  }

  .portfolio .filtering span:after {
    content: '';
    width: 7px;
    height: 7px;
    background: ${({ theme }) => theme.colors.bright_turquoise};
    border-radius: 50%;
    position: absolute;
    right: -24px;
    top: 40%;
  }

  .portfolio .filtering span:last-of-type:after {
    display: none;
  }

  .portfolio .filtering.smplx .filter {
    padding: 0;
    background: transparent;
    border-radius: 0;
    display: inline-block;
  }

  .portfolio .filtering.smplx span {
    font-weight: 500;
    font-size: 12px;
    letter-spacing: 1px;
    text-transform: uppercase;
    margin: 0 20px;
    cursor: pointer;
    position: relative;
  }

  .portfolio .filtering.smplx span.active {
    color: ${({ theme }) => theme.colors.bright_turquoise};
  }

  .portfolio .filtering.smplx span:after {
    content: '';
    width: 7px;
    height: 7px;
    background: ${({ theme }) => theme.colors.bright_turquoise};
    border-radius: 50%;
    position: absolute;
    right: -24px;
    top: 40%;
  }

  .portfolio .filtering.smplx span:last-of-type:after {
    display: none;
  }

  .portfolio .gallery .items {
    padding: 0 50px;
    margin: 50px 0;
  }

  .portfolio .gallery .items.lg-mr {
    margin-top: 100px;
  }

  .portfolio .gallery .items .item-img {
    overflow: hidden;
    position: relative;
    -webkit-clip-path: inset(0);
    clip-path: inset(0);
    -webkit-transition: all 0.3s;
    -o-transition: all 0.3s;
    transition: all 0.3s;
  }

  .portfolio .gallery .items .item-img > a {
    display: block;
  }

  .portfolio .gallery .items .item-img:hover {
    -webkit-clip-path: inset(5px 10px);
    clip-path: inset(5px 10px);
  }

  .portfolio .gallery .items .item-img:hover img {
    -webkit-transform: scale(1.05);
    -ms-transform: scale(1.05);
    transform: scale(1.05);
  }

  .portfolio .gallery .items .item-img:hover .cont {
    opacity: 1;
  }

  .portfolio .gallery .items .item-img img {
    height: 100%;
    width: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    -webkit-transition: all 0.5s;
    -o-transition: all 0.5s;
    transition: all 0.5s;
  }

  .portfolio .gallery .items .item-img .cont {
    position: absolute;
    bottom: 15px;
    left: 0;
    text-align: left;
    padding-left: 30px;
    opacity: 0;
    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    transition: all 0.4s;
  }

  .portfolio .gallery .items .item-img .cont span {
    color: ${({ theme }) => theme.colors.gallery};
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 13px;
  }

  .portfolio .gallery .items .item-img .cont span a {
    margin: 0 10px 0 0;
  }

  .portfolio .gallery .items .cont {
    margin-top: 30px;
    text-align: center;
  }

  .portfolio .gallery .items .cont h6 {
    font-weight: 600;
    margin-bottom: 5px;
  }

  .portfolio .gallery .items .cont span {
    color: ${({ theme }) => theme.colors.dusty_gray};
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 400;
    font-size: 13px;
  }

  .portfolio .gallery .items .cont span a {
    margin: 0 5px;
  }

  .portfolio .gallery .bords .item-img {
    padding: 10px;
    border: 1px solid rgba(255, 255, 255, 0.03);
  }

  .portfolio .gallery .bords .cont {
    border: 1px solid rgba(255, 255, 255, 0.03);
    margin-top: 0;
    border-top: 0;
    padding: 10px;
  }

  .portfolio.three-column .gallery .items {
    padding: 0 15px;
    margin: 25px 0;
  }

  .po-arch .filtering {
    padding-left: 30px;
  }

  .po-arch .filtering .filter {
    padding: 0;
    background: transparent;
    border-radius: 0;
    display: inline-block;
  }

  .po-arch .filtering span {
    font-weight: 400;
    font-size: 15px;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin: 0 20px;
    cursor: pointer;
    position: relative;
  }

  .po-arch .filtering span.active {
    color: ${({ theme }) => theme.colors.mongoose};
  }

  .po-arch .filtering span:after {
    display: none;
  }

  .po-arch .gallery .items {
    position: relative;
  }

  .po-arch .gallery .items .cont {
    text-align: left;
    padding: 30px;
    padding-left: 0;
    background: ${({ theme }) => theme.colors.mine_shaft}_dark;
    display: inline-block;
    margin: 0;
    position: relative;
    margin-top: -30px;
  }

  .po-arch .gallery .items .cont .tags a {
    font-size: 17px;
    margin: 0 10px 0 0;
  }

  .po-arch .gallery .items .cont h5 {
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin: 0 0 5px 0;
  }

  .portfolio-cr .filtering .filter {
    display: inline-block;
  }

  .portfolio-cr .filtering span {
    color: ${({ theme }) => theme.colors.gallery};
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 1px;
    text-transform: uppercase;
    margin: 8px 20px;
    padding-bottom: 10px;
    cursor: pointer;
    position: relative;
  }

  .portfolio-cr .filtering span:after {
    content: '';
    width: 100%;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.bright_turquoise};
    position: absolute;
    left: 0;
    bottom: -10px;
    opacity: 0;
    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    transition: all 0.4s;
  }

  .portfolio-cr .filtering .active {
    color: ${({ theme }) => theme.colors.bright_turquoise};
  }

  .portfolio-cr .filtering .active:after {
    bottom: 0;
    opacity: 1;
  }

  .portfolio-cr .items {
    padding: 0 15px;
    margin-top: 30px;
    width: 50%;
    position: relative;
    overflow: hidden;
  }

  .portfolio-cr .items:hover .cont {
    opacity: 1;
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
  }

  .portfolio-cr .items.width2 {
    width: 25%;
  }

  .portfolio-cr .items .cont {
    position: absolute;
    bottom: 15px;
    left: 30px;
    right: 30px;
    padding: 20px;
    -webkit-backdrop-filter: blur(7px);
    backdrop-filter: blur(7px);
    background: rgba(12, 15, 22, 0.48);
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 5px;
    opacity: 0;
    -webkit-transform: translateY(50%);
    -ms-transform: translateY(50%);
    transform: translateY(50%);
    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    transition: all 0.4s;
  }

  .portfolio-cr .items .cont.flex {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }

  .portfolio-cr .items .cont h6 {
    font-size: 17px;
    font-weight: 600;
    line-height: 1.2;
    margin-bottom: 5px;
  }

  .portfolio-cr .items .cont span {
    margin-left: auto;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 400;
    font-size: 12px;
  }

  .portfolio-cr .items .cont span a {
    opacity: 0.7;
    margin: 0 5px;
    line-height: 1.2;
  }

  .portfolio-frl .filtering .filter {
    display: inline-block;
  }

  .portfolio-frl .filtering span {
    color: ${({ theme }) => theme.colors.gallery};
    font-size: 13px;
    letter-spacing: 1px;
    text-transform: uppercase;
    margin: 8px 20px;
    padding-bottom: 10px;
    cursor: pointer;
    position: relative;
  }

  .portfolio-frl .filtering span:after {
    content: '';
    width: 100%;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.bright_turquoise};
    position: absolute;
    left: 0;
    bottom: -10px;
    opacity: 0;
    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    transition: all 0.4s;
  }

  .portfolio-frl .filtering .active {
    color: ${({ theme }) => theme.colors.bright_turquoise};
  }

  .portfolio-frl .filtering .active:after {
    bottom: 0;
    opacity: 1;
  }

  .portfolio-frl .gallery .items {
    padding: 0 40px;
    margin: 40px 0;
  }

  .portfolio-frl .gallery .items.lg-mr {
    margin-top: 100px;
  }

  .portfolio-frl .gallery .items .item-img {
    overflow: hidden;
    position: relative;
    -webkit-transition: all 0.3s;
    -o-transition: all 0.3s;
    transition: all 0.3s;
    background: rgba(255, 255, 255, 0.02);
    padding: 30px;
    border-radius: 5px;
  }

  .portfolio-frl .gallery .items .item-img > a {
    display: block;
  }

  .portfolio-frl .gallery .items .item-img:hover img {
    -webkit-clip-path: inset(5px 10px);
    clip-path: inset(5px 10px);
  }

  .portfolio-frl .gallery .items .item-img:hover .cont {
    opacity: 1;
  }

  .portfolio-frl .gallery .items .item-img img {
    height: 100%;
    width: 100%;
    -webkit-clip-path: inset(0);
    clip-path: inset(0);
    -o-object-fit: cover;
    object-fit: cover;
    -webkit-transition: all 0.5s;
    -o-transition: all 0.5s;
    transition: all 0.5s;
  }

  .portfolio-frl .gallery .items .cont {
    margin-bottom: 30px;
  }

  .portfolio-frl .gallery .items .cont h6 {
    font-size: 22px;
    font-weight: 500;
    margin-bottom: 5px;
  }

  .portfolio-frl .gallery .items .cont p {
    font-size: 13px;
  }

  .portfolio-frl .gallery .items .tags {
    margin-top: 30px;
  }

  .portfolio-frl .gallery .items .tags span {
    padding: 8px 12px;
    background: rgba(255, 255, 255, 0.04);
    margin-right: 5px;
    font-size: 12px;
  }

  .portfolio.full-bg {
    position: relative;
  }

  .portfolio.full-bg .cluom {
    height: 90vh;
    padding: 0;
    position: relative;
    z-index: 2;
    border-right: 1px solid rgba(255, 255, 255, 0.3);
    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    transition: all 0.4s;
  }

  .portfolio.full-bg .cluom.current {
    background: rgba(0, 0, 0, 0.3);
  }

  .portfolio.full-bg .cluom:hover .info {
    color: inherit;
  }

  .portfolio.full-bg .cluom:hover .info:after {
    height: 100%;
  }

  .portfolio.full-bg .cluom:hover .more {
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }

  .portfolio.full-bg .cluom .info {
    padding: 40px 10px 40px 20px;
    color: ${({ theme }) => theme.colors.white};
    position: relative;
    z-index: 2;
    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    transition: all 0.4s;
    overflow: hidden;
  }

  .portfolio.full-bg .cluom .info:after {
    content: '';
    position: absolute;
    top: 0;
    left: -2%;
    width: 104%;
    height: 0;
    background: ${({ theme }) => theme.colors.white};
    z-index: -1;
    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    transition: all 0.4s;
  }

  .portfolio.full-bg .cluom .info h6 {
    font-size: 11px;
    font-weight: 400;
    letter-spacing: 4px;
    text-transform: uppercase;
    margin-bottom: 10px;
  }

  .portfolio.full-bg .cluom .info h5 {
    font-size: 21px;
  }

  .portfolio.full-bg .cluom .more {
    position: absolute;
    bottom: 50px;
    right: 50px;
    color: ${({ theme }) => theme.colors.white};
    font-size: 13px;
    letter-spacing: 1px;
    text-transform: uppercase;
    -webkit-transform: translateY(20px);
    -ms-transform: translateY(20px);
    transform: translateY(20px);
    opacity: 0;
    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    transition: all 0.4s;
  }

  .portfolio.full-bg .cluom .more i {
    font-size: 10px;
    margin-left: 2px;
  }

  .portfolio.full-bg .glry-img,
  .portfolio.full-bg .bg-img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .portfolio.full-bg .glry-img {
    overflow: hidden;
  }

  .portfolio.full-bg .glry-img .bg-img {
    -webkit-transform: scale(1.1, 1.1);
    -ms-transform: scale(1.1, 1.1);
    transform: scale(1.1, 1.1);
    opacity: 0;
    -webkit-transition: all 0.7s;
    -o-transition: all 0.7s;
    transition: all 0.7s;
    background-size: cover;
    background-position: center center;
  }

  .portfolio.full-bg .glry-img .bg-img.current {
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }

  .work-carousel .swiper-slide {
    padding: 0px 15px;
  }

  .work-carousel .swiper-slide-active .noraidus .cont {
    opacity: 1;
    visibility: visible;
    -webkit-transition-delay: 0.5s;
    -o-transition-delay: 0.5s;
    transition-delay: 0.5s;
  }

  .work-carousel .next-ctrl,
  .work-carousel .prev-ctrl {
    color: ${({ theme }) => theme.colors.black};
    width: 60px;
    height: 60px;
    border-radius: 0;
    border: 0;
    background: ${({ theme }) => theme.colors.white};
    opacity: 0;
    -webkit-transition: all 0.3s;
    -o-transition: all 0.3s;
    transition: all 0.3s;
  }

  .work-carousel .next-ctrl:after,
  .work-carousel .prev-ctrl:after {
    display: none;
  }

  .work-carousel .simp-next,
  .work-carousel .simp-prev {
    color: ${({ theme }) => theme.colors.white};
    top: auto;
    bottom: 0;
  }

  .work-carousel .simp-next:after,
  .work-carousel .simp-prev:after {
    display: none;
  }

  .work-carousel .simp-next {
    right: 30px;
  }

  .work-carousel .simp-prev {
    left: 30px;
  }

  .work-carousel:hover .next-ctrl,
  .work-carousel:hover .prev-ctrl {
    opacity: 1;
  }

  .work-carousel .content {
    position: relative;
  }

  .work-carousel .content .item-img {
    position: relative;
    height: 480px;
    line-height: 0;
  }

  .work-carousel .content:hover .item-ig {
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }

  .work-carousel .content .cont {
    position: relative;
  }

  .work-carousel .content .cont h6 {
    font-size: 12px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 10px;
  }

  .work-carousel .content .cont h4 {
    font-size: 17px;
  }

  .work-carousel .content .cont .icon {
    width: 35px;
    height: 35px;
    line-height: 35px;
    text-align: center;
    background: rgba(255, 255, 255, 0.03);
    border-radius: 50%;
    font-size: 12px;
    position: absolute;
    top: calc(50% - 17px);
    right: 15px;
  }

  .work-carousel .content .bgbox {
    position: absolute;
    bottom: 35px;
    left: 35px;
  }

  .work-carousel.caroul .content .item-img {
    height: 480px;
    position: relative;
  }

  .work-carousel.caroul .content .item-img:after {
    content: '';
    position: absolute;
    top: 20px;
    left: 20px;
    bottom: 20px;
    right: 20px;
    background: ${({ theme }) => theme.colors.woodsmoke};
    opacity: 0;
    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    transition: all 0.4s;
  }

  .work-carousel.caroul .content .bgbox {
    opacity: 0;
    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    transition: all 0.4s;
  }

  .work-carousel.caroul .content:hover .item-img:after {
    opacity: 1;
  }

  .work-carousel.caroul .content:hover .bgbox {
    opacity: 1;
  }

  .work-carousel .noraidus .item-img {
    height: 480px;
    border-radius: 0;
  }

  .work-carousel .noraidus .cont {
    position: absolute;
    padding: 15px 30px;
    background: ${({ theme }) => theme.colors.woodsmoke};
    bottom: 0;
    left: 50%;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
    text-align: center;
    opacity: 0;
    visibility: hidden;
    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    transition: all 0.4s;
  }

  .work-carousel .noraidus .cont h6 {
    font-size: 12px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 10px;
  }

  .work-carousel .noraidus .cont h4 {
    font-size: 17px;
  }

  .work-carousel2 .swiper-slide {
    padding: 0px 10px 50px;
  }

  .work-carousel2 .swiper-slide .img {
    border-radius: 3px;
    overflow: hidden;
    -webkit-transition: all 0.8s;
    -o-transition: all 0.8s;
    transition: all 0.8s;
  }

  .work-carousel2 .swiper-slide-active .img {
    -webkit-box-shadow: 0px 40px 30px -40px rgba(0, 0, 0, 0.3);
    box-shadow: 0px 40px 30px -40px rgba(0, 0, 0, 0.3);
  }

  .work-carousel2 .swiper-slide-active .img:after {
    opacity: 1 !important;
  }

  .work-carousel2 .swiper-slide-active .cont h6,
  .work-carousel2 .swiper-slide-active .cont h4 {
    opacity: 1 !important;
    visibility: visible !important;
    -webkit-transform: translateY(0px) !important;
    -ms-transform: translateY(0px) !important;
    transform: translateY(0px) !important;
  }

  .work-carousel2 .swiper-pagination-progressbar {
    position: absolute;
    bottom: 0;
    top: auto;
    right: auto;
    left: calc(50% - 120px);
    width: 240px;
    height: 2px;
    border-radius: 10px;
    background: ${({ theme }) => theme.colors.gallery};
  }

  .work-carousel2
    .swiper-pagination-progressbar
    .swiper-pagination-progressbar-fill {
    border-radius: 10px;
    background: ${({ theme }) => theme.colors.cod_gray};
  }

  .work-carousel2 .swiper-button-next,
  .work-carousel2 .swiper-button-prev {
    color: ${({ theme }) => theme.colors.black};
    width: 60px;
    height: 60px;
    border-radius: 0;
    border: 0;
    background: ${({ theme }) => theme.colors.white};
    opacity: 0;
    -webkit-transition: all 0.3s;
    -o-transition: all 0.3s;
    transition: all 0.3s;
  }

  .work-carousel2 .swiper-button-next:after,
  .work-carousel2 .swiper-button-prev:after {
    display: none;
  }

  .work-carousel2:hover .swiper-button-next,
  .work-carousel2:hover .swiper-button-prev {
    opacity: 1;
  }

  .work-carousel2 .content {
    position: relative;
  }

  .work-carousel2 .content .img {
    position: relative;
    line-height: 0;
  }

  .work-carousel2 .content .img:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: -webkit-gradient(
      linear,
      left bottom,
      left top,
      from(rgba(0, 0, 0, 0.7)),
      to(transparent)
    );
    background: -webkit-linear-gradient(
      bottom,
      rgba(0, 0, 0, 0.7),
      transparent
    );
    background: -o-linear-gradient(bottom, rgba(0, 0, 0, 0.7), transparent);
    background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
    opacity: 0;
    -webkit-transition: all 0.5s;
    -o-transition: all 0.5s;
    transition: all 0.5s;
  }

  .work-carousel2 .content .cont {
    position: absolute;
    bottom: 40px;
    left: 40px;
    color: ${({ theme }) => theme.colors.white};
  }

  .work-carousel2 .content .cont h6 {
    font-size: 13px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 4px;
    margin-bottom: 10px;
    opacity: 0;
    visibility: hidden;
    -webkit-transform: translateY(-20px);
    -ms-transform: translateY(-20px);
    transform: translateY(-20px);
    -webkit-transition: all 0.7s;
    -o-transition: all 0.7s;
    transition: all 0.7s;
    -webkit-transition-delay: 0.5s;
    -o-transition-delay: 0.5s;
    transition-delay: 0.5s;
  }

  .work-carousel2 .content .cont h4 {
    font-weight: 600;
    opacity: 0;
    visibility: hidden;
    -webkit-transform: translateY(20px);
    -ms-transform: translateY(20px);
    transform: translateY(20px);
    -webkit-transition: all 0.7s;
    -o-transition: all 0.7s;
    transition: all 0.7s;
    -webkit-transition-delay: 0.5s;
    -o-transition-delay: 0.5s;
    transition-delay: 0.5s;
  }

  .work-carousel2.mcolumn .swiper-slide {
    padding: 0px;
  }

  .work-carousel2.mcolumn .swiper-slide .img {
    border-radius: 0;
  }

  .work-carousel2.mcolumn .swiper-slide-active .img {
    -webkit-box-shadow: none;
    box-shadow: none;
  }

  .work-carousel2.mcolumn .swiper-slide-active .img:after {
    opacity: 1 !important;
  }

  .case-study {
    position: relative;
  }

  .case-study .swiper-slide .container {
    min-height: 75vh;
    padding: 100px 30px;
  }

  .case-study .swiper-slide.bg-img {
    background-position: center !important;
  }

  .case-study .swiper-slide .cont span {
    padding: 12px 30px;
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 30px;
    font-size: 13px;
    margin-bottom: 50px;
  }

  .case-study .swiper-slide .cont h6 {
    font-size: 17px;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 15px;
  }

  .case-study .swiper-slide .cont h4 {
    font-size: 60px;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .case-study .controls {
    position: absolute;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    right: 150px;
    z-index: 4;
  }

  .case-study .controls .swiper-button-next,
  .case-study .controls .swiper-button-prev {
    position: static;
    width: 60px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    border: 1px solid ${({ theme }) => theme.colors.gallery};
    color: ${({ theme }) => theme.colors.white};
    display: block;
    margin: 5px auto;
    cursor: pointer;
  }

  .case-study .controls .swiper-button-next:after,
  .case-study .controls .swiper-button-prev:after {
    display: none;
  }

  .half-bg {
    position: absolute;
    left: 0;
    width: 100%;
    height: 200px;
    background: ${({ theme }) => theme.colors.woodsmoke};
    z-index: 1;
  }

  .half-bg.bottom {
    bottom: 0;
  }

  .half-bg.top {
    top: 0;
  }

  .half-bg.not-sub {
    background: ${({ theme }) => theme.colors.bunker};
  }

  .works .lg-space > div {
    padding: 0 50px;
    margin-bottom: 50px;
  }

  .next-prog .box {
    position: relative;
  }

  .next-prog .box .bg-img {
    height: 320px;
    width: 320px;
    border-radius: 50%;
    margin: auto;
    background-position: center center;
    position: relative;
  }

  .next-prog .box .bg-img:before {
    border-radius: 50%;
  }

  .next-prog .box .caption,
  .next-prog .box .copy-cap {
    position: absolute;
    top: 0;
    left: 50%;
    height: 100%;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
  }

  .next-prog .box .caption h1,
  .next-prog .box .copy-cap h1 {
    font-size: 55px;
    font-weight: 800;
    display: block;
    min-width: 700px;
    text-align: center;
    margin: auto;
  }

  .next-prog .box .caption h1 .stroke,
  .next-prog .box .copy-cap h1 .stroke {
    display: inline-block;
    color: transparent;
    -webkit-text-stroke: 1px ${({ theme }) => theme.colors.white};
  }

  .next-prog .box .copy-cap {
    z-index: -1;
  }

  /* ====================== [ End Work ] ====================== */
  /* ====================== [ Start services ] ====================== */
  .process .coulmn {
    position: relative;
  }

  .process .coulmn:after {
    position: absolute;
    content: '';
    width: 75px;
    border-top: 2px dashed ${({ theme }) => theme.colors.bright_turquoise};
    top: 75px;
    right: -35px;
  }

  .process .item {
    text-align: center;
  }

  .process .item .bg-img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin: 0 auto 30px;
    text-align: center;
    position: relative;
  }

  .process .item .bg-img:after {
    content: '';
    position: absolute;
    top: 7px;
    left: 7px;
    right: 7px;
    bottom: 7px;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.25);
  }

  .process .item .bg-img h3 {
    color: ${({ theme }) => theme.colors.white};
    font-size: 40px;
    font-weight: 300;
    line-height: 150px;
    position: relative;
    z-index: 3;
  }

  /* ====================== [ End services ] ====================== */
  /* ====================== [ Start progress bar ] ====================== */
  .skills-circle .item {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }

  .skills-circle .skill {
    position: relative;
  }

  .skills-circle .skill span {
    width: 100px;
    height: 100px;
    line-height: 100px;
    text-align: center;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translateX(-50px) translateY(-50px);
    -ms-transform: translateX(-50px) translateY(-50px);
    transform: translateX(-50px) translateY(-50px);
    font-size: 20px;
    font-weight: 300;
  }

  .skills-circle .cont {
    padding-top: 25px;
    padding-left: 25px;
  }

  .skills-circle .cont span {
    font-size: 12px;
    font-weight: 300;
    opacity: 0.9;
    margin-bottom: 10px;
  }

  .skills-circle .cont h6 {
    font-size: 15px;
    font-weight: 500;
  }

  .skills-box .skill-item {
    margin-bottom: 50px;
  }

  .skills-box .skill-item:last-of-type {
    margin-bottom: 0;
  }

  .skills-box h6 {
    font-size: 13px;
    font-weight: 300;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 10px;
  }

  .skills-box .skill-progress {
    height: 7px;
    background-color: rgba(255, 255, 255, 0.05);
    position: relative;
  }

  .skills-box .skill-progress .progres {
    position: absolute;
    height: 100%;
    width: 0;
    top: 0;
    left: 0;
    background: -webkit-gradient(
      linear,
      left top,
      right top,
      from(${({ theme }) => theme.colors.bright_turquoise}),
      color-stop(${({ theme }) => theme.colors.lavender}),
      to(${({ theme }) => theme.colors.carnation})
    );
    background: -webkit-linear-gradient(
      left,
      ${({ theme }) => theme.colors.bright_turquoise},
      ${({ theme }) => theme.colors.lavender},
      ${({ theme }) => theme.colors.carnation}
    );
    background: -o-linear-gradient(
      left,
      ${({ theme }) => theme.colors.bright_turquoise},
      ${({ theme }) => theme.colors.lavender},
      ${({ theme }) => theme.colors.carnation}
    );
    background: linear-gradient(
      to right,
      ${({ theme }) => theme.colors.bright_turquoise},
      ${({ theme }) => theme.colors.lavender},
      ${({ theme }) => theme.colors.carnation}
    );
    -webkit-transition: all 1.5s;
    -o-transition: all 1.5s;
    transition: all 1.5s;
  }

  .skills-box .skill-progress .progres:after {
    content: attr(data-value);
    position: absolute;
    right: 10px;
    top: -45px;
    padding: 7px 15px;
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.05);
    font-size: 12px;
    font-weight: 600;
  }

  .skills-box .skill-progress .progres:before {
    content: '';
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 8px solid rgba(255, 255, 255, 0.05);
    position: absolute;
    right: 15px;
    bottom: 12px;
  }

  /* ====================== [ End progress bar ] ====================== */
  /* ====================== [ Start tabs & list ] ====================== */
  .smp-list {
    margin: 0;
  }

  .smp-list li {
    margin-top: 20px;
    font-size: 15px;
    font-weight: 300;
    padding-left: 20px;
    position: relative;
  }

  .smp-list li:after {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    width: 5px;
    height: 1px;
    background: ${({ theme }) => theme.colors.bright_turquoise};
  }

  /* ====================== [ Start tabs & list ] ====================== */
  /* ====================== [ Start Team ] ====================== */
  .team {
    position: relative;
  }

  .team .item {
    padding: 0 25px;
  }

  .team .item.cir .img {
    position: relative;
  }

  .team .item.cir .img:hover:after {
    opacity: 1;
    -webkit-transform: rotate(4deg);
    -ms-transform: rotate(4deg);
    transform: rotate(4deg);
  }

  .team .item.cir .img:hover #circle1,
  .team .item.cir .img:hover #circle2,
  .team .item.cir .img:hover #circle3,
  .team .item.cir .img:hover #circle4,
  .team .item.cir .img:hover .info {
    opacity: 1;
  }

  .team .item.cir .img:hover:before {
    opacity: 0.5;
  }

  .team .item.cir .img:after {
    content: '';
    position: absolute;
    top: 5px;
    left: 0;
    right: 0;
    bottom: 5px;
    background: -webkit-gradient(
      linear,
      left top,
      right top,
      from(${({ theme }) => theme.colors.bright_turquoise}),
      color-stop(${({ theme }) => theme.colors.lavender}),
      to(${({ theme }) => theme.colors.carnation})
    );
    background: -webkit-linear-gradient(
      left,
      ${({ theme }) => theme.colors.bright_turquoise},
      ${({ theme }) => theme.colors.lavender},
      ${({ theme }) => theme.colors.carnation}
    );
    background: -o-linear-gradient(
      left,
      ${({ theme }) => theme.colors.bright_turquoise},
      ${({ theme }) => theme.colors.lavender},
      ${({ theme }) => theme.colors.carnation}
    );
    background: linear-gradient(
      to right,
      ${({ theme }) => theme.colors.bright_turquoise},
      ${({ theme }) => theme.colors.lavender},
      ${({ theme }) => theme.colors.carnation}
    );
    opacity: 0;
    z-index: -1;
    -webkit-transition: all 0.7s;
    -o-transition: all 0.7s;
    transition: all 0.7s;
  }

  .team .item.cir .img:before {
    content: '';
    position: absolute;
    top: 0px;
    left: 0;
    right: 0;
    bottom: 0px;
    background: ${({ theme }) => theme.colors.black};
    opacity: 0;
    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    transition: all 0.4s;
  }

  .team .item.cir .info {
    position: absolute;
    bottom: 15px;
    left: 15px;
    opacity: 0;
    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    transition: all 0.4s;
    z-index: 2;
  }

  .team .item.cir .info span {
    font-size: 13px;
    color: ${({ theme }) => theme.colors.bright_turquoise};
  }

  .team .item .img {
    position: relative;
  }

  .team .item .img:hover:after {
    opacity: 1;
    -webkit-transform: rotate(4deg);
    -ms-transform: rotate(4deg);
    transform: rotate(4deg);
  }

  .team .item .img:hover #circle1,
  .team .item .img:hover #circle2,
  .team .item .img:hover #circle3,
  .team .item .img:hover #circle4,
  .team .item .img:hover .info {
    opacity: 1;
  }

  .team .item .img:hover:before {
    opacity: 0.3;
  }

  .team .item .img:after {
    content: '';
    position: absolute;
    top: 5px;
    left: 0;
    right: 0;
    bottom: 5px;
    background: -webkit-gradient(
      linear,
      left top,
      right top,
      from(${({ theme }) => theme.colors.bright_turquoise}),
      color-stop(${({ theme }) => theme.colors.lavender}),
      to(${({ theme }) => theme.colors.carnation})
    );
    background: -webkit-linear-gradient(
      left,
      ${({ theme }) => theme.colors.bright_turquoise},
      ${({ theme }) => theme.colors.lavender},
      ${({ theme }) => theme.colors.carnation}
    );
    background: -o-linear-gradient(
      left,
      ${({ theme }) => theme.colors.bright_turquoise},
      ${({ theme }) => theme.colors.lavender},
      ${({ theme }) => theme.colors.carnation}
    );
    background: linear-gradient(
      to right,
      ${({ theme }) => theme.colors.bright_turquoise},
      ${({ theme }) => theme.colors.lavender},
      ${({ theme }) => theme.colors.carnation}
    );
    opacity: 0;
    z-index: -1;
    -webkit-transition: all 0.7s;
    -o-transition: all 0.7s;
    transition: all 0.7s;
  }

  .team.bord .item:hover .img:after {
    border-color: ${({ theme }) => theme.colors.bright_turquoise};
    opacity: 1;
    -webkit-transform: rotate(0deg) !important;
    -ms-transform: rotate(0deg) !important;
    transform: rotate(0deg) !important;
  }

  .team.bord .item .img {
    padding: 30px;
  }

  .team.bord .item .img:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 5px;
    background: transparent;
    border: 1px solid ${({ theme }) => theme.colors.white};
    opacity: 0.1;
    -webkit-transform: rotate(-5deg);
    -ms-transform: rotate(-5deg);
    transform: rotate(-5deg);
    z-index: -1;
    -webkit-transition: all 0.7s;
    -o-transition: all 0.7s;
    transition: all 0.7s;
  }

  .team.bord .item .img.left:after {
    -webkit-transform: rotate(5deg);
    -ms-transform: rotate(5deg);
    transform: rotate(5deg);
  }

  .team.bord .item .info {
    margin-top: 15px;
    text-align: center;
  }

  .team.bord .item .info span {
    font-size: 13px;
    color: ${({ theme }) => theme.colors.bright_turquoise};
  }

  .team .slick-dots {
    bottom: -40px;
  }

  .team .slick-dots li.slick-active button {
    background: ${({ theme }) => theme.colors.bright_turquoise};
  }

  .team .slick-dots li button {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    opacity: 0.8;
  }

  .team .slick-dots li button:before {
    content: '';
    width: 4px;
    height: 4px;
    border-radius: 50%;
    position: absolute;
    top: 4px;
    left: 4px;
    line-height: 1;
    background: ${({ theme }) => theme.colors.bright_turquoise};
    opacity: 1;
  }

  .team .dots-half {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 70%;
    z-index: -2;
  }

  #circle1,
  #circle2,
  #circle3,
  #circle4 {
    position: absolute;
    top: -30%;
    right: -50%;
    width: 100%;
    padding-bottom: 100%;
    overflow: hidden;
    pointer-events: none;
    opacity: 0;
    -webkit-transition: opacity 0.4s;
    -o-transition: opacity 0.4s;
    transition: opacity 0.4s;
  }

  #circle1 text,
  #circle2 text,
  #circle3 text,
  #circle4 text {
    font-size: 13px;
    letter-spacing: 4px;
  }

  #circle1 svg,
  #circle2 svg,
  #circle3 svg,
  #circle4 svg {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 300px;
    -webkit-animation-name: rotate;
    -moz-animation-name: rotate;
    -ms-animation-name: rotate;
    -o-animation-name: rotate;
    animation-name: rotate;
    -webkit-animation-duration: 8s;
    -moz-animation-duration: 8s;
    -ms-animation-duration: 8s;
    -o-animation-duration: 8s;
    animation-duration: 8s;
    -webkit-animation-iteration-count: infinite;
    -moz-animation-iteration-count: infinite;
    -ms-animation-iteration-count: infinite;
    -o-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    -webkit-animation-timing-function: linear;
    -moz-animation-timing-function: linear;
    -ms-animation-timing-function: linear;
    -o-animation-timing-function: linear;
    animation-timing-function: linear;
  }

  @-webkit-keyframes rotate {
    from {
      -webkit-transform: rotate(360deg);
    }

    to {
      -webkit-transform: rotate(0);
    }
  }

  @-moz-keyframes rotate {
    from {
      -moz-transform: rotate(360deg);
    }

    to {
      -moz-transform: rotate(0);
    }
  }

  @-ms-keyframes rotate {
    from {
      -ms-transform: rotate(360deg);
    }

    to {
      -ms-transform: rotate(0);
    }
  }

  @-o-keyframes rotate {
    from {
      -o-transform: rotate(360deg);
    }

    to {
      -o-transform: rotate(0);
    }
  }

  @keyframes rotate {
    from {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }

    to {
      -webkit-transform: rotate(0);
      transform: rotate(0);
    }
  }

  /* ====================== [ End Team ] ====================== */
  /* ====================== [ Start Testimonials ] ====================== */
  .testimonials .container-fluid {
    width: 140%;
    margin-left: -20%;
  }

  .testimonials .item {
    text-align: left;
    padding: 80px 40px;
    -webkit-transform: scale(0.8);
    -ms-transform: scale(0.8);
    transform: scale(0.8);
    background: -webkit-linear-gradient(
      323.53deg,
      ${({ theme }) => theme.colors.woodsmoke} 6.69%,
      rgba(2, 2, 30, 0) 85.43%
    );
    background: -o-linear-gradient(
      323.53deg,
      ${({ theme }) => theme.colors.woodsmoke} 6.69%,
      rgba(2, 2, 30, 0) 85.43%
    );
    background: linear-gradient(
      126.47deg,
      ${({ theme }) => theme.colors.woodsmoke} 6.69%,
      rgba(2, 2, 30, 0) 85.43%
    );
    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    transition: all 0.4s;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex !important;
  }

  .testimonials .slick-center .item {
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
  }

  .testimonials .item p {
    color: ${({ theme }) => theme.colors.white};
    font-size: 28px;
    font-weight: 600;
    padding-left: 30px;
    margin-left: 30px;
    border-left: 1px solid rgba(255, 255, 255, 0.1);
  }

  .testimonials .item .info {
    min-width: 120px;
  }

  .testimonials .item .info.inf-lrg {
    min-width: 160px;
  }

  .testimonials .item .info .img {
    width: 80px;
    height: 80px;
    border: 7px solid ${({ theme }) => theme.colors.shark};
    border-radius: 50%;
    overflow: hidden;
    margin-bottom: 20px;
  }

  .testimonials .item .info .author-name {
    margin-bottom: 5px;
    font-weight: 600;
    font-size: 15px;
  }

  .testimonials .item .info .author-details {
    font-size: 13px;
  }

  .testimonials .slick-dots {
    bottom: -30px;
  }

  .testimonials .slick-dots li {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.colors.gallery};
  }

  .testimonials .slick-dots li.slick-active {
    background: ${({ theme }) => theme.colors.gallery};
  }

  .testimonials .slick-dots li button {
    display: none;
  }

  .testimonials .arrows {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .testimonials .arrows .container {
    position: relative;
    height: 100%;
  }

  .testimonials .arrows .next,
  .testimonials .arrows .prev {
    position: absolute;
    top: 50%;
    right: -50px;
    width: 50px;
    height: 50px;
    line-height: 55px;
    text-align: center;
    font-size: 20px;
    border: 1px solid ${({ theme }) => theme.colors.gallery};
    border-radius: 50%;
    opacity: 0;
    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    transition: all 0.4s;
  }

  .testimonials .arrows .next:hover,
  .testimonials .arrows .prev:hover {
    border-color: ${({ theme }) => theme.colors.bright_turquoise};
  }

  .testimonials .arrows .prev {
    right: auto;
    left: -50px;
  }

  .testimonials:hover .arrows .next,
  .testimonials:hover .arrows .prev {
    opacity: 1;
    right: 17%;
  }

  .testimonials:hover .arrows .prev {
    left: 17%;
  }

  .testimonials.lftstl .item {
    text-align: left;
  }

  .testimonials.lftstl .item .info .author .lxleft {
    display: table-cell;
    vertical-align: middle;
  }

  .testimonials.lftstl .item .info .author .lxleft .img {
    margin: 0;
  }

  .testimonials.lftstl .item .info .author .fxright {
    display: table-cell;
    padding: 20px;
  }

  .testimonials.lftstl .slick-dots {
    text-align: right;
  }

  .block-sec .vid-area {
    position: absolute;
    top: -100px;
    left: 10%;
    padding: 30px 15px;
    background: ${({ theme }) => theme.colors.white}f;
    text-align: center;
    z-index: 2;
  }

  .block-sec .vid-area:after {
    content: '';
    position: absolute;
    top: 0px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    background: ${({ theme }) => theme.colors.white};
    opacity: 0.2;
    z-index: -1;
  }

  .block-sec .vid-area .vid-icon {
    margin-top: 50px;
  }

  .block-sec .vid-area .vid-icon .vid {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    text-align: center;
    line-height: 40px;
    border: 2px solid ${({ theme }) => theme.colors.black};
  }

  .block-sec .vid-area .vid-icon .vid span {
    font-size: 10px;
    color: ${({ theme }) => theme.colors.black};
  }

  .block-sec .vid-area .text {
    color: ${({ theme }) => theme.colors.black};
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    -webkit-transform: rotate(-90deg);
    -ms-transform: rotate(-90deg);
    transform: rotate(-90deg);
    margin-top: 30px;
  }

  .block-sec .testim-box {
    position: relative;
    padding: 80px 40px;
    margin-bottom: -120px;
    z-index: 2;
  }

  .block-sec .testim-box:after {
    content: '';
    position: absolute;
    left: -10px;
    top: -10px;
    right: -10px;
    bottom: -10px;
    background: -webkit-gradient(
      linear,
      left top,
      right top,
      from(${({ theme }) => theme.colors.bright_turquoise}),
      color-stop(${({ theme }) => theme.colors.lavender}),
      to(${({ theme }) => theme.colors.carnation})
    );
    background: -webkit-linear-gradient(
      left,
      ${({ theme }) => theme.colors.bright_turquoise},
      ${({ theme }) => theme.colors.lavender},
      ${({ theme }) => theme.colors.carnation}
    );
    background: -o-linear-gradient(
      left,
      ${({ theme }) => theme.colors.bright_turquoise},
      ${({ theme }) => theme.colors.lavender},
      ${({ theme }) => theme.colors.carnation}
    );
    background: linear-gradient(
      to right,
      ${({ theme }) => theme.colors.bright_turquoise},
      ${({ theme }) => theme.colors.lavender},
      ${({ theme }) => theme.colors.carnation}
    );
    z-index: -4;
  }

  .block-sec .testim-box:before {
    content: '';
    position: absolute;
    left: 0px;
    top: 0px;
    right: 0px;
    bottom: 0px;
    background: ${({ theme }) => theme.colors.woodsmoke};
    z-index: -1;
  }

  .block-sec .testim-box .head-box h6 {
    color: ${({ theme }) => theme.colors.bright_turquoise};
    font-size: 12px;
    font-weight: 300;
    text-transform: uppercase;
    letter-spacing: 4px;
    margin-bottom: 10px;
  }

  .block-sec .testim-box .head-box h4 {
    margin-bottom: 40px;
  }

  .block-sec .testim-box .item p {
    font-size: 17px;
    margin-bottom: 30px;
    padding-bottom: 30px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  }

  .block-sec .testim-box .item .info .img {
    display: table-cell;
    vertical-align: middle;
  }

  .block-sec .testim-box .item .info .img .img-box {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    overflow: hidden;
  }

  .block-sec .testim-box .item .info .cont {
    display: table-cell;
    vertical-align: middle;
    padding-left: 15px;
  }

  .block-sec .testim-box .item .info .cont .author-name {
    font-size: 16px;
    margin-bottom: 5px;
    letter-spacing: 2px;
    text-transform: uppercase;
  }

  .block-sec .testim-box .item .info .cont .author-details {
    font-size: 13px;
    font-weight: 300;
    text-transform: uppercase;
  }

  .block-sec .testim-box .slick-dots {
    text-align: right;
  }

  .block-sec .testim-box .slick-dots li {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.colors.bright_turquoise};
  }

  .block-sec .testim-box .slick-dots li.slick-active {
    background: ${({ theme }) => theme.colors.bright_turquoise};
  }

  .block-sec .testim-box .slick-dots li button {
    display: none;
  }

  .clients-brand .item a {
    width: 80px;
    opacity: 0.5;
  }

  .clients-brand .item a:hover {
    opacity: 1;
  }

  /* ====================== [ End Testimonials ] ====================== */
  /* ====================== [ Start Blog ] ====================== */
  .blog .item .cont {
    margin-top: 30px;
    position: relative;
    z-index: 2;
  }

  .blog .item .info {
    margin-bottom: 10px;
    font-size: 12px;
  }

  .blog .item .info .date {
    margin-right: 15px;
  }

  .blog .item .info .date span i {
    font-style: normal;
  }

  .blog .item .info span {
    text-transform: uppercase;
    letter-spacing: 3px;
    font-size: 10px;
    color: ${({ theme }) => theme.colors.silver}_chalice;
  }

  .blog .item .info .tag {
    margin-left: 15px;
  }

  .blog .item .info .tag span {
    color: ${({ theme }) => theme.colors.bright_turquoise};
  }

  .blog .item h5 {
    font-size: 28px;
    font-weight: 400;
  }

  .blog .item .btn-more {
    margin-top: 15px;
    color: ${({ theme }) => theme.colors.gallery};
  }

  .blog .item .btn-more a {
    font-size: 12px;
    letter-spacing: 2px;
  }

  .blog-crv .stories {
    position: relative;
    padding: 20px;
  }

  .blog-crv .controls {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    line-height: 100px;
    text-align: center;
    background: ${({ theme }) => theme.colors.white};
    position: absolute;
    top: calc(50% - 50px);
    left: calc(50% - 50px);
    z-index: 3;
  }

  .blog-crv .controls:after {
    content: '';
    position: absolute;
    right: -10px;
    top: -10px;
    bottom: -10px;
    left: -10px;
    background: rgba(220, 220, 220, 0.2);
    border-radius: 50%;
    z-index: -1;
  }

  .blog-crv .controls .swiper-button-next.next-ctrl,
  .blog-crv .controls .swiper-button-prev.prev-ctrl {
    position: absolute;
    left: calc(50% - 15px);
    right: auto;
    color: ${({ theme }) => theme.colors.silver};
    z-index: 4;
    cursor: pointer;
    font-size: 28px;
    width: 30px;
    height: 30px;
  }

  .blog-crv .controls .swiper-button-next.next-ctrl:after,
  .blog-crv .controls .swiper-button-prev.prev-ctrl:after {
    display: none;
  }

  .blog-crv .controls .swiper-button-next.next-ctrl {
    top: 22px;
    bottom: auto;
  }

  .blog-crv .controls .swiper-button-prev.prev-ctrl {
    bottom: 0px;
    top: auto;
  }

  .blog-crv .controls .swiper-pagination-fraction {
    position: static;
  }

  .blog-crv .controls .swiper-pagination-fraction span {
    margin: 0 7px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.tundora};
  }

  .blog-crv .controls .swiper-pagination-fraction .swiper-pagination-current {
    position: relative;
  }

  .blog-crv
    .controls
    .swiper-pagination-fraction
    .swiper-pagination-current:after {
    content: '/';
    position: absolute;
    right: -11px;
    top: 0;
    font-size: 10px;
    color: ${({ theme }) => theme.colors.silver};
  }

  .blog-crv .item .img {
    border-radius: 3px;
    overflow: hidden;
  }

  .blog-crv .item .content {
    padding: 30px 65px;
    text-align: center;
  }

  .blog-crv .item .content .tags {
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 13px;
    margin-bottom: 20px;
  }

  .blog-crv .item .content .tags a {
    margin: 0 7px;
  }

  .blog-crv .item .content .info {
    margin-bottom: 10px;
  }

  .blog-crv .item .content .info a {
    margin: 0 10px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.bright_turquoise};
    font-size: 13px;
  }

  .blog-crv .item .content .title {
    margin-bottom: 10px;
  }

  .blog-crv .item .content .title h4 {
    font-weight: 600;
    line-height: 1.5;
  }

  .blog-crv .item .content .more a {
    font-size: 14px;
    letter-spacing: 1px;
    margin-top: 20px;
    border-bottom: 1px solid rgba(200, 200, 200, 0.1);
  }

  .blog-grid .item {
    padding: 40px;
    position: relative;
  }

  .blog-grid .item:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.colors.woodsmoke};
    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    transition: all 0.4s;
  }

  .blog-grid .item.active:after {
    opacity: 0.85;
  }

  .blog-grid .item:hover:after {
    opacity: 0.7;
  }

  .blog-grid .item .cont {
    position: relative;
    z-index: 2;
  }

  .blog-grid .item .cont .date {
    text-transform: uppercase;
    margin-bottom: 100px;
  }

  .blog-grid .item .cont .date i {
    font-size: 30px;
    font-style: normal;
    display: block;
  }

  .blog-grid .item .cont .info {
    margin-bottom: 20px;
  }

  .blog-grid .item .cont .info .author {
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-right: 10px;
  }

  .blog-grid .item .cont .info .tag {
    color: ${({ theme }) => theme.colors.bright_turquoise};
    margin-left: 10px;
  }

  .blog-grid .item .cont h6 {
    line-height: 1.7;
    margin-bottom: 40px;
  }

  .blog-grid .item.list {
    padding: 0;
  }

  .blog-grid .item.list:after {
    display: none;
  }

  .blog-grid .item.list .cont {
    background: ${({ theme }) => theme.colors.bunker};
    padding: 30px;
    position: relative;
  }

  .blog-grid .item.list .cont .date {
    position: absolute;
    top: -40px;
    right: 15px;
    padding: 5px 15px;
    background: ${({ theme }) => theme.colors.bright_turquoise};
    color: ${({ theme }) => theme.colors.mine_shaft}_dark;
    font-size: 12px;
    font-weight: 500;
    text-align: center;
    z-index: 2;
  }

  .blog-grid .item.list .cont .date i {
    font-size: 20px;
  }

  .blog-grid .item.list .cont .date:after {
    content: '';
    position: absolute;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
    border: 5px solid rgba(255, 255, 255, 0.1);
  }

  .blog-list .head h6 {
    display: inline-block;
    padding: 7px 12px;
    font-size: 15px;
    border-radius: 10px;
    margin-bottom: 15px;
  }

  .blog-list .head h3 {
    font-weight: 600;
    margin-bottom: 5px;
  }

  .blog-list .head a {
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 10px;
    margin-top: 40px;
    padding-bottom: 10px;
    position: relative;
  }

  .blog-list .head a:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 1px;
    width: 40%;
    background: -webkit-gradient(
      linear,
      left top,
      right top,
      from(${({ theme }) => theme.colors.bright_turquoise}),
      color-stop(${({ theme }) => theme.colors.lavender}),
      to(${({ theme }) => theme.colors.carnation})
    );
    background: -webkit-linear-gradient(
      left,
      ${({ theme }) => theme.colors.bright_turquoise},
      ${({ theme }) => theme.colors.lavender},
      ${({ theme }) => theme.colors.carnation}
    );
    background: -o-linear-gradient(
      left,
      ${({ theme }) => theme.colors.bright_turquoise},
      ${({ theme }) => theme.colors.lavender},
      ${({ theme }) => theme.colors.carnation}
    );
    background: linear-gradient(
      to right,
      ${({ theme }) => theme.colors.bright_turquoise},
      ${({ theme }) => theme.colors.lavender},
      ${({ theme }) => theme.colors.carnation}
    );
    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    transition: all 0.4s;
  }

  .blog-list .head a:hover:after {
    width: 100%;
  }

  .blog-list .item {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    padding-bottom: 30px;
    margin-bottom: 50px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  }

  .blog-list .item:last-of-type {
    margin-bottom: 0;
    padding-bottom: 0;
    border: none;
  }

  .blog-list .item .img {
    width: 350px;
  }

  .blog-list .item .cont {
    padding-left: 30px;
  }

  .blog-list .item .info {
    margin-bottom: 15px;
    font-size: 12px;
  }

  .blog-list .item .info .date {
    margin-right: 15px;
  }

  .blog-list .item .info .date span i {
    font-style: normal;
  }

  .blog-list .item .info span {
    text-transform: uppercase;
    letter-spacing: 3px;
    font-size: 10px;
    color: ${({ theme }) => theme.colors.silver}_chalice;
  }

  .blog-list .item .info .tag {
    margin-left: 15px;
  }

  .blog-list .item .info .tag span {
    color: ${({ theme }) => theme.colors.bright_turquoise};
  }

  .blog-list .item h5 {
    font-size: 22px;
    font-weight: 500;
  }

  .blog-pg .posts .item .img {
    position: relative;
  }

  .blog-pg .posts .item .content {
    padding-top: 25px;
  }

  .blog-pg .posts .item .content .date {
    margin-right: 15px;
    text-transform: uppercase;
    font-size: 12px;
  }

  .blog-pg .posts .item .content .date .num {
    font-size: 12px;
  }

  .blog-pg .posts .item .content .tags {
    margin-bottom: 10px;
    display: inline-block;
  }

  .blog-pg .posts .item .content .tags a {
    font-size: 12px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.bright_turquoise};
    padding-right: 20px;
    position: relative;
  }

  .blog-pg .posts .item .content .tags a:after {
    content: '';
    width: 8px;
    height: 1px;
    background: ${({ theme }) => theme.colors.gallery};
    position: absolute;
    right: 4px;
    top: 50%;
  }

  .blog-pg .posts .item .content .tags a:last-of-type {
    padding-right: 0;
  }

  .blog-pg .posts .item .content .tags a:last-of-type:after {
    display: none;
  }

  .blog-pg .posts .item .content h4 {
    line-height: 1.6;
    margin-bottom: 5px;
  }

  .blog-pg .posts .pagination {
    margin: 80px auto 0;
    width: -webkit-max-content;
    width: -moz-max-content;
    width: max-content;
    text-align: center;
  }

  .blog-pg .posts .pagination span {
    text-align: center;
    margin: 0 2px;
  }

  .blog-pg .posts .pagination span a {
    width: 50px;
    height: 50px;
    line-height: 50px;
    border: 1px solid ${({ theme }) => theme.colors.gallery};
    font-size: 18px;
  }

  .blog-pg .posts .pagination span.active a {
    border-color: ${({ theme }) => theme.colors.bright_turquoise};
    color: ${({ theme }) => theme.colors.bright_turquoise};
  }

  .blog-pg.blog-list .item {
    display: block;
  }

  .blog-pg.blog-list .item .img {
    width: 100%;
  }

  .blog-pg.blog-list .item .cont {
    padding-left: 60px;
  }

  .blog-pg.single .post .main-img .simpleParallax {
    height: 70vh;
    max-height: 600px;
  }

  .blog-pg.single .post .main-img img {
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    -o-object-position: center center;
    object-position: center center;
  }

  .blog-pg.single .post .content p {
    font-size: 16px;
    font-family: inherit;
    margin: 30px 0;
  }

  .blog-pg.single .post .content ul li {
    margin: 10px 0;
  }

  .blog-pg.single .post .content ul li span {
    margin-right: 10px;
    font-weight: 500;
    font-size: 13px;
  }

  .blog-pg.single .post .content .quotes {
    background: rgba(255, 255, 255, 0.02);
    padding: 30px;
    margin: 30px 0;
  }

  .blog-pg.single .post .content .quotes p {
    font-size: 18px;
    font-style: italic;
  }

  .blog-pg.single .post .content .spacial p {
    font-size: 18px;
    font-weight: 500;
  }

  .blog-pg.single .post .content .share-info {
    margin-top: 20px;
    padding-top: 10px;
    border-top: 1px solid ${({ theme }) => theme.colors.dusty_gray};
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }

  .blog-pg.single .post .content .share-info .social a {
    font-size: 13px;
    margin-right: 20px;
  }

  .blog-pg.single .post .content .share-info .tags {
    margin-left: auto;
  }

  .blog-pg.single .post .content .share-info .tags a {
    font-size: 12px;
    margin: 0 10px;
  }

  .blog-pg.single .post .author {
    padding: 30px;
    margin-top: 40px;
    background: rgba(255, 255, 255, 0.02);
  }

  .blog-pg.single .post .author .author-img {
    display: table-cell;
    vertical-align: middle;
    width: 140px;
  }

  .blog-pg.single .post .author .info {
    display: table-cell;
    padding-left: 40px;
  }

  .blog-pg.single .post .author .info h6 {
    margin-bottom: 10px;
    font-size: 15px;
  }

  .blog-pg.single .post .author .info h6 span {
    text-transform: uppercase;
    margin-right: 10px;
  }

  .blog-pg.single .post .author .info p {
    padding: 0;
    margin: 0;
  }

  .blog-pg.single .post .author .info .social {
    margin-top: 15px;
    font-size: 13px;
  }

  .blog-pg.single .post .author .info .social a {
    margin-right: 15px;
  }

  .blog-pg.single .pagination {
    margin-top: 80px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }

  .blog-pg.single .pagination span {
    width: 100%;
    padding: 20px;
    border-right: 1px solid rgba(255, 255, 255, 0.1);
    border-left: 1px solid rgba(255, 255, 255, 0.1);
    text-transform: uppercase;
    font-weight: 500;
    font-size: 13px;
    letter-spacing: 1px;
  }

  .blog-pg.single .pagination .icon {
    border: 0;
    width: 70px;
  }

  .blog-pg.single .comments-area {
    margin-top: 80px;
  }

  .blog-pg.single .comments-area .item {
    padding: 30px 0;
    margin: 30px 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  .blog-pg.single .comments-area .item.relped {
    margin-left: 100px;
  }

  .blog-pg.single .comments-area .item .comment-img {
    display: table-cell;
    width: 80px;
  }

  .blog-pg.single .comments-area .item .info {
    display: table-cell;
    vertical-align: middle;
    padding-left: 40px;
    position: relative;
  }

  .blog-pg.single .comments-area .item .info h6 {
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 500;
  }

  .blog-pg.single .comments-area .item .info h6 span {
    display: block;
    color: ${({ theme }) => theme.colors.bright_turquoise};
    font-size: 12px;
    font-weight: 400;
    margin-top: 5px;
  }

  .blog-pg.single .comments-area .item .info p {
    line-height: 1.5;
    margin-top: 15px;
  }

  .blog-pg.single .comments-area .item .info .replay {
    position: absolute;
    right: 0;
    top: 0;
    font-size: 13px;
  }

  .blog-pg.single .comments-area .item .info .replay i {
    margin-left: 5px;
  }

  .blog-pg.single .comment-form {
    margin-top: 80px;
  }

  .blog-pg.single .comment-form form {
    margin-top: 50px;
  }

  .blog-pg.single .comment-form form input,
  .blog-pg.single .comment-form form textarea {
    color: ${({ theme }) => theme.colors.white};
    width: 100%;
    padding: 17px;
    background: rgba(255, 255, 255, 0.02);
    border: 0;
  }

  .blog-pg.single .comment-form form textarea {
    height: 140px;
  }

  .next-project {
    position: relative;
    padding: 80px 0;
    margin-top: 90px;
    background: ${({ theme }) => theme.colors.alabaster};
    z-index: 2;
    overflow: hidden;
  }

  .next-project:before {
    display: none;
  }

  .next-project:after {
    content: '';
    height: 0;
    width: 100%;
    position: absolute;
    bottom: auto;
    right: 0;
    top: 0;
    -webkit-transition: height 0.6s cubic-bezier(0.25, 0.8, 0.25, 1) 0s;
    -o-transition: height 0.6s cubic-bezier(0.25, 0.8, 0.25, 1) 0s;
    transition: height 0.6s cubic-bezier(0.25, 0.8, 0.25, 1) 0s;
    background: ${({ theme }) => theme.colors.wild_sand};
    z-index: -1;
  }

  .next-project:hover:after {
    height: 100%;
    bottom: 0;
    top: auto;
  }

  .next-project .content {
    width: 100%;
  }

  .next-project .content h2 {
    font-size: 90px;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 4px;
    margin-bottom: 20px;
  }

  .next-project .content p {
    font-size: 18px;
    color: ${({ theme }) => theme.colors.emperor};
  }

  /* ====================== [ End Blog ] ====================== */
  /* ====================== [ Start Call To Action  ] ====================== */
  .call-action {
    background-attachment: fixed;
  }

  .call-action .content h6 {
    color: ${({ theme }) => theme.colors.bright_turquoise};
    font-size: 13px;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 4px;
    margin-bottom: 10px;
  }

  .call-action .content h6 span {
    color: ${({ theme }) => theme.colors.bright_turquoise};
  }

  .call-action .content h2 {
    font-weight: 700;
    font-size: 4vw;
    line-height: 1.2;
    text-transform: uppercase;
    margin-bottom: 20px;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: ${({ theme }) => theme.colors.white};
    color: transparent;
  }

  .call-action .content h2 span {
    color: transparent;
  }

  .call-action .content h2 b span {
    color: ${({ theme }) => theme.colors.white};
    -webkit-text-stroke-width: 0;
  }

  .call-action .content h2 .whitespace {
    width: 18px;
  }

  .call-action .content p {
    font-size: 17px;
    font-weight: 300;
  }

  .call-action .btn-curve {
    border: 2px solid;
    line-height: 2;
  }

  .call-action .btn-curve span {
    font-size: 15px;
    font-weight: 700;
    text-transform: capitalize;
  }

  .call-action .btn-curve:hover span {
    color: ${({ theme }) => theme.colors.bunker};
  }

  .call-action .tlink {
    margin-left: auto;
    border-bottom: 1px solid ${({ theme }) => theme.colors.gallery};
  }

  .call-action.next {
    position: relative;
    z-index: 2;
    overflow: hidden;
  }

  .call-action.next:after {
    display: none;
  }

  .call-action.next:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: block;
    background: ${({ theme }) => theme.colors.cod_gray};
    opacity: 1;
    -webkit-transition: all 0.5s;
    -o-transition: all 0.5s;
    transition: all 0.5s;
  }

  .call-action.next .content h2 {
    font-size: 5vw;
    font-weight: 700;
  }

  .call-action.next .content h2 b {
    font-weight: 700;
  }

  .call-action.next .nxt-img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    -webkit-transform: scale(1.4);
    -ms-transform: scale(1.4);
    transform: scale(1.4);
    background-size: cover;
    background-position: center;
    z-index: -1;
    -webkit-transition: all 1s linear;
    -o-transition: all 1s linear;
    transition: all 1s linear;
  }

  .call-action.next:hover:before {
    opacity: 0.9;
  }

  .call-action.next:hover .nxt-img {
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
    -webkit-transition: all 10s linear;
    -o-transition: all 10s linear;
    transition: all 10s linear;
  }

  /* ====================== [ End Call To Action  ] ====================== */
  /* ====================== [ Start Numbers & Counter  ] ====================== */
  .number-sec .item {
    text-align: center;
    padding: 0 25px;
  }

  .number-sec .item .icon {
    opacity: 0.8;
    font-size: 70px;
    margin-bottom: 40px;
  }

  .number-sec .item h3 {
    font-weight: 200;
    letter-spacing: 2px;
    margin-bottom: 15px;
  }

  .number-sec .container.sub-bg {
    padding: 0 50px;
    border-radius: 30px;
    background: rgba(24, 25, 29, 0.5);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
  }

  .number-sec .container.sub-bg .item {
    padding: 50px 0;
    border-right: 1px solid ${({ theme }) => theme.colors.woodsmoke};
  }

  .number-sec .container.sub-bg .item.no-bord {
    border: 0;
  }

  .video {
    position: relative;
    min-height: 80vh;
  }

  .video:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: -webkit-gradient(
      linear,
      left bottom,
      left top,
      from(rgba(0, 0, 0, 0.2)),
      to(rgba(43, 47, 53, 0.7))
    );
    background-image: -webkit-linear-gradient(
      bottom,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(43, 47, 53, 0.7) 100%
    );
    background-image: -o-linear-gradient(
      bottom,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(43, 47, 53, 0.7) 100%
    );
    background-image: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(43, 47, 53, 0.7) 100%
    );
    background-repeat: repeat-x;
  }

  .video .vid {
    position: absolute;
    left: calc(50% - 50px);
    top: calc(50% - 50px);
    text-align: center;
    z-index: 8;
  }

  .video .vid .vid-butn {
    width: 100%;
  }

  .video .vid .vid-butn:hover .icon {
    color: ${({ theme }) => theme.colors.white};
  }

  .video .vid .vid-butn:hover .icon:before {
    -webkit-transform: scale(0);
    -ms-transform: scale(0);
    transform: scale(0);
  }

  .video .vid .vid-butn .icon {
    color: ${({ theme }) => theme.colors.white};
    width: 130px;
    height: 130px;
    border: 1px solid ${({ theme }) => theme.colors.white};
    border-radius: 50%;
    line-height: 130px;
    text-align: center;
    font-size: 30px;
    position: relative;
    -webkit-transition: all 0.5s;
    -o-transition: all 0.5s;
    transition: all 0.5s;
  }

  .video .vid .vid-butn .icon:before {
    content: '';
    position: absolute;
    top: 5px;
    bottom: 5px;
    right: 5px;
    left: 5px;
    background: ${({ theme }) => theme.colors.white};
    border-radius: 50%;
    z-index: -1;
    -webkit-transition: all 0.5s cubic-bezier(1, 0, 0, 1);
    -o-transition: all 0.5s cubic-bezier(1, 0, 0, 1);
    transition: all 0.5s cubic-bezier(1, 0, 0, 1);
    opacity: 0;
  }

  .video .container {
    position: relative;
    height: 80vh;
    padding: 80px 0;
    z-index: 2;
  }

  .video .container .stauts {
    position: absolute;
    bottom: 0;
    left: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }

  .video .container .stauts .item {
    padding: 30px 40px;
    min-width: 200px;
    background: ${({ theme }) => theme.colors.mine_shaft}_dark;
    margin-right: 30px;
  }

  .video .container .stauts .item:last-of-type {
    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.bunker};
  }

  .video .container .stauts .item h4 span {
    font-size: 20px;
    margin-left: 2px;
  }

  .video .container .stauts .item h6 {
    font-size: 15px;
    margin-top: 5px;
  }

  /* ====================== [ End Numbers & Counter  ] ====================== */
  /* ====================== [ Start contact ] ====================== */
  .contact-sec .form .form-group {
    margin-bottom: 30px;
  }

  .contact-sec .form .form-group input,
  .contact-sec .form .form-group textarea {
    width: 100%;
    padding: 15px 0;
    border: 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    background: transparent;
    color: ${({ theme }) => theme.colors.white};
  }

  .contact-sec.style2 .form input,
  .contact-sec.style2 .form textarea {
    padding: 20px;
    background: rgba(255, 255, 255, 0.01);
    -webkit-backdrop-filter: blur(4px);
    backdrop-filter: blur(4px);
  }

  .contact .form input,
  .contact .form textarea {
    color: ${({ theme }) => theme.colors.white};
    width: 100%;
    padding: 15px 0;
    background: transparent;
    border: 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  }

  .contact .form textarea {
    padding: 15px;
    min-height: 140px;
    border: 1px solid rgba(255, 255, 255, 0.3);
    margin-top: 30px;
  }

  .contact .cont-info h3 {
    font-size: 18px;
    font-weight: 400;
    letter-spacing: 2px;
    margin-bottom: 10px;
  }

  .contact .cont-info .item h5 {
    font-size: 16px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.dusty_gray};
    margin: 10px 0;
  }

  .contact .cont-info .item h6 {
    font-size: 14px;
    font-weight: 300;
    color: ${({ theme }) => theme.colors.dusty_gray};
    line-height: 1.7;
  }

  .contact .cont-info .social a {
    width: 45px;
    height: 45px;
    line-height: 45px;
    text-align: center;
    background: rgba(255, 255, 255, 0.01);
    border-radius: 50%;
    margin-right: 5px;
    font-size: 13px;
  }

  .map {
    width: 100%;
    height: 60vh;
  }

  /* ====================== [ End contact ] ====================== */
  /* ====================== [ Start Footer ] ====================== */
  footer {
    color: ${({ theme }) => theme.colors.white};
    padding: 100px 0;
  }

  footer .item .title h5 {
    margin-bottom: 30px;
  }

  footer .item li {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin-bottom: 25px;
  }

  footer .item li:last-of-type {
    margin-bottom: 0;
  }

  footer .item li h6 {
    font-size: 14px;
    font-weight: 600;
  }

  footer .item li .icon {
    font-size: 30px;
    margin-right: 30px;
  }

  footer .item li .img {
    width: 150px;
    margin-right: 15px;
  }

  footer .item li .sm-post p {
    font-size: 13px;
  }

  footer .item li .sm-post .date {
    font-size: 12px;
    color: ${({ theme }) => theme.colors.bright_turquoise};
  }

  footer .item li .subscribe {
    width: 100%;
    position: relative;
  }

  footer .item li .subscribe input {
    width: 100%;
    padding: 15px;
    border-radius: 30px;
    border: 1px solid rgba(255, 255, 255, 0.05);
    background: transparent;
    color: ${({ theme }) => theme.colors.white};
    font-size: 13px;
  }

  footer .item li .subscribe .subs {
    position: absolute;
    top: 0;
    right: 0;
    width: 50px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.bright_turquoise};
    color: ${({ theme }) => theme.colors.black};
  }

  footer .item .logo {
    margin-bottom: 50px;
  }

  footer .item .logo img {
    width: 50px;
  }

  footer .item .social a {
    width: 60px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.05);
    font-size: 13px;
    margin-right: 10px;
  }

  footer .item .copy-right {
    margin-top: 30px;
  }

  footer .item .copy-right p {
    font-size: 13px;
    font-weight: 300;
    text-transform: uppercase;
    letter-spacing: 3px;
  }

  footer .item .copy-right p a {
    color: ${({ theme }) => theme.colors.bright_turquoise};
  }

  /* ====================== [ End Footer ] ====================== */
  /* ====================== [ Start Responsive ] ====================== */
  @media screen and (max-width: 991px) {
    .navbar .navbar-collapse.show-with-trans {
      opacity: 1;
      padding: 10px 15px;
      height: auto;
    }

    .bg-img {
      background-position: center !important;
    }

    .md-mb10 {
      margin-bottom: 10px;
    }

    .md-mb20 {
      margin-bottom: 20px;
    }

    .md-mb30 {
      margin-bottom: 30px;
    }

    .md-mb40 {
      margin-bottom: 40px;
    }

    .md-mb50 {
      margin-bottom: 50px;
    }

    .md-mb60 {
      margin-bottom: 60px;
    }

    .md-mb70 {
      margin-bottom: 70px;
    }

    .md-mb80 {
      margin-bottom: 80px;
    }

    .md-pb10 {
      padding-bottom: 10px;
    }

    .md-pb20 {
      padding-bottom: 20px;
    }

    .md-pb30 {
      padding-bottom: 30px;
    }

    .md-pb40 {
      padding-bottom: 40px;
    }

    .md-pb50 {
      padding-bottom: 50px;
    }

    .md-pb60 {
      padding-bottom: 60px;
    }

    .md-pb70 {
      padding-bottom: 70px;
    }

    .md-pb80 {
      padding-bottom: 80px;
    }

    .order2 {
      -webkit-box-ordinal-group: 3 !important;
      -ms-flex-order: 2 !important;
      order: 2 !important;
    }

    .order1 {
      -webkit-box-ordinal-group: 2 !important;
      -ms-flex-order: 1 !important;
      order: 1 !important;
    }

    .container {
      max-width: 720px;
    }

    .navbar {
      min-height: 60px;
    }

    .navbar .navbar-collapse {
      max-height: 340px;
      overflow: auto;
      background: ${({ theme }) => theme.colors.cod_gray};
      text-align: center;
      display: block !important;
      opacity: 0;
      transition: all 0.3s linear;
      height: 0;
      padding: 0;
      transform-origin: top;
    }

    .navbar .nav-link {
      margin: 10px auto !important;
    }

    .navbar .logo {
      margin-left: 15px;
      width: 50px;
    }

    .nav-scroll .navbar-collapse .nav-link,
    .light .navbar-collapse .nav-link {
      color: ${({ theme }) => theme.colors.white} !important;
    }

    .nav-scroll .navbar-collapse .active,
    .light .navbar-collapse .active {
      color: ${({ theme }) => theme.colors.bright_turquoise} !important;
    }

    .navbar .search {
      border: 0;
      padding: 0;
      margin-top: 30px;
    }

    .navbar .search .search-form {
      display: block !important;
      position: static;
      height: auto;
      opacity: 1 !important;
    }

    .navbar .search .search-form form {
      position: static;
      width: 100%;
      -webkit-transform: none;
      -ms-transform: none;
      transform: none;
    }

    .navbar .search .search-form form input {
      padding: 15px;
      width: 100%;
      font-size: 14px;
    }

    .navbar .search .icon,
    .navbar .search .search-form .close {
      display: none;
    }

    .navbar-nav .dropdown-menu {
      opacity: 1;
      visibility: visible;
      display: none;
      background: ${({ theme }) => theme.colors.bunker};
      text-align: center;
      color: ${({ theme }) => theme.colors.gallery};
    }

    .navbar-nav .dropdown-menu .dropdown-item {
      color: ${({ theme }) => theme.colors.gallery};
    }

    .navbar-nav .dropdown-menu.show {
      display: block;
    }

    .navbar .navbar-nav .nav-link {
      padding: 0;
    }

    .navbar .navbar-nav .nav-link:hover {
      color: ${({ theme }) => theme.colors.bright_turquoise};
    }

    .slider .parallax-slider .caption.dig {
      text-align: center;
    }

    .slider .parallax-slider .caption.dig h1 {
      font-size: 60px;
    }

    .slider .parallax-slider .caption.dig h1 .tline {
      margin-left: 0;
    }

    .slider .parallax-slider .caption h1 {
      font-size: 50px;
      letter-spacing: 1px;
    }

    .slider .parallax-slider .caption h1 br {
      display: none;
    }

    .slider-stwo .img {
      padding-right: 0;
      margin-bottom: 50px;
    }

    .slider-stwo:after {
      display: none;
    }

    .freelancre .img {
      margin-bottom: 50px;
    }

    .freelancre .states {
      position: relative;
      margin-top: 80px;
    }

    .freelancre .states ul.flex {
      display: block;
    }

    .freelancre .states ul.flex li {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      margin-bottom: 50px;
    }

    .freelancre .states ul.flex .mail-us {
      float: right;
      margin-bottom: 0;
    }

    .showcase-full .parallax-slider .caption h1 span {
      margin-left: 0;
    }

    .showcase-carus .caption h1,
    .showcase-carus .copy-cap h1 {
      font-size: 60px;
      left: auto;
      margin-left: 20px;
    }

    .circle-slide .swiper-slide .bg-img {
      opacity: 0;
      visibility: hidden;
      -webkit-transition: all 0.5s;
      -o-transition: all 0.5s;
      transition: all 0.5s;
      height: 380px !important;
      width: 380px !important;
      margin: auto !important;
    }

    .circle-slide .swiper-slide.swiper-slide-active .bg-img {
      opacity: 1;
      visibility: visible;
    }

    .showcase-carus.circle-slide .caption h1,
    .showcase-carus.circle-slide .copy-cap h1 {
      font-size: 65px;
    }

    .pages-header .cont h1 {
      font-size: 35px;
    }

    .works-header .capt h1 {
      font-size: 45px;
    }

    .sec-head h3 br {
      display: none;
    }

    .agency .imgsec {
      padding-right: 0;
    }

    .about-cr .img img {
      width: 100%;
      margin: 0;
    }

    .about-cr .cont h3 {
      margin-left: 0;
    }

    .about-cr .cont {
      padding-bottom: 120px;
    }

    .testimonials .item {
      -webkit-transform: scale(1);
      -ms-transform: scale(1);
      transform: scale(1);
    }

    .testimonials .container-fluid {
      width: auto;
      margin-left: 0;
    }

    #circle1,
    #circle2,
    #circle3,
    #circle4 {
      display: none;
    }

    .block-sec .vid-area .cont,
    .about .content,
    .skills-box,
    .about-ar .img .hero-bg {
      margin-bottom: 50px;
    }

    .min-area .content,
    .min-area .img {
      padding: 120px 0;
    }

    .services .rtwo > div:nth-of-type(2),
    .services .rone > div:nth-of-type(2) {
      margin-bottom: 0px;
    }

    .services .step-item.xbottom,
    .services .step-item.xtop {
      bottom: auto;
      top: auto;
    }

    .services .step-item {
      margin: 25px 0;
    }

    .block-sec .testim-box {
      margin-bottom: 120px;
    }

    .block-sec .vid-area {
      display: none;
    }

    .portfolio .filtering {
      padding-left: 0;
      padding-right: 0;
      margin-bottom: 30px;
    }

    .portfolio-frl .gallery .items,
    .portfolio .gallery .items {
      padding: 0 10px;
      margin: 10px 0;
    }

    .case-study .controls {
      top: 100px;
      -webkit-transform: translate(0);
      -ms-transform: translate(0);
      transform: translate(0);
    }

    .slider .parallax-slider .caption p {
      margin-left: 0;
    }

    .arch-slider .parallax-slider .explore {
      margin-left: 0;
      margin-top: 50px;
    }

    .blog-grid .item.active {
      margin: 50px 0;
    }

    .footer-half:after {
      width: 100%;
    }

    .footer-half .cont {
      margin-bottom: 50px;
    }

    .next-prog .box .caption h1,
    .next-prog .box .copy-cap h1 {
      font-size: 40px;
    }
  }

  @media screen and (max-width: 767px) {
    .sm-mb10 {
      margin-bottom: 10px;
    }

    .sm-mb20 {
      margin-bottom: 20px;
    }

    .sm-mb30 {
      margin-bottom: 30px;
    }

    .sm-mb40 {
      margin-bottom: 40px;
    }

    .sm-mb50 {
      margin-bottom: 50px;
    }

    .sm-mb60 {
      margin-bottom: 60px;
    }

    .sm-mb70 {
      margin-bottom: 70px;
    }

    .sm-mb80 {
      margin-bottom: 80px;
    }

    .sm-pb10 {
      padding-bottom: 10px;
    }

    .sm-pb20 {
      padding-bottom: 20px;
    }

    .sm-pb30 {
      padding-bottom: 30px;
    }

    .sm-pb40 {
      padding-bottom: 40px;
    }

    .sm-pb50 {
      padding-bottom: 50px;
    }

    .sm-pb60 {
      padding-bottom: 60px;
    }

    .sm-pb70 {
      padding-bottom: 70px;
    }

    .sm-pb80 {
      padding-bottom: 80px;
    }

    .container {
      max-width: 540px;
    }

    h1 {
      font-size: 35px;
    }

    h2 {
      font-size: 28px;
    }

    h3 {
      font-size: 24px;
    }

    h4 {
      font-size: 20px;
    }

    h5 {
      font-size: 18px;
    }

    h6 {
      font-size: 16px;
    }

    .progress-wrap {
      right: 15px;
      bottom: 15px;
    }

    .navbar .logo {
      width: 40px;
    }

    .hamenu .menu-links .main-menu > li {
      font-size: 24px;
    }

    .hamenu .menu-links .main-menu .sub-menu li {
      font-size: 18px;
    }

    .topnav .container-fluid {
      padding: 0 30px;
    }

    .topnav .logo {
      width: 40px;
    }

    .btn-curve {
      padding: 8px 15px;
    }

    .btn-curve span {
      font-size: 15px;
      letter-spacing: 1px;
    }

    .slider .parallax-slider .caption h1 {
      font-size: 40px;
    }

    .slider .parallax-slider .caption h1 br {
      display: none;
    }

    .slider .parallax-slider .swiper-slide-active .caption h1 {
      font-size: 30px;
    }

    .slider .social-icon {
      display: none;
    }

    .slider .setone.setwo .prev-ctrl {
      left: 15px;
      bottom: 15px;
      top: auto;
      width: 45px;
      height: 45px;
      line-height: 45px;
    }

    .slider .setone.setwo .next-ctrl {
      left: 70px;
      bottom: 15px;
      top: auto;
      width: 45px;
      height: 45px;
      line-height: 45px;
    }

    .slider .swiper-pagination-fraction.top.botm {
      right: 15px;
      bottom: 15px;
    }

    .slider .swiper-pagination-fraction.top .swiper-pagination-current {
      font-size: 40px;
    }

    .slider .parallax-slider .caption.dig h1 {
      font-size: 40px;
    }

    .particles .cont h1 {
      font-size: 55px;
    }

    .slider-stwo ul li div {
      display: block;
    }

    .slider-stwo ul li .cont {
      display: block;
      vertical-align: auto;
      padding-left: 0;
      margin-top: 15px;
    }

    .freelancre {
      padding-top: 200px;
      padding-bottom: 0;
      text-align: center;
    }

    .freelancre .img {
      margin-left: auto;
      margin-right: auto;
    }

    .freelancre:after,
    .freelancre .states ul.flex .mail-us {
      display: none;
    }

    .showcase-carus.circle-slide .caption {
      left: 0;
      text-align: center;
    }

    .showcase-carus.circle-slide .copy-cap {
      display: none;
    }

    .showcase-carus .swiper-slide .bg-img {
      margin: 0;
      height: 100vh;
      background-position: center center;
    }

    .showcase-carus.circle-slide .caption h1,
    .showcase-carus.circle-slide .copy-cap h1 {
      font-size: 50px;
      min-width: auto;
      margin: auto !important;
      left: 0;
    }

    .showcase-full .parallax-slider .caption .discover {
      width: 120px;
      height: 120px;
      letter-spacing: 2px;
      text-transform: capitalize;
    }

    .pages-header {
      padding: 120px 0 80px;
      overflow-x: hidden;
    }

    .works-header .capt h2 {
      font-size: 40px;
    }

    .slider.fixed-slider,
    .works-header.hfixd {
      position: static;
    }

    .main-content {
      margin-top: 0 !important;
    }

    .sub-title h6 {
      font-size: 12px;
    }

    .sec-head h3 {
      font-size: 30px;
    }

    .sec-head h6 {
      font-size: 15px;
      letter-spacing: 5px;
    }

    .agency .imgsec .exp {
      margin-bottom: 15px;
    }

    .about .img-mons .img1,
    .about .img-mons .img2,
    .about .img-mons .img3 {
      height: auto;
    }

    .about .img-mons .img1,
    .about .img-mons .img2,
    .about .img-mons .img3 {
      margin-bottom: 10px;
    }

    .about .img-mons .img3 {
      width: 100%;
      margin-top: 0;
    }

    .about-us .img .stauts .item {
      padding: 25px 15px;
      margin-right: 20px;
    }

    .about-us .img .stauts .item:last-of-type {
      margin-right: 0;
    }

    .about-us .img .stauts .item h4 {
      font-size: 30px;
    }

    .about-us .img .stauts .item h4 span {
      font-size: 20px;
    }

    .about-us .img {
      padding: 0;
    }

    .about-cr .cont h3 {
      font-size: 40px;
    }

    .services .step-item {
      padding: 60px 40px;
    }

    .testimonials .item p {
      font-size: 17px;
    }

    .skills-circle {
      padding-bottom: 0 !important;
    }

    .skills-circle .item {
      margin-bottom: 50px;
    }

    .team .navs {
      top: 20px;
    }

    .block-sec .vid-area .cont h3 {
      font-size: 34px;
    }

    .block-sec .testim-box:after {
      top: -5px;
      left: -5px;
      right: -5px;
      bottom: -5px;
    }

    .call-action .content h2 {
      font-size: 7vw;
    }

    .portfolio .filtering .filter {
      padding: 15px 5px;
      border-radius: 10px;
    }

    .portfolio .filtering span {
      margin: 5px 10px;
    }

    .portfolio .filtering span:after {
      display: none;
    }

    .portfolio-cr .items {
      width: 100% !important;
    }

    .team-crv .img-box .img.sizxl,
    .team-crv .img-box .img.sizmd,
    .team-crv .img-box .img.sizsm {
      width: 100%;
    }

    .blog-pg.blog-list .item .cont {
      padding-left: 15px;
    }

    .blog-pg.single .post .author .author-img,
    .blog-pg.single .post .author .info,
    .blog-pg.single .comments-area .item .comment-img,
    .blog-pg.single .comments-area .item .info {
      display: block;
    }

    .blog-pg.single .post .author .info,
    .blog-pg.single .comments-area .item .info {
      padding-left: 0;
      margin-top: 15px;
    }

    .intro-section .htit {
      margin-bottom: 15px;
    }
  }

  @media screen and (max-width: 480px) {
    .hamenu .cont-info {
      display: none;
    }

    .hamenu .menu-links .main-menu > li {
      font-size: 20px;
      padding: 7px;
    }

    .hamenu .menu-links .main-menu .sub-menu li {
      font-size: 16px;
    }

    .topnav .container-fluid {
      padding: 0 15px;
    }

    .slider-bus .caption h1 {
      font-size: 50px;
    }

    .showcase-full .dots {
      display: none;
    }

    .slider .txt-botm .swiper-nav-ctrl.swiper-button-next {
      right: 20px;
    }

    .slider .txt-botm .swiper-nav-ctrl.swiper-button-prev {
      left: 20px;
    }

    .pages-header .cont .path {
      font-size: 15px;
    }

    .pages-header .cont .path span {
      margin: 0 10px;
    }

    .pages-header .capt h1 {
      font-size: 24px;
    }

    .page-header .cont h1 {
      font-size: 40px;
    }

    .slider .swiper-pagination-fraction.steps {
      bottom: 60px;
    }

    .particles .cont h1 {
      font-size: 30px;
      font-weight: 700;
    }

    .circle-slide .swiper-slide .bg-img {
      height: 280px !important;
      width: 280px !important;
    }

    .freelancre .cont h1 {
      font-size: 22px;
    }

    .freelancre .img {
      width: 200px;
      height: 200px;
    }

    .showcase-carus.circle-slide .caption h1,
    .showcase-carus.circle-slide .copy-cap h1 {
      font-size: 40px;
    }

    .works-header .capt h2 {
      font-size: 30px;
      letter-spacing: 1px;
    }

    .pages-header .cont h1 {
      font-size: 20px;
    }

    .sec-head h3 {
      font-size: 20px;
    }

    .sec-head h2 {
      font-size: 55px;
    }

    .about-us .img .stauts {
      display: none;
    }

    .about-ar .img .hero-bg {
      width: 300px;
      height: 300px;
    }

    .about-ar .img .exp {
      width: 240px;
      height: 240px;
    }

    .about-ar .img .exp h2 {
      font-size: 100px;
    }

    .about-ar .content h3 {
      font-size: 35px;
    }

    .services.lficon .item-box {
      display: block;
    }

    .services.lficon .item-box .cont {
      padding-left: 0;
    }

    .min-area .content h4,
    .agency .content h4 {
      font-size: 28px;
    }

    .portfolio .gallery .items {
      padding: 0 15px;
      margin: 0 0 50px;
    }

    .portfolio .gallery .items.lg-mr {
      margin-top: 50px;
    }

    .portfolio .filtering.smplx span {
      margin: 5px 15px;
    }

    .case-study .swiper-slide .cont h4 {
      font-size: 25px;
    }

    .case-study .controls {
      top: 30px;
      right: 30px;
    }

    .case-study .controls .swiper-button-next,
    .case-study .controls .swiper-button-prev {
      width: 40px;
      height: 40px;
      line-height: 40px;
    }

    .block-sec .vid-area .cont h3 {
      font-size: 28px;
    }

    .video .container .stauts {
      display: none;
    }

    .testimonials .item {
      display: block !important;
      padding: 60px 30px;
    }

    .testimonials .item p {
      margin-left: 0;
      padding-left: 0;
      border: 0;
      font-size: 14px;
      font-weight: 500;
      text-align: center;
    }

    .testimonials .item .info {
      min-width: auto;
      margin: auto;
      margin-bottom: 30px;
      display: block;
      text-align: center;
    }

    .testimonials .item .info .img {
      margin: auto;
    }

    .blog-crv .controls {
      display: none;
    }

    .blog-crv .item .content {
      padding: 30px 15px;
    }

    .blog-list .item {
      display: block;
    }

    .blog-list .item .img {
      width: 100%;
    }

    .blog-list .item .cont {
      padding-left: 0;
      margin-top: 30px;
    }

    .blog-pg.blog-list .item .cont {
      margin-top: 0;
    }

    .blog .item h5 {
      font-size: 20px;
    }

    .blog-pg.single .post .content .share-info {
      display: block;
    }

    .blog-pg.single .post .content .share-info .social,
    .blog-pg.single .post .content .share-info .tags {
      text-align: center;
      background: rgba(255, 255, 255, 0.1);
      padding: 5px 10px;
    }

    .blog-pg.single .post .content .share-info .tags {
      margin-top: 5px;
    }

    .blog-pg.single .comments-area .item.relped {
      margin-left: 30px;
    }

    .next-prog .box .bg-img {
      width: 240px;
      height: 240px;
    }

    .next-prog .box .caption h1,
    .next-prog .box .copy-cap h1 {
      font-size: 20px;
      font-weight: 600;
    }

    .next-prog .box .caption h1 .stroke,
    .next-prog .box .copy-cap h1 .stroke {
      display: inline-block;
      color: ${({ theme }) => theme.colors.white};
      -webkit-text-stroke: 0px ${({ theme }) => theme.colors.white};
    }
  }

  /* ====================== [ End Responsive ] ====================== */

  svg.CircularProgressbar {
    width: 110px;
  }
  section.testimonials.section-padding {
    overflow: hidden !important;
  }
  .slick-prev,
  .slick-next {
    display: none !important;
  }
  header.particles.circle-bg.valign {
    overflow: hidden;
  }

  div#particles-js {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  section.next-prog.section-padding {
    overflow: hidden;
  }
  @media (max-width: 768px) {
    a.col-md-3.popimg {
      padding: 0;
      margin-bottom: 15px;
    }

    .popup-img .row {
      margin: 0 15px;
    }

    a.col-md-12.popimg {
      padding: 0;
    }
  }
`;
