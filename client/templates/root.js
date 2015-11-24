Template.root.events({
  'submit #create-room-form': (event) => {
    event.preventDefault()
    Meteor.call('createRoom', (e, id) => {
      Router.go(`/${id}`)
    })
  },
})
