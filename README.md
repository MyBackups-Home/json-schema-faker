
[![JSON Schema Faker logo](logo/JSF_logo.png)](https://github.com/json-schema-faker/json-schema-faker)

[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=8MXLRJ7QQXGYY)
[![Build Status](https://travis-ci.org/json-schema-faker/json-schema-faker.svg?branch=master)](https://travis-ci.org/json-schema-faker/json-schema-faker)
[![NPM version](https://badge.fury.io/js/json-schema-faker.svg)](http://badge.fury.io/js/json-schema-faker)
[![Bower version](https://badge.fury.io/bo/json-schema-faker.svg)](https://badge.fury.io/bo/json-schema-faker)
[![Coverage Status](https://codecov.io/github/json-schema-faker/json-schema-faker/coverage.svg?branch=master)](https://codecov.io/github/json-schema-faker/json-schema-faker?branch=master)

[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/json-schema-faker/Lobby)
[![Dependency Status](https://david-dm.org/json-schema-faker/json-schema-faker/status.svg)](https://david-dm.org/json-schema-faker/json-schema-faker)
[![devDependency Status](https://david-dm.org/json-schema-faker/json-schema-faker/dev-status.svg)](https://david-dm.org/json-schema-faker/json-schema-faker#info=devDependencies)

[![Inline docs](http://inch-ci.org/github/json-schema-faker/json-schema-faker.svg?branch=master)](http://inch-ci.org/github/json-schema-faker/json-schema-faker)
[![Typedoc](https://img.shields.io/badge/typedoc-provided-blue.svg)](http://json-schema-faker.github.io/json-schema-faker/)

Use [JSON Schema](http://json-schema.org/draft-04/json-schema-core.html) along with fake generators to provide consistent and meaningful fake data for your system.

## What's next?

The latest `RC16` comes with some deprecations and breaking-changes towards `v0.5.x` API:

- **deprecated** &mdash; You will not longer be able to call `jsf()` and get a fully-dereferenced result. It will just generate given refs and inline ones, nothing else.
  - `jsf.generate()` is the sync-version, with partial dereferencing through given refs, etc.
  - `jsf.resolve()` is the async-version, with full dereferencing, given refs are also supported.
- **deprecated** &mdash; TypeScript sources are not longer used, however `d.ts` definitions will be updated on time.

Review here: https://github.com/json-schema-faker/json-schema-faker/pull/464

> Most _documentation_ from README.md was moved to `docs/` and it should have its own place there, on the website, or wiki pages, etc. This part is unclear yet, so any suggestion is welcome on the PR above.

## Contributors

* [Alvaro Cabrera](https://twitter.com/pateketrueke)
* [Tomasz Ducin](https://twitter.com/tomasz_ducin)
* artwork by [Ajay Karat](http://www.devilsgarage.com/)

We are more than happy to welcome new contributors, our project is heavily developed, but we need more power :)

Please see [contribution guide](.github/CONTRIBUTING.md), you can always contact us to ask how you can help.

### We are looking for **contributors**!

We've recently setup a [gitter room](https://gitter.im/json-schema-faker) for this project, if you want contribute, talk about specific issues from the library, or you need help on json-schema topics just reach us!

Have some ❤ for JSON-Schema-Faker? You can support the project via:

- [Open Collective](https://opencollective.com/json-schema-faker/donate)
- [PayPal](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=8MXLRJ7QQXGYY)

### Technical Documentation

If you want to contribute, take a look at [the technical documentation page](docs/). You may find some important information there making it easier to start.

Moreover, if you find something unclear (e.g. how does something work) or would like to suggest improving the docs, please submit an issue, we'll gladly provide more info for future contributors.

## Resources

* [JSON, JSON Schema & JSON-schema-faker](https://www.youtube.com/watch?v=TkqiUG3j_Xw) - WarsawJS meetup presentation recording, a step-by-step guide to JSON-related tools, including `jsf`

## Motivation

There were some existing projects or services trying to achieve similar goals as `jsf`:

- http://www.json-generator.com/
- https://github.com/unindented/fake-json
- https://github.com/jonahkagan/schematic-ipsum
- https://www.npmjs.org/package/json-schema-mock
- https://github.com/thaume/json-schema-processor
- https://github.com/andreineculau/json-schema-random
- https://github.com/murgatroid99/json-schema-random-instance
- https://github.com/tomarad/JSON-Schema-Instantiator

...but they were either incomplete, outdated, broken or non-standard. That's why `jsf` was created.
