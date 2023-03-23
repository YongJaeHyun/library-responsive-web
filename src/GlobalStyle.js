import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/
* {
    box-sizing: border-box;
    font-family: 'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif;
}

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}

html {    
/* Mobile - Portrait */
@media (max-width: 575px) {
    font-size: 14px;
}

/* Mobile - Landscape */
@media (min-width: 576px) and (max-width: 767px) {
    font-size: 14px;
}

/* Tablet */
@media (min-width: 768px) and (max-width: 991px) {
    font-size: 16px;
}

/* Desktop */
@media (min-width: 992px) and (max-width: 1199px) {
    font-size: 16px;
}

/* Desktop (Large) */
@media (min-width: 1200px) {
    font-size: 16px;
}
}

html,body {
    width: 100vw;
    overflow-x: hidden;
	line-height: 1;
}
ol, ul {
    padding: 0;
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
#root {
    width: 100%;
}
a {
    color: #9c88ff;
    text-decoration: none;
}
button {
   border: 0;
   padding: 0;
   margin: 0;
   background-color: transparent;
   cursor: pointer;
}
input {
    border: 0;
    padding: 0;
}
img {
    /** 드래그 시 선택 방지 */
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    user-select: none;
    /** 드래그 시 잔상 방지 */  
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
}
// Material Design Icon
.material-symbols-outlined {
    font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 48;
  }
`;

export default GlobalStyle;
