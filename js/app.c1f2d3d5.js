(function(e){function t(t){for(var a,r,c=t[0],s=t[1],l=t[2],d=0,b=[];d<c.length;d++)r=c[d],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&b.push(o[r][0]),o[r]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);p&&p(t);while(b.length)b.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,c=1;c<n.length;c++){var s=n[c];0!==o[s]&&(a=!1)}a&&(i.splice(t--,1),e=r(r.s=n[0]))}return e}var a={},o={app:0},i=[];function r(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=a,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/portfolio/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var p=s;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1752:function(e,t,n){e.exports=n.p+"img/mail.f9370730.svg"},1956:function(e,t,n){},"1d28":function(e,t,n){},2488:function(e,t,n){},"24f2":function(e,t,n){},"387e":function(e,t,n){e.exports=n.p+"img/github.aec429c4.svg"},"394b":function(e,t,n){"use strict";n("b857")},"54f3":function(e,t,n){e.exports=n.p+"img/x.c9319cb2.svg"},"56d7":function(e,t,n){"use strict";n.r(t);var a=n("7a23");const o={class:"main-border position--fixed"};function i(e,t,n,i,r,c){const s=Object(a["l"])("Home"),l=Object(a["l"])("Portfolio");return Object(a["j"])(),Object(a["e"])("div",o,[Object(a["i"])(s,{onOpenPortfolio:t[0]||(t[0]=e=>c.openPortfolio())}),r.portfolio?(Object(a["j"])(),Object(a["c"])(l,{key:0,onClosePortfolio:t[1]||(t[1]=e=>c.closePortfolio())})):Object(a["d"])("",!0)])}const r={ref:"main",class:"home container margin--20 flex flex--col align--center justify--center"},c={class:"flex flex--col position--relative"},s=Object(a["f"])("span",null,"KRISTINA",-1),l=Object(a["f"])("span",{class:"space_x1"},"DIAMOND",-1),p=Object(a["f"])("p",null,[Object(a["h"])("front end web developer "),Object(a["f"])("br"),Object(a["h"])(" specializing in shopify")],-1),d=Object(a["g"])('<span class="blob-btn__inner"><span class="blob-btn__blobs"><span class="blob-btn__blob"></span><span class="blob-btn__blob"></span><span class="blob-btn__blob"></span><span class="blob-btn__blob"></span></span></span>',1);function b(e,t,n,o,i,b){const u=Object(a["l"])("Eyes"),h=Object(a["l"])("BouncingIcons");return Object(a["j"])(),Object(a["e"])("div",r,[Object(a["f"])("header",null,[Object(a["f"])("h1",c,[s,l,Object(a["i"])(u,{class:"eyes"})]),p]),Object(a["f"])("section",null,[Object(a["f"])("button",{class:"blob-btn",onClick:t[0]||(t[0]=t=>e.$emit("open-portfolio"))},[Object(a["h"])(" PROJECTS "),d]),Object(a["i"])(h,{class:"padding-top--12"})])],512)}const u={class:"flex justify--evenly"},h=["aria-label"],f=["title","onClick","src","alt"],y=["href","aria-label"],m=["src"];function g(e,t,n,o,i,r){return Object(a["j"])(),Object(a["e"])("div",u,[(Object(a["j"])(!0),Object(a["e"])(a["a"],null,Object(a["k"])(i.icons,(e,t)=>(Object(a["j"])(),Object(a["e"])("div",{ref_for:!0,ref:"box",class:"box ag-icon_item",key:"icon-"+t},[e.copyText?(Object(a["j"])(),Object(a["e"])("button",{key:0,type:"button","aria-label":e.ariaLabel,class:"box"},[Object(a["f"])("img",{title:e.ariaLabel,onClick:t=>r.copyToClipboard(e.copyText),src:e.svg,alt:e.ariaLabel},null,8,f)],8,h)):(Object(a["j"])(),Object(a["e"])("a",{key:1,href:e.link,target:"_blank","aria-label":e.ariaLabel},[Object(a["f"])("img",{src:e.svg,alt:""},null,8,m)],8,y))]))),128))])}var w=n("953d"),j=n.n(w),v=n("387e"),O=n.n(v),L=n("1752"),D=n.n(L),R=n("eb88"),U=n.n(R),S={name:"BouncingIcons",data(){return{icons:[{svg:j.a,link:"https://www.linkedin.com/in/kristinadiamond/",ariaLabel:"View Kristina Diamond's Linkedin"},{copyText:"krdiamond@gmail.com",svg:D.a,link:"https://github.com/krdiamond",ariaLabel:"Copy Kristina Diamond's email to your clipboard"},{svg:O.a,link:"https://github.com/krdiamond",ariaLabel:"View Kristina Diamond's Github"},{svg:U.a,link:"https://krdiamond.github.io/portfolio//KristinaDiamondResume.pdf",ariaLabel:"View Kristina Diamond's Resume"}]}},methods:{copyToClipboard(e){navigator.clipboard.writeText(e).then(()=>{alert("✉️ krdiamond@gmail.com ✉️ copied to your clipboard")}).catch(e=>{console.error("Failed to copy text: ",e)})}}},k=n("6b0d"),x=n.n(k);const E=x()(S,[["render",g]]);var T=E;const P={class:"eye eye--left js-eye",ref:"leftEye"},C=Object(a["f"])("div",{class:"pupil js-pupil"},null,-1),_=[C],F={class:"eye eye--right js-eye",ref:"rightEye"},V=Object(a["f"])("div",{class:"pupil js-pupil"},null,-1),z=[V];function M(e,t,n,o,i,r){return Object(a["j"])(),Object(a["e"])("div",null,[Object(a["f"])("div",P,_,512),Object(a["f"])("div",F,z,512)])}var W={mounted(){const e=[this.$refs.leftEye,this.$refs.rightEye],t=document.querySelectorAll(".js-pupil"),n=40,a=45;function o(n){let o=i(e),r=(n.clientX-o.x)/window.innerWidth*100,c=(n.clientY-o.y)/window.innerHeight*100,s=Math.sqrt(Math.pow(r,2)+Math.pow(c,2));if(s>=a){let e=Math.atan(r/c),t=Math.sin(e)*a,n=Math.cos(e)*a;c<0?(r=-1*t,c=-1*n):(r=t,c=n)}t.forEach(e=>{e.style.left=r+50+"%",e.style.top=c+50+"%"})}function i(e){let t={x:0,y:0},a=e[0].getBoundingClientRect().left,o=e[0].getBoundingClientRect().top,i=e[1].getBoundingClientRect().left,r=e[1].getBoundingClientRect().top;return t.x=(a+i)/2+n,t.y=(o+r)/2+n,t}document.addEventListener("mousemove",o)}};n("394b");const B=x()(W,[["render",M]]);var A=B,H={name:"Home",components:{BouncingIcons:T,Eyes:A},data(){return{horizontalLayout:!1}},mounted(){this.updateWindowSize(),window.addEventListener("resize",this.updateWindowSize)},methods:{updateWindowSize(){console.log("updated window size")}}};const I=x()(H,[["render",b]]);var G=I,K=n("54f3"),N=n.n(K);const $={class:"portfolio container position--absolute z-index--1 text-align--left top--0 bg--white padding--20 flex overflow--hidden justify--between"},J={class:"overflow--x"},Y={key:0},q=["href"],X={key:1},Z={key:0},Q=["href"],ee={key:1},te={class:"padding-left--20"},ne=Object(a["f"])("img",{src:N.a,title:"Close Portfolio",alt:"Close Portfolio"},null,-1),ae=[ne];function oe(e,t,n,o,i,r){return Object(a["j"])(),Object(a["e"])("div",$,[Object(a["f"])("div",J,[(Object(a["j"])(!0),Object(a["e"])(a["a"],null,Object(a["k"])(i.projects,e=>(Object(a["j"])(),Object(a["e"])("div",{key:e.brand,class:"padding-bottom--30 min-width--200"},[e.brandURL?(Object(a["j"])(),Object(a["e"])("h2",Y,[Object(a["f"])("a",{target:"_blank",href:e.brandURL,class:"underline-animation"},Object(a["m"])(e.brand),9,q)])):(Object(a["j"])(),Object(a["e"])("h2",X,Object(a["m"])(e.brand),1)),Object(a["f"])("h3",null,Object(a["m"])(e.position),1),Object(a["f"])("p",null,Object(a["m"])(e.details),1),Object(a["f"])("h5",null,[e.agency?(Object(a["j"])(),Object(a["e"])("span",Z,[Object(a["h"])("While @ "),e.agencyURL?(Object(a["j"])(),Object(a["e"])("a",{key:0,target:"_blank",href:e.agencyURL,class:"underline-animation"},Object(a["m"])(e.agency)+", ",9,Q)):Object(a["d"])("",!0)])):Object(a["d"])("",!0),e.launchDate?(Object(a["j"])(),Object(a["e"])("span",ee,Object(a["m"])(e.launchDate),1)):Object(a["d"])("",!0)])]))),128))]),Object(a["f"])("div",te,[Object(a["f"])("button",{type:"button",onClick:t[0]||(t[0]=t=>e.$emit("close-portfolio")),class:"close bg--none border--none","aria-label":"Close Portfolio"},ae)])])}var ie={name:"Portfolio",data(){return{projects:[{brand:"OSSA New York",brandURL:"https://www.ossanewyork.com/",position:"Front End Development",details:"Shopify",launchDate:"2023 (Coming Soon)"},{brand:"Rosetta Getty",brandURL:"https://rosettagetty.com/",position:"Front End Development",details:"Shopify",launchDate:"2021"},{brand:"Hangar9",brandURL:"https://hangar9.ca/",position:"Front End Development",details:"Shopify",launchDate:"2023"},{brand:"Hanky Panky",brandURL:"https://www.hankypanky.com/",position:"Front End Development",details:"Shopify+",agency:"Driver Digital",agencyURL:"https://driver-digital.com/",launchDate:"2023"},{brand:"Sleepme",brandURL:"https://sleep.me/",position:"Front End Development",details:"Nuxt, Vue, Shopify+, Headless, Headless ReCharge, Shopify Scripts, Extend & Affirm",agency:"Sleepme",agencyURL:"https://sleep.me/",launchDate:"2022"},{brand:"Chilisleep",position:"Front End Development",details:"Vue, Shopify+, Shopify Scripts, Clyde & Affirm",agency:"Sleepme",agencyURL:"https://sleep.me/",launchDate:"2020"},{brand:"Plant People",brandURL:"https://www.plantpeople.co/",position:"Front End Development",details:"Shopify+, ReCharge, Shopify Scripts",launchDate:"2020 & Ongoing"},{brand:"Beauty Blender",brandURL:"https://beautyblender.com/",position:"Front End Development",details:"Shopify+ ",agency:"Sweden Unlimited",agencyURL:"https://swedenunlimited.com/",launchDate:"2021"},{brand:"MahZeDahr",brandURL:"https://mahzedahrbakery.com/",position:"Front End Development",details:"Shopify+, ReCharge",agency:"Sweden Unlimited",agencyURL:"https://swedenunlimited.com/",launchDate:"2021"},{brand:"Monrow",brandURL:"https://www.monrow.com/",position:"Front End Development",details:"Shopify+",agency:"Sweden Unlimited",agencyURL:"https://swedenunlimited.com/",launchDate:"2021"},{brand:"Woosh Beauty",brandURL:"https://wooshbeauty.com/",position:"Front End Development",details:"Shopify",launchDate:"2020"},{brand:"Griffin",brandURL:"https://www.griffingam.com/",position:"Front End Development",details:"Webflow",launchDate:"2020"},{brand:"Pat Mcgrath Labs",brandURL:"https://www.patmcgrath.com",position:"Front End Development",details:"Shopify+",agency:"Verbal + Visual",agencyURL:"https://verbalplusvisual.com/",launchDate:"2020"},{brand:"Bala Bangles",brandURL:"https://www.shopbala.com/",position:"Technical Director",details:"Shopify+",agency:"Lustre",agencyURL:"https://www.lustre.nyc/",launchDate:"2020"},{brand:"Radswan",brandURL:"https://radswan.com/",position:"Technical Director",details:"Shopify+",agency:"Lustre",agencyURL:"https://www.lustre.nyc/",launchDate:"2020"},{brand:"Aavrani",brandURL:"https://aavrani.com/",position:"Technical Director",details:"Shopify",agency:"Lustre",agencyURL:"https://www.lustre.nyc/",launchDate:"2020"},{brand:"HeTime",brandURL:"https://hetime.com/",position:"Technical Director",details:"Shopify+, ReCharge",agency:"Lustre",agencyURL:"https://www.lustre.nyc/",launchDate:"2020"},{brand:"Ohza",brandURL:"https://drinkohza.com/",position:"Technical Director",details:"Shopify+",agency:"Lustre",agencyURL:"https://www.lustre.nyc/",launchDate:"2020"},{brand:"Olo",brandURL:"https://oloband.com/",position:"Technical Director",details:"Shopify",agency:"Lustre",agencyURL:"https://www.lustre.nyc/",launchDate:"2020"},{brand:"Vanessa Lundborg",brandURL:"https://www.vanessalundborg.com/",position:"Technical Director",details:"Webflow",agency:"Lustre",agencyURL:"https://www.lustre.nyc/",launchDate:"2020"},{brand:"Rachel Lynn x Corri Lynn",brandURL:"https://www.rlbycl.com/",position:"Front End Development",details:"Shopify, Excel Large Inventory Organization",launchDate:"2020"},{brand:"Linnea",brandURL:"https://linneaslights.com/",position:"Technical Director",details:"Shopify",agency:"Lustre",agencyURL:"https://www.lustre.nyc/",launchDate:"2020"},{brand:"Grabanzos",brandURL:"https://grabanzos.com/",position:"Technical Director",details:"Shopify",agency:"Lustre",agencyURL:"https://www.lustre.nyc/",launchDate:"2020"},{brand:"Kolsvart",brandURL:"https://www.kolsvart.com/",position:"Technical Director",details:"Shopify+",agency:"Lustre",agencyURL:"https://www.lustre.nyc/",launchDate:"2020"},{brand:"Popup Mob",brandURL:"https://www.popupmob.com/",position:"Technical Director",details:"Webflow",agency:"Lustre",agencyURL:"https://www.lustre.nyc/",launchDate:"2020"},{brand:"Oral7",brandURL:"https://oral7us.com/",position:"Technical Director",details:"Shopify, Yotpo",agency:"Lustre",agencyURL:"https://www.lustre.nyc/",launchDate:"2020"},{brand:"Vive Sana",brandURL:"https://vivesana.com/",position:"Technical Director",details:"Shopify",agency:"Lustre",agencyURL:"https://www.lustre.nyc/",launchDate:"2020"},{brand:"Come Tees",brandURL:"https://shop-cometees.biz/",position:"Front End Development",details:"Shopify",launchDate:"2019"},{brand:"DumbGood",brandURL:"https://dumbgood.com/",position:"Front End Development",details:"Shopify+, GSAP",agency:"Verbal + Visual",agencyURL:"https://verbalplusvisual.com/",launchDate:"2019"},{brand:"Greats",brandURL:"https://www.greats.com/",position:"Front End Development",details:"Shopify+",agency:"Verbal + Visual",agencyURL:"https://verbalplusvisual.com/",launchDate:"2018"},{brand:"The Sak",brandURL:"https://www.thesak.com/",position:"Front End Development",details:"Shopify+, Excel large inventory organization",agency:"Verbal + Visual",agencyURL:"https://verbalplusvisual.com/",launchDate:"2018"},{brand:"Paul Evans",brandURL:"https://www.paulevansny.com/",position:"Front End Development",details:"Shopify+",agency:"Verbal + Visual",agencyURL:"https://verbalplusvisual.com/",launchDate:"2018"},{brand:"Carhartt WIP",brandURL:"https://us.carhartt-wip.com/",position:"Front End Development",details:"Shopify+",agency:"Verbal + Visual",agencyURL:"https://verbalplusvisual.com/",launchDate:"2018"},{brand:"Irving Farm",brandURL:"https://irvingfarm.com/",position:"Front End Development",details:"Shopify+",agency:"Verbal + Visual",agencyURL:"https://verbalplusvisual.com/",launchDate:"2018"}]}}};const re=x()(ie,[["render",oe]]);var ce=re,se={name:"App",components:{Home:G,Portfolio:ce},data(){return{portfolio:!1,isTouchDevice:!1}},mounted(){this.updateWindowSize(),window.addEventListener("resize",this.updateWindowSize)},methods:{updateWindowSize(){this.isTouchDevice="ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0},openPortfolio(){!0===this.isTouchDevice?setTimeout(()=>{this.portfolio=!0},520):this.portfolio=!0},closePortfolio(){this.portfolio=!1}}};const le=x()(se,[["render",i]]);var pe=le;n("1956"),n("24f2"),n("1d28"),n("2488"),n("9ee6");Object(a["b"])(pe).mount("#app")},"953d":function(e,t,n){e.exports=n.p+"img/linkedin.a0456500.svg"},"9ee6":function(e,t,n){},b857:function(e,t,n){},eb88:function(e,t,n){e.exports=n.p+"img/resume.f233795d.svg"}});
//# sourceMappingURL=app.c1f2d3d5.js.map