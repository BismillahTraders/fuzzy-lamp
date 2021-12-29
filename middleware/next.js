import next from 'next'

const { NODE_ENV } = process.env
const isDevelopment = NODE_ENV === 'development'

export const nextApp = next({ dev: isDevelopment })
export const nextHandleRequest = nextApp.getRequestHandler()
await nextApp.prepare()

function renderPageWithNext(req, res, next) {
  const isNextDataRequest = req.path.startsWith('/_next') && !req.path.startsWith('/_next/data')

  if (isNextDataRequest) {
    return nextHandleRequest(req, res)
  }

  return next()
}

export default renderPageWithNext
