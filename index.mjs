// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-betaincinv@v0.1.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@v0.1.0-esm/index.mjs";function i(t,s,i){return e(t)||e(s)||e(i)||s<=0||i<=0||t<0||t>1?NaN:n(t,s,i)}function r(t,i){return e(t)||e(i)||t<=0||i<=0?s(NaN):function(s){if(e(s)||s<0||s>1)return NaN;return n(s,t,i)}}t(i,"factory",r);export{i as default,r as factory};
//# sourceMappingURL=index.mjs.map
