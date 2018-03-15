module.exports = {
  events: {
    onAppsLinked: async (ctx) => {
      console.log(`onAppsLinked body: ${ctx.body}`)
    }
  },
  routes: {
    printHelloWorld: async (ctx) => {
      ctx.set('Cache-Control', 'no-cache')
      ctx.response.status = 200
      ctx.response.body = 'Hello, IO!'
    }
  }
}
