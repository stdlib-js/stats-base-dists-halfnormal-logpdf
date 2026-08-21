"use strict";var a=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(u){throw (r=0, u)}};};var q=a(function(w,v){
var i=require('@stdlib/math-base-assert-is-nan/dist'),s=require('@stdlib/math-base-special-ln/dist'),l=require('@stdlib/constants-float64-ninf/dist'),p=require('@stdlib/constants-float64-ln-two/dist'),y=require('@stdlib/constants-float64-ln-pi/dist'),I=.5*(p-y);function L(e,r){var u;return i(e)||i(r)||r<=0?NaN:e<0?l:(u=e/r,I-s(r)-u*u/2)}v.exports=L
});var o=a(function(z,f){
var d=require('@stdlib/utils-constant-function/dist'),N=require('@stdlib/math-base-assert-is-nan/dist'),F=require('@stdlib/math-base-special-ln/dist'),C=require('@stdlib/constants-float64-ninf/dist'),P=require('@stdlib/constants-float64-ln-two/dist'),O=require('@stdlib/constants-float64-ln-pi/dist'),R=.5*(P-O);function b(e){var r;if(N(e)||e<=0)return d(NaN);return r=F(e),u;function u(t){var n;return N(t)?NaN:t<0?C:(n=t/e,R-r-n*n/2)}}f.exports=b
});var h=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),c=q(),j=o();h(c,"factory",j);module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
