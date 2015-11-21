Tinytest.addAsync('createRoom ', (test, done) =>
  Meteor.call('createRoom', (e, id) => {
    if (e) { test.fail(e) }
    test.isNotUndefined(id)

    if (Meteor.isServer) {
      const room = Rooms.find(id)
      test.isNotUndefined(room)
    }

    done()
  })
)
