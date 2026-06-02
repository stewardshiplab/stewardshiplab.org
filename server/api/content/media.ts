export default eventHandler(async () => {
  await cms.init()
  const posts = await cms.database.query({
    source: 'default',
    conditions: [{ type: 'where', field: 'path', operator: 'like', value: '/media/%'}],
    selectedFields: [],
    orderBy: [{ field: 'date', direction: 'desc' }]
  })

  return posts.map(post => ({ ...post, date: post.date.split(' ')[0] }))
})
