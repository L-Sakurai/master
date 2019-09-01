var strBody = '<message body>';
// entry point
function main() {
  var msg = getCalendarEvent();
  Logger.log(msg);
  if(msg !== null) {
    sendHttpPost(msg);
  }
}

function getCalendarEvent() {
  var message;
  var myCals = CalendarApp.getCalendarById('<google calender id>');
  var date = new Date()
  var date_D = new Date(date.getFullYear(),date.getMonth(),date.getDate(),0,0,0);
  var myEvents = myCals.getEventsForDay(date_D);
  
  if(myEvents.length > 0) {
      for(var i = 0; i < myEvents.length; i++) {
        var strTitle = myEvents[i].getTitle();
        var dispTime = getDispTime(myEvents[i]);
        
        strBody = strBody + '\n' + strTitle + '\n' + dispTime + '\n'; 
      }
    message =　'\n' + strBody;
  } else {
    message = null;
  }
  return message;
}

function getDispTime(event) {
  var start = Utilities.formatDate(event.getStartTime(), 'JST', 'HH:mm');
  var end = Utilities.formatDate(event.getEndTime(), 'JST', 'HH:mm');
  if(start == end) {
    return 'Day of the End';
  }
  return start + '-' + end;
}

//sendding data to notify
function sendHttpPost(message){
  var token = '<LINE Notify API TOKEN creds>';
  var options =
   {
     "method"  : "post",
     "payload" : "message=" + message,
     "headers" : {"Authorization" : "Bearer "+ token}

   };

   UrlFetchApp.fetch("https://notify-api.line.me/api/notify",options);
}
