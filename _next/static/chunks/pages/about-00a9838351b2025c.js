(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[521],{512:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return c(2241)}])},2241:function(a,b,c){"use strict";c.r(b),c.d(b,{default:function(){return q}});var d=c(5893),e=c(1664),f=c.n(e),g=c(9008),h=c.n(g),i=c(7005),j=c(6122),k=c.n(j),l=function(a){return(0,d.jsx)("div",{className:k().interest,style:{backgroundImage:"url("+a.img_url+")"},children:(0,d.jsx)("p",{children:a.text})})},m=l,n=c(789),o=c.n(n),p=function(){return(0,d.jsxs)("div",{children:[(0,d.jsxs)(h(),{children:[(0,d.jsx)("title",{children:"Tristan's About Me"}),(0,d.jsx)("meta",{name:"description",content:"Extra Information About Tristan Spatscheck."})]}),(0,d.jsx)("h1",{children:"Work Experience"}),(0,d.jsx)("h3",{children:"University of Utah"}),(0,d.jsxs)("p",{children:[(0,d.jsx)("a",{href:"https://www.sci.utah.edu/people/tristan.html",children:"Paid Undergraduate Research"}),": Octorober 2022 - Present"]}),(0,d.jsx)("h3",{children:"SnoWrangler LLC"}),(0,d.jsxs)("p",{children:[(0,d.jsx)("a",{href:"https://www.snowrangler.com/",children:"Data Manager"}),": May 2023 - September 2023"]}),(0,d.jsx)("h1",{children:"Education"}),(0,d.jsx)("h3",{children:"University of Utah"}),(0,d.jsx)("p",{children:"Bachelor of Computer Science: August 2020 - Present"}),(0,d.jsx)("h3",{children:"SnowPro Core Certified"}),(0,d.jsxs)("p",{children:[(0,d.jsx)(f(),{href:"/PDFS/SnowProCore_cert.pdf",children:"SnowPro Core Certificate"}),": Janurary 2024"]}),(0,d.jsx)("h3",{children:"Azure Certified (AZ-900)"}),(0,d.jsxs)("p",{children:[(0,d.jsx)(f(),{href:"/PDFS/AZ900_cert.pdf",children:"Microsoft Azure Certificate"}),": July 2023"]}),(0,d.jsx)("h3",{children:"Udacity.com iOS Nanodegree Program"}),(0,d.jsxs)("p",{children:[(0,d.jsx)(f(),{href:"/PDFs/iOS_Nanodegree.pdf",children:"iOS Developer Nanodegree"}),": August 2018 - June 2019"]}),(0,d.jsx)("h3",{children:"Randolph High School"}),(0,d.jsx)("p",{children:"Highschool Diploma: August 2016 - June 2020"}),(0,d.jsx)("h1",{children:"Interests"}),(0,d.jsx)("div",{className:o().interests,children:(0,d.jsxs)(i.Z,{speed:"100",pauseOnHover:!0,direction:"left",gradient:!0,gradientColor:[255,0,0],gradientWidth:30,children:[(0,d.jsx)(m,{img_url:"/Images/basketball.jpg",text:"Basketball"}),(0,d.jsx)(m,{img_url:"/Images/skiing.jpg",text:"Skiing"}),(0,d.jsx)(m,{img_url:"/Images/pizza.jpg",text:"Pizza"}),(0,d.jsx)(m,{img_url:"/Images/tennis.jpg",text:"Tennis"}),(0,d.jsx)(m,{img_url:"/Images/spongebob.jpg",text:"Spongebob"}),(0,d.jsx)(m,{img_url:"/Images/gaming.jpg",text:"Gaming"})]})})]})},q=p},6122:function(a){a.exports={interest:"ImageTextBox_interest__gSu6m"}},789:function(a){a.exports={interests:"About_interests__8LE4i"}},7005:function(a,b,c){var d,e=c(7294),f=(d=e)&&"object"==typeof d&&"default"in d?d:{default:d},g=function(){return(g=Object.assign||function(a){for(var b,c=1,d=arguments.length;c<d;c++)for(var e in b=arguments[c])Object.prototype.hasOwnProperty.call(b,e)&&(a[e]=b[e]);return a}).apply(this,arguments)};!function(a){if(!a||"undefined"==typeof window)return;let b=document.createElement("style");return b.setAttribute("type","text/css"),b.innerHTML=a,document.head.appendChild(b),a}('.marquee-container {\n  overflow-x: hidden !important;\n  display: flex !important;\n  flex-direction: row !important;\n  position: relative;\n  width: 100%;\n}\n.marquee-container:hover div {\n  animation-play-state: var(--pause-on-hover);\n}\n.marquee-container:active div {\n  animation-play-state: var(--pause-on-click);\n}\n\n.overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.overlay::before, .overlay::after {\n  background: linear-gradient(to right, var(--gradient-color));\n  content: "";\n  height: 100%;\n  position: absolute;\n  width: var(--gradient-width);\n  z-index: 2;\n}\n.overlay::after {\n  right: 0;\n  top: 0;\n  transform: rotateZ(180deg);\n}\n.overlay::before {\n  left: 0;\n  top: 0;\n}\n\n.marquee {\n  flex: 0 0 auto;\n  min-width: 100%;\n  z-index: 1;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);\n  animation-play-state: var(--play);\n  animation-delay: var(--delay);\n  animation-direction: var(--direction);\n}\n@keyframes scroll {\n  0% {\n    transform: translateX(0%);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}');var h=function(a){var b,c,d,h,i=a.style,j=a.className,k=a.play,l=void 0===k||k,m=a.pauseOnHover,n=void 0!==m&&m,o=a.pauseOnClick,p=void 0!==o&&o,q=a.direction,r=void 0===q?"left":q,s=a.speed,t=void 0===s?20:s,u=a.delay,v=void 0===u?0:u,w=a.loop,x=void 0===w?0:w,y=a.gradient,z=a.gradientColor,A=void 0===z?[255,255,255]:z,B=a.gradientWidth,C=void 0===B?200:B,D=a.onFinish,E=a.onCycleComplete,F=a.children,G=e.useState(0),H=G[0],I=G[1],J=e.useState(0),K=J[0],L=J[1],M=e.useState(!1),N=M[0],O=M[1],P=e.useRef(null),Q=e.useRef(null);e.useEffect(function(){if(N){var a=function(){Q.current&&P.current&&(I(P.current.getBoundingClientRect().width),L(Q.current.getBoundingClientRect().width))};return a(),window.addEventListener("resize",a),function(){window.removeEventListener("resize",a)}}},[N]),e.useEffect(function(){O(!0)},[]);var R="rgba("+A[0]+", "+A[1]+", "+A[2],S=K<H?H/t:K/t;return f.default.createElement(e.Fragment,null,N?f.default.createElement("div",{ref:P,style:g(g({},void 0===i?{}:i),((b={})["--pause-on-hover"]=!l||n?"paused":"running",b["--pause-on-click"]=!l||n&&!p||p?"paused":"running",b)),className:(void 0===j?"":j)+" marquee-container"},(void 0===y||y)&&f.default.createElement("div",{style:((c={})["--gradient-color"]=R+", 1), "+R+", 0)",c["--gradient-width"]="number"==typeof C?C+"px":C,c),className:"overlay"}),f.default.createElement("div",{ref:Q,style:((d={})["--play"]=l?"running":"paused",d["--direction"]="left"===r?"normal":"reverse",d["--duration"]=S+"s",d["--delay"]=v+"s",d["--iteration-count"]=x?""+x:"infinite",d),className:"marquee",onAnimationIteration:E,onAnimationEnd:D},F),f.default.createElement("div",{style:((h={})["--play"]=l?"running":"paused",h["--direction"]="left"===r?"normal":"reverse",h["--duration"]=S+"s",h["--delay"]=v+"s",h["--iteration-count"]=x?""+x:"infinite",h),className:"marquee","aria-hidden":"true"},F)):null)};b.Z=h}},function(a){a.O(0,[774,888,179],function(){var b;return a(a.s=512)}),_N_E=a.O()}])