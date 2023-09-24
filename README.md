<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Quantile Function

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> [Beta][beta-distribution] distribution [quantile function][quantile-function].

<section class="intro">

The [quantile function][quantile-function] for a [beta][beta-distribution] random variable is

<!-- <equation class="equation" label="eq:beta_quantile_function" align="center" raw="Q(p;\alpha,\beta)\,=\,\inf\left\{ x\in [0,1] : p \le F(x;\alpha,\beta) \right\}" alt="Quantile function for a beta distribution."> -->

```math
Q(p;\alpha,\beta)\,=\,\inf\left\{ x\in [0,1] : p \le F(x;\alpha,\beta) \right\}
```

<!-- <div class="equation" align="center" data-raw-text="Q(p;\alpha,\beta)\,=\,\inf\left\{ x\in [0,1] : p \le F(x;\alpha,\beta) \right\}" data-equation="eq:beta_quantile_function">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@591cf9d5c3a0cd3c1ceec961e5c49d73a68374cb/lib/node_modules/@stdlib/stats/base/dists/beta/quantile/docs/img/equation_beta_quantile_function.svg" alt="Quantile function for a beta distribution.">
    <br>
</div> -->

<!-- </equation> -->

for `0 <= p <= 1`, where `alpha > 0` is the first shape parameter and `beta > 0` is the second shape parameter and `F(x;alpha,beta)` denotes the cumulative distribution function of a [beta][beta-distribution] random variable with parameters `alpha` and `beta`.

</section>

<!-- /.intro -->



<section class="usage">

## Usage

```javascript
import quantile from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-beta-quantile@esm/index.mjs';
```
The previous example will load the latest bundled code from the esm branch. Alternatively, you may load a specific version by loading the file from one of the [tagged bundles](https://github.com/stdlib-js/stats-base-dists-beta-quantile/tags). For example,

```javascript
import quantile from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-beta-quantile@v0.1.0-esm/index.mjs';
```

You can also import the following named exports from the package:

```javascript
import { factory } from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-beta-quantile@esm/index.mjs';
```

#### quantile( p, alpha, beta )

Evaluates the [quantile function][quantile-function] for a [beta][beta-distribution] distribution with parameters `alpha` (first shape parameter) and `beta` (second shape parameter).

```javascript
var y = quantile( 0.8, 2.0, 1.0 );
// returns ~0.894

y = quantile( 0.5, 4.0, 2.0 );
// returns ~0.686
```

If provided a probability `p` outside the interval `[0,1]`, the function returns `NaN`.

```javascript
var y = quantile( 1.9, 1.0, 1.0 );
// returns NaN

y = quantile( -0.1, 1.0, 1.0 );
// returns NaN
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = quantile( NaN, 1.0, 1.0 );
// returns NaN

y = quantile( 0.5, NaN, 1.0 );
// returns NaN

y = quantile( 0.5, 1.0, NaN );
// returns NaN
```

If provided `alpha <= 0`, the function returns `NaN`.

```javascript
var y = quantile( 0.4, -1.0, 1.0 );
// returns NaN

y = quantile( 0.4, 0.0, 1.0 );
// returns NaN
```

If provided `beta <= 0`, the function returns `NaN`.

```javascript
var y = quantile( 0.4, 1.0, -1.0 );
// returns NaN

y = quantile( 0.4, 1.0, 0.0 );
// returns NaN
```

#### quantile.factory( alpha, beta )

Returns a function for evaluating the [quantile function][quantile-function] of a [beta][beta-distribution] distribution with parameters `alpha` (first shape parameter) and `beta` (second shape parameter).

```javascript
var myquantile = quantile.factory( 2.0, 2.0 );

var y = myquantile( 0.8 );
// returns ~0.713

y = myquantile( 0.4 );
// returns ~0.433
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import randu from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@esm/index.mjs';
import EPS from 'https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-eps@esm/index.mjs';
import quantile from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-beta-quantile@esm/index.mjs';

var alpha;
var beta;
var p;
var y;
var i;

for ( i = 0; i < 10; i++ ) {
    p = randu();
    alpha = ( randu()*5.0 ) + EPS;
    beta = ( randu()*5.0 ) + EPS;
    y = quantile( p, alpha, beta );
    console.log( 'p: %d, α: %d, β: %d, Q(p;α,β): %d', p.toFixed( 4 ), alpha.toFixed( 4 ), beta.toFixed( 4 ), y.toFixed( 4 ) );
}

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-beta-quantile.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-beta-quantile

[test-image]: https://github.com/stdlib-js/stats-base-dists-beta-quantile/actions/workflows/test.yml/badge.svg?branch=v0.1.0
[test-url]: https://github.com/stdlib-js/stats-base-dists-beta-quantile/actions/workflows/test.yml?query=branch:v0.1.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-beta-quantile/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-beta-quantile?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-beta-quantile.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-beta-quantile/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-beta-quantile/tree/deno
[umd-url]: https://github.com/stdlib-js/stats-base-dists-beta-quantile/tree/umd
[esm-url]: https://github.com/stdlib-js/stats-base-dists-beta-quantile/tree/esm
[branches-url]: https://github.com/stdlib-js/stats-base-dists-beta-quantile/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-beta-quantile/main/LICENSE

[beta-distribution]: https://en.wikipedia.org/wiki/Beta_distribution

[quantile-function]: https://en.wikipedia.org/wiki/Quantile_function

</section>

<!-- /.links -->
