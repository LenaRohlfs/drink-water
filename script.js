var date;
var intervalID;

function start() {
    var minutes = document.getElementById('timer').value;
    intervalID = setInterval(function() {
        message();
    }, minutes*60000);

    toggleElements();
    message();
}

function message() {
    notifyMe();
}

function stop() {
    clearInterval(intervalID);
    toggleElements();
}

function toggleElements() {
    var elements = document.getElementsByTagName('button');
    for(let i=0; i<elements.length; i++) {
        elements[i].classList.toggle('hide')
    }
}

function notifyMe() {
    if (!("Notification" in window)) {
      alert("This browser does not support desktop notification");
    }
  
    else if (Notification.permission === "granted") {
      var notification = new Notification("Trink!");
    }
  
    else if (Notification.permission !== "denied") {
      Notification.requestPermission().then(function (permission) {
        if (permission === "granted") {
          var notification = new Notification("Trink!");
        }
      });
    }
  }