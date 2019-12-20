function setup (randomBytesLib, rxLib) {
  randomBytesLib = randomBytesLib || require('@m1yh3m/random.bytes')
  rxLib = rxLib || require('rxjs')

  const { Observable } = rxLib

  const stream = new Observable(subscriber => {
    subscriber.next(randomBytesLib().generate())
  })

  return {
    stream,
    randomBytesLib,
    rxLib
  }
}

module.exports = setup
