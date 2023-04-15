module.exports = {
  //Threads
  threads: [
    {      id: 't_1',      threadName: 'Jing and Bill',    },
    {      id: 't_2',      threadName: 'Dave and Bill',    },
    {      id: 't_3',      threadName: 'Functional Heads',    }
  ], 
  
  //Messages
  messages: [
    {
      id: 'm_1',
      threadID: 't_1',
      authorName: 'Bill',
      text: 'Hey Jing, want to give a Flux talk at ForwardJS?',
      timestamp: Date.now() - 99999
    },
    {
      id: 'm_2',
      threadID: 't_1',
      authorName: 'Bill',
      text: 'Seems like a pretty cool conference.',
      timestamp: Date.now() - 89999
    },
    {
      id: 'm_3',
      threadID: 't_1',
      authorName: 'Jing',
      text: 'Sounds good.  Will they be serving dessert?',
      timestamp: Date.now() - 79999
    },
    {
      id: 'm_4',
      threadID: 't_2',
      authorName: 'Bill',
      text: 'Hey Dave, want to get a beer after the conference?',
      timestamp: Date.now() - 69999
    },
    {
      id: 'm_5',
      threadID: 't_2',
      authorName: 'Dave',
      text: 'Totally!  Meet you at the hotel bar.',
      timestamp: Date.now() - 59999
    },
    {
      id: 'm_6',
      threadID: 't_3',
      authorName: 'Bill',
      text: 'Hey Brian, are you going to be talking about functional stuff?',
      timestamp: Date.now() - 49999
    },
    {
      id: 'm_7',
      threadID: 't_3',
      authorName: 'Brian',
      text: 'At ForwardJS?  Yeah, of course.  See you there!',
      timestamp: Date.now() - 39999
    }
  ]
}