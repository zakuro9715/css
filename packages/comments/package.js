Package.describe({
  name: 'css:comments',
  version: '0.0.1',
})

Package.onUse(function(api) {
  api.versionsFrom('1.2.1')
  api.use('ecmascript')
  api.use('mongo')
  api.use('zakuro:eslint')
  api.addFiles('comments.js')
  api.export('Comments')
})

Package.onTest(function(api) {
  api.use('ecmascript')
  api.use('mongo')
  api.use('tinytest')
  api.use('css:comments')
  api.addFiles('comments-server-tests.js', 'server')
})
