export default eventHandler(async (event) => {
  await cms.init()
  const category = event.context.params!.category || ''
  if (!['ideas', 'reports', 'tools'].includes(category)) {
    throw createError({ statusCode: 400, message: `Invalid category, valid categories are ${['ideas', 'reports', 'tools'].join(', ')}` })
  }

  const posts = await cms.database.query({
    source: 'default',
    conditions: [{ type: 'where', field: 'path', operator: 'like', value: `/${category}/%` }],
    selectedFields: ['path', 'title', 'description', 'authors', 'date', 'category'],
    orderBy: [{ field: 'date', direction: 'desc' }]
  })

  return posts.map(post => ({ ...post, date: post.date.split(' ')[0] }))
})
