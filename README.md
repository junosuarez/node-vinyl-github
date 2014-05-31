# vinyl-github
github src and dest for vinyl (gulp)

## usage
```js
var github = require('vinyl-github')
var vinylFs = require('vinyl-fs')

github.src('jden/node-vinyl-github', {ref: '0.1.0'})
  .pipe(vinylFs.dest('./dest'))

```
downloads `https://github.com/jden/node-vinyl-github` at tag `0.1.0` to the folder `./dest` relative to the current working directory.

## installation

    $ npm install vinyl-github


## running the tests

From package root:

    $ npm install
    $ npm test


## contributors

- jden <jason@denizac.org>


## license

ISC. (c) MMXIV jden <jason@denizac.org>. See LICENSE.md
