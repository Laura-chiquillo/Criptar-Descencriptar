(function(e){function t(t){for(var n,o,l=t[0],r=t[1],d=t[2],u=0,p=[];u<l.length;u++)o=l[u],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&p.push(i[o][0]),i[o]=0;for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);c&&c(t);while(p.length)p.shift()();return a.push.apply(a,d||[]),s()}function s(){for(var e,t=0;t<a.length;t++){for(var s=a[t],n=!0,l=1;l<s.length;l++){var r=s[l];0!==i[r]&&(n=!1)}n&&(a.splice(t--,1),e=o(o.s=s[0]))}return e}var n={},i={app:0},a=[];function o(t){if(n[t])return n[t].exports;var s=n[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=e,o.c=n,o.d=function(e,t,s){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(s,n,function(t){return e[t]}.bind(null,n));return s},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],r=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var c=r;a.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"46d4":function(e,t,s){},"4d2a":function(e,t,s){e.exports=s.p+"img/whatis_encryption.b4b35f02.png"},"56d7":function(e,t,s){"use strict";s.r(t);var n=s("7a23");const i={class:"main-content position-relative overflow-x-hidden"};function a(e,t,s,a,o,l){const r=Object(n["x"])("router-view");return Object(n["q"])(),Object(n["c"])("main",i,[Object(n["f"])(r)])}var o=s("5502"),l={name:"App",methods:{...Object(o["b"])(["toggleConfigurator","navbarMinimize"])},computed:{...Object(o["c"])(["isRTL","color","isAbsolute","isNavFixed","navbarFixed","absolute","showSidenav","showNavbar","showFooter","showConfig","hideConfigButton"])},beforeMount(){this.$store.state.isTransparent="bg-transparent";const e=document.getElementsByClassName("g-sidenav-show")[0];window.innerWidth>1200&&e.classList.add("g-sidenav-pinned")}},r=s("6b0d"),d=s.n(r);const c=d()(l,[["render",a]]);var u=c,p=Object(o["a"])({state:{hideConfigButton:!1,isPinned:!0,showConfig:!1,sidebarType:"bg-gradient-dark",isRTL:!1,color:"success",isNavFixed:!1,isAbsolute:!1,showNavs:!0,showSidenav:!0,showNavbar:!0,showFooter:!0,showMain:!0,isDarkMode:!1,navbarFixed:"position-sticky blur shadow-blur left-auto top-1 z-index-sticky px-0 mx-4",absolute:"position-absolute px-4 mx-0 w-100 z-index-2"},mutations:{toggleConfigurator(e){e.showConfig=!e.showConfig},navbarMinimize(e){const t=document.querySelector(".g-sidenav-show");t.classList.contains("g-sidenav-pinned")?(t.classList.remove("g-sidenav-pinned"),e.isPinned=!0):(t.classList.add("g-sidenav-pinned"),e.isPinned=!1)},navbarFixed(e){!1===e.isNavFixed?e.isNavFixed=!0:e.isNavFixed=!1},toggleEveryDisplay(e){e.showNavbar=!e.showNavbar,e.showSidenav=!e.showSidenav,e.showFooter=!e.showFooter},toggleHideConfig(e){e.hideConfigButton=!e.hideConfigButton},color(e,t){e.color=t}},actions:{setColor({commit:e},t){e("color",t)}},getters:{}}),b=s("6c02");Object(n["t"])("data-v-21b7e3ea");const f={class:"bg-white"},h=Object(n["d"])("div",{class:"container top-0 position-sticky z-index-sticky"},[Object(n["d"])("div",{class:"row"})],-1),g={id:"layout",class:"position-relative px-2 border-radius-lg d-flex flex-column justify-content-center"},m={class:"cuadro1"},v=Object(n["d"])("h3",null,"Cifrado Afín",-1),O=Object(n["d"])("div",null,[Object(n["d"])("label",{for:"originalMessage"},"Mensaje Original:")],-1),j=Object(n["d"])("label",{for:"aValue"},"Valor de a:",-1),y=Object(n["d"])("label",{for:"bValue"},"Valor de b:",-1),x=Object(n["d"])("div",null,[Object(n["d"])("label",{for:"cipheredMessage"},"Mensaje Cifrado:")],-1),w=["value"],M=Object(n["d"])("h3",null,"Descifrado Afín",-1),C=Object(n["d"])("div",null,[Object(n["d"])("label",{for:"cipheredMessage"},"Mensaje a descifrar:")],-1),B=Object(n["d"])("label",{style:{margin:"0.1em 0"},for:""},"Análisis de frecuecia",-1),S=["value"],k=["value"],A=Object(n["d"])("div",null,[Object(n["d"])("label",{for:"originalMessage"},"Mensaje Descifrado:")],-1),L=["value"];function E(e,t,s,i,a,o){return Object(n["q"])(),Object(n["c"])("div",f,[h,Object(n["d"])("main",g,[Object(n["d"])("section",null,[Object(n["d"])("div",m,[Object(n["d"])("div",null,[v,O,Object(n["d"])("div",null,[Object(n["F"])(Object(n["d"])("textarea",{id:"originalMessage",type:"text",style:{width:"450px",height:"150px",padding:".2em .5em"},"onUpdate:modelValue":t[0]||(t[0]=e=>a.originalMessage=e)},null,512),[[n["B"],a.originalMessage]])]),Object(n["d"])("div",null,[j,Object(n["F"])(Object(n["d"])("input",{id:"aValue",type:"number","onUpdate:modelValue":t[1]||(t[1]=e=>a.a=e)},null,512),[[n["B"],a.a]])]),Object(n["d"])("div",null,[y,Object(n["F"])(Object(n["d"])("input",{id:"bValue",type:"number","onUpdate:modelValue":t[2]||(t[2]=e=>a.b=e)},null,512),[[n["B"],a.b]])]),Object(n["d"])("button",{onClick:t[3]||(t[3]=e=>o.cipherMessage())},"Cifrar"),x,Object(n["d"])("div",null,[Object(n["d"])("textarea",{id:"cipheredMessage",size:"50",style:{width:"450px",height:"150px",padding:".2em .5em"},type:"text",value:a.cipheredMessage},null,8,w)])]),Object(n["d"])("div",null,[M,C,Object(n["d"])("div",null,[Object(n["F"])(Object(n["d"])("textarea",{id:"cipheredMessage",size:"50",style:{width:"450px",height:"150px",padding:".2em .5em"},type:"text","onUpdate:modelValue":t[4]||(t[4]=e=>a.desMenssage=e)},null,512),[[n["B"],a.desMenssage]])]),Object(n["d"])("button",{onClick:t[5]||(t[5]=e=>o.decipherMessage())},"Descifrar"),Object(n["F"])(Object(n["d"])("div",null,[B,Object(n["d"])("input",{disabled:"",style:{width:"100%",margin:".3em 0"},name:"",id:"",value:`Letra mas repetida: ${a.masRepetida1}. Segunda mas repedida ${a.masRepetida2}.`},null,8,S),Object(n["d"])("input",{disabled:"",style:{width:"100%",margin:".3em 0"},name:"",id:"",value:`A: ${a.resA} y B: ${a.resB}`},null,8,k)],512),[[n["C"],a.masRepetida1]]),A,Object(n["d"])("div",null,[Object(n["d"])("textarea",{id:"originalMessage",size:"50",style:{width:"450px",height:"150px",padding:".2em .5em"},type:"text",value:a.desMosMenssage},null,8,L)]),Object(n["d"])("button",{onClick:t[6]||(t[6]=e=>o.invertirAYB())},"Invertir a y b")])])])])])}Object(n["r"])();var F={data(){return{masComunes:"EOSNRILUT",n1:0,originalMessage:"",a:"",b:"",aBruto:"",bBruto:"",cipheredMessage:"",desMenssage:"",desMosMenssage:"",desMosMenssageBruto:"",masRepetida1:"",masRepetida2:"",resA:"",resB:"",resABruto:"",resBBruto:""}},methods:{cipherMessage(){const e="ABCDEFGHIJKLMNÑOPQRSTUVWXYZ".split(""),t=27,s=parseInt(this.a),n=parseInt(this.b);if(!this.coprimos(s,t))return void alert("a y mod no son coprimos");let i=this.originalMessage.toLowerCase().replace(/[^a-zA-Zñ]/g,""),a=i.toUpperCase(),o="";for(let l=0;l<a.length;l++){const i=a[l],r=e.indexOf(i);if(-1!==r){const i=(s*r+n)%t,a=e[i];o+=a}else o+=i}this.cipheredMessage=o},coprimos(e,t){const s=e>t?e:t;for(let n=2;n<s;n++){const s=e%n===0,i=t%n===0;if(s&&i)return!1}return!0},decipherMessage(){const e="ABCDEFGHIJKLMNÑOPQRSTUVWXYZ".split(""),t=27,s={};let n=this.desMenssage.toLowerCase(),i=n.toUpperCase(),a="";for(let c=0;c<i.length;c++){const e=i[c];s[e]=s[e]?s[e]+1:1}let o=0,l=0,r=0,d=0;for(let c in s)o<s[c]&&(o=s[c],l=c);for(let c in s)d<s[c]&&c!==l&&(d=s[c],r=c);this.masRepetida1=l,this.masRepetida2=r,this.resB=e.indexOf(this.masRepetida2),this.resA=this.modulus(7*(e.indexOf(this.masRepetida1)-e.indexOf(this.masRepetida2)),t);for(let c=0;c<i.length;c++){const s=i[c],n=e.indexOf(s);if(-1!==n){const s=this.modulus((n-this.resB)*this.modInverse(this.resA,t),t),i=e[s];a+=i}else a+=s}this.desMosMenssage=a},modInverse(e,t){for(let s=1;s<t;s++)if(e%t*(s%t)%t==1)return s;return 1},modulus(e,t){const s=(e%t+t)%t;return s>0?s:s+t},invertirAYB(){const e="ABCDEFGHIJKLMNÑOPQRSTUVWXYZ".split(""),t=27;let s=this.desMenssage.toLowerCase(),n=s.toUpperCase(),i="",a=this.resB;this.resB=this.resA,this.resA=a;for(let o=0;o<n.length;o++){const s=n[o],a=e.indexOf(s);if(-1!==a){const s=this.modulus((a-this.resB)*this.modInverse(this.resA,t),t),n=e[s];i+=n}else i+=s}this.desMosMenssage=i},siguienteCombinacion(){const e="ABCDEFGHIJKLMNÑOPQRSTUVWXYZ".split(""),t=27,s={};let n=this.desMenssage.toLowerCase(),i=n.toUpperCase(),a="";for(let b=0;b<i.length;b++){const e=i[b];s[e]=s[e]?s[e]+1:1}const o=e.indexOf(this.masComunes[this.n1]);let l=0,r=0,d=0,c=0;for(let b in s)l<s[b]&&(l=s[b],r=b);for(let b in s)c<s[b]&&b!==r&&(c=s[b],d=b);const u=e.indexOf(r);console.log(e.indexOf(d)),console.log(this.modulus(e.indexOf(d)-u)),console.log(this.modInverse(o,27));const p=this.modulus((e.indexOf(d)-u)*this.modInverse(o,27),27);for(let b=0;b<i.length;b++){const s=i[b],n=e.indexOf(s);if(-1!==n){const s=this.modulus((n-u)*this.modInverse(p,t),t),i=e[s];a+=i}else a+=s}this.aBruto=p,this.bBruto=u,this.desMosMenssageBruto=a,this.n1=this.modulus(this.n1+1,this.masComunes.length)}}};s("95aa");const R=d()(F,[["render",E],["__scopeId","data-v-21b7e3ea"]]);var I=R;const z={class:"bg-white"},q=Object(n["d"])("div",{class:"container top-0 position-sticky z-index-sticky"},[Object(n["d"])("div",{class:"row"})],-1),N={class:"mt-0 main-content"},U={class:"page-header min-vh-100"},P={class:"container"},T={class:"row"},V={class:"col-6 d-lg-flex d-none h-100 my-auto pe-0 ps-0 position-absolute top-0 start-0 text-center justify-content-center flex-column"},D={class:"col-xl-4 col-lg-5 col-md-7 d-flex flex-column ms-auto me-auto ms-lg-auto me-lg-5"},$={class:"card card-plain"},_=Object(n["d"])("div",{class:"pb-0 card-header bg-transparent mb-4"},[Object(n["d"])("h4",{class:"font-weight-bolder"},"Sign In"),Object(n["d"])("p",{class:"mb-0"}," Enter your email and password to register ")],-1),H={class:"card-body"},W={role:"form"},Y={class:"mb-3"},J={class:"mb-3"},X=Object(n["e"])(" I agree the "),Z=Object(n["d"])("a",{href:"../../../pages/privacy.html",class:"text-dark font-weight-bolder"},"Terms and Conditions",-1),G={class:"text-center"},K=Object(n["e"])("Sign Up");function Q(e,t,i,a,o,l){const r=Object(n["x"])("material-input"),d=Object(n["x"])("material-checkbox"),c=Object(n["x"])("material-button");return Object(n["q"])(),Object(n["c"])("div",z,[q,Object(n["d"])("main",N,[Object(n["d"])("section",null,[Object(n["d"])("div",U,[Object(n["d"])("div",P,[Object(n["d"])("div",T,[Object(n["d"])("div",V,[Object(n["d"])("div",{class:"position-relative h-100 m-0 px-100 border-radius-lg d-flex flex-column justify-content-center",style:Object(n["m"])({backgroundImage:"url("+s("4d2a")+")"})},null,4)]),Object(n["d"])("div",D,[Object(n["d"])("div",$,[_,Object(n["d"])("div",H,[Object(n["d"])("form",W,[Object(n["d"])("div",Y,[Object(n["f"])(r,{id:"email",type:"email",label:"Email",name:"email",size:"lg"})]),Object(n["d"])("div",J,[Object(n["f"])(r,{id:"password",type:"password",label:"Password",name:"password",size:"lg"})]),Object(n["f"])(d,{id:"flexCheckDefault",class:"font-weight-light",checked:""},{default:Object(n["E"])(()=>[X,Z]),_:1}),Object(n["d"])("div",G,[Object(n["f"])(c,{class:"mt-4",variant:"gradient",color:"success",fullWidth:"",size:"lg"},{default:Object(n["E"])(()=>[K]),_:1})])])])])])])])])])])])}const ee=["id","type","name","value","placeholder","isRequired","disabled"];function te(e,t,s,i,a,o){return Object(n["q"])(),Object(n["c"])("div",{class:Object(n["l"])(["input-group",`input-group-${s.variant} ${o.getStatus(s.error,s.success)}`])},[Object(n["d"])("label",{class:Object(n["l"])("static"===s.variant?"":"form-label")},Object(n["z"])(s.label),3),Object(n["d"])("input",{id:s.id,type:s.type,class:Object(n["l"])(["form-control",o.getClasses(s.size)]),name:s.name,value:s.value,placeholder:s.placeholder,isRequired:s.isRequired,disabled:s.disabled},null,10,ee)],2)}function se(e,t){Object.keys(t).forEach((function(s){e.setAttribute(s,t[s])}))}if(0!=document.querySelectorAll(".input-group").length){var ne=document.querySelectorAll("input.form-control");ne.forEach(e=>se(e,{onfocus:"focused(this)",onfocusout:"defocused(this)"}))}function ie(){for(var e=document.querySelectorAll("input"),t=0;t<e.length;t++)e[t].hasAttribute("value")&&e[t].parentElement.classList.add("is-filled"),e[t].addEventListener("focus",(function(e){this.parentElement.classList.add("is-focused")}),!1),e[t].onkeyup=function(e){""!=this.value?this.parentElement.classList.add("is-filled"):this.parentElement.classList.remove("is-filled")},e[t].addEventListener("focusout",(function(e){""!=this.value&&this.parentElement.classList.add("is-filled"),this.parentElement.classList.remove("is-focused")}),!1)}var ae={name:"MaterialInput",props:{variant:{type:String,default:"outline"},label:{type:String,default:""},size:{type:String,default:"default"},success:{type:Boolean,default:!1},error:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},name:{type:String,default:""},id:{type:String,required:!0},value:{type:String,default:""},placeholder:{type:String,default:""},type:{type:String,default:"text"},isRequired:{type:Boolean,default:!1}},mounted(){ie()},methods:{getClasses:e=>{let t;return t=e?"form-control-"+e:null,t},getStatus:(e,t)=>{let s;return s=t?"is-valid":e?"is-invalid":null,s}}};const oe=d()(ae,[["render",te]]);var le=oe;const re={class:"form-check p-0"},de=["id","name","checked"],ce=["for"];function ue(e,t,s,i,a,o){return Object(n["q"])(),Object(n["c"])("div",re,[Object(n["d"])("input",{id:s.id,class:"form-check-input",type:"checkbox",name:s.name,checked:s.checked},null,8,de),Object(n["d"])("label",{for:s.id,class:"custom-control-label"},[Object(n["w"])(e.$slots,"default")],8,ce)])}var pe={name:"MaterialCheckbox",props:{name:{type:String,default:""},id:{type:String,default:""},checked:Boolean}};const be=d()(pe,[["render",ue]]);var fe=be;function he(e,t,s,i,a,o){return Object(n["q"])(),Object(n["c"])("button",{class:Object(n["l"])(["btn mb-0",o.getClasses(s.variant,s.color,s.size,s.fullWidth,s.active)])},[Object(n["w"])(e.$slots,"default")],2)}var ge={name:"MaterialButton",props:{color:{type:String,default:"success"},size:{type:String,default:"md"},variant:{type:String,default:"fill"},fullWidth:{type:Boolean,default:!1},active:{type:Boolean,default:!1}},methods:{getClasses:(e,t,s,n,i)=>{let a,o,l,r;return a="gradient"===e?"bg-gradient-"+t:"outline"===e?"btn-outline-"+t:"btn-"+t,o=s?"btn-"+s:null,l=n?"w-100":null,r=i?"active":null,`${a} ${o} ${l} ${r}`}}};const me=d()(ge,[["render",he]]);var ve=me;const Oe=document.getElementsByTagName("body")[0];var je={name:"sign-up",components:{MaterialInput:le,MaterialCheckbox:fe,MaterialButton:ve},beforeMount(){this.toggleEveryDisplay(),this.toggleHideConfig(),Oe.classList.remove("bg-gray-100")},beforeUnmount(){this.toggleEveryDisplay(),this.toggleHideConfig(),Oe.classList.add("bg-gray-100")},methods:{...Object(o["b"])(["toggleEveryDisplay","toggleHideConfig"])}};const ye=d()(je,[["render",Q]]);var xe=ye;const we=[{path:"/",name:"/",component:xe},{path:"/SingUp",name:"SingUp",component:I}],Me=Object(b["a"])({history:Object(b["b"])("/"),routes:we,linkActiveClass:"active"});var Ce=Me;s("6a5d"),s("46d4");s("b945"),s("9e17");var Be={install(){}};const Se=Object(n["b"])(u);Se.use(p),Se.use(Ce),Se.use(Be),Se.mount("#app")},"6a5d":function(e,t,s){},"70c0":function(e,t,s){},"95aa":function(e,t,s){"use strict";s("70c0")},"9e17":function(e,t,s){},b945:function(e,t){window.onload=function(){for(var e=document.querySelectorAll(".btn"),t=0;t<e.length;t++)e[t].addEventListener("click",(function(e){var t=e.target,s=t.querySelector(".ripple");s=document.createElement("span"),s.classList.add("ripple"),s.style.width=s.style.height=Math.max(t.offsetWidth,t.offsetHeight)+"px",t.appendChild(s),s.style.left=e.offsetX-s.offsetWidth/2+"px",s.style.top=e.offsetY-s.offsetHeight/2+"px",s.classList.add("ripple"),setTimeout((function(){s.parentElement.removeChild(s)}),600)}),!1)}}});
//# sourceMappingURL=app.65c2c3fb.js.map