export default eventHandler(async (event) => {
  const post = await cms.get(`/${event.context.params!.path!}`)

  if (!post) {
    throw createError({ statusCode: 404, message: 'Not found' })
  }
  return post
})
