const lib = require('../index')

describe('random.bytes.rx library', () => {
  it('is a function of arity 2', () => {
    expect(typeof lib).toEqual('function')
    expect(lib.length).toBe(2)
  })
  it('returns an object that contains randomBytesLib and rxLib keys', () => {
    const obj = lib()
    const keys = Object.keys(obj)
    expect(keys.includes('randomBytesLib')).toBeTrue()
    expect(keys.includes('rxLib')).toBeTrue()
  })
  it('typeof .stream is object', () => {
    const stream = lib().stream
    const actual = typeof stream
    expect(actual).toEqual('object')
  })
  it('.stream() generates a random.byte object', done => {
    lib().stream.subscribe(({ buffer, hex, base64, ascii, utf8 }) => {
      expect(typeof buffer).toEqual('object')
      expect(typeof hex).toEqual('string')
      expect(typeof base64).toEqual('string')
      expect(typeof ascii).toEqual('string')
      expect(typeof utf8).toEqual('string')
      expect(hex.length).toBeGreaterThanOrEqual(32)
      done()
    })
  })
})
