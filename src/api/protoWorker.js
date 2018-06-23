var i = 0;

onmessage = function(e) {
  i = e.data;
}

function timedCount() {
    i = i + 1;
    postMessage(i);
    setTimeout("timedCount()",500);
  
  i === 110 ? close() : null;
}

timedCount();