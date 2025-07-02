(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function tT(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var hy={exports:{}},mu={},fy={exports:{}},se={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qo=Symbol.for("react.element"),nT=Symbol.for("react.portal"),rT=Symbol.for("react.fragment"),iT=Symbol.for("react.strict_mode"),sT=Symbol.for("react.profiler"),oT=Symbol.for("react.provider"),aT=Symbol.for("react.context"),lT=Symbol.for("react.forward_ref"),uT=Symbol.for("react.suspense"),cT=Symbol.for("react.memo"),dT=Symbol.for("react.lazy"),pm=Symbol.iterator;function hT(t){return t===null||typeof t!="object"?null:(t=pm&&t[pm]||t["@@iterator"],typeof t=="function"?t:null)}var py={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},my=Object.assign,gy={};function fs(t,e,n){this.props=t,this.context=e,this.refs=gy,this.updater=n||py}fs.prototype.isReactComponent={};fs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};fs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function yy(){}yy.prototype=fs.prototype;function kh(t,e,n){this.props=t,this.context=e,this.refs=gy,this.updater=n||py}var Sh=kh.prototype=new yy;Sh.constructor=kh;my(Sh,fs.prototype);Sh.isPureReactComponent=!0;var mm=Array.isArray,vy=Object.prototype.hasOwnProperty,Ah={current:null},_y={key:!0,ref:!0,__self:!0,__source:!0};function wy(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)vy.call(e,r)&&!_y.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),d=0;d<l;d++)u[d]=arguments[d+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Qo,type:t,key:s,ref:o,props:i,_owner:Ah.current}}function fT(t,e){return{$$typeof:Qo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Ch(t){return typeof t=="object"&&t!==null&&t.$$typeof===Qo}function pT(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var gm=/\/+/g;function vc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?pT(""+t.key):e.toString(36)}function Za(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Qo:case nT:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+vc(o,0):r,mm(i)?(n="",t!=null&&(n=t.replace(gm,"$&/")+"/"),Za(i,e,n,"",function(d){return d})):i!=null&&(Ch(i)&&(i=fT(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(gm,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",mm(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+vc(s,l);o+=Za(s,e,n,u,i)}else if(u=hT(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+vc(s,l++),o+=Za(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ca(t,e,n){if(t==null)return t;var r=[],i=0;return Za(t,r,"","",function(s){return e.call(n,s,i++)}),r}function mT(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var mt={current:null},el={transition:null},gT={ReactCurrentDispatcher:mt,ReactCurrentBatchConfig:el,ReactCurrentOwner:Ah};function Ey(){throw Error("act(...) is not supported in production builds of React.")}se.Children={map:Ca,forEach:function(t,e,n){Ca(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ca(t,function(){e++}),e},toArray:function(t){return Ca(t,function(e){return e})||[]},only:function(t){if(!Ch(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};se.Component=fs;se.Fragment=rT;se.Profiler=sT;se.PureComponent=kh;se.StrictMode=iT;se.Suspense=uT;se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gT;se.act=Ey;se.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=my({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Ah.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)vy.call(e,u)&&!_y.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var d=0;d<u;d++)l[d]=arguments[d+2];r.children=l}return{$$typeof:Qo,type:t.type,key:i,ref:s,props:r,_owner:o}};se.createContext=function(t){return t={$$typeof:aT,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:oT,_context:t},t.Consumer=t};se.createElement=wy;se.createFactory=function(t){var e=wy.bind(null,t);return e.type=t,e};se.createRef=function(){return{current:null}};se.forwardRef=function(t){return{$$typeof:lT,render:t}};se.isValidElement=Ch;se.lazy=function(t){return{$$typeof:dT,_payload:{_status:-1,_result:t},_init:mT}};se.memo=function(t,e){return{$$typeof:cT,type:t,compare:e===void 0?null:e}};se.startTransition=function(t){var e=el.transition;el.transition={};try{t()}finally{el.transition=e}};se.unstable_act=Ey;se.useCallback=function(t,e){return mt.current.useCallback(t,e)};se.useContext=function(t){return mt.current.useContext(t)};se.useDebugValue=function(){};se.useDeferredValue=function(t){return mt.current.useDeferredValue(t)};se.useEffect=function(t,e){return mt.current.useEffect(t,e)};se.useId=function(){return mt.current.useId()};se.useImperativeHandle=function(t,e,n){return mt.current.useImperativeHandle(t,e,n)};se.useInsertionEffect=function(t,e){return mt.current.useInsertionEffect(t,e)};se.useLayoutEffect=function(t,e){return mt.current.useLayoutEffect(t,e)};se.useMemo=function(t,e){return mt.current.useMemo(t,e)};se.useReducer=function(t,e,n){return mt.current.useReducer(t,e,n)};se.useRef=function(t){return mt.current.useRef(t)};se.useState=function(t){return mt.current.useState(t)};se.useSyncExternalStore=function(t,e,n){return mt.current.useSyncExternalStore(t,e,n)};se.useTransition=function(){return mt.current.useTransition()};se.version="18.3.1";fy.exports=se;var re=fy.exports;const yT=tT(re);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vT=re,_T=Symbol.for("react.element"),wT=Symbol.for("react.fragment"),ET=Object.prototype.hasOwnProperty,TT=vT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,IT={key:!0,ref:!0,__self:!0,__source:!0};function Ty(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)ET.call(e,r)&&!IT.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:_T,type:t,key:s,ref:o,props:i,_owner:TT.current}}mu.Fragment=wT;mu.jsx=Ty;mu.jsxs=Ty;hy.exports=mu;var h=hy.exports,sd={},Iy={exports:{}},Lt={},xy={exports:{}},ky={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e($,J){var Z=$.length;$.push(J);e:for(;0<Z;){var Q=Z-1>>>1,ne=$[Q];if(0<i(ne,J))$[Q]=J,$[Z]=ne,Z=Q;else break e}}function n($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var J=$[0],Z=$.pop();if(Z!==J){$[0]=Z;e:for(var Q=0,ne=$.length,Te=ne>>>1;Q<Te;){var ut=2*(Q+1)-1,Mt=$[ut],Ft=ut+1,Ut=$[Ft];if(0>i(Mt,Z))Ft<ne&&0>i(Ut,Mt)?($[Q]=Ut,$[Ft]=Z,Q=Ft):($[Q]=Mt,$[ut]=Z,Q=ut);else if(Ft<ne&&0>i(Ut,Z))$[Q]=Ut,$[Ft]=Z,Q=Ft;else break e}}return J}function i($,J){var Z=$.sortIndex-J.sortIndex;return Z!==0?Z:$.id-J.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],d=[],p=1,m=null,y=3,S=!1,R=!1,N=!1,O=typeof setTimeout=="function"?setTimeout:null,k=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x($){for(var J=n(d);J!==null;){if(J.callback===null)r(d);else if(J.startTime<=$)r(d),J.sortIndex=J.expirationTime,e(u,J);else break;J=n(d)}}function V($){if(N=!1,x($),!R)if(n(u)!==null)R=!0,hn(U);else{var J=n(d);J!==null&&yt(V,J.startTime-$)}}function U($,J){R=!1,N&&(N=!1,k(v),v=-1),S=!0;var Z=y;try{for(x(J),m=n(u);m!==null&&(!(m.expirationTime>J)||$&&!A());){var Q=m.callback;if(typeof Q=="function"){m.callback=null,y=m.priorityLevel;var ne=Q(m.expirationTime<=J);J=t.unstable_now(),typeof ne=="function"?m.callback=ne:m===n(u)&&r(u),x(J)}else r(u);m=n(u)}if(m!==null)var Te=!0;else{var ut=n(d);ut!==null&&yt(V,ut.startTime-J),Te=!1}return Te}finally{m=null,y=Z,S=!1}}var z=!1,E=null,v=-1,w=5,T=-1;function A(){return!(t.unstable_now()-T<w)}function C(){if(E!==null){var $=t.unstable_now();T=$;var J=!0;try{J=E(!0,$)}finally{J?I():(z=!1,E=null)}}else z=!1}var I;if(typeof _=="function")I=function(){_(C)};else if(typeof MessageChannel<"u"){var ge=new MessageChannel,At=ge.port2;ge.port1.onmessage=C,I=function(){At.postMessage(null)}}else I=function(){O(C,0)};function hn($){E=$,z||(z=!0,I())}function yt($,J){v=O(function(){$(t.unstable_now())},J)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function($){$.callback=null},t.unstable_continueExecution=function(){R||S||(R=!0,hn(U))},t.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<$?Math.floor(1e3/$):5},t.unstable_getCurrentPriorityLevel=function(){return y},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function($){switch(y){case 1:case 2:case 3:var J=3;break;default:J=y}var Z=y;y=J;try{return $()}finally{y=Z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function($,J){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var Z=y;y=$;try{return J()}finally{y=Z}},t.unstable_scheduleCallback=function($,J,Z){var Q=t.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?Q+Z:Q):Z=Q,$){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=Z+ne,$={id:p++,callback:J,priorityLevel:$,startTime:Z,expirationTime:ne,sortIndex:-1},Z>Q?($.sortIndex=Z,e(d,$),n(u)===null&&$===n(d)&&(N?(k(v),v=-1):N=!0,yt(V,Z-Q))):($.sortIndex=ne,e(u,$),R||S||(R=!0,hn(U))),$},t.unstable_shouldYield=A,t.unstable_wrapCallback=function($){var J=y;return function(){var Z=y;y=J;try{return $.apply(this,arguments)}finally{y=Z}}}})(ky);xy.exports=ky;var xT=xy.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kT=re,Ot=xT;function F(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Sy=new Set,xo={};function ci(t,e){Ji(t,e),Ji(t+"Capture",e)}function Ji(t,e){for(xo[t]=e,t=0;t<e.length;t++)Sy.add(e[t])}var Fn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),od=Object.prototype.hasOwnProperty,ST=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ym={},vm={};function AT(t){return od.call(vm,t)?!0:od.call(ym,t)?!1:ST.test(t)?vm[t]=!0:(ym[t]=!0,!1)}function CT(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function RT(t,e,n,r){if(e===null||typeof e>"u"||CT(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function gt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ye={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ye[t]=new gt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ye[e]=new gt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ye[t]=new gt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ye[t]=new gt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ye[t]=new gt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ye[t]=new gt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ye[t]=new gt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ye[t]=new gt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ye[t]=new gt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Rh=/[\-:]([a-z])/g;function Ph(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Rh,Ph);Ye[e]=new gt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Rh,Ph);Ye[e]=new gt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Rh,Ph);Ye[e]=new gt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ye[t]=new gt(t,1,!1,t.toLowerCase(),null,!1,!1)});Ye.xlinkHref=new gt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ye[t]=new gt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Nh(t,e,n,r){var i=Ye.hasOwnProperty(e)?Ye[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(RT(e,n,i,r)&&(n=null),r||i===null?AT(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Kn=kT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ra=Symbol.for("react.element"),Ri=Symbol.for("react.portal"),Pi=Symbol.for("react.fragment"),bh=Symbol.for("react.strict_mode"),ad=Symbol.for("react.profiler"),Ay=Symbol.for("react.provider"),Cy=Symbol.for("react.context"),Dh=Symbol.for("react.forward_ref"),ld=Symbol.for("react.suspense"),ud=Symbol.for("react.suspense_list"),Vh=Symbol.for("react.memo"),nr=Symbol.for("react.lazy"),Ry=Symbol.for("react.offscreen"),_m=Symbol.iterator;function zs(t){return t===null||typeof t!="object"?null:(t=_m&&t[_m]||t["@@iterator"],typeof t=="function"?t:null)}var Se=Object.assign,_c;function Xs(t){if(_c===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);_c=e&&e[1]||""}return`
`+_c+t}var wc=!1;function Ec(t,e){if(!t||wc)return"";wc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(d){var r=d}Reflect.construct(t,[],e)}else{try{e.call()}catch(d){r=d}t.call(e.prototype)}else{try{throw Error()}catch(d){r=d}t()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{wc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Xs(t):""}function PT(t){switch(t.tag){case 5:return Xs(t.type);case 16:return Xs("Lazy");case 13:return Xs("Suspense");case 19:return Xs("SuspenseList");case 0:case 2:case 15:return t=Ec(t.type,!1),t;case 11:return t=Ec(t.type.render,!1),t;case 1:return t=Ec(t.type,!0),t;default:return""}}function cd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Pi:return"Fragment";case Ri:return"Portal";case ad:return"Profiler";case bh:return"StrictMode";case ld:return"Suspense";case ud:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Cy:return(t.displayName||"Context")+".Consumer";case Ay:return(t._context.displayName||"Context")+".Provider";case Dh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Vh:return e=t.displayName||null,e!==null?e:cd(t.type)||"Memo";case nr:e=t._payload,t=t._init;try{return cd(t(e))}catch{}}return null}function NT(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return cd(e);case 8:return e===bh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function kr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Py(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function bT(t){var e=Py(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Pa(t){t._valueTracker||(t._valueTracker=bT(t))}function Ny(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Py(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function El(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function dd(t,e){var n=e.checked;return Se({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function wm(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=kr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function by(t,e){e=e.checked,e!=null&&Nh(t,"checked",e,!1)}function hd(t,e){by(t,e);var n=kr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?fd(t,e.type,n):e.hasOwnProperty("defaultValue")&&fd(t,e.type,kr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Em(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function fd(t,e,n){(e!=="number"||El(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Js=Array.isArray;function Bi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+kr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function pd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(F(91));return Se({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Tm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(F(92));if(Js(n)){if(1<n.length)throw Error(F(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:kr(n)}}function Dy(t,e){var n=kr(e.value),r=kr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Im(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Vy(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function md(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Vy(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Na,Oy=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Na=Na||document.createElement("div"),Na.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Na.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ko(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ao={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},DT=["Webkit","ms","Moz","O"];Object.keys(ao).forEach(function(t){DT.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ao[e]=ao[t]})});function Ly(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ao.hasOwnProperty(t)&&ao[t]?(""+e).trim():e+"px"}function jy(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Ly(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var VT=Se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function gd(t,e){if(e){if(VT[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(F(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(F(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(F(61))}if(e.style!=null&&typeof e.style!="object")throw Error(F(62))}}function yd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var vd=null;function Oh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var _d=null,$i=null,Hi=null;function xm(t){if(t=Jo(t)){if(typeof _d!="function")throw Error(F(280));var e=t.stateNode;e&&(e=wu(e),_d(t.stateNode,t.type,e))}}function My(t){$i?Hi?Hi.push(t):Hi=[t]:$i=t}function Fy(){if($i){var t=$i,e=Hi;if(Hi=$i=null,xm(t),e)for(t=0;t<e.length;t++)xm(e[t])}}function Uy(t,e){return t(e)}function zy(){}var Tc=!1;function By(t,e,n){if(Tc)return t(e,n);Tc=!0;try{return Uy(t,e,n)}finally{Tc=!1,($i!==null||Hi!==null)&&(zy(),Fy())}}function So(t,e){var n=t.stateNode;if(n===null)return null;var r=wu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(F(231,e,typeof n));return n}var wd=!1;if(Fn)try{var Bs={};Object.defineProperty(Bs,"passive",{get:function(){wd=!0}}),window.addEventListener("test",Bs,Bs),window.removeEventListener("test",Bs,Bs)}catch{wd=!1}function OT(t,e,n,r,i,s,o,l,u){var d=Array.prototype.slice.call(arguments,3);try{e.apply(n,d)}catch(p){this.onError(p)}}var lo=!1,Tl=null,Il=!1,Ed=null,LT={onError:function(t){lo=!0,Tl=t}};function jT(t,e,n,r,i,s,o,l,u){lo=!1,Tl=null,OT.apply(LT,arguments)}function MT(t,e,n,r,i,s,o,l,u){if(jT.apply(this,arguments),lo){if(lo){var d=Tl;lo=!1,Tl=null}else throw Error(F(198));Il||(Il=!0,Ed=d)}}function di(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function $y(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function km(t){if(di(t)!==t)throw Error(F(188))}function FT(t){var e=t.alternate;if(!e){if(e=di(t),e===null)throw Error(F(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return km(i),t;if(s===r)return km(i),e;s=s.sibling}throw Error(F(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(F(189))}}if(n.alternate!==r)throw Error(F(190))}if(n.tag!==3)throw Error(F(188));return n.stateNode.current===n?t:e}function Hy(t){return t=FT(t),t!==null?Wy(t):null}function Wy(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Wy(t);if(e!==null)return e;t=t.sibling}return null}var qy=Ot.unstable_scheduleCallback,Sm=Ot.unstable_cancelCallback,UT=Ot.unstable_shouldYield,zT=Ot.unstable_requestPaint,Ne=Ot.unstable_now,BT=Ot.unstable_getCurrentPriorityLevel,Lh=Ot.unstable_ImmediatePriority,Gy=Ot.unstable_UserBlockingPriority,xl=Ot.unstable_NormalPriority,$T=Ot.unstable_LowPriority,Ky=Ot.unstable_IdlePriority,gu=null,yn=null;function HT(t){if(yn&&typeof yn.onCommitFiberRoot=="function")try{yn.onCommitFiberRoot(gu,t,void 0,(t.current.flags&128)===128)}catch{}}var sn=Math.clz32?Math.clz32:GT,WT=Math.log,qT=Math.LN2;function GT(t){return t>>>=0,t===0?32:31-(WT(t)/qT|0)|0}var ba=64,Da=4194304;function Zs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function kl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Zs(l):(s&=o,s!==0&&(r=Zs(s)))}else o=n&~i,o!==0?r=Zs(o):s!==0&&(r=Zs(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-sn(e),i=1<<n,r|=t[n],e&=~i;return r}function KT(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function QT(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-sn(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=KT(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function Td(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Qy(){var t=ba;return ba<<=1,!(ba&4194240)&&(ba=64),t}function Ic(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Yo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-sn(e),t[e]=n}function YT(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-sn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function jh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-sn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var fe=0;function Yy(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Xy,Mh,Jy,Zy,ev,Id=!1,Va=[],fr=null,pr=null,mr=null,Ao=new Map,Co=new Map,ir=[],XT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Am(t,e){switch(t){case"focusin":case"focusout":fr=null;break;case"dragenter":case"dragleave":pr=null;break;case"mouseover":case"mouseout":mr=null;break;case"pointerover":case"pointerout":Ao.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Co.delete(e.pointerId)}}function $s(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Jo(e),e!==null&&Mh(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function JT(t,e,n,r,i){switch(e){case"focusin":return fr=$s(fr,t,e,n,r,i),!0;case"dragenter":return pr=$s(pr,t,e,n,r,i),!0;case"mouseover":return mr=$s(mr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Ao.set(s,$s(Ao.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Co.set(s,$s(Co.get(s)||null,t,e,n,r,i)),!0}return!1}function tv(t){var e=qr(t.target);if(e!==null){var n=di(e);if(n!==null){if(e=n.tag,e===13){if(e=$y(n),e!==null){t.blockedOn=e,ev(t.priority,function(){Jy(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function tl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=xd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);vd=r,n.target.dispatchEvent(r),vd=null}else return e=Jo(n),e!==null&&Mh(e),t.blockedOn=n,!1;e.shift()}return!0}function Cm(t,e,n){tl(t)&&n.delete(e)}function ZT(){Id=!1,fr!==null&&tl(fr)&&(fr=null),pr!==null&&tl(pr)&&(pr=null),mr!==null&&tl(mr)&&(mr=null),Ao.forEach(Cm),Co.forEach(Cm)}function Hs(t,e){t.blockedOn===e&&(t.blockedOn=null,Id||(Id=!0,Ot.unstable_scheduleCallback(Ot.unstable_NormalPriority,ZT)))}function Ro(t){function e(i){return Hs(i,t)}if(0<Va.length){Hs(Va[0],t);for(var n=1;n<Va.length;n++){var r=Va[n];r.blockedOn===t&&(r.blockedOn=null)}}for(fr!==null&&Hs(fr,t),pr!==null&&Hs(pr,t),mr!==null&&Hs(mr,t),Ao.forEach(e),Co.forEach(e),n=0;n<ir.length;n++)r=ir[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<ir.length&&(n=ir[0],n.blockedOn===null);)tv(n),n.blockedOn===null&&ir.shift()}var Wi=Kn.ReactCurrentBatchConfig,Sl=!0;function eI(t,e,n,r){var i=fe,s=Wi.transition;Wi.transition=null;try{fe=1,Fh(t,e,n,r)}finally{fe=i,Wi.transition=s}}function tI(t,e,n,r){var i=fe,s=Wi.transition;Wi.transition=null;try{fe=4,Fh(t,e,n,r)}finally{fe=i,Wi.transition=s}}function Fh(t,e,n,r){if(Sl){var i=xd(t,e,n,r);if(i===null)Dc(t,e,r,Al,n),Am(t,r);else if(JT(i,t,e,n,r))r.stopPropagation();else if(Am(t,r),e&4&&-1<XT.indexOf(t)){for(;i!==null;){var s=Jo(i);if(s!==null&&Xy(s),s=xd(t,e,n,r),s===null&&Dc(t,e,r,Al,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Dc(t,e,r,null,n)}}var Al=null;function xd(t,e,n,r){if(Al=null,t=Oh(r),t=qr(t),t!==null)if(e=di(t),e===null)t=null;else if(n=e.tag,n===13){if(t=$y(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Al=t,null}function nv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(BT()){case Lh:return 1;case Gy:return 4;case xl:case $T:return 16;case Ky:return 536870912;default:return 16}default:return 16}}var cr=null,Uh=null,nl=null;function rv(){if(nl)return nl;var t,e=Uh,n=e.length,r,i="value"in cr?cr.value:cr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return nl=i.slice(t,1<r?1-r:void 0)}function rl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Oa(){return!0}function Rm(){return!1}function jt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Oa:Rm,this.isPropagationStopped=Rm,this}return Se(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Oa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Oa)},persist:function(){},isPersistent:Oa}),e}var ps={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zh=jt(ps),Xo=Se({},ps,{view:0,detail:0}),nI=jt(Xo),xc,kc,Ws,yu=Se({},Xo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Bh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ws&&(Ws&&t.type==="mousemove"?(xc=t.screenX-Ws.screenX,kc=t.screenY-Ws.screenY):kc=xc=0,Ws=t),xc)},movementY:function(t){return"movementY"in t?t.movementY:kc}}),Pm=jt(yu),rI=Se({},yu,{dataTransfer:0}),iI=jt(rI),sI=Se({},Xo,{relatedTarget:0}),Sc=jt(sI),oI=Se({},ps,{animationName:0,elapsedTime:0,pseudoElement:0}),aI=jt(oI),lI=Se({},ps,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),uI=jt(lI),cI=Se({},ps,{data:0}),Nm=jt(cI),dI={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},hI={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},fI={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function pI(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=fI[t])?!!e[t]:!1}function Bh(){return pI}var mI=Se({},Xo,{key:function(t){if(t.key){var e=dI[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=rl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?hI[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Bh,charCode:function(t){return t.type==="keypress"?rl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?rl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),gI=jt(mI),yI=Se({},yu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bm=jt(yI),vI=Se({},Xo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Bh}),_I=jt(vI),wI=Se({},ps,{propertyName:0,elapsedTime:0,pseudoElement:0}),EI=jt(wI),TI=Se({},yu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),II=jt(TI),xI=[9,13,27,32],$h=Fn&&"CompositionEvent"in window,uo=null;Fn&&"documentMode"in document&&(uo=document.documentMode);var kI=Fn&&"TextEvent"in window&&!uo,iv=Fn&&(!$h||uo&&8<uo&&11>=uo),Dm=String.fromCharCode(32),Vm=!1;function sv(t,e){switch(t){case"keyup":return xI.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ov(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ni=!1;function SI(t,e){switch(t){case"compositionend":return ov(e);case"keypress":return e.which!==32?null:(Vm=!0,Dm);case"textInput":return t=e.data,t===Dm&&Vm?null:t;default:return null}}function AI(t,e){if(Ni)return t==="compositionend"||!$h&&sv(t,e)?(t=rv(),nl=Uh=cr=null,Ni=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return iv&&e.locale!=="ko"?null:e.data;default:return null}}var CI={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Om(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!CI[t.type]:e==="textarea"}function av(t,e,n,r){My(r),e=Cl(e,"onChange"),0<e.length&&(n=new zh("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var co=null,Po=null;function RI(t){vv(t,0)}function vu(t){var e=Vi(t);if(Ny(e))return t}function PI(t,e){if(t==="change")return e}var lv=!1;if(Fn){var Ac;if(Fn){var Cc="oninput"in document;if(!Cc){var Lm=document.createElement("div");Lm.setAttribute("oninput","return;"),Cc=typeof Lm.oninput=="function"}Ac=Cc}else Ac=!1;lv=Ac&&(!document.documentMode||9<document.documentMode)}function jm(){co&&(co.detachEvent("onpropertychange",uv),Po=co=null)}function uv(t){if(t.propertyName==="value"&&vu(Po)){var e=[];av(e,Po,t,Oh(t)),By(RI,e)}}function NI(t,e,n){t==="focusin"?(jm(),co=e,Po=n,co.attachEvent("onpropertychange",uv)):t==="focusout"&&jm()}function bI(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return vu(Po)}function DI(t,e){if(t==="click")return vu(e)}function VI(t,e){if(t==="input"||t==="change")return vu(e)}function OI(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ln=typeof Object.is=="function"?Object.is:OI;function No(t,e){if(ln(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!od.call(e,i)||!ln(t[i],e[i]))return!1}return!0}function Mm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Fm(t,e){var n=Mm(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Mm(n)}}function cv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?cv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function dv(){for(var t=window,e=El();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=El(t.document)}return e}function Hh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function LI(t){var e=dv(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&cv(n.ownerDocument.documentElement,n)){if(r!==null&&Hh(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Fm(n,s);var o=Fm(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var jI=Fn&&"documentMode"in document&&11>=document.documentMode,bi=null,kd=null,ho=null,Sd=!1;function Um(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Sd||bi==null||bi!==El(r)||(r=bi,"selectionStart"in r&&Hh(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ho&&No(ho,r)||(ho=r,r=Cl(kd,"onSelect"),0<r.length&&(e=new zh("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=bi)))}function La(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Di={animationend:La("Animation","AnimationEnd"),animationiteration:La("Animation","AnimationIteration"),animationstart:La("Animation","AnimationStart"),transitionend:La("Transition","TransitionEnd")},Rc={},hv={};Fn&&(hv=document.createElement("div").style,"AnimationEvent"in window||(delete Di.animationend.animation,delete Di.animationiteration.animation,delete Di.animationstart.animation),"TransitionEvent"in window||delete Di.transitionend.transition);function _u(t){if(Rc[t])return Rc[t];if(!Di[t])return t;var e=Di[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in hv)return Rc[t]=e[n];return t}var fv=_u("animationend"),pv=_u("animationiteration"),mv=_u("animationstart"),gv=_u("transitionend"),yv=new Map,zm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Vr(t,e){yv.set(t,e),ci(e,[t])}for(var Pc=0;Pc<zm.length;Pc++){var Nc=zm[Pc],MI=Nc.toLowerCase(),FI=Nc[0].toUpperCase()+Nc.slice(1);Vr(MI,"on"+FI)}Vr(fv,"onAnimationEnd");Vr(pv,"onAnimationIteration");Vr(mv,"onAnimationStart");Vr("dblclick","onDoubleClick");Vr("focusin","onFocus");Vr("focusout","onBlur");Vr(gv,"onTransitionEnd");Ji("onMouseEnter",["mouseout","mouseover"]);Ji("onMouseLeave",["mouseout","mouseover"]);Ji("onPointerEnter",["pointerout","pointerover"]);Ji("onPointerLeave",["pointerout","pointerover"]);ci("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ci("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ci("onBeforeInput",["compositionend","keypress","textInput","paste"]);ci("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ci("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ci("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var eo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),UI=new Set("cancel close invalid load scroll toggle".split(" ").concat(eo));function Bm(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,MT(r,e,void 0,t),t.currentTarget=null}function vv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,d=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;Bm(i,l,d),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,d=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;Bm(i,l,d),s=u}}}if(Il)throw t=Ed,Il=!1,Ed=null,t}function _e(t,e){var n=e[Nd];n===void 0&&(n=e[Nd]=new Set);var r=t+"__bubble";n.has(r)||(_v(e,t,2,!1),n.add(r))}function bc(t,e,n){var r=0;e&&(r|=4),_v(n,t,r,e)}var ja="_reactListening"+Math.random().toString(36).slice(2);function bo(t){if(!t[ja]){t[ja]=!0,Sy.forEach(function(n){n!=="selectionchange"&&(UI.has(n)||bc(n,!1,t),bc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ja]||(e[ja]=!0,bc("selectionchange",!1,e))}}function _v(t,e,n,r){switch(nv(e)){case 1:var i=eI;break;case 4:i=tI;break;default:i=Fh}n=i.bind(null,e,n,t),i=void 0,!wd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Dc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=qr(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}By(function(){var d=s,p=Oh(n),m=[];e:{var y=yv.get(t);if(y!==void 0){var S=zh,R=t;switch(t){case"keypress":if(rl(n)===0)break e;case"keydown":case"keyup":S=gI;break;case"focusin":R="focus",S=Sc;break;case"focusout":R="blur",S=Sc;break;case"beforeblur":case"afterblur":S=Sc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=Pm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=iI;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=_I;break;case fv:case pv:case mv:S=aI;break;case gv:S=EI;break;case"scroll":S=nI;break;case"wheel":S=II;break;case"copy":case"cut":case"paste":S=uI;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=bm}var N=(e&4)!==0,O=!N&&t==="scroll",k=N?y!==null?y+"Capture":null:y;N=[];for(var _=d,x;_!==null;){x=_;var V=x.stateNode;if(x.tag===5&&V!==null&&(x=V,k!==null&&(V=So(_,k),V!=null&&N.push(Do(_,V,x)))),O)break;_=_.return}0<N.length&&(y=new S(y,R,null,n,p),m.push({event:y,listeners:N}))}}if(!(e&7)){e:{if(y=t==="mouseover"||t==="pointerover",S=t==="mouseout"||t==="pointerout",y&&n!==vd&&(R=n.relatedTarget||n.fromElement)&&(qr(R)||R[Un]))break e;if((S||y)&&(y=p.window===p?p:(y=p.ownerDocument)?y.defaultView||y.parentWindow:window,S?(R=n.relatedTarget||n.toElement,S=d,R=R?qr(R):null,R!==null&&(O=di(R),R!==O||R.tag!==5&&R.tag!==6)&&(R=null)):(S=null,R=d),S!==R)){if(N=Pm,V="onMouseLeave",k="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(N=bm,V="onPointerLeave",k="onPointerEnter",_="pointer"),O=S==null?y:Vi(S),x=R==null?y:Vi(R),y=new N(V,_+"leave",S,n,p),y.target=O,y.relatedTarget=x,V=null,qr(p)===d&&(N=new N(k,_+"enter",R,n,p),N.target=x,N.relatedTarget=O,V=N),O=V,S&&R)t:{for(N=S,k=R,_=0,x=N;x;x=xi(x))_++;for(x=0,V=k;V;V=xi(V))x++;for(;0<_-x;)N=xi(N),_--;for(;0<x-_;)k=xi(k),x--;for(;_--;){if(N===k||k!==null&&N===k.alternate)break t;N=xi(N),k=xi(k)}N=null}else N=null;S!==null&&$m(m,y,S,N,!1),R!==null&&O!==null&&$m(m,O,R,N,!0)}}e:{if(y=d?Vi(d):window,S=y.nodeName&&y.nodeName.toLowerCase(),S==="select"||S==="input"&&y.type==="file")var U=PI;else if(Om(y))if(lv)U=VI;else{U=bI;var z=NI}else(S=y.nodeName)&&S.toLowerCase()==="input"&&(y.type==="checkbox"||y.type==="radio")&&(U=DI);if(U&&(U=U(t,d))){av(m,U,n,p);break e}z&&z(t,y,d),t==="focusout"&&(z=y._wrapperState)&&z.controlled&&y.type==="number"&&fd(y,"number",y.value)}switch(z=d?Vi(d):window,t){case"focusin":(Om(z)||z.contentEditable==="true")&&(bi=z,kd=d,ho=null);break;case"focusout":ho=kd=bi=null;break;case"mousedown":Sd=!0;break;case"contextmenu":case"mouseup":case"dragend":Sd=!1,Um(m,n,p);break;case"selectionchange":if(jI)break;case"keydown":case"keyup":Um(m,n,p)}var E;if($h)e:{switch(t){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else Ni?sv(t,n)&&(v="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(v="onCompositionStart");v&&(iv&&n.locale!=="ko"&&(Ni||v!=="onCompositionStart"?v==="onCompositionEnd"&&Ni&&(E=rv()):(cr=p,Uh="value"in cr?cr.value:cr.textContent,Ni=!0)),z=Cl(d,v),0<z.length&&(v=new Nm(v,t,null,n,p),m.push({event:v,listeners:z}),E?v.data=E:(E=ov(n),E!==null&&(v.data=E)))),(E=kI?SI(t,n):AI(t,n))&&(d=Cl(d,"onBeforeInput"),0<d.length&&(p=new Nm("onBeforeInput","beforeinput",null,n,p),m.push({event:p,listeners:d}),p.data=E))}vv(m,e)})}function Do(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Cl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=So(t,n),s!=null&&r.unshift(Do(t,s,i)),s=So(t,e),s!=null&&r.push(Do(t,s,i))),t=t.return}return r}function xi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function $m(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,d=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&d!==null&&(l=d,i?(u=So(n,s),u!=null&&o.unshift(Do(n,u,l))):i||(u=So(n,s),u!=null&&o.push(Do(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var zI=/\r\n?/g,BI=/\u0000|\uFFFD/g;function Hm(t){return(typeof t=="string"?t:""+t).replace(zI,`
`).replace(BI,"")}function Ma(t,e,n){if(e=Hm(e),Hm(t)!==e&&n)throw Error(F(425))}function Rl(){}var Ad=null,Cd=null;function Rd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Pd=typeof setTimeout=="function"?setTimeout:void 0,$I=typeof clearTimeout=="function"?clearTimeout:void 0,Wm=typeof Promise=="function"?Promise:void 0,HI=typeof queueMicrotask=="function"?queueMicrotask:typeof Wm<"u"?function(t){return Wm.resolve(null).then(t).catch(WI)}:Pd;function WI(t){setTimeout(function(){throw t})}function Vc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Ro(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ro(e)}function gr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function qm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ms=Math.random().toString(36).slice(2),gn="__reactFiber$"+ms,Vo="__reactProps$"+ms,Un="__reactContainer$"+ms,Nd="__reactEvents$"+ms,qI="__reactListeners$"+ms,GI="__reactHandles$"+ms;function qr(t){var e=t[gn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Un]||n[gn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=qm(t);t!==null;){if(n=t[gn])return n;t=qm(t)}return e}t=n,n=t.parentNode}return null}function Jo(t){return t=t[gn]||t[Un],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Vi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(F(33))}function wu(t){return t[Vo]||null}var bd=[],Oi=-1;function Or(t){return{current:t}}function Ee(t){0>Oi||(t.current=bd[Oi],bd[Oi]=null,Oi--)}function me(t,e){Oi++,bd[Oi]=t.current,t.current=e}var Sr={},at=Or(Sr),Et=Or(!1),Zr=Sr;function Zi(t,e){var n=t.type.contextTypes;if(!n)return Sr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Tt(t){return t=t.childContextTypes,t!=null}function Pl(){Ee(Et),Ee(at)}function Gm(t,e,n){if(at.current!==Sr)throw Error(F(168));me(at,e),me(Et,n)}function wv(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(F(108,NT(t)||"Unknown",i));return Se({},n,r)}function Nl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Sr,Zr=at.current,me(at,t),me(Et,Et.current),!0}function Km(t,e,n){var r=t.stateNode;if(!r)throw Error(F(169));n?(t=wv(t,e,Zr),r.__reactInternalMemoizedMergedChildContext=t,Ee(Et),Ee(at),me(at,t)):Ee(Et),me(Et,n)}var Nn=null,Eu=!1,Oc=!1;function Ev(t){Nn===null?Nn=[t]:Nn.push(t)}function KI(t){Eu=!0,Ev(t)}function Lr(){if(!Oc&&Nn!==null){Oc=!0;var t=0,e=fe;try{var n=Nn;for(fe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Nn=null,Eu=!1}catch(i){throw Nn!==null&&(Nn=Nn.slice(t+1)),qy(Lh,Lr),i}finally{fe=e,Oc=!1}}return null}var Li=[],ji=0,bl=null,Dl=0,zt=[],Bt=0,ei=null,bn=1,Dn="";function $r(t,e){Li[ji++]=Dl,Li[ji++]=bl,bl=t,Dl=e}function Tv(t,e,n){zt[Bt++]=bn,zt[Bt++]=Dn,zt[Bt++]=ei,ei=t;var r=bn;t=Dn;var i=32-sn(r)-1;r&=~(1<<i),n+=1;var s=32-sn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,bn=1<<32-sn(e)+i|n<<i|r,Dn=s+t}else bn=1<<s|n<<i|r,Dn=t}function Wh(t){t.return!==null&&($r(t,1),Tv(t,1,0))}function qh(t){for(;t===bl;)bl=Li[--ji],Li[ji]=null,Dl=Li[--ji],Li[ji]=null;for(;t===ei;)ei=zt[--Bt],zt[Bt]=null,Dn=zt[--Bt],zt[Bt]=null,bn=zt[--Bt],zt[Bt]=null}var Dt=null,bt=null,Ie=!1,en=null;function Iv(t,e){var n=Ht(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Qm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Dt=t,bt=gr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Dt=t,bt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ei!==null?{id:bn,overflow:Dn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ht(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Dt=t,bt=null,!0):!1;default:return!1}}function Dd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Vd(t){if(Ie){var e=bt;if(e){var n=e;if(!Qm(t,e)){if(Dd(t))throw Error(F(418));e=gr(n.nextSibling);var r=Dt;e&&Qm(t,e)?Iv(r,n):(t.flags=t.flags&-4097|2,Ie=!1,Dt=t)}}else{if(Dd(t))throw Error(F(418));t.flags=t.flags&-4097|2,Ie=!1,Dt=t}}}function Ym(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Dt=t}function Fa(t){if(t!==Dt)return!1;if(!Ie)return Ym(t),Ie=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Rd(t.type,t.memoizedProps)),e&&(e=bt)){if(Dd(t))throw xv(),Error(F(418));for(;e;)Iv(t,e),e=gr(e.nextSibling)}if(Ym(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(F(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){bt=gr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}bt=null}}else bt=Dt?gr(t.stateNode.nextSibling):null;return!0}function xv(){for(var t=bt;t;)t=gr(t.nextSibling)}function es(){bt=Dt=null,Ie=!1}function Gh(t){en===null?en=[t]:en.push(t)}var QI=Kn.ReactCurrentBatchConfig;function qs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(F(309));var r=n.stateNode}if(!r)throw Error(F(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(F(284));if(!n._owner)throw Error(F(290,t))}return t}function Ua(t,e){throw t=Object.prototype.toString.call(e),Error(F(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Xm(t){var e=t._init;return e(t._payload)}function kv(t){function e(k,_){if(t){var x=k.deletions;x===null?(k.deletions=[_],k.flags|=16):x.push(_)}}function n(k,_){if(!t)return null;for(;_!==null;)e(k,_),_=_.sibling;return null}function r(k,_){for(k=new Map;_!==null;)_.key!==null?k.set(_.key,_):k.set(_.index,_),_=_.sibling;return k}function i(k,_){return k=wr(k,_),k.index=0,k.sibling=null,k}function s(k,_,x){return k.index=x,t?(x=k.alternate,x!==null?(x=x.index,x<_?(k.flags|=2,_):x):(k.flags|=2,_)):(k.flags|=1048576,_)}function o(k){return t&&k.alternate===null&&(k.flags|=2),k}function l(k,_,x,V){return _===null||_.tag!==6?(_=Bc(x,k.mode,V),_.return=k,_):(_=i(_,x),_.return=k,_)}function u(k,_,x,V){var U=x.type;return U===Pi?p(k,_,x.props.children,V,x.key):_!==null&&(_.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===nr&&Xm(U)===_.type)?(V=i(_,x.props),V.ref=qs(k,_,x),V.return=k,V):(V=cl(x.type,x.key,x.props,null,k.mode,V),V.ref=qs(k,_,x),V.return=k,V)}function d(k,_,x,V){return _===null||_.tag!==4||_.stateNode.containerInfo!==x.containerInfo||_.stateNode.implementation!==x.implementation?(_=$c(x,k.mode,V),_.return=k,_):(_=i(_,x.children||[]),_.return=k,_)}function p(k,_,x,V,U){return _===null||_.tag!==7?(_=Jr(x,k.mode,V,U),_.return=k,_):(_=i(_,x),_.return=k,_)}function m(k,_,x){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Bc(""+_,k.mode,x),_.return=k,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Ra:return x=cl(_.type,_.key,_.props,null,k.mode,x),x.ref=qs(k,null,_),x.return=k,x;case Ri:return _=$c(_,k.mode,x),_.return=k,_;case nr:var V=_._init;return m(k,V(_._payload),x)}if(Js(_)||zs(_))return _=Jr(_,k.mode,x,null),_.return=k,_;Ua(k,_)}return null}function y(k,_,x,V){var U=_!==null?_.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return U!==null?null:l(k,_,""+x,V);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Ra:return x.key===U?u(k,_,x,V):null;case Ri:return x.key===U?d(k,_,x,V):null;case nr:return U=x._init,y(k,_,U(x._payload),V)}if(Js(x)||zs(x))return U!==null?null:p(k,_,x,V,null);Ua(k,x)}return null}function S(k,_,x,V,U){if(typeof V=="string"&&V!==""||typeof V=="number")return k=k.get(x)||null,l(_,k,""+V,U);if(typeof V=="object"&&V!==null){switch(V.$$typeof){case Ra:return k=k.get(V.key===null?x:V.key)||null,u(_,k,V,U);case Ri:return k=k.get(V.key===null?x:V.key)||null,d(_,k,V,U);case nr:var z=V._init;return S(k,_,x,z(V._payload),U)}if(Js(V)||zs(V))return k=k.get(x)||null,p(_,k,V,U,null);Ua(_,V)}return null}function R(k,_,x,V){for(var U=null,z=null,E=_,v=_=0,w=null;E!==null&&v<x.length;v++){E.index>v?(w=E,E=null):w=E.sibling;var T=y(k,E,x[v],V);if(T===null){E===null&&(E=w);break}t&&E&&T.alternate===null&&e(k,E),_=s(T,_,v),z===null?U=T:z.sibling=T,z=T,E=w}if(v===x.length)return n(k,E),Ie&&$r(k,v),U;if(E===null){for(;v<x.length;v++)E=m(k,x[v],V),E!==null&&(_=s(E,_,v),z===null?U=E:z.sibling=E,z=E);return Ie&&$r(k,v),U}for(E=r(k,E);v<x.length;v++)w=S(E,k,v,x[v],V),w!==null&&(t&&w.alternate!==null&&E.delete(w.key===null?v:w.key),_=s(w,_,v),z===null?U=w:z.sibling=w,z=w);return t&&E.forEach(function(A){return e(k,A)}),Ie&&$r(k,v),U}function N(k,_,x,V){var U=zs(x);if(typeof U!="function")throw Error(F(150));if(x=U.call(x),x==null)throw Error(F(151));for(var z=U=null,E=_,v=_=0,w=null,T=x.next();E!==null&&!T.done;v++,T=x.next()){E.index>v?(w=E,E=null):w=E.sibling;var A=y(k,E,T.value,V);if(A===null){E===null&&(E=w);break}t&&E&&A.alternate===null&&e(k,E),_=s(A,_,v),z===null?U=A:z.sibling=A,z=A,E=w}if(T.done)return n(k,E),Ie&&$r(k,v),U;if(E===null){for(;!T.done;v++,T=x.next())T=m(k,T.value,V),T!==null&&(_=s(T,_,v),z===null?U=T:z.sibling=T,z=T);return Ie&&$r(k,v),U}for(E=r(k,E);!T.done;v++,T=x.next())T=S(E,k,v,T.value,V),T!==null&&(t&&T.alternate!==null&&E.delete(T.key===null?v:T.key),_=s(T,_,v),z===null?U=T:z.sibling=T,z=T);return t&&E.forEach(function(C){return e(k,C)}),Ie&&$r(k,v),U}function O(k,_,x,V){if(typeof x=="object"&&x!==null&&x.type===Pi&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Ra:e:{for(var U=x.key,z=_;z!==null;){if(z.key===U){if(U=x.type,U===Pi){if(z.tag===7){n(k,z.sibling),_=i(z,x.props.children),_.return=k,k=_;break e}}else if(z.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===nr&&Xm(U)===z.type){n(k,z.sibling),_=i(z,x.props),_.ref=qs(k,z,x),_.return=k,k=_;break e}n(k,z);break}else e(k,z);z=z.sibling}x.type===Pi?(_=Jr(x.props.children,k.mode,V,x.key),_.return=k,k=_):(V=cl(x.type,x.key,x.props,null,k.mode,V),V.ref=qs(k,_,x),V.return=k,k=V)}return o(k);case Ri:e:{for(z=x.key;_!==null;){if(_.key===z)if(_.tag===4&&_.stateNode.containerInfo===x.containerInfo&&_.stateNode.implementation===x.implementation){n(k,_.sibling),_=i(_,x.children||[]),_.return=k,k=_;break e}else{n(k,_);break}else e(k,_);_=_.sibling}_=$c(x,k.mode,V),_.return=k,k=_}return o(k);case nr:return z=x._init,O(k,_,z(x._payload),V)}if(Js(x))return R(k,_,x,V);if(zs(x))return N(k,_,x,V);Ua(k,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,_!==null&&_.tag===6?(n(k,_.sibling),_=i(_,x),_.return=k,k=_):(n(k,_),_=Bc(x,k.mode,V),_.return=k,k=_),o(k)):n(k,_)}return O}var ts=kv(!0),Sv=kv(!1),Vl=Or(null),Ol=null,Mi=null,Kh=null;function Qh(){Kh=Mi=Ol=null}function Yh(t){var e=Vl.current;Ee(Vl),t._currentValue=e}function Od(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function qi(t,e){Ol=t,Kh=Mi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(wt=!0),t.firstContext=null)}function qt(t){var e=t._currentValue;if(Kh!==t)if(t={context:t,memoizedValue:e,next:null},Mi===null){if(Ol===null)throw Error(F(308));Mi=t,Ol.dependencies={lanes:0,firstContext:t}}else Mi=Mi.next=t;return e}var Gr=null;function Xh(t){Gr===null?Gr=[t]:Gr.push(t)}function Av(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Xh(e)):(n.next=i.next,i.next=n),e.interleaved=n,zn(t,r)}function zn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var rr=!1;function Jh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Cv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ln(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function yr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ue&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,zn(t,n)}return i=r.interleaved,i===null?(e.next=e,Xh(r)):(e.next=i.next,i.next=e),r.interleaved=e,zn(t,n)}function il(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,jh(t,n)}}function Jm(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ll(t,e,n,r){var i=t.updateQueue;rr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,d=u.next;u.next=null,o===null?s=d:o.next=d,o=u;var p=t.alternate;p!==null&&(p=p.updateQueue,l=p.lastBaseUpdate,l!==o&&(l===null?p.firstBaseUpdate=d:l.next=d,p.lastBaseUpdate=u))}if(s!==null){var m=i.baseState;o=0,p=d=u=null,l=s;do{var y=l.lane,S=l.eventTime;if((r&y)===y){p!==null&&(p=p.next={eventTime:S,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var R=t,N=l;switch(y=e,S=n,N.tag){case 1:if(R=N.payload,typeof R=="function"){m=R.call(S,m,y);break e}m=R;break e;case 3:R.flags=R.flags&-65537|128;case 0:if(R=N.payload,y=typeof R=="function"?R.call(S,m,y):R,y==null)break e;m=Se({},m,y);break e;case 2:rr=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,y=i.effects,y===null?i.effects=[l]:y.push(l))}else S={eventTime:S,lane:y,tag:l.tag,payload:l.payload,callback:l.callback,next:null},p===null?(d=p=S,u=m):p=p.next=S,o|=y;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;y=l,l=y.next,y.next=null,i.lastBaseUpdate=y,i.shared.pending=null}}while(1);if(p===null&&(u=m),i.baseState=u,i.firstBaseUpdate=d,i.lastBaseUpdate=p,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);ni|=o,t.lanes=o,t.memoizedState=m}}function Zm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(F(191,i));i.call(r)}}}var Zo={},vn=Or(Zo),Oo=Or(Zo),Lo=Or(Zo);function Kr(t){if(t===Zo)throw Error(F(174));return t}function Zh(t,e){switch(me(Lo,e),me(Oo,t),me(vn,Zo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:md(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=md(e,t)}Ee(vn),me(vn,e)}function ns(){Ee(vn),Ee(Oo),Ee(Lo)}function Rv(t){Kr(Lo.current);var e=Kr(vn.current),n=md(e,t.type);e!==n&&(me(Oo,t),me(vn,n))}function ef(t){Oo.current===t&&(Ee(vn),Ee(Oo))}var xe=Or(0);function jl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Lc=[];function tf(){for(var t=0;t<Lc.length;t++)Lc[t]._workInProgressVersionPrimary=null;Lc.length=0}var sl=Kn.ReactCurrentDispatcher,jc=Kn.ReactCurrentBatchConfig,ti=0,ke=null,Oe=null,Be=null,Ml=!1,fo=!1,jo=0,YI=0;function tt(){throw Error(F(321))}function nf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ln(t[n],e[n]))return!1;return!0}function rf(t,e,n,r,i,s){if(ti=s,ke=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,sl.current=t===null||t.memoizedState===null?ex:tx,t=n(r,i),fo){s=0;do{if(fo=!1,jo=0,25<=s)throw Error(F(301));s+=1,Be=Oe=null,e.updateQueue=null,sl.current=nx,t=n(r,i)}while(fo)}if(sl.current=Fl,e=Oe!==null&&Oe.next!==null,ti=0,Be=Oe=ke=null,Ml=!1,e)throw Error(F(300));return t}function sf(){var t=jo!==0;return jo=0,t}function pn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Be===null?ke.memoizedState=Be=t:Be=Be.next=t,Be}function Gt(){if(Oe===null){var t=ke.alternate;t=t!==null?t.memoizedState:null}else t=Oe.next;var e=Be===null?ke.memoizedState:Be.next;if(e!==null)Be=e,Oe=t;else{if(t===null)throw Error(F(310));Oe=t,t={memoizedState:Oe.memoizedState,baseState:Oe.baseState,baseQueue:Oe.baseQueue,queue:Oe.queue,next:null},Be===null?ke.memoizedState=Be=t:Be=Be.next=t}return Be}function Mo(t,e){return typeof e=="function"?e(t):e}function Mc(t){var e=Gt(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=Oe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,d=s;do{var p=d.lane;if((ti&p)===p)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:t(r,d.action);else{var m={lane:p,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(l=u=m,o=r):u=u.next=m,ke.lanes|=p,ni|=p}d=d.next}while(d!==null&&d!==s);u===null?o=r:u.next=l,ln(r,e.memoizedState)||(wt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ke.lanes|=s,ni|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Fc(t){var e=Gt(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);ln(s,e.memoizedState)||(wt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Pv(){}function Nv(t,e){var n=ke,r=Gt(),i=e(),s=!ln(r.memoizedState,i);if(s&&(r.memoizedState=i,wt=!0),r=r.queue,of(Vv.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Be!==null&&Be.memoizedState.tag&1){if(n.flags|=2048,Fo(9,Dv.bind(null,n,r,i,e),void 0,null),$e===null)throw Error(F(349));ti&30||bv(n,e,i)}return i}function bv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ke.updateQueue,e===null?(e={lastEffect:null,stores:null},ke.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Dv(t,e,n,r){e.value=n,e.getSnapshot=r,Ov(e)&&Lv(t)}function Vv(t,e,n){return n(function(){Ov(e)&&Lv(t)})}function Ov(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ln(t,n)}catch{return!0}}function Lv(t){var e=zn(t,1);e!==null&&on(e,t,1,-1)}function eg(t){var e=pn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Mo,lastRenderedState:t},e.queue=t,t=t.dispatch=ZI.bind(null,ke,t),[e.memoizedState,t]}function Fo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ke.updateQueue,e===null?(e={lastEffect:null,stores:null},ke.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function jv(){return Gt().memoizedState}function ol(t,e,n,r){var i=pn();ke.flags|=t,i.memoizedState=Fo(1|e,n,void 0,r===void 0?null:r)}function Tu(t,e,n,r){var i=Gt();r=r===void 0?null:r;var s=void 0;if(Oe!==null){var o=Oe.memoizedState;if(s=o.destroy,r!==null&&nf(r,o.deps)){i.memoizedState=Fo(e,n,s,r);return}}ke.flags|=t,i.memoizedState=Fo(1|e,n,s,r)}function tg(t,e){return ol(8390656,8,t,e)}function of(t,e){return Tu(2048,8,t,e)}function Mv(t,e){return Tu(4,2,t,e)}function Fv(t,e){return Tu(4,4,t,e)}function Uv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function zv(t,e,n){return n=n!=null?n.concat([t]):null,Tu(4,4,Uv.bind(null,e,t),n)}function af(){}function Bv(t,e){var n=Gt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&nf(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function $v(t,e){var n=Gt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&nf(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Hv(t,e,n){return ti&21?(ln(n,e)||(n=Qy(),ke.lanes|=n,ni|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,wt=!0),t.memoizedState=n)}function XI(t,e){var n=fe;fe=n!==0&&4>n?n:4,t(!0);var r=jc.transition;jc.transition={};try{t(!1),e()}finally{fe=n,jc.transition=r}}function Wv(){return Gt().memoizedState}function JI(t,e,n){var r=_r(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},qv(t))Gv(e,n);else if(n=Av(t,e,n,r),n!==null){var i=pt();on(n,t,r,i),Kv(n,e,r)}}function ZI(t,e,n){var r=_r(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(qv(t))Gv(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,ln(l,o)){var u=e.interleaved;u===null?(i.next=i,Xh(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=Av(t,e,i,r),n!==null&&(i=pt(),on(n,t,r,i),Kv(n,e,r))}}function qv(t){var e=t.alternate;return t===ke||e!==null&&e===ke}function Gv(t,e){fo=Ml=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Kv(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,jh(t,n)}}var Fl={readContext:qt,useCallback:tt,useContext:tt,useEffect:tt,useImperativeHandle:tt,useInsertionEffect:tt,useLayoutEffect:tt,useMemo:tt,useReducer:tt,useRef:tt,useState:tt,useDebugValue:tt,useDeferredValue:tt,useTransition:tt,useMutableSource:tt,useSyncExternalStore:tt,useId:tt,unstable_isNewReconciler:!1},ex={readContext:qt,useCallback:function(t,e){return pn().memoizedState=[t,e===void 0?null:e],t},useContext:qt,useEffect:tg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ol(4194308,4,Uv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ol(4194308,4,t,e)},useInsertionEffect:function(t,e){return ol(4,2,t,e)},useMemo:function(t,e){var n=pn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=pn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=JI.bind(null,ke,t),[r.memoizedState,t]},useRef:function(t){var e=pn();return t={current:t},e.memoizedState=t},useState:eg,useDebugValue:af,useDeferredValue:function(t){return pn().memoizedState=t},useTransition:function(){var t=eg(!1),e=t[0];return t=XI.bind(null,t[1]),pn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ke,i=pn();if(Ie){if(n===void 0)throw Error(F(407));n=n()}else{if(n=e(),$e===null)throw Error(F(349));ti&30||bv(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,tg(Vv.bind(null,r,s,t),[t]),r.flags|=2048,Fo(9,Dv.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=pn(),e=$e.identifierPrefix;if(Ie){var n=Dn,r=bn;n=(r&~(1<<32-sn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=jo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=YI++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},tx={readContext:qt,useCallback:Bv,useContext:qt,useEffect:of,useImperativeHandle:zv,useInsertionEffect:Mv,useLayoutEffect:Fv,useMemo:$v,useReducer:Mc,useRef:jv,useState:function(){return Mc(Mo)},useDebugValue:af,useDeferredValue:function(t){var e=Gt();return Hv(e,Oe.memoizedState,t)},useTransition:function(){var t=Mc(Mo)[0],e=Gt().memoizedState;return[t,e]},useMutableSource:Pv,useSyncExternalStore:Nv,useId:Wv,unstable_isNewReconciler:!1},nx={readContext:qt,useCallback:Bv,useContext:qt,useEffect:of,useImperativeHandle:zv,useInsertionEffect:Mv,useLayoutEffect:Fv,useMemo:$v,useReducer:Fc,useRef:jv,useState:function(){return Fc(Mo)},useDebugValue:af,useDeferredValue:function(t){var e=Gt();return Oe===null?e.memoizedState=t:Hv(e,Oe.memoizedState,t)},useTransition:function(){var t=Fc(Mo)[0],e=Gt().memoizedState;return[t,e]},useMutableSource:Pv,useSyncExternalStore:Nv,useId:Wv,unstable_isNewReconciler:!1};function Jt(t,e){if(t&&t.defaultProps){e=Se({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Ld(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Se({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Iu={isMounted:function(t){return(t=t._reactInternals)?di(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=pt(),i=_r(t),s=Ln(r,i);s.payload=e,n!=null&&(s.callback=n),e=yr(t,s,i),e!==null&&(on(e,t,i,r),il(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=pt(),i=_r(t),s=Ln(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=yr(t,s,i),e!==null&&(on(e,t,i,r),il(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=pt(),r=_r(t),i=Ln(n,r);i.tag=2,e!=null&&(i.callback=e),e=yr(t,i,r),e!==null&&(on(e,t,r,n),il(e,t,r))}};function ng(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!No(n,r)||!No(i,s):!0}function Qv(t,e,n){var r=!1,i=Sr,s=e.contextType;return typeof s=="object"&&s!==null?s=qt(s):(i=Tt(e)?Zr:at.current,r=e.contextTypes,s=(r=r!=null)?Zi(t,i):Sr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Iu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function rg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Iu.enqueueReplaceState(e,e.state,null)}function jd(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Jh(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=qt(s):(s=Tt(e)?Zr:at.current,i.context=Zi(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Ld(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Iu.enqueueReplaceState(i,i.state,null),Ll(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function rs(t,e){try{var n="",r=e;do n+=PT(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Uc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Md(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var rx=typeof WeakMap=="function"?WeakMap:Map;function Yv(t,e,n){n=Ln(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){zl||(zl=!0,Kd=r),Md(t,e)},n}function Xv(t,e,n){n=Ln(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Md(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Md(t,e),typeof r!="function"&&(vr===null?vr=new Set([this]):vr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function ig(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new rx;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=yx.bind(null,t,e,n),e.then(t,t))}function sg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function og(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ln(-1,1),e.tag=2,yr(n,e,1))),n.lanes|=1),t)}var ix=Kn.ReactCurrentOwner,wt=!1;function ft(t,e,n,r){e.child=t===null?Sv(e,null,n,r):ts(e,t.child,n,r)}function ag(t,e,n,r,i){n=n.render;var s=e.ref;return qi(e,i),r=rf(t,e,n,r,s,i),n=sf(),t!==null&&!wt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Bn(t,e,i)):(Ie&&n&&Wh(e),e.flags|=1,ft(t,e,r,i),e.child)}function lg(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!mf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Jv(t,e,s,r,i)):(t=cl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:No,n(o,r)&&t.ref===e.ref)return Bn(t,e,i)}return e.flags|=1,t=wr(s,r),t.ref=e.ref,t.return=e,e.child=t}function Jv(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(No(s,r)&&t.ref===e.ref)if(wt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(wt=!0);else return e.lanes=t.lanes,Bn(t,e,i)}return Fd(t,e,n,r,i)}function Zv(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},me(Ui,Pt),Pt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,me(Ui,Pt),Pt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,me(Ui,Pt),Pt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,me(Ui,Pt),Pt|=r;return ft(t,e,i,n),e.child}function e_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Fd(t,e,n,r,i){var s=Tt(n)?Zr:at.current;return s=Zi(e,s),qi(e,i),n=rf(t,e,n,r,s,i),r=sf(),t!==null&&!wt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Bn(t,e,i)):(Ie&&r&&Wh(e),e.flags|=1,ft(t,e,n,i),e.child)}function ug(t,e,n,r,i){if(Tt(n)){var s=!0;Nl(e)}else s=!1;if(qi(e,i),e.stateNode===null)al(t,e),Qv(e,n,r),jd(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,d=n.contextType;typeof d=="object"&&d!==null?d=qt(d):(d=Tt(n)?Zr:at.current,d=Zi(e,d));var p=n.getDerivedStateFromProps,m=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==d)&&rg(e,o,r,d),rr=!1;var y=e.memoizedState;o.state=y,Ll(e,r,o,i),u=e.memoizedState,l!==r||y!==u||Et.current||rr?(typeof p=="function"&&(Ld(e,n,p,r),u=e.memoizedState),(l=rr||ng(e,n,l,r,y,u,d))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=d,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Cv(t,e),l=e.memoizedProps,d=e.type===e.elementType?l:Jt(e.type,l),o.props=d,m=e.pendingProps,y=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=qt(u):(u=Tt(n)?Zr:at.current,u=Zi(e,u));var S=n.getDerivedStateFromProps;(p=typeof S=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==m||y!==u)&&rg(e,o,r,u),rr=!1,y=e.memoizedState,o.state=y,Ll(e,r,o,i);var R=e.memoizedState;l!==m||y!==R||Et.current||rr?(typeof S=="function"&&(Ld(e,n,S,r),R=e.memoizedState),(d=rr||ng(e,n,d,r,y,R,u)||!1)?(p||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,R,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,R,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=R),o.props=r,o.state=R,o.context=u,r=d):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=1024),r=!1)}return Ud(t,e,n,r,s,i)}function Ud(t,e,n,r,i,s){e_(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Km(e,n,!1),Bn(t,e,s);r=e.stateNode,ix.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=ts(e,t.child,null,s),e.child=ts(e,null,l,s)):ft(t,e,l,s),e.memoizedState=r.state,i&&Km(e,n,!0),e.child}function t_(t){var e=t.stateNode;e.pendingContext?Gm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Gm(t,e.context,!1),Zh(t,e.containerInfo)}function cg(t,e,n,r,i){return es(),Gh(i),e.flags|=256,ft(t,e,n,r),e.child}var zd={dehydrated:null,treeContext:null,retryLane:0};function Bd(t){return{baseLanes:t,cachePool:null,transitions:null}}function n_(t,e,n){var r=e.pendingProps,i=xe.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),me(xe,i&1),t===null)return Vd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Su(o,r,0,null),t=Jr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Bd(n),e.memoizedState=zd,t):lf(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return sx(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=wr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=wr(l,s):(s=Jr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Bd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=zd,r}return s=t.child,t=s.sibling,r=wr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function lf(t,e){return e=Su({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function za(t,e,n,r){return r!==null&&Gh(r),ts(e,t.child,null,n),t=lf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function sx(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Uc(Error(F(422))),za(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Su({mode:"visible",children:r.children},i,0,null),s=Jr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&ts(e,t.child,null,o),e.child.memoizedState=Bd(o),e.memoizedState=zd,s);if(!(e.mode&1))return za(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(F(419)),r=Uc(s,r,void 0),za(t,e,o,r)}if(l=(o&t.childLanes)!==0,wt||l){if(r=$e,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,zn(t,i),on(r,t,i,-1))}return pf(),r=Uc(Error(F(421))),za(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=vx.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,bt=gr(i.nextSibling),Dt=e,Ie=!0,en=null,t!==null&&(zt[Bt++]=bn,zt[Bt++]=Dn,zt[Bt++]=ei,bn=t.id,Dn=t.overflow,ei=e),e=lf(e,r.children),e.flags|=4096,e)}function dg(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Od(t.return,e,n)}function zc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function r_(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(ft(t,e,r.children,n),r=xe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&dg(t,n,e);else if(t.tag===19)dg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(me(xe,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&jl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),zc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&jl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}zc(e,!0,n,null,s);break;case"together":zc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function al(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Bn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ni|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(F(153));if(e.child!==null){for(t=e.child,n=wr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=wr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function ox(t,e,n){switch(e.tag){case 3:t_(e),es();break;case 5:Rv(e);break;case 1:Tt(e.type)&&Nl(e);break;case 4:Zh(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;me(Vl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(me(xe,xe.current&1),e.flags|=128,null):n&e.child.childLanes?n_(t,e,n):(me(xe,xe.current&1),t=Bn(t,e,n),t!==null?t.sibling:null);me(xe,xe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return r_(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),me(xe,xe.current),r)break;return null;case 22:case 23:return e.lanes=0,Zv(t,e,n)}return Bn(t,e,n)}var i_,$d,s_,o_;i_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};$d=function(){};s_=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Kr(vn.current);var s=null;switch(n){case"input":i=dd(t,i),r=dd(t,r),s=[];break;case"select":i=Se({},i,{value:void 0}),r=Se({},r,{value:void 0}),s=[];break;case"textarea":i=pd(t,i),r=pd(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Rl)}gd(n,r);var o;n=null;for(d in i)if(!r.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var l=i[d];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(xo.hasOwnProperty(d)?s||(s=[]):(s=s||[]).push(d,null));for(d in r){var u=r[d];if(l=i!=null?i[d]:void 0,r.hasOwnProperty(d)&&u!==l&&(u!=null||l!=null))if(d==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(d,n)),n=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(xo.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&_e("scroll",t),s||l===u||(s=[])):(s=s||[]).push(d,u))}n&&(s=s||[]).push("style",n);var d=s;(e.updateQueue=d)&&(e.flags|=4)}};o_=function(t,e,n,r){n!==r&&(e.flags|=4)};function Gs(t,e){if(!Ie)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function nt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function ax(t,e,n){var r=e.pendingProps;switch(qh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return nt(e),null;case 1:return Tt(e.type)&&Pl(),nt(e),null;case 3:return r=e.stateNode,ns(),Ee(Et),Ee(at),tf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Fa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,en!==null&&(Xd(en),en=null))),$d(t,e),nt(e),null;case 5:ef(e);var i=Kr(Lo.current);if(n=e.type,t!==null&&e.stateNode!=null)s_(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(F(166));return nt(e),null}if(t=Kr(vn.current),Fa(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[gn]=e,r[Vo]=s,t=(e.mode&1)!==0,n){case"dialog":_e("cancel",r),_e("close",r);break;case"iframe":case"object":case"embed":_e("load",r);break;case"video":case"audio":for(i=0;i<eo.length;i++)_e(eo[i],r);break;case"source":_e("error",r);break;case"img":case"image":case"link":_e("error",r),_e("load",r);break;case"details":_e("toggle",r);break;case"input":wm(r,s),_e("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},_e("invalid",r);break;case"textarea":Tm(r,s),_e("invalid",r)}gd(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Ma(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Ma(r.textContent,l,t),i=["children",""+l]):xo.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&_e("scroll",r)}switch(n){case"input":Pa(r),Em(r,s,!0);break;case"textarea":Pa(r),Im(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Rl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Vy(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[gn]=e,t[Vo]=r,i_(t,e,!1,!1),e.stateNode=t;e:{switch(o=yd(n,r),n){case"dialog":_e("cancel",t),_e("close",t),i=r;break;case"iframe":case"object":case"embed":_e("load",t),i=r;break;case"video":case"audio":for(i=0;i<eo.length;i++)_e(eo[i],t);i=r;break;case"source":_e("error",t),i=r;break;case"img":case"image":case"link":_e("error",t),_e("load",t),i=r;break;case"details":_e("toggle",t),i=r;break;case"input":wm(t,r),i=dd(t,r),_e("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Se({},r,{value:void 0}),_e("invalid",t);break;case"textarea":Tm(t,r),i=pd(t,r),_e("invalid",t);break;default:i=r}gd(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?jy(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Oy(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&ko(t,u):typeof u=="number"&&ko(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(xo.hasOwnProperty(s)?u!=null&&s==="onScroll"&&_e("scroll",t):u!=null&&Nh(t,s,u,o))}switch(n){case"input":Pa(t),Em(t,r,!1);break;case"textarea":Pa(t),Im(t);break;case"option":r.value!=null&&t.setAttribute("value",""+kr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Bi(t,!!r.multiple,s,!1):r.defaultValue!=null&&Bi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Rl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return nt(e),null;case 6:if(t&&e.stateNode!=null)o_(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(F(166));if(n=Kr(Lo.current),Kr(vn.current),Fa(e)){if(r=e.stateNode,n=e.memoizedProps,r[gn]=e,(s=r.nodeValue!==n)&&(t=Dt,t!==null))switch(t.tag){case 3:Ma(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ma(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[gn]=e,e.stateNode=r}return nt(e),null;case 13:if(Ee(xe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ie&&bt!==null&&e.mode&1&&!(e.flags&128))xv(),es(),e.flags|=98560,s=!1;else if(s=Fa(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(F(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(F(317));s[gn]=e}else es(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;nt(e),s=!1}else en!==null&&(Xd(en),en=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||xe.current&1?Le===0&&(Le=3):pf())),e.updateQueue!==null&&(e.flags|=4),nt(e),null);case 4:return ns(),$d(t,e),t===null&&bo(e.stateNode.containerInfo),nt(e),null;case 10:return Yh(e.type._context),nt(e),null;case 17:return Tt(e.type)&&Pl(),nt(e),null;case 19:if(Ee(xe),s=e.memoizedState,s===null)return nt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Gs(s,!1);else{if(Le!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=jl(t),o!==null){for(e.flags|=128,Gs(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return me(xe,xe.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ne()>is&&(e.flags|=128,r=!0,Gs(s,!1),e.lanes=4194304)}else{if(!r)if(t=jl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Gs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ie)return nt(e),null}else 2*Ne()-s.renderingStartTime>is&&n!==1073741824&&(e.flags|=128,r=!0,Gs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ne(),e.sibling=null,n=xe.current,me(xe,r?n&1|2:n&1),e):(nt(e),null);case 22:case 23:return ff(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Pt&1073741824&&(nt(e),e.subtreeFlags&6&&(e.flags|=8192)):nt(e),null;case 24:return null;case 25:return null}throw Error(F(156,e.tag))}function lx(t,e){switch(qh(e),e.tag){case 1:return Tt(e.type)&&Pl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ns(),Ee(Et),Ee(at),tf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return ef(e),null;case 13:if(Ee(xe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(F(340));es()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ee(xe),null;case 4:return ns(),null;case 10:return Yh(e.type._context),null;case 22:case 23:return ff(),null;case 24:return null;default:return null}}var Ba=!1,st=!1,ux=typeof WeakSet=="function"?WeakSet:Set,W=null;function Fi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Re(t,e,r)}else n.current=null}function Hd(t,e,n){try{n()}catch(r){Re(t,e,r)}}var hg=!1;function cx(t,e){if(Ad=Sl,t=dv(),Hh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,d=0,p=0,m=t,y=null;t:for(;;){for(var S;m!==n||i!==0&&m.nodeType!==3||(l=o+i),m!==s||r!==0&&m.nodeType!==3||(u=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(S=m.firstChild)!==null;)y=m,m=S;for(;;){if(m===t)break t;if(y===n&&++d===i&&(l=o),y===s&&++p===r&&(u=o),(S=m.nextSibling)!==null)break;m=y,y=m.parentNode}m=S}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Cd={focusedElem:t,selectionRange:n},Sl=!1,W=e;W!==null;)if(e=W,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,W=t;else for(;W!==null;){e=W;try{var R=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(R!==null){var N=R.memoizedProps,O=R.memoizedState,k=e.stateNode,_=k.getSnapshotBeforeUpdate(e.elementType===e.type?N:Jt(e.type,N),O);k.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(F(163))}}catch(V){Re(e,e.return,V)}if(t=e.sibling,t!==null){t.return=e.return,W=t;break}W=e.return}return R=hg,hg=!1,R}function po(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Hd(e,n,s)}i=i.next}while(i!==r)}}function xu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Wd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function a_(t){var e=t.alternate;e!==null&&(t.alternate=null,a_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[gn],delete e[Vo],delete e[Nd],delete e[qI],delete e[GI])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function l_(t){return t.tag===5||t.tag===3||t.tag===4}function fg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||l_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function qd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Rl));else if(r!==4&&(t=t.child,t!==null))for(qd(t,e,n),t=t.sibling;t!==null;)qd(t,e,n),t=t.sibling}function Gd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Gd(t,e,n),t=t.sibling;t!==null;)Gd(t,e,n),t=t.sibling}var qe=null,Zt=!1;function Zn(t,e,n){for(n=n.child;n!==null;)u_(t,e,n),n=n.sibling}function u_(t,e,n){if(yn&&typeof yn.onCommitFiberUnmount=="function")try{yn.onCommitFiberUnmount(gu,n)}catch{}switch(n.tag){case 5:st||Fi(n,e);case 6:var r=qe,i=Zt;qe=null,Zn(t,e,n),qe=r,Zt=i,qe!==null&&(Zt?(t=qe,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):qe.removeChild(n.stateNode));break;case 18:qe!==null&&(Zt?(t=qe,n=n.stateNode,t.nodeType===8?Vc(t.parentNode,n):t.nodeType===1&&Vc(t,n),Ro(t)):Vc(qe,n.stateNode));break;case 4:r=qe,i=Zt,qe=n.stateNode.containerInfo,Zt=!0,Zn(t,e,n),qe=r,Zt=i;break;case 0:case 11:case 14:case 15:if(!st&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Hd(n,e,o),i=i.next}while(i!==r)}Zn(t,e,n);break;case 1:if(!st&&(Fi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Re(n,e,l)}Zn(t,e,n);break;case 21:Zn(t,e,n);break;case 22:n.mode&1?(st=(r=st)||n.memoizedState!==null,Zn(t,e,n),st=r):Zn(t,e,n);break;default:Zn(t,e,n)}}function pg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new ux),e.forEach(function(r){var i=_x.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Xt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:qe=l.stateNode,Zt=!1;break e;case 3:qe=l.stateNode.containerInfo,Zt=!0;break e;case 4:qe=l.stateNode.containerInfo,Zt=!0;break e}l=l.return}if(qe===null)throw Error(F(160));u_(s,o,i),qe=null,Zt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(d){Re(i,e,d)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)c_(e,t),e=e.sibling}function c_(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Xt(e,t),fn(t),r&4){try{po(3,t,t.return),xu(3,t)}catch(N){Re(t,t.return,N)}try{po(5,t,t.return)}catch(N){Re(t,t.return,N)}}break;case 1:Xt(e,t),fn(t),r&512&&n!==null&&Fi(n,n.return);break;case 5:if(Xt(e,t),fn(t),r&512&&n!==null&&Fi(n,n.return),t.flags&32){var i=t.stateNode;try{ko(i,"")}catch(N){Re(t,t.return,N)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&by(i,s),yd(l,o);var d=yd(l,s);for(o=0;o<u.length;o+=2){var p=u[o],m=u[o+1];p==="style"?jy(i,m):p==="dangerouslySetInnerHTML"?Oy(i,m):p==="children"?ko(i,m):Nh(i,p,m,d)}switch(l){case"input":hd(i,s);break;case"textarea":Dy(i,s);break;case"select":var y=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var S=s.value;S!=null?Bi(i,!!s.multiple,S,!1):y!==!!s.multiple&&(s.defaultValue!=null?Bi(i,!!s.multiple,s.defaultValue,!0):Bi(i,!!s.multiple,s.multiple?[]:"",!1))}i[Vo]=s}catch(N){Re(t,t.return,N)}}break;case 6:if(Xt(e,t),fn(t),r&4){if(t.stateNode===null)throw Error(F(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(N){Re(t,t.return,N)}}break;case 3:if(Xt(e,t),fn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ro(e.containerInfo)}catch(N){Re(t,t.return,N)}break;case 4:Xt(e,t),fn(t);break;case 13:Xt(e,t),fn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(df=Ne())),r&4&&pg(t);break;case 22:if(p=n!==null&&n.memoizedState!==null,t.mode&1?(st=(d=st)||p,Xt(e,t),st=d):Xt(e,t),fn(t),r&8192){if(d=t.memoizedState!==null,(t.stateNode.isHidden=d)&&!p&&t.mode&1)for(W=t,p=t.child;p!==null;){for(m=W=p;W!==null;){switch(y=W,S=y.child,y.tag){case 0:case 11:case 14:case 15:po(4,y,y.return);break;case 1:Fi(y,y.return);var R=y.stateNode;if(typeof R.componentWillUnmount=="function"){r=y,n=y.return;try{e=r,R.props=e.memoizedProps,R.state=e.memoizedState,R.componentWillUnmount()}catch(N){Re(r,n,N)}}break;case 5:Fi(y,y.return);break;case 22:if(y.memoizedState!==null){gg(m);continue}}S!==null?(S.return=y,W=S):gg(m)}p=p.sibling}e:for(p=null,m=t;;){if(m.tag===5){if(p===null){p=m;try{i=m.stateNode,d?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=m.stateNode,u=m.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=Ly("display",o))}catch(N){Re(t,t.return,N)}}}else if(m.tag===6){if(p===null)try{m.stateNode.nodeValue=d?"":m.memoizedProps}catch(N){Re(t,t.return,N)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;p===m&&(p=null),m=m.return}p===m&&(p=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Xt(e,t),fn(t),r&4&&pg(t);break;case 21:break;default:Xt(e,t),fn(t)}}function fn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(l_(n)){var r=n;break e}n=n.return}throw Error(F(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ko(i,""),r.flags&=-33);var s=fg(t);Gd(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=fg(t);qd(t,l,o);break;default:throw Error(F(161))}}catch(u){Re(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function dx(t,e,n){W=t,d_(t)}function d_(t,e,n){for(var r=(t.mode&1)!==0;W!==null;){var i=W,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Ba;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||st;l=Ba;var d=st;if(Ba=o,(st=u)&&!d)for(W=i;W!==null;)o=W,u=o.child,o.tag===22&&o.memoizedState!==null?yg(i):u!==null?(u.return=o,W=u):yg(i);for(;s!==null;)W=s,d_(s),s=s.sibling;W=i,Ba=l,st=d}mg(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,W=s):mg(t)}}function mg(t){for(;W!==null;){var e=W;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:st||xu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!st)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Jt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Zm(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Zm(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var d=e.alternate;if(d!==null){var p=d.memoizedState;if(p!==null){var m=p.dehydrated;m!==null&&Ro(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(F(163))}st||e.flags&512&&Wd(e)}catch(y){Re(e,e.return,y)}}if(e===t){W=null;break}if(n=e.sibling,n!==null){n.return=e.return,W=n;break}W=e.return}}function gg(t){for(;W!==null;){var e=W;if(e===t){W=null;break}var n=e.sibling;if(n!==null){n.return=e.return,W=n;break}W=e.return}}function yg(t){for(;W!==null;){var e=W;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{xu(4,e)}catch(u){Re(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Re(e,i,u)}}var s=e.return;try{Wd(e)}catch(u){Re(e,s,u)}break;case 5:var o=e.return;try{Wd(e)}catch(u){Re(e,o,u)}}}catch(u){Re(e,e.return,u)}if(e===t){W=null;break}var l=e.sibling;if(l!==null){l.return=e.return,W=l;break}W=e.return}}var hx=Math.ceil,Ul=Kn.ReactCurrentDispatcher,uf=Kn.ReactCurrentOwner,Wt=Kn.ReactCurrentBatchConfig,ue=0,$e=null,De=null,Qe=0,Pt=0,Ui=Or(0),Le=0,Uo=null,ni=0,ku=0,cf=0,mo=null,_t=null,df=0,is=1/0,Pn=null,zl=!1,Kd=null,vr=null,$a=!1,dr=null,Bl=0,go=0,Qd=null,ll=-1,ul=0;function pt(){return ue&6?Ne():ll!==-1?ll:ll=Ne()}function _r(t){return t.mode&1?ue&2&&Qe!==0?Qe&-Qe:QI.transition!==null?(ul===0&&(ul=Qy()),ul):(t=fe,t!==0||(t=window.event,t=t===void 0?16:nv(t.type)),t):1}function on(t,e,n,r){if(50<go)throw go=0,Qd=null,Error(F(185));Yo(t,n,r),(!(ue&2)||t!==$e)&&(t===$e&&(!(ue&2)&&(ku|=n),Le===4&&sr(t,Qe)),It(t,r),n===1&&ue===0&&!(e.mode&1)&&(is=Ne()+500,Eu&&Lr()))}function It(t,e){var n=t.callbackNode;QT(t,e);var r=kl(t,t===$e?Qe:0);if(r===0)n!==null&&Sm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Sm(n),e===1)t.tag===0?KI(vg.bind(null,t)):Ev(vg.bind(null,t)),HI(function(){!(ue&6)&&Lr()}),n=null;else{switch(Yy(r)){case 1:n=Lh;break;case 4:n=Gy;break;case 16:n=xl;break;case 536870912:n=Ky;break;default:n=xl}n=__(n,h_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function h_(t,e){if(ll=-1,ul=0,ue&6)throw Error(F(327));var n=t.callbackNode;if(Gi()&&t.callbackNode!==n)return null;var r=kl(t,t===$e?Qe:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=$l(t,r);else{e=r;var i=ue;ue|=2;var s=p_();($e!==t||Qe!==e)&&(Pn=null,is=Ne()+500,Xr(t,e));do try{mx();break}catch(l){f_(t,l)}while(1);Qh(),Ul.current=s,ue=i,De!==null?e=0:($e=null,Qe=0,e=Le)}if(e!==0){if(e===2&&(i=Td(t),i!==0&&(r=i,e=Yd(t,i))),e===1)throw n=Uo,Xr(t,0),sr(t,r),It(t,Ne()),n;if(e===6)sr(t,r);else{if(i=t.current.alternate,!(r&30)&&!fx(i)&&(e=$l(t,r),e===2&&(s=Td(t),s!==0&&(r=s,e=Yd(t,s))),e===1))throw n=Uo,Xr(t,0),sr(t,r),It(t,Ne()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(F(345));case 2:Hr(t,_t,Pn);break;case 3:if(sr(t,r),(r&130023424)===r&&(e=df+500-Ne(),10<e)){if(kl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){pt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Pd(Hr.bind(null,t,_t,Pn),e);break}Hr(t,_t,Pn);break;case 4:if(sr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-sn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ne()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*hx(r/1960))-r,10<r){t.timeoutHandle=Pd(Hr.bind(null,t,_t,Pn),r);break}Hr(t,_t,Pn);break;case 5:Hr(t,_t,Pn);break;default:throw Error(F(329))}}}return It(t,Ne()),t.callbackNode===n?h_.bind(null,t):null}function Yd(t,e){var n=mo;return t.current.memoizedState.isDehydrated&&(Xr(t,e).flags|=256),t=$l(t,e),t!==2&&(e=_t,_t=n,e!==null&&Xd(e)),t}function Xd(t){_t===null?_t=t:_t.push.apply(_t,t)}function fx(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!ln(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function sr(t,e){for(e&=~cf,e&=~ku,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-sn(e),r=1<<n;t[n]=-1,e&=~r}}function vg(t){if(ue&6)throw Error(F(327));Gi();var e=kl(t,0);if(!(e&1))return It(t,Ne()),null;var n=$l(t,e);if(t.tag!==0&&n===2){var r=Td(t);r!==0&&(e=r,n=Yd(t,r))}if(n===1)throw n=Uo,Xr(t,0),sr(t,e),It(t,Ne()),n;if(n===6)throw Error(F(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Hr(t,_t,Pn),It(t,Ne()),null}function hf(t,e){var n=ue;ue|=1;try{return t(e)}finally{ue=n,ue===0&&(is=Ne()+500,Eu&&Lr())}}function ri(t){dr!==null&&dr.tag===0&&!(ue&6)&&Gi();var e=ue;ue|=1;var n=Wt.transition,r=fe;try{if(Wt.transition=null,fe=1,t)return t()}finally{fe=r,Wt.transition=n,ue=e,!(ue&6)&&Lr()}}function ff(){Pt=Ui.current,Ee(Ui)}function Xr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,$I(n)),De!==null)for(n=De.return;n!==null;){var r=n;switch(qh(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Pl();break;case 3:ns(),Ee(Et),Ee(at),tf();break;case 5:ef(r);break;case 4:ns();break;case 13:Ee(xe);break;case 19:Ee(xe);break;case 10:Yh(r.type._context);break;case 22:case 23:ff()}n=n.return}if($e=t,De=t=wr(t.current,null),Qe=Pt=e,Le=0,Uo=null,cf=ku=ni=0,_t=mo=null,Gr!==null){for(e=0;e<Gr.length;e++)if(n=Gr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Gr=null}return t}function f_(t,e){do{var n=De;try{if(Qh(),sl.current=Fl,Ml){for(var r=ke.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ml=!1}if(ti=0,Be=Oe=ke=null,fo=!1,jo=0,uf.current=null,n===null||n.return===null){Le=1,Uo=e,De=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=Qe,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,p=l,m=p.tag;if(!(p.mode&1)&&(m===0||m===11||m===15)){var y=p.alternate;y?(p.updateQueue=y.updateQueue,p.memoizedState=y.memoizedState,p.lanes=y.lanes):(p.updateQueue=null,p.memoizedState=null)}var S=sg(o);if(S!==null){S.flags&=-257,og(S,o,l,s,e),S.mode&1&&ig(s,d,e),e=S,u=d;var R=e.updateQueue;if(R===null){var N=new Set;N.add(u),e.updateQueue=N}else R.add(u);break e}else{if(!(e&1)){ig(s,d,e),pf();break e}u=Error(F(426))}}else if(Ie&&l.mode&1){var O=sg(o);if(O!==null){!(O.flags&65536)&&(O.flags|=256),og(O,o,l,s,e),Gh(rs(u,l));break e}}s=u=rs(u,l),Le!==4&&(Le=2),mo===null?mo=[s]:mo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var k=Yv(s,u,e);Jm(s,k);break e;case 1:l=u;var _=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(vr===null||!vr.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var V=Xv(s,l,e);Jm(s,V);break e}}s=s.return}while(s!==null)}g_(n)}catch(U){e=U,De===n&&n!==null&&(De=n=n.return);continue}break}while(1)}function p_(){var t=Ul.current;return Ul.current=Fl,t===null?Fl:t}function pf(){(Le===0||Le===3||Le===2)&&(Le=4),$e===null||!(ni&268435455)&&!(ku&268435455)||sr($e,Qe)}function $l(t,e){var n=ue;ue|=2;var r=p_();($e!==t||Qe!==e)&&(Pn=null,Xr(t,e));do try{px();break}catch(i){f_(t,i)}while(1);if(Qh(),ue=n,Ul.current=r,De!==null)throw Error(F(261));return $e=null,Qe=0,Le}function px(){for(;De!==null;)m_(De)}function mx(){for(;De!==null&&!UT();)m_(De)}function m_(t){var e=v_(t.alternate,t,Pt);t.memoizedProps=t.pendingProps,e===null?g_(t):De=e,uf.current=null}function g_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=lx(n,e),n!==null){n.flags&=32767,De=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Le=6,De=null;return}}else if(n=ax(n,e,Pt),n!==null){De=n;return}if(e=e.sibling,e!==null){De=e;return}De=e=t}while(e!==null);Le===0&&(Le=5)}function Hr(t,e,n){var r=fe,i=Wt.transition;try{Wt.transition=null,fe=1,gx(t,e,n,r)}finally{Wt.transition=i,fe=r}return null}function gx(t,e,n,r){do Gi();while(dr!==null);if(ue&6)throw Error(F(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(F(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(YT(t,s),t===$e&&(De=$e=null,Qe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||$a||($a=!0,__(xl,function(){return Gi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Wt.transition,Wt.transition=null;var o=fe;fe=1;var l=ue;ue|=4,uf.current=null,cx(t,n),c_(n,t),LI(Cd),Sl=!!Ad,Cd=Ad=null,t.current=n,dx(n),zT(),ue=l,fe=o,Wt.transition=s}else t.current=n;if($a&&($a=!1,dr=t,Bl=i),s=t.pendingLanes,s===0&&(vr=null),HT(n.stateNode),It(t,Ne()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(zl)throw zl=!1,t=Kd,Kd=null,t;return Bl&1&&t.tag!==0&&Gi(),s=t.pendingLanes,s&1?t===Qd?go++:(go=0,Qd=t):go=0,Lr(),null}function Gi(){if(dr!==null){var t=Yy(Bl),e=Wt.transition,n=fe;try{if(Wt.transition=null,fe=16>t?16:t,dr===null)var r=!1;else{if(t=dr,dr=null,Bl=0,ue&6)throw Error(F(331));var i=ue;for(ue|=4,W=t.current;W!==null;){var s=W,o=s.child;if(W.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var d=l[u];for(W=d;W!==null;){var p=W;switch(p.tag){case 0:case 11:case 15:po(8,p,s)}var m=p.child;if(m!==null)m.return=p,W=m;else for(;W!==null;){p=W;var y=p.sibling,S=p.return;if(a_(p),p===d){W=null;break}if(y!==null){y.return=S,W=y;break}W=S}}}var R=s.alternate;if(R!==null){var N=R.child;if(N!==null){R.child=null;do{var O=N.sibling;N.sibling=null,N=O}while(N!==null)}}W=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,W=o;else e:for(;W!==null;){if(s=W,s.flags&2048)switch(s.tag){case 0:case 11:case 15:po(9,s,s.return)}var k=s.sibling;if(k!==null){k.return=s.return,W=k;break e}W=s.return}}var _=t.current;for(W=_;W!==null;){o=W;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,W=x;else e:for(o=_;W!==null;){if(l=W,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:xu(9,l)}}catch(U){Re(l,l.return,U)}if(l===o){W=null;break e}var V=l.sibling;if(V!==null){V.return=l.return,W=V;break e}W=l.return}}if(ue=i,Lr(),yn&&typeof yn.onPostCommitFiberRoot=="function")try{yn.onPostCommitFiberRoot(gu,t)}catch{}r=!0}return r}finally{fe=n,Wt.transition=e}}return!1}function _g(t,e,n){e=rs(n,e),e=Yv(t,e,1),t=yr(t,e,1),e=pt(),t!==null&&(Yo(t,1,e),It(t,e))}function Re(t,e,n){if(t.tag===3)_g(t,t,n);else for(;e!==null;){if(e.tag===3){_g(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(vr===null||!vr.has(r))){t=rs(n,t),t=Xv(e,t,1),e=yr(e,t,1),t=pt(),e!==null&&(Yo(e,1,t),It(e,t));break}}e=e.return}}function yx(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=pt(),t.pingedLanes|=t.suspendedLanes&n,$e===t&&(Qe&n)===n&&(Le===4||Le===3&&(Qe&130023424)===Qe&&500>Ne()-df?Xr(t,0):cf|=n),It(t,e)}function y_(t,e){e===0&&(t.mode&1?(e=Da,Da<<=1,!(Da&130023424)&&(Da=4194304)):e=1);var n=pt();t=zn(t,e),t!==null&&(Yo(t,e,n),It(t,n))}function vx(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),y_(t,n)}function _x(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(F(314))}r!==null&&r.delete(e),y_(t,n)}var v_;v_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Et.current)wt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return wt=!1,ox(t,e,n);wt=!!(t.flags&131072)}else wt=!1,Ie&&e.flags&1048576&&Tv(e,Dl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;al(t,e),t=e.pendingProps;var i=Zi(e,at.current);qi(e,n),i=rf(null,e,r,t,i,n);var s=sf();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Tt(r)?(s=!0,Nl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Jh(e),i.updater=Iu,e.stateNode=i,i._reactInternals=e,jd(e,r,t,n),e=Ud(null,e,r,!0,s,n)):(e.tag=0,Ie&&s&&Wh(e),ft(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(al(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=Ex(r),t=Jt(r,t),i){case 0:e=Fd(null,e,r,t,n);break e;case 1:e=ug(null,e,r,t,n);break e;case 11:e=ag(null,e,r,t,n);break e;case 14:e=lg(null,e,r,Jt(r.type,t),n);break e}throw Error(F(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Jt(r,i),Fd(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Jt(r,i),ug(t,e,r,i,n);case 3:e:{if(t_(e),t===null)throw Error(F(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Cv(t,e),Ll(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=rs(Error(F(423)),e),e=cg(t,e,r,n,i);break e}else if(r!==i){i=rs(Error(F(424)),e),e=cg(t,e,r,n,i);break e}else for(bt=gr(e.stateNode.containerInfo.firstChild),Dt=e,Ie=!0,en=null,n=Sv(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(es(),r===i){e=Bn(t,e,n);break e}ft(t,e,r,n)}e=e.child}return e;case 5:return Rv(e),t===null&&Vd(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Rd(r,i)?o=null:s!==null&&Rd(r,s)&&(e.flags|=32),e_(t,e),ft(t,e,o,n),e.child;case 6:return t===null&&Vd(e),null;case 13:return n_(t,e,n);case 4:return Zh(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ts(e,null,r,n):ft(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Jt(r,i),ag(t,e,r,i,n);case 7:return ft(t,e,e.pendingProps,n),e.child;case 8:return ft(t,e,e.pendingProps.children,n),e.child;case 12:return ft(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,me(Vl,r._currentValue),r._currentValue=o,s!==null)if(ln(s.value,o)){if(s.children===i.children&&!Et.current){e=Bn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Ln(-1,n&-n),u.tag=2;var d=s.updateQueue;if(d!==null){d=d.shared;var p=d.pending;p===null?u.next=u:(u.next=p.next,p.next=u),d.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Od(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(F(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Od(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ft(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,qi(e,n),i=qt(i),r=r(i),e.flags|=1,ft(t,e,r,n),e.child;case 14:return r=e.type,i=Jt(r,e.pendingProps),i=Jt(r.type,i),lg(t,e,r,i,n);case 15:return Jv(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Jt(r,i),al(t,e),e.tag=1,Tt(r)?(t=!0,Nl(e)):t=!1,qi(e,n),Qv(e,r,i),jd(e,r,i,n),Ud(null,e,r,!0,t,n);case 19:return r_(t,e,n);case 22:return Zv(t,e,n)}throw Error(F(156,e.tag))};function __(t,e){return qy(t,e)}function wx(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ht(t,e,n,r){return new wx(t,e,n,r)}function mf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ex(t){if(typeof t=="function")return mf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Dh)return 11;if(t===Vh)return 14}return 2}function wr(t,e){var n=t.alternate;return n===null?(n=Ht(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function cl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")mf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Pi:return Jr(n.children,i,s,e);case bh:o=8,i|=8;break;case ad:return t=Ht(12,n,e,i|2),t.elementType=ad,t.lanes=s,t;case ld:return t=Ht(13,n,e,i),t.elementType=ld,t.lanes=s,t;case ud:return t=Ht(19,n,e,i),t.elementType=ud,t.lanes=s,t;case Ry:return Su(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Ay:o=10;break e;case Cy:o=9;break e;case Dh:o=11;break e;case Vh:o=14;break e;case nr:o=16,r=null;break e}throw Error(F(130,t==null?t:typeof t,""))}return e=Ht(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Jr(t,e,n,r){return t=Ht(7,t,r,e),t.lanes=n,t}function Su(t,e,n,r){return t=Ht(22,t,r,e),t.elementType=Ry,t.lanes=n,t.stateNode={isHidden:!1},t}function Bc(t,e,n){return t=Ht(6,t,null,e),t.lanes=n,t}function $c(t,e,n){return e=Ht(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Tx(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ic(0),this.expirationTimes=Ic(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ic(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function gf(t,e,n,r,i,s,o,l,u){return t=new Tx(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ht(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Jh(s),t}function Ix(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ri,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function w_(t){if(!t)return Sr;t=t._reactInternals;e:{if(di(t)!==t||t.tag!==1)throw Error(F(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Tt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(F(171))}if(t.tag===1){var n=t.type;if(Tt(n))return wv(t,n,e)}return e}function E_(t,e,n,r,i,s,o,l,u){return t=gf(n,r,!0,t,i,s,o,l,u),t.context=w_(null),n=t.current,r=pt(),i=_r(n),s=Ln(r,i),s.callback=e??null,yr(n,s,i),t.current.lanes=i,Yo(t,i,r),It(t,r),t}function Au(t,e,n,r){var i=e.current,s=pt(),o=_r(i);return n=w_(n),e.context===null?e.context=n:e.pendingContext=n,e=Ln(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=yr(i,e,o),t!==null&&(on(t,i,o,s),il(t,i,o)),o}function Hl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function wg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function yf(t,e){wg(t,e),(t=t.alternate)&&wg(t,e)}function xx(){return null}var T_=typeof reportError=="function"?reportError:function(t){console.error(t)};function vf(t){this._internalRoot=t}Cu.prototype.render=vf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(F(409));Au(t,e,null,null)};Cu.prototype.unmount=vf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ri(function(){Au(null,t,null,null)}),e[Un]=null}};function Cu(t){this._internalRoot=t}Cu.prototype.unstable_scheduleHydration=function(t){if(t){var e=Zy();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ir.length&&e!==0&&e<ir[n].priority;n++);ir.splice(n,0,t),n===0&&tv(t)}};function _f(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ru(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Eg(){}function kx(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var d=Hl(o);s.call(d)}}var o=E_(e,r,t,0,null,!1,!1,"",Eg);return t._reactRootContainer=o,t[Un]=o.current,bo(t.nodeType===8?t.parentNode:t),ri(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var d=Hl(u);l.call(d)}}var u=gf(t,0,!1,null,null,!1,!1,"",Eg);return t._reactRootContainer=u,t[Un]=u.current,bo(t.nodeType===8?t.parentNode:t),ri(function(){Au(e,u,n,r)}),u}function Pu(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=Hl(o);l.call(u)}}Au(e,o,t,i)}else o=kx(n,e,t,i,r);return Hl(o)}Xy=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Zs(e.pendingLanes);n!==0&&(jh(e,n|1),It(e,Ne()),!(ue&6)&&(is=Ne()+500,Lr()))}break;case 13:ri(function(){var r=zn(t,1);if(r!==null){var i=pt();on(r,t,1,i)}}),yf(t,1)}};Mh=function(t){if(t.tag===13){var e=zn(t,134217728);if(e!==null){var n=pt();on(e,t,134217728,n)}yf(t,134217728)}};Jy=function(t){if(t.tag===13){var e=_r(t),n=zn(t,e);if(n!==null){var r=pt();on(n,t,e,r)}yf(t,e)}};Zy=function(){return fe};ev=function(t,e){var n=fe;try{return fe=t,e()}finally{fe=n}};_d=function(t,e,n){switch(e){case"input":if(hd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=wu(r);if(!i)throw Error(F(90));Ny(r),hd(r,i)}}}break;case"textarea":Dy(t,n);break;case"select":e=n.value,e!=null&&Bi(t,!!n.multiple,e,!1)}};Uy=hf;zy=ri;var Sx={usingClientEntryPoint:!1,Events:[Jo,Vi,wu,My,Fy,hf]},Ks={findFiberByHostInstance:qr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ax={bundleType:Ks.bundleType,version:Ks.version,rendererPackageName:Ks.rendererPackageName,rendererConfig:Ks.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Kn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Hy(t),t===null?null:t.stateNode},findFiberByHostInstance:Ks.findFiberByHostInstance||xx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ha=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ha.isDisabled&&Ha.supportsFiber)try{gu=Ha.inject(Ax),yn=Ha}catch{}}Lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Sx;Lt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_f(e))throw Error(F(200));return Ix(t,e,null,n)};Lt.createRoot=function(t,e){if(!_f(t))throw Error(F(299));var n=!1,r="",i=T_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=gf(t,1,!1,null,null,n,!1,r,i),t[Un]=e.current,bo(t.nodeType===8?t.parentNode:t),new vf(e)};Lt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(F(188)):(t=Object.keys(t).join(","),Error(F(268,t)));return t=Hy(e),t=t===null?null:t.stateNode,t};Lt.flushSync=function(t){return ri(t)};Lt.hydrate=function(t,e,n){if(!Ru(e))throw Error(F(200));return Pu(null,t,e,!0,n)};Lt.hydrateRoot=function(t,e,n){if(!_f(t))throw Error(F(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=T_;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=E_(e,null,t,1,n??null,i,!1,s,o),t[Un]=e.current,bo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Cu(e)};Lt.render=function(t,e,n){if(!Ru(e))throw Error(F(200));return Pu(null,t,e,!1,n)};Lt.unmountComponentAtNode=function(t){if(!Ru(t))throw Error(F(40));return t._reactRootContainer?(ri(function(){Pu(null,null,t,!1,function(){t._reactRootContainer=null,t[Un]=null})}),!0):!1};Lt.unstable_batchedUpdates=hf;Lt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Ru(n))throw Error(F(200));if(t==null||t._reactInternals===void 0)throw Error(F(38));return Pu(t,e,n,!1,r)};Lt.version="18.3.1-next-f1338f8080-20240426";function I_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(I_)}catch(t){console.error(t)}}I_(),Iy.exports=Lt;var Cx=Iy.exports,Tg=Cx;sd.createRoot=Tg.createRoot,sd.hydrateRoot=Tg.hydrateRoot;const Rx=()=>{};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Px=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},k_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,d=u?t[i+2]:0,p=s>>2,m=(s&3)<<4|l>>4;let y=(l&15)<<2|d>>6,S=d&63;u||(S=64,o||(y=64)),r.push(n[p],n[m],n[y],n[S])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(x_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Px(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const d=i<t.length?n[t.charAt(i)]:64;++i;const m=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||d==null||m==null)throw new Nx;const y=s<<2|l>>4;if(r.push(y),d!==64){const S=l<<4&240|d>>2;if(r.push(S),m!==64){const R=d<<6&192|m;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Nx extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const bx=function(t){const e=x_(t);return k_.encodeByteArray(e,!0)},Wl=function(t){return bx(t).replace(/\./g,"")},S_=function(t){try{return k_.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dx(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vx=()=>Dx().__FIREBASE_DEFAULTS__,Ox=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Lx=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&S_(t[1]);return e&&JSON.parse(e)},Nu=()=>{try{return Rx()||Vx()||Ox()||Lx()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},A_=t=>{var e,n;return(n=(e=Nu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},C_=t=>{const e=A_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},R_=()=>{var t;return(t=Nu())===null||t===void 0?void 0:t.config},P_=t=>{var e;return(e=Nu())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jx{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gs(t){return t.endsWith(".cloudworkstations.dev")}async function wf(t){return(await fetch(t,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N_(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),l="";return[Wl(JSON.stringify(n)),Wl(JSON.stringify(o)),l].join(".")}const yo={};function Mx(){const t={prod:[],emulator:[]};for(const e of Object.keys(yo))yo[e]?t.emulator.push(e):t.prod.push(e);return t}function Fx(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Ig=!1;function Ef(t,e){if(typeof window>"u"||typeof document>"u"||!gs(window.location.host)||yo[t]===e||yo[t]||Ig)return;yo[t]=e;function n(y){return`__firebase__banner__${y}`}const r="__firebase__banner",s=Mx().prod.length>0;function o(){const y=document.getElementById(r);y&&y.remove()}function l(y){y.style.display="flex",y.style.background="#7faaf0",y.style.position="fixed",y.style.bottom="5px",y.style.left="5px",y.style.padding=".5em",y.style.borderRadius="5px",y.style.alignItems="center"}function u(y,S){y.setAttribute("width","24"),y.setAttribute("id",S),y.setAttribute("height","24"),y.setAttribute("viewBox","0 0 24 24"),y.setAttribute("fill","none"),y.style.marginLeft="-6px"}function d(){const y=document.createElement("span");return y.style.cursor="pointer",y.style.marginLeft="16px",y.style.fontSize="24px",y.innerHTML=" &times;",y.onclick=()=>{Ig=!0,o()},y}function p(y,S){y.setAttribute("id",S),y.innerText="Learn more",y.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",y.setAttribute("target","__blank"),y.style.paddingLeft="5px",y.style.textDecoration="underline"}function m(){const y=Fx(r),S=n("text"),R=document.getElementById(S)||document.createElement("span"),N=n("learnmore"),O=document.getElementById(N)||document.createElement("a"),k=n("preprendIcon"),_=document.getElementById(k)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(y.created){const x=y.element;l(x),p(O,N);const V=d();u(_,k),x.append(_,R,O,V),document.body.appendChild(x)}s?(R.innerText="Preview backend disconnected.",_.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(_.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,R.innerText="Preview backend running in this workspace."),R.setAttribute("id",S)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",m):m()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ux(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(lt())}function zx(){var t;const e=(t=Nu())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Bx(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function b_(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function $x(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Hx(){const t=lt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Wx(){return!zx()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function D_(){try{return typeof indexedDB=="object"}catch{return!1}}function V_(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function qx(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gx="FirebaseError";class Qt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Gx,Object.setPrototypeOf(this,Qt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,hi.prototype.create)}}class hi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Kx(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Qt(i,l,r)}}function Kx(t,e){return t.replace(Qx,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Qx=/\{\$([^}]+)}/g;function Yx(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ar(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(xg(s)&&xg(o)){if(!Ar(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function xg(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ea(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function to(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function no(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Xx(t,e){const n=new Jx(t,e);return n.subscribe.bind(n)}class Jx{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Zx(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Hc),i.error===void 0&&(i.error=Hc),i.complete===void 0&&(i.complete=Hc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Zx(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Hc(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ek=1e3,tk=2,nk=4*60*60*1e3,rk=.5;function kg(t,e=ek,n=tk){const r=e*Math.pow(n,t),i=Math.round(rk*r*(Math.random()-.5)*2);return Math.min(nk,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fe(t){return t&&t._delegate?t._delegate:t}class Kt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ik{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new jx;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ok(e))try{this.getOrInitializeService({instanceIdentifier:Wr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Wr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Wr){return this.instances.has(e)}getOptions(e=Wr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:sk(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Wr){return this.component?this.component.multipleInstances?e:Wr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function sk(t){return t===Wr?void 0:t}function ok(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ak{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new ik(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var oe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(oe||(oe={}));const lk={debug:oe.DEBUG,verbose:oe.VERBOSE,info:oe.INFO,warn:oe.WARN,error:oe.ERROR,silent:oe.SILENT},uk=oe.INFO,ck={[oe.DEBUG]:"log",[oe.VERBOSE]:"log",[oe.INFO]:"info",[oe.WARN]:"warn",[oe.ERROR]:"error"},dk=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=ck[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class bu{constructor(e){this.name=e,this._logLevel=uk,this._logHandler=dk,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in oe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?lk[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,oe.DEBUG,...e),this._logHandler(this,oe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,oe.VERBOSE,...e),this._logHandler(this,oe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,oe.INFO,...e),this._logHandler(this,oe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,oe.WARN,...e),this._logHandler(this,oe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,oe.ERROR,...e),this._logHandler(this,oe.ERROR,...e)}}const hk=(t,e)=>e.some(n=>t instanceof n);let Sg,Ag;function fk(){return Sg||(Sg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function pk(){return Ag||(Ag=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const O_=new WeakMap,Jd=new WeakMap,L_=new WeakMap,Wc=new WeakMap,Tf=new WeakMap;function mk(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Er(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&O_.set(n,t)}).catch(()=>{}),Tf.set(e,t),e}function gk(t){if(Jd.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Jd.set(t,e)}let Zd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Jd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||L_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Er(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function yk(t){Zd=t(Zd)}function vk(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(qc(this),e,...n);return L_.set(r,e.sort?e.sort():[e]),Er(r)}:pk().includes(t)?function(...e){return t.apply(qc(this),e),Er(O_.get(this))}:function(...e){return Er(t.apply(qc(this),e))}}function _k(t){return typeof t=="function"?vk(t):(t instanceof IDBTransaction&&gk(t),hk(t,fk())?new Proxy(t,Zd):t)}function Er(t){if(t instanceof IDBRequest)return mk(t);if(Wc.has(t))return Wc.get(t);const e=_k(t);return e!==t&&(Wc.set(t,e),Tf.set(e,t)),e}const qc=t=>Tf.get(t);function j_(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=Er(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Er(o.result),u.oldVersion,u.newVersion,Er(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),l}const wk=["get","getKey","getAll","getAllKeys","count"],Ek=["put","add","delete","clear"],Gc=new Map;function Cg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Gc.get(e))return Gc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Ek.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||wk.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let d=u.store;return r&&(d=d.index(l.shift())),(await Promise.all([d[n](...l),i&&u.done]))[0]};return Gc.set(e,s),s}yk(t=>({...t,get:(e,n,r)=>Cg(e,n)||t.get(e,n,r),has:(e,n)=>!!Cg(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tk{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Ik(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Ik(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const eh="@firebase/app",Rg="0.13.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $n=new bu("@firebase/app"),xk="@firebase/app-compat",kk="@firebase/analytics-compat",Sk="@firebase/analytics",Ak="@firebase/app-check-compat",Ck="@firebase/app-check",Rk="@firebase/auth",Pk="@firebase/auth-compat",Nk="@firebase/database",bk="@firebase/data-connect",Dk="@firebase/database-compat",Vk="@firebase/functions",Ok="@firebase/functions-compat",Lk="@firebase/installations",jk="@firebase/installations-compat",Mk="@firebase/messaging",Fk="@firebase/messaging-compat",Uk="@firebase/performance",zk="@firebase/performance-compat",Bk="@firebase/remote-config",$k="@firebase/remote-config-compat",Hk="@firebase/storage",Wk="@firebase/storage-compat",qk="@firebase/firestore",Gk="@firebase/ai",Kk="@firebase/firestore-compat",Qk="firebase",Yk="11.8.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const th="[DEFAULT]",Xk={[eh]:"fire-core",[xk]:"fire-core-compat",[Sk]:"fire-analytics",[kk]:"fire-analytics-compat",[Ck]:"fire-app-check",[Ak]:"fire-app-check-compat",[Rk]:"fire-auth",[Pk]:"fire-auth-compat",[Nk]:"fire-rtdb",[bk]:"fire-data-connect",[Dk]:"fire-rtdb-compat",[Vk]:"fire-fn",[Ok]:"fire-fn-compat",[Lk]:"fire-iid",[jk]:"fire-iid-compat",[Mk]:"fire-fcm",[Fk]:"fire-fcm-compat",[Uk]:"fire-perf",[zk]:"fire-perf-compat",[Bk]:"fire-rc",[$k]:"fire-rc-compat",[Hk]:"fire-gcs",[Wk]:"fire-gcs-compat",[qk]:"fire-fst",[Kk]:"fire-fst-compat",[Gk]:"fire-vertex","fire-js":"fire-js",[Qk]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ql=new Map,Jk=new Map,nh=new Map;function Pg(t,e){try{t.container.addComponent(e)}catch(n){$n.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function un(t){const e=t.name;if(nh.has(e))return $n.debug(`There were multiple attempts to register component ${e}.`),!1;nh.set(e,t);for(const n of ql.values())Pg(n,t);for(const n of Jk.values())Pg(n,t);return!0}function jr(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Nt(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zk={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Tr=new hi("app","Firebase",Zk);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eS{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Kt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Tr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fi=Yk;function M_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:th,automaticDataCollectionEnabled:!0},e),i=r.name;if(typeof i!="string"||!i)throw Tr.create("bad-app-name",{appName:String(i)});if(n||(n=R_()),!n)throw Tr.create("no-options");const s=ql.get(i);if(s){if(Ar(n,s.options)&&Ar(r,s.config))return s;throw Tr.create("duplicate-app",{appName:i})}const o=new ak(i);for(const u of nh.values())o.addComponent(u);const l=new eS(n,r,o);return ql.set(i,l),l}function Du(t=th){const e=ql.get(t);if(!e&&t===th&&R_())return M_();if(!e)throw Tr.create("no-app",{appName:t});return e}function xt(t,e,n){var r;let i=(r=Xk[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),$n.warn(l.join(" "));return}un(new Kt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tS="firebase-heartbeat-database",nS=1,zo="firebase-heartbeat-store";let Kc=null;function F_(){return Kc||(Kc=j_(tS,nS,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(zo)}catch(n){console.warn(n)}}}}).catch(t=>{throw Tr.create("idb-open",{originalErrorMessage:t.message})})),Kc}async function rS(t){try{const n=(await F_()).transaction(zo),r=await n.objectStore(zo).get(U_(t));return await n.done,r}catch(e){if(e instanceof Qt)$n.warn(e.message);else{const n=Tr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});$n.warn(n.message)}}}async function Ng(t,e){try{const r=(await F_()).transaction(zo,"readwrite");await r.objectStore(zo).put(e,U_(t)),await r.done}catch(n){if(n instanceof Qt)$n.warn(n.message);else{const r=Tr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});$n.warn(r.message)}}}function U_(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iS=1024,sS=30;class oS{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new lS(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=bg();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>sS){const o=uS(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){$n.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=bg(),{heartbeatsToSend:r,unsentEntries:i}=aS(this._heartbeatsCache.heartbeats),s=Wl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return $n.warn(n),""}}}function bg(){return new Date().toISOString().substring(0,10)}function aS(t,e=iS){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Dg(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Dg(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class lS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return D_()?V_().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await rS(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ng(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ng(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Dg(t){return Wl(JSON.stringify({version:2,heartbeats:t})).length}function uS(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cS(t){un(new Kt("platform-logger",e=>new Tk(e),"PRIVATE")),un(new Kt("heartbeat",e=>new oS(e),"PRIVATE")),xt(eh,Rg,t),xt(eh,Rg,"esm2017"),xt("fire-js","")}cS("");var dS="firebase",hS="11.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */xt(dS,hS,"app");const z_="@firebase/installations",If="0.6.17";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B_=1e4,$_=`w:${If}`,H_="FIS_v2",fS="https://firebaseinstallations.googleapis.com/v1",pS=60*60*1e3,mS="installations",gS="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yS={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},ii=new hi(mS,gS,yS);function W_(t){return t instanceof Qt&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q_({projectId:t}){return`${fS}/projects/${t}/installations`}function G_(t){return{token:t.token,requestStatus:2,expiresIn:_S(t.expiresIn),creationTime:Date.now()}}async function K_(t,e){const r=(await e.json()).error;return ii.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Q_({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function vS(t,{refreshToken:e}){const n=Q_(t);return n.append("Authorization",wS(e)),n}async function Y_(t){const e=await t();return e.status>=500&&e.status<600?t():e}function _S(t){return Number(t.replace("s","000"))}function wS(t){return`${H_} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ES({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=q_(t),i=Q_(t),s=e.getImmediate({optional:!0});if(s){const d=await s.getHeartbeatsHeader();d&&i.append("x-firebase-client",d)}const o={fid:n,authVersion:H_,appId:t.appId,sdkVersion:$_},l={method:"POST",headers:i,body:JSON.stringify(o)},u=await Y_(()=>fetch(r,l));if(u.ok){const d=await u.json();return{fid:d.fid||n,registrationStatus:2,refreshToken:d.refreshToken,authToken:G_(d.authToken)}}else throw await K_("Create Installation",u)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X_(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TS(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IS=/^[cdef][\w-]{21}$/,rh="";function xS(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=kS(t);return IS.test(n)?n:rh}catch{return rh}}function kS(t){return TS(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vu(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J_=new Map;function Z_(t,e){const n=Vu(t);e1(n,e),SS(n,e)}function e1(t,e){const n=J_.get(t);if(n)for(const r of n)r(e)}function SS(t,e){const n=AS();n&&n.postMessage({key:t,fid:e}),CS()}let Qr=null;function AS(){return!Qr&&"BroadcastChannel"in self&&(Qr=new BroadcastChannel("[Firebase] FID Change"),Qr.onmessage=t=>{e1(t.data.key,t.data.fid)}),Qr}function CS(){J_.size===0&&Qr&&(Qr.close(),Qr=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RS="firebase-installations-database",PS=1,si="firebase-installations-store";let Qc=null;function xf(){return Qc||(Qc=j_(RS,PS,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(si)}}})),Qc}async function Gl(t,e){const n=Vu(t),i=(await xf()).transaction(si,"readwrite"),s=i.objectStore(si),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&Z_(t,e.fid),e}async function t1(t){const e=Vu(t),r=(await xf()).transaction(si,"readwrite");await r.objectStore(si).delete(e),await r.done}async function Ou(t,e){const n=Vu(t),i=(await xf()).transaction(si,"readwrite"),s=i.objectStore(si),o=await s.get(n),l=e(o);return l===void 0?await s.delete(n):await s.put(l,n),await i.done,l&&(!o||o.fid!==l.fid)&&Z_(t,l.fid),l}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kf(t){let e;const n=await Ou(t.appConfig,r=>{const i=NS(r),s=bS(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===rh?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function NS(t){const e=t||{fid:xS(),registrationStatus:0};return n1(e)}function bS(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(ii.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=DS(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:VS(t)}:{installationEntry:e}}async function DS(t,e){try{const n=await ES(t,e);return Gl(t.appConfig,n)}catch(n){throw W_(n)&&n.customData.serverCode===409?await t1(t.appConfig):await Gl(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function VS(t){let e=await Vg(t.appConfig);for(;e.registrationStatus===1;)await X_(100),e=await Vg(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await kf(t);return r||n}return e}function Vg(t){return Ou(t,e=>{if(!e)throw ii.create("installation-not-found");return n1(e)})}function n1(t){return OS(t)?{fid:t.fid,registrationStatus:0}:t}function OS(t){return t.registrationStatus===1&&t.registrationTime+B_<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LS({appConfig:t,heartbeatServiceProvider:e},n){const r=jS(t,n),i=vS(t,n),s=e.getImmediate({optional:!0});if(s){const d=await s.getHeartbeatsHeader();d&&i.append("x-firebase-client",d)}const o={installation:{sdkVersion:$_,appId:t.appId}},l={method:"POST",headers:i,body:JSON.stringify(o)},u=await Y_(()=>fetch(r,l));if(u.ok){const d=await u.json();return G_(d)}else throw await K_("Generate Auth Token",u)}function jS(t,{fid:e}){return`${q_(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sf(t,e=!1){let n;const r=await Ou(t.appConfig,s=>{if(!r1(s))throw ii.create("not-registered");const o=s.authToken;if(!e&&US(o))return s;if(o.requestStatus===1)return n=MS(t,e),s;{if(!navigator.onLine)throw ii.create("app-offline");const l=BS(s);return n=FS(t,l),l}});return n?await n:r.authToken}async function MS(t,e){let n=await Og(t.appConfig);for(;n.authToken.requestStatus===1;)await X_(100),n=await Og(t.appConfig);const r=n.authToken;return r.requestStatus===0?Sf(t,e):r}function Og(t){return Ou(t,e=>{if(!r1(e))throw ii.create("not-registered");const n=e.authToken;return $S(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function FS(t,e){try{const n=await LS(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Gl(t.appConfig,r),n}catch(n){if(W_(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await t1(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Gl(t.appConfig,r)}throw n}}function r1(t){return t!==void 0&&t.registrationStatus===2}function US(t){return t.requestStatus===2&&!zS(t)}function zS(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+pS}function BS(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function $S(t){return t.requestStatus===1&&t.requestTime+B_<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HS(t){const e=t,{installationEntry:n,registrationPromise:r}=await kf(e);return r?r.catch(console.error):Sf(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WS(t,e=!1){const n=t;return await qS(n),(await Sf(n,e)).token}async function qS(t){const{registrationPromise:e}=await kf(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GS(t){if(!t||!t.options)throw Yc("App Configuration");if(!t.name)throw Yc("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Yc(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Yc(t){return ii.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i1="installations",KS="installations-internal",QS=t=>{const e=t.getProvider("app").getImmediate(),n=GS(e),r=jr(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},YS=t=>{const e=t.getProvider("app").getImmediate(),n=jr(e,i1).getImmediate();return{getId:()=>HS(n),getToken:i=>WS(n,i)}};function XS(){un(new Kt(i1,QS,"PUBLIC")),un(new Kt(KS,YS,"PRIVATE"))}XS();xt(z_,If);xt(z_,If,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kl="analytics",JS="firebase_id",ZS="origin",eA=60*1e3,tA="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Af="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kt=new bu("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nA={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Vt=new hi("analytics","Analytics",nA);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rA(t){if(!t.startsWith(Af)){const e=Vt.create("invalid-gtag-resource",{gtagURL:t});return kt.warn(e.message),""}return t}function s1(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function iA(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function sA(t,e){const n=iA("firebase-js-sdk-policy",{createScriptURL:rA}),r=document.createElement("script"),i=`${Af}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function oA(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function aA(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const u=(await s1(n)).find(d=>d.measurementId===i);u&&await e[u.appId]}}catch(l){kt.error(l)}t("config",i,s)}async function lA(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const l=await s1(n);for(const u of o){const d=l.find(m=>m.measurementId===u),p=d&&e[d.appId];if(p)s.push(p);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){kt.error(s)}}function uA(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[l,u]=o;await lA(t,e,n,l,u)}else if(s==="config"){const[l,u]=o;await aA(t,e,n,r,l,u)}else if(s==="consent"){const[l,u]=o;t("consent",l,u)}else if(s==="get"){const[l,u,d]=o;t("get",l,u,d)}else if(s==="set"){const[l]=o;t("set",l)}else t(s,...o)}catch(l){kt.error(l)}}return i}function cA(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=uA(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function dA(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Af)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hA=30,fA=1e3;class pA{constructor(e={},n=fA){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const o1=new pA;function mA(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function gA(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:mA(r)},s=tA.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let l="";try{const u=await o.json();!((e=u.error)===null||e===void 0)&&e.message&&(l=u.error.message)}catch{}throw Vt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:l})}return o.json()}async function yA(t,e=o1,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw Vt.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw Vt.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new wA;return setTimeout(async()=>{l.abort()},n!==void 0?n:eA),a1({appId:r,apiKey:i,measurementId:s},o,l,e)}async function a1(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=o1){var s;const{appId:o,measurementId:l}=t;try{await vA(r,e)}catch(u){if(l)return kt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:l};throw u}try{const u=await gA(t);return i.deleteThrottleMetadata(o),u}catch(u){const d=u;if(!_A(d)){if(i.deleteThrottleMetadata(o),l)return kt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${d==null?void 0:d.message}]`),{appId:o,measurementId:l};throw u}const p=Number((s=d==null?void 0:d.customData)===null||s===void 0?void 0:s.httpStatus)===503?kg(n,i.intervalMillis,hA):kg(n,i.intervalMillis),m={throttleEndTimeMillis:Date.now()+p,backoffCount:n+1};return i.setThrottleMetadata(o,m),kt.debug(`Calling attemptFetch again in ${p} millis`),a1(t,m,r,i)}}function vA(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(Vt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function _A(t){if(!(t instanceof Qt)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class wA{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function EA(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TA(){if(D_())try{await V_()}catch(t){return kt.warn(Vt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return kt.warn(Vt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function IA(t,e,n,r,i,s,o){var l;const u=yA(t);u.then(S=>{n[S.measurementId]=S.appId,t.options.measurementId&&S.measurementId!==t.options.measurementId&&kt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${S.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(S=>kt.error(S)),e.push(u);const d=TA().then(S=>{if(S)return r.getId()}),[p,m]=await Promise.all([u,d]);dA(s)||sA(s,p.measurementId),i("js",new Date);const y=(l=o==null?void 0:o.config)!==null&&l!==void 0?l:{};return y[ZS]="firebase",y.update=!0,m!=null&&(y[JS]=m),i("config",p.measurementId,y),p.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xA{constructor(e){this.app=e}_delete(){return delete vo[this.app.options.appId],Promise.resolve()}}let vo={},Lg=[];const jg={};let Xc="dataLayer",kA="gtag",Mg,l1,Fg=!1;function SA(){const t=[];if(b_()&&t.push("This is a browser extension environment."),qx()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=Vt.create("invalid-analytics-context",{errorInfo:e});kt.warn(n.message)}}function AA(t,e,n){SA();const r=t.options.appId;if(!r)throw Vt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)kt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Vt.create("no-api-key");if(vo[r]!=null)throw Vt.create("already-exists",{id:r});if(!Fg){oA(Xc);const{wrappedGtag:s,gtagCore:o}=cA(vo,Lg,jg,Xc,kA);l1=s,Mg=o,Fg=!0}return vo[r]=IA(t,Lg,jg,e,Mg,Xc,n),new xA(t)}function CA(t=Du()){t=Fe(t);const e=jr(t,Kl);return e.isInitialized()?e.getImmediate():RA(t)}function RA(t,e={}){const n=jr(t,Kl);if(n.isInitialized()){const i=n.getImmediate();if(Ar(e,n.getOptions()))return i;throw Vt.create("already-initialized")}return n.initialize({options:e})}function PA(t,e,n,r){t=Fe(t),EA(l1,vo[t.app.options.appId],e,n,r).catch(i=>kt.error(i))}const Ug="@firebase/analytics",zg="0.10.16";function NA(){un(new Kt(Kl,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return AA(r,i,n)},"PUBLIC")),un(new Kt("analytics-internal",t,"PRIVATE")),xt(Ug,zg),xt(Ug,zg,"esm2017");function t(e){try{const n=e.getProvider(Kl).getImmediate();return{logEvent:(r,i,s)=>PA(n,r,i,s)}}catch(n){throw Vt.create("interop-component-reg-failed",{reason:n})}}}NA();function Cf(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function u1(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const bA=u1,c1=new hi("auth","Firebase",u1());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ql=new bu("@firebase/auth");function DA(t,...e){Ql.logLevel<=oe.WARN&&Ql.warn(`Auth (${fi}): ${t}`,...e)}function dl(t,...e){Ql.logLevel<=oe.ERROR&&Ql.error(`Auth (${fi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cn(t,...e){throw Rf(t,...e)}function _n(t,...e){return Rf(t,...e)}function d1(t,e,n){const r=Object.assign(Object.assign({},bA()),{[e]:n});return new hi("auth","Firebase",r).create(e,{appName:t.name})}function jn(t){return d1(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Rf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return c1.create(t,...e)}function Y(t,e,...n){if(!t)throw Rf(e,...n)}function Vn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw dl(e),new Error(e)}function Hn(t,e){t||Vn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ih(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function VA(){return Bg()==="http:"||Bg()==="https:"}function Bg(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(VA()||b_()||"connection"in navigator)?navigator.onLine:!0}function LA(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(e,n){this.shortDelay=e,this.longDelay=n,Hn(n>e,"Short delay should be less than long delay!"),this.isMobile=Ux()||$x()}get(){return OA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pf(t,e){Hn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h1{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Vn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Vn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Vn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MA=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],FA=new ta(3e4,6e4);function Mr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Qn(t,e,n,r,i={}){return f1(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=ea(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const d=Object.assign({method:e,headers:u},s);return Bx()||(d.referrerPolicy="no-referrer"),t.emulatorConfig&&gs(t.emulatorConfig.host)&&(d.credentials="include"),h1.fetch()(await p1(t,t.config.apiHost,n,l),d)})}async function f1(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},jA),e);try{const i=new zA(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Wa(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,d]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Wa(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Wa(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Wa(t,"user-disabled",o);const p=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw d1(t,p,d);cn(t,p)}}catch(i){if(i instanceof Qt)throw i;cn(t,"network-request-failed",{message:String(i)})}}async function na(t,e,n,r,i={}){const s=await Qn(t,e,n,r,i);return"mfaPendingCredential"in s&&cn(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function p1(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?Pf(t.config,i):`${t.config.apiScheme}://${i}`;return MA.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function UA(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class zA{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(_n(this.auth,"network-request-failed")),FA.get())})}}function Wa(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=_n(t,e,r);return i.customData._tokenResponse=n,i}function $g(t){return t!==void 0&&t.enterprise!==void 0}class BA{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return UA(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function $A(t,e){return Qn(t,"GET","/v2/recaptchaConfig",Mr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HA(t,e){return Qn(t,"POST","/v1/accounts:delete",e)}async function Yl(t,e){return Qn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _o(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function WA(t,e=!1){const n=Fe(t),r=await n.getIdToken(e),i=Nf(r);Y(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:_o(Jc(i.auth_time)),issuedAtTime:_o(Jc(i.iat)),expirationTime:_o(Jc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Jc(t){return Number(t)*1e3}function Nf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return dl("JWT malformed, contained fewer than 3 sections"),null;try{const i=S_(n);return i?JSON.parse(i):(dl("Failed to decode base64 JWT payload"),null)}catch(i){return dl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Hg(t){const e=Nf(t);return Y(e,"internal-error"),Y(typeof e.exp<"u","internal-error"),Y(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ss(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Qt&&qA(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function qA({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=_o(this.lastLoginAt),this.creationTime=_o(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xl(t){var e;const n=t.auth,r=await t.getIdToken(),i=await ss(t,Yl(n,{idToken:r}));Y(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?m1(s.providerUserInfo):[],l=QA(t.providerData,o),u=t.isAnonymous,d=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),p=u?d:!1,m={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new sh(s.createdAt,s.lastLoginAt),isAnonymous:p};Object.assign(t,m)}async function KA(t){const e=Fe(t);await Xl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function QA(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function m1(t){return t.map(e=>{var{providerId:n}=e,r=Cf(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YA(t,e){const n=await f1(t,{},async()=>{const r=ea({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await p1(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",h1.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function XA(t,e){return Qn(t,"POST","/v2/accounts:revokeToken",Mr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Y(e.idToken,"internal-error"),Y(typeof e.idToken<"u","internal-error"),Y(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Hg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Y(e.length!==0,"internal-error");const n=Hg(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Y(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await YA(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Ki;return r&&(Y(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(Y(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(Y(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ki,this.toJSON())}_performRefresh(){return Vn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function er(t,e){Y(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class tn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Cf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new GA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new sh(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await ss(this,this.stsTokenManager.getToken(this.auth,e));return Y(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return WA(this,e)}reload(){return KA(this)}_assign(e){this!==e&&(Y(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new tn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Xl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Nt(this.auth.app))return Promise.reject(jn(this.auth));const e=await this.getIdToken();return await ss(this,HA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,u,d,p;const m=(r=n.displayName)!==null&&r!==void 0?r:void 0,y=(i=n.email)!==null&&i!==void 0?i:void 0,S=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,R=(o=n.photoURL)!==null&&o!==void 0?o:void 0,N=(l=n.tenantId)!==null&&l!==void 0?l:void 0,O=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,k=(d=n.createdAt)!==null&&d!==void 0?d:void 0,_=(p=n.lastLoginAt)!==null&&p!==void 0?p:void 0,{uid:x,emailVerified:V,isAnonymous:U,providerData:z,stsTokenManager:E}=n;Y(x&&E,e,"internal-error");const v=Ki.fromJSON(this.name,E);Y(typeof x=="string",e,"internal-error"),er(m,e.name),er(y,e.name),Y(typeof V=="boolean",e,"internal-error"),Y(typeof U=="boolean",e,"internal-error"),er(S,e.name),er(R,e.name),er(N,e.name),er(O,e.name),er(k,e.name),er(_,e.name);const w=new tn({uid:x,auth:e,email:y,emailVerified:V,displayName:m,isAnonymous:U,photoURL:R,phoneNumber:S,tenantId:N,stsTokenManager:v,createdAt:k,lastLoginAt:_});return z&&Array.isArray(z)&&(w.providerData=z.map(T=>Object.assign({},T))),O&&(w._redirectEventId=O),w}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ki;i.updateFromServerResponse(n);const s=new tn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Xl(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];Y(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?m1(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Ki;l.updateFromIdToken(r);const u=new tn({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new sh(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,d),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wg=new Map;function On(t){Hn(t instanceof Function,"Expected a class definition");let e=Wg.get(t);return e?(Hn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Wg.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g1{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}g1.type="NONE";const qg=g1;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hl(t,e,n){return`firebase:${t}:${e}:${n}`}class Qi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=hl(this.userKey,i.apiKey,s),this.fullPersistenceKey=hl("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Yl(this.auth,{idToken:e}).catch(()=>{});return n?tn._fromGetAccountInfoResponse(this.auth,n,e):null}return tn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Qi(On(qg),e,r);const i=(await Promise.all(n.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let s=i[0]||On(qg);const o=hl(r,e.config.apiKey,e.name);let l=null;for(const d of n)try{const p=await d._get(o);if(p){let m;if(typeof p=="string"){const y=await Yl(e,{idToken:p}).catch(()=>{});if(!y)break;m=await tn._fromGetAccountInfoResponse(e,y,p)}else m=tn._fromJSON(e,p);d!==s&&(l=m),s=d;break}}catch{}const u=i.filter(d=>d._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Qi(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async d=>{if(d!==s)try{await d._remove(o)}catch{}})),new Qi(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(w1(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(y1(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(T1(e))return"Blackberry";if(I1(e))return"Webos";if(v1(e))return"Safari";if((e.includes("chrome/")||_1(e))&&!e.includes("edge/"))return"Chrome";if(E1(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function y1(t=lt()){return/firefox\//i.test(t)}function v1(t=lt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function _1(t=lt()){return/crios\//i.test(t)}function w1(t=lt()){return/iemobile/i.test(t)}function E1(t=lt()){return/android/i.test(t)}function T1(t=lt()){return/blackberry/i.test(t)}function I1(t=lt()){return/webos/i.test(t)}function bf(t=lt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function JA(t=lt()){var e;return bf(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function ZA(){return Hx()&&document.documentMode===10}function x1(t=lt()){return bf(t)||E1(t)||I1(t)||T1(t)||/windows phone/i.test(t)||w1(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k1(t,e=[]){let n;switch(t){case"Browser":n=Gg(lt());break;case"Worker":n=`${Gg(lt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${fi}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tC(t,e={}){return Qn(t,"GET","/v2/passwordPolicy",Mr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nC=6;class rC{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:nC,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iC{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Kg(this),this.idTokenSubscription=new Kg(this),this.beforeStateQueue=new eC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=c1,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=On(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await Qi.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Yl(this,{idToken:e}),r=await tn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Nt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Xl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=LA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Nt(this.app))return Promise.reject(jn(this));const n=e?Fe(e):null;return n&&Y(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Y(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Nt(this.app)?Promise.reject(jn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Nt(this.app)?Promise.reject(jn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(On(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await tC(this),n=new rC(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new hi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await XA(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&On(e)||this._popupRedirectResolver;Y(n,this,"argument-error"),this.redirectPersistenceManager=await Qi.create(this,[On(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(Y(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=k1(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;if(Nt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&DA(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function pi(t){return Fe(t)}class Kg{constructor(e){this.auth=e,this.observer=null,this.addObserver=Xx(n=>this.observer=n)}get next(){return Y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Lu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function sC(t){Lu=t}function S1(t){return Lu.loadJS(t)}function oC(){return Lu.recaptchaEnterpriseScript}function aC(){return Lu.gapiScript}function lC(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class uC{constructor(){this.enterprise=new cC}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class cC{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const dC="recaptcha-enterprise",A1="NO_RECAPTCHA";class hC{constructor(e){this.type=dC,this.auth=pi(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{$A(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const d=new BA(u);return s.tenantId==null?s._agentRecaptchaConfig=d:s._tenantRecaptchaConfigs[s.tenantId]=d,o(d.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;$g(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(d=>{o(d)}).catch(()=>{o(A1)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new uC().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&$g(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=oC();u.length!==0&&(u+=l),S1(u).then(()=>{i(l,s,o)}).catch(d=>{o(d)})}}).catch(l=>{o(l)})})}}async function Qs(t,e,n,r=!1,i=!1){const s=new hC(t);let o;if(i)o=A1;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const l=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const u=l.phoneEnrollmentInfo.phoneNumber,d=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:d,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const u=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function oh(t,e,n,r,i){var s,o;if(i==="EMAIL_PASSWORD_PROVIDER")if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const l=await Qs(t,e,n,n==="getOobCode");return r(t,l)}else return r(t,e).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const u=await Qs(t,e,n,n==="getOobCode");return r(t,u)}else return Promise.reject(l)});else if(i==="PHONE_PROVIDER")if(!((o=t._getRecaptchaConfig())===null||o===void 0)&&o.isProviderEnabled("PHONE_PROVIDER")){const l=await Qs(t,e,n);return r(t,l).catch(async u=>{var d;if(((d=t._getRecaptchaConfig())===null||d===void 0?void 0:d.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(u.code==="auth/missing-recaptcha-token"||u.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${n} flow.`);const p=await Qs(t,e,n,!1,!0);return r(t,p)}return Promise.reject(u)})}else{const l=await Qs(t,e,n,!1,!0);return r(t,l)}else return Promise.reject(i+" provider is not supported.")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fC(t,e){const n=jr(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Ar(s,e??{}))return i;cn(i,"already-initialized")}return n.initialize({options:e})}function pC(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(On);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function mC(t,e,n){const r=pi(t);Y(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=C1(e),{host:o,port:l}=gC(e),u=l===null?"":`:${l}`,d={url:`${s}//${o}${u}/`},p=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){Y(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),Y(Ar(d,r.config.emulator)&&Ar(p,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=d,r.emulatorConfig=p,r.settings.appVerificationDisabledForTesting=!0,gs(o)?(wf(`${s}//${o}${u}`),Ef("Auth",!0)):i||yC()}function C1(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function gC(t){const e=C1(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Qg(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Qg(o)}}}function Qg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function yC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Df{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Vn("not implemented")}_getIdTokenResponse(e){return Vn("not implemented")}_linkToIdToken(e,n){return Vn("not implemented")}_getReauthenticationResolver(e){return Vn("not implemented")}}async function vC(t,e){return Qn(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _C(t,e){return na(t,"POST","/v1/accounts:signInWithPassword",Mr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wC(t,e){return na(t,"POST","/v1/accounts:signInWithEmailLink",Mr(t,e))}async function EC(t,e){return na(t,"POST","/v1/accounts:signInWithEmailLink",Mr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo extends Df{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Bo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Bo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return oh(e,n,"signInWithPassword",_C,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return wC(e,{email:this._email,oobCode:this._password});default:cn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return oh(e,r,"signUpPassword",vC,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return EC(e,{idToken:n,email:this._email,oobCode:this._password});default:cn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yi(t,e){return na(t,"POST","/v1/accounts:signInWithIdp",Mr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TC="http://localhost";class oi extends Df{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new oi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):cn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Cf(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new oi(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Yi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Yi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Yi(e,n)}buildRequest(){const e={requestUri:TC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ea(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IC(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function xC(t){const e=to(no(t)).link,n=e?to(no(e)).deep_link_id:null,r=to(no(t)).deep_link_id;return(r?to(no(r)).link:null)||r||n||e||t}class Vf{constructor(e){var n,r,i,s,o,l;const u=to(no(e)),d=(n=u.apiKey)!==null&&n!==void 0?n:null,p=(r=u.oobCode)!==null&&r!==void 0?r:null,m=IC((i=u.mode)!==null&&i!==void 0?i:null);Y(d&&p&&m,"argument-error"),this.apiKey=d,this.operation=m,this.code=p,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.lang)!==null&&o!==void 0?o:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=xC(e);try{return new Vf(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(){this.providerId=ys.PROVIDER_ID}static credential(e,n){return Bo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Vf.parseLink(n);return Y(r,"argument-error"),Bo._fromEmailAndCode(e,r.code,r.tenantId)}}ys.PROVIDER_ID="password";ys.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ys.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R1{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra extends R1{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or extends ra{constructor(){super("facebook.com")}static credential(e){return oi._fromParams({providerId:or.PROVIDER_ID,signInMethod:or.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return or.credentialFromTaggedObject(e)}static credentialFromError(e){return or.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return or.credential(e.oauthAccessToken)}catch{return null}}}or.FACEBOOK_SIGN_IN_METHOD="facebook.com";or.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar extends ra{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return oi._fromParams({providerId:ar.PROVIDER_ID,signInMethod:ar.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ar.credentialFromTaggedObject(e)}static credentialFromError(e){return ar.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return ar.credential(n,r)}catch{return null}}}ar.GOOGLE_SIGN_IN_METHOD="google.com";ar.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr extends ra{constructor(){super("github.com")}static credential(e){return oi._fromParams({providerId:lr.PROVIDER_ID,signInMethod:lr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return lr.credentialFromTaggedObject(e)}static credentialFromError(e){return lr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return lr.credential(e.oauthAccessToken)}catch{return null}}}lr.GITHUB_SIGN_IN_METHOD="github.com";lr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur extends ra{constructor(){super("twitter.com")}static credential(e,n){return oi._fromParams({providerId:ur.PROVIDER_ID,signInMethod:ur.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ur.credentialFromTaggedObject(e)}static credentialFromError(e){return ur.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return ur.credential(n,r)}catch{return null}}}ur.TWITTER_SIGN_IN_METHOD="twitter.com";ur.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kC(t,e){return na(t,"POST","/v1/accounts:signUp",Mr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await tn._fromIdTokenResponse(e,r,i),o=Yg(r);return new ai({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Yg(r);return new ai({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Yg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jl extends Qt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Jl.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Jl(e,n,r,i)}}function P1(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Jl._fromErrorAndOperation(t,s,e,r):s})}async function SC(t,e,n=!1){const r=await ss(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ai._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AC(t,e,n=!1){const{auth:r}=t;if(Nt(r.app))return Promise.reject(jn(r));const i="reauthenticate";try{const s=await ss(t,P1(r,i,e,t),n);Y(s.idToken,r,"internal-error");const o=Nf(s.idToken);Y(o,r,"internal-error");const{sub:l}=o;return Y(t.uid===l,r,"user-mismatch"),ai._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&cn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function N1(t,e,n=!1){if(Nt(t.app))return Promise.reject(jn(t));const r="signIn",i=await P1(t,r,e),s=await ai._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function CC(t,e){return N1(pi(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function b1(t){const e=pi(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function RC(t,e,n){if(Nt(t.app))return Promise.reject(jn(t));const r=pi(t),o=await oh(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",kC,"EMAIL_PASSWORD_PROVIDER").catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&b1(t),u}),l=await ai._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function PC(t,e,n){return Nt(t.app)?Promise.reject(jn(t)):CC(Fe(t),ys.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&b1(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NC(t,e){return Qn(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bC(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Fe(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await ss(r,NC(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const l=r.providerData.find(({providerId:u})=>u==="password");l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function DC(t,e,n,r){return Fe(t).onIdTokenChanged(e,n,r)}function VC(t,e,n){return Fe(t).beforeAuthStateChanged(e,n)}function OC(t,e,n,r){return Fe(t).onAuthStateChanged(e,n,r)}function LC(t){return Fe(t).signOut()}const Zl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D1{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Zl,"1"),this.storage.removeItem(Zl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jC=1e3,MC=10;class V1 extends D1{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=x1(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);ZA()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,MC):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},jC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}V1.type="LOCAL";const FC=V1;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O1 extends D1{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}O1.type="SESSION";const L1=O1;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UC(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ju{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new ju(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async d=>d(n.origin,s)),u=await UC(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ju.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Of(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zC{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const d=Of("",20);i.port1.start();const p=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(m){const y=m;if(y.data.eventId===d)switch(y.data.status){case"ack":clearTimeout(p),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(y.data.response);break;default:clearTimeout(p),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:d,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wn(){return window}function BC(t){wn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j1(){return typeof wn().WorkerGlobalScope<"u"&&typeof wn().importScripts=="function"}async function $C(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function HC(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function WC(){return j1()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M1="firebaseLocalStorageDb",qC=1,eu="firebaseLocalStorage",F1="fbase_key";class ia{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Mu(t,e){return t.transaction([eu],e?"readwrite":"readonly").objectStore(eu)}function GC(){const t=indexedDB.deleteDatabase(M1);return new ia(t).toPromise()}function ah(){const t=indexedDB.open(M1,qC);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(eu,{keyPath:F1})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(eu)?e(r):(r.close(),await GC(),e(await ah()))})})}async function Xg(t,e,n){const r=Mu(t,!0).put({[F1]:e,value:n});return new ia(r).toPromise()}async function KC(t,e){const n=Mu(t,!1).get(e),r=await new ia(n).toPromise();return r===void 0?null:r.value}function Jg(t,e){const n=Mu(t,!0).delete(e);return new ia(n).toPromise()}const QC=800,YC=3;class U1{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ah(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>YC)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return j1()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ju._getInstance(WC()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await $C(),!this.activeServiceWorker)return;this.sender=new zC(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||HC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ah();return await Xg(e,Zl,"1"),await Jg(e,Zl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Xg(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>KC(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Jg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Mu(i,!1).getAll();return new ia(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),QC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}U1.type="LOCAL";const XC=U1;new ta(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JC(t,e){return e?On(e):(Y(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lf extends Df{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Yi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Yi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Yi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function ZC(t){return N1(t.auth,new Lf(t),t.bypassAuthState)}function e2(t){const{auth:e,user:n}=t;return Y(n,e,"internal-error"),AC(n,new Lf(t),t.bypassAuthState)}async function t2(t){const{auth:e,user:n}=t;return Y(n,e,"internal-error"),SC(n,new Lf(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z1{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ZC;case"linkViaPopup":case"linkViaRedirect":return t2;case"reauthViaPopup":case"reauthViaRedirect":return e2;default:cn(this.auth,"internal-error")}}resolve(e){Hn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Hn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n2=new ta(2e3,1e4);class zi extends z1{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,zi.currentPopupAction&&zi.currentPopupAction.cancel(),zi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Y(e,this.auth,"internal-error"),e}async onExecution(){Hn(this.filter.length===1,"Popup operations only handle one event");const e=Of();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(_n(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(_n(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,zi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(_n(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,n2.get())};e()}}zi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r2="pendingRedirect",fl=new Map;class i2 extends z1{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=fl.get(this.auth._key());if(!e){try{const r=await s2(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}fl.set(this.auth._key(),e)}return this.bypassAuthState||fl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function s2(t,e){const n=l2(e),r=a2(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function o2(t,e){fl.set(t._key(),e)}function a2(t){return On(t._redirectPersistence)}function l2(t){return hl(r2,t.config.apiKey,t.name)}async function u2(t,e,n=!1){if(Nt(t.app))return Promise.reject(jn(t));const r=pi(t),i=JC(r,e),o=await new i2(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c2=10*60*1e3;class d2{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!h2(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!B1(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(_n(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=c2&&this.cachedEventUids.clear(),this.cachedEventUids.has(Zg(e))}saveEventToCache(e){this.cachedEventUids.add(Zg(e)),this.lastProcessedEventTime=Date.now()}}function Zg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function B1({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function h2(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return B1(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function f2(t,e={}){return Qn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p2=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,m2=/^https?/;async function g2(t){if(t.config.emulator)return;const{authorizedDomains:e}=await f2(t);for(const n of e)try{if(y2(n))return}catch{}cn(t,"unauthorized-domain")}function y2(t){const e=ih(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!m2.test(n))return!1;if(p2.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v2=new ta(3e4,6e4);function e0(){const t=wn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function _2(t){return new Promise((e,n)=>{var r,i,s;function o(){e0(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{e0(),n(_n(t,"network-request-failed"))},timeout:v2.get()})}if(!((i=(r=wn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=wn().gapi)===null||s===void 0)&&s.load)o();else{const l=lC("iframefcb");return wn()[l]=()=>{gapi.load?o():n(_n(t,"network-request-failed"))},S1(`${aC()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw pl=null,e})}let pl=null;function w2(t){return pl=pl||_2(t),pl}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E2=new ta(5e3,15e3),T2="__/auth/iframe",I2="emulator/auth/iframe",x2={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},k2=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function S2(t){const e=t.config;Y(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Pf(e,I2):`https://${t.config.authDomain}/${T2}`,r={apiKey:e.apiKey,appName:t.name,v:fi},i=k2.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ea(r).slice(1)}`}async function A2(t){const e=await w2(t),n=wn().gapi;return Y(n,t,"internal-error"),e.open({where:document.body,url:S2(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:x2,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=_n(t,"network-request-failed"),l=wn().setTimeout(()=>{s(o)},E2.get());function u(){wn().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C2={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},R2=500,P2=600,N2="_blank",b2="http://localhost";class t0{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function D2(t,e,n,r=R2,i=P2){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},C2),{width:r.toString(),height:i.toString(),top:s,left:o}),d=lt().toLowerCase();n&&(l=_1(d)?N2:n),y1(d)&&(e=e||b2,u.scrollbars="yes");const p=Object.entries(u).reduce((y,[S,R])=>`${y}${S}=${R},`,"");if(JA(d)&&l!=="_self")return V2(e||"",l),new t0(null);const m=window.open(e||"",l,p);Y(m,t,"popup-blocked");try{m.focus()}catch{}return new t0(m)}function V2(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O2="__/auth/handler",L2="emulator/auth/handler",j2=encodeURIComponent("fac");async function n0(t,e,n,r,i,s){Y(t.config.authDomain,t,"auth-domain-config-required"),Y(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:fi,eventId:i};if(e instanceof R1){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Yx(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,m]of Object.entries(s||{}))o[p]=m}if(e instanceof ra){const p=e.getScopes().filter(m=>m!=="");p.length>0&&(o.scopes=p.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const p of Object.keys(l))l[p]===void 0&&delete l[p];const u=await t._getAppCheckToken(),d=u?`#${j2}=${encodeURIComponent(u)}`:"";return`${M2(t)}?${ea(l).slice(1)}${d}`}function M2({config:t}){return t.emulator?Pf(t,L2):`https://${t.authDomain}/${O2}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zc="webStorageSupport";class F2{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=L1,this._completeRedirectFn=u2,this._overrideRedirectResult=o2}async _openPopup(e,n,r,i){var s;Hn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await n0(e,n,r,ih(),i);return D2(e,o,Of())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await n0(e,n,r,ih(),i);return BC(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Hn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await A2(e),r=new d2(e);return n.register("authEvent",i=>(Y(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Zc,{type:Zc},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Zc];o!==void 0&&n(!!o),cn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=g2(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return x1()||v1()||bf()}}const U2=F2;var r0="@firebase/auth",i0="1.10.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z2{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B2(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function $2(t){un(new Kt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;Y(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:k1(t)},d=new iC(r,i,s,u);return pC(d,n),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),un(new Kt("auth-internal",e=>{const n=pi(e.getProvider("auth").getImmediate());return(r=>new z2(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),xt(r0,i0,B2(t)),xt(r0,i0,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H2=5*60,W2=P_("authIdTokenMaxAge")||H2;let s0=null;const q2=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>W2)return;const i=n==null?void 0:n.token;s0!==i&&(s0=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function G2(t=Du()){const e=jr(t,"auth");if(e.isInitialized())return e.getImmediate();const n=fC(t,{popupRedirectResolver:U2,persistence:[XC,FC,L1]}),r=P_("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=q2(s.toString());VC(n,o,()=>o(n.currentUser)),DC(n,l=>o(l))}}const i=A_("auth");return i&&mC(n,`http://${i}`),n}function K2(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}sC({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=_n("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",K2().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});$2("Browser");var o0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ir,$1;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,v){function w(){}w.prototype=v.prototype,E.D=v.prototype,E.prototype=new w,E.prototype.constructor=E,E.C=function(T,A,C){for(var I=Array(arguments.length-2),ge=2;ge<arguments.length;ge++)I[ge-2]=arguments[ge];return v.prototype[A].apply(T,I)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(E,v,w){w||(w=0);var T=Array(16);if(typeof v=="string")for(var A=0;16>A;++A)T[A]=v.charCodeAt(w++)|v.charCodeAt(w++)<<8|v.charCodeAt(w++)<<16|v.charCodeAt(w++)<<24;else for(A=0;16>A;++A)T[A]=v[w++]|v[w++]<<8|v[w++]<<16|v[w++]<<24;v=E.g[0],w=E.g[1],A=E.g[2];var C=E.g[3],I=v+(C^w&(A^C))+T[0]+3614090360&4294967295;v=w+(I<<7&4294967295|I>>>25),I=C+(A^v&(w^A))+T[1]+3905402710&4294967295,C=v+(I<<12&4294967295|I>>>20),I=A+(w^C&(v^w))+T[2]+606105819&4294967295,A=C+(I<<17&4294967295|I>>>15),I=w+(v^A&(C^v))+T[3]+3250441966&4294967295,w=A+(I<<22&4294967295|I>>>10),I=v+(C^w&(A^C))+T[4]+4118548399&4294967295,v=w+(I<<7&4294967295|I>>>25),I=C+(A^v&(w^A))+T[5]+1200080426&4294967295,C=v+(I<<12&4294967295|I>>>20),I=A+(w^C&(v^w))+T[6]+2821735955&4294967295,A=C+(I<<17&4294967295|I>>>15),I=w+(v^A&(C^v))+T[7]+4249261313&4294967295,w=A+(I<<22&4294967295|I>>>10),I=v+(C^w&(A^C))+T[8]+1770035416&4294967295,v=w+(I<<7&4294967295|I>>>25),I=C+(A^v&(w^A))+T[9]+2336552879&4294967295,C=v+(I<<12&4294967295|I>>>20),I=A+(w^C&(v^w))+T[10]+4294925233&4294967295,A=C+(I<<17&4294967295|I>>>15),I=w+(v^A&(C^v))+T[11]+2304563134&4294967295,w=A+(I<<22&4294967295|I>>>10),I=v+(C^w&(A^C))+T[12]+1804603682&4294967295,v=w+(I<<7&4294967295|I>>>25),I=C+(A^v&(w^A))+T[13]+4254626195&4294967295,C=v+(I<<12&4294967295|I>>>20),I=A+(w^C&(v^w))+T[14]+2792965006&4294967295,A=C+(I<<17&4294967295|I>>>15),I=w+(v^A&(C^v))+T[15]+1236535329&4294967295,w=A+(I<<22&4294967295|I>>>10),I=v+(A^C&(w^A))+T[1]+4129170786&4294967295,v=w+(I<<5&4294967295|I>>>27),I=C+(w^A&(v^w))+T[6]+3225465664&4294967295,C=v+(I<<9&4294967295|I>>>23),I=A+(v^w&(C^v))+T[11]+643717713&4294967295,A=C+(I<<14&4294967295|I>>>18),I=w+(C^v&(A^C))+T[0]+3921069994&4294967295,w=A+(I<<20&4294967295|I>>>12),I=v+(A^C&(w^A))+T[5]+3593408605&4294967295,v=w+(I<<5&4294967295|I>>>27),I=C+(w^A&(v^w))+T[10]+38016083&4294967295,C=v+(I<<9&4294967295|I>>>23),I=A+(v^w&(C^v))+T[15]+3634488961&4294967295,A=C+(I<<14&4294967295|I>>>18),I=w+(C^v&(A^C))+T[4]+3889429448&4294967295,w=A+(I<<20&4294967295|I>>>12),I=v+(A^C&(w^A))+T[9]+568446438&4294967295,v=w+(I<<5&4294967295|I>>>27),I=C+(w^A&(v^w))+T[14]+3275163606&4294967295,C=v+(I<<9&4294967295|I>>>23),I=A+(v^w&(C^v))+T[3]+4107603335&4294967295,A=C+(I<<14&4294967295|I>>>18),I=w+(C^v&(A^C))+T[8]+1163531501&4294967295,w=A+(I<<20&4294967295|I>>>12),I=v+(A^C&(w^A))+T[13]+2850285829&4294967295,v=w+(I<<5&4294967295|I>>>27),I=C+(w^A&(v^w))+T[2]+4243563512&4294967295,C=v+(I<<9&4294967295|I>>>23),I=A+(v^w&(C^v))+T[7]+1735328473&4294967295,A=C+(I<<14&4294967295|I>>>18),I=w+(C^v&(A^C))+T[12]+2368359562&4294967295,w=A+(I<<20&4294967295|I>>>12),I=v+(w^A^C)+T[5]+4294588738&4294967295,v=w+(I<<4&4294967295|I>>>28),I=C+(v^w^A)+T[8]+2272392833&4294967295,C=v+(I<<11&4294967295|I>>>21),I=A+(C^v^w)+T[11]+1839030562&4294967295,A=C+(I<<16&4294967295|I>>>16),I=w+(A^C^v)+T[14]+4259657740&4294967295,w=A+(I<<23&4294967295|I>>>9),I=v+(w^A^C)+T[1]+2763975236&4294967295,v=w+(I<<4&4294967295|I>>>28),I=C+(v^w^A)+T[4]+1272893353&4294967295,C=v+(I<<11&4294967295|I>>>21),I=A+(C^v^w)+T[7]+4139469664&4294967295,A=C+(I<<16&4294967295|I>>>16),I=w+(A^C^v)+T[10]+3200236656&4294967295,w=A+(I<<23&4294967295|I>>>9),I=v+(w^A^C)+T[13]+681279174&4294967295,v=w+(I<<4&4294967295|I>>>28),I=C+(v^w^A)+T[0]+3936430074&4294967295,C=v+(I<<11&4294967295|I>>>21),I=A+(C^v^w)+T[3]+3572445317&4294967295,A=C+(I<<16&4294967295|I>>>16),I=w+(A^C^v)+T[6]+76029189&4294967295,w=A+(I<<23&4294967295|I>>>9),I=v+(w^A^C)+T[9]+3654602809&4294967295,v=w+(I<<4&4294967295|I>>>28),I=C+(v^w^A)+T[12]+3873151461&4294967295,C=v+(I<<11&4294967295|I>>>21),I=A+(C^v^w)+T[15]+530742520&4294967295,A=C+(I<<16&4294967295|I>>>16),I=w+(A^C^v)+T[2]+3299628645&4294967295,w=A+(I<<23&4294967295|I>>>9),I=v+(A^(w|~C))+T[0]+4096336452&4294967295,v=w+(I<<6&4294967295|I>>>26),I=C+(w^(v|~A))+T[7]+1126891415&4294967295,C=v+(I<<10&4294967295|I>>>22),I=A+(v^(C|~w))+T[14]+2878612391&4294967295,A=C+(I<<15&4294967295|I>>>17),I=w+(C^(A|~v))+T[5]+4237533241&4294967295,w=A+(I<<21&4294967295|I>>>11),I=v+(A^(w|~C))+T[12]+1700485571&4294967295,v=w+(I<<6&4294967295|I>>>26),I=C+(w^(v|~A))+T[3]+2399980690&4294967295,C=v+(I<<10&4294967295|I>>>22),I=A+(v^(C|~w))+T[10]+4293915773&4294967295,A=C+(I<<15&4294967295|I>>>17),I=w+(C^(A|~v))+T[1]+2240044497&4294967295,w=A+(I<<21&4294967295|I>>>11),I=v+(A^(w|~C))+T[8]+1873313359&4294967295,v=w+(I<<6&4294967295|I>>>26),I=C+(w^(v|~A))+T[15]+4264355552&4294967295,C=v+(I<<10&4294967295|I>>>22),I=A+(v^(C|~w))+T[6]+2734768916&4294967295,A=C+(I<<15&4294967295|I>>>17),I=w+(C^(A|~v))+T[13]+1309151649&4294967295,w=A+(I<<21&4294967295|I>>>11),I=v+(A^(w|~C))+T[4]+4149444226&4294967295,v=w+(I<<6&4294967295|I>>>26),I=C+(w^(v|~A))+T[11]+3174756917&4294967295,C=v+(I<<10&4294967295|I>>>22),I=A+(v^(C|~w))+T[2]+718787259&4294967295,A=C+(I<<15&4294967295|I>>>17),I=w+(C^(A|~v))+T[9]+3951481745&4294967295,E.g[0]=E.g[0]+v&4294967295,E.g[1]=E.g[1]+(A+(I<<21&4294967295|I>>>11))&4294967295,E.g[2]=E.g[2]+A&4294967295,E.g[3]=E.g[3]+C&4294967295}r.prototype.u=function(E,v){v===void 0&&(v=E.length);for(var w=v-this.blockSize,T=this.B,A=this.h,C=0;C<v;){if(A==0)for(;C<=w;)i(this,E,C),C+=this.blockSize;if(typeof E=="string"){for(;C<v;)if(T[A++]=E.charCodeAt(C++),A==this.blockSize){i(this,T),A=0;break}}else for(;C<v;)if(T[A++]=E[C++],A==this.blockSize){i(this,T),A=0;break}}this.h=A,this.o+=v},r.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var v=1;v<E.length-8;++v)E[v]=0;var w=8*this.o;for(v=E.length-8;v<E.length;++v)E[v]=w&255,w/=256;for(this.u(E),E=Array(16),v=w=0;4>v;++v)for(var T=0;32>T;T+=8)E[w++]=this.g[v]>>>T&255;return E};function s(E,v){var w=l;return Object.prototype.hasOwnProperty.call(w,E)?w[E]:w[E]=v(E)}function o(E,v){this.h=v;for(var w=[],T=!0,A=E.length-1;0<=A;A--){var C=E[A]|0;T&&C==v||(w[A]=C,T=!1)}this.g=w}var l={};function u(E){return-128<=E&&128>E?s(E,function(v){return new o([v|0],0>v?-1:0)}):new o([E|0],0>E?-1:0)}function d(E){if(isNaN(E)||!isFinite(E))return m;if(0>E)return O(d(-E));for(var v=[],w=1,T=0;E>=w;T++)v[T]=E/w|0,w*=4294967296;return new o(v,0)}function p(E,v){if(E.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(E.charAt(0)=="-")return O(p(E.substring(1),v));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var w=d(Math.pow(v,8)),T=m,A=0;A<E.length;A+=8){var C=Math.min(8,E.length-A),I=parseInt(E.substring(A,A+C),v);8>C?(C=d(Math.pow(v,C)),T=T.j(C).add(d(I))):(T=T.j(w),T=T.add(d(I)))}return T}var m=u(0),y=u(1),S=u(16777216);t=o.prototype,t.m=function(){if(N(this))return-O(this).m();for(var E=0,v=1,w=0;w<this.g.length;w++){var T=this.i(w);E+=(0<=T?T:4294967296+T)*v,v*=4294967296}return E},t.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(R(this))return"0";if(N(this))return"-"+O(this).toString(E);for(var v=d(Math.pow(E,6)),w=this,T="";;){var A=V(w,v).g;w=k(w,A.j(v));var C=((0<w.g.length?w.g[0]:w.h)>>>0).toString(E);if(w=A,R(w))return C+T;for(;6>C.length;)C="0"+C;T=C+T}},t.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function R(E){if(E.h!=0)return!1;for(var v=0;v<E.g.length;v++)if(E.g[v]!=0)return!1;return!0}function N(E){return E.h==-1}t.l=function(E){return E=k(this,E),N(E)?-1:R(E)?0:1};function O(E){for(var v=E.g.length,w=[],T=0;T<v;T++)w[T]=~E.g[T];return new o(w,~E.h).add(y)}t.abs=function(){return N(this)?O(this):this},t.add=function(E){for(var v=Math.max(this.g.length,E.g.length),w=[],T=0,A=0;A<=v;A++){var C=T+(this.i(A)&65535)+(E.i(A)&65535),I=(C>>>16)+(this.i(A)>>>16)+(E.i(A)>>>16);T=I>>>16,C&=65535,I&=65535,w[A]=I<<16|C}return new o(w,w[w.length-1]&-2147483648?-1:0)};function k(E,v){return E.add(O(v))}t.j=function(E){if(R(this)||R(E))return m;if(N(this))return N(E)?O(this).j(O(E)):O(O(this).j(E));if(N(E))return O(this.j(O(E)));if(0>this.l(S)&&0>E.l(S))return d(this.m()*E.m());for(var v=this.g.length+E.g.length,w=[],T=0;T<2*v;T++)w[T]=0;for(T=0;T<this.g.length;T++)for(var A=0;A<E.g.length;A++){var C=this.i(T)>>>16,I=this.i(T)&65535,ge=E.i(A)>>>16,At=E.i(A)&65535;w[2*T+2*A]+=I*At,_(w,2*T+2*A),w[2*T+2*A+1]+=C*At,_(w,2*T+2*A+1),w[2*T+2*A+1]+=I*ge,_(w,2*T+2*A+1),w[2*T+2*A+2]+=C*ge,_(w,2*T+2*A+2)}for(T=0;T<v;T++)w[T]=w[2*T+1]<<16|w[2*T];for(T=v;T<2*v;T++)w[T]=0;return new o(w,0)};function _(E,v){for(;(E[v]&65535)!=E[v];)E[v+1]+=E[v]>>>16,E[v]&=65535,v++}function x(E,v){this.g=E,this.h=v}function V(E,v){if(R(v))throw Error("division by zero");if(R(E))return new x(m,m);if(N(E))return v=V(O(E),v),new x(O(v.g),O(v.h));if(N(v))return v=V(E,O(v)),new x(O(v.g),v.h);if(30<E.g.length){if(N(E)||N(v))throw Error("slowDivide_ only works with positive integers.");for(var w=y,T=v;0>=T.l(E);)w=U(w),T=U(T);var A=z(w,1),C=z(T,1);for(T=z(T,2),w=z(w,2);!R(T);){var I=C.add(T);0>=I.l(E)&&(A=A.add(w),C=I),T=z(T,1),w=z(w,1)}return v=k(E,A.j(v)),new x(A,v)}for(A=m;0<=E.l(v);){for(w=Math.max(1,Math.floor(E.m()/v.m())),T=Math.ceil(Math.log(w)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),C=d(w),I=C.j(v);N(I)||0<I.l(E);)w-=T,C=d(w),I=C.j(v);R(C)&&(C=y),A=A.add(C),E=k(E,I)}return new x(A,E)}t.A=function(E){return V(this,E).h},t.and=function(E){for(var v=Math.max(this.g.length,E.g.length),w=[],T=0;T<v;T++)w[T]=this.i(T)&E.i(T);return new o(w,this.h&E.h)},t.or=function(E){for(var v=Math.max(this.g.length,E.g.length),w=[],T=0;T<v;T++)w[T]=this.i(T)|E.i(T);return new o(w,this.h|E.h)},t.xor=function(E){for(var v=Math.max(this.g.length,E.g.length),w=[],T=0;T<v;T++)w[T]=this.i(T)^E.i(T);return new o(w,this.h^E.h)};function U(E){for(var v=E.g.length+1,w=[],T=0;T<v;T++)w[T]=E.i(T)<<1|E.i(T-1)>>>31;return new o(w,E.h)}function z(E,v){var w=v>>5;v%=32;for(var T=E.g.length-w,A=[],C=0;C<T;C++)A[C]=0<v?E.i(C+w)>>>v|E.i(C+w+1)<<32-v:E.i(C+w);return new o(A,E.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,$1=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=d,o.fromString=p,Ir=o}).apply(typeof o0<"u"?o0:typeof self<"u"?self:typeof window<"u"?window:{});var qa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var H1,ro,W1,ml,lh,q1,G1,K1;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,c,f){return a==Array.prototype||a==Object.prototype||(a[c]=f.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof qa=="object"&&qa];for(var c=0;c<a.length;++c){var f=a[c];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function i(a,c){if(c)e:{var f=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var P=a[g];if(!(P in f))break e;f=f[P]}a=a[a.length-1],g=f[a],c=c(g),c!=g&&c!=null&&e(f,a,{configurable:!0,writable:!0,value:c})}}function s(a,c){a instanceof String&&(a+="");var f=0,g=!1,P={next:function(){if(!g&&f<a.length){var D=f++;return{value:c(D,a[D]),done:!1}}return g=!0,{done:!0,value:void 0}}};return P[Symbol.iterator]=function(){return P},P}i("Array.prototype.values",function(a){return a||function(){return s(this,function(c,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var c=typeof a;return c=c!="object"?c:a?Array.isArray(a)?"array":c:"null",c=="array"||c=="object"&&typeof a.length=="number"}function d(a){var c=typeof a;return c=="object"&&a!=null||c=="function"}function p(a,c,f){return a.call.apply(a.bind,arguments)}function m(a,c,f){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var P=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(P,g),a.apply(c,P)}}return function(){return a.apply(c,arguments)}}function y(a,c,f){return y=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:m,y.apply(null,arguments)}function S(a,c){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function R(a,c){function f(){}f.prototype=c.prototype,a.aa=c.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(g,P,D){for(var B=Array(arguments.length-2),pe=2;pe<arguments.length;pe++)B[pe-2]=arguments[pe];return c.prototype[P].apply(g,B)}}function N(a){const c=a.length;if(0<c){const f=Array(c);for(let g=0;g<c;g++)f[g]=a[g];return f}return[]}function O(a,c){for(let f=1;f<arguments.length;f++){const g=arguments[f];if(u(g)){const P=a.length||0,D=g.length||0;a.length=P+D;for(let B=0;B<D;B++)a[P+B]=g[B]}else a.push(g)}}class k{constructor(c,f){this.i=c,this.j=f,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function _(a){return/^[\s\xa0]*$/.test(a)}function x(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function V(a){return V[" "](a),a}V[" "]=function(){};var U=x().indexOf("Gecko")!=-1&&!(x().toLowerCase().indexOf("webkit")!=-1&&x().indexOf("Edge")==-1)&&!(x().indexOf("Trident")!=-1||x().indexOf("MSIE")!=-1)&&x().indexOf("Edge")==-1;function z(a,c,f){for(const g in a)c.call(f,a[g],g,a)}function E(a,c){for(const f in a)c.call(void 0,a[f],f,a)}function v(a){const c={};for(const f in a)c[f]=a[f];return c}const w="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(a,c){let f,g;for(let P=1;P<arguments.length;P++){g=arguments[P];for(f in g)a[f]=g[f];for(let D=0;D<w.length;D++)f=w[D],Object.prototype.hasOwnProperty.call(g,f)&&(a[f]=g[f])}}function A(a){var c=1;a=a.split(":");const f=[];for(;0<c&&a.length;)f.push(a.shift()),c--;return a.length&&f.push(a.join(":")),f}function C(a){l.setTimeout(()=>{throw a},0)}function I(){var a=J;let c=null;return a.g&&(c=a.g,a.g=a.g.next,a.g||(a.h=null),c.next=null),c}class ge{constructor(){this.h=this.g=null}add(c,f){const g=At.get();g.set(c,f),this.h?this.h.next=g:this.g=g,this.h=g}}var At=new k(()=>new hn,a=>a.reset());class hn{constructor(){this.next=this.g=this.h=null}set(c,f){this.h=c,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let yt,$=!1,J=new ge,Z=()=>{const a=l.Promise.resolve(void 0);yt=()=>{a.then(Q)}};var Q=()=>{for(var a;a=I();){try{a.h.call(a.g)}catch(f){C(f)}var c=At;c.j(a),100>c.h&&(c.h++,a.next=c.g,c.g=a)}$=!1};function ne(){this.s=this.s,this.C=this.C}ne.prototype.s=!1,ne.prototype.ma=function(){this.s||(this.s=!0,this.N())},ne.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Te(a,c){this.type=a,this.g=this.target=c,this.defaultPrevented=!1}Te.prototype.h=function(){this.defaultPrevented=!0};var ut=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,c=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};l.addEventListener("test",f,c),l.removeEventListener("test",f,c)}catch{}return a}();function Mt(a,c){if(Te.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=c,c=a.relatedTarget){if(U){e:{try{V(c.nodeName);var P=!0;break e}catch{}P=!1}P||(c=null)}}else f=="mouseover"?c=a.fromElement:f=="mouseout"&&(c=a.toElement);this.relatedTarget=c,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Ft[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Mt.aa.h.call(this)}}R(Mt,Te);var Ft={2:"touch",3:"pen",4:"mouse"};Mt.prototype.h=function(){Mt.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Ut="closure_listenable_"+(1e6*Math.random()|0),ec=0;function tc(a,c,f,g,P){this.listener=a,this.proxy=null,this.src=c,this.type=f,this.capture=!!g,this.ha=P,this.key=++ec,this.da=this.fa=!1}function _i(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function ye(a){this.src=a,this.g={},this.h=0}ye.prototype.add=function(a,c,f,g,P){var D=a.toString();a=this.g[D],a||(a=this.g[D]=[],this.h++);var B=ks(a,c,g,P);return-1<B?(c=a[B],f||(c.fa=!1)):(c=new tc(c,this.src,D,!!g,P),c.fa=f,a.push(c)),c};function xs(a,c){var f=c.type;if(f in a.g){var g=a.g[f],P=Array.prototype.indexOf.call(g,c,void 0),D;(D=0<=P)&&Array.prototype.splice.call(g,P,1),D&&(_i(c),a.g[f].length==0&&(delete a.g[f],a.h--))}}function ks(a,c,f,g){for(var P=0;P<a.length;++P){var D=a[P];if(!D.da&&D.listener==c&&D.capture==!!f&&D.ha==g)return P}return-1}var Ss="closure_lm_"+(1e6*Math.random()|0),As={};function ca(a,c,f,g,P){if(g&&g.once)return M(a,c,f,g,P);if(Array.isArray(c)){for(var D=0;D<c.length;D++)ca(a,c[D],f,g,P);return null}return f=Sn(f),a&&a[Ut]?a.K(c,f,d(g)?!!g.capture:!!g,P):da(a,c,f,!1,g,P)}function da(a,c,f,g,P,D){if(!c)throw Error("Invalid event type");var B=d(P)?!!P.capture:!!P,pe=ct(a);if(pe||(a[Ss]=pe=new ye(a)),f=pe.add(c,f,g,B,D),f.proxy)return f;if(g=b(),f.proxy=g,g.src=a,g.listener=f,a.addEventListener)ut||(P=B),P===void 0&&(P=!1),a.addEventListener(c.toString(),g,P);else if(a.attachEvent)a.attachEvent(Je(c.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function b(){function a(f){return c.call(a.src,a.listener,f)}const c=He;return a}function M(a,c,f,g,P){if(Array.isArray(c)){for(var D=0;D<c.length;D++)M(a,c[D],f,g,P);return null}return f=Sn(f),a&&a[Ut]?a.L(c,f,d(g)?!!g.capture:!!g,P):da(a,c,f,!0,g,P)}function ce(a,c,f,g,P){if(Array.isArray(c))for(var D=0;D<c.length;D++)ce(a,c[D],f,g,P);else g=d(g)?!!g.capture:!!g,f=Sn(f),a&&a[Ut]?(a=a.i,c=String(c).toString(),c in a.g&&(D=a.g[c],f=ks(D,f,g,P),-1<f&&(_i(D[f]),Array.prototype.splice.call(D,f,1),D.length==0&&(delete a.g[c],a.h--)))):a&&(a=ct(a))&&(c=a.g[c.toString()],a=-1,c&&(a=ks(c,f,g,P)),(f=-1<a?c[a]:null)&&K(f))}function K(a){if(typeof a!="number"&&a&&!a.da){var c=a.src;if(c&&c[Ut])xs(c.i,a);else{var f=a.type,g=a.proxy;c.removeEventListener?c.removeEventListener(f,g,a.capture):c.detachEvent?c.detachEvent(Je(f),g):c.addListener&&c.removeListener&&c.removeListener(g),(f=ct(c))?(xs(f,a),f.h==0&&(f.src=null,c[Ss]=null)):_i(a)}}}function Je(a){return a in As?As[a]:As[a]="on"+a}function He(a,c){if(a.da)a=!0;else{c=new Mt(c,this);var f=a.listener,g=a.ha||a.src;a.fa&&K(a),a=f.call(g,c)}return a}function ct(a){return a=a[Ss],a instanceof ye?a:null}var Ct="__closure_events_fn_"+(1e9*Math.random()>>>0);function Sn(a){return typeof a=="function"?a:(a[Ct]||(a[Ct]=function(c){return a.handleEvent(c)}),a[Ct])}function Ue(){ne.call(this),this.i=new ye(this),this.M=this,this.F=null}R(Ue,ne),Ue.prototype[Ut]=!0,Ue.prototype.removeEventListener=function(a,c,f,g){ce(this,a,c,f,g)};function dt(a,c){var f,g=a.F;if(g)for(f=[];g;g=g.F)f.push(g);if(a=a.M,g=c.type||c,typeof c=="string")c=new Te(c,a);else if(c instanceof Te)c.target=c.target||a;else{var P=c;c=new Te(g,a),T(c,P)}if(P=!0,f)for(var D=f.length-1;0<=D;D--){var B=c.g=f[D];P=ha(B,g,!0,c)&&P}if(B=c.g=a,P=ha(B,g,!0,c)&&P,P=ha(B,g,!1,c)&&P,f)for(D=0;D<f.length;D++)B=c.g=f[D],P=ha(B,g,!1,c)&&P}Ue.prototype.N=function(){if(Ue.aa.N.call(this),this.i){var a=this.i,c;for(c in a.g){for(var f=a.g[c],g=0;g<f.length;g++)_i(f[g]);delete a.g[c],a.h--}}this.F=null},Ue.prototype.K=function(a,c,f,g){return this.i.add(String(a),c,!1,f,g)},Ue.prototype.L=function(a,c,f,g){return this.i.add(String(a),c,!0,f,g)};function ha(a,c,f,g){if(c=a.i.g[String(c)],!c)return!0;c=c.concat();for(var P=!0,D=0;D<c.length;++D){var B=c[D];if(B&&!B.da&&B.capture==f){var pe=B.listener,We=B.ha||B.src;B.fa&&xs(a.i,B),P=pe.call(We,g)!==!1&&P}}return P&&!g.defaultPrevented}function _p(a,c,f){if(typeof a=="function")f&&(a=y(a,f));else if(a&&typeof a.handleEvent=="function")a=y(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(a,c||0)}function wp(a){a.g=_p(()=>{a.g=null,a.i&&(a.i=!1,wp(a))},a.l);const c=a.h;a.h=null,a.m.apply(null,c)}class RE extends ne{constructor(c,f){super(),this.m=c,this.l=f,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:wp(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Cs(a){ne.call(this),this.h=a,this.g={}}R(Cs,ne);var Ep=[];function Tp(a){z(a.g,function(c,f){this.g.hasOwnProperty(f)&&K(c)},a),a.g={}}Cs.prototype.N=function(){Cs.aa.N.call(this),Tp(this)},Cs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var nc=l.JSON.stringify,PE=l.JSON.parse,NE=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function rc(){}rc.prototype.h=null;function Ip(a){return a.h||(a.h=a.i())}function xp(){}var Rs={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ic(){Te.call(this,"d")}R(ic,Te);function sc(){Te.call(this,"c")}R(sc,Te);var Fr={},kp=null;function fa(){return kp=kp||new Ue}Fr.La="serverreachability";function Sp(a){Te.call(this,Fr.La,a)}R(Sp,Te);function Ps(a){const c=fa();dt(c,new Sp(c))}Fr.STAT_EVENT="statevent";function Ap(a,c){Te.call(this,Fr.STAT_EVENT,a),this.stat=c}R(Ap,Te);function ht(a){const c=fa();dt(c,new Ap(c,a))}Fr.Ma="timingevent";function Cp(a,c){Te.call(this,Fr.Ma,a),this.size=c}R(Cp,Te);function Ns(a,c){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},c)}function bs(){this.g=!0}bs.prototype.xa=function(){this.g=!1};function bE(a,c,f,g,P,D){a.info(function(){if(a.g)if(D)for(var B="",pe=D.split("&"),We=0;We<pe.length;We++){var de=pe[We].split("=");if(1<de.length){var Ze=de[0];de=de[1];var et=Ze.split("_");B=2<=et.length&&et[1]=="type"?B+(Ze+"="+de+"&"):B+(Ze+"=redacted&")}}else B=null;else B=D;return"XMLHTTP REQ ("+g+") [attempt "+P+"]: "+c+`
`+f+`
`+B})}function DE(a,c,f,g,P,D,B){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+P+"]: "+c+`
`+f+`
`+D+" "+B})}function wi(a,c,f,g){a.info(function(){return"XMLHTTP TEXT ("+c+"): "+OE(a,f)+(g?" "+g:"")})}function VE(a,c){a.info(function(){return"TIMEOUT: "+c})}bs.prototype.info=function(){};function OE(a,c){if(!a.g)return c;if(!c)return null;try{var f=JSON.parse(c);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var g=f[a];if(!(2>g.length)){var P=g[1];if(Array.isArray(P)&&!(1>P.length)){var D=P[0];if(D!="noop"&&D!="stop"&&D!="close")for(var B=1;B<P.length;B++)P[B]=""}}}}return nc(f)}catch{return c}}var pa={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Rp={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},oc;function ma(){}R(ma,rc),ma.prototype.g=function(){return new XMLHttpRequest},ma.prototype.i=function(){return{}},oc=new ma;function Yn(a,c,f,g){this.j=a,this.i=c,this.l=f,this.R=g||1,this.U=new Cs(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Pp}function Pp(){this.i=null,this.g="",this.h=!1}var Np={},ac={};function lc(a,c,f){a.L=1,a.v=_a(An(c)),a.m=f,a.P=!0,bp(a,null)}function bp(a,c){a.F=Date.now(),ga(a),a.A=An(a.v);var f=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),qp(f.i,"t",g),a.C=0,f=a.j.J,a.h=new Pp,a.g=cm(a.j,f?c:null,!a.m),0<a.O&&(a.M=new RE(y(a.Y,a,a.g),a.O)),c=a.U,f=a.g,g=a.ca;var P="readystatechange";Array.isArray(P)||(P&&(Ep[0]=P.toString()),P=Ep);for(var D=0;D<P.length;D++){var B=ca(f,P[D],g||c.handleEvent,!1,c.h||c);if(!B)break;c.g[B.key]=B}c=a.H?v(a.H):{},a.m?(a.u||(a.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,c)):(a.u="GET",a.g.ea(a.A,a.u,null,c)),Ps(),bE(a.i,a.u,a.A,a.l,a.R,a.m)}Yn.prototype.ca=function(a){a=a.target;const c=this.M;c&&Cn(a)==3?c.j():this.Y(a)},Yn.prototype.Y=function(a){try{if(a==this.g)e:{const et=Cn(this.g);var c=this.g.Ba();const Ii=this.g.Z();if(!(3>et)&&(et!=3||this.g&&(this.h.h||this.g.oa()||Zp(this.g)))){this.J||et!=4||c==7||(c==8||0>=Ii?Ps(3):Ps(2)),uc(this);var f=this.g.Z();this.X=f;t:if(Dp(this)){var g=Zp(this.g);a="";var P=g.length,D=Cn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ur(this),Ds(this);var B="";break t}this.h.i=new l.TextDecoder}for(c=0;c<P;c++)this.h.h=!0,a+=this.h.i.decode(g[c],{stream:!(D&&c==P-1)});g.length=0,this.h.g+=a,this.C=0,B=this.h.g}else B=this.g.oa();if(this.o=f==200,DE(this.i,this.u,this.A,this.l,this.R,et,f),this.o){if(this.T&&!this.K){t:{if(this.g){var pe,We=this.g;if((pe=We.g?We.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(pe)){var de=pe;break t}}de=null}if(f=de)wi(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,cc(this,f);else{this.o=!1,this.s=3,ht(12),Ur(this),Ds(this);break e}}if(this.P){f=!0;let Yt;for(;!this.J&&this.C<B.length;)if(Yt=LE(this,B),Yt==ac){et==4&&(this.s=4,ht(14),f=!1),wi(this.i,this.l,null,"[Incomplete Response]");break}else if(Yt==Np){this.s=4,ht(15),wi(this.i,this.l,B,"[Invalid Chunk]"),f=!1;break}else wi(this.i,this.l,Yt,null),cc(this,Yt);if(Dp(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),et!=4||B.length!=0||this.h.h||(this.s=1,ht(16),f=!1),this.o=this.o&&f,!f)wi(this.i,this.l,B,"[Invalid Chunked Response]"),Ur(this),Ds(this);else if(0<B.length&&!this.W){this.W=!0;var Ze=this.j;Ze.g==this&&Ze.ba&&!Ze.M&&(Ze.j.info("Great, no buffering proxy detected. Bytes received: "+B.length),gc(Ze),Ze.M=!0,ht(11))}}else wi(this.i,this.l,B,null),cc(this,B);et==4&&Ur(this),this.o&&!this.J&&(et==4?om(this.j,this):(this.o=!1,ga(this)))}else ZE(this.g),f==400&&0<B.indexOf("Unknown SID")?(this.s=3,ht(12)):(this.s=0,ht(13)),Ur(this),Ds(this)}}}catch{}finally{}};function Dp(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function LE(a,c){var f=a.C,g=c.indexOf(`
`,f);return g==-1?ac:(f=Number(c.substring(f,g)),isNaN(f)?Np:(g+=1,g+f>c.length?ac:(c=c.slice(g,g+f),a.C=g+f,c)))}Yn.prototype.cancel=function(){this.J=!0,Ur(this)};function ga(a){a.S=Date.now()+a.I,Vp(a,a.I)}function Vp(a,c){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Ns(y(a.ba,a),c)}function uc(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Yn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(VE(this.i,this.A),this.L!=2&&(Ps(),ht(17)),Ur(this),this.s=2,Ds(this)):Vp(this,this.S-a)};function Ds(a){a.j.G==0||a.J||om(a.j,a)}function Ur(a){uc(a);var c=a.M;c&&typeof c.ma=="function"&&c.ma(),a.M=null,Tp(a.U),a.g&&(c=a.g,a.g=null,c.abort(),c.ma())}function cc(a,c){try{var f=a.j;if(f.G!=0&&(f.g==a||dc(f.h,a))){if(!a.K&&dc(f.h,a)&&f.G==3){try{var g=f.Da.g.parse(c)}catch{g=null}if(Array.isArray(g)&&g.length==3){var P=g;if(P[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)ka(f),Ia(f);else break e;mc(f),ht(18)}}else f.za=P[1],0<f.za-f.T&&37500>P[2]&&f.F&&f.v==0&&!f.C&&(f.C=Ns(y(f.Za,f),6e3));if(1>=jp(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else Br(f,11)}else if((a.K||f.g==a)&&ka(f),!_(c))for(P=f.Da.g.parse(c),c=0;c<P.length;c++){let de=P[c];if(f.T=de[0],de=de[1],f.G==2)if(de[0]=="c"){f.K=de[1],f.ia=de[2];const Ze=de[3];Ze!=null&&(f.la=Ze,f.j.info("VER="+f.la));const et=de[4];et!=null&&(f.Aa=et,f.j.info("SVER="+f.Aa));const Ii=de[5];Ii!=null&&typeof Ii=="number"&&0<Ii&&(g=1.5*Ii,f.L=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const Yt=a.g;if(Yt){const Aa=Yt.g?Yt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Aa){var D=g.h;D.g||Aa.indexOf("spdy")==-1&&Aa.indexOf("quic")==-1&&Aa.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(hc(D,D.h),D.h=null))}if(g.D){const yc=Yt.g?Yt.g.getResponseHeader("X-HTTP-Session-Id"):null;yc&&(g.ya=yc,ve(g.I,g.D,yc))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),g=f;var B=a;if(g.qa=um(g,g.J?g.ia:null,g.W),B.K){Mp(g.h,B);var pe=B,We=g.L;We&&(pe.I=We),pe.B&&(uc(pe),ga(pe)),g.g=B}else im(g);0<f.i.length&&xa(f)}else de[0]!="stop"&&de[0]!="close"||Br(f,7);else f.G==3&&(de[0]=="stop"||de[0]=="close"?de[0]=="stop"?Br(f,7):pc(f):de[0]!="noop"&&f.l&&f.l.ta(de),f.v=0)}}Ps(4)}catch{}}var jE=class{constructor(a,c){this.g=a,this.map=c}};function Op(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Lp(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function jp(a){return a.h?1:a.g?a.g.size:0}function dc(a,c){return a.h?a.h==c:a.g?a.g.has(c):!1}function hc(a,c){a.g?a.g.add(c):a.h=c}function Mp(a,c){a.h&&a.h==c?a.h=null:a.g&&a.g.has(c)&&a.g.delete(c)}Op.prototype.cancel=function(){if(this.i=Fp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Fp(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let c=a.i;for(const f of a.g.values())c=c.concat(f.D);return c}return N(a.i)}function ME(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var c=[],f=a.length,g=0;g<f;g++)c.push(a[g]);return c}c=[],f=0;for(g in a)c[f++]=a[g];return c}function FE(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var c=[];a=a.length;for(var f=0;f<a;f++)c.push(f);return c}c=[],f=0;for(const g in a)c[f++]=g;return c}}}function Up(a,c){if(a.forEach&&typeof a.forEach=="function")a.forEach(c,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,c,void 0);else for(var f=FE(a),g=ME(a),P=g.length,D=0;D<P;D++)c.call(void 0,g[D],f&&f[D],a)}var zp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function UE(a,c){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var g=a[f].indexOf("="),P=null;if(0<=g){var D=a[f].substring(0,g);P=a[f].substring(g+1)}else D=a[f];c(D,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function zr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof zr){this.h=a.h,ya(this,a.j),this.o=a.o,this.g=a.g,va(this,a.s),this.l=a.l;var c=a.i,f=new Ls;f.i=c.i,c.g&&(f.g=new Map(c.g),f.h=c.h),Bp(this,f),this.m=a.m}else a&&(c=String(a).match(zp))?(this.h=!1,ya(this,c[1]||"",!0),this.o=Vs(c[2]||""),this.g=Vs(c[3]||"",!0),va(this,c[4]),this.l=Vs(c[5]||"",!0),Bp(this,c[6]||"",!0),this.m=Vs(c[7]||"")):(this.h=!1,this.i=new Ls(null,this.h))}zr.prototype.toString=function(){var a=[],c=this.j;c&&a.push(Os(c,$p,!0),":");var f=this.g;return(f||c=="file")&&(a.push("//"),(c=this.o)&&a.push(Os(c,$p,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(Os(f,f.charAt(0)=="/"?$E:BE,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",Os(f,WE)),a.join("")};function An(a){return new zr(a)}function ya(a,c,f){a.j=f?Vs(c,!0):c,a.j&&(a.j=a.j.replace(/:$/,""))}function va(a,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);a.s=c}else a.s=null}function Bp(a,c,f){c instanceof Ls?(a.i=c,qE(a.i,a.h)):(f||(c=Os(c,HE)),a.i=new Ls(c,a.h))}function ve(a,c,f){a.i.set(c,f)}function _a(a){return ve(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Vs(a,c){return a?c?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Os(a,c,f){return typeof a=="string"?(a=encodeURI(a).replace(c,zE),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function zE(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var $p=/[#\/\?@]/g,BE=/[#\?:]/g,$E=/[#\?]/g,HE=/[#\?@]/g,WE=/#/g;function Ls(a,c){this.h=this.g=null,this.i=a||null,this.j=!!c}function Xn(a){a.g||(a.g=new Map,a.h=0,a.i&&UE(a.i,function(c,f){a.add(decodeURIComponent(c.replace(/\+/g," ")),f)}))}t=Ls.prototype,t.add=function(a,c){Xn(this),this.i=null,a=Ei(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(c),this.h+=1,this};function Hp(a,c){Xn(a),c=Ei(a,c),a.g.has(c)&&(a.i=null,a.h-=a.g.get(c).length,a.g.delete(c))}function Wp(a,c){return Xn(a),c=Ei(a,c),a.g.has(c)}t.forEach=function(a,c){Xn(this),this.g.forEach(function(f,g){f.forEach(function(P){a.call(c,P,g,this)},this)},this)},t.na=function(){Xn(this);const a=Array.from(this.g.values()),c=Array.from(this.g.keys()),f=[];for(let g=0;g<c.length;g++){const P=a[g];for(let D=0;D<P.length;D++)f.push(c[g])}return f},t.V=function(a){Xn(this);let c=[];if(typeof a=="string")Wp(this,a)&&(c=c.concat(this.g.get(Ei(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)c=c.concat(a[f])}return c},t.set=function(a,c){return Xn(this),this.i=null,a=Ei(this,a),Wp(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[c]),this.h+=1,this},t.get=function(a,c){return a?(a=this.V(a),0<a.length?String(a[0]):c):c};function qp(a,c,f){Hp(a,c),0<f.length&&(a.i=null,a.g.set(Ei(a,c),N(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],c=Array.from(this.g.keys());for(var f=0;f<c.length;f++){var g=c[f];const D=encodeURIComponent(String(g)),B=this.V(g);for(g=0;g<B.length;g++){var P=D;B[g]!==""&&(P+="="+encodeURIComponent(String(B[g]))),a.push(P)}}return this.i=a.join("&")};function Ei(a,c){return c=String(c),a.j&&(c=c.toLowerCase()),c}function qE(a,c){c&&!a.j&&(Xn(a),a.i=null,a.g.forEach(function(f,g){var P=g.toLowerCase();g!=P&&(Hp(this,g),qp(this,P,f))},a)),a.j=c}function GE(a,c){const f=new bs;if(l.Image){const g=new Image;g.onload=S(Jn,f,"TestLoadImage: loaded",!0,c,g),g.onerror=S(Jn,f,"TestLoadImage: error",!1,c,g),g.onabort=S(Jn,f,"TestLoadImage: abort",!1,c,g),g.ontimeout=S(Jn,f,"TestLoadImage: timeout",!1,c,g),l.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else c(!1)}function KE(a,c){const f=new bs,g=new AbortController,P=setTimeout(()=>{g.abort(),Jn(f,"TestPingServer: timeout",!1,c)},1e4);fetch(a,{signal:g.signal}).then(D=>{clearTimeout(P),D.ok?Jn(f,"TestPingServer: ok",!0,c):Jn(f,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(P),Jn(f,"TestPingServer: error",!1,c)})}function Jn(a,c,f,g,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),g(f)}catch{}}function QE(){this.g=new NE}function YE(a,c,f){const g=f||"";try{Up(a,function(P,D){let B=P;d(P)&&(B=nc(P)),c.push(g+D+"="+encodeURIComponent(B))})}catch(P){throw c.push(g+"type="+encodeURIComponent("_badmap")),P}}function wa(a){this.l=a.Ub||null,this.j=a.eb||!1}R(wa,rc),wa.prototype.g=function(){return new Ea(this.l,this.j)},wa.prototype.i=function(a){return function(){return a}}({});function Ea(a,c){Ue.call(this),this.D=a,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}R(Ea,Ue),t=Ea.prototype,t.open=function(a,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=c,this.readyState=1,Ms(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(c.body=a),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,js(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Ms(this)),this.g&&(this.readyState=3,Ms(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Gp(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Gp(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var c=a.value?a.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!a.done}))&&(this.response=this.responseText+=c)}a.done?js(this):Ms(this),this.readyState==3&&Gp(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,js(this))},t.Qa=function(a){this.g&&(this.response=a,js(this))},t.ga=function(){this.g&&js(this)};function js(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Ms(a)}t.setRequestHeader=function(a,c){this.u.append(a,c)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],c=this.h.entries();for(var f=c.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=c.next();return a.join(`\r
`)};function Ms(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Ea.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Kp(a){let c="";return z(a,function(f,g){c+=g,c+=":",c+=f,c+=`\r
`}),c}function fc(a,c,f){e:{for(g in f){var g=!1;break e}g=!0}g||(f=Kp(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):ve(a,c,f))}function Ce(a){Ue.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}R(Ce,Ue);var XE=/^https?$/i,JE=["POST","PUT"];t=Ce.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,c,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);c=c?c.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():oc.g(),this.v=this.o?Ip(this.o):Ip(oc),this.g.onreadystatechange=y(this.Ea,this);try{this.B=!0,this.g.open(c,String(a),!0),this.B=!1}catch(D){Qp(this,D);return}if(a=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var P in g)f.set(P,g[P]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const D of g.keys())f.set(D,g.get(D));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(D=>D.toLowerCase()=="content-type"),P=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(JE,c,void 0))||g||P||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,B]of f)this.g.setRequestHeader(D,B);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Jp(this),this.u=!0,this.g.send(a),this.u=!1}catch(D){Qp(this,D)}};function Qp(a,c){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=c,a.m=5,Yp(a),Ta(a)}function Yp(a){a.A||(a.A=!0,dt(a,"complete"),dt(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,dt(this,"complete"),dt(this,"abort"),Ta(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ta(this,!0)),Ce.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Xp(this):this.bb())},t.bb=function(){Xp(this)};function Xp(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Cn(a)!=4||a.Z()!=2)){if(a.u&&Cn(a)==4)_p(a.Ea,0,a);else if(dt(a,"readystatechange"),Cn(a)==4){a.h=!1;try{const B=a.Z();e:switch(B){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var f;if(!(f=c)){var g;if(g=B===0){var P=String(a.D).match(zp)[1]||null;!P&&l.self&&l.self.location&&(P=l.self.location.protocol.slice(0,-1)),g=!XE.test(P?P.toLowerCase():"")}f=g}if(f)dt(a,"complete"),dt(a,"success");else{a.m=6;try{var D=2<Cn(a)?a.g.statusText:""}catch{D=""}a.l=D+" ["+a.Z()+"]",Yp(a)}}finally{Ta(a)}}}}function Ta(a,c){if(a.g){Jp(a);const f=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,c||dt(a,"ready");try{f.onreadystatechange=g}catch{}}}function Jp(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function Cn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<Cn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var c=this.g.responseText;return a&&c.indexOf(a)==0&&(c=c.substring(a.length)),PE(c)}};function Zp(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function ZE(a){const c={};a=(a.g&&2<=Cn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(_(a[g]))continue;var f=A(a[g]);const P=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const D=c[P]||[];c[P]=D,D.push(f)}E(c,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Fs(a,c,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||c}function em(a){this.Aa=0,this.i=[],this.j=new bs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Fs("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Fs("baseRetryDelayMs",5e3,a),this.cb=Fs("retryDelaySeedMs",1e4,a),this.Wa=Fs("forwardChannelMaxRetries",2,a),this.wa=Fs("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Op(a&&a.concurrentRequestLimit),this.Da=new QE,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=em.prototype,t.la=8,t.G=1,t.connect=function(a,c,f,g){ht(0),this.W=a,this.H=c||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.I=um(this,null,this.W),xa(this)};function pc(a){if(tm(a),a.G==3){var c=a.U++,f=An(a.I);if(ve(f,"SID",a.K),ve(f,"RID",c),ve(f,"TYPE","terminate"),Us(a,f),c=new Yn(a,a.j,c),c.L=2,c.v=_a(An(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=c.v,f=!0),f||(c.g=cm(c.j,null),c.g.ea(c.v)),c.F=Date.now(),ga(c)}lm(a)}function Ia(a){a.g&&(gc(a),a.g.cancel(),a.g=null)}function tm(a){Ia(a),a.u&&(l.clearTimeout(a.u),a.u=null),ka(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function xa(a){if(!Lp(a.h)&&!a.s){a.s=!0;var c=a.Ga;yt||Z(),$||(yt(),$=!0),J.add(c,a),a.B=0}}function eT(a,c){return jp(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=c.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Ns(y(a.Ga,a,c),am(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const P=new Yn(this,this.j,a);let D=this.o;if(this.S&&(D?(D=v(D),T(D,this.S)):D=this.S),this.m!==null||this.O||(P.H=D,D=null),this.P)e:{for(var c=0,f=0;f<this.i.length;f++){t:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(c+=g,4096<c){c=f;break e}if(c===4096||f===this.i.length-1){c=f+1;break e}}c=1e3}else c=1e3;c=rm(this,P,c),f=An(this.I),ve(f,"RID",a),ve(f,"CVER",22),this.D&&ve(f,"X-HTTP-Session-Id",this.D),Us(this,f),D&&(this.O?c="headers="+encodeURIComponent(String(Kp(D)))+"&"+c:this.m&&fc(f,this.m,D)),hc(this.h,P),this.Ua&&ve(f,"TYPE","init"),this.P?(ve(f,"$req",c),ve(f,"SID","null"),P.T=!0,lc(P,f,null)):lc(P,f,c),this.G=2}}else this.G==3&&(a?nm(this,a):this.i.length==0||Lp(this.h)||nm(this))};function nm(a,c){var f;c?f=c.l:f=a.U++;const g=An(a.I);ve(g,"SID",a.K),ve(g,"RID",f),ve(g,"AID",a.T),Us(a,g),a.m&&a.o&&fc(g,a.m,a.o),f=new Yn(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),c&&(a.i=c.D.concat(a.i)),c=rm(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),hc(a.h,f),lc(f,g,c)}function Us(a,c){a.H&&z(a.H,function(f,g){ve(c,g,f)}),a.l&&Up({},function(f,g){ve(c,g,f)})}function rm(a,c,f){f=Math.min(a.i.length,f);var g=a.l?y(a.l.Na,a.l,a):null;e:{var P=a.i;let D=-1;for(;;){const B=["count="+f];D==-1?0<f?(D=P[0].g,B.push("ofs="+D)):D=0:B.push("ofs="+D);let pe=!0;for(let We=0;We<f;We++){let de=P[We].g;const Ze=P[We].map;if(de-=D,0>de)D=Math.max(0,P[We].g-100),pe=!1;else try{YE(Ze,B,"req"+de+"_")}catch{g&&g(Ze)}}if(pe){g=B.join("&");break e}}}return a=a.i.splice(0,f),c.D=a,g}function im(a){if(!a.g&&!a.u){a.Y=1;var c=a.Fa;yt||Z(),$||(yt(),$=!0),J.add(c,a),a.v=0}}function mc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Ns(y(a.Fa,a),am(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,sm(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Ns(y(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ht(10),Ia(this),sm(this))};function gc(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function sm(a){a.g=new Yn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var c=An(a.qa);ve(c,"RID","rpc"),ve(c,"SID",a.K),ve(c,"AID",a.T),ve(c,"CI",a.F?"0":"1"),!a.F&&a.ja&&ve(c,"TO",a.ja),ve(c,"TYPE","xmlhttp"),Us(a,c),a.m&&a.o&&fc(c,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=_a(An(c)),f.m=null,f.P=!0,bp(f,a)}t.Za=function(){this.C!=null&&(this.C=null,Ia(this),mc(this),ht(19))};function ka(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function om(a,c){var f=null;if(a.g==c){ka(a),gc(a),a.g=null;var g=2}else if(dc(a.h,c))f=c.D,Mp(a.h,c),g=1;else return;if(a.G!=0){if(c.o)if(g==1){f=c.m?c.m.length:0,c=Date.now()-c.F;var P=a.B;g=fa(),dt(g,new Cp(g,f)),xa(a)}else im(a);else if(P=c.s,P==3||P==0&&0<c.X||!(g==1&&eT(a,c)||g==2&&mc(a)))switch(f&&0<f.length&&(c=a.h,c.i=c.i.concat(f)),P){case 1:Br(a,5);break;case 4:Br(a,10);break;case 3:Br(a,6);break;default:Br(a,2)}}}function am(a,c){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*c}function Br(a,c){if(a.j.info("Error code "+c),c==2){var f=y(a.fb,a),g=a.Xa;const P=!g;g=new zr(g||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||ya(g,"https"),_a(g),P?GE(g.toString(),f):KE(g.toString(),f)}else ht(2);a.G=0,a.l&&a.l.sa(c),lm(a),tm(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),ht(2)):(this.j.info("Failed to ping google.com"),ht(1))};function lm(a){if(a.G=0,a.ka=[],a.l){const c=Fp(a.h);(c.length!=0||a.i.length!=0)&&(O(a.ka,c),O(a.ka,a.i),a.h.i.length=0,N(a.i),a.i.length=0),a.l.ra()}}function um(a,c,f){var g=f instanceof zr?An(f):new zr(f);if(g.g!="")c&&(g.g=c+"."+g.g),va(g,g.s);else{var P=l.location;g=P.protocol,c=c?c+"."+P.hostname:P.hostname,P=+P.port;var D=new zr(null);g&&ya(D,g),c&&(D.g=c),P&&va(D,P),f&&(D.l=f),g=D}return f=a.D,c=a.ya,f&&c&&ve(g,f,c),ve(g,"VER",a.la),Us(a,g),g}function cm(a,c,f){if(c&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=a.Ca&&!a.pa?new Ce(new wa({eb:f})):new Ce(a.pa),c.Ha(a.J),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function dm(){}t=dm.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Sa(){}Sa.prototype.g=function(a,c){return new Rt(a,c)};function Rt(a,c){Ue.call(this),this.g=new em(c),this.l=a,this.h=c&&c.messageUrlParams||null,a=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(a?a["X-WebChannel-Content-Type"]=c.messageContentType:a={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(a?a["X-WebChannel-Client-Profile"]=c.va:a={"X-WebChannel-Client-Profile":c.va}),this.g.S=a,(a=c&&c.Sb)&&!_(a)&&(this.g.m=a),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!_(c)&&(this.g.D=c,a=this.h,a!==null&&c in a&&(a=this.h,c in a&&delete a[c])),this.j=new Ti(this)}R(Rt,Ue),Rt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Rt.prototype.close=function(){pc(this.g)},Rt.prototype.o=function(a){var c=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=nc(a),a=f);c.i.push(new jE(c.Ya++,a)),c.G==3&&xa(c)},Rt.prototype.N=function(){this.g.l=null,delete this.j,pc(this.g),delete this.g,Rt.aa.N.call(this)};function hm(a){ic.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var c=a.__sm__;if(c){e:{for(const f in c){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,c=c!==null&&a in c?c[a]:void 0),this.data=c}else this.data=a}R(hm,ic);function fm(){sc.call(this),this.status=1}R(fm,sc);function Ti(a){this.g=a}R(Ti,dm),Ti.prototype.ua=function(){dt(this.g,"a")},Ti.prototype.ta=function(a){dt(this.g,new hm(a))},Ti.prototype.sa=function(a){dt(this.g,new fm)},Ti.prototype.ra=function(){dt(this.g,"b")},Sa.prototype.createWebChannel=Sa.prototype.g,Rt.prototype.send=Rt.prototype.o,Rt.prototype.open=Rt.prototype.m,Rt.prototype.close=Rt.prototype.close,K1=function(){return new Sa},G1=function(){return fa()},q1=Fr,lh={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},pa.NO_ERROR=0,pa.TIMEOUT=8,pa.HTTP_ERROR=6,ml=pa,Rp.COMPLETE="complete",W1=Rp,xp.EventType=Rs,Rs.OPEN="a",Rs.CLOSE="b",Rs.ERROR="c",Rs.MESSAGE="d",Ue.prototype.listen=Ue.prototype.K,ro=xp,Ce.prototype.listenOnce=Ce.prototype.L,Ce.prototype.getLastError=Ce.prototype.Ka,Ce.prototype.getLastErrorCode=Ce.prototype.Ba,Ce.prototype.getStatus=Ce.prototype.Z,Ce.prototype.getResponseJson=Ce.prototype.Oa,Ce.prototype.getResponseText=Ce.prototype.oa,Ce.prototype.send=Ce.prototype.ea,Ce.prototype.setWithCredentials=Ce.prototype.Ha,H1=Ce}).apply(typeof qa<"u"?qa:typeof self<"u"?self:typeof window<"u"?window:{});const a0="@firebase/firestore",l0="4.7.16";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}it.UNAUTHENTICATED=new it(null),it.GOOGLE_CREDENTIALS=new it("google-credentials-uid"),it.FIRST_PARTY=new it("first-party-uid"),it.MOCK_USER=new it("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vs="11.8.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const li=new bu("@firebase/firestore");function ki(){return li.logLevel}function H(t,...e){if(li.logLevel<=oe.DEBUG){const n=e.map(jf);li.debug(`Firestore (${vs}): ${t}`,...n)}}function Wn(t,...e){if(li.logLevel<=oe.ERROR){const n=e.map(jf);li.error(`Firestore (${vs}): ${t}`,...n)}}function os(t,...e){if(li.logLevel<=oe.WARN){const n=e.map(jf);li.warn(`Firestore (${vs}): ${t}`,...n)}}function jf(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,Q1(t,r,n)}function Q1(t,e,n){let r=`FIRESTORE (${vs}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Wn(r),new Error(r)}function he(t,e,n,r){let i="Unexpected state";typeof n=="string"?i=n:r=n,t||Q1(e,i,r)}function te(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class q extends Qt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y1{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Q2{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(it.UNAUTHENTICATED))}shutdown(){}}class Y2{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class X2{constructor(e){this.t=e,this.currentUser=it.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){he(this.o===void 0,42304);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Mn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Mn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Mn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(he(typeof r.accessToken=="string",31837,{l:r}),new Y1(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return he(e===null||typeof e=="string",2055,{h:e}),new it(e)}}class J2{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=it.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Z2{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new J2(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(it.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class u0{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class eR{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Nt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){he(this.o===void 0,3512);const r=s=>{s.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.m;return this.m=s.token,H("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new u0(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(he(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new u0(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tR(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X1(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J1{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=tR(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%62))}return r}}function ie(t,e){return t<e?-1:t>e?1:0}function uh(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=t.codePointAt(n),i=e.codePointAt(n);if(r!==i){if(r<128&&i<128)return ie(r,i);{const s=X1(),o=nR(s.encode(c0(t,n)),s.encode(c0(e,n)));return o!==0?o:ie(r,i)}}n+=r>65535?2:1}return ie(t.length,e.length)}function c0(t,e){return t.codePointAt(e)>65535?t.substring(e,e+2):t.substring(e,e+1)}function nR(t,e){for(let n=0;n<t.length&&n<e.length;++n)if(t[n]!==e[n])return ie(t[n],e[n]);return ie(t.length,e.length)}function as(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d0=-62135596800,h0=1e6;class je{static now(){return je.fromMillis(Date.now())}static fromDate(e){return je.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*h0);return new je(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new q(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new q(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<d0)throw new q(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new q(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/h0}_compareTo(e){return this.seconds===e.seconds?ie(this.nanoseconds,e.nanoseconds):ie(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-d0;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{static fromTimestamp(e){return new ee(e)}static min(){return new ee(new je(0,0))}static max(){return new ee(new je(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f0="__name__";class mn{constructor(e,n,r){n===void 0?n=0:n>e.length&&X(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&X(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return mn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof mn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=mn.compareSegments(e.get(i),n.get(i));if(s!==0)return s}return ie(e.length,n.length)}static compareSegments(e,n){const r=mn.isNumericId(e),i=mn.isNumericId(n);return r&&!i?-1:!r&&i?1:r&&i?mn.extractNumericId(e).compare(mn.extractNumericId(n)):uh(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Ir.fromString(e.substring(4,e.length-2))}}class we extends mn{construct(e,n,r){return new we(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new q(j.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new we(n)}static emptyPath(){return new we([])}}const rR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ke extends mn{construct(e,n,r){return new Ke(e,n,r)}static isValidIdentifier(e){return rR.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ke.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===f0}static keyField(){return new Ke([f0])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new q(j.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new q(j.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new q(j.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new q(j.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ke(n)}static emptyPath(){return new Ke([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e){this.path=e}static fromPath(e){return new G(we.fromString(e))}static fromName(e){return new G(we.fromString(e).popFirst(5))}static empty(){return new G(we.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&we.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return we.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new G(new we(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $o=-1;function iR(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=ee.fromTimestamp(r===1e9?new je(n+1,0):new je(n,r));return new Cr(i,G.empty(),e)}function sR(t){return new Cr(t.readTime,t.key,$o)}class Cr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Cr(ee.min(),G.empty(),$o)}static max(){return new Cr(ee.max(),G.empty(),$o)}}function oR(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=G.comparator(t.documentKey,e.documentKey),n!==0?n:ie(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class lR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _s(t){if(t.code!==j.FAILED_PRECONDITION||t.message!==aR)throw t;H("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&X(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new L((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof L?n:L.resolve(n)}catch(n){return L.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):L.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):L.reject(n)}static resolve(e){return new L((n,r)=>{n(e)})}static reject(e){return new L((n,r)=>{r(e)})}static waitFor(e){return new L((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=L.resolve(!1);for(const r of e)n=n.next(i=>i?L.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new L((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const d=u;n(e[d]).next(p=>{o[d]=p,++l,l===s&&r(o)},p=>i(p))}})}static doWhile(e,n){return new L((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function uR(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function ws(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fu{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ue(r),this.ce=r=>n.writeSequenceNumber(r))}ue(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ce&&this.ce(e),e}}Fu.le=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mf=-1;function Uu(t){return t==null}function tu(t){return t===0&&1/t==-1/0}function cR(t){return typeof t=="number"&&Number.isInteger(t)&&!tu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z1="";function dR(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=p0(e)),e=hR(t.get(n),e);return p0(e)}function hR(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case Z1:n+="";break;default:n+=s}}return n}function p0(t){return t+Z1+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m0(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function mi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function ew(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(e,n){this.comparator=e,this.root=n||Ge.EMPTY}insert(e,n){return new Ae(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ge.BLACK,null,null))}remove(e){return new Ae(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ge.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ga(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ga(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ga(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ga(this.root,e,this.comparator,!0)}}class Ga{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ge{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Ge.RED,this.left=i??Ge.EMPTY,this.right=s??Ge.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Ge(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ge.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Ge.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ge.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ge.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw X(43730,{key:this.key,value:this.value});if(this.right.isRed())throw X(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw X(27949);return e+(this.isRed()?0:1)}}Ge.EMPTY=null,Ge.RED=!0,Ge.BLACK=!1;Ge.EMPTY=new class{constructor(){this.size=0}get key(){throw X(57766)}get value(){throw X(16141)}get color(){throw X(16727)}get left(){throw X(29726)}get right(){throw X(36894)}copy(e,n,r,i,s){return this}insert(e,n,r){return new Ge(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(e){this.comparator=e,this.data=new Ae(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new g0(this.data.getIterator())}getIteratorFrom(e){return new g0(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Me)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Me(this.comparator);return n.data=e,n}}class g0{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(e){this.fields=e,e.sort(Ke.comparator)}static empty(){return new nn([])}unionWith(e){let n=new Me(Ke.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new nn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return as(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new tw("Invalid base64 string: "+s):s}}(e);return new Xe(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Xe(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ie(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Xe.EMPTY_BYTE_STRING=new Xe("");const fR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Rr(t){if(he(!!t,39018),typeof t=="string"){let e=0;const n=fR.exec(t);if(he(!!n,46558,{timestamp:t}),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Pe(t.seconds),nanos:Pe(t.nanos)}}function Pe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Pr(t){return typeof t=="string"?Xe.fromBase64String(t):Xe.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nw="server_timestamp",rw="__type__",iw="__previous_value__",sw="__local_write_time__";function Ff(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[rw])===null||n===void 0?void 0:n.stringValue)===nw}function zu(t){const e=t.mapValue.fields[iw];return Ff(e)?zu(e):e}function Ho(t){const e=Rr(t.mapValue.fields[sw].timestampValue);return new je(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pR{constructor(e,n,r,i,s,o,l,u,d,p){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=d,this.isUsingEmulator=p}}const nu="(default)";class Wo{constructor(e,n){this.projectId=e,this.database=n||nu}static empty(){return new Wo("","")}get isDefaultDatabase(){return this.database===nu}isEqual(e){return e instanceof Wo&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ow="__type__",aw="__max__",Ka={mapValue:{fields:{__type__:{stringValue:aw}}}},lw="__vector__",ru="value";function Nr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Ff(t)?4:gR(t)?9007199254740991:mR(t)?10:11:X(28295,{value:t})}function In(t,e){if(t===e)return!0;const n=Nr(t);if(n!==Nr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ho(t).isEqual(Ho(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Rr(i.timestampValue),l=Rr(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Pr(i.bytesValue).isEqual(Pr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Pe(i.geoPointValue.latitude)===Pe(s.geoPointValue.latitude)&&Pe(i.geoPointValue.longitude)===Pe(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Pe(i.integerValue)===Pe(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Pe(i.doubleValue),l=Pe(s.doubleValue);return o===l?tu(o)===tu(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return as(t.arrayValue.values||[],e.arrayValue.values||[],In);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(m0(o)!==m0(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!In(o[u],l[u])))return!1;return!0}(t,e);default:return X(52216,{left:t})}}function qo(t,e){return(t.values||[]).find(n=>In(n,e))!==void 0}function ls(t,e){if(t===e)return 0;const n=Nr(t),r=Nr(e);if(n!==r)return ie(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ie(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=Pe(s.integerValue||s.doubleValue),u=Pe(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return y0(t.timestampValue,e.timestampValue);case 4:return y0(Ho(t),Ho(e));case 5:return uh(t.stringValue,e.stringValue);case 6:return function(s,o){const l=Pr(s),u=Pr(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let d=0;d<l.length&&d<u.length;d++){const p=ie(l[d],u[d]);if(p!==0)return p}return ie(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=ie(Pe(s.latitude),Pe(o.latitude));return l!==0?l:ie(Pe(s.longitude),Pe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return v0(t.arrayValue,e.arrayValue);case 10:return function(s,o){var l,u,d,p;const m=s.fields||{},y=o.fields||{},S=(l=m[ru])===null||l===void 0?void 0:l.arrayValue,R=(u=y[ru])===null||u===void 0?void 0:u.arrayValue,N=ie(((d=S==null?void 0:S.values)===null||d===void 0?void 0:d.length)||0,((p=R==null?void 0:R.values)===null||p===void 0?void 0:p.length)||0);return N!==0?N:v0(S,R)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===Ka.mapValue&&o===Ka.mapValue)return 0;if(s===Ka.mapValue)return 1;if(o===Ka.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),d=o.fields||{},p=Object.keys(d);u.sort(),p.sort();for(let m=0;m<u.length&&m<p.length;++m){const y=uh(u[m],p[m]);if(y!==0)return y;const S=ls(l[u[m]],d[p[m]]);if(S!==0)return S}return ie(u.length,p.length)}(t.mapValue,e.mapValue);default:throw X(23264,{Pe:n})}}function y0(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ie(t,e);const n=Rr(t),r=Rr(e),i=ie(n.seconds,r.seconds);return i!==0?i:ie(n.nanos,r.nanos)}function v0(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=ls(n[i],r[i]);if(s)return s}return ie(n.length,r.length)}function us(t){return ch(t)}function ch(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Rr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Pr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return G.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=ch(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${ch(n.fields[o])}`;return i+"}"}(t.mapValue):X(61005,{value:t})}function gl(t){switch(Nr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=zu(t);return e?16+gl(e):16;case 5:return 2*t.stringValue.length;case 6:return Pr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+gl(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return mi(r.fields,(s,o)=>{i+=s.length+gl(o)}),i}(t.mapValue);default:throw X(13486,{value:t})}}function _0(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function dh(t){return!!t&&"integerValue"in t}function Uf(t){return!!t&&"arrayValue"in t}function w0(t){return!!t&&"nullValue"in t}function E0(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function yl(t){return!!t&&"mapValue"in t}function mR(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[ow])===null||n===void 0?void 0:n.stringValue)===lw}function wo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return mi(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=wo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=wo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function gR(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===aw}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(e){this.value=e}static empty(){return new $t({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!yl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=wo(n)}setAll(e){let n=Ke.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=wo(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());yl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return In(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];yl(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){mi(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new $t(wo(this.value))}}function uw(t){const e=[];return mi(t.fields,(n,r)=>{const i=new Ke([n]);if(yl(r)){const s=uw(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new nn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new ot(e,0,ee.min(),ee.min(),ee.min(),$t.empty(),0)}static newFoundDocument(e,n,r,i){return new ot(e,1,n,ee.min(),r,i,0)}static newNoDocument(e,n){return new ot(e,2,n,ee.min(),ee.min(),$t.empty(),0)}static newUnknownDocument(e,n){return new ot(e,3,n,ee.min(),ee.min(),$t.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ee.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=$t.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=$t.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ee.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ot&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ot(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iu{constructor(e,n){this.position=e,this.inclusive=n}}function T0(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=G.comparator(G.fromName(o.referenceValue),n.key):r=ls(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function I0(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!In(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su{constructor(e,n="asc"){this.field=e,this.dir=n}}function yR(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cw{}class Ve extends cw{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new _R(e,n,r):n==="array-contains"?new TR(e,r):n==="in"?new IR(e,r):n==="not-in"?new xR(e,r):n==="array-contains-any"?new kR(e,r):new Ve(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new wR(e,r):new ER(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(ls(n,this.value)):n!==null&&Nr(this.value)===Nr(n)&&this.matchesComparison(ls(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return X(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class dn extends cw{constructor(e,n){super(),this.filters=e,this.op=n,this.Te=null}static create(e,n){return new dn(e,n)}matches(e){return dw(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function dw(t){return t.op==="and"}function hw(t){return vR(t)&&dw(t)}function vR(t){for(const e of t.filters)if(e instanceof dn)return!1;return!0}function hh(t){if(t instanceof Ve)return t.field.canonicalString()+t.op.toString()+us(t.value);if(hw(t))return t.filters.map(e=>hh(e)).join(",");{const e=t.filters.map(n=>hh(n)).join(",");return`${t.op}(${e})`}}function fw(t,e){return t instanceof Ve?function(r,i){return i instanceof Ve&&r.op===i.op&&r.field.isEqual(i.field)&&In(r.value,i.value)}(t,e):t instanceof dn?function(r,i){return i instanceof dn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&fw(o,i.filters[l]),!0):!1}(t,e):void X(19439)}function pw(t){return t instanceof Ve?function(n){return`${n.field.canonicalString()} ${n.op} ${us(n.value)}`}(t):t instanceof dn?function(n){return n.op.toString()+" {"+n.getFilters().map(pw).join(" ,")+"}"}(t):"Filter"}class _R extends Ve{constructor(e,n,r){super(e,n,r),this.key=G.fromName(r.referenceValue)}matches(e){const n=G.comparator(e.key,this.key);return this.matchesComparison(n)}}class wR extends Ve{constructor(e,n){super(e,"in",n),this.keys=mw("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class ER extends Ve{constructor(e,n){super(e,"not-in",n),this.keys=mw("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function mw(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>G.fromName(r.referenceValue))}class TR extends Ve{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Uf(n)&&qo(n.arrayValue,this.value)}}class IR extends Ve{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&qo(this.value.arrayValue,n)}}class xR extends Ve{constructor(e,n){super(e,"not-in",n)}matches(e){if(qo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!qo(this.value.arrayValue,n)}}class kR extends Ve{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Uf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>qo(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SR{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.Ie=null}}function x0(t,e=null,n=[],r=[],i=null,s=null,o=null){return new SR(t,e,n,r,i,s,o)}function zf(t){const e=te(t);if(e.Ie===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>hh(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Uu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>us(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>us(r)).join(",")),e.Ie=n}return e.Ie}function Bf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!yR(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!fw(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!I0(t.startAt,e.startAt)&&I0(t.endAt,e.endAt)}function fh(t){return G.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function AR(t,e,n,r,i,s,o,l){return new sa(t,e,n,r,i,s,o,l)}function $f(t){return new sa(t)}function k0(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function gw(t){return t.collectionGroup!==null}function Eo(t){const e=te(t);if(e.Ee===null){e.Ee=[];const n=new Set;for(const s of e.explicitOrderBy)e.Ee.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Me(Ke.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(d=>{d.isInequality()&&(l=l.add(d.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.Ee.push(new su(s,r))}),n.has(Ke.keyField().canonicalString())||e.Ee.push(new su(Ke.keyField(),r))}return e.Ee}function En(t){const e=te(t);return e.de||(e.de=CR(e,Eo(t))),e.de}function CR(t,e){if(t.limitType==="F")return x0(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new su(i.field,s)});const n=t.endAt?new iu(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new iu(t.startAt.position,t.startAt.inclusive):null;return x0(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function ph(t,e){const n=t.filters.concat([e]);return new sa(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function mh(t,e,n){return new sa(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Bu(t,e){return Bf(En(t),En(e))&&t.limitType===e.limitType}function yw(t){return`${zf(En(t))}|lt:${t.limitType}`}function Si(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>pw(i)).join(", ")}]`),Uu(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>us(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>us(i)).join(",")),`Target(${r})`}(En(t))}; limitType=${t.limitType})`}function $u(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):G.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Eo(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const d=T0(o,l,u);return o.inclusive?d<=0:d<0}(r.startAt,Eo(r),i)||r.endAt&&!function(o,l,u){const d=T0(o,l,u);return o.inclusive?d>=0:d>0}(r.endAt,Eo(r),i))}(t,e)}function RR(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function vw(t){return(e,n)=>{let r=!1;for(const i of Eo(t)){const s=PR(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function PR(t,e,n){const r=t.field.isKeyField()?G.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),d=l.data.field(s);return u!==null&&d!==null?ls(u,d):X(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return X(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){mi(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return ew(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NR=new Ae(G.comparator);function qn(){return NR}const _w=new Ae(G.comparator);function io(...t){let e=_w;for(const n of t)e=e.insert(n.key,n);return e}function ww(t){let e=_w;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Yr(){return To()}function Ew(){return To()}function To(){return new gi(t=>t.toString(),(t,e)=>t.isEqual(e))}const bR=new Ae(G.comparator),DR=new Me(G.comparator);function ae(...t){let e=DR;for(const n of t)e=e.add(n);return e}const VR=new Me(ie);function OR(){return VR}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hf(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:tu(e)?"-0":e}}function Tw(t){return{integerValue:""+t}}function LR(t,e){return cR(e)?Tw(e):Hf(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hu{constructor(){this._=void 0}}function jR(t,e,n){return t instanceof ou?function(i,s){const o={fields:{[rw]:{stringValue:nw},[sw]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Ff(s)&&(s=zu(s)),s&&(o.fields[iw]=s),{mapValue:o}}(n,e):t instanceof Go?xw(t,e):t instanceof Ko?kw(t,e):function(i,s){const o=Iw(i,s),l=S0(o)+S0(i.Re);return dh(o)&&dh(i.Re)?Tw(l):Hf(i.serializer,l)}(t,e)}function MR(t,e,n){return t instanceof Go?xw(t,e):t instanceof Ko?kw(t,e):n}function Iw(t,e){return t instanceof au?function(r){return dh(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class ou extends Hu{}class Go extends Hu{constructor(e){super(),this.elements=e}}function xw(t,e){const n=Sw(e);for(const r of t.elements)n.some(i=>In(i,r))||n.push(r);return{arrayValue:{values:n}}}class Ko extends Hu{constructor(e){super(),this.elements=e}}function kw(t,e){let n=Sw(e);for(const r of t.elements)n=n.filter(i=>!In(i,r));return{arrayValue:{values:n}}}class au extends Hu{constructor(e,n){super(),this.serializer=e,this.Re=n}}function S0(t){return Pe(t.integerValue||t.doubleValue)}function Sw(t){return Uf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function FR(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Go&&i instanceof Go||r instanceof Ko&&i instanceof Ko?as(r.elements,i.elements,In):r instanceof au&&i instanceof au?In(r.Re,i.Re):r instanceof ou&&i instanceof ou}(t.transform,e.transform)}class UR{constructor(e,n){this.version=e,this.transformResults=n}}class an{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new an}static exists(e){return new an(void 0,e)}static updateTime(e){return new an(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function vl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Wu{}function Aw(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Wf(t.key,an.none()):new oa(t.key,t.data,an.none());{const n=t.data,r=$t.empty();let i=new Me(Ke.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new yi(t.key,r,new nn(i.toArray()),an.none())}}function zR(t,e,n){t instanceof oa?function(i,s,o){const l=i.value.clone(),u=C0(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof yi?function(i,s,o){if(!vl(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=C0(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(Cw(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Io(t,e,n,r){return t instanceof oa?function(s,o,l,u){if(!vl(s.precondition,o))return l;const d=s.value.clone(),p=R0(s.fieldTransforms,u,o);return d.setAll(p),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),null}(t,e,n,r):t instanceof yi?function(s,o,l,u){if(!vl(s.precondition,o))return l;const d=R0(s.fieldTransforms,u,o),p=o.data;return p.setAll(Cw(s)),p.setAll(d),o.convertToFoundDocument(o.version,p).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(m=>m.field))}(t,e,n,r):function(s,o,l){return vl(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function BR(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=Iw(r.transform,i||null);s!=null&&(n===null&&(n=$t.empty()),n.set(r.field,s))}return n||null}function A0(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&as(r,i,(s,o)=>FR(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class oa extends Wu{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class yi extends Wu{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Cw(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function C0(t,e,n){const r=new Map;he(t.length===n.length,32656,{Ve:n.length,me:t.length});for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,MR(o,l,n[i]))}return r}function R0(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,jR(s,o,e))}return r}class Wf extends Wu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class $R extends Wu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HR{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&zR(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Io(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Io(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Ew();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=Aw(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(ee.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ae())}isEqual(e){return this.batchId===e.batchId&&as(this.mutations,e.mutations,(n,r)=>A0(n,r))&&as(this.baseMutations,e.baseMutations,(n,r)=>A0(n,r))}}class qf{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){he(e.mutations.length===r.length,58842,{fe:e.mutations.length,ge:r.length});let i=function(){return bR}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new qf(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WR{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qR{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var be,le;function GR(t){switch(t){case j.OK:return X(64938);case j.CANCELLED:case j.UNKNOWN:case j.DEADLINE_EXCEEDED:case j.RESOURCE_EXHAUSTED:case j.INTERNAL:case j.UNAVAILABLE:case j.UNAUTHENTICATED:return!1;case j.INVALID_ARGUMENT:case j.NOT_FOUND:case j.ALREADY_EXISTS:case j.PERMISSION_DENIED:case j.FAILED_PRECONDITION:case j.ABORTED:case j.OUT_OF_RANGE:case j.UNIMPLEMENTED:case j.DATA_LOSS:return!0;default:return X(15467,{code:t})}}function Rw(t){if(t===void 0)return Wn("GRPC error has no .code"),j.UNKNOWN;switch(t){case be.OK:return j.OK;case be.CANCELLED:return j.CANCELLED;case be.UNKNOWN:return j.UNKNOWN;case be.DEADLINE_EXCEEDED:return j.DEADLINE_EXCEEDED;case be.RESOURCE_EXHAUSTED:return j.RESOURCE_EXHAUSTED;case be.INTERNAL:return j.INTERNAL;case be.UNAVAILABLE:return j.UNAVAILABLE;case be.UNAUTHENTICATED:return j.UNAUTHENTICATED;case be.INVALID_ARGUMENT:return j.INVALID_ARGUMENT;case be.NOT_FOUND:return j.NOT_FOUND;case be.ALREADY_EXISTS:return j.ALREADY_EXISTS;case be.PERMISSION_DENIED:return j.PERMISSION_DENIED;case be.FAILED_PRECONDITION:return j.FAILED_PRECONDITION;case be.ABORTED:return j.ABORTED;case be.OUT_OF_RANGE:return j.OUT_OF_RANGE;case be.UNIMPLEMENTED:return j.UNIMPLEMENTED;case be.DATA_LOSS:return j.DATA_LOSS;default:return X(39323,{code:t})}}(le=be||(be={}))[le.OK=0]="OK",le[le.CANCELLED=1]="CANCELLED",le[le.UNKNOWN=2]="UNKNOWN",le[le.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",le[le.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",le[le.NOT_FOUND=5]="NOT_FOUND",le[le.ALREADY_EXISTS=6]="ALREADY_EXISTS",le[le.PERMISSION_DENIED=7]="PERMISSION_DENIED",le[le.UNAUTHENTICATED=16]="UNAUTHENTICATED",le[le.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",le[le.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",le[le.ABORTED=10]="ABORTED",le[le.OUT_OF_RANGE=11]="OUT_OF_RANGE",le[le.UNIMPLEMENTED=12]="UNIMPLEMENTED",le[le.INTERNAL=13]="INTERNAL",le[le.UNAVAILABLE=14]="UNAVAILABLE",le[le.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KR=new Ir([4294967295,4294967295],0);function P0(t){const e=X1().encode(t),n=new $1;return n.update(e),new Uint8Array(n.digest())}function N0(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Ir([n,r],0),new Ir([i,s],0)]}class Gf{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new so(`Invalid padding: ${n}`);if(r<0)throw new so(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new so(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new so(`Invalid padding when bitmap length is 0: ${n}`);this.pe=8*e.length-n,this.ye=Ir.fromNumber(this.pe)}we(e,n,r){let i=e.add(n.multiply(Ir.fromNumber(r)));return i.compare(KR)===1&&(i=new Ir([i.getBits(0),i.getBits(1)],0)),i.modulo(this.ye).toNumber()}Se(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.pe===0)return!1;const n=P0(e),[r,i]=N0(n);for(let s=0;s<this.hashCount;s++){const o=this.we(r,i,s);if(!this.Se(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Gf(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.pe===0)return;const n=P0(e),[r,i]=N0(n);for(let s=0;s<this.hashCount;s++){const o=this.we(r,i,s);this.be(o)}}be(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class so extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qu{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,aa.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new qu(ee.min(),i,new Ae(ie),qn(),ae())}}class aa{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new aa(r,n,ae(),ae(),ae())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l{constructor(e,n,r,i){this.De=e,this.removedTargetIds=n,this.key=r,this.ve=i}}class Pw{constructor(e,n){this.targetId=e,this.Ce=n}}class Nw{constructor(e,n,r=Xe.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class b0{constructor(){this.Fe=0,this.Me=D0(),this.xe=Xe.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return this.Fe!==0}get Le(){return this.Ne}ke(e){e.approximateByteSize()>0&&(this.Ne=!0,this.xe=e)}qe(){let e=ae(),n=ae(),r=ae();return this.Me.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:X(38017,{changeType:s})}}),new aa(this.xe,this.Oe,e,n,r)}Qe(){this.Ne=!1,this.Me=D0()}$e(e,n){this.Ne=!0,this.Me=this.Me.insert(e,n)}Ue(e){this.Ne=!0,this.Me=this.Me.remove(e)}Ke(){this.Fe+=1}We(){this.Fe-=1,he(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class QR{constructor(e){this.ze=e,this.je=new Map,this.He=qn(),this.Je=Qa(),this.Ye=Qa(),this.Ze=new Ae(ie)}Xe(e){for(const n of e.De)e.ve&&e.ve.isFoundDocument()?this.et(n,e.ve):this.tt(n,e.key,e.ve);for(const n of e.removedTargetIds)this.tt(n,e.key,e.ve)}nt(e){this.forEachTarget(e,n=>{const r=this.rt(n);switch(e.state){case 0:this.it(n)&&r.ke(e.resumeToken);break;case 1:r.We(),r.Be||r.Qe(),r.ke(e.resumeToken);break;case 2:r.We(),r.Be||this.removeTarget(n);break;case 3:this.it(n)&&(r.Ge(),r.ke(e.resumeToken));break;case 4:this.it(n)&&(this.st(n),r.ke(e.resumeToken));break;default:X(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.je.forEach((r,i)=>{this.it(i)&&n(i)})}ot(e){const n=e.targetId,r=e.Ce.count,i=this._t(n);if(i){const s=i.target;if(fh(s))if(r===0){const o=new G(s.path);this.tt(n,o,ot.newNoDocument(o,ee.min()))}else he(r===1,20013,{expectedCount:r});else{const o=this.ut(n);if(o!==r){const l=this.ct(e),u=l?this.lt(l,e,o):1;if(u!==0){this.st(n);const d=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,d)}}}}}ct(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=Pr(r).toUint8Array()}catch(u){if(u instanceof tw)return os("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Gf(o,i,s)}catch(u){return os(u instanceof so?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.pe===0?null:l}lt(e,n,r){return n.Ce.count===r-this.Tt(e,n.targetId)?0:2}Tt(e,n){const r=this.ze.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.ze.Pt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.tt(n,s,null),i++)}),i}It(e){const n=new Map;this.je.forEach((s,o)=>{const l=this._t(o);if(l){if(s.current&&fh(l.target)){const u=new G(l.target.path);this.Et(u).has(o)||this.dt(o,u)||this.tt(o,u,ot.newNoDocument(u,e))}s.Le&&(n.set(o,s.qe()),s.Qe())}});let r=ae();this.Ye.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const d=this._t(u);return!d||d.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.He.forEach((s,o)=>o.setReadTime(e));const i=new qu(e,n,this.Ze,this.He,r);return this.He=qn(),this.Je=Qa(),this.Ye=Qa(),this.Ze=new Ae(ie),i}et(e,n){if(!this.it(e))return;const r=this.dt(e,n.key)?2:0;this.rt(e).$e(n.key,r),this.He=this.He.insert(n.key,n),this.Je=this.Je.insert(n.key,this.Et(n.key).add(e)),this.Ye=this.Ye.insert(n.key,this.At(n.key).add(e))}tt(e,n,r){if(!this.it(e))return;const i=this.rt(e);this.dt(e,n)?i.$e(n,1):i.Ue(n),this.Ye=this.Ye.insert(n,this.At(n).delete(e)),this.Ye=this.Ye.insert(n,this.At(n).add(e)),r&&(this.He=this.He.insert(n,r))}removeTarget(e){this.je.delete(e)}ut(e){const n=this.rt(e).qe();return this.ze.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ke(e){this.rt(e).Ke()}rt(e){let n=this.je.get(e);return n||(n=new b0,this.je.set(e,n)),n}At(e){let n=this.Ye.get(e);return n||(n=new Me(ie),this.Ye=this.Ye.insert(e,n)),n}Et(e){let n=this.Je.get(e);return n||(n=new Me(ie),this.Je=this.Je.insert(e,n)),n}it(e){const n=this._t(e)!==null;return n||H("WatchChangeAggregator","Detected inactive target",e),n}_t(e){const n=this.je.get(e);return n&&n.Be?null:this.ze.Rt(e)}st(e){this.je.set(e,new b0),this.ze.getRemoteKeysForTarget(e).forEach(n=>{this.tt(e,n,null)})}dt(e,n){return this.ze.getRemoteKeysForTarget(e).has(n)}}function Qa(){return new Ae(G.comparator)}function D0(){return new Ae(G.comparator)}const YR=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),XR=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),JR=(()=>({and:"AND",or:"OR"}))();class ZR{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function gh(t,e){return t.useProto3Json||Uu(e)?e:{value:e}}function lu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function bw(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function eP(t,e){return lu(t,e.toTimestamp())}function Tn(t){return he(!!t,49232),ee.fromTimestamp(function(n){const r=Rr(n);return new je(r.seconds,r.nanos)}(t))}function Kf(t,e){return yh(t,e).canonicalString()}function yh(t,e){const n=function(i){return new we(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Dw(t){const e=we.fromString(t);return he(Mw(e),10190,{key:e.toString()}),e}function vh(t,e){return Kf(t.databaseId,e.path)}function ed(t,e){const n=Dw(e);if(n.get(1)!==t.databaseId.projectId)throw new q(j.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new q(j.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new G(Ow(n))}function Vw(t,e){return Kf(t.databaseId,e)}function tP(t){const e=Dw(t);return e.length===4?we.emptyPath():Ow(e)}function _h(t){return new we(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Ow(t){return he(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function V0(t,e,n){return{name:vh(t,e),fields:n.value.mapValue.fields}}function nP(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:X(39313,{state:d})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(d,p){return d.useProto3Json?(he(p===void 0||typeof p=="string",58123),Xe.fromBase64String(p||"")):(he(p===void 0||p instanceof Buffer||p instanceof Uint8Array,16193),Xe.fromUint8Array(p||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(d){const p=d.code===void 0?j.UNKNOWN:Rw(d.code);return new q(p,d.message||"")}(o);n=new Nw(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=ed(t,r.document.name),s=Tn(r.document.updateTime),o=r.document.createTime?Tn(r.document.createTime):ee.min(),l=new $t({mapValue:{fields:r.document.fields}}),u=ot.newFoundDocument(i,s,o,l),d=r.targetIds||[],p=r.removedTargetIds||[];n=new _l(d,p,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=ed(t,r.document),s=r.readTime?Tn(r.readTime):ee.min(),o=ot.newNoDocument(i,s),l=r.removedTargetIds||[];n=new _l([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=ed(t,r.document),s=r.removedTargetIds||[];n=new _l([],s,i,null)}else{if(!("filter"in e))return X(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new qR(i,s),l=r.targetId;n=new Pw(l,o)}}return n}function rP(t,e){let n;if(e instanceof oa)n={update:V0(t,e.key,e.value)};else if(e instanceof Wf)n={delete:vh(t,e.key)};else if(e instanceof yi)n={update:V0(t,e.key,e.data),updateMask:hP(e.fieldMask)};else{if(!(e instanceof $R))return X(16599,{ft:e.type});n={verify:vh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof ou)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Go)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Ko)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof au)return{fieldPath:o.field.canonicalString(),increment:l.Re};throw X(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:eP(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:X(27497)}(t,e.precondition)),n}function iP(t,e){return t&&t.length>0?(he(e!==void 0,14353),t.map(n=>function(i,s){let o=i.updateTime?Tn(i.updateTime):Tn(s);return o.isEqual(ee.min())&&(o=Tn(s)),new UR(o,i.transformResults||[])}(n,e))):[]}function sP(t,e){return{documents:[Vw(t,e.path)]}}function oP(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Vw(t,i);const s=function(d){if(d.length!==0)return jw(dn.create(d,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(d){if(d.length!==0)return d.map(p=>function(y){return{field:Ai(y.field),direction:uP(y.dir)}}(p))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=gh(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{gt:n,parent:i}}function aP(t){let e=tP(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){he(r===1,65062);const p=n.from[0];p.allDescendants?i=p.collectionId:e=e.child(p.collectionId)}let s=[];n.where&&(s=function(m){const y=Lw(m);return y instanceof dn&&hw(y)?y.getFilters():[y]}(n.where));let o=[];n.orderBy&&(o=function(m){return m.map(y=>function(R){return new su(Ci(R.field),function(O){switch(O){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(R.direction))}(y))}(n.orderBy));let l=null;n.limit&&(l=function(m){let y;return y=typeof m=="object"?m.value:m,Uu(y)?null:y}(n.limit));let u=null;n.startAt&&(u=function(m){const y=!!m.before,S=m.values||[];return new iu(S,y)}(n.startAt));let d=null;return n.endAt&&(d=function(m){const y=!m.before,S=m.values||[];return new iu(S,y)}(n.endAt)),AR(e,i,o,s,l,"F",u,d)}function lP(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return X(28987,{purpose:i})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Lw(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ci(n.unaryFilter.field);return Ve.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Ci(n.unaryFilter.field);return Ve.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Ci(n.unaryFilter.field);return Ve.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ci(n.unaryFilter.field);return Ve.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return X(61313);default:return X(60726)}}(t):t.fieldFilter!==void 0?function(n){return Ve.create(Ci(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return X(58110);default:return X(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return dn.create(n.compositeFilter.filters.map(r=>Lw(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return X(1026)}}(n.compositeFilter.op))}(t):X(30097,{filter:t})}function uP(t){return YR[t]}function cP(t){return XR[t]}function dP(t){return JR[t]}function Ai(t){return{fieldPath:t.canonicalString()}}function Ci(t){return Ke.fromServerFormat(t.fieldPath)}function jw(t){return t instanceof Ve?function(n){if(n.op==="=="){if(E0(n.value))return{unaryFilter:{field:Ai(n.field),op:"IS_NAN"}};if(w0(n.value))return{unaryFilter:{field:Ai(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(E0(n.value))return{unaryFilter:{field:Ai(n.field),op:"IS_NOT_NAN"}};if(w0(n.value))return{unaryFilter:{field:Ai(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ai(n.field),op:cP(n.op),value:n.value}}}(t):t instanceof dn?function(n){const r=n.getFilters().map(i=>jw(i));return r.length===1?r[0]:{compositeFilter:{op:dP(n.op),filters:r}}}(t):X(54877,{filter:t})}function hP(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Mw(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(e,n,r,i,s=ee.min(),o=ee.min(),l=Xe.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new hr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new hr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new hr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new hr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fP{constructor(e){this.wt=e}}function pP(t){const e=aP({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?mh(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mP{constructor(){this.Cn=new gP}addToCollectionParentIndex(e,n){return this.Cn.add(n),L.resolve()}getCollectionParents(e,n){return L.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return L.resolve()}deleteFieldIndex(e,n){return L.resolve()}deleteAllFieldIndexes(e){return L.resolve()}createTargetIndexes(e,n){return L.resolve()}getDocumentsMatchingTarget(e,n){return L.resolve(null)}getIndexType(e,n){return L.resolve(0)}getFieldIndexes(e,n){return L.resolve([])}getNextCollectionGroupToUpdate(e){return L.resolve(null)}getMinOffset(e,n){return L.resolve(Cr.min())}getMinOffsetFromCollectionGroup(e,n){return L.resolve(Cr.min())}updateCollectionGroup(e,n,r){return L.resolve()}updateIndexEntries(e,n){return L.resolve()}}class gP{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Me(we.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Me(we.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O0={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Fw=41943040;class vt{static withCacheSize(e){return new vt(e,vt.DEFAULT_COLLECTION_PERCENTILE,vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */vt.DEFAULT_COLLECTION_PERCENTILE=10,vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,vt.DEFAULT=new vt(Fw,vt.DEFAULT_COLLECTION_PERCENTILE,vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),vt.DISABLED=new vt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(e){this.ur=e}next(){return this.ur+=2,this.ur}static cr(){return new cs(0)}static lr(){return new cs(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L0="LruGarbageCollector",yP=1048576;function j0([t,e],[n,r]){const i=ie(t,n);return i===0?ie(e,r):i}class vP{constructor(e){this.Er=e,this.buffer=new Me(j0),this.dr=0}Ar(){return++this.dr}Rr(e){const n=[e,this.Ar()];if(this.buffer.size<this.Er)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();j0(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class _P{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Vr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.mr(6e4)}stop(){this.Vr&&(this.Vr.cancel(),this.Vr=null)}get started(){return this.Vr!==null}mr(e){H(L0,`Garbage collection scheduled in ${e}ms`),this.Vr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Vr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){ws(n)?H(L0,"Ignoring IndexedDB error during garbage collection: ",n):await _s(n)}await this.mr(3e5)})}}class wP{constructor(e,n){this.gr=e,this.params=n}calculateTargetCount(e,n){return this.gr.pr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return L.resolve(Fu.le);const r=new vP(n);return this.gr.forEachTarget(e,i=>r.Rr(i.sequenceNumber)).next(()=>this.gr.yr(e,i=>r.Rr(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.gr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.gr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(H("LruGarbageCollector","Garbage collection skipped; disabled"),L.resolve(O0)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(H("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),O0):this.wr(e,n))}getCacheSize(e){return this.gr.getCacheSize(e)}wr(e,n){let r,i,s,o,l,u,d;const p=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(m=>(m>this.params.maximumSequenceNumbersToCollect?(H("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),i=this.params.maximumSequenceNumbersToCollect):i=m,o=Date.now(),this.nthSequenceNumber(e,i))).next(m=>(r=m,l=Date.now(),this.removeTargets(e,r,n))).next(m=>(s=m,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(m=>(d=Date.now(),ki()<=oe.DEBUG&&H("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-p}ms
	Determined least recently used ${i} in `+(l-o)+`ms
	Removed ${s} targets in `+(u-l)+`ms
	Removed ${m} documents in `+(d-u)+`ms
Total Duration: ${d-p}ms`),L.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:m})))}}function EP(t,e){return new wP(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TP{constructor(){this.changes=new gi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ot.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?L.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IP{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xP{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Io(r.mutation,i,nn.empty(),je.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ae()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ae()){const i=Yr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=io();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Yr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ae()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=qn();const o=To(),l=function(){return To()}();return n.forEach((u,d)=>{const p=r.get(d.key);i.has(d.key)&&(p===void 0||p.mutation instanceof yi)?s=s.insert(d.key,d):p!==void 0?(o.set(d.key,p.mutation.getFieldMask()),Io(p.mutation,d,p.mutation.getFieldMask(),je.now())):o.set(d.key,nn.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((d,p)=>o.set(d,p)),n.forEach((d,p)=>{var m;return l.set(d,new IP(p,(m=o.get(d))!==null&&m!==void 0?m:null))}),l))}recalculateAndSaveOverlays(e,n){const r=To();let i=new Ae((o,l)=>o-l),s=ae();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const d=n.get(u);if(d===null)return;let p=r.get(u)||nn.empty();p=l.applyToLocalView(d,p),r.set(u,p);const m=(i.get(l.batchId)||ae()).add(u);i=i.insert(l.batchId,m)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),d=u.key,p=u.value,m=Ew();p.forEach(y=>{if(!s.has(y)){const S=Aw(n.get(y),r.get(y));S!==null&&m.set(y,S),s=s.add(y)}}),o.push(this.documentOverlayCache.saveOverlays(e,d,m))}return L.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return G.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):gw(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):L.resolve(Yr());let l=$o,u=s;return o.next(d=>L.forEach(d,(p,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),s.get(p)?L.resolve():this.remoteDocumentCache.getEntry(e,p).next(y=>{u=u.insert(p,y)}))).next(()=>this.populateOverlays(e,d,s)).next(()=>this.computeViews(e,u,d,ae())).next(p=>({batchId:l,changes:ww(p)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new G(n)).next(r=>{let i=io();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=io();return this.indexManager.getCollectionParents(e,s).next(l=>L.forEach(l,u=>{const d=function(m,y){return new sa(y,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,d,r,i).next(p=>{p.forEach((m,y)=>{o=o.insert(m,y)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,d)=>{const p=d.getKey();o.get(p)===null&&(o=o.insert(p,ot.newInvalidDocument(p)))});let l=io();return o.forEach((u,d)=>{const p=s.get(u);p!==void 0&&Io(p.mutation,d,nn.empty(),je.now()),$u(n,d)&&(l=l.insert(u,d))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kP{constructor(e){this.serializer=e,this.kr=new Map,this.qr=new Map}getBundleMetadata(e,n){return L.resolve(this.kr.get(n))}saveBundleMetadata(e,n){return this.kr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Tn(i.createTime)}}(n)),L.resolve()}getNamedQuery(e,n){return L.resolve(this.qr.get(n))}saveNamedQuery(e,n){return this.qr.set(n.name,function(i){return{name:i.name,query:pP(i.bundledQuery),readTime:Tn(i.readTime)}}(n)),L.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SP{constructor(){this.overlays=new Ae(G.comparator),this.Qr=new Map}getOverlay(e,n){return L.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Yr();return L.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.bt(e,n,s)}),L.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Qr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Qr.delete(r)),L.resolve()}getOverlaysForCollection(e,n,r){const i=Yr(),s=n.length+1,o=new G(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,d=u.getKey();if(!n.isPrefixOf(d.path))break;d.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return L.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ae((d,p)=>d-p);const o=this.overlays.getIterator();for(;o.hasNext();){const d=o.getNext().value;if(d.getKey().getCollectionGroup()===n&&d.largestBatchId>r){let p=s.get(d.largestBatchId);p===null&&(p=Yr(),s=s.insert(d.largestBatchId,p)),p.set(d.getKey(),d)}}const l=Yr(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((d,p)=>l.set(d,p)),!(l.size()>=i)););return L.resolve(l)}bt(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Qr.get(i.largestBatchId).delete(r.key);this.Qr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new WR(n,r));let s=this.Qr.get(n);s===void 0&&(s=ae(),this.Qr.set(n,s)),this.Qr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AP{constructor(){this.sessionToken=Xe.EMPTY_BYTE_STRING}getSessionToken(e){return L.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,L.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qf{constructor(){this.$r=new Me(ze.Ur),this.Kr=new Me(ze.Wr)}isEmpty(){return this.$r.isEmpty()}addReference(e,n){const r=new ze(e,n);this.$r=this.$r.add(r),this.Kr=this.Kr.add(r)}Gr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.zr(new ze(e,n))}jr(e,n){e.forEach(r=>this.removeReference(r,n))}Hr(e){const n=new G(new we([])),r=new ze(n,e),i=new ze(n,e+1),s=[];return this.Kr.forEachInRange([r,i],o=>{this.zr(o),s.push(o.key)}),s}Jr(){this.$r.forEach(e=>this.zr(e))}zr(e){this.$r=this.$r.delete(e),this.Kr=this.Kr.delete(e)}Yr(e){const n=new G(new we([])),r=new ze(n,e),i=new ze(n,e+1);let s=ae();return this.Kr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new ze(e,0),r=this.$r.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ze{constructor(e,n){this.key=e,this.Zr=n}static Ur(e,n){return G.comparator(e.key,n.key)||ie(e.Zr,n.Zr)}static Wr(e,n){return ie(e.Zr,n.Zr)||G.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CP{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.nr=1,this.Xr=new Me(ze.Ur)}checkEmpty(e){return L.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.nr;this.nr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new HR(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.Xr=this.Xr.add(new ze(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return L.resolve(o)}lookupMutationBatch(e,n){return L.resolve(this.ei(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.ti(r),s=i<0?0:i;return L.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return L.resolve(this.mutationQueue.length===0?Mf:this.nr-1)}getAllMutationBatches(e){return L.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ze(n,0),i=new ze(n,Number.POSITIVE_INFINITY),s=[];return this.Xr.forEachInRange([r,i],o=>{const l=this.ei(o.Zr);s.push(l)}),L.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Me(ie);return n.forEach(i=>{const s=new ze(i,0),o=new ze(i,Number.POSITIVE_INFINITY);this.Xr.forEachInRange([s,o],l=>{r=r.add(l.Zr)})}),L.resolve(this.ni(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;G.isDocumentKey(s)||(s=s.child(""));const o=new ze(new G(s),0);let l=new Me(ie);return this.Xr.forEachWhile(u=>{const d=u.key.path;return!!r.isPrefixOf(d)&&(d.length===i&&(l=l.add(u.Zr)),!0)},o),L.resolve(this.ni(l))}ni(e){const n=[];return e.forEach(r=>{const i=this.ei(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){he(this.ri(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Xr;return L.forEach(n.mutations,i=>{const s=new ze(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Xr=r})}sr(e){}containsKey(e,n){const r=new ze(n,0),i=this.Xr.firstAfterOrEqual(r);return L.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,L.resolve()}ri(e,n){return this.ti(e)}ti(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ei(e){const n=this.ti(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RP{constructor(e){this.ii=e,this.docs=function(){return new Ae(G.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.ii(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return L.resolve(r?r.document.mutableCopy():ot.newInvalidDocument(n))}getEntries(e,n){let r=qn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():ot.newInvalidDocument(i))}),L.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=qn();const o=n.path,l=new G(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:d,value:{document:p}}=u.getNext();if(!o.isPrefixOf(d.path))break;d.path.length>o.length+1||oR(sR(p),r)<=0||(i.has(p.key)||$u(n,p))&&(s=s.insert(p.key,p.mutableCopy()))}return L.resolve(s)}getAllFromCollectionGroup(e,n,r,i){X(9500)}si(e,n){return L.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new PP(this)}getSize(e){return L.resolve(this.size)}}class PP extends TP{constructor(e){super(),this.Br=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Br.addEntry(e,i)):this.Br.removeEntry(r)}),L.waitFor(n)}getFromCache(e,n){return this.Br.getEntry(e,n)}getAllFromCache(e,n){return this.Br.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NP{constructor(e){this.persistence=e,this.oi=new gi(n=>zf(n),Bf),this.lastRemoteSnapshotVersion=ee.min(),this.highestTargetId=0,this._i=0,this.ai=new Qf,this.targetCount=0,this.ui=cs.cr()}forEachTarget(e,n){return this.oi.forEach((r,i)=>n(i)),L.resolve()}getLastRemoteSnapshotVersion(e){return L.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return L.resolve(this._i)}allocateTargetId(e){return this.highestTargetId=this.ui.next(),L.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this._i&&(this._i=n),L.resolve()}Tr(e){this.oi.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ui=new cs(n),this.highestTargetId=n),e.sequenceNumber>this._i&&(this._i=e.sequenceNumber)}addTargetData(e,n){return this.Tr(n),this.targetCount+=1,L.resolve()}updateTargetData(e,n){return this.Tr(n),L.resolve()}removeTargetData(e,n){return this.oi.delete(n.target),this.ai.Hr(n.targetId),this.targetCount-=1,L.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.oi.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.oi.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),L.waitFor(s).next(()=>i)}getTargetCount(e){return L.resolve(this.targetCount)}getTargetData(e,n){const r=this.oi.get(n)||null;return L.resolve(r)}addMatchingKeys(e,n,r){return this.ai.Gr(n,r),L.resolve()}removeMatchingKeys(e,n,r){this.ai.jr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),L.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.ai.Hr(n),L.resolve()}getMatchingKeysForTargetId(e,n){const r=this.ai.Yr(n);return L.resolve(r)}containsKey(e,n){return L.resolve(this.ai.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uw{constructor(e,n){this.ci={},this.overlays={},this.li=new Fu(0),this.hi=!1,this.hi=!0,this.Pi=new AP,this.referenceDelegate=e(this),this.Ti=new NP(this),this.indexManager=new mP,this.remoteDocumentCache=function(i){return new RP(i)}(r=>this.referenceDelegate.Ii(r)),this.serializer=new fP(n),this.Ei=new kP(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.hi=!1,Promise.resolve()}get started(){return this.hi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new SP,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ci[e.toKey()];return r||(r=new CP(n,this.referenceDelegate),this.ci[e.toKey()]=r),r}getGlobalsCache(){return this.Pi}getTargetCache(){return this.Ti}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ei}runTransaction(e,n,r){H("MemoryPersistence","Starting transaction:",e);const i=new bP(this.li.next());return this.referenceDelegate.di(),r(i).next(s=>this.referenceDelegate.Ai(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ri(e,n){return L.or(Object.values(this.ci).map(r=>()=>r.containsKey(e,n)))}}class bP extends lR{constructor(e){super(),this.currentSequenceNumber=e}}class Yf{constructor(e){this.persistence=e,this.Vi=new Qf,this.mi=null}static fi(e){return new Yf(e)}get gi(){if(this.mi)return this.mi;throw X(60996)}addReference(e,n,r){return this.Vi.addReference(r,n),this.gi.delete(r.toString()),L.resolve()}removeReference(e,n,r){return this.Vi.removeReference(r,n),this.gi.add(r.toString()),L.resolve()}markPotentiallyOrphaned(e,n){return this.gi.add(n.toString()),L.resolve()}removeTarget(e,n){this.Vi.Hr(n.targetId).forEach(i=>this.gi.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.gi.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}di(){this.mi=new Set}Ai(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return L.forEach(this.gi,r=>{const i=G.fromPath(r);return this.pi(e,i).next(s=>{s||n.removeEntry(i,ee.min())})}).next(()=>(this.mi=null,n.apply(e)))}updateLimboDocument(e,n){return this.pi(e,n).next(r=>{r?this.gi.delete(n.toString()):this.gi.add(n.toString())})}Ii(e){return 0}pi(e,n){return L.or([()=>L.resolve(this.Vi.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ri(e,n)])}}class uu{constructor(e,n){this.persistence=e,this.yi=new gi(r=>dR(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=EP(this,n)}static fi(e,n){return new uu(e,n)}di(){}Ai(e){return L.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}pr(e){const n=this.Sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}Sr(e){let n=0;return this.yr(e,r=>{n++}).next(()=>n)}yr(e,n){return L.forEach(this.yi,(r,i)=>this.Dr(e,r,i).next(s=>s?L.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.si(e,o=>this.Dr(e,o,n).next(l=>{l||(r++,s.removeEntry(o,ee.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.yi.set(n,e.currentSequenceNumber),L.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.yi.set(r,e.currentSequenceNumber),L.resolve()}removeReference(e,n,r){return this.yi.set(r,e.currentSequenceNumber),L.resolve()}updateLimboDocument(e,n){return this.yi.set(n,e.currentSequenceNumber),L.resolve()}Ii(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=gl(e.data.value)),n}Dr(e,n,r){return L.or([()=>this.persistence.Ri(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.yi.get(n);return L.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xf{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.ds=r,this.As=i}static Rs(e,n){let r=ae(),i=ae();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Xf(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DP{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VP{constructor(){this.Vs=!1,this.fs=!1,this.gs=100,this.ps=function(){return Wx()?8:uR(lt())>0?6:4}()}initialize(e,n){this.ys=e,this.indexManager=n,this.Vs=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.ws(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Ss(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new DP;return this.bs(e,n,o).next(l=>{if(s.result=l,this.fs)return this.Ds(e,n,o,l.size)})}).next(()=>s.result)}Ds(e,n,r,i){return r.documentReadCount<this.gs?(ki()<=oe.DEBUG&&H("QueryEngine","SDK will not create cache indexes for query:",Si(n),"since it only creates cache indexes for collection contains","more than or equal to",this.gs,"documents"),L.resolve()):(ki()<=oe.DEBUG&&H("QueryEngine","Query:",Si(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.ps*i?(ki()<=oe.DEBUG&&H("QueryEngine","The SDK decides to create cache indexes for query:",Si(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,En(n))):L.resolve())}ws(e,n){if(k0(n))return L.resolve(null);let r=En(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=mh(n,null,"F"),r=En(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ae(...s);return this.ys.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const d=this.vs(n,l);return this.Cs(n,d,o,u.readTime)?this.ws(e,mh(n,null,"F")):this.Fs(e,d,n,u)}))})))}Ss(e,n,r,i){return k0(n)||i.isEqual(ee.min())?L.resolve(null):this.ys.getDocuments(e,r).next(s=>{const o=this.vs(n,s);return this.Cs(n,o,r,i)?L.resolve(null):(ki()<=oe.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Si(n)),this.Fs(e,o,n,iR(i,$o)).next(l=>l))})}vs(e,n){let r=new Me(vw(e));return n.forEach((i,s)=>{$u(e,s)&&(r=r.add(s))}),r}Cs(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}bs(e,n,r){return ki()<=oe.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",Si(n)),this.ys.getDocumentsMatchingQuery(e,n,Cr.min(),r)}Fs(e,n,r,i){return this.ys.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jf="LocalStore",OP=3e8;class LP{constructor(e,n,r,i){this.persistence=e,this.Ms=n,this.serializer=i,this.xs=new Ae(ie),this.Os=new gi(s=>zf(s),Bf),this.Ns=new Map,this.Bs=e.getRemoteDocumentCache(),this.Ti=e.getTargetCache(),this.Ei=e.getBundleCache(),this.Ls(r)}Ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new xP(this.Bs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Ms.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.xs))}}function jP(t,e,n,r){return new LP(t,e,n,r)}async function zw(t,e){const n=te(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=ae();for(const d of i){o.push(d.batchId);for(const p of d.mutations)u=u.add(p.key)}for(const d of s){l.push(d.batchId);for(const p of d.mutations)u=u.add(p.key)}return n.localDocuments.getDocuments(r,u).next(d=>({ks:d,removedBatchIds:o,addedBatchIds:l}))})})}function MP(t,e){const n=te(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Bs.newChangeBuffer({trackRemovals:!0});return function(l,u,d,p){const m=d.batch,y=m.keys();let S=L.resolve();return y.forEach(R=>{S=S.next(()=>p.getEntry(u,R)).next(N=>{const O=d.docVersions.get(R);he(O!==null,48541),N.version.compareTo(O)<0&&(m.applyToRemoteDocument(N,d),N.isValidDocument()&&(N.setReadTime(d.commitVersion),p.addEntry(N)))})}),S.next(()=>l.mutationQueue.removeMutationBatch(u,m))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=ae();for(let d=0;d<l.mutationResults.length;++d)l.mutationResults[d].transformResults.length>0&&(u=u.add(l.batch.mutations[d].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function Bw(t){const e=te(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ti.getLastRemoteSnapshotVersion(n))}function FP(t,e){const n=te(t),r=e.snapshotVersion;let i=n.xs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Bs.newChangeBuffer({trackRemovals:!0});i=n.xs;const l=[];e.targetChanges.forEach((p,m)=>{const y=i.get(m);if(!y)return;l.push(n.Ti.removeMatchingKeys(s,p.removedDocuments,m).next(()=>n.Ti.addMatchingKeys(s,p.addedDocuments,m)));let S=y.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(m)!==null?S=S.withResumeToken(Xe.EMPTY_BYTE_STRING,ee.min()).withLastLimboFreeSnapshotVersion(ee.min()):p.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(p.resumeToken,r)),i=i.insert(m,S),function(N,O,k){return N.resumeToken.approximateByteSize()===0||O.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=OP?!0:k.addedDocuments.size+k.modifiedDocuments.size+k.removedDocuments.size>0}(y,S,p)&&l.push(n.Ti.updateTargetData(s,S))});let u=qn(),d=ae();if(e.documentUpdates.forEach(p=>{e.resolvedLimboDocuments.has(p)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,p))}),l.push(UP(s,o,e.documentUpdates).next(p=>{u=p.qs,d=p.Qs})),!r.isEqual(ee.min())){const p=n.Ti.getLastRemoteSnapshotVersion(s).next(m=>n.Ti.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(p)}return L.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,d)).next(()=>u)}).then(s=>(n.xs=i,s))}function UP(t,e,n){let r=ae(),i=ae();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=qn();return n.forEach((l,u)=>{const d=s.get(l);u.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(ee.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!d.isValidDocument()||u.version.compareTo(d.version)>0||u.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):H(Jf,"Ignoring outdated watch update for ",l,". Current version:",d.version," Watch version:",u.version)}),{qs:o,Qs:i}})}function zP(t,e){const n=te(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Mf),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function BP(t,e){const n=te(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ti.getTargetData(r,e).next(s=>s?(i=s,L.resolve(i)):n.Ti.allocateTargetId(r).next(o=>(i=new hr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ti.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.xs.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.xs=n.xs.insert(r.targetId,r),n.Os.set(e,r.targetId)),r})}async function wh(t,e,n){const r=te(t),i=r.xs.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!ws(o))throw o;H(Jf,`Failed to update sequence numbers for target ${e}: ${o}`)}r.xs=r.xs.remove(e),r.Os.delete(i.target)}function M0(t,e,n){const r=te(t);let i=ee.min(),s=ae();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,d,p){const m=te(u),y=m.Os.get(p);return y!==void 0?L.resolve(m.xs.get(y)):m.Ti.getTargetData(d,p)}(r,o,En(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Ti.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.Ms.getDocumentsMatchingQuery(o,e,n?i:ee.min(),n?s:ae())).next(l=>($P(r,RR(e),l),{documents:l,$s:s})))}function $P(t,e,n){let r=t.Ns.get(e)||ee.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Ns.set(e,r)}class F0{constructor(){this.activeTargetIds=OR()}js(e){this.activeTargetIds=this.activeTargetIds.add(e)}Hs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}zs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class HP{constructor(){this.xo=new F0,this.Oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.xo.js(e),this.Oo[e]||"not-current"}updateQueryState(e,n,r){this.Oo[e]=n}removeLocalQueryTarget(e){this.xo.Hs(e)}isLocalQueryTarget(e){return this.xo.activeTargetIds.has(e)}clearQueryState(e){delete this.Oo[e]}getAllActiveQueryTargets(){return this.xo.activeTargetIds}isActiveQueryTarget(e){return this.xo.activeTargetIds.has(e)}start(){return this.xo=new F0,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WP{No(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U0="ConnectivityMonitor";class z0{constructor(){this.Bo=()=>this.Lo(),this.ko=()=>this.qo(),this.Qo=[],this.$o()}No(e){this.Qo.push(e)}shutdown(){window.removeEventListener("online",this.Bo),window.removeEventListener("offline",this.ko)}$o(){window.addEventListener("online",this.Bo),window.addEventListener("offline",this.ko)}Lo(){H(U0,"Network connectivity changed: AVAILABLE");for(const e of this.Qo)e(0)}qo(){H(U0,"Network connectivity changed: UNAVAILABLE");for(const e of this.Qo)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ya=null;function Eh(){return Ya===null?Ya=function(){return 268435456+Math.round(2147483648*Math.random())}():Ya++,"0x"+Ya.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const td="RestConnection",qP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class GP{get Uo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Ko=n+"://"+e.host,this.Wo=`projects/${r}/databases/${i}`,this.Go=this.databaseId.database===nu?`project_id=${r}`:`project_id=${r}&database_id=${i}`}zo(e,n,r,i,s){const o=Eh(),l=this.jo(e,n.toUriEncodedString());H(td,`Sending RPC '${e}' ${o}:`,l,r);const u={"google-cloud-resource-prefix":this.Wo,"x-goog-request-params":this.Go};this.Ho(u,i,s);const{host:d}=new URL(l),p=gs(d);return this.Jo(e,l,u,r,p).then(m=>(H(td,`Received RPC '${e}' ${o}: `,m),m),m=>{throw os(td,`RPC '${e}' ${o} failed with error: `,m,"url: ",l,"request:",r),m})}Yo(e,n,r,i,s,o){return this.zo(e,n,r,i,s)}Ho(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+vs}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}jo(e,n){const r=qP[e];return`${this.Ko}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KP{constructor(e){this.Zo=e.Zo,this.Xo=e.Xo}e_(e){this.t_=e}n_(e){this.r_=e}i_(e){this.s_=e}onMessage(e){this.o_=e}close(){this.Xo()}send(e){this.Zo(e)}__(){this.t_()}a_(){this.r_()}u_(e){this.s_(e)}c_(e){this.o_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rt="WebChannelConnection";class QP extends GP{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,i,s){const o=Eh();return new Promise((l,u)=>{const d=new H1;d.setWithCredentials(!0),d.listenOnce(W1.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case ml.NO_ERROR:const m=d.getResponseJson();H(rt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(m)),l(m);break;case ml.TIMEOUT:H(rt,`RPC '${e}' ${o} timed out`),u(new q(j.DEADLINE_EXCEEDED,"Request time out"));break;case ml.HTTP_ERROR:const y=d.getStatus();if(H(rt,`RPC '${e}' ${o} failed with status:`,y,"response text:",d.getResponseText()),y>0){let S=d.getResponseJson();Array.isArray(S)&&(S=S[0]);const R=S==null?void 0:S.error;if(R&&R.status&&R.message){const N=function(k){const _=k.toLowerCase().replace(/_/g,"-");return Object.values(j).indexOf(_)>=0?_:j.UNKNOWN}(R.status);u(new q(N,R.message))}else u(new q(j.UNKNOWN,"Server responded with status "+d.getStatus()))}else u(new q(j.UNAVAILABLE,"Connection failed."));break;default:X(9055,{l_:e,streamId:o,h_:d.getLastErrorCode(),P_:d.getLastError()})}}finally{H(rt,`RPC '${e}' ${o} completed.`)}});const p=JSON.stringify(i);H(rt,`RPC '${e}' ${o} sending request:`,i),d.send(n,"POST",p,r,15)})}T_(e,n,r){const i=Eh(),s=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=K1(),l=G1(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(u.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Ho(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const p=s.join("");H(rt,`Creating RPC '${e}' stream ${i}: ${p}`,u);const m=o.createWebChannel(p,u);let y=!1,S=!1;const R=new KP({Zo:O=>{S?H(rt,`Not sending because RPC '${e}' stream ${i} is closed:`,O):(y||(H(rt,`Opening RPC '${e}' stream ${i} transport.`),m.open(),y=!0),H(rt,`RPC '${e}' stream ${i} sending:`,O),m.send(O))},Xo:()=>m.close()}),N=(O,k,_)=>{O.listen(k,x=>{try{_(x)}catch(V){setTimeout(()=>{throw V},0)}})};return N(m,ro.EventType.OPEN,()=>{S||(H(rt,`RPC '${e}' stream ${i} transport opened.`),R.__())}),N(m,ro.EventType.CLOSE,()=>{S||(S=!0,H(rt,`RPC '${e}' stream ${i} transport closed`),R.u_())}),N(m,ro.EventType.ERROR,O=>{S||(S=!0,os(rt,`RPC '${e}' stream ${i} transport errored. Name:`,O.name,"Message:",O.message),R.u_(new q(j.UNAVAILABLE,"The operation could not be completed")))}),N(m,ro.EventType.MESSAGE,O=>{var k;if(!S){const _=O.data[0];he(!!_,16349);const x=_,V=(x==null?void 0:x.error)||((k=x[0])===null||k===void 0?void 0:k.error);if(V){H(rt,`RPC '${e}' stream ${i} received error:`,V);const U=V.status;let z=function(w){const T=be[w];if(T!==void 0)return Rw(T)}(U),E=V.message;z===void 0&&(z=j.INTERNAL,E="Unknown error status: "+U+" with message "+V.message),S=!0,R.u_(new q(z,E)),m.close()}else H(rt,`RPC '${e}' stream ${i} received:`,_),R.c_(_)}}),N(l,q1.STAT_EVENT,O=>{O.stat===lh.PROXY?H(rt,`RPC '${e}' stream ${i} detected buffering proxy`):O.stat===lh.NOPROXY&&H(rt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{R.a_()},0),R}}function nd(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gu(t){return new ZR(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $w{constructor(e,n,r=1e3,i=1.5,s=6e4){this.xi=e,this.timerId=n,this.I_=r,this.E_=i,this.d_=s,this.A_=0,this.R_=null,this.V_=Date.now(),this.reset()}reset(){this.A_=0}m_(){this.A_=this.d_}f_(e){this.cancel();const n=Math.floor(this.A_+this.g_()),r=Math.max(0,Date.now()-this.V_),i=Math.max(0,n-r);i>0&&H("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.A_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.R_=this.xi.enqueueAfterDelay(this.timerId,i,()=>(this.V_=Date.now(),e())),this.A_*=this.E_,this.A_<this.I_&&(this.A_=this.I_),this.A_>this.d_&&(this.A_=this.d_)}p_(){this.R_!==null&&(this.R_.skipDelay(),this.R_=null)}cancel(){this.R_!==null&&(this.R_.cancel(),this.R_=null)}g_(){return(Math.random()-.5)*this.A_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B0="PersistentStream";class Hw{constructor(e,n,r,i,s,o,l,u){this.xi=e,this.y_=r,this.w_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.S_=0,this.b_=null,this.D_=null,this.stream=null,this.v_=0,this.C_=new $w(e,n)}F_(){return this.state===1||this.state===5||this.M_()}M_(){return this.state===2||this.state===3}start(){this.v_=0,this.state!==4?this.auth():this.x_()}async stop(){this.F_()&&await this.close(0)}O_(){this.state=0,this.C_.reset()}N_(){this.M_()&&this.b_===null&&(this.b_=this.xi.enqueueAfterDelay(this.y_,6e4,()=>this.B_()))}L_(e){this.k_(),this.stream.send(e)}async B_(){if(this.M_())return this.close(0)}k_(){this.b_&&(this.b_.cancel(),this.b_=null)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}async close(e,n){this.k_(),this.q_(),this.C_.cancel(),this.S_++,e!==4?this.C_.reset():n&&n.code===j.RESOURCE_EXHAUSTED?(Wn(n.toString()),Wn("Using maximum backoff delay to prevent overloading the backend."),this.C_.m_()):n&&n.code===j.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Q_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.i_(n)}Q_(){}auth(){this.state=1;const e=this.U_(this.S_),n=this.S_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.S_===n&&this.K_(r,i)},r=>{e(()=>{const i=new q(j.UNKNOWN,"Fetching auth token failed: "+r.message);return this.W_(i)})})}K_(e,n){const r=this.U_(this.S_);this.stream=this.G_(e,n),this.stream.e_(()=>{r(()=>this.listener.e_())}),this.stream.n_(()=>{r(()=>(this.state=2,this.D_=this.xi.enqueueAfterDelay(this.w_,1e4,()=>(this.M_()&&(this.state=3),Promise.resolve())),this.listener.n_()))}),this.stream.i_(i=>{r(()=>this.W_(i))}),this.stream.onMessage(i=>{r(()=>++this.v_==1?this.z_(i):this.onNext(i))})}x_(){this.state=5,this.C_.f_(async()=>{this.state=0,this.start()})}W_(e){return H(B0,`close with error: ${e}`),this.stream=null,this.close(4,e)}U_(e){return n=>{this.xi.enqueueAndForget(()=>this.S_===e?n():(H(B0,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class YP extends Hw{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}G_(e,n){return this.connection.T_("Listen",e,n)}z_(e){return this.onNext(e)}onNext(e){this.C_.reset();const n=nP(this.serializer,e),r=function(s){if(!("targetChange"in s))return ee.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?ee.min():o.readTime?Tn(o.readTime):ee.min()}(e);return this.listener.j_(n,r)}H_(e){const n={};n.database=_h(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=fh(u)?{documents:sP(s,u)}:{query:oP(s,u).gt},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=bw(s,o.resumeToken);const d=gh(s,o.expectedCount);d!==null&&(l.expectedCount=d)}else if(o.snapshotVersion.compareTo(ee.min())>0){l.readTime=lu(s,o.snapshotVersion.toTimestamp());const d=gh(s,o.expectedCount);d!==null&&(l.expectedCount=d)}return l}(this.serializer,e);const r=lP(this.serializer,e);r&&(n.labels=r),this.L_(n)}J_(e){const n={};n.database=_h(this.serializer),n.removeTarget=e,this.L_(n)}}class XP extends Hw{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get Y_(){return this.v_>0}start(){this.lastStreamToken=void 0,super.start()}Q_(){this.Y_&&this.Z_([])}G_(e,n){return this.connection.T_("Write",e,n)}z_(e){return he(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,he(!e.writeResults||e.writeResults.length===0,55816),this.listener.X_()}onNext(e){he(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.C_.reset();const n=iP(e.writeResults,e.commitTime),r=Tn(e.commitTime);return this.listener.ea(r,n)}ta(){const e={};e.database=_h(this.serializer),this.L_(e)}Z_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>rP(this.serializer,r))};this.L_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JP{}class ZP extends JP{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.na=!1}ra(){if(this.na)throw new q(j.FAILED_PRECONDITION,"The client has already been terminated.")}zo(e,n,r,i){return this.ra(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.zo(e,yh(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new q(j.UNKNOWN,s.toString())})}Yo(e,n,r,i,s){return this.ra(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Yo(e,yh(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new q(j.UNKNOWN,o.toString())})}terminate(){this.na=!0,this.connection.terminate()}}class eN{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.ia=0,this.sa=null,this.oa=!0}_a(){this.ia===0&&(this.aa("Unknown"),this.sa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.sa=null,this.ua("Backend didn't respond within 10 seconds."),this.aa("Offline"),Promise.resolve())))}ca(e){this.state==="Online"?this.aa("Unknown"):(this.ia++,this.ia>=1&&(this.la(),this.ua(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.aa("Offline")))}set(e){this.la(),this.ia=0,e==="Online"&&(this.oa=!1),this.aa(e)}aa(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ua(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.oa?(Wn(n),this.oa=!1):H("OnlineStateTracker",n)}la(){this.sa!==null&&(this.sa.cancel(),this.sa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ui="RemoteStore";class tN{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.ha=[],this.Pa=new Map,this.Ta=new Set,this.Ia=[],this.Ea=s,this.Ea.No(o=>{r.enqueueAndForget(async()=>{vi(this)&&(H(ui,"Restarting streams for network reachability change."),await async function(u){const d=te(u);d.Ta.add(4),await la(d),d.da.set("Unknown"),d.Ta.delete(4),await Ku(d)}(this))})}),this.da=new eN(r,i)}}async function Ku(t){if(vi(t))for(const e of t.Ia)await e(!0)}async function la(t){for(const e of t.Ia)await e(!1)}function Ww(t,e){const n=te(t);n.Pa.has(e.targetId)||(n.Pa.set(e.targetId,e),np(n)?tp(n):Es(n).M_()&&ep(n,e))}function Zf(t,e){const n=te(t),r=Es(n);n.Pa.delete(e),r.M_()&&qw(n,e),n.Pa.size===0&&(r.M_()?r.N_():vi(n)&&n.da.set("Unknown"))}function ep(t,e){if(t.Aa.Ke(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ee.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Es(t).H_(e)}function qw(t,e){t.Aa.Ke(e),Es(t).J_(e)}function tp(t){t.Aa=new QR({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Rt:e=>t.Pa.get(e)||null,Pt:()=>t.datastore.serializer.databaseId}),Es(t).start(),t.da._a()}function np(t){return vi(t)&&!Es(t).F_()&&t.Pa.size>0}function vi(t){return te(t).Ta.size===0}function Gw(t){t.Aa=void 0}async function nN(t){t.da.set("Online")}async function rN(t){t.Pa.forEach((e,n)=>{ep(t,e)})}async function iN(t,e){Gw(t),np(t)?(t.da.ca(e),tp(t)):t.da.set("Unknown")}async function sN(t,e,n){if(t.da.set("Online"),e instanceof Nw&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.Pa.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.Pa.delete(l),i.Aa.removeTarget(l))}(t,e)}catch(r){H(ui,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await cu(t,r)}else if(e instanceof _l?t.Aa.Xe(e):e instanceof Pw?t.Aa.ot(e):t.Aa.nt(e),!n.isEqual(ee.min()))try{const r=await Bw(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.Aa.It(o);return l.targetChanges.forEach((u,d)=>{if(u.resumeToken.approximateByteSize()>0){const p=s.Pa.get(d);p&&s.Pa.set(d,p.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,d)=>{const p=s.Pa.get(u);if(!p)return;s.Pa.set(u,p.withResumeToken(Xe.EMPTY_BYTE_STRING,p.snapshotVersion)),qw(s,u);const m=new hr(p.target,u,d,p.sequenceNumber);ep(s,m)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){H(ui,"Failed to raise snapshot:",r),await cu(t,r)}}async function cu(t,e,n){if(!ws(e))throw e;t.Ta.add(1),await la(t),t.da.set("Offline"),n||(n=()=>Bw(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{H(ui,"Retrying IndexedDB access"),await n(),t.Ta.delete(1),await Ku(t)})}function Kw(t,e){return e().catch(n=>cu(t,n,e))}async function Qu(t){const e=te(t),n=br(e);let r=e.ha.length>0?e.ha[e.ha.length-1].batchId:Mf;for(;oN(e);)try{const i=await zP(e.localStore,r);if(i===null){e.ha.length===0&&n.N_();break}r=i.batchId,aN(e,i)}catch(i){await cu(e,i)}Qw(e)&&Yw(e)}function oN(t){return vi(t)&&t.ha.length<10}function aN(t,e){t.ha.push(e);const n=br(t);n.M_()&&n.Y_&&n.Z_(e.mutations)}function Qw(t){return vi(t)&&!br(t).F_()&&t.ha.length>0}function Yw(t){br(t).start()}async function lN(t){br(t).ta()}async function uN(t){const e=br(t);for(const n of t.ha)e.Z_(n.mutations)}async function cN(t,e,n){const r=t.ha.shift(),i=qf.from(r,e,n);await Kw(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Qu(t)}async function dN(t,e){e&&br(t).Y_&&await async function(r,i){if(function(o){return GR(o)&&o!==j.ABORTED}(i.code)){const s=r.ha.shift();br(r).O_(),await Kw(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Qu(r)}}(t,e),Qw(t)&&Yw(t)}async function $0(t,e){const n=te(t);n.asyncQueue.verifyOperationInProgress(),H(ui,"RemoteStore received new credentials");const r=vi(n);n.Ta.add(3),await la(n),r&&n.da.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ta.delete(3),await Ku(n)}async function hN(t,e){const n=te(t);e?(n.Ta.delete(2),await Ku(n)):e||(n.Ta.add(2),await la(n),n.da.set("Unknown"))}function Es(t){return t.Ra||(t.Ra=function(n,r,i){const s=te(n);return s.ra(),new YP(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{e_:nN.bind(null,t),n_:rN.bind(null,t),i_:iN.bind(null,t),j_:sN.bind(null,t)}),t.Ia.push(async e=>{e?(t.Ra.O_(),np(t)?tp(t):t.da.set("Unknown")):(await t.Ra.stop(),Gw(t))})),t.Ra}function br(t){return t.Va||(t.Va=function(n,r,i){const s=te(n);return s.ra(),new XP(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{e_:()=>Promise.resolve(),n_:lN.bind(null,t),i_:dN.bind(null,t),X_:uN.bind(null,t),ea:cN.bind(null,t)}),t.Ia.push(async e=>{e?(t.Va.O_(),await Qu(t)):(await t.Va.stop(),t.ha.length>0&&(H(ui,`Stopping write stream with ${t.ha.length} pending writes`),t.ha=[]))})),t.Va}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rp{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Mn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new rp(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new q(j.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ip(t,e){if(Wn("AsyncQueue",`${e}: ${t}`),ws(t))return new q(j.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{static emptySet(e){return new Xi(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||G.comparator(n.key,r.key):(n,r)=>G.comparator(n.key,r.key),this.keyedMap=io(),this.sortedSet=new Ae(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Xi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Xi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H0{constructor(){this.ma=new Ae(G.comparator)}track(e){const n=e.doc.key,r=this.ma.get(n);r?e.type!==0&&r.type===3?this.ma=this.ma.insert(n,e):e.type===3&&r.type!==1?this.ma=this.ma.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ma=this.ma.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ma=this.ma.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ma=this.ma.remove(n):e.type===1&&r.type===2?this.ma=this.ma.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ma=this.ma.insert(n,{type:2,doc:e.doc}):X(63341,{Vt:e,fa:r}):this.ma=this.ma.insert(n,e)}ga(){const e=[];return this.ma.inorderTraversal((n,r)=>{e.push(r)}),e}}class ds{constructor(e,n,r,i,s,o,l,u,d){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=d}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new ds(e,n,Xi.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Bu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fN{constructor(){this.pa=void 0,this.ya=[]}wa(){return this.ya.some(e=>e.Sa())}}class pN{constructor(){this.queries=W0(),this.onlineState="Unknown",this.ba=new Set}terminate(){(function(n,r){const i=te(n),s=i.queries;i.queries=W0(),s.forEach((o,l)=>{for(const u of l.ya)u.onError(r)})})(this,new q(j.ABORTED,"Firestore shutting down"))}}function W0(){return new gi(t=>yw(t),Bu)}async function Xw(t,e){const n=te(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.wa()&&e.Sa()&&(r=2):(s=new fN,r=e.Sa()?0:1);try{switch(r){case 0:s.pa=await n.onListen(i,!0);break;case 1:s.pa=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=ip(o,`Initialization of query '${Si(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.ya.push(e),e.Da(n.onlineState),s.pa&&e.va(s.pa)&&sp(n)}async function Jw(t,e){const n=te(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.ya.indexOf(e);o>=0&&(s.ya.splice(o,1),s.ya.length===0?i=e.Sa()?0:1:!s.wa()&&e.Sa()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function mN(t,e){const n=te(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.ya)l.va(i)&&(r=!0);o.pa=i}}r&&sp(n)}function gN(t,e,n){const r=te(t),i=r.queries.get(e);if(i)for(const s of i.ya)s.onError(n);r.queries.delete(e)}function sp(t){t.ba.forEach(e=>{e.next()})}var Th,q0;(q0=Th||(Th={})).Ca="default",q0.Cache="cache";class Zw{constructor(e,n,r){this.query=e,this.Fa=n,this.Ma=!1,this.xa=null,this.onlineState="Unknown",this.options=r||{}}va(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new ds(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Ma?this.Oa(e)&&(this.Fa.next(e),n=!0):this.Na(e,this.onlineState)&&(this.Ba(e),n=!0),this.xa=e,n}onError(e){this.Fa.error(e)}Da(e){this.onlineState=e;let n=!1;return this.xa&&!this.Ma&&this.Na(this.xa,e)&&(this.Ba(this.xa),n=!0),n}Na(e,n){if(!e.fromCache||!this.Sa())return!0;const r=n!=="Offline";return(!this.options.La||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Oa(e){if(e.docChanges.length>0)return!0;const n=this.xa&&this.xa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Ba(e){e=ds.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Ma=!0,this.Fa.next(e)}Sa(){return this.options.source!==Th.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eE{constructor(e){this.key=e}}class tE{constructor(e){this.key=e}}class yN{constructor(e,n){this.query=e,this.Ga=n,this.za=null,this.hasCachedResults=!1,this.current=!1,this.ja=ae(),this.mutatedKeys=ae(),this.Ha=vw(e),this.Ja=new Xi(this.Ha)}get Ya(){return this.Ga}Za(e,n){const r=n?n.Xa:new H0,i=n?n.Ja:this.Ja;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((p,m)=>{const y=i.get(p),S=$u(this.query,m)?m:null,R=!!y&&this.mutatedKeys.has(y.key),N=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let O=!1;y&&S?y.data.isEqual(S.data)?R!==N&&(r.track({type:3,doc:S}),O=!0):this.eu(y,S)||(r.track({type:2,doc:S}),O=!0,(u&&this.Ha(S,u)>0||d&&this.Ha(S,d)<0)&&(l=!0)):!y&&S?(r.track({type:0,doc:S}),O=!0):y&&!S&&(r.track({type:1,doc:y}),O=!0,(u||d)&&(l=!0)),O&&(S?(o=o.add(S),s=N?s.add(p):s.delete(p)):(o=o.delete(p),s=s.delete(p)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const p=this.query.limitType==="F"?o.last():o.first();o=o.delete(p.key),s=s.delete(p.key),r.track({type:1,doc:p})}return{Ja:o,Xa:r,Cs:l,mutatedKeys:s}}eu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ja;this.Ja=e.Ja,this.mutatedKeys=e.mutatedKeys;const o=e.Xa.ga();o.sort((p,m)=>function(S,R){const N=O=>{switch(O){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return X(20277,{Vt:O})}};return N(S)-N(R)}(p.type,m.type)||this.Ha(p.doc,m.doc)),this.tu(r),i=i!=null&&i;const l=n&&!i?this.nu():[],u=this.ja.size===0&&this.current&&!i?1:0,d=u!==this.za;return this.za=u,o.length!==0||d?{snapshot:new ds(this.query,e.Ja,s,o,e.mutatedKeys,u===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),ru:l}:{ru:l}}Da(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ja:this.Ja,Xa:new H0,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{ru:[]}}iu(e){return!this.Ga.has(e)&&!!this.Ja.has(e)&&!this.Ja.get(e).hasLocalMutations}tu(e){e&&(e.addedDocuments.forEach(n=>this.Ga=this.Ga.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ga=this.Ga.delete(n)),this.current=e.current)}nu(){if(!this.current)return[];const e=this.ja;this.ja=ae(),this.Ja.forEach(r=>{this.iu(r.key)&&(this.ja=this.ja.add(r.key))});const n=[];return e.forEach(r=>{this.ja.has(r)||n.push(new tE(r))}),this.ja.forEach(r=>{e.has(r)||n.push(new eE(r))}),n}su(e){this.Ga=e.$s,this.ja=ae();const n=this.Za(e.documents);return this.applyChanges(n,!0)}ou(){return ds.fromInitialDocuments(this.query,this.Ja,this.mutatedKeys,this.za===0,this.hasCachedResults)}}const op="SyncEngine";class vN{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class _N{constructor(e){this.key=e,this._u=!1}}class wN{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.au={},this.uu=new gi(l=>yw(l),Bu),this.cu=new Map,this.lu=new Set,this.hu=new Ae(G.comparator),this.Pu=new Map,this.Tu=new Qf,this.Iu={},this.Eu=new Map,this.du=cs.lr(),this.onlineState="Unknown",this.Au=void 0}get isPrimaryClient(){return this.Au===!0}}async function EN(t,e,n=!0){const r=aE(t);let i;const s=r.uu.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.ou()):i=await nE(r,e,n,!0),i}async function TN(t,e){const n=aE(t);await nE(n,e,!0,!1)}async function nE(t,e,n,r){const i=await BP(t.localStore,En(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await IN(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&Ww(t.remoteStore,i),l}async function IN(t,e,n,r,i){t.Ru=(m,y,S)=>async function(N,O,k,_){let x=O.view.Za(k);x.Cs&&(x=await M0(N.localStore,O.query,!1).then(({documents:E})=>O.view.Za(E,x)));const V=_&&_.targetChanges.get(O.targetId),U=_&&_.targetMismatches.get(O.targetId)!=null,z=O.view.applyChanges(x,N.isPrimaryClient,V,U);return K0(N,O.targetId,z.ru),z.snapshot}(t,m,y,S);const s=await M0(t.localStore,e,!0),o=new yN(e,s.$s),l=o.Za(s.documents),u=aa.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),d=o.applyChanges(l,t.isPrimaryClient,u);K0(t,n,d.ru);const p=new vN(e,n,o);return t.uu.set(e,p),t.cu.has(n)?t.cu.get(n).push(e):t.cu.set(n,[e]),d.snapshot}async function xN(t,e,n){const r=te(t),i=r.uu.get(e),s=r.cu.get(i.targetId);if(s.length>1)return r.cu.set(i.targetId,s.filter(o=>!Bu(o,e))),void r.uu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await wh(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Zf(r.remoteStore,i.targetId),Ih(r,i.targetId)}).catch(_s)):(Ih(r,i.targetId),await wh(r.localStore,i.targetId,!0))}async function kN(t,e){const n=te(t),r=n.uu.get(e),i=n.cu.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Zf(n.remoteStore,r.targetId))}async function SN(t,e,n){const r=DN(t);try{const i=await function(o,l){const u=te(o),d=je.now(),p=l.reduce((S,R)=>S.add(R.key),ae());let m,y;return u.persistence.runTransaction("Locally write mutations","readwrite",S=>{let R=qn(),N=ae();return u.Bs.getEntries(S,p).next(O=>{R=O,R.forEach((k,_)=>{_.isValidDocument()||(N=N.add(k))})}).next(()=>u.localDocuments.getOverlayedDocuments(S,R)).next(O=>{m=O;const k=[];for(const _ of l){const x=BR(_,m.get(_.key).overlayedDocument);x!=null&&k.push(new yi(_.key,x,uw(x.value.mapValue),an.exists(!0)))}return u.mutationQueue.addMutationBatch(S,d,k,l)}).next(O=>{y=O;const k=O.applyToLocalDocumentSet(m,N);return u.documentOverlayCache.saveOverlays(S,O.batchId,k)})}).then(()=>({batchId:y.batchId,changes:ww(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let d=o.Iu[o.currentUser.toKey()];d||(d=new Ae(ie)),d=d.insert(l,u),o.Iu[o.currentUser.toKey()]=d}(r,i.batchId,n),await ua(r,i.changes),await Qu(r.remoteStore)}catch(i){const s=ip(i,"Failed to persist write");n.reject(s)}}async function rE(t,e){const n=te(t);try{const r=await FP(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Pu.get(s);o&&(he(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o._u=!0:i.modifiedDocuments.size>0?he(o._u,14607):i.removedDocuments.size>0&&(he(o._u,42227),o._u=!1))}),await ua(n,r,e)}catch(r){await _s(r)}}function G0(t,e,n){const r=te(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.uu.forEach((s,o)=>{const l=o.view.Da(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=te(o);u.onlineState=l;let d=!1;u.queries.forEach((p,m)=>{for(const y of m.ya)y.Da(l)&&(d=!0)}),d&&sp(u)}(r.eventManager,e),i.length&&r.au.j_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function AN(t,e,n){const r=te(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Pu.get(e),s=i&&i.key;if(s){let o=new Ae(G.comparator);o=o.insert(s,ot.newNoDocument(s,ee.min()));const l=ae().add(s),u=new qu(ee.min(),new Map,new Ae(ie),o,l);await rE(r,u),r.hu=r.hu.remove(s),r.Pu.delete(e),ap(r)}else await wh(r.localStore,e,!1).then(()=>Ih(r,e,n)).catch(_s)}async function CN(t,e){const n=te(t),r=e.batch.batchId;try{const i=await MP(n.localStore,e);sE(n,r,null),iE(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ua(n,i)}catch(i){await _s(i)}}async function RN(t,e,n){const r=te(t);try{const i=await function(o,l){const u=te(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let p;return u.mutationQueue.lookupMutationBatch(d,l).next(m=>(he(m!==null,37113),p=m.keys(),u.mutationQueue.removeMutationBatch(d,m))).next(()=>u.mutationQueue.performConsistencyCheck(d)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(d,p,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,p)).next(()=>u.localDocuments.getDocuments(d,p))})}(r.localStore,e);sE(r,e,n),iE(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ua(r,i)}catch(i){await _s(i)}}function iE(t,e){(t.Eu.get(e)||[]).forEach(n=>{n.resolve()}),t.Eu.delete(e)}function sE(t,e,n){const r=te(t);let i=r.Iu[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Iu[r.currentUser.toKey()]=i}}function Ih(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.cu.get(e))t.uu.delete(r),n&&t.au.Vu(r,n);t.cu.delete(e),t.isPrimaryClient&&t.Tu.Hr(e).forEach(r=>{t.Tu.containsKey(r)||oE(t,r)})}function oE(t,e){t.lu.delete(e.path.canonicalString());const n=t.hu.get(e);n!==null&&(Zf(t.remoteStore,n),t.hu=t.hu.remove(e),t.Pu.delete(n),ap(t))}function K0(t,e,n){for(const r of n)r instanceof eE?(t.Tu.addReference(r.key,e),PN(t,r)):r instanceof tE?(H(op,"Document no longer in limbo: "+r.key),t.Tu.removeReference(r.key,e),t.Tu.containsKey(r.key)||oE(t,r.key)):X(19791,{mu:r})}function PN(t,e){const n=e.key,r=n.path.canonicalString();t.hu.get(n)||t.lu.has(r)||(H(op,"New document in limbo: "+n),t.lu.add(r),ap(t))}function ap(t){for(;t.lu.size>0&&t.hu.size<t.maxConcurrentLimboResolutions;){const e=t.lu.values().next().value;t.lu.delete(e);const n=new G(we.fromString(e)),r=t.du.next();t.Pu.set(r,new _N(n)),t.hu=t.hu.insert(n,r),Ww(t.remoteStore,new hr(En($f(n.path)),r,"TargetPurposeLimboResolution",Fu.le))}}async function ua(t,e,n){const r=te(t),i=[],s=[],o=[];r.uu.isEmpty()||(r.uu.forEach((l,u)=>{o.push(r.Ru(u,e,n).then(d=>{var p;if((d||n)&&r.isPrimaryClient){const m=d?!d.fromCache:(p=n==null?void 0:n.targetChanges.get(u.targetId))===null||p===void 0?void 0:p.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(d){i.push(d);const m=Xf.Rs(u.targetId,d);s.push(m)}}))}),await Promise.all(o),r.au.j_(i),await async function(u,d){const p=te(u);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>L.forEach(d,y=>L.forEach(y.ds,S=>p.persistence.referenceDelegate.addReference(m,y.targetId,S)).next(()=>L.forEach(y.As,S=>p.persistence.referenceDelegate.removeReference(m,y.targetId,S)))))}catch(m){if(!ws(m))throw m;H(Jf,"Failed to update sequence numbers: "+m)}for(const m of d){const y=m.targetId;if(!m.fromCache){const S=p.xs.get(y),R=S.snapshotVersion,N=S.withLastLimboFreeSnapshotVersion(R);p.xs=p.xs.insert(y,N)}}}(r.localStore,s))}async function NN(t,e){const n=te(t);if(!n.currentUser.isEqual(e)){H(op,"User change. New user:",e.toKey());const r=await zw(n.localStore,e);n.currentUser=e,function(s,o){s.Eu.forEach(l=>{l.forEach(u=>{u.reject(new q(j.CANCELLED,o))})}),s.Eu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ua(n,r.ks)}}function bN(t,e){const n=te(t),r=n.Pu.get(e);if(r&&r._u)return ae().add(r.key);{let i=ae();const s=n.cu.get(e);if(!s)return i;for(const o of s){const l=n.uu.get(o);i=i.unionWith(l.view.Ya)}return i}}function aE(t){const e=te(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=rE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=bN.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=AN.bind(null,e),e.au.j_=mN.bind(null,e.eventManager),e.au.Vu=gN.bind(null,e.eventManager),e}function DN(t){const e=te(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=CN.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=RN.bind(null,e),e}class du{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Gu(e.databaseInfo.databaseId),this.sharedClientState=this.pu(e),this.persistence=this.yu(e),await this.persistence.start(),this.localStore=this.wu(e),this.gcScheduler=this.Su(e,this.localStore),this.indexBackfillerScheduler=this.bu(e,this.localStore)}Su(e,n){return null}bu(e,n){return null}wu(e){return jP(this.persistence,new VP,e.initialUser,this.serializer)}yu(e){return new Uw(Yf.fi,this.serializer)}pu(e){return new HP}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}du.provider={build:()=>new du};class VN extends du{constructor(e){super(),this.cacheSizeBytes=e}Su(e,n){he(this.persistence.referenceDelegate instanceof uu,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new _P(r,e.asyncQueue,n)}yu(e){const n=this.cacheSizeBytes!==void 0?vt.withCacheSize(this.cacheSizeBytes):vt.DEFAULT;return new Uw(r=>uu.fi(r,n),this.serializer)}}class xh{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>G0(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=NN.bind(null,this.syncEngine),await hN(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new pN}()}createDatastore(e){const n=Gu(e.databaseInfo.databaseId),r=function(s){return new QP(s)}(e.databaseInfo);return function(s,o,l,u){return new ZP(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new tN(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>G0(this.syncEngine,n,0),function(){return z0.C()?new z0:new WP}())}createSyncEngine(e,n){return function(i,s,o,l,u,d,p){const m=new wN(i,s,o,l,u,d);return p&&(m.Au=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=te(i);H(ui,"RemoteStore shutting down."),s.Ta.add(5),await la(s),s.Ea.shutdown(),s.da.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}xh.provider={build:()=>new xh};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lE{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.vu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.vu(this.observer.error,e):Wn("Uncaught Error in snapshot listener:",e.toString()))}Cu(){this.muted=!0}vu(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dr="FirestoreClient";class ON{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=it.UNAUTHENTICATED,this.clientId=J1.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{H(Dr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(H(Dr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Mn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=ip(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function rd(t,e){t.asyncQueue.verifyOperationInProgress(),H(Dr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await zw(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Q0(t,e){t.asyncQueue.verifyOperationInProgress();const n=await LN(t);H(Dr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>$0(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>$0(e.remoteStore,i)),t._onlineComponents=e}async function LN(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){H(Dr,"Using user provided OfflineComponentProvider");try{await rd(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===j.FAILED_PRECONDITION||i.code===j.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;os("Error using user provided cache. Falling back to memory cache: "+n),await rd(t,new du)}}else H(Dr,"Using default OfflineComponentProvider"),await rd(t,new VN(void 0));return t._offlineComponents}async function uE(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(H(Dr,"Using user provided OnlineComponentProvider"),await Q0(t,t._uninitializedComponentsProvider._online)):(H(Dr,"Using default OnlineComponentProvider"),await Q0(t,new xh))),t._onlineComponents}function jN(t){return uE(t).then(e=>e.syncEngine)}async function cE(t){const e=await uE(t),n=e.eventManager;return n.onListen=EN.bind(null,e.syncEngine),n.onUnlisten=xN.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=TN.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=kN.bind(null,e.syncEngine),n}function MN(t,e,n={}){const r=new Mn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,d){const p=new lE({next:y=>{p.Cu(),o.enqueueAndForget(()=>Jw(s,m));const S=y.docs.has(l);!S&&y.fromCache?d.reject(new q(j.UNAVAILABLE,"Failed to get document because the client is offline.")):S&&y.fromCache&&u&&u.source==="server"?d.reject(new q(j.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(y)},error:y=>d.reject(y)}),m=new Zw($f(l.path),p,{includeMetadataChanges:!0,La:!0});return Xw(s,m)}(await cE(t),t.asyncQueue,e,n,r)),r.promise}function FN(t,e,n={}){const r=new Mn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,d){const p=new lE({next:y=>{p.Cu(),o.enqueueAndForget(()=>Jw(s,m)),y.fromCache&&u.source==="server"?d.reject(new q(j.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(y)},error:y=>d.reject(y)}),m=new Zw(l,p,{includeMetadataChanges:!0,La:!0});return Xw(s,m)}(await cE(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dE(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y0=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hE(t,e,n){if(!n)throw new q(j.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function UN(t,e,n,r){if(e===!0&&r===!0)throw new q(j.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function X0(t){if(!G.isDocumentKey(t))throw new q(j.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function J0(t){if(G.isDocumentKey(t))throw new q(j.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Yu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":X(12329,{type:typeof t})}function Gn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new q(j.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Yu(t);throw new q(j.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fE="firestore.googleapis.com",Z0=!0;class ey{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new q(j.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=fE,this.ssl=Z0}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:Z0;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Fw;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<yP)throw new q(j.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}UN("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=dE((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new q(j.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new q(j.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new q(j.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Xu{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ey({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new q(j.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new q(j.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ey(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Q2;switch(r.type){case"firstParty":return new Z2(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new q(j.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Y0.get(n);r&&(H("ComponentProvider","Removing Datastore"),Y0.delete(n),r.terminate())}(this),Promise.resolve()}}function zN(t,e,n,r={}){var i;t=Gn(t,Xu);const s=gs(e),o=t._getSettings(),l=Object.assign(Object.assign({},o),{emulatorOptions:t._getEmulatorOptions()}),u=`${e}:${n}`;s&&(wf(`https://${u}`),Ef("Firestore",!0)),o.host!==fE&&o.host!==u&&os("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const d=Object.assign(Object.assign({},o),{host:u,ssl:s,emulatorOptions:r});if(!Ar(d,l)&&(t._setSettings(d),r.mockUserToken)){let p,m;if(typeof r.mockUserToken=="string")p=r.mockUserToken,m=it.MOCK_USER;else{p=N_(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const y=r.mockUserToken.sub||r.mockUserToken.user_id;if(!y)throw new q(j.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new it(y)}t._authCredentials=new Y2(new Y1(p,m))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ts(this.firestore,e,this._query)}}class St{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new xr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new St(this.firestore,e,this._key)}}class xr extends Ts{constructor(e,n,r){super(e,n,$f(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new St(this.firestore,null,new G(e))}withConverter(e){return new xr(this.firestore,e,this._path)}}function ty(t,e,...n){if(t=Fe(t),hE("collection","path",e),t instanceof Xu){const r=we.fromString(e,...n);return J0(r),new xr(t,null,r)}{if(!(t instanceof St||t instanceof xr))throw new q(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(we.fromString(e,...n));return J0(r),new xr(t.firestore,null,r)}}function tr(t,e,...n){if(t=Fe(t),arguments.length===1&&(e=J1.newId()),hE("doc","path",e),t instanceof Xu){const r=we.fromString(e,...n);return X0(r),new St(t,null,new G(r))}{if(!(t instanceof St||t instanceof xr))throw new q(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(we.fromString(e,...n));return X0(r),new St(t.firestore,t instanceof xr?t.converter:null,new G(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ny="AsyncQueue";class ry{constructor(e=Promise.resolve()){this.zu=[],this.ju=!1,this.Hu=[],this.Ju=null,this.Yu=!1,this.Zu=!1,this.Xu=[],this.C_=new $w(this,"async_queue_retry"),this.ec=()=>{const r=nd();r&&H(ny,"Visibility state changed to "+r.visibilityState),this.C_.p_()},this.tc=e;const n=nd();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.ec)}get isShuttingDown(){return this.ju}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.nc(),this.rc(e)}enterRestrictedMode(e){if(!this.ju){this.ju=!0,this.Zu=e||!1;const n=nd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.ec)}}enqueue(e){if(this.nc(),this.ju)return new Promise(()=>{});const n=new Mn;return this.rc(()=>this.ju&&this.Zu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.zu.push(e),this.sc()))}async sc(){if(this.zu.length!==0){try{await this.zu[0](),this.zu.shift(),this.C_.reset()}catch(e){if(!ws(e))throw e;H(ny,"Operation failed with retryable error: "+e)}this.zu.length>0&&this.C_.f_(()=>this.sc())}}rc(e){const n=this.tc.then(()=>(this.Yu=!0,e().catch(r=>{throw this.Ju=r,this.Yu=!1,Wn("INTERNAL UNHANDLED ERROR: ",iy(r)),r}).then(r=>(this.Yu=!1,r))));return this.tc=n,n}enqueueAfterDelay(e,n,r){this.nc(),this.Xu.indexOf(e)>-1&&(n=0);const i=rp.createAndSchedule(this,e,n,r,s=>this.oc(s));return this.Hu.push(i),i}nc(){this.Ju&&X(47125,{_c:iy(this.Ju)})}verifyOperationInProgress(){}async ac(){let e;do e=this.tc,await e;while(e!==this.tc)}uc(e){for(const n of this.Hu)if(n.timerId===e)return!0;return!1}cc(e){return this.ac().then(()=>{this.Hu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Hu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.ac()})}lc(e){this.Xu.push(e)}oc(e){const n=this.Hu.indexOf(e);this.Hu.splice(n,1)}}function iy(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class Is extends Xu{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new ry,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new ry(e),this._firestoreClient=void 0,await e}}}function BN(t,e){const n=typeof t=="object"?t:Du(),r=typeof t=="string"?t:e||nu,i=jr(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=C_("firestore");s&&zN(i,...s)}return i}function lp(t){if(t._terminated)throw new q(j.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||$N(t),t._firestoreClient}function $N(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,d,p){return new pR(l,u,d,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,dE(p.experimentalLongPollingOptions),p.useFetchStreams,p.isUsingEmulator)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new ON(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new hs(Xe.fromBase64String(e))}catch(n){throw new q(j.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new hs(Xe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class up{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new q(j.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ke(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pE{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cp{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new q(j.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new q(j.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ie(this._lat,e._lat)||ie(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dp{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HN=/^__.*__$/;class WN{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new yi(e,this.data,this.fieldMask,n,this.fieldTransforms):new oa(e,this.data,n,this.fieldTransforms)}}function mE(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw X(40011,{hc:t})}}class hp{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Pc(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get hc(){return this.settings.hc}Tc(e){return new hp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ic(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Tc({path:r,Ec:!1});return i.dc(e),i}Ac(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Tc({path:r,Ec:!1});return i.Pc(),i}Rc(e){return this.Tc({path:void 0,Ec:!0})}Vc(e){return hu(e,this.settings.methodName,this.settings.mc||!1,this.path,this.settings.fc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Pc(){if(this.path)for(let e=0;e<this.path.length;e++)this.dc(this.path.get(e))}dc(e){if(e.length===0)throw this.Vc("Document fields must not be empty");if(mE(this.hc)&&HN.test(e))throw this.Vc('Document fields cannot begin and end with "__"')}}class qN{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Gu(e)}gc(e,n,r,i=!1){return new hp({hc:e,methodName:n,fc:r,path:Ke.emptyPath(),Ec:!1,mc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function fp(t){const e=t._freezeSettings(),n=Gu(t._databaseId);return new qN(t._databaseId,!!e.ignoreUndefinedProperties,n)}function gE(t,e,n,r,i,s={}){const o=t.gc(s.merge||s.mergeFields?2:0,e,n,i);_E("Data must be an object, but it was:",o,r);const l=yE(r,o);let u,d;if(s.merge)u=new nn(o.fieldMask),d=o.fieldTransforms;else if(s.mergeFields){const p=[];for(const m of s.mergeFields){const y=KN(e,m,n);if(!o.contains(y))throw new q(j.INVALID_ARGUMENT,`Field '${y}' is specified in your field mask but missing from your input data.`);YN(p,y)||p.push(y)}u=new nn(p),d=o.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,d=o.fieldTransforms;return new WN(new $t(l),u,d)}function GN(t,e,n,r=!1){return pp(n,t.gc(r?4:3,e))}function pp(t,e){if(vE(t=Fe(t)))return _E("Unsupported field value:",e,t),yE(t,e);if(t instanceof pE)return function(r,i){if(!mE(i.hc))throw i.Vc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Vc(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Ec&&e.hc!==4)throw e.Vc("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=pp(l,i.Rc(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Fe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return LR(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=je.fromDate(r);return{timestampValue:lu(i.serializer,s)}}if(r instanceof je){const s=new je(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:lu(i.serializer,s)}}if(r instanceof cp)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof hs)return{bytesValue:bw(i.serializer,r._byteString)};if(r instanceof St){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Vc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Kf(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof dp)return function(o,l){return{mapValue:{fields:{[ow]:{stringValue:lw},[ru]:{arrayValue:{values:o.toArray().map(d=>{if(typeof d!="number")throw l.Vc("VectorValues must only contain numeric values.");return Hf(l.serializer,d)})}}}}}}(r,i);throw i.Vc(`Unsupported field value: ${Yu(r)}`)}(t,e)}function yE(t,e){const n={};return ew(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):mi(t,(r,i)=>{const s=pp(i,e.Ic(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function vE(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof je||t instanceof cp||t instanceof hs||t instanceof St||t instanceof pE||t instanceof dp)}function _E(t,e,n){if(!vE(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Yu(n);throw r==="an object"?e.Vc(t+" a custom object"):e.Vc(t+" "+r)}}function KN(t,e,n){if((e=Fe(e))instanceof up)return e._internalPath;if(typeof e=="string")return wE(t,e);throw hu("Field path arguments must be of type string or ",t,!1,void 0,n)}const QN=new RegExp("[~\\*/\\[\\]]");function wE(t,e,n){if(e.search(QN)>=0)throw hu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new up(...e.split("."))._internalPath}catch{throw hu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function hu(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new q(j.INVALID_ARGUMENT,l+t+u)}function YN(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EE{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new St(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new XN(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(mp("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class XN extends EE{data(){return super.data()}}function mp(t,e){return typeof e=="string"?wE(t,e):e instanceof up?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JN(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new q(j.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class gp{}class ZN extends gp{}function eb(t,e,...n){let r=[];e instanceof gp&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof yp).length,l=s.filter(u=>u instanceof Ju).length;if(o>1||o>0&&l>0)throw new q(j.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Ju extends ZN{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Ju(e,n,r)}_apply(e){const n=this._parse(e);return TE(e._query,n),new Ts(e.firestore,e.converter,ph(e._query,n))}_parse(e){const n=fp(e.firestore);return function(s,o,l,u,d,p,m){let y;if(d.isKeyField()){if(p==="array-contains"||p==="array-contains-any")throw new q(j.INVALID_ARGUMENT,`Invalid Query. You can't perform '${p}' queries on documentId().`);if(p==="in"||p==="not-in"){oy(m,p);const R=[];for(const N of m)R.push(sy(u,s,N));y={arrayValue:{values:R}}}else y=sy(u,s,m)}else p!=="in"&&p!=="not-in"&&p!=="array-contains-any"||oy(m,p),y=GN(l,o,m,p==="in"||p==="not-in");return Ve.create(d,p,y)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function tb(t,e,n){const r=e,i=mp("where",t);return Ju._create(i,r,n)}class yp extends gp{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new yp(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:dn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const l=s.getFlattenedFilters();for(const u of l)TE(o,u),o=ph(o,u)}(e._query,n),new Ts(e.firestore,e.converter,ph(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function sy(t,e,n){if(typeof(n=Fe(n))=="string"){if(n==="")throw new q(j.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!gw(e)&&n.indexOf("/")!==-1)throw new q(j.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(we.fromString(n));if(!G.isDocumentKey(r))throw new q(j.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return _0(t,new G(r))}if(n instanceof St)return _0(t,n._key);throw new q(j.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Yu(n)}.`)}function oy(t,e){if(!Array.isArray(t)||t.length===0)throw new q(j.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function TE(t,e){const n=function(i,s){for(const o of i)for(const l of o.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new q(j.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new q(j.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class nb{convertValue(e,n="none"){switch(Nr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Pe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Pr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw X(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return mi(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n[ru].arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>Pe(o.doubleValue));return new dp(s)}convertGeoPoint(e){return new cp(Pe(e.latitude),Pe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=zu(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ho(e));default:return null}}convertTimestamp(e){const n=Rr(e);return new je(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=we.fromString(e);he(Mw(r),9688,{name:e});const i=new Wo(r.get(1),r.get(3)),s=new G(r.popFirst(5));return i.isEqual(n)||Wn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IE(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class xE extends EE{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new wl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(mp("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class wl extends xE{data(e={}){return super.data(e)}}class rb{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new oo(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new wl(this._firestore,this._userDataWriter,r.key,r,new oo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new q(j.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new wl(i._firestore,i._userDataWriter,l.doc.key,l.doc,new oo(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new wl(i._firestore,i._userDataWriter,l.doc.key,l.doc,new oo(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let d=-1,p=-1;return l.type!==0&&(d=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),p=o.indexOf(l.doc.key)),{type:ib(l.type),doc:u,oldIndex:d,newIndex:p}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function ib(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return X(61501,{type:t})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sb(t){t=Gn(t,St);const e=Gn(t.firestore,Is);return MN(lp(e),t._key).then(n=>ub(e,t,n))}class kE extends nb{constructor(e){super(),this.firestore=e}convertBytes(e){return new hs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new St(this.firestore,null,n)}}function ob(t){t=Gn(t,Ts);const e=Gn(t.firestore,Is),n=lp(e),r=new kE(e);return JN(t._query),FN(n,t._query).then(i=>new rb(e,r,t,i))}function Ys(t,e,n){t=Gn(t,St);const r=Gn(t.firestore,Is),i=IE(t.converter,e,n);return vp(r,[gE(fp(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,an.none())])}function ab(t){return vp(Gn(t.firestore,Is),[new Wf(t._key,an.none())])}function lb(t,e){const n=Gn(t.firestore,Is),r=tr(t),i=IE(t.converter,e);return vp(n,[gE(fp(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,an.exists(!1))]).then(()=>r)}function vp(t,e){return function(r,i){const s=new Mn;return r.asyncQueue.enqueueAndForget(async()=>SN(await jN(r),i,s)),s.promise}(lp(t),e)}function ub(t,e,n){const r=n.docs.get(e._key),i=new kE(t);return new xE(t,i,e._key,r,new oo(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){vs=i})(fi),un(new Kt("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new Is(new X2(r.getProvider("auth-internal")),new eR(o,r.getProvider("app-check-internal")),function(d,p){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new q(j.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Wo(d.options.projectId,p)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),xt(a0,l0,e),xt(a0,l0,"esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SE="firebasestorage.googleapis.com",cb="storageBucket",db=2*60*1e3,hb=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn extends Qt{constructor(e,n,r=0){super(id(e),`Firebase Storage: ${n} (${id(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,kn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return id(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var xn;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(xn||(xn={}));function id(t){return"storage/"+t}function fb(){const t="An unknown error occurred, please check the error payload for server response.";return new kn(xn.UNKNOWN,t)}function pb(){return new kn(xn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function mb(){return new kn(xn.CANCELED,"User canceled the upload/download.")}function gb(t){return new kn(xn.INVALID_URL,"Invalid URL '"+t+"'.")}function yb(t){return new kn(xn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function ay(t){return new kn(xn.INVALID_ARGUMENT,t)}function AE(){return new kn(xn.APP_DELETED,"The Firebase app was deleted.")}function vb(t){return new kn(xn.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=rn.makeFromUrl(e,n)}catch{return new rn(e,"")}if(r.path==="")return r;throw yb(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(V){V.path.charAt(V.path.length-1)==="/"&&(V.path_=V.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+i+o,"i"),u={bucket:1,path:3};function d(V){V.path_=decodeURIComponent(V.path)}const p="v[A-Za-z0-9_]+",m=n.replace(/[.]/g,"\\."),y="(/([^?#]*).*)?$",S=new RegExp(`^https?://${m}/${p}/b/${i}/o${y}`,"i"),R={bucket:1,path:3},N=n===SE?"(?:storage.googleapis.com|storage.cloud.google.com)":n,O="([^?#]*)",k=new RegExp(`^https?://${N}/${i}/${O}`,"i"),x=[{regex:l,indices:u,postModify:s},{regex:S,indices:R,postModify:d},{regex:k,indices:{bucket:1,path:2},postModify:d}];for(let V=0;V<x.length;V++){const U=x[V],z=U.regex.exec(e);if(z){const E=z[U.indices.bucket];let v=z[U.indices.path];v||(v=""),r=new rn(E,v),U.postModify(r);break}}if(r==null)throw gb(e);return r}}class _b{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wb(t,e,n){let r=1,i=null,s=null,o=!1,l=0;function u(){return l===2}let d=!1;function p(...O){d||(d=!0,e.apply(null,O))}function m(O){i=setTimeout(()=>{i=null,t(S,u())},O)}function y(){s&&clearTimeout(s)}function S(O,...k){if(d){y();return}if(O){y(),p.call(null,O,...k);return}if(u()||o){y(),p.call(null,O,...k);return}r<64&&(r*=2);let x;l===1?(l=2,x=0):x=(r+Math.random())*1e3,m(x)}let R=!1;function N(O){R||(R=!0,y(),!d&&(i!==null?(O||(l=2),clearTimeout(i),m(0)):O||(l=1)))}return m(0),s=setTimeout(()=>{o=!0,N(!0)},n),N}function Eb(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tb(t){return t!==void 0}function ly(t,e,n,r){if(r<e)throw ay(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw ay(`Invalid value for '${t}'. Expected ${n} or less.`)}function Ib(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var fu;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(fu||(fu={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xb(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kb{constructor(e,n,r,i,s,o,l,u,d,p,m,y=!0,S=!1){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=u,this.timeout_=d,this.progressCallback_=p,this.connectionFactory_=m,this.retry=y,this.isUsingEmulator=S,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((R,N)=>{this.resolve_=R,this.reject_=N,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Xa(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=l=>{const u=l.loaded,d=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,d)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const l=s.getErrorCode()===fu.NO_ERROR,u=s.getStatus();if(!l||xb(u,this.additionalRetryCodes_)&&this.retry){const p=s.getErrorCode()===fu.ABORT;r(!1,new Xa(!1,null,p));return}const d=this.successCodes_.indexOf(u)!==-1;r(!0,new Xa(d,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,l=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(l,l.getResponse());Tb(u)?s(u):s()}catch(u){o(u)}else if(l!==null){const u=fb();u.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,u)):o(u)}else if(i.canceled){const u=this.appDelete_?AE():mb();o(u)}else{const u=pb();o(u)}};this.canceled_?n(!1,new Xa(!1,null,!0)):this.backoffId_=wb(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Eb(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Xa{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function Sb(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function Ab(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Cb(t,e){e&&(t["X-Firebase-GMPID"]=e)}function Rb(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function Pb(t,e,n,r,i,s,o=!0,l=!1){const u=Ib(t.urlParams),d=t.url+u,p=Object.assign({},t.headers);return Cb(p,e),Sb(p,n),Ab(p,s),Rb(p,r),new kb(d,t.method,p,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o,l)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nb(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function bb(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pu{constructor(e,n){this._service=e,n instanceof rn?this._location=n:this._location=rn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new pu(e,n)}get root(){const e=new rn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return bb(this._location.path)}get storage(){return this._service}get parent(){const e=Nb(this._location.path);if(e===null)return null;const n=new rn(this._location.bucket,e);return new pu(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw vb(e)}}function uy(t,e){const n=e==null?void 0:e[cb];return n==null?null:rn.makeFromBucketSpec(n,t)}function Db(t,e,n,r={}){t.host=`${e}:${n}`;const i=gs(e);i&&(wf(`https://${t.host}`),Ef("Storage",!0)),t._isUsingEmulator=!0,t._protocol=i?"https":"http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:N_(s,t.app.options.projectId))}class Vb{constructor(e,n,r,i,s,o=!1){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._isUsingEmulator=o,this._bucket=null,this._host=SE,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=db,this._maxUploadRetryTime=hb,this._requests=new Set,i!=null?this._bucket=rn.makeFromBucketSpec(i,this._host):this._bucket=uy(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=rn.makeFromBucketSpec(this._url,e):this._bucket=uy(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){ly("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){ly("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(Nt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new pu(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new _b(AE());{const o=Pb(e,this._appId,r,i,n,this._firebaseVersion,s,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const cy="@firebase/storage",dy="0.13.12";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CE="storage";function Ob(t=Du(),e){t=Fe(t);const r=jr(t,CE).getImmediate({identifier:e}),i=C_("storage");return i&&Lb(r,...i),r}function Lb(t,e,n,r={}){Db(t,e,n,r)}function jb(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Vb(n,r,i,e,fi)}function Mb(){un(new Kt(CE,jb,"PUBLIC").setMultipleInstances(!0)),xt(cy,dy,""),xt(cy,dy,"esm2017")}Mb();const Fb={apiKey:"AIzaSyASHCL51tHbUxYKx6VD4AT42xvN9Fa7HWs",authDomain:"mypersona-45207.firebaseapp.com",projectId:"mypersona-45207",storageBucket:"mypersona-45207.firebasestorage.app",messagingSenderId:"496123681959",appId:"1:496123681959:web:6959226f1bf23e914acf82",measurementId:"G-6R91JMS3DZ"},Zu=M_(Fb);CA(Zu);const Ja=G2(Zu),Rn=BN(Zu);Ob(Zu);function Ub({user:t}){const[e,n]=re.useState(!0),[r,i]=re.useState("all"),[s,o]=re.useState("grid"),[l,u]=re.useState(!1),[d,p]=re.useState(null),[m,y]=re.useState(null),[S,R]=re.useState(null),[N,O]=re.useState("image"),[k,_]=re.useState(""),[x,V]=re.useState(!1),[U,z]=re.useState(""),[E,v]=re.useState({name:(t==null?void 0:t.displayName)||(t!=null&&t.email?t.email.split("@")[0].charAt(0).toUpperCase()+t.email.split("@")[0].slice(1):""),email:(t==null?void 0:t.email)||""}),[w,T]=re.useState(""),[A,C]=re.useState(""),[I,ge]=re.useState(""),[At,hn]=re.useState("web"),[yt,$]=re.useState("Creative Frontend Developer crafting modern and intuitive web experiences with React, Next.js, and Tailwind CSS."),[J,Z]=re.useState(!1);re.useEffect(()=>{t&&(async()=>{if(t){console.log(`[HomePage] Attempting to load CV data for user.uid: ${t.uid}`);const M=tr(Rn,"cvData",t.uid),ce=await sb(M);if(ce.exists()){const K=ce.data();console.log(`[HomePage] CV data loaded for ${t.uid}:`,K),ne(Je=>({...Je,...K})),K.heroDescription&&$(K.heroDescription)}else console.log(`[HomePage] No CV data document found for user.uid: ${t.uid}. Initializing with defaults.`),ne(K=>({...K,name:t.displayName||t.email.split("@")[0],email:t.email})),$("Creative Frontend Developer crafting modern and intuitive web experiences with React, Next.js, and Tailwind CSS.")}})()},[t]),re.useEffect(()=>{t&&(v({name:t.displayName||(t.email?t.email.split("@")[0].charAt(0).toUpperCase()+t.email.split("@")[0].slice(1):""),email:t.email}),ne(b=>({...b,name:t.displayName||(t.email?t.email.split("@")[0].charAt(0).toUpperCase()+t.email.split("@")[0].slice(1):""),email:t.email})))},[t]);const[Q,ne]=re.useState({name:"John Doe",title:"Frontend Developer",email:"john@example.com",phone:"+1 (555) 123-4567",summary:"Creative and innovative frontend developer with 5+ years of experience building modern web applications.",profileImage:null,experience:[{company:"Tech Corp",role:"Senior Frontend Developer",duration:"2020 - Present",startDate:"2020-01",endDate:"",description:"Led frontend development team and implemented modern React applications.",location:"San Francisco, CA"},{company:"Digital Solutions",role:"Frontend Developer",duration:"2017 - 2020",startDate:"2017-06",endDate:"2020-01",description:"Developed responsive web applications using React and modern JavaScript.",location:"New York, NY"}],education:[{institution:"University of Tech",degree:"BS in Computer Science",duration:"2013 - 2017",fieldOfStudy:"Computer Science",graduationDate:"2017-05",gpa:"3.8",location:"Boston, MA"}],skills:["React","JavaScript","TypeScript","Tailwind CSS","Next.js","Node.js","GraphQL"]});re.useEffect(()=>{Q.skills&&Array.isArray(Q.skills)&&z(Q.skills.join(", "))},[Q.skills]);const[Te,ut]=re.useState([]);re.useEffect(()=>{t&&(async()=>{if(t){const M=eb(ty(Rn,"portfolioItems"),tb("userId","==",t.uid)),ce=await ob(M),K=[];ce.docs.forEach(async Je=>{const He=Je.data();if(He.userId)K.push({id:Je.id,...He});else{const ct=tr(Rn,"portfolioItems",Je.id);await Ys(ct,{userId:t.uid},{merge:!0}),K.push({id:Je.id,...He,userId:t.uid})}}),ut(K)}else console.log("User is not available, not loading portfolio items."),ut([])})()},[t]);const Mt=r==="all"?Te||[]:(Te||[]).filter(b=>b.category===r),Ft=async b=>{b.preventDefault();const M=d==null?void 0:d.id;let ce=I,K=null,Je=null;if(!w||!A||!N||!At){alert("Title, Description, Type, and Category are required.");return}try{if(N==="link"){if(!ce){alert("URL is required for External Link type.");return}}else if(S){const ct=new FormData;ct.append("file",S);const Ct=await fetch(`${{}.VITE_BACKEND_BASE_URL}/upload-portfolio-item?username=${encodeURIComponent(t.displayName)}`,{method:"POST",body:ct});if(!Ct.ok){const Ue=await Ct.json();throw new Error(Ue.message||"File upload failed.")}const Sn=await Ct.json();K=Sn.fileId,Je=Sn.mimeType}else if(d&&d.fileId&&d.type!=="link")K=d.fileId,Je=d.mimeType;else{alert("Please select a file to upload.");return}const He={title:w,description:A,type:N,...N!=="link"&&{fileId:K,mimeType:Je},...N==="link"&&{url:I},category:At,date:new Date().toISOString().split("T")[0],userId:t.uid};if(M){const ct=tr(Rn,"portfolioItems",M);await Ys(ct,He,{merge:!0}),ut(Ct=>Ct.map(Sn=>Sn.id===M?{id:M,...He}:Sn)),alert("Portfolio item updated successfully!")}else{const ct=await lb(ty(Rn,"portfolioItems"),He);ut(Ct=>[...Ct,{id:ct.id,...He}]),alert("Portfolio item added successfully!")}u(!1),p(null),R(null),O("image"),T(""),C(""),ge("")}catch(He){console.error("Error saving portfolio item:",He),alert(`Failed to save portfolio item. Please try again. Error: ${He.message}`)}},Ut=b=>{p(b),T(b.title),C(b.description),O(b.type),hn(b.category),b.type==="link"?ge(b.url):ge(""),u(!0)};re.useEffect(()=>{d?(T(d.title),C(d.description),O(d.type),hn(d.category),d.type==="link"?ge(d.url):ge("")):(T(""),C(""),ge(""),O("image"),hn("web"))},[d,l]);const ec=async b=>{if(window.confirm("Are you sure you want to delete this portfolio item?"))try{await ab(tr(Rn,"portfolioItems",b)),ut(M=>M.filter(ce=>ce.id!==b)),alert("Portfolio item deleted successfully!")}catch(M){console.error("Error deleting portfolio item:",M),alert("Failed to delete portfolio item. Please try again.")}},tc=()=>{if(!t||!t.uid){alert("User not logged in. Cannot generate share link.");return}const b=`${window.location.origin}/portfolio/${t.uid}`;_(b),navigator.clipboard.writeText(b),alert(`Shareable link copied to clipboard: ${b}`)},_i=async()=>{if(!t||!t.uid){alert("User not logged in. Cannot download CV.");return}try{const b=await fetch(`${{}.VITE_BACKEND_BASE_URL}/api/download-cv/${t.uid}`);if(b.ok){const M=await b.blob(),ce=window.URL.createObjectURL(M),K=document.createElement("a");K.href=ce,K.download=`${Q.name.replace(/\s/g,"_")}_CV.pdf`,document.body.appendChild(K),K.click(),K.remove(),window.URL.revokeObjectURL(ce)}else{const M=await b.text();alert(`Failed to download CV. Server response: ${M}`)}}catch(b){console.error("Error downloading CV:",b),alert("An error occurred while downloading CV.")}},ye=b=>{const{name:M,value:ce}=b.target;if(M.includes(".")){const[K,Je,He]=M.split(".");if(K==="experience"||K==="education"){const ct=[...Q[K]];ct[parseInt(Je)][He]=ce,ne(Ct=>({...Ct,[K]:ct}))}}else M==="skills"?z(ce):ne(K=>({...K,[M]:ce}))},xs=()=>{const b=U.split(",").map(M=>M.trim()).filter(M=>M.length>0);ne(M=>({...M,skills:b}))},ks=()=>{const b={company:"",role:"",duration:"",startDate:"",endDate:"",description:"",location:""};ne(M=>({...M,experience:[...M.experience,b]}))},Ss=b=>{Q.experience.length>1?ne(M=>({...M,experience:M.experience.filter((ce,K)=>K!==b)})):alert("You must have at least one work experience entry.")},As=()=>{const b={institution:"",degree:"",duration:"",fieldOfStudy:"",graduationDate:"",gpa:"",location:""};ne(M=>({...M,education:[...M.education,b]}))},ca=b=>{Q.education.length>1?ne(M=>({...M,education:M.education.filter((ce,K)=>K!==b)})):alert("You must have at least one education entry.")},da=async()=>{if(t)try{const b=U.split(",").map(K=>K.trim()).filter(K=>K.length>0),M={...Q,skills:b},ce=tr(Rn,"cvData",t.uid);await Ys(ce,M,{merge:!0}),ne(K=>({...K,skills:b})),V(!1),alert("CV data updated successfully!")}catch(b){console.error("Error saving CV data:",b),alert("Failed to save CV data. Please try again. Check console for details.")}else alert("You must be logged in to save your CV.")};return h.jsxs("div",{className:`min-h-screen ${e?"dark bg-gray-900":"bg-gray-50"}`,children:[h.jsxs("section",{className:"relative overflow-hidden bg-gradient-to-br from-indigo-50 to-white dark:from-gray-900 dark:to-gray-800",children:[h.jsx("div",{className:"absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-indigo-50 to-transparent dark:from-gray-900"}),h.jsx("div",{className:"container mx-auto px-4 py-20 md:py-32",children:h.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",children:[h.jsxs("div",{className:"order-2 lg:order-1",children:[h.jsxs("h1",{className:"text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight",children:[h.jsx("span",{className:"block",children:"Hi, I'm"}),h.jsx("span",{className:"bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400",children:E.name||"Loading..."})]}),J?h.jsx("textarea",{name:"heroDescription",value:yt,onChange:b=>$(b.target.value),onBlur:async()=>{if(Z(!1),t)try{const b=tr(Rn,"cvData",t.uid);await Ys(b,{heroDescription:yt},{merge:!0})}catch(b){console.error("Error updating hero description on blur:",b)}},onKeyDown:async b=>{if(b.key==="Enter"&&!b.shiftKey&&(b.preventDefault(),Z(!1),t))try{const M=tr(Rn,"cvData",t.uid);await Ys(M,{heroDescription:yt},{merge:!0})}catch(M){console.error("Error updating hero description on Enter:",M)}},rows:"3",className:"mt-6 w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-800 dark:text-white text-xl md:text-2xl",autoFocus:!0}):h.jsx("p",{className:"mt-6 text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-lg cursor-pointer",onClick:()=>Z(!0),children:yt}),h.jsxs("div",{className:"mt-8 flex flex-wrap gap-4",children:[h.jsx("button",{onClick:tc,className:"px-6 py-3 rounded-md text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-indigo-200 dark:hover:shadow-indigo-900/30 transform hover:-translate-y-0.5 transition-transform",children:"Share My Portfolio"}),h.jsx("button",{onClick:_i,className:"px-6 py-3 rounded-md text-base font-medium text-indigo-600 dark:text-indigo-400 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors shadow-lg hover:shadow-gray-200 dark:hover:shadow-gray-800/30 transform hover:-translate-y-0.5 transition-transform",children:"Download CV"})]})]}),h.jsx("div",{className:"order-1 lg:order-2 flex justify-center",children:h.jsxs("div",{className:"relative group",children:[h.jsx("label",{htmlFor:"profile-upload",className:"cursor-pointer",children:h.jsxs("div",{className:"w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl transform rotate-3",children:[h.jsx("img",{src:t.photoURL||"https://placehold.co/600x600?text=Upload+Image",alt:"Profile",className:"w-full h-full object-cover"}),h.jsx("div",{className:"absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300",children:h.jsx("svg",{className:"w-12 h-12 text-white",fill:"currentColor",viewBox:"0 0 20 20",children:h.jsx("path",{fillRule:"evenodd",d:"M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A1 1 0 0011.586 3H8.414a1 1 0 00-.707.293L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z",clipRule:"evenodd"})})})]})}),h.jsx("input",{id:"profile-upload",type:"file",accept:"image/png, image/jpeg",className:"hidden",onChange:async b=>{const M=b.target.files[0];if(M&&t){const ce=new FormData;ce.append("profileImage",M);try{const K=await fetch(`${{}.VITE_BACKEND_BASE_URL}/upload-profile-image?username=${encodeURIComponent(t.displayName||t.email.split("@")[0])}&userId=${t.uid}`,{method:"POST",body:ce});if(!K.ok){const He=await K.json();throw new Error(He.message||"Profile image upload failed.")}const Je=await K.json();alert("Profile image updated successfully!")}catch(K){console.error("Error uploading profile image:",K),alert(`Failed to upload profile image. Error: ${K.message}`)}}}})]})})]})})]}),h.jsx("section",{id:"portfolio",className:"py-20",children:h.jsxs("div",{className:"container mx-auto px-4",children:[h.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-start md:items-center mb-12",children:[h.jsxs("div",{children:[h.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"My Work"}),h.jsx("p",{className:"mt-2 text-gray-600 dark:text-gray-400",children:"Explore my latest projects and creative work"})]}),h.jsxs("div",{className:"mt-4 md:mt-0 flex items-center space-x-4",children:[h.jsxs("button",{onClick:()=>u(!0),className:"inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700",children:[h.jsx("svg",{className:"-ml-1 mr-2 h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor",children:h.jsx("path",{fillRule:"evenodd",d:"M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z",clipRule:"evenodd"})}),"Add New Work"]}),h.jsxs("div",{className:"flex rounded-md shadow-sm",children:[h.jsx("button",{onClick:()=>o("grid"),className:`p-2 rounded-l-md text-sm font-medium ${s==="grid"?"bg-indigo-600 text-white":"bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700"}`,children:h.jsx("svg",{className:"w-4 h-4",viewBox:"0 0 20 20",fill:"currentColor",children:h.jsx("path",{d:"M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"})})}),h.jsx("button",{onClick:()=>o("list"),className:`p-2 rounded-r-md text-sm font-medium ${s==="list"?"bg-indigo-600 text-white":"bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700"}`,children:h.jsx("svg",{className:"w-4 h-4",viewBox:"0 0 20 20",fill:"currentColor",children:h.jsx("path",{fillRule:"evenodd",d:"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",clipRule:"evenodd"})})})]})]})]}),h.jsxs("div",{className:"mb-8 flex flex-wrap gap-2",children:[h.jsx("button",{onClick:()=>i("all"),className:`px-4 py-2 rounded-full text-sm font-medium transition-colors ${r==="all"?"bg-indigo-600 text-white":"bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"}`,children:"All"}),h.jsx("button",{onClick:()=>i("web"),className:`px-4 py-2 rounded-full text-sm font-medium transition-colors ${r==="web"?"bg-indigo-600 text-white":"bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"}`,children:"Web Development"}),h.jsx("button",{onClick:()=>i("design"),className:`px-4 py-2 rounded-full text-sm font-medium transition-colors ${r==="design"?"bg-indigo-600 text-white":"bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"}`,children:"UI/UX Design"}),h.jsx("button",{onClick:()=>i("video"),className:`px-4 py-2 rounded-full text-sm font-medium transition-colors ${r==="video"?"bg-indigo-600 text-white":"bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"}`,children:"Video"}),h.jsx("button",{onClick:()=>i("document"),className:`px-4 py-2 rounded-full text-sm font-medium transition-colors ${r==="document"?"bg-indigo-600 text-white":"bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"}`,children:"Documents"})]}),h.jsx("div",{className:`${s==="grid"?"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8":"space-y-6"}`,children:Mt.map(b=>h.jsxs("div",{className:`rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow ${s==="list"?"flex items-center bg-white dark:bg-gray-800":"bg-white dark:bg-gray-800"}`,children:[h.jsx("div",{className:`relative cursor-pointer ${s==="list"?"w-1/3 h-40":"h-64 w-full"}`,onClick:()=>y(b),children:(()=>{let M="";if(b.type==="link")M=b.url;else if(b.fileId&&b.mimeType)M=`${{}.VITE_BACKEND_BASE_URL}/get-drive-file?fileId=${b.fileId}&mimeType=${encodeURIComponent(b.mimeType)}`;else if(b.url){const ce=b.url.match(/\/d\/([a-zA-Z0-9_-]+)/);if(ce&&ce[1]){const K=b.type==="image"?"image/jpeg":b.type==="video"?"video/mp4":b.type==="pdf"?"application/pdf":"";K&&(M=`${{}.VITE_BACKEND_BASE_URL}/get-drive-file?fileId=${ce[1]}&mimeType=${encodeURIComponent(K)}`)}else M=b.url}return b.type==="image"&&M?h.jsx("img",{src:M,alt:b.title,className:"w-full h-full object-cover"}):b.type==="video"&&M?h.jsx("video",{src:M,title:b.title,controls:!0,className:"w-full h-full object-cover",preload:"metadata",children:"Your browser does not support the video tag."}):b.type==="pdf"&&M?h.jsxs("div",{className:"w-full h-full bg-gray-100 dark:bg-gray-700 flex flex-col items-center justify-center",children:[h.jsx("div",{className:"p-4 bg-white dark:bg-gray-800 rounded shadow-md",children:h.jsxs("svg",{className:"w-12 h-12 text-red-600",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[h.jsx("path",{d:"M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"}),h.jsx("polyline",{points:"14 2 14 8 20 8"}),h.jsx("line",{x1:"16",y1:"13",x2:"8",y2:"13"}),h.jsx("line",{x1:"16",y1:"17",x2:"8",y2:"17"}),h.jsx("polyline",{points:"10 9 9 9 8 9"})]})}),h.jsx("p",{className:"mt-2 text-sm text-gray-600 dark:text-gray-400",children:"PDF Document"})]}):b.type==="link"&&M?h.jsxs("div",{className:"w-full h-full bg-gray-100 dark:bg-gray-700 flex flex-col items-center justify-center p-4 text-center",children:[h.jsxs("svg",{className:"mx-auto h-12 w-12 text-indigo-600 dark:text-indigo-400",fill:"currentColor",viewBox:"0 0 24 24",children:[h.jsx("path",{d:"M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"}),h.jsx("polyline",{points:"15 3 21 3 21 9"}),h.jsx("line",{x1:"10",y1:"14",x2:"21",y2:"3"})]}),h.jsx("p",{className:"mt-2 text-sm font-medium text-gray-900 dark:text-white",children:"External Link"}),h.jsx("p",{className:"mt-1 text-xs text-gray-500 dark:text-gray-400",children:"Preview not available due to security restrictions."}),h.jsxs("a",{href:M,target:"_blank",rel:"noopener noreferrer",className:"mt-2 inline-flex items-center px-3 py-1 border border-transparent text-xs font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 dark:bg-indigo-900/30 dark:text-indigo-300 dark:hover:bg-indigo-900",children:["Open Link",h.jsxs("svg",{className:"ml-1 -mr-0.5 h-3 w-3",fill:"currentColor",viewBox:"0 0 20 20",children:[h.jsx("path",{d:"M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"}),h.jsx("path",{d:"M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-2a1 1 0 10-2 0v2H5V7h2a1 1 0 000-2H5z"})]})]})]}):null})()}),h.jsxs("div",{className:`p-6 ${s==="list"?"w-2/3":""}`,children:[h.jsxs("div",{className:"flex justify-between items-start",children:[h.jsx("h3",{className:"text-lg font-semibold text-gray-900 dark:text-white",children:b.title}),h.jsxs("div",{className:"flex space-x-2",children:[h.jsx("button",{onClick:()=>Ut(b),className:"p-1 text-gray-500 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400",children:h.jsx("svg",{className:"w-4 h-4",viewBox:"0 0 20 20",fill:"currentColor",children:h.jsx("path",{d:"M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"})})}),h.jsx("button",{onClick:()=>ec(b.id),className:"p-1 text-gray-500 hover:text-red-600 dark:text-gray-400 dark:hover:text-red-400",children:h.jsx("svg",{className:"w-4 h-4",viewBox:"0 0 20 20",fill:"currentColor",children:h.jsx("path",{fillRule:"evenodd",d:"M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2h10.618l-.724 1.447A1 1 0 0011 8h8a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 009 2zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z",clipRule:"evenodd"})})})]})]}),h.jsx("p",{className:"mt-2 text-gray-600 dark:text-gray-400",children:b.description}),h.jsxs("div",{className:"mt-4 flex items-center justify-between text-sm",children:[h.jsx("span",{className:"text-gray-500 dark:text-gray-500",children:new Date(b.date).toLocaleDateString("en-US",{month:"short",year:"numeric"})}),h.jsx("button",{onClick:()=>y(b),className:"text-indigo-600 dark:text-indigo-400 hover:underline",children:"View Full"})]})]})]},b.id))}),Mt.length===0&&h.jsxs("div",{className:"text-center py-16",children:[h.jsx("svg",{className:"mx-auto h-12 w-12 text-gray-400",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:h.jsx("path",{d:"M22 12h-4l-3 9L9 3l-3 9H2"})}),h.jsx("h3",{className:"mt-2 text-sm font-medium text-gray-900 dark:text-white",children:"No portfolio items"}),h.jsx("p",{className:"mt-1 text-sm text-gray-500 dark:text-gray-400",children:"Get started by creating a new portfolio item."}),h.jsx("div",{className:"mt-6",children:h.jsxs("button",{onClick:()=>u(!0),className:"inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700",children:[h.jsx("svg",{className:"-ml-1 mr-2 h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor",children:h.jsx("path",{fillRule:"evenodd",d:"M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z",clipRule:"evenodd"})}),"Add New Work"]})})]})]})}),h.jsx("section",{id:"cv",className:"py-20 bg-gray-50 dark:bg-gray-900",children:h.jsx("div",{className:"container mx-auto px-4",children:h.jsxs("div",{className:"max-w-4xl mx-auto",children:[h.jsxs("div",{className:"flex justify-between items-center",children:[h.jsxs("div",{children:[h.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"My CV"}),h.jsx("p",{className:"mt-2 text-gray-600 dark:text-gray-400",children:"Download or view my resume below"})]}),h.jsx("button",{onClick:()=>V(!x),className:"px-4 py-2 rounded-md text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 transition-colors",children:x?"Cancel Edit":"Edit CV"})]}),h.jsxs("div",{id:"cv-section",className:"mt-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden",children:[h.jsx("div",{className:"bg-gradient-to-r from-indigo-600 to-purple-600 p-6",children:h.jsxs("div",{className:"flex flex-col md:flex-row md:items-end justify-between",children:[h.jsxs("div",{children:[x?h.jsx("input",{type:"text",name:"name",value:Q.name,onChange:ye,className:"text-2xl font-bold text-white bg-transparent border-b border-white/50 w-full"}):h.jsx("h3",{className:"text-2xl font-bold text-white",children:Q.name}),x?h.jsx("input",{type:"text",name:"title",value:Q.title,onChange:ye,className:"text-indigo-100 bg-transparent border-b border-white/50 w-full mt-1"}):h.jsx("p",{className:"text-indigo-100",children:Q.title})]}),h.jsxs("div",{className:"mt-4 md:mt-0 text-white",children:[h.jsxs("p",{className:"flex items-center",children:[h.jsxs("svg",{className:"w-4 h-4 mr-2",viewBox:"0 0 20 20",fill:"currentColor",children:[h.jsx("path",{d:"M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"}),h.jsx("path",{d:"M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"})]}),x?h.jsx("input",{type:"email",name:"email",value:Q.email,onChange:ye,className:"bg-transparent border-b border-white/50 w-full"}):Q.email]}),h.jsxs("p",{className:"flex items-center mt-2",children:[h.jsx("svg",{className:"w-4 h-4 mr-2",viewBox:"0 0 20 20",fill:"currentColor",children:h.jsx("path",{d:"M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"})}),x?h.jsx("input",{type:"tel",name:"phone",value:Q.phone,onChange:ye,className:"bg-transparent border-b border-white/50 w-full"}):Q.phone]})]})]})}),h.jsxs("div",{className:"p-6 border-b border-gray-200 dark:border-gray-700",children:[h.jsx("h4",{className:"font-semibold text-gray-900 dark:text-white mb-2",children:"Professional Summary"}),x?h.jsx("textarea",{name:"summary",value:Q.summary,onChange:ye,rows:"4",className:"w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-800 dark:text-white"}):h.jsx("p",{className:"text-gray-600 dark:text-gray-300",children:Q.summary})]}),h.jsxs("div",{className:"p-6 border-b border-gray-200 dark:border-gray-700",children:[h.jsx("h4",{className:"font-semibold text-gray-900 dark:text-white mb-4",children:"Skills"}),x?h.jsxs("div",{children:[h.jsx("input",{type:"text",name:"skills",value:U,onChange:ye,onBlur:xs,placeholder:"e.g., React, JavaScript, TypeScript, Tailwind CSS",className:"w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-800 dark:text-white"}),h.jsx("p",{className:"mt-2 text-sm text-gray-500 dark:text-gray-400",children:'Separate skills with commas (e.g., "React, JavaScript, TypeScript"). Changes are applied when you click outside the field.'}),U&&h.jsxs("div",{className:"mt-3",children:[h.jsx("p",{className:"text-xs text-gray-500 dark:text-gray-400 mb-2",children:"Preview:"}),h.jsx("div",{className:"flex flex-wrap gap-2",children:U.split(",").map(b=>b.trim()).filter(b=>b.length>0).map((b,M)=>h.jsx("span",{className:"px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs border",children:b},M))})]})]}):h.jsx("div",{className:"flex flex-wrap gap-2",children:Q.skills.map((b,M)=>h.jsx("span",{className:"px-3 py-1 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full text-sm",children:b},M))})]}),h.jsxs("div",{className:"p-6 border-b border-gray-200 dark:border-gray-700",children:[h.jsxs("div",{className:"flex justify-between items-center mb-4",children:[h.jsx("h4",{className:"font-semibold text-gray-900 dark:text-white",children:"Work Experience"}),x&&h.jsxs("button",{onClick:ks,className:"flex items-center px-3 py-1 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md transition-colors",children:[h.jsx("svg",{className:"w-4 h-4 mr-1",viewBox:"0 0 20 20",fill:"currentColor",children:h.jsx("path",{fillRule:"evenodd",d:"M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z",clipRule:"evenodd"})}),"Add Experience"]})]}),x?h.jsx("div",{className:"space-y-6",children:Q.experience.map((b,M)=>h.jsxs("div",{className:"p-4 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900/50",children:[h.jsxs("div",{className:"flex justify-between items-start mb-4",children:[h.jsxs("h5",{className:"text-lg font-medium text-gray-900 dark:text-white",children:["Experience #",M+1]}),h.jsx("button",{onClick:()=>Ss(M),className:"p-1 text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300",title:"Remove this experience",children:h.jsx("svg",{className:"w-5 h-5",viewBox:"0 0 20 20",fill:"currentColor",children:h.jsx("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"})})})]}),h.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 mb-4",children:[h.jsxs("div",{children:[h.jsx("label",{className:"block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1",children:"Job Title/Position *"}),h.jsx("input",{type:"text",name:`experience.${M}.role`,value:b.role||"",onChange:ye,placeholder:"e.g., Senior Frontend Developer",className:"w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-800 dark:text-white",required:!0})]}),h.jsxs("div",{children:[h.jsx("label",{className:"block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1",children:"Company Name *"}),h.jsx("input",{type:"text",name:`experience.${M}.company`,value:b.company||"",onChange:ye,placeholder:"e.g., Tech Corp",className:"w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-800 dark:text-white",required:!0})]})]}),h.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 mb-4",children:[h.jsxs("div",{children:[h.jsx("label",{className:"block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1",children:"Start Date"}),h.jsx("input",{type:"month",name:`experience.${M}.startDate`,value:b.startDate||"",onChange:ye,className:"w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-800 dark:text-white"})]}),h.jsxs("div",{children:[h.jsx("label",{className:"block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1",children:"End Date"}),h.jsx("input",{type:"month",name:`experience.${M}.endDate`,value:b.endDate||"",onChange:ye,placeholder:"Leave empty if current",className:"w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-800 dark:text-white"})]}),h.jsxs("div",{children:[h.jsx("label",{className:"block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1",children:"Location"}),h.jsx("input",{type:"text",name:`experience.${M}.location`,value:b.location||"",onChange:ye,placeholder:"e.g., San Francisco, CA",className:"w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-800 dark:text-white"})]})]}),h.jsxs("div",{className:"mb-4",children:[h.jsx("label",{className:"block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1",children:"Job Description/Responsibilities"}),h.jsx("textarea",{name:`experience.${M}.description`,value:b.description||"",onChange:ye,rows:"3",placeholder:"Describe your key responsibilities and achievements...",className:"w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-800 dark:text-white"})]}),h.jsxs("div",{children:[h.jsx("label",{className:"block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1",children:"Duration (Display Format)"}),h.jsx("input",{type:"text",name:`experience.${M}.duration`,value:b.duration||"",onChange:ye,placeholder:"e.g., 2020 - Present or Jan 2020 - Dec 2022",className:"w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-800 dark:text-white"}),h.jsx("p",{className:"mt-1 text-xs text-gray-500 dark:text-gray-400",children:"This is how the duration will be displayed on your CV"})]})]},M))}):h.jsx("div",{className:"space-y-4",children:Q.experience.map((b,M)=>h.jsx("div",{className:"border-l-4 border-indigo-500 pl-4",children:h.jsxs("div",{className:"flex flex-col md:flex-row md:justify-between md:items-start",children:[h.jsxs("div",{className:"flex-1",children:[h.jsx("h5",{className:"font-medium text-gray-900 dark:text-white",children:b.role}),h.jsx("p",{className:"text-indigo-600 dark:text-indigo-400 font-medium",children:b.company}),b.location&&h.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400",children:b.location}),b.description&&h.jsx("p",{className:"mt-2 text-sm text-gray-600 dark:text-gray-300",children:b.description})]}),h.jsx("div",{className:"mt-2 md:mt-0 md:ml-4 text-right",children:h.jsx("p",{className:"text-sm font-medium text-gray-500 dark:text-gray-400",children:b.duration})})]})},M))})]}),h.jsxs("div",{className:"p-6 border-b border-gray-200 dark:border-gray-700",children:[h.jsxs("div",{className:"flex justify-between items-center mb-4",children:[h.jsx("h4",{className:"font-semibold text-gray-900 dark:text-white",children:"Education"}),x&&h.jsxs("button",{onClick:As,className:"flex items-center px-3 py-1 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md transition-colors",children:[h.jsx("svg",{className:"w-4 h-4 mr-1",viewBox:"0 0 20 20",fill:"currentColor",children:h.jsx("path",{fillRule:"evenodd",d:"M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z",clipRule:"evenodd"})}),"Add Education"]})]}),x?h.jsx("div",{className:"space-y-6",children:Q.education.map((b,M)=>h.jsxs("div",{className:"p-4 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900/50",children:[h.jsxs("div",{className:"flex justify-between items-start mb-4",children:[h.jsxs("h5",{className:"text-lg font-medium text-gray-900 dark:text-white",children:["Education #",M+1]}),h.jsx("button",{onClick:()=>ca(M),className:"p-1 text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300",title:"Remove this education entry",children:h.jsx("svg",{className:"w-5 h-5",viewBox:"0 0 20 20",fill:"currentColor",children:h.jsx("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"})})})]}),h.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 mb-4",children:[h.jsxs("div",{children:[h.jsx("label",{className:"block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1",children:"Degree/Qualification *"}),h.jsx("input",{type:"text",name:`education.${M}.degree`,value:b.degree||"",onChange:ye,placeholder:"e.g., Bachelor of Science, Master's Degree",className:"w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-800 dark:text-white",required:!0})]}),h.jsxs("div",{children:[h.jsx("label",{className:"block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1",children:"Institution Name *"}),h.jsx("input",{type:"text",name:`education.${M}.institution`,value:b.institution||"",onChange:ye,placeholder:"e.g., University of Technology",className:"w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-800 dark:text-white",required:!0})]})]}),h.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 mb-4",children:[h.jsxs("div",{children:[h.jsx("label",{className:"block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1",children:"Field of Study/Major"}),h.jsx("input",{type:"text",name:`education.${M}.fieldOfStudy`,value:b.fieldOfStudy||"",onChange:ye,placeholder:"e.g., Computer Science, Business Administration",className:"w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-800 dark:text-white"})]}),h.jsxs("div",{children:[h.jsx("label",{className:"block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1",children:"Graduation Date"}),h.jsx("input",{type:"month",name:`education.${M}.graduationDate`,value:b.graduationDate||"",onChange:ye,className:"w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-800 dark:text-white"})]})]}),h.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 mb-4",children:[h.jsxs("div",{children:[h.jsx("label",{className:"block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1",children:"GPA/Grade (Optional)"}),h.jsx("input",{type:"text",name:`education.${M}.gpa`,value:b.gpa||"",onChange:ye,placeholder:"e.g., 3.8/4.0, First Class Honours",className:"w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-800 dark:text-white"})]}),h.jsxs("div",{children:[h.jsx("label",{className:"block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1",children:"Location"}),h.jsx("input",{type:"text",name:`education.${M}.location`,value:b.location||"",onChange:ye,placeholder:"e.g., Boston, MA",className:"w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-800 dark:text-white"})]})]}),h.jsxs("div",{children:[h.jsx("label",{className:"block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1",children:"Duration (Display Format)"}),h.jsx("input",{type:"text",name:`education.${M}.duration`,value:b.duration||"",onChange:ye,placeholder:"e.g., 2013 - 2017 or Sep 2013 - May 2017",className:"w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-800 dark:text-white"}),h.jsx("p",{className:"mt-1 text-xs text-gray-500 dark:text-gray-400",children:"This is how the duration will be displayed on your CV"})]})]},M))}):h.jsx("div",{className:"space-y-4",children:Q.education.map((b,M)=>h.jsx("div",{className:"border-l-4 border-green-500 pl-4",children:h.jsxs("div",{className:"flex flex-col md:flex-row md:justify-between md:items-start",children:[h.jsxs("div",{className:"flex-1",children:[h.jsx("h5",{className:"font-medium text-gray-900 dark:text-white",children:b.degree}),h.jsx("p",{className:"text-green-600 dark:text-green-400 font-medium",children:b.institution}),b.fieldOfStudy&&h.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-300",children:["Major: ",b.fieldOfStudy]}),b.location&&h.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400",children:b.location}),b.gpa&&h.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-300",children:["GPA: ",b.gpa]})]}),h.jsx("div",{className:"mt-2 md:mt-0 md:ml-4 text-right",children:h.jsx("p",{className:"text-sm font-medium text-gray-500 dark:text-gray-400",children:b.duration})})]})},M))})]})]}),x&&h.jsxs("div",{className:"mt-6 flex justify-end space-x-4",children:[h.jsx("button",{onClick:()=>V(!1),className:"px-4 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors",children:"Cancel"}),h.jsx("button",{onClick:da,className:"px-4 py-2 rounded-md text-base font-medium text-white bg-green-600 hover:bg-green-700 transition-colors",children:"Save Changes"})]})]})})}),h.jsx("section",{id:"about",className:"py-20",children:h.jsx("div",{className:"container mx-auto px-4",children:h.jsxs("div",{className:"max-w-4xl mx-auto",children:[h.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"About Me"}),h.jsx("p",{className:"mt-2 text-gray-600 dark:text-gray-400",children:"Learn more about who I am and what I do"}),h.jsxs("div",{className:"mt-8 space-y-8",children:[h.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6",children:[h.jsx("h3",{className:"text-xl font-semibold text-gray-900 dark:text-white mb-4",children:"Professional Summary"}),h.jsx("p",{className:"text-gray-600 dark:text-gray-300",children:Q.summary})]}),h.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6",children:[h.jsx("h3",{className:"text-xl font-semibold text-gray-900 dark:text-white mb-4",children:"Skills & Expertise"}),h.jsx("div",{className:"flex flex-wrap gap-2",children:Q.skills.map((b,M)=>h.jsx("span",{className:"px-3 py-1 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full text-sm",children:b},M))})]})]}),h.jsxs("div",{className:"mt-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6",children:[h.jsx("h3",{className:"text-xl font-semibold text-gray-900 dark:text-white mb-4",children:"Why Work With Me?"}),h.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[h.jsxs("div",{className:"flex items-start",children:[h.jsx("div",{className:"flex-shrink-0",children:h.jsx("div",{className:"flex items-center justify-center h-10 w-10 rounded-md bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400",children:h.jsx("svg",{className:"w-6 h-6",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:h.jsx("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"})})})}),h.jsxs("div",{className:"ml-4",children:[h.jsx("h4",{className:"text-lg font-medium text-gray-900 dark:text-white",children:"Modern Technologies"}),h.jsx("p",{className:"mt-2 text-gray-600 dark:text-gray-400",children:"I stay up-to-date with the latest web technologies and design trends."})]})]}),h.jsxs("div",{className:"flex items-start",children:[h.jsx("div",{className:"flex-shrink-0",children:h.jsx("div",{className:"flex items-center justify-center h-10 w-10 rounded-md bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400",children:h.jsxs("svg",{className:"w-6 h-6",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[h.jsx("path",{d:"M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"}),h.jsx("circle",{cx:"9",cy:"7",r:"4"}),h.jsx("path",{d:"M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"})]})})}),h.jsxs("div",{className:"ml-4",children:[h.jsx("h4",{className:"text-lg font-medium text-gray-900 dark:text-white",children:"Client Focused"}),h.jsx("p",{className:"mt-2 text-gray-600 dark:text-gray-400",children:"I prioritize understanding client needs and delivering solutions that exceed expectations."})]})]}),h.jsxs("div",{className:"flex items-start",children:[h.jsx("div",{className:"flex-shrink-0",children:h.jsx("div",{className:"flex items-center justify-center h-10 w-10 rounded-md bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400",children:h.jsx("svg",{className:"w-6 h-6",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:h.jsx("path",{d:"M12 2v10M12 22V12M4 12h10M20 12H12"})})})}),h.jsxs("div",{className:"ml-4",children:[h.jsx("h4",{className:"text-lg font-medium text-gray-900 dark:text-white",children:"Fast Delivery"}),h.jsx("p",{className:"mt-2 text-gray-600 dark:text-gray-400",children:"I deliver high-quality work within agreed timelines while maintaining flexibility for changes."})]})]}),h.jsxs("div",{className:"flex items-start",children:[h.jsx("div",{className:"flex-shrink-0",children:h.jsx("div",{className:"flex items-center justify-center h-10 w-10 rounded-md bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400",children:h.jsxs("svg",{className:"w-6 h-6",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[h.jsx("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"}),h.jsx("circle",{cx:"12",cy:"13",r:"4"})]})})}),h.jsxs("div",{className:"ml-4",children:[h.jsx("h4",{className:"text-lg font-medium text-gray-900 dark:text-white",children:"Personalized Approach"}),h.jsx("p",{className:"mt-2 text-gray-600 dark:text-gray-400",children:"I tailor my approach to each project to ensure it meets your specific requirements."})]})]})]})]})]})})}),h.jsx("section",{id:"contact",className:"py-20 bg-gray-50 dark:bg-gray-900",children:h.jsx("div",{className:"container mx-auto px-4",children:h.jsxs("div",{className:"max-w-4xl mx-auto",children:[h.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"Get In Touch"}),h.jsx("p",{className:"mt-2 text-gray-600 dark:text-gray-400",children:"Have a project in mind? Let's discuss how I can help"}),h.jsxs("div",{className:"mt-10 grid grid-cols-1 md:grid-cols-2 gap-8",children:[h.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6",children:[h.jsx("h3",{className:"text-xl font-semibold text-gray-900 dark:text-white mb-6",children:"Contact Information"}),h.jsxs("div",{className:"space-y-6",children:[h.jsxs("div",{className:"flex items-start",children:[h.jsx("div",{className:"flex-shrink-0",children:h.jsx("div",{className:"flex items-center justify-center h-10 w-10 rounded-md bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400",children:h.jsxs("svg",{className:"w-5 h-5",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[h.jsx("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"}),h.jsx("circle",{cx:"12",cy:"10",r:"3"})]})})}),h.jsxs("div",{className:"ml-4",children:[h.jsx("h4",{className:"text-lg font-medium text-gray-900 dark:text-white",children:"Location"}),h.jsx("p",{className:"mt-1 text-gray-600 dark:text-gray-400",children:"Malang, Indonesia"})]})]}),h.jsxs("div",{className:"flex items-start",children:[h.jsx("div",{className:"flex-shrink-0",children:h.jsx("div",{className:"flex items-center justify-center h-10 w-10 rounded-md bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400",children:h.jsxs("svg",{className:"w-5 h-5",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[h.jsx("path",{d:"M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81A2 2 0 019.82 9.52a2 2 0 011.72 1.28c.09.14.18.29.26.44a16.97 16.97 0 005.06 5.06c.14.08.29.17.44.26h.01a2 2 0 011.28 1.72 2 2 0 01.19 1.92z"}),h.jsx("path",{d:"M14.05 9.55a2.5 2.5 0 01-.28.5 10.84 10.84 0 01-5.01 5.01 2.5 2.5 0 01-.5.28 8.28 8.28 0 002.16.35c7.44.35 12.84-6.95 13.06-6.95.3-.11 1.4-1.26.5-2.86v-.04c.02-.21.02-.44.02-.66 0-1.1-.1-2.04-.27-2.9.02-.05.28-.33.74-.63-1.58-.6-5.06-1.8-7.06-2.6-2.01-.8-3.7-1.97-4.3-2.4-.1-.09-.17-.17-.22-.25a1.72 1.72 0 01-.52-.9 2.44 2.44 0 01.08-1.4 8.06 8.06 0 00-2.78 7.63z"})]})})}),h.jsxs("div",{className:"ml-4",children:[h.jsx("h4",{className:"text-lg font-medium text-gray-900 dark:text-white",children:"Phone"}),h.jsx("p",{className:"mt-1 text-gray-600 dark:text-gray-400",children:"081331744758"})]})]})]}),h.jsxs("div",{className:"flex items-start mt-4",children:[h.jsx("div",{className:"flex-shrink-0",children:h.jsx("div",{className:"flex items-center justify-center h-10 w-10 rounded-md bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400",children:h.jsxs("svg",{className:"w-5 h-5",viewBox:"0 0 20 20",fill:"currentColor",children:[h.jsx("path",{d:"M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"}),h.jsx("path",{d:"M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"})]})})}),h.jsxs("div",{className:"ml-4",children:[h.jsx("h4",{className:"text-lg font-medium text-gray-900 dark:text-white",children:"Email"}),h.jsx("p",{className:"mt-1 text-gray-600 dark:text-gray-400",children:"yosafatisme@gmail.com"})]})]})]}),h.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6",children:[h.jsx("h3",{className:"text-xl font-semibold text-gray-900 dark:text-white mb-6",children:"Send Me a Message"}),h.jsxs("form",{onSubmit:Ft,method:"post",className:"space-y-4",children:[h.jsxs("div",{children:[h.jsx("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-700 dark:text-gray-300",children:"Name"}),h.jsx("input",{type:"text",id:"name",className:"mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"})]}),h.jsxs("div",{children:[h.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700 dark:text-gray-300",children:"Email"}),h.jsx("input",{type:"email",id:"email",className:"mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"})]}),h.jsxs("div",{children:[h.jsx("label",{htmlFor:"subject",className:"block text-sm font-medium text-gray-700 dark:text-gray-300",children:"Subject"}),h.jsx("input",{type:"text",id:"subject",className:"mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"})]}),h.jsxs("div",{children:[h.jsx("label",{htmlFor:"message",className:"block text-sm font-medium text-gray-700 dark:text-gray-300",children:"Message"}),h.jsx("textarea",{id:"message",rows:"4",className:"mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"})]}),h.jsx("div",{children:h.jsx("button",{type:"submit",className:"w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:"Send Message"})})]})]})]})]})})}),h.jsx("footer",{className:"bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800",children:h.jsxs("div",{className:"container mx-auto px-4 py-12",children:[h.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-8",children:[h.jsxs("div",{className:"col-span-1 md:col-span-2",children:[h.jsxs("div",{className:"flex items-center space-x-2",children:[h.jsxs("svg",{className:"w-8 h-8 text-indigo-600 dark:text-indigo-400",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[h.jsx("circle",{cx:"12",cy:"12",r:"10"}),h.jsx("path",{d:"M12 16v-4M12 8h.01"})]}),h.jsx("span",{className:"text-xl font-bold text-gray-900 dark:text-white",children:"MyPersona"})]}),h.jsx("p",{className:"mt-4 text-gray-600 dark:text-gray-400 max-w-md",children:"Professional portfolio platform for showcasing your best work, sharing your profile with recruiters, and downloading your CV."})]}),h.jsxs("div",{children:[h.jsx("h3",{className:"text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider",children:"Quick Links"}),h.jsxs("ul",{className:"mt-4 space-y-2",children:[h.jsx("li",{children:h.jsx("a",{href:"#portfolio",className:"text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400",children:"Portfolio"})}),h.jsx("li",{children:h.jsx("a",{href:"#cv",className:"text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400",children:"CV"})}),h.jsx("li",{children:h.jsx("a",{href:"#about",className:"text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400",children:"About"})}),h.jsx("li",{children:h.jsx("a",{href:"#contact",className:"text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400",children:"Contact"})})]})]}),h.jsxs("div",{children:[h.jsx("h3",{className:"text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider",children:"Connect"}),h.jsxs("div",{className:"mt-4 flex space-x-4",children:[h.jsxs("a",{href:"#",className:"text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400",children:[h.jsx("span",{className:"sr-only",children:"Twitter"}),h.jsx("svg",{className:"h-6 w-6",fill:"currentColor",viewBox:"0 0 24 24",children:h.jsx("path",{d:"M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357-.646 4.108 4.108 0 001.804-2.27 8.224 8.224 0 01-2.605-.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.277 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"})})]}),h.jsxs("a",{href:"#",className:"text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400",children:[h.jsx("span",{className:"sr-only",children:"LinkedIn"}),h.jsx("svg",{className:"h-6 w-6",fill:"currentColor",viewBox:"0 0 24 24",children:h.jsx("path",{d:"M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5V5c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.769z"})})]}),h.jsxs("a",{href:"#",className:"text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400",children:[h.jsx("span",{className:"sr-only",children:"GitHub"}),h.jsx("svg",{className:"h-6 w-6",fill:"currentColor",viewBox:"0 0 24 24",children:h.jsx("path",{fillRule:"evenodd",d:"M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682.275.682.483 0 .237-.008.414-.012.595a8.95 8.95 0 01-3.01.07 4.107 4.107 0 002.807 1.148 8.22 8.22 0 01-2.49.963c-.41-.042-.82-.063-1.23-.063-.82 0-1.64.114-2.42.33a11.65 11.65 0 008.307 2.416c6.613 0 12.015-4.91 12.015-10.933C23.11 6.095 19.109 2 12 2z"})})]})]})]})]}),h.jsx("div",{className:"mt-8 pt-8 border-t border-gray-200 dark:border-gray-800",children:h.jsxs("p",{className:"text-center text-gray-500 dark:text-gray-400",children:["© ",new Date().getFullYear()," MyPersona. All rights reserved."]})})]})}),l&&h.jsx("div",{className:"fixed inset-0 z-50 overflow-y-auto","aria-labelledby":"modal-title",role:"dialog","aria-modal":"true",children:h.jsxs("div",{className:"flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0",children:[h.jsx("div",{className:"fixed inset-0 bg-gray-500 bg-opacity-75 dark:bg-gray-900 dark:bg-opacity-75 transition-opacity","aria-hidden":"true",onClick:()=>u(!1)}),h.jsx("div",{className:"inline-block align-bottom bg-white dark:bg-gray-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full",children:h.jsx("div",{className:"px-4 pt-5 pb-4 sm:p-6 sm:pb-4",children:h.jsx("div",{className:"sm:flex sm:items-start",children:h.jsxs("div",{className:"mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full",children:[h.jsx("h3",{className:"text-lg font-medium text-gray-900 dark:text-white",id:"modal-title",children:d?"Edit Portfolio Item":"Add New Work"}),h.jsx("div",{className:"mt-4",children:h.jsxs("form",{onSubmit:Ft,className:"space-y-4",children:[h.jsxs("div",{children:[h.jsx("label",{htmlFor:"title",className:"block text-sm font-medium text-gray-700 dark:text-gray-300",children:"Title"}),h.jsx("input",{type:"text",id:"title",name:"title",value:w,onChange:b=>T(b.target.value),className:"mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"})]}),h.jsxs("div",{children:[h.jsx("label",{htmlFor:"description",className:"block text-sm font-medium text-gray-700 dark:text-gray-300",children:"Description"}),h.jsx("textarea",{id:"description",rows:"3",name:"description",value:A,onChange:b=>C(b.target.value),className:"mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"})]}),h.jsxs("div",{children:[h.jsx("label",{htmlFor:"type",className:"block text-sm font-medium text-gray-700 dark:text-gray-300",children:"Type"}),h.jsxs("select",{id:"type",name:"type",value:N,onChange:b=>{O(b.target.value),R(null),ge("")},className:"mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white",children:[h.jsx("option",{value:"image",children:"Image"}),h.jsx("option",{value:"video",children:"Video"}),h.jsx("option",{value:"pdf",children:"PDF Document"}),h.jsx("option",{value:"link",children:"External Link"})]})]}),N==="link"?h.jsxs("div",{children:[h.jsx("label",{htmlFor:"url",className:"block text-sm font-medium text-gray-700 dark:text-gray-300",children:"URL"}),h.jsx("input",{type:"text",id:"url",name:"url",value:I,onChange:b=>ge(b.target.value),className:"mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"})]}):h.jsxs("div",{children:[h.jsx("label",{htmlFor:"file",className:"block text-sm font-medium text-gray-700 dark:text-gray-300",children:"Upload File"}),h.jsx("input",{type:"file",id:"file",name:"file",onChange:b=>R(b.target.files[0]),className:"mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100 dark:file:bg-gray-600 dark:file:text-white dark:hover:file:bg-gray-500"}),d&&!S&&d.url&&h.jsxs("p",{className:"mt-2 text-sm text-gray-500 dark:text-gray-400",children:["Current file: ",h.jsx("a",{href:d.url,target:"_blank",rel:"noopener noreferrer",className:"text-indigo-600 dark:text-indigo-400 underline",children:"View"})]})]}),h.jsxs("div",{children:[h.jsx("label",{htmlFor:"category",className:"block text-sm font-medium text-gray-700 dark:text-gray-300",children:"Category"}),h.jsxs("select",{id:"category",name:"category",value:At,onChange:b=>{hn(b.target.value),b.target.value!=="link"&&ge("")},className:"mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white",children:[h.jsx("option",{value:"web",children:"Web Development"}),h.jsx("option",{value:"design",children:"UI/UX Design"}),h.jsx("option",{value:"video",children:"Video"}),h.jsx("option",{value:"document",children:"Documents"})]})]}),h.jsxs("div",{className:"flex justify-end space-x-3 pt-4",children:[h.jsx("button",{type:"button",className:"px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",onClick:()=>u(!1),children:"Cancel"}),h.jsxs("button",{type:"submit",className:"px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:[d?"Update":"Add"," Portfolio Item"]})]})]})})]})})})})]})}),m&&h.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4",children:[h.jsx("div",{className:"absolute inset-0 bg-black bg-opacity-90",onClick:()=>y(null)}),h.jsxs("div",{className:"relative w-full max-w-4xl bg-white dark:bg-gray-800 rounded-lg shadow-xl p-4",children:[h.jsx("button",{onClick:()=>y(null),className:"absolute top-4 right-4 z-10 p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300",children:h.jsx("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",children:h.jsx("path",{d:"M6.293 6.707a1 1 0 0 1 1.414 0L10 8.414l1.293-1.293a1 1 0 0 1 1.414 1.414L10 10l1.293 1.293a1 1 0 0 1-1.414 1.414L10 10.414 8.707 12.707a1 1 0 0 1-1.414-1.414L10 10 8.707 8.707a1 1 0 0 1 0-1.414L10 9.586 11.293 8.293a1 1 0 0 1 1.414 1.414z"})})}),h.jsx("div",{className:"relative w-full h-[80vh]",children:(()=>{let b="";if(m.type==="link")b=m.url;else if(m.fileId&&m.mimeType)b=`http://localhost:5000/get-drive-file?fileId=${m.fileId}&mimeType=${encodeURIComponent(m.mimeType)}`;else if(m.url){const M=m.url.match(/\/d\/([a-zA-Z0-9_-]+)/);if(M&&M[1]){const ce=m.type==="image"?"image/jpeg":m.type==="video"?"video/mp4":m.type==="pdf"?"application/pdf":"";ce&&(b=`http://localhost:5000/get-drive-file?fileId=${M[1]}&mimeType=${encodeURIComponent(ce)}`)}else b=m.url}return m.type==="image"&&b?h.jsx("img",{src:b,alt:m.title,className:"w-full h-full object-contain"}):m.type==="video"&&b?h.jsx("div",{className:"w-full h-full flex items-center justify-center",children:h.jsx("iframe",{className:"w-full h-full",src:b,title:m.title,frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})}):m.type==="pdf"&&b?h.jsx("div",{className:"w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-700",children:h.jsxs("div",{className:"text-center",children:[h.jsxs("svg",{className:"mx-auto h-20 w-20 text-red-500",fill:"currentColor",viewBox:"0 0 20 20",children:[h.jsx("path",{d:"M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 10-9.9-9.9zm9.9 2.1a1 1 0 011 1 4.11 4.11 0 01-1.07 1.05 4.1 4.1 0 01-1.05-1.07 1 1 0 011.05-1.07 4.1 4.1 0 011.07 1.05 1 1 0 010 1.41 4.1 4.1 0 01-1.05 1.07 1 1 0 01-1.41 0 4.1 4.1 0 01-1.05-1.07 1 1 0 010-1.41z"}),h.jsx("path",{d:"M12 2.02a1 1 0 011 1 4.1 4.1 0 01-1 1 1 1 0 01-1-1 4.1 4.1 0 011-1z"})]}),h.jsx("p",{className:"mt-4 text-xl font-medium text-gray-900 dark:text-white",children:"PDF Document"}),h.jsx("p",{className:"mt-1 text-gray-600 dark:text-gray-400",children:"Preview not available for PDF documents."}),h.jsx("a",{href:b,target:"_blank",rel:"noopener noreferrer",className:"mt-4 inline-block px-4 py-2 border border-indigo-500 text-indigo-600 dark:text-indigo-400 rounded-md hover:bg-indigo-50 dark:hover:bg-gray-800",children:"Download PDF"})]})}):m.type==="link"&&b?h.jsx("div",{className:"w-full h-full flex items-center justify-center",children:h.jsx("iframe",{className:"w-full h-full border-0",src:b,title:m.title,frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,sandbox:"allow-scripts allow-same-origin allow-popups allow-forms"})}):null})()})]})]})]})}function zb(){const[t,e]=re.useState("login"),[n,r]=re.useState(!0),[i,s]=re.useState(!1),[o,l]=re.useState(""),[u,d]=re.useState(""),[p,m]=re.useState(""),[y,S]=re.useState(""),[R,N]=re.useState(null),[O,k]=re.useState(""),[_,x]=re.useState(null);re.useEffect(()=>{const E=OC(Ja,v=>{x(v),e(v?"portfolio":"login")});return()=>E()},[]);const V=async E=>{if(E.preventDefault(),k(""),!o||!u){k("Please fill in all fields");return}try{await PC(Ja,o,u)}catch(v){k(v.message)}},U=async E=>{if(E.preventDefault(),k(""),s(!0),!o||!u||!p||!y){k("Please fill in all fields");return}if(!R){k("Please select a profile image");return}if(u!==p){k("Passwords do not match");return}try{const w=(await RC(Ja,o,u)).user,T=w.uid,A=new FormData;A.append("profileImage",R);const C=await fetch(`http://localhost:5000/upload-profile-image?username=${encodeURIComponent(y)}&userId=${T}`,{method:"POST",body:A});if(!C.ok){const At=await C.json();throw new Error(At.message||"Failed to upload image")}const ge=(await C.json()).photoURL;await bC(w,{displayName:y,photoURL:ge}),x({...w,displayName:y,photoURL:ge}),await fetch("http://localhost:5000/ensure-user-folder",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:y})}),alert("Registration successful! Your portfolio space is ready."),e("portfolio"),N(null)}catch(v){k(v.message)}finally{s(!1)}},z=async()=>{try{await LC(Ja),l(""),d(""),m(""),k("")}catch(E){console.error("Logout Error:",E)}};if(_){const v=((w,T)=>{if(w){const A=w.split(" ");if(A.length>1)return A[0][0]+A[1][0];if(A[0])return A[0][0]}else if(T)return T[0];return""})(_.displayName,_.email).toUpperCase();return h.jsxs("div",{className:`min-h-screen ${n?"dark bg-gray-900":"bg-gray-50"}`,children:[h.jsx("header",{className:"sticky top-0 z-50 backdrop-blur-lg bg-white/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-700",children:h.jsxs("div",{className:"container mx-auto px-4 py-4 flex justify-between items-center",children:[h.jsxs("div",{className:"flex items-center space-x-2",children:[h.jsxs("svg",{className:"w-10 h-10 cursor-pointer transition-transform duration-500 ease-in-out transform hover:rotate-12 hover:scale-110",viewBox:"0 0 80 80",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[h.jsx("circle",{cx:"40",cy:"40",r:"38",className:"transition-all duration-300 dark:fill-indigo-900/30 fill-indigo-100",stroke:"url(#logoGradient)",strokeWidth:"2"}),h.jsx("path",{d:"M25 30C25 30 30 25 40 25C50 25 55 30 55 30",className:"stroke-indigo-600 dark:stroke-indigo-400",strokeWidth:"2",strokeLinecap:"round"}),h.jsx("circle",{cx:"32",cy:"38",r:"3",className:"fill-indigo-600 dark:fill-indigo-400 transition-all duration-300",stroke:"currentColor",strokeWidth:"1"}),h.jsx("circle",{cx:"48",cy:"38",r:"3",className:"fill-indigo-600 dark:fill-indigo-400 transition-all duration-300",stroke:"currentColor",strokeWidth:"1"}),h.jsx("path",{d:"M30 50C30 50 35 55 40 55C45 55 50 50 50 50",className:"stroke-indigo-600 dark:stroke-indigo-400",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),h.jsxs("g",{className:"opacity-70 group-hover:opacity-100 transition-opacity",children:[h.jsx("path",{d:"M15 20L20 15L25 10",className:"stroke-indigo-500 dark:stroke-indigo-300",strokeWidth:"2",strokeLinecap:"round",strokeDasharray:"5,2",strokeDashoffset:"0",children:h.jsx("animate",{attributeName:"stroke-dashoffset",values:"10;0;10",dur:"4s",repeatCount:"indefinite"})}),h.jsx("path",{d:"M65 60L60 65L55 70",className:"stroke-indigo-500 dark:stroke-indigo-300",strokeWidth:"2",strokeLinecap:"round",strokeDasharray:"5,2",strokeDashoffset:"0",children:h.jsx("animate",{attributeName:"stroke-dashoffset",values:"0;10;0",dur:"4s",repeatCount:"indefinite"})})]}),h.jsxs("defs",{children:[h.jsxs("linearGradient",{id:"logoGradient",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[h.jsx("stop",{offset:"0%",stopColor:"#6366F1",stopOpacity:"1"}),h.jsx("stop",{offset:"100%",stopColor:"#8B5CF6",stopOpacity:"1"})]}),h.jsxs("filter",{id:"glow",x:"-50%",y:"-50%",width:"200%",height:"200%",children:[h.jsx("feGaussianBlur",{stdDeviation:"2.5",result:"coloredBlur"}),h.jsxs("feMerge",{children:[h.jsx("feMergeNode",{in:"coloredBlur"}),h.jsx("feMergeNode",{in:"SourceGraphic"})]})]})]})]}),h.jsx("span",{className:"text-xl font-bold text-gray-900 dark:text-white",children:"MyPersona"})]}),h.jsxs("nav",{className:"hidden md:flex items-center space-x-8",children:[h.jsx("a",{href:"#portfolio",className:"text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors",children:"Portfolio"}),h.jsx("a",{href:"#cv",className:"text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors",children:"CV"}),h.jsx("a",{href:"#about",className:"text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors",children:"About"}),h.jsx("a",{href:"#contact",className:"text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors",children:"Contact"})]}),h.jsxs("div",{className:"flex items-center space-x-4",children:[h.jsx("div",{className:"relative",children:h.jsx("button",{className:"flex items-center space-x-2 focus:outline-none",children:h.jsx("div",{className:"w-8 h-8 rounded-full overflow-hidden bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center text-white font-medium",children:_.photoURL?h.jsx("img",{src:_.photoURL,alt:"Profile",className:"w-full h-full object-cover"}):v})})}),h.jsx("button",{onClick:z,className:"py-2 px-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-md",children:"Logout"})]})]})}),h.jsx(Ub,{user:_})]})}return h.jsxs("div",{className:`min-h-screen ${n?"dark bg-gray-900":"bg-gray-50"}`,children:[h.jsx("header",{className:"sticky top-0 z-50 backdrop-blur-lg bg-white/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-700",children:h.jsx("div",{className:"container mx-auto px-4 py-4 flex justify-between items-center",children:h.jsxs("div",{className:"flex items-center space-x-2",children:[h.jsxs("svg",{className:"w-10 h-10 cursor-pointer transition-transform duration-500 ease-in-out transform hover:rotate-12 hover:scale-110",viewBox:"0 0 80 80",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[h.jsx("circle",{cx:"40",cy:"40",r:"38",className:"transition-all duration-300 dark:fill-indigo-900/30 fill-indigo-100",stroke:"url(#logoGradient)",strokeWidth:"2"}),h.jsx("path",{d:"M25 30C25 30 30 25 40 25C50 25 55 30 55 30",className:"stroke-indigo-600 dark:stroke-indigo-400",strokeWidth:"2",strokeLinecap:"round"}),h.jsx("circle",{cx:"32",cy:"38",r:"3",className:"fill-indigo-600 dark:fill-indigo-400 transition-all duration-300",stroke:"currentColor",strokeWidth:"1"}),h.jsx("circle",{cx:"48",cy:"38",r:"3",className:"fill-indigo-600 dark:fill-indigo-400 transition-all duration-300",stroke:"currentColor",strokeWidth:"1"}),h.jsx("path",{d:"M30 50C30 50 35 55 40 55C45 55 50 50 50 50",className:"stroke-indigo-600 dark:stroke-indigo-400",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),h.jsxs("g",{className:"opacity-70 group-hover:opacity-100 transition-opacity",children:[h.jsx("path",{d:"M15 20L20 15L25 10",className:"stroke-indigo-500 dark:stroke-indigo-300",strokeWidth:"2",strokeLinecap:"round",strokeDasharray:"5,2",strokeDashoffset:"0",children:h.jsx("animate",{attributeName:"stroke-dashoffset",values:"10;0;10",dur:"4s",repeatCount:"indefinite"})}),h.jsx("path",{d:"M65 60L60 65L55 70",className:"stroke-indigo-500 dark:stroke-indigo-300",strokeWidth:"2",strokeLinecap:"round",strokeDasharray:"5,2",strokeDashoffset:"0",children:h.jsx("animate",{attributeName:"stroke-dashoffset",values:"0;10;0",dur:"4s",repeatCount:"indefinite"})})]}),h.jsxs("defs",{children:[h.jsxs("linearGradient",{id:"logoGradient",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[h.jsx("stop",{offset:"0%",stopColor:"#6366F1",stopOpacity:"1"}),h.jsx("stop",{offset:"100%",stopColor:"#8B5CF6",stopOpacity:"1"})]}),h.jsxs("filter",{id:"glow",x:"-50%",y:"-50%",width:"200%",height:"200%",children:[h.jsx("feGaussianBlur",{stdDeviation:"2.5",result:"coloredBlur"}),h.jsxs("feMerge",{children:[h.jsx("feMergeNode",{in:"coloredBlur"}),h.jsx("feMergeNode",{in:"SourceGraphic"})]})]})]})]}),h.jsx("span",{className:"text-xl font-bold text-gray-900 dark:text-white",children:"MyPersona"})]})})}),h.jsx("main",{className:"flex flex-col items-center justify-center min-h-[calc(100vh-80px)] p-4",children:t==="login"?h.jsx(Bb,{darkMode:n,email:o,password:u,setEmail:l,setPassword:d,error:O,handleLogin:V,setView:e}):h.jsx($b,{darkMode:n,email:o,password:u,confirmPassword:p,username:y,setEmail:l,setPassword:d,setConfirmPassword:m,setUsername:S,selectedFile:R,setSelectedFile:N,error:O,handleRegister:U,setView:e,loading:i})})]})}function Bb({darkMode:t,email:e,password:n,setEmail:r,setPassword:i,error:s,handleLogin:o,setView:l}){return h.jsxs("div",{className:`w-full max-w-md p-8 rounded-lg shadow-lg ${t?"bg-gray-800":"bg-white"}`,children:[h.jsxs("div",{className:"text-center mb-6",children:[h.jsx("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white",children:"Login to MyPersona"}),h.jsx("p",{className:"mt-2 text-gray-600 dark:text-gray-400",children:"Welcome back!"})]}),h.jsxs("form",{onSubmit:o,className:"space-y-4",children:[h.jsxs("div",{children:[h.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300",children:"Email"}),h.jsx("input",{type:"email",value:e,onChange:u=>r(u.target.value),className:`mt-1 block w-full px-4 py-2 rounded-md border ${t?"bg-gray-700 border-gray-600 text-white":"border-gray-300"}`,placeholder:"you@example.com",required:!0})]}),h.jsxs("div",{children:[h.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300",children:"Password"}),h.jsx("input",{type:"password",value:n,onChange:u=>i(u.target.value),className:`mt-1 block w-full px-4 py-2 rounded-md border ${t?"bg-gray-700 border-gray-600 text-white":"border-gray-300"}`,placeholder:"••••••••",required:!0})]}),s&&h.jsx("p",{className:"text-red-500 text-sm",children:s}),h.jsx("button",{type:"submit",className:"w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-md",children:"Login"}),h.jsxs("p",{className:"text-center text-sm text-gray-600 dark:text-gray-400 mt-4",children:["Don't have an account?"," ",h.jsx("button",{type:"button",onClick:()=>l("register"),className:"text-indigo-600 dark:text-indigo-400 hover:underline",children:"Register"})]})]})]})}function $b({darkMode:t,email:e,password:n,confirmPassword:r,username:i,setEmail:s,setPassword:o,setConfirmPassword:l,setUsername:u,selectedFile:d,setSelectedFile:p,error:m,handleRegister:y,setView:S,loading:R}){return h.jsxs("div",{className:`w-full max-w-md p-8 rounded-lg shadow-lg ${t?"bg-gray-800":"bg-white"}`,children:[h.jsxs("div",{className:"text-center mb-6",children:[h.jsx("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white",children:"Create Account"}),h.jsx("p",{className:"mt-2 text-gray-600 dark:text-gray-400",children:"Start building your portfolio"})]}),h.jsxs("form",{onSubmit:y,className:"space-y-4",children:[h.jsxs("div",{children:[h.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300",children:"Username"}),h.jsx("input",{type:"text",value:i,onChange:N=>u(N.target.value),className:`mt-1 block w-full px-4 py-2 rounded-md border ${t?"bg-gray-700 border-gray-600 text-white":"border-gray-300"}`,placeholder:"drinkopi",required:!0})]}),h.jsxs("div",{children:[h.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300",children:"Email"}),h.jsx("input",{type:"email",value:e,onChange:N=>s(N.target.value),className:`mt-1 block w-full px-4 py-2 rounded-md border ${t?"bg-gray-700 border-gray-600 text-white":"border-gray-300"}`,placeholder:"you@example.com",required:!0})]}),h.jsxs("div",{children:[h.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300",children:"Password"}),h.jsx("input",{type:"password",value:n,onChange:N=>o(N.target.value),className:`mt-1 block w-full px-4 py-2 rounded-md border ${t?"bg-gray-700 border-gray-600 text-white":"border-gray-300"}`,placeholder:"••••••••",required:!0})]}),h.jsxs("div",{children:[h.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300",children:"Confirm Password"}),h.jsx("input",{type:"password",value:r,onChange:N=>l(N.target.value),className:`mt-1 block w-full px-4 py-2 rounded-md border ${t?"bg-gray-700 border-gray-600 text-white":"border-gray-300"}`,placeholder:"••••••••",required:!0})]}),h.jsxs("div",{children:[h.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300",children:"Profile Image"}),h.jsx("input",{type:"file",accept:".png,.jpg,.jpeg",onChange:N=>p(N.target.files[0]),className:`mt-1 block w-full text-sm text-gray-700 dark:text-gray-300
              file:mr-4 file:py-2 file:px-4
              file:rounded-md file:border-0
              file:text-sm file:font-semibold
              file:bg-indigo-50 file:text-indigo-700
              hover:file:bg-indigo-100
              ${t?"bg-gray-700 border-gray-600":"border-gray-300"}`,required:!0}),d&&h.jsxs("p",{className:"mt-2 text-sm text-gray-500 dark:text-gray-400",children:["Selected file: ",d.name]})]}),m&&h.jsx("p",{className:"text-red-500 text-sm",children:m}),h.jsx("button",{type:"submit",className:"w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-md",disabled:R,children:R?"Registering...":"Register"}),h.jsxs("p",{className:"text-center text-sm text-gray-600 dark:text-gray-400 mt-4",children:["Already have an account?"," ",h.jsx("button",{type:"button",onClick:()=>S("login"),className:"text-indigo-600 dark:text-indigo-400 hover:underline",children:"Login"})]})]})]})}sd.createRoot(document.getElementById("root")).render(h.jsx(yT.StrictMode,{children:h.jsx(zb,{})}));
