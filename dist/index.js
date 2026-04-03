"use strict";var n=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var v=n(function(w,i){
var a=require('@stdlib/math-base-assert-is-nan/dist'),s=require('@stdlib/math-base-special-ln/dist'),l=require('@stdlib/constants-float64-ninf/dist'),p=require('@stdlib/constants-float64-ln-two/dist'),y=require('@stdlib/constants-float64-ln-pi/dist'),I=.5*(p-y);function L(e,r){return a(e)||a(r)||r<=0?NaN:e<0?l:I-s(r)-e*e/(2*(r*r))}i.exports=L
});var f=n(function(z,N){
var d=require('@stdlib/utils-constant-function/dist'),q=require('@stdlib/math-base-assert-is-nan/dist'),F=require('@stdlib/math-base-special-ln/dist'),C=require('@stdlib/constants-float64-ninf/dist'),P=require('@stdlib/constants-float64-ln-two/dist'),O=require('@stdlib/constants-float64-ln-pi/dist'),R=.5*(P-O);function b(e){var r,t;if(q(e)||e<=0)return d(NaN);return r=F(e),t=e*e,c;function c(u){return q(u)?NaN:u<0?C:R-r-u*u/(2*t)}}N.exports=b
});var h=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),o=v(),j=f();h(o,"factory",j);module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
