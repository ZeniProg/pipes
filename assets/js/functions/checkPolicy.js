const checkPolicy = (formSelector, buttonSelector = '.button') => {
	const form = document.querySelector(formSelector);
	const policyCheckbox = form.querySelector('.checkbox__real');
	const sendButton = form.querySelector(buttonSelector);
	sendButton.setAttribute('disabled', '');

	policyCheckbox.addEventListener('click', () => {
		if (policyCheckbox.checked) {
			sendButton.removeAttribute('disabled');
		} else {
			sendButton.setAttribute('disabled', '');
		}
	});
};

try {
	checkPolicy('.application__form');
} catch {}
try {
	checkPolicy('.calc__form', '.calc-data__button');
} catch {}
try {
	checkPolicy('.consultation__form');
} catch {}
