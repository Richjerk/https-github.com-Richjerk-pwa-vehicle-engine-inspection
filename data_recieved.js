var events=require('events');
var eventEmitter=new events.eventEmitter();
eventEmitter.on('data_recieved', function(){
console.log('data recieved successfully.');
});
eventEmitter.emit('data_recieved');
