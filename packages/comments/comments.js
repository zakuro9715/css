/*global Comments: true*/
/*exported Comments*/
Comments = new Mongo.Collection('comments')

Comments.inRoom = (roomId) => Comments.find({roomId})

if (Meteor.isServer) {
  Meteor.publish('commentsInRoom', (roomId) => Comments.InRoom(roomId))
}
