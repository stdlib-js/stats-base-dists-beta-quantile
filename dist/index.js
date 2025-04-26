"use strict";var c=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var a=c(function(R,s){
var f=require('@stdlib/math-base-special-betaincinv/dist'),t=require('@stdlib/math-base-assert-is-nan/dist');function N(e,r,n){return t(e)||t(r)||t(n)||r<=0||n<=0||e<0||e>1?NaN:f(e,r,n)}s.exports=N
});var q=c(function(g,o){
var y=require('@stdlib/utils-constant-function/dist'),x=require('@stdlib/math-base-special-betaincinv/dist'),u=require('@stdlib/math-base-assert-is-nan/dist');function d(e,r){if(u(e)||u(r)||e<=0||r<=0)return y(NaN);return n;function n(i){return u(i)||i<0||i>1?NaN:x(i,e,r)}}o.exports=d
});var m=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),v=a(),F=q();m(v,"factory",F);module.exports=v;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
