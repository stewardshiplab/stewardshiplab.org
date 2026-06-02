export default eventHandler(async () => {
  await cms.init()
  const posts = await cms.database.query({
    source: 'default',
    conditions: [{ type: 'where', field: 'featured', operator: '=', value: true }],
    selectedFields: ['path', 'title', 'description', 'authors', 'date', 'category'],
    orderBy: [{ field: 'date', direction: 'desc' }]
  })

  // Ideally:
  // const posts = await cms.query()
  //   .select('path', 'title', 'description', 'authors', 'date', 'category')
  //   .order('date', 'DESC')
  //   .where('featured', '=', true)
  //   .all()

  return posts.map(post => ({ ...post, date: post.date.split(' ')[0] }))
})
