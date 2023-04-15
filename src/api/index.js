//Consts
const data = require('./mock-data')
const LATENCY = 16

//getAllMessages
export function getAllMessages (cb) { invokeApi(data, cb, LATENCY) } //setTimeout(() => { cb(data) }, LATENCY)}
export function createMessage (props, cb){ invokeApi(createMessageCore(props), cb, LATENCY) } // setTimeout(function (){ cb( createMessageCore(props)) }, LATENCY) }

//
function invokeApi(response, cb, latency){ setTimeout(function (){ cb(response) }, latency) }

//createMessage
function createMessageCore ({ text, thread }) {
  const timestamp = Date.now();  
  const id = 'm_' + timestamp
  return { id,    text,    tsp:timestamp,    thid: thread.id,    thnm: thread.nm,    authorName: 'Evan'  }
}


/*{ text, thread } {
  const timestamp = Date.now();  
  const id = 'm_' + timestamp
  const message = { id,    text,    timestamp,    threadID: thread.id,    threadName: thread.name,    authorName: 'Evan'  }
  setTimeout(function (){ cb(message) }, LATENCY)
}*/