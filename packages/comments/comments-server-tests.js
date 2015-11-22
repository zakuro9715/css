Tinytest.add('queries - InRoom', (test) => {
  const roomId = 'id'
  const initial = Comments.inRoom(roomId).count()
  Comments.insert({roomId: '0'})
  Comments.insert({roomId: 'id'})
  Comments.insert({roomId: 'id'})
  test.equal(Comments.inRoom(roomId).count() - initial, 2)
});
