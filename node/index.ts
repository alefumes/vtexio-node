import {ColossusContext} from 'colossus'

export default {
  events: {
    onAppsLinked: async (ctx) => {
      console.log(`onAppsLinked body: ${ctx.body}`)
    }
  },
  routes: {
    printHelloWorld: async (ctx: ColossusContext) => {
      ctx.set('Cache-Control', 'no-cache')
      ctx.response.status = 200
      ctx.response.body = 'Hello, IO!'
    }
  }
}
