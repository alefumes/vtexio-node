import {json} from 'co-body'

import userQuery from './query/user'
import listQuery from './query/list'

const createSafeHandler = (callback: Function) => {
  return async (ctx) => {
    try {
      console.log(ctx)
      const body = await json(ctx.request)
      const data = await callback(body, ctx.vtex)
      ctx.response.set('Content-Type', 'application/json')
      ctx.response.status = 200
      ctx.response.body = {data}
    } catch (e) {
      const errorMessage = `Error processing ${callback.name}`
      ctx.response.status = (e.response && e.response.status) || 500
      ctx.response.body = {error: (e.response && e.response.data) || e.message}
      console.log(errorMessage, e)
    }
  }
}

export default {
  routes: {
    user: createSafeHandler(userQuery),
    list: createSafeHandler(listQuery),
  },
}
