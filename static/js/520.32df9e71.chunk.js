"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[520],{8520:function(e,n,a){a.r(n),a.d(n,{default:function(){return q}});var r=a(9439),i=a(2791),t="ContactForm_form__dhl+T",l="ContactForm_label__-cVXI",s="ContactForm_input__Bl93P",o=a(4420),d=a(3553),u=function(e){return e.contacts},c=(0,d.P1)([u,function(e){return e.filter}],(function(e,n){var a=e.items.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return a.sort((function(e,n){var a=e.name.toLowerCase(),r=n.name.toLowerCase();return a<r?-1:a>r?1:0}))})),m=a(3634),v=a(9055),h=a(3329),f=function(){var e=(0,o.v9)(u).items,n=(0,o.I0)(),a=(0,i.useState)(""),d=(0,r.Z)(a,2),c=d[0],f=d[1],p=(0,i.useState)(""),b=(0,r.Z)(p,2),x=b[0],g=b[1],Z=function(e){var n=e.target,a=n.name,r=n.value;switch(a){case"name":return void f(r);case"number":return void g(r);default:return}};return(0,h.jsxs)("form",{onSubmit:function(a){a.preventDefault();if(e&&e.find((function(e){return e.name===c})))alert(c+" is already in contacts.");else{var r={name:c,number:x};n((0,m.uK)(r)),f(""),g("")}},className:t,children:[(0,h.jsxs)("label",{className:l,children:["Name",(0,h.jsx)("input",{className:s,onChange:Z,type:"text",name:"name",value:c,placeholder:"Noob Saibot",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f\u0454\u0456\u0457\u0404\u0406\u0407]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f\u0454\u0456\u0457\u0404\u0406\u0407 ])?[a-zA-Z\u0430-\u044f\u0410-\u042f\u0454\u0456\u0457\u0404\u0406\u0407]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,h.jsxs)("label",{className:l,children:["Number",(0,h.jsx)("input",{className:s,onChange:Z,type:"tel",name:"number",value:x,placeholder:"099-123-45-67 - 0991234567",pattern:"\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,h.jsx)(v.z,{type:"submit",variant:"changeBg",children:"Add contact"})]})},p="ContactList_list__csErn",b="ContactList_item__EZYHO",x=a(854),g=function(){var e=(0,o.I0)(),n=(0,o.v9)(c),a=(0,o.v9)(u),r=a.items,i=a.isLoading,t=a.error;return i&&!t?(0,h.jsx)(x.Z,{padding:5,size:"md"}):(0,h.jsx)("ul",{className:p,children:r&&n.map((function(n){var a=n.id,r=n.name,i=n.number;return(0,h.jsxs)("li",{className:b,children:[(0,h.jsxs)("p",{children:[r,": ",i]}),(0,h.jsx)("button",{type:"button",onClick:function(){e((0,m.GK)(a))},children:"Delete"})]},a)}))})},Z=a(4808),y=a(6582),_=a(7438),I=a(7236),j=function(){var e=(0,o.I0)();return(0,h.jsxs)(y.k,{direction:"column",align:"center",py:4,children:[(0,h.jsx)(_.l,{htmlFor:"filter",marginInlineEnd:"unset",children:"Find contacts by name:"}),(0,h.jsx)(I.I,{id:"filter",type:"text",name:"filter",onChange:function(n){var a=n.target.value;e((0,Z.W)(a))},bg:"white",width:"min",p:2,border:"1px solid #ccc",mb:"10px"})]})},N=a(9589),C=function(e){var n=e.title,a=e.textAlign,r=e.mb;return(0,h.jsx)(N.X,{as:"h2",textAlign:a,mb:r,children:n})},F=a(824),k=a(8410),q=function(){var e=(0,o.I0)(),n=(0,o.v9)(u),a=n.items,r=n.isLoading,t=0!==a.length;return(0,i.useEffect)((function(){e((0,m.yF)())}),[e]),(0,h.jsx)(F.xu,{as:"section",py:6,children:(0,h.jsxs)(k.W,{maxW:"lg",children:[(0,h.jsx)(C,{title:"Phonebook",mb:"10px",textAlign:"center"}),(0,h.jsx)(f,{}),r&&!t&&(0,h.jsx)(x.Z,{}),t&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(C,{title:"Contacts",textAlign:"center"}),(0,h.jsx)(j,{}),(0,h.jsx)(g,{})]})]})})}},5350:function(e,n,a){a.d(n,{NI:function(){return N},NJ:function(){return j},e:function(){return Z}});var r=a(1413),i=a(4925),t=a(9439),l=a(9886),s=a(4591),o=a(5597),d=a(2481),u=a(2996),c=a(5113),m=a(6992),v=a(2791),h=a(3329),f=["id","isRequired","isInvalid","isDisabled","isReadOnly"],p=["getRootProps","htmlProps"],b=(0,l.k)({name:"FormControlStylesContext",errorMessage:"useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormControl />\" "}),x=(0,t.Z)(b,2),g=x[0],Z=x[1],y=(0,l.k)({strict:!1,name:"FormControlContext"}),_=(0,t.Z)(y,2),I=_[0],j=_[1];var N=(0,o.G)((function(e,n){var a=(0,d.jC)("Form",e),l=function(e){var n=e.id,a=e.isRequired,l=e.isInvalid,o=e.isDisabled,d=e.isReadOnly,u=(0,i.Z)(e,f),c=(0,v.useId)(),h=n||"field-".concat(c),p="".concat(h,"-label"),b="".concat(h,"-feedback"),x="".concat(h,"-helptext"),g=(0,v.useState)(!1),Z=(0,t.Z)(g,2),y=Z[0],_=Z[1],I=(0,v.useState)(!1),j=(0,t.Z)(I,2),N=j[0],C=j[1],F=(0,v.useState)(!1),k=(0,t.Z)(F,2),q=k[0],R=k[1],P=(0,v.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,r.Z)((0,r.Z)({id:x},e),{},{ref:(0,s.lq)(n,(function(e){e&&C(!0)}))})}),[x]),B=(0,v.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,r.Z)((0,r.Z)({},e),{},{ref:n,"data-focus":(0,m.PB)(q),"data-disabled":(0,m.PB)(o),"data-invalid":(0,m.PB)(l),"data-readonly":(0,m.PB)(d),id:void 0!==e.id?e.id:p,htmlFor:void 0!==e.htmlFor?e.htmlFor:h})}),[h,o,q,l,d,p]),L=(0,v.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,r.Z)((0,r.Z)({id:b},e),{},{ref:(0,s.lq)(n,(function(e){e&&_(!0)})),"aria-live":"polite"})}),[b]),w=(0,v.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,r.Z)((0,r.Z)((0,r.Z)({},e),u),{},{ref:n,role:"group","data-focus":(0,m.PB)(q),"data-disabled":(0,m.PB)(o),"data-invalid":(0,m.PB)(l),"data-readonly":(0,m.PB)(d)})}),[u,o,q,l,d]),O=(0,v.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,r.Z)((0,r.Z)({},e),{},{ref:n,role:"presentation","aria-hidden":!0,children:e.children||"*"})}),[]);return{isRequired:!!a,isInvalid:!!l,isReadOnly:!!d,isDisabled:!!o,isFocused:!!q,onFocus:function(){return R(!0)},onBlur:function(){return R(!1)},hasFeedbackText:y,setHasFeedbackText:_,hasHelpText:N,setHasHelpText:C,id:h,labelId:p,feedbackId:b,helpTextId:x,htmlProps:u,getHelpTextProps:P,getErrorMessageProps:L,getRootProps:w,getLabelProps:B,getRequiredIndicatorProps:O}}((0,u.Lr)(e)),o=l.getRootProps,b=(l.htmlProps,(0,i.Z)(l,p)),x=(0,m.cx)("chakra-form-control",e.className);return(0,h.jsx)(I,{value:b,children:(0,h.jsx)(g,{value:a,children:(0,h.jsx)(c.m.div,(0,r.Z)((0,r.Z)({},o({},n)),{},{className:x,__css:a.container}))})})}));N.displayName="FormControl",(0,o.G)((function(e,n){var a=j(),i=Z(),t=(0,m.cx)("chakra-form__helper-text",e.className);return(0,h.jsx)(c.m.div,(0,r.Z)((0,r.Z)({},null==a?void 0:a.getHelpTextProps(e,n)),{},{__css:i.helperText,className:t}))})).displayName="FormHelperText"},7438:function(e,n,a){a.d(n,{l:function(){return v}});var r=a(1413),i=a(4925),t=a(5350),l=a(5597),s=a(2481),o=a(2996),d=a(5113),u=a(6992),c=a(3329),m=["className","children","requiredIndicator","optionalIndicator"],v=(0,l.G)((function(e,n){var a,l=(0,s.mq)("FormLabel",e),v=(0,o.Lr)(e),f=(v.className,v.children),p=v.requiredIndicator,b=void 0===p?(0,c.jsx)(h,{}):p,x=v.optionalIndicator,g=void 0===x?null:x,Z=(0,i.Z)(v,m),y=(0,t.NJ)(),_=null!=(a=null==y?void 0:y.getLabelProps(Z,n))?a:(0,r.Z)({ref:n},Z);return(0,c.jsxs)(d.m.label,(0,r.Z)((0,r.Z)({},_),{},{className:(0,u.cx)("chakra-form__label",v.className),__css:(0,r.Z)({display:"block",textAlign:"start"},l),children:[f,(null==y?void 0:y.isRequired)?b:g]}))}));v.displayName="FormLabel";var h=(0,l.G)((function(e,n){var a=(0,t.NJ)(),i=(0,t.e)();if(!(null==a?void 0:a.isRequired))return null;var l=(0,u.cx)("chakra-form__required-indicator",e.className);return(0,c.jsx)(d.m.span,(0,r.Z)((0,r.Z)({},null==a?void 0:a.getRequiredIndicatorProps(e,n)),{},{__css:i.requiredIndicator,className:l}))}));h.displayName="RequiredIndicator"},7236:function(e,n,a){a.d(n,{I:function(){return p}});var r=a(1413),i=a(4925),t=a(5350),l=a(6992),s=["isDisabled","isInvalid","isReadOnly","isRequired"],o=["id","disabled","readOnly","required","isRequired","isInvalid","isReadOnly","isDisabled","onFocus","onBlur"];function d(e){var n=function(e){var n,a,s,d=(0,t.NJ)(),u=e.id,c=e.disabled,m=e.readOnly,v=e.required,h=e.isRequired,f=e.isInvalid,p=e.isReadOnly,b=e.isDisabled,x=e.onFocus,g=e.onBlur,Z=(0,i.Z)(e,o),y=e["aria-describedby"]?[e["aria-describedby"]]:[];(null==d?void 0:d.hasFeedbackText)&&(null==d?void 0:d.isInvalid)&&y.push(d.feedbackId);(null==d?void 0:d.hasHelpText)&&y.push(d.helpTextId);return(0,r.Z)((0,r.Z)({},Z),{},{"aria-describedby":y.join(" ")||void 0,id:null!=u?u:null==d?void 0:d.id,isDisabled:null!=(n=null!=c?c:b)?n:null==d?void 0:d.isDisabled,isReadOnly:null!=(a=null!=m?m:p)?a:null==d?void 0:d.isReadOnly,isRequired:null!=(s=null!=v?v:h)?s:null==d?void 0:d.isRequired,isInvalid:null!=f?f:null==d?void 0:d.isInvalid,onFocus:(0,l.v0)(null==d?void 0:d.onFocus,x),onBlur:(0,l.v0)(null==d?void 0:d.onBlur,g)})}(e),a=n.isDisabled,d=n.isInvalid,u=n.isReadOnly,c=n.isRequired,m=(0,i.Z)(n,s);return(0,r.Z)((0,r.Z)({},m),{},{disabled:a,readOnly:u,required:c,"aria-invalid":(0,l.Qm)(d),"aria-required":(0,l.Qm)(c),"aria-readonly":(0,l.Qm)(u)})}var u=a(5597),c=a(2481),m=a(2996),v=a(5113),h=a(3329),f=["htmlSize"],p=(0,u.G)((function(e,n){var a=e.htmlSize,t=(0,i.Z)(e,f),s=(0,c.jC)("Input",t),o=d((0,m.Lr)(t)),u=(0,l.cx)("chakra-input",e.className);return(0,h.jsx)(v.m.input,(0,r.Z)((0,r.Z)({size:a},o),{},{__css:s.field,ref:n,className:u}))}));p.displayName="Input",p.id="Input"}}]);
//# sourceMappingURL=520.32df9e71.chunk.js.map