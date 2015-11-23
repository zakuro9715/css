Router.configure({
  layoutTemplate: 'layout',
  notFoundTemplate: 'notFound',
})

Router.route('root', {path: '/'})
Router.route('room', {
  path: '/:id',
  data() { return {id: this.params.id} },
  subscriptions() {
    return Meteor.subscribe('commentsInRoom', this.params.id)
  },
})
