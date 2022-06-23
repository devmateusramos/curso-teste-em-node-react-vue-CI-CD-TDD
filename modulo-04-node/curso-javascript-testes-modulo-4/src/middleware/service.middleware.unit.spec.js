const { get } = require("./service.middleware")

describe('Middleware > Service', () => {
  it('shou add service to the request', () => {
    const req = {}
    const next = jest.fn().mockName('next')
    get(req, null, next)

    expect(req.service).toBeDefined()
    expect(next).toBeCalledTimes(1)
    expect(next).toBeCalledWith(/** nothing! */)
  })
})
