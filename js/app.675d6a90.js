(function(e){function t(t){for(var a,r,c=t[0],s=t[1],l=t[2],d=0,b=[];d<c.length;d++)r=c[d],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&b.push(o[r][0]),o[r]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);p&&p(t);while(b.length)b.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,c=1;c<n.length;c++){var s=n[c];0!==o[s]&&(a=!1)}a&&(i.splice(t--,1),e=r(r.s=n[0]))}return e}var a={},o={app:0},i=[];function r(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=a,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/projects/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var p=s;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1752:function(e,t,n){e.exports=n.p+"img/mail.f9370730.svg"},1956:function(e,t,n){},"1d28":function(e,t,n){},2488:function(e,t,n){},"24f2":function(e,t,n){},"2fe1":function(e,t,n){},"387e":function(e,t,n){e.exports=n.p+"img/github.aec429c4.svg"},"54f3":function(e,t,n){e.exports=n.p+"img/x.c9319cb2.svg"},"56d7":function(e,t,n){"use strict";n.r(t);var a=n("7a23");const o={class:"main-border position--fixed"};function i(e,t,n,i,r,c){const s=Object(a["l"])("Home"),l=Object(a["l"])("Portfolio");return Object(a["j"])(),Object(a["e"])("div",o,[Object(a["i"])(s,{onOpenPortfolio:t[0]||(t[0]=e=>c.openPortfolio())}),r.portfolio?(Object(a["j"])(),Object(a["c"])(l,{key:0,onClosePortfolio:t[1]||(t[1]=e=>c.closePortfolio())})):Object(a["d"])("",!0)])}const r={ref:"main",class:"home container margin--20 flex flex--col align--center justify--center"},c={class:"position--relative"},s=Object(a["f"])("h1",{class:"flex flex--col position--relative"},[Object(a["f"])("span",null,"KRISTINA"),Object(a["f"])("span",{class:"space_x1"},"DIAMOND")],-1),l=Object(a["f"])("p",null,[Object(a["h"])("front end web developer "),Object(a["f"])("br"),Object(a["h"])(" specializing in shopify")],-1),p=Object(a["g"])('<span class="blob-btn__inner"><span class="blob-btn__blobs"><span class="blob-btn__blob"></span><span class="blob-btn__blob"></span><span class="blob-btn__blob"></span><span class="blob-btn__blob"></span></span></span>',1);function d(e,t,n,o,i,d){const b=Object(a["l"])("Eyes"),h=Object(a["l"])("BouncingIcons");return Object(a["j"])(),Object(a["e"])("div",r,[Object(a["f"])("header",c,[Object(a["i"])(b,{class:"eyes position--absolute"}),s,l]),Object(a["f"])("section",null,[Object(a["f"])("button",{class:"blob-btn",onClick:t[0]||(t[0]=t=>e.$emit("open-portfolio"))},[Object(a["h"])(" PROJECTS "),p]),Object(a["i"])(h,{class:"padding-top--12"})])],512)}const b={class:"flex justify--evenly"},h=["aria-label"],u=["title","onClick","src","alt"],f=["href","aria-label"],y=["src"];function g(e,t,n,o,i,r){return Object(a["j"])(),Object(a["e"])("div",b,[(Object(a["j"])(!0),Object(a["e"])(a["a"],null,Object(a["k"])(i.icons,(e,t)=>(Object(a["j"])(),Object(a["e"])("div",{ref_for:!0,ref:"box",class:"box ag-icon_item",key:"icon-"+t},[e.copyText?(Object(a["j"])(),Object(a["e"])("button",{key:0,type:"button","aria-label":e.ariaLabel,class:"box"},[Object(a["f"])("img",{title:e.ariaLabel,onClick:t=>r.copyToClipboard(e.copyText),src:e.svg,alt:e.ariaLabel},null,8,u)],8,h)):(Object(a["j"])(),Object(a["e"])("a",{key:1,href:e.link,target:"_blank","aria-label":e.ariaLabel},[Object(a["f"])("img",{src:e.svg,alt:""},null,8,y)],8,f))]))),128))])}var m=n("953d"),w=n.n(m),j=n("387e"),v=n.n(j),O=n("1752"),L=n.n(O),D=n("eb88"),R=n.n(D),U={name:"BouncingIcons",data(){return{icons:[{svg:w.a,link:"https://www.linkedin.com/in/kristinadiamond/",ariaLabel:"View Kristina Diamond's Linkedin"},{copyText:"krdiamond@gmail.com",svg:L.a,link:"https://github.com/krdiamond",ariaLabel:"Copy Kristina Diamond's email to your clipboard"},{svg:v.a,link:"https://github.com/krdiamond",ariaLabel:"View Kristina Diamond's Github"},{svg:R.a,link:"https://krdiamond.github.io/projects/KristinaDiamondResume.pdf",ariaLabel:"View Kristina Diamond's Resume"}]}},methods:{copyToClipboard(e){navigator.clipboard.writeText(e).then(()=>{alert("✉️ krdiamond@gmail.com ✉️ copied to your clipboard")}).catch(e=>{console.error("Failed to copy text: ",e)})}}},S=n("6b0d"),k=n.n(S);const x=k()(U,[["render",g]]);var E=x;const T={class:"eye eye--left js-eye",ref:"leftEye"},P=Object(a["f"])("div",{class:"pupil js-pupil"},null,-1),C=[P],_={class:"eye eye--right js-eye",ref:"rightEye"},F=Object(a["f"])("div",{class:"pupil js-pupil"},null,-1),V=[F];function z(e,t,n,o,i,r){return Object(a["j"])(),Object(a["e"])("div",null,[Object(a["f"])("div",T,C,512),Object(a["f"])("div",_,V,512)])}var M={mounted(){const e=[this.$refs.leftEye,this.$refs.rightEye],t=document.querySelectorAll(".js-pupil"),n=40,a=45;function o(n){let o=i(e),r=(n.clientX-o.x)/window.innerWidth*100,c=(n.clientY-o.y)/window.innerHeight*100,s=Math.sqrt(Math.pow(r,2)+Math.pow(c,2));if(s>=a){let e=Math.atan(r/c),t=Math.sin(e)*a,n=Math.cos(e)*a;c<0?(r=-1*t,c=-1*n):(r=t,c=n)}t.forEach(e=>{e.style.left=r+50+"%",e.style.top=c+50+"%"})}function i(e){let t={x:0,y:0},a=e[0].getBoundingClientRect().left,o=e[0].getBoundingClientRect().top,i=e[1].getBoundingClientRect().left,r=e[1].getBoundingClientRect().top;return t.x=(a+i)/2+n,t.y=(o+r)/2+n,t}document.addEventListener("mousemove",o)}};const W=k()(M,[["render",z]]);var B=W,A={name:"Home",components:{BouncingIcons:E,Eyes:B},data(){return{horizontalLayout:!1}},mounted(){this.updateWindowSize(),window.addEventListener("resize",this.updateWindowSize)},methods:{updateWindowSize(){}}};const H=k()(A,[["render",d]]);var I=H,G=n("54f3"),K=n.n(G);const N={class:"portfolio container position--absolute z-index--1 text-align--left top--0 bg--white padding--20 flex overflow--hidden justify--between"},$={class:"overflow--x"},J={key:0},Y=["href"],q={key:1},X={key:0},Z=["href"],Q={key:1},ee={class:"padding-left--10"},te=Object(a["f"])("img",{src:K.a,title:"Close Portfolio",alt:"Close Portfolio"},null,-1),ne=[te];function ae(e,t,n,o,i,r){return Object(a["j"])(),Object(a["e"])("div",N,[Object(a["f"])("div",$,[(Object(a["j"])(!0),Object(a["e"])(a["a"],null,Object(a["k"])(i.projects,e=>(Object(a["j"])(),Object(a["e"])("div",{key:e.brand,class:"padding-bottom--30 min-width--200"},[e.brandURL?(Object(a["j"])(),Object(a["e"])("h2",J,[Object(a["f"])("a",{target:"_blank",href:e.brandURL,class:"underline-animation"},Object(a["m"])(e.brand),9,Y)])):(Object(a["j"])(),Object(a["e"])("h2",q,Object(a["m"])(e.brand),1)),Object(a["f"])("h3",null,Object(a["m"])(e.position),1),Object(a["f"])("p",null,Object(a["m"])(e.details),1),Object(a["f"])("h5",null,[e.agency?(Object(a["j"])(),Object(a["e"])("span",X,[Object(a["h"])("While @ "),e.agencyURL?(Object(a["j"])(),Object(a["e"])("a",{key:0,target:"_blank",href:e.agencyURL,class:"underline-animation"},Object(a["m"])(e.agency)+", ",9,Z)):Object(a["d"])("",!0)])):Object(a["d"])("",!0),e.launchDate?(Object(a["j"])(),Object(a["e"])("span",Q,Object(a["m"])(e.launchDate),1)):Object(a["d"])("",!0)])]))),128))]),Object(a["f"])("div",ee,[Object(a["f"])("button",{type:"button",onClick:t[0]||(t[0]=t=>e.$emit("close-portfolio")),class:"close bg--none border--none","aria-label":"Close Portfolio"},ne)])])}var oe={name:"Portfolio",data(){return{projects:[{brand:"OSSA New York",brandURL:"https://www.ossanewyork.com/",position:"Front End Developer",details:"Shopify",launchDate:"2023"},{brand:"Plant People",brandURL:"https://www.plantpeople.co/",position:"Front End Developer",details:"Shopify+, ReCharge, Shopify Scripts",launchDate:"2023"},{brand:"Sleep.me",brandURL:"https://sleep.me/",position:"Front End Developer",details:"Nuxt, Vue, Shopify+, Headless, Headless ReCharge, Shopify Scripts, Extend & Affirm",launchDate:"2023"},{brand:"Hangar9",brandURL:"https://hangar9.ca/",position:"Front End Developer",details:"Shopify",launchDate:"2023",agency:"Driver Digital",agencyURL:"https://driver-digital.com/"},{brand:"Hanky Panky",brandURL:"https://www.hankypanky.com/",position:"Front End Developer",details:"Shopify+",agency:"Driver Digital",agencyURL:"https://driver-digital.com/",launchDate:"2023"},{brand:"Chilisleep",position:"Front End Developer",details:"Vue, Shopify+, Shopify Scripts, Clyde & Affirm",launchDate:"2022"},{brand:"Rosetta Getty",brandURL:"https://rosettagetty.com/",position:"Front End Developer",details:"Shopify",launchDate:"2021"},{brand:"Woosh Beauty",brandURL:"https://wooshbeauty.com/",position:"Front End Developer",details:"Shopify",launchDate:"2022"},{brand:"Griffin",brandURL:"https://www.griffingam.com/",position:"Front End Developer",details:"Webflow",launchDate:"2022"},{brand:"Beauty Blender",brandURL:"https://beautyblender.com/",position:"Front End Developer",details:"Shopify+",agency:"Sweden Unlimited",agencyURL:"https://swedenunlimited.com/",launchDate:"2021"},{brand:"MahZeDahr",brandURL:"https://mahzedahrbakery.com/",position:"Front End Developer",details:"Shopify+, ReCharge",agency:"Sweden Unlimited",agencyURL:"https://swedenunlimited.com/",launchDate:"2021"},{brand:"Monrow",brandURL:"https://www.monrow.com/",position:"Front End Developer",details:"Shopify+",agency:"Sweden Unlimited",agencyURL:"https://swedenunlimited.com/",launchDate:"2021"},{brand:"Pat Mcgrath Labs",brandURL:"https://www.patmcgrath.com",position:"Front End Developer",details:"Shopify+",agency:"Verbal + Visual",agencyURL:"https://verbalplusvisual.com/",launchDate:"2020"},{brand:"Bala Bangles",brandURL:"https://www.shopbala.com/",position:"Technical Director",details:"Shopify+",agency:"Lustre",agencyURL:"https://www.lustre.nyc/",launchDate:"2020"},{brand:"Radswan",brandURL:"https://radswan.com/",position:"Technical Director",details:"Shopify+",agency:"Lustre",agencyURL:"https://www.lustre.nyc/",launchDate:"2020"},{brand:"Aavrani",brandURL:"https://aavrani.com/",position:"Technical Director",details:"Shopify",agency:"Lustre",agencyURL:"https://www.lustre.nyc/",launchDate:"2020"},{brand:"HeTime",brandURL:"https://hetime.com/",position:"Technical Director",details:"Shopify+, ReCharge",agency:"Lustre",agencyURL:"https://www.lustre.nyc/",launchDate:"2020"},{brand:"Ohza",brandURL:"https://drinkohza.com/",position:"Technical Director",details:"Shopify+",agency:"Lustre",agencyURL:"https://www.lustre.nyc/",launchDate:"2020"},{brand:"Olo",brandURL:"https://oloband.com/",position:"Technical Director",details:"Shopify",agency:"Lustre",agencyURL:"https://www.lustre.nyc/",launchDate:"2020"},{brand:"Vanessa Lundborg",brandURL:"https://www.vanessalundborg.com/",position:"Technical Director",details:"Webflow",agency:"Lustre",agencyURL:"https://www.lustre.nyc/",launchDate:"2020"},{brand:"Rachel Lynn x Corri Lynn",brandURL:"https://www.rlbycl.com/",position:"Front End Developer",details:"Shopify, Excel Large Inventory Organization",launchDate:"2020"},{brand:"Linneas Lights",brandURL:"https://linneaslights.com/",position:"Technical Director",details:"Shopify",agency:"Lustre",agencyURL:"https://www.lustre.nyc/",launchDate:"2020"},{brand:"Grabanzos",brandURL:"https://grabanzos.com/",position:"Technical Director",details:"Shopify",agency:"Lustre",agencyURL:"https://www.lustre.nyc/",launchDate:"2020"},{brand:"Kolsvart",brandURL:"https://www.kolsvart.com/",position:"Technical Director",details:"Shopify+",agency:"Lustre",agencyURL:"https://www.lustre.nyc/",launchDate:"2020"},{brand:"Popup Mob",brandURL:"https://www.popupmob.com/",position:"Technical Director",details:"Webflow",agency:"Lustre",agencyURL:"https://www.lustre.nyc/",launchDate:"2020"},{brand:"Oral7",brandURL:"https://oral7us.com/",position:"Technical Director",details:"Shopify, Yotpo",agency:"Lustre",agencyURL:"https://www.lustre.nyc/",launchDate:"2020"},{brand:"Vive Sana",brandURL:"https://vivesana.com/",position:"Technical Director",details:"Shopify",agency:"Lustre",agencyURL:"https://www.lustre.nyc/",launchDate:"2020"},{brand:"Come Tees",brandURL:"https://shop-cometees.biz/",position:"Front End Developer",details:"Shopify",launchDate:"2019"},{brand:"DumbGood",brandURL:"https://dumbgood.com/",position:"Front End Developer",details:"Shopify+, GSAP",agency:"Verbal + Visual",agencyURL:"https://verbalplusvisual.com/",launchDate:"2019"},{brand:"Greats",brandURL:"https://www.greats.com/",position:"Front End Developer",details:"Shopify+",agency:"Verbal + Visual",agencyURL:"https://verbalplusvisual.com/",launchDate:"2018"},{brand:"The Sak",brandURL:"https://www.thesak.com/",position:"Front End Developer",details:"Shopify+, Excel large inventory organization",agency:"Verbal + Visual",agencyURL:"https://verbalplusvisual.com/",launchDate:"2018"},{brand:"Paul Evans",brandURL:"https://www.paulevansny.com/",position:"Front End Developer",details:"Shopify+",agency:"Verbal + Visual",agencyURL:"https://verbalplusvisual.com/",launchDate:"2018"},{brand:"Carhartt WIP",brandURL:"https://us.carhartt-wip.com/",position:"Front End Developer",details:"Shopify+",agency:"Verbal + Visual",agencyURL:"https://verbalplusvisual.com/",launchDate:"2018"},{brand:"Irving Farm",brandURL:"https://irvingfarm.com/",position:"Front End Developer",details:"Shopify+",agency:"Verbal + Visual",agencyURL:"https://verbalplusvisual.com/",launchDate:"2018"}]}}};const ie=k()(oe,[["render",ae]]);var re=ie,ce={name:"App",components:{Home:I,Portfolio:re},data(){return{portfolio:!1,isTouchDevice:!1}},mounted(){this.updateWindowSize(),window.addEventListener("resize",this.updateWindowSize)},methods:{updateWindowSize(){this.isTouchDevice="ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0},openPortfolio(){!0===this.isTouchDevice?setTimeout(()=>{this.portfolio=!0},520):this.portfolio=!0},closePortfolio(){this.portfolio=!1}}};const se=k()(ce,[["render",i]]);var le=se;n("1956"),n("24f2"),n("2fe1"),n("1d28"),n("2488"),n("9ee6");Object(a["b"])(le).mount("#app")},"953d":function(e,t,n){e.exports=n.p+"img/linkedin.a0456500.svg"},"9ee6":function(e,t,n){},eb88:function(e,t,n){e.exports=n.p+"img/resume.f233795d.svg"}});
//# sourceMappingURL=app.675d6a90.js.map