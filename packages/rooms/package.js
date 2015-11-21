Package.describe({
  name: 'css:rooms',
  version: '0.0.1',
})

Package.onUse(function(api) {
  api.versionsFrom('1.2.1')
  api.use('ecmascript')
  api.use('mongo')
  api.use('random')
  api.use('zakuro:eslint')
  api.addFiles('rooms.js')
  api.export('Rooms')
})

Package.onTest(function(api) {
  api.use('ecmascript')
  api.use('tinytest')
  api.use('zakuro:eslint')
  api.use('css:rooms')
  api.addFiles('rooms-tests.js')
})
