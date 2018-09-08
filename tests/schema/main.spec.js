// fs = require('fs')
// glob = require('glob')
// jsf = require('../../')

// pick = (obj, key) ->
//   parts = key.split('.')
//   obj = obj[parts.shift()] while parts.length
//   obj

// tryTest = (test, refs, schema) ->
//   return if test.skip

//   (if test.async
//     jsf.resolve(schema, refs)
//   else
//     Promise.resolve().then ->
//       jsf(schema, refs))
//   .catch (error) ->
//     if typeof test.throws is 'string'
//       expect(error).toMatch new RegExp(test.throws, 'im')

//     if typeof test.throws is 'boolean'
//       throw error if test.throws isnt true
//   .then (sample) ->
//     if test.dump
//       console.log 'IN', JSON.stringify(schema, null, 2)
//       console.log 'OUT', JSON.stringify(sample, null, 2)
//       return

//     if test.hasProps
//       test.hasProps.forEach (prop) ->
//         if Array.isArray(sample)
//           sample.forEach (s) ->
//             expect(s[prop]).not.toBeUndefined()
//         else
//           expect(sample[prop]).not.toBeUndefined()

//     if test.onlyProps
//       expect(Object.keys(sample)).toEqual test.onlyProps

//     if test.count
//       expect((if Array.isArray(sample) then sample
//       else Object.keys(sample)).length).toEqual test.count

//     if test.hasNot
//       expect(JSON.stringify sample).not.toContain test.hasNot

//     if test.type
//       expect(sample).toHaveType test.type

//     if test.valid
//       expect(sample).toHaveSchema [schema, refs]

//     if "equal" of test
//       expect(sample).toEqual test.equal

// only = []
// all = []

// glob.sync("#{__dirname}/**/*.json").forEach (file) ->
//   suite = try
//     JSON.parse(fs.readFileSync(file))
//   catch e
//     console.log "Invalid JSON: #{file}"
//     console.log e.message
//     process.exit 1
//     null

//   (if Array.isArray(suite) then suite else [suite]).forEach (x) ->
//     return if x.xdescription?
//     _only = false
//     suite = { file }
//     suite[k] = v for k, v of x
//     suite.tests = suite.tests.sort (a, b) ->
//       return -1 if a.only?
//       return 1 if b.only?
//       return 0
//     .filter (y) ->
//       if (_only and !y.only?) or y.xdescription?
//         return false
//       _only = true if y.only
//       true
//     only.push(suite) if x.only? or _only
//     all.push(suite)

// (if only.length then only else all).forEach (suite) ->
//   describe "#{suite.description} (#{suite.file.replace(__dirname + '/', '')})", ->
//     beforeEach ->
//       jasmine.addMatchers(customMatchers)

//     suite.tests.forEach (test) ->
//       it test.description, (done) ->
//         jsf.option(jsf.option.getDefaults())

//         if test.set
//           jsf.option(test.set)

//         if test.require
//           wrapper = require('./' + test.require)
//           wrapper.register(jsf)

//         schema = if typeof test.schema is 'string'
//           pick(suite, test.schema)
//         else
//           test.schema

//         refs = test.refs?.map (ref) ->
//           if typeof ref is 'string'
//             pick(suite, ref)
//           else
//             ref

//         # support for "exhaustive" testing, increase or set in .json spec
//         # for detecting more bugs quickly by executing the same test N-times
//         nth = test.repeat or (if process.CI then 100 else 10)

//         tasks = []
//         tasks.push(tryTest(test, refs, schema)) while nth--

//         Promise.all(tasks).then(done)
