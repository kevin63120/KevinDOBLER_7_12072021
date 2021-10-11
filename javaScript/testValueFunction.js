export function warningMessageText(value, containerMessage, stringmessage) {
	let warningMessage;
	if (value.length === 0) {
		warningMessage = `<h2>${stringmessage}</h2>`;
		containerMessage.innerHTML = warningMessage;
	} else {
		containerMessage.innerHTML = ``;
	}
}
