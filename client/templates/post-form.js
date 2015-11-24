Template.postForm.events({
  'submit #post-form': (event, template) => {
    event.preventDefault()

    const $errors = template.$('#post-form__errors')
    $errors.empty()

    const $body = template.$('#post-form__body')
    const $name = template.$('#post-form__name')
    const roomId = Router.current().params.id

    if ($body.val().length === 0 || $name.val().length === 0) {
      $errors.append('<p>error</p>')
      return
    }

    Comments.insert({roomId, body: $body.val(), name: $name.val(), y: Random.choice([0, 30, 60, 90, 120])})
    $body.val('')
  },
})
