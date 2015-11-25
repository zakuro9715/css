/*global Rooms: true*/
/*exported Rooms*/
Rooms = new Mongo.Collection('rooms')

Meteor.methods({
  createRoom() {
    const id = Random.id(5)
    return Rooms.insert({_id: id, id})
  },
})
