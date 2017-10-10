module.exports = {
  routes: {
    printHelloWorld: async (ctx) => {
      ctx.response.status = 200
      ctx.response.body = "Hello, IO!"
    }
  },
  events: {
    onAppsLinked: async (ctx) => {
      console.log(`onAppsLinked body: ${ctx.body}`)
    }
  }
}
