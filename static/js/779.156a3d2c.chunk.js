"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[779],{1779:function(e,r,n){n.r(r),n.d(r,{default:function(){return b}});var a=n(824),t=n(8410),o=n(6582),s=n(9589),i=n(884),l=n(1413),d=n(5861),u=n(9439),c=n(4687),p=n.n(c),h=n(2791),v=n(7236),x=n(8),f=function(){var e=(0,d.Z)(p().mark((function e(r){var n,a;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.Z.get("https://api.openweathermap.org/data/2.5/weather",{params:{q:r,units:"metric",appid:"146061445a709c30327964b7c29aa7d4"}});case 3:return n=e.sent,a=n.data,e.abrupt("return",a);case 8:throw e.prev=8,e.t0=e.catch(0),e.t0.response?(console.error("Error response data:",e.t0.response.data),console.error("Error response status:",e.t0.response.status),console.error("Error response headers:",e.t0.response.headers)):e.t0.request?console.error("Error request data:",e.t0.request):console.error("Error message:",e.t0.message),console.error("Error config:",e.t0.config),e.t0;case 13:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(r){return e.apply(this,arguments)}}(),y=n(3329);var m=function(){var e=(0,h.useState)(""),r=(0,u.Z)(e,2),n=r[0],t=r[1],c=(0,h.useState)({data:{},error:!1}),x=(0,u.Z)(c,2),m=x[0],b=x[1],g=function(){var e=(0,d.Z)(p().mark((function e(r){var a;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"Enter"===r.key&&(r.preventDefault(),t(""),b((0,l.Z)({},m)),a=function(){var e=(0,d.Z)(p().mark((function e(){var r;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f(n);case 3:r=e.sent,b({data:r,error:!1}),e.next=12;break;case 7:e.prev=7,e.t0=e.catch(0),b((0,l.Z)((0,l.Z)({},m),{},{data:{},error:!0})),t(""),console.log(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),a());case 1:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}();return(0,y.jsxs)(o.k,{direction:"column",gap:"20px",children:[(0,y.jsxs)(s.X,{as:"h2",children:["Weather ",(0,y.jsx)("span",{children:" \ud83c\udf24 "})]}),(0,y.jsx)(a.xu,{children:(0,y.jsx)(v.I,{border:" 2px solid #ccc",borderRadius:"20px",bg:"white",padding:"12px 20px 12px 20px",maxW:300,autoFocus:!0,type:"text",fontSize:"16px",placeholder:"Search City..",name:"query",value:n,onChange:function(e){return t(e.target.value)},onKeyDown:g})}),m.error&&(0,y.jsx)("span",{children:(0,y.jsx)("span",{style:{fontSize:"26px"},children:" Sorry, City not found"})}),m&&m.data&&m.data.main&&(0,y.jsxs)("div",{children:[(0,y.jsxs)("h2",{children:[m.data.name,", ",(0,y.jsx)("span",{children:m.data.sys.country})]}),(0,y.jsx)(a.xu,{children:(0,y.jsx)("span",{children:function(){var e=new Date;return"".concat(["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()],", ").concat(e.getDate()," ").concat(["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()])}()})}),(0,y.jsxs)(a.xu,{children:[(0,y.jsx)("img",{src:"https://openweathermap.org/img/wn/".concat(m.data.weather[0].icon,"@2x.png"),alt:m.data.weather[0].description}),(0,y.jsxs)("p",{children:[Math.round(m.data.main.temp),(0,y.jsx)("span",{children:" \xb0C "})]})]}),(0,y.jsxs)(a.xu,{children:[(0,y.jsx)(i.x,{children:m.data.weather[0].description.toUpperCase()}),(0,y.jsxs)(i.x,{children:["Wind Speed: ",m.data.wind.speed,"m/s"]})]})]})]})},b=function(){return(0,y.jsx)(a.xu,{as:"section",py:20,children:(0,y.jsx)(t.W,{maxW:"800px",children:(0,y.jsxs)(o.k,{gap:"20px",justify:"space-between",children:[(0,y.jsxs)(a.xu,{maxW:400,children:[(0,y.jsx)(s.X,{as:"h1",size:["md","lg"],textAlign:"center",mb:5,children:"Welcome to your new digital address book!"}),(0,y.jsxs)(i.x,{textAlign:"center",children:["We've created for you a special place to keep all your phone numbers \u2014 whether they belong to people you love or those you'd rather forget, but haven't managed to yet. \ud83d\ude0a",(0,y.jsx)("br",{}),"Why burden your brain with remembering all those numbers when you can keep them safe here? And if, heaven forbid, you lose your phone, at least your contacts will still be safe. If our server decides to take a break and you lose all your contacts... consider it an opportunity to make new friends! Because, honestly, those old friends who haven't reached out until now probably won't start anytime soon. \ud83d\ude09",(0,y.jsx)("br",{}),"Create your own account and keep your connections alive, even with those people you haven't talked to in years. Who knows, maybe they'll give you a call to thank you for keeping their number.",(0,y.jsx)("br",{}),(0,y.jsx)("strong",{children:"Good luck, and happy reconnecting!"})]})]}),(0,y.jsx)(a.xu,{maxW:500,children:(0,y.jsx)(m,{})})]})})})}},5350:function(e,r,n){n.d(r,{NI:function(){return I},NJ:function(){return w},e:function(){return g}});var a=n(1413),t=n(4925),o=n(9439),s=n(9886),i=n(4591),l=n(5597),d=n(2481),u=n(2996),c=n(5113),p=n(6992),h=n(2791),v=n(3329),x=["id","isRequired","isInvalid","isDisabled","isReadOnly"],f=["getRootProps","htmlProps"],y=(0,s.k)({name:"FormControlStylesContext",errorMessage:"useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormControl />\" "}),m=(0,o.Z)(y,2),b=m[0],g=m[1],k=(0,s.k)({strict:!1,name:"FormControlContext"}),j=(0,o.Z)(k,2),Z=j[0],w=j[1];var I=(0,l.G)((function(e,r){var n=(0,d.jC)("Form",e),s=function(e){var r=e.id,n=e.isRequired,s=e.isInvalid,l=e.isDisabled,d=e.isReadOnly,u=(0,t.Z)(e,x),c=(0,h.useId)(),v=r||"field-".concat(c),f="".concat(v,"-label"),y="".concat(v,"-feedback"),m="".concat(v,"-helptext"),b=(0,h.useState)(!1),g=(0,o.Z)(b,2),k=g[0],j=g[1],Z=(0,h.useState)(!1),w=(0,o.Z)(Z,2),I=w[0],R=w[1],C=(0,h.useState)(!1),F=(0,o.Z)(C,2),q=F[0],P=F[1],S=(0,h.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,a.Z)((0,a.Z)({id:m},e),{},{ref:(0,i.lq)(r,(function(e){e&&R(!0)}))})}),[m]),_=(0,h.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,a.Z)((0,a.Z)({},e),{},{ref:r,"data-focus":(0,p.PB)(q),"data-disabled":(0,p.PB)(l),"data-invalid":(0,p.PB)(s),"data-readonly":(0,p.PB)(d),id:void 0!==e.id?e.id:f,htmlFor:void 0!==e.htmlFor?e.htmlFor:v})}),[v,l,q,s,d,f]),D=(0,h.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,a.Z)((0,a.Z)({id:y},e),{},{ref:(0,i.lq)(r,(function(e){e&&j(!0)})),"aria-live":"polite"})}),[y]),B=(0,h.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,a.Z)((0,a.Z)((0,a.Z)({},e),u),{},{ref:r,role:"group","data-focus":(0,p.PB)(q),"data-disabled":(0,p.PB)(l),"data-invalid":(0,p.PB)(s),"data-readonly":(0,p.PB)(d)})}),[u,l,q,s,d]),T=(0,h.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,a.Z)((0,a.Z)({},e),{},{ref:r,role:"presentation","aria-hidden":!0,children:e.children||"*"})}),[]);return{isRequired:!!n,isInvalid:!!s,isReadOnly:!!d,isDisabled:!!l,isFocused:!!q,onFocus:function(){return P(!0)},onBlur:function(){return P(!1)},hasFeedbackText:k,setHasFeedbackText:j,hasHelpText:I,setHasHelpText:R,id:v,labelId:f,feedbackId:y,helpTextId:m,htmlProps:u,getHelpTextProps:S,getErrorMessageProps:D,getRootProps:B,getLabelProps:_,getRequiredIndicatorProps:T}}((0,u.Lr)(e)),l=s.getRootProps,y=(s.htmlProps,(0,t.Z)(s,f)),m=(0,p.cx)("chakra-form-control",e.className);return(0,v.jsx)(Z,{value:y,children:(0,v.jsx)(b,{value:n,children:(0,v.jsx)(c.m.div,(0,a.Z)((0,a.Z)({},l({},r)),{},{className:m,__css:n.container}))})})}));I.displayName="FormControl",(0,l.G)((function(e,r){var n=w(),t=g(),o=(0,p.cx)("chakra-form__helper-text",e.className);return(0,v.jsx)(c.m.div,(0,a.Z)((0,a.Z)({},null==n?void 0:n.getHelpTextProps(e,r)),{},{__css:t.helperText,className:o}))})).displayName="FormHelperText"},7236:function(e,r,n){n.d(r,{I:function(){return f}});var a=n(1413),t=n(4925),o=n(5350),s=n(6992),i=["isDisabled","isInvalid","isReadOnly","isRequired"],l=["id","disabled","readOnly","required","isRequired","isInvalid","isReadOnly","isDisabled","onFocus","onBlur"];function d(e){var r=function(e){var r,n,i,d=(0,o.NJ)(),u=e.id,c=e.disabled,p=e.readOnly,h=e.required,v=e.isRequired,x=e.isInvalid,f=e.isReadOnly,y=e.isDisabled,m=e.onFocus,b=e.onBlur,g=(0,t.Z)(e,l),k=e["aria-describedby"]?[e["aria-describedby"]]:[];(null==d?void 0:d.hasFeedbackText)&&(null==d?void 0:d.isInvalid)&&k.push(d.feedbackId);(null==d?void 0:d.hasHelpText)&&k.push(d.helpTextId);return(0,a.Z)((0,a.Z)({},g),{},{"aria-describedby":k.join(" ")||void 0,id:null!=u?u:null==d?void 0:d.id,isDisabled:null!=(r=null!=c?c:y)?r:null==d?void 0:d.isDisabled,isReadOnly:null!=(n=null!=p?p:f)?n:null==d?void 0:d.isReadOnly,isRequired:null!=(i=null!=h?h:v)?i:null==d?void 0:d.isRequired,isInvalid:null!=x?x:null==d?void 0:d.isInvalid,onFocus:(0,s.v0)(null==d?void 0:d.onFocus,m),onBlur:(0,s.v0)(null==d?void 0:d.onBlur,b)})}(e),n=r.isDisabled,d=r.isInvalid,u=r.isReadOnly,c=r.isRequired,p=(0,t.Z)(r,i);return(0,a.Z)((0,a.Z)({},p),{},{disabled:n,readOnly:u,required:c,"aria-invalid":(0,s.Qm)(d),"aria-required":(0,s.Qm)(c),"aria-readonly":(0,s.Qm)(u)})}var u=n(5597),c=n(2481),p=n(2996),h=n(5113),v=n(3329),x=["htmlSize"],f=(0,u.G)((function(e,r){var n=e.htmlSize,o=(0,t.Z)(e,x),i=(0,c.jC)("Input",o),l=d((0,p.Lr)(o)),u=(0,s.cx)("chakra-input",e.className);return(0,v.jsx)(h.m.input,(0,a.Z)((0,a.Z)({size:n},l),{},{__css:i.field,ref:r,className:u}))}));f.displayName="Input",f.id="Input"}}]);
//# sourceMappingURL=779.156a3d2c.chunk.js.map