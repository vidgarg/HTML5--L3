var inpNo;
function getInput(event) {
	// message data sent by page
	inpNo = Number(event.data);
	timedCount();
}

function timedCount() {
    // message to send back
    inpNo = inpNo + 1;
    // posting back the message
    postMessage(inpNo);
    // calling recursively after every 0.4 seconds
    setTimeout("timedCount("+String(inpNo)+")",400);
}

this.addEventListener('message', getInput, false);
