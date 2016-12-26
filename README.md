# Swag shop cart prototype

The [DSA swag shop](https://dsausa.org/swagshop) would benefit from having a
shopping card that lets users add items & then serializes the cart contents
and sends it to the DSA staff (in lieu of an actual online shopping / payment
system).

This is a wee prototype of what that could look like, minus the serialization
feature (which would just be a matter of dumping the contents of the store's
`cartItems` to some machine-readable form and sending it off).

## How to use this demo

This demo is written in a form that assumes compilation using [Gulp](http://gulpjs.com/),
[Babel](https://babeljs.io/), and (to run both of those) [Node](https://nodejs.org/en/).

Clone the repo. Ensure you have a working installation of both Node and Gulp.
Run `npm install` to install dependencies.

To compile the JS, run `gulp` in the root directory. (This will start an auto
recompilation process, but once it successfully compiles for the first time,
you can interrupt the process with `ctrl+c`.) Then run `Python -m SimpleHTTPServer`
in the same directory and visit `http://localhost:8000` in your browser.

## What's wrong with this

This doesn't include serialization and form submission. Whoever finishes this
project will want to add that. Probably this will involve sending off a `fetch`
to some API endpoint, waiting on the result, and then redirecting the user
to some purchase-result page.

It's also notable that the `bundle.js` that results from this is *really* big,
which seems less than desirable for something this simple. I reached for Redux,
React, and this whole complicated preprocessing setup because:

- [Elm](http://elm-lang.org) has influenced the way I write front-end code
to the point where I don't want to do anything else
- I can't stand to *not* use [ES6](https://github.com/gaearon/redux-thunk) anymore

But maybe this isn't really worth the nasty bump to the page's load time.
