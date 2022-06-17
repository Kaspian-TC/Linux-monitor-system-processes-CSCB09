(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[4039],{"+ayY":function(e,t,r){"use strict"
r.d(t,"a",(function(){return d}))
var n=r("VTBJ")
var a=r("1OyB")
var o=r("vuIU")
var i=r("Ji7U")
var c=r("LK+K")
var s=r("q1tI")
var u=r.n(s)
var l=r("hPGw")
var f=u.a.createElement("path",{d:"M960,0 C1490.19336,0 1920,429.80664 1920,960 C1920,1490.19336 1490.19336,1920 960,1920 C429.80664,1920 0,1490.19336 0,960 C0,429.80664 429.80664,0 960,0 Z M960,101.052632 C485.616468,101.052632 101.052632,485.616468 101.052632,960 C101.052632,1434.38353 485.616468,1818.94737 960,1818.94737 C1434.38353,1818.94737 1818.94737,1434.38353 1818.94737,960 C1818.94737,485.616468 1434.38353,101.052632 960,101.052632 Z M950.679927,1322.54386 C870.655911,1322.54386 805.551855,1387.64792 805.551855,1467.67193 C805.551855,1547.69595 870.655911,1612.8 950.679927,1612.8 C1030.70394,1612.8 1095.808,1547.69595 1095.808,1467.67193 C1095.808,1387.64792 1030.70394,1322.54386 950.679927,1322.54386 Z M1143.46512,353.684211 L757.894737,353.684211 L851.795993,1205.0114 L1049.56386,1205.0114 L1143.46512,353.684211 Z",fillRule:"evenodd",stroke:"none",strokeWidth:"1"})
var d=function(e){Object(i["a"])(r,e)
var t=Object(c["a"])(r)
function r(){Object(a["a"])(this,r)
return t.apply(this,arguments)}Object(o["a"])(r,[{key:"render",value:function(){return u.a.createElement(l["a"],Object.assign({},this.props,{name:"IconWarning",viewBox:"0 0 1920 1920"}),f)}}])
r.displayName="IconWarningLine"
return r}(s["Component"])
d.glyphName="warning"
d.variant="Line"
d.propTypes=Object(n["a"])({},l["a"].propTypes)},"/UXv":function(e,t,r){"use strict"
r.d(t,"a",(function(){return o}))
var n=r("QF4Q")
var a=r("pgSO")
function o(e){var t=e&&Object(n["a"])(e)
return t&&Object(a["a"])()===t}},"3zPy":function(e,t){function r(e){if(e&&"object"===typeof e){var t=e.which||e.keyCode||e.charCode
t&&(e=t)}if("number"===typeof e)return i[e]
var r=String(e)
var o=n[r.toLowerCase()]
if(o)return o
o=a[r.toLowerCase()]
if(o)return o
if(1===r.length)return r.charCodeAt(0)
return}r.isEventKey=function(e,t){if(e&&"object"===typeof e){var r=e.which||e.keyCode||e.charCode
if(null===r||void 0===r)return false
if("string"===typeof t){var o=n[t.toLowerCase()]
if(o)return o===r
o=a[t.toLowerCase()]
if(o)return o===r}else if("number"===typeof t)return t===r
return false}}
t=e.exports=r
var n=t.code=t.codes={backspace:8,tab:9,enter:13,shift:16,ctrl:17,alt:18,"pause/break":19,"caps lock":20,esc:27,space:32,"page up":33,"page down":34,end:35,home:36,left:37,up:38,right:39,down:40,insert:45,delete:46,command:91,"left command":91,"right command":93,"numpad *":106,"numpad +":107,"numpad -":109,"numpad .":110,"numpad /":111,"num lock":144,"scroll lock":145,"my computer":182,"my calculator":183,";":186,"=":187,",":188,"-":189,".":190,"/":191,"`":192,"[":219,"\\":220,"]":221,"'":222}
var a=t.aliases={windows:91,"⇧":16,"⌥":18,"⌃":17,"⌘":91,ctl:17,control:17,option:18,pause:19,break:19,caps:20,return:13,escape:27,spc:32,spacebar:32,pgup:33,pgdn:34,ins:45,del:46,cmd:91}
for(o=97;o<123;o++)n[String.fromCharCode(o)]=o-32
for(var o=48;o<58;o++)n[o-48]=o
for(o=1;o<13;o++)n["f"+o]=o+111
for(o=0;o<10;o++)n["numpad "+o]=o+96
var i=t.names=t.title={}
for(o in n)i[n[o]]=o
for(var c in a)n[c]=a[c]},"4Awi":function(e,t,r){"use strict"
r.d(t,"a",(function(){return a}))
function n(e){return"string"===typeof e?e:e.displayName||e.name}function a(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]
if(e&&e.type){var r=t.map((function(e){return n(e)}))
return r.indexOf(n(e.type))>=0}return false}},CyAq:function(e,t,r){"use strict"
r.d(t,"a",(function(){return n}))
function n(e){var t="".concat(e)
return[parseFloat(t,10),t.match(/[\d.\-\+]*\s*(.*)/)[1]||""]}},"E+IV":function(e,t,r){"use strict"
r.d(t,"a",(function(){return o}))
var n=r("q1tI")
var a=r.n(n)
function o(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
if("function"===typeof e){if(!(e.prototype&&e.prototype.isReactComponent))return e(t)
return a.a.createElement(e,t)}return e}},HMVb:function(e,t,r){"use strict"
r.d(t,"a",(function(){return l}))
var n=r("ODXe")
var a=r("i/8D")
var o=r("DUTp")
var i=r("IPIv")
var c={}
function s(e,t){if(!a["a"])return 16
var r=e||Object(o["a"])(e).documentElement
if(!t&&c[r])return c[r]
var n=parseInt(Object(i["a"])(r).getPropertyValue("font-size"))
c[r]=n
return n}var u=r("CyAq")
function l(e,t){var r=t||document.body
if(!e||"number"===typeof e)return e
var a=Object(u["a"])(e),o=Object(n["a"])(a,2),i=o[0],c=o[1]
return"rem"===c?i*s():"em"===c?i*s(r):i}},Vzc5:function(e,t,r){"use strict"
r.r(t)
var n=r("RtDj")
var a=r("HGxv")
r("q1tI")
var o=r("i8i4")
var i=r.n(o)
var c=r("bZJi")
var s=r("whu9")
var u=r("+ayY")
var l=r("3lLS")
var f=r.n(l)
var d,p
const v=Object(a["useScope"])("progress_pill")
f()(()=>{const e=document.querySelectorAll(".assignment_presenter_for_submission")
const t=e=>{switch(e.innerText){case"pending":return[d||(d=Object(n["a"])(s["a"],{})),v.t("Uploading Submission")]
case"failed":return[p||(p=Object(n["a"])(u["a"],{})),v.t("Submission Failed to Submit")]
default:return null}}
const r=document.querySelectorAll(".react_pill_container")
for(let a=0;a<r.length;a++){const o=t(e[a])
null!==o&&i.a.render(Object(n["a"])(c["a"],{renderTip:o[1]},void 0,o[0]),r[a])}})},bZJi:function(e,t,r){"use strict"
r.d(t,"a",(function(){return U}))
var n=r("Ff2n")
var a=r("VTBJ")
var o=r("1OyB")
var i=r("vuIU")
var c=r("Ji7U")
var s=r("LK+K")
var u=r("q1tI")
var l=r.n(u)
var f=r("17x9")
var d=r.n(f)
var p=r("nAyT")
var v=r("KgFQ")
var h=r("jtGx")
var m=r("sQ3t")
var b=r("E+IV")
var g=r("UCAh")
var y=r("BTe1")
var O=r("J2CL")
var w=r("oXx0")
var j=r("jsCG")
var C=r("AdN2")
var L=function(e){var t=e.typography,r=e.spacing
return{fontFamily:t.fontFamily,fontWeight:t.fontWeightNormal,fontSize:t.fontSizeSmall,padding:r.small}}
var _,T,z,S,G,k
var I={componentId:"eZLSb",template:function(e){return"\n\n.eZLSb_bGBk{box-sizing:border-box;display:block;font-family:".concat(e.fontFamily||"inherit",";font-size:").concat(e.fontSize||"inherit",";font-weight:").concat(e.fontWeight||"inherit",";padding:").concat(e.padding||"inherit","}")},root:"eZLSb_bGBk"}
var U=(_=Object(p["a"])("8.0.0",{tip:"renderTip",variant:"color"}),T=Object(w["a"])(),z=Object(O["j"])(L,I),_(S=T(S=z(S=(k=G=function(e){Object(c["a"])(r,e)
var t=Object(s["a"])(r)
function r(){var e
Object(o["a"])(this,r)
for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i]
e=t.call.apply(t,[this].concat(a))
e._id=Object(y["a"])("Tooltip")
e.state={hasFocus:false}
e.handleFocus=function(t){e.setState({hasFocus:true})}
e.handleBlur=function(t){e.setState({hasFocus:false})}
return e}Object(i["a"])(r,[{key:"renderTrigger",value:function(){var e=this.props,t=e.children,n=e.as
var o=this.state.hasFocus
var i={"aria-describedby":this._id}
if(n){var c=Object(v["a"])(r,this.props)
var s=Object(h["a"])(this.props,r.propTypes)
return l.a.createElement(c,Object.assign({},s,i),t)}return"function"===typeof t?t({focused:o,getTriggerProps:function(e){return Object(a["a"])({},i,{},e)}}):Object(m["a"])(this.props.children,i)}},{key:"render",value:function(){var e=this
var t=this.props,r=t.renderTip,a=t.isShowingContent,o=t.defaultIsShowingContent,i=t.on,c=t.placement,s=t.mountNode,u=t.constrain,f=t.offsetX,d=t.offsetY,p=t.positionTarget,v=t.onShowContent,m=t.onHideContent,g=t.tip,y=(t.variant,Object(n["a"])(t,["renderTip","isShowingContent","defaultIsShowingContent","on","placement","mountNode","constrain","offsetX","offsetY","positionTarget","onShowContent","onHideContent","tip","variant"]))
var O=this.props.variant
O=O?"default"===O?"primary-inverse":"primary":this.props.color
return l.a.createElement(j["a"],Object.assign({},Object(h["b"])(y),{isShowingContent:a,defaultIsShowingContent:o,on:i,shouldRenderOffscreen:true,shouldReturnFocus:false,placement:c,color:"primary"===O?"primary-inverse":"primary",mountNode:s,constrain:u,shadow:"none",offsetX:f,offsetY:d,positionTarget:p,renderTrigger:function(){return e.renderTrigger()},onShowContent:v,onHideContent:m,onFocus:this.handleFocus,onBlur:this.handleBlur}),l.a.createElement("span",{id:this._id,className:I.root,role:"tooltip"},r?Object(b["a"])(r):g))}}])
r.displayName="Tooltip"
return r}(u["Component"]),G.propTypes={children:d.a.oneOfType([d.a.node,d.a.func]).isRequired,renderTip:d.a.oneOfType([d.a.node,d.a.func]),isShowingContent:d.a.bool,defaultIsShowingContent:d.a.bool,as:d.a.elementType,on:d.a.oneOfType([d.a.oneOf(["click","hover","focus"]),d.a.arrayOf(d.a.oneOf(["click","hover","focus"]))]),color:d.a.oneOf(["primary","primary-inverse"]),placement:g["a"].placement,mountNode:g["a"].mountNode,constrain:g["a"].constrain,offsetX:d.a.oneOfType([d.a.string,d.a.number]),offsetY:d.a.oneOfType([d.a.string,d.a.number]),positionTarget:d.a.oneOfType([C["a"],d.a.func]),onShowContent:d.a.func,onHideContent:d.a.func,tip:d.a.node,variant:d.a.oneOf(["default","inverse"])},G.defaultProps={renderTip:void 0,isShowingContent:void 0,defaultIsShowingContent:false,on:void 0,color:"primary",placement:"top",mountNode:null,constrain:"window",offsetX:0,offsetY:0,positionTarget:void 0,onShowContent:function(e){},onHideContent:function(e,t){t.documentClick}},k))||S)||S)||S)},eGSd:function(e,t,r){"use strict"
r.d(t,"a",(function(){return n}))
function n(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0
var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
var n,a,o,i
var c=0
var s=[]
var u=false
if("function"!==typeof e)throw new TypeError("Expected a function")
var l=!!r.leading
var f="maxWait"in r
var d=!("trailing"in r)||!!r.trailing
var p=f?Math.max(+r.maxWait||0,t):0
function v(t){var r=n
var i=a
n=a=void 0
c=t
if(true!==u){o=e.apply(i,r)
return o}}function h(e){c=e
s.push(setTimeout(g,t))
return l?v(e):o}function m(e){var r=e-i
var n=e-c
var a=t-r
return f?Math.min(a,p-n):a}function b(e){var r=e-i
var n=e-c
return"undefined"===typeof i||r>=t||r<0||f&&n>=p}function g(){var e=Date.now()
if(b(e))return y(e)
s.push(setTimeout(g,m(e)))}function y(e){j()
if(d&&n)return v(e)
n=a=void 0
return o}function O(){u=true
j()
c=0
n=i=a=void 0}function w(){return 0===s.length?o:y(Date.now())}function j(){s.forEach((function(e){return clearTimeout(e)}))
s=[]}function C(){var e=Date.now()
var r=b(e)
for(var c=arguments.length,u=new Array(c),l=0;l<c;l++)u[l]=arguments[l]
n=u
a=this
i=e
if(r){if(0===s.length)return h(i)
if(f){s.push(setTimeout(g,t))
return v(i)}}0===s.length&&s.push(setTimeout(g,t))
return o}C.cancel=O
C.flush=w
return C}},gCYW:function(e,t,r){"use strict"
r.d(t,"a",(function(){return c}))
var n=r("QF4Q")
var a=r("i/8D")
var o=r("EgqM")
var i=r("DUTp")
function c(e){var t={top:0,left:0,height:0,width:0}
if(!a["a"])return t
var r=Object(n["a"])(e)
if(!r)return t
if(r===window)return{left:window.pageXOffset,top:window.pageYOffset,width:window.innerWidth,height:window.innerHeight,right:window.innerWidth+window.pageXOffset,bottom:window.innerHeight+window.pageYOffset}
var s=e===document?document:Object(i["a"])(r)
var u=s&&s.documentElement
if(!u||!Object(o["a"])(u,r))return t
var l=r.getBoundingClientRect()
var f
for(f in l)t[f]=l[f]
if(s!==document){var d=s.defaultView.frameElement
if(d){var p=c(d)
t.top+=p.top
t.bottom+=p.top
t.left+=p.left
t.right+=p.left}}return{top:t.top+(window.pageYOffset||u.scrollTop)-(u.clientTop||0),left:t.left+(window.pageXOffset||u.scrollLeft)-(u.clientLeft||0),width:(null==t.width?r.offsetWidth:t.width)||0,height:(null==t.height?r.offsetHeight:t.height)||0,right:s.body.clientWidth-t.width-t.left,bottom:s.body.clientHeight-t.height-t.top}}},hPGw:function(e,t,r){"use strict"
r.d(t,"a",(function(){return T}))
var n=r("VTBJ")
var a=r("rePB")
var o=r("Ff2n")
var i=r("1OyB")
var c=r("vuIU")
var s=r("Ji7U")
var u=r("LK+K")
var l=r("q1tI")
var f=r.n(l)
var d=r("17x9")
var p=r.n(d)
var v=r("TSYQ")
var h=r.n(v)
var m=r("J2CL")
var b=r("oXx0")
var g=r("wnpw")
function y(){return{sizeXSmall:"1.125rem",sizeSmall:"2rem",sizeMedium:"3rem",sizeLarge:"5rem",sizeXLarge:"10rem"}}var O,w,j,C,L
var _={componentId:"cGqzL",template:function(e){return"\n\n.cGqzL_bGBk{height:1em;line-height:1;vertical-align:middle;width:1em}\n\n.cGqzL_cwgF{transform:rotate(90deg)}\n\n.cGqzL_exaY{transform:rotate(180deg)}\n\n.cGqzL_dTDN{transform:rotate(270deg)}\n\n[dir=rtl] .cGqzL_owrh{transform:scaleX(-1)}\n\n[dir=rtl] .cGqzL_owrh.cGqzL_cwgF{transform:scaleX(-1) rotate(90deg)}\n\n[dir=rtl] .cGqzL_owrh .cGqzL_exaY{transform:scaleX(-1) rotate(180deg)}\n\n[dir=rtl] .cGqzL_owrh .cGqzL_dTDN{transform:scaleX(-1) rotate(270deg)}\n\n.cGqzL_dIzR{font-size:".concat(e.sizeXSmall||"inherit","}\n\n.cGqzL_VCXp{font-size:").concat(e.sizeSmall||"inherit","}\n\n.cGqzL_fKcQ{font-size:").concat(e.sizeMedium||"inherit","}\n\n.cGqzL_cnhd{font-size:").concat(e.sizeLarge||"inherit","}\n\n.cGqzL_fWMB{font-size:").concat(e.sizeXLarge||"inherit","}")},root:"cGqzL_bGBk","rotate--90":"cGqzL_cwgF","rotate--180":"cGqzL_exaY","rotate--270":"cGqzL_dTDN",bidirectional:"cGqzL_owrh","size--x-small":"cGqzL_dIzR","size--small":"cGqzL_VCXp","size--medium":"cGqzL_fKcQ","size--large":"cGqzL_cnhd","size--x-large":"cGqzL_fWMB"}
var T=(O=Object(b["a"])(),w=Object(m["j"])(y,_),O(j=w(j=(L=C=function(e){Object(s["a"])(r,e)
var t=Object(u["a"])(r)
function r(){Object(i["a"])(this,r)
return t.apply(this,arguments)}Object(c["a"])(r,[{key:"render",value:function(){var e
var t=this.props,r=t.rotate,n=t.className,i=t.size,c=t.bidirectional,s=Object(o["a"])(t,["rotate","className","size","bidirectional"])
return f.a.createElement(g["a"],Object.assign({},s,{rotate:r,className:h()((e={},Object(a["a"])(e,_.root,true),Object(a["a"])(e,_["rotate--".concat(r)],r&&"0"!==r),Object(a["a"])(e,_["size--".concat(i)],i),Object(a["a"])(e,_.bidirectional,c),Object(a["a"])(e,n,n),e))}))}}])
r.displayName="SVGIcon"
return r}(l["Component"]),C.propTypes=Object(n["a"])({},g["a"].propTypes,{rotate:p.a.oneOf(["0","90","180","270"]),size:p.a.oneOf(["x-small","small","medium","large","x-large"]),bidirectional:p.a.bool}),C.defaultProps={rotate:"0",bidirectional:false,size:void 0},L))||j)||j)},k72m:function(e,t,r){"use strict"
r.d(t,"b",(function(){return o}))
r.d(t,"a",(function(){return i}))
var n=r("ODXe")
var a={center:"center",start:"end",end:"start",top:"bottom",bottom:"top",stretch:"stretch",offscreen:"offscreen"}
function o(e,t){return c(e,(function(e,t){return[a[e],t]}),t)}function i(e,t){return c(e,(function(e,t){return[e,t].map((function(e){return"start"===e||"end"===e?a[e]:e}))}),t)}function c(e,t,r){var a=Array.isArray(e)?e:e.split(" "),o=Object(n["a"])(a,2),i=o[0],c=o[1]
var s=t(i,c).filter((function(e){return e}))
return r?s.join(r):s}},kR0I:function(e,t,r){"use strict"
r.d(t,"a",(function(){return c}))
var n=r("KQm4")
var a=r("QF4Q")
function o(e,t){var r=e&&Object(a["a"])(e)
if(!r)return false
return r.matches?r.matches(t):r.msMatchesSelector(t)}var i=r("IPIv")
function c(e,t,r){var i=Object(a["a"])(e)
if(!i||"function"!==typeof i.querySelectorAll)return[]
var c="a[href],frame,iframe,object,input:not([type=hidden]),select,textarea,button,*[tabindex]"
var s=Array.from(i.querySelectorAll(c))
r&&o(i,c)&&(s=[].concat(Object(n["a"])(s),[i]))
return s.filter((function(e){return"function"===typeof t?t(e)&&f(e):f(e)}))}function s(e){var t=Object(i["a"])(e)
return"inline"!==t.display&&e.offsetWidth<=0&&e.offsetHeight<=0||"none"===t.display}function u(e){var t=["fixed","absolute"]
if(t.includes(e.style.position.toLowerCase()))return true
if(t.includes(Object(i["a"])(e).getPropertyValue("position").toLowerCase()))return true
return false}function l(e){while(e){if(e===document.body)break
if(s(e))return false
if(u(e))break
e=e.parentNode}return true}function f(e){return!e.disabled&&l(e)}},pgSO:function(e,t,r){"use strict"
r.d(t,"a",(function(){return n}))
function n(e){try{return(e||document).activeElement}catch(e){}}},whu9:function(e,t,r){"use strict"
r.d(t,"a",(function(){return d}))
var n=r("VTBJ")
var a=r("1OyB")
var o=r("vuIU")
var i=r("Ji7U")
var c=r("LK+K")
var s=r("q1tI")
var u=r.n(s)
var l=r("hPGw")
var f=u.a.createElement("path",{d:"M1838.86029,1451.57632 L1920,1532.94589 L1558.4341,1894.51179 L361.565904,1894.51179 L0,1532.94589 L81.2546391,1451.57632 L409.146414,1779.58302 L1510.85359,1779.58302 L1838.86029,1451.57632 Z M962.333054,25 L1462.61798,525.284928 L1381.47827,606.654495 L1019.68251,244.973662 L1019.68251,1432.53262 L904.86867,1432.53262 L904.86867,244.973662 L543.187837,606.654495 L462.048126,525.284928 L962.333054,25 Z",fillRule:"evenodd",stroke:"none",strokeWidth:"1"})
var d=function(e){Object(i["a"])(r,e)
var t=Object(c["a"])(r)
function r(){Object(a["a"])(this,r)
return t.apply(this,arguments)}Object(o["a"])(r,[{key:"render",value:function(){return u.a.createElement(l["a"],Object.assign({},this.props,{name:"IconUpload",viewBox:"0 0 1920 1920"}),f)}}])
r.displayName="IconUploadLine"
return r}(s["Component"])
d.glyphName="upload"
d.variant="Line"
d.propTypes=Object(n["a"])({},l["a"].propTypes)},wnpw:function(e,t,r){"use strict"
r.d(t,"a",(function(){return z}))
var n=r("rePB")
var a=r("VTBJ")
var o=r("Ff2n")
var i=r("1OyB")
var c=r("vuIU")
var s=r("Ji7U")
var u=r("LK+K")
var l=r("q1tI")
var f=r.n(l)
var d=r("17x9")
var p=r.n(d)
var v=r("TSYQ")
var h=r.n(v)
var m=r("J2CL")
var b=r("BTe1")
var g=r("jtGx")
var y=r("oXx0")
function O(e){var t=e.colors
return{primaryInverseColor:t.textLightest,primaryColor:t.textDarkest,secondaryColor:t.textDark,secondaryInverseColor:t.textLight,warningColor:t.textWarning,brandColor:t.textBrand,errorColor:t.textDanger,alertColor:t.textAlert,successColor:t.textSuccess}}O.canvas=function(e){return{primaryColor:e["ic-brand-font-color-dark"],brandColor:e["ic-brand-primary"]}}
var w,j,C,L,_
var T={componentId:"dUOHu",template:function(e){return"\n\n.dUOHu_bGBk{fill:currentColor;overflow:visible}\n\n.dUOHu_eXrk{display:inline-block}\n\n.dUOHu_cRbP{display:block}\n\n.dUOHu_drOs{color:inherit}\n\n.dUOHu_eCSh{color:".concat(e.primaryColor||"inherit","}\n\n.dUOHu_buuG{color:").concat(e.secondaryColor||"inherit","}\n\n.dUOHu_bFtJ{color:").concat(e.primaryInverseColor||"inherit","}\n\n.dUOHu_dsSB{color:").concat(e.secondaryInverseColor||"inherit","}\n\n.dUOHu_eZal{color:").concat(e.successColor||"inherit","}\n\n.dUOHu_cVUo{color:").concat(e.brandColor||"inherit","}\n\n.dUOHu_eScd{color:").concat(e.warningColor||"inherit","}\n\n.dUOHu_cpQl{color:").concat(e.errorColor||"inherit","}\n\n.dUOHu_cUGG{color:").concat(e.alertColor||"inherit","}")},root:"dUOHu_bGBk",inline:"dUOHu_eXrk",block:"dUOHu_cRbP","color--inherit":"dUOHu_drOs","color--primary":"dUOHu_eCSh","color--secondary":"dUOHu_buuG","color--primary-inverse":"dUOHu_bFtJ","color--secondary-inverse":"dUOHu_dsSB","color--success":"dUOHu_eZal","color--brand":"dUOHu_cVUo","color--warning":"dUOHu_eScd","color--error":"dUOHu_cpQl","color--alert":"dUOHu_cUGG"}
var z=(w=Object(y["a"])(),j=Object(m["j"])(O,T),w(C=j(C=(_=L=function(e){Object(s["a"])(r,e)
var t=Object(u["a"])(r)
function r(){var e
Object(i["a"])(this,r)
e=t.call(this)
e.titleId=Object(b["a"])("InlineSVG-title")
e.descId=Object(b["a"])("InlineSVG-desc")
return e}Object(c["a"])(r,[{key:"renderTitle",value:function(){var e=this.props.title
return e?f.a.createElement("title",{id:this.titleId},e):null}},{key:"renderDesc",value:function(e){return e?f.a.createElement("desc",{id:this.descId},e):null}},{key:"renderContent",value:function(){if(this.props.src){var e=r.prepareSrc(this.props.src)
return f.a.createElement("g",{role:"presentation",dangerouslySetInnerHTML:{__html:e}})}return f.a.createElement("g",{role:"presentation"},this.props.children)}},{key:"render",value:function(){var e
var t=this.props,i=t.style,c=t.title,s=t.description,u=t.focusable,l=(t.children,t.src,t.color),d=Object(o["a"])(t,["style","title","description","focusable","children","src","color"])
var p="auto"===this.props.width?null:this.props.width
var v="auto"===this.props.height?null:this.props.height
return f.a.createElement("svg",Object.assign({},S(this.props.src),Object(g["a"])(this.props,r.propTypes,["inline"]),{style:Object(a["a"])({},i,{width:p,height:v}),width:p,height:v,"aria-hidden":c?null:"true","aria-labelledby":this.labelledBy,role:this.role,focusable:u?"true":"false",className:h()((e={},Object(n["a"])(e,T.root,true),Object(n["a"])(e,T["color--".concat(l)],"auto"!==l),Object(n["a"])(e,T.inline,this.props.inline),Object(n["a"])(e,T.block,!this.props.inline),Object(n["a"])(e,d.className,d.className),e))}),this.renderTitle(),this.renderDesc(s),this.renderContent())}},{key:"role",get:function(){return this.props.title?"img":"presentation"}},{key:"labelledBy",get:function(){var e=[]
this.props.title&&e.push(this.titleId)
this.props.description&&e.push(this.descId)
return e.length>0?e.join(" "):null}}])
r.displayName="InlineSVG"
return r}(l["Component"]),L.propTypes={children:p.a.node,src:p.a.string,title:p.a.string,description:p.a.string,focusable:p.a.bool,width:p.a.oneOfType([p.a.string,p.a.number]),height:p.a.oneOfType([p.a.string,p.a.number]),inline:p.a.bool,color:p.a.oneOf(["inherit","primary","secondary","primary-inverse","secondary-inverse","success","error","alert","warning","brand","auto"])},L.defaultProps={focusable:false,src:"",title:"",description:"",inline:true,children:null,width:"1em",height:"1em",color:"inherit"},L.prepareSrc=function(e){var t=/<svg[^>]*>((.|[\n\r])*)<\/svg>/
var r=t.exec(e)
return r?r[1]:e},_))||C)||C)
function S(e){var t={}
var r=/<svg\s+([^>]*)\s*>/
var n=/(\S+)=["']?((?:.(?!["']?\s+(?:\S+)=|[>"']))+.)["']?/g
if("string"===typeof e){var a=r.exec(e)
var o=a?a[1]:""
var i=["xmlns","xmlns:xlink","version"]
var c=n.exec(o)
while(null!=c){-1===i.indexOf(c[1])&&(t[c[1]]=c[2]||(c[3]?c[3]:c[4]?c[4]:c[5])||c[1])
c=n.exec(o)}}return t}}}])

//# sourceMappingURL=progress_pill-c-25937e2259.js.map