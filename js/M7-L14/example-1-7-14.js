let outputScrollDefault = document.getElementById("outputScrollDefault");
let outputScrollThrottling = document.getElementById("outputScrollThrottling");

let eventScrollCounter = {
	default: 0,
	throttling: 0,
};

//default scrolling
document.addEventListener("scroll", () => {
	eventScrollCounter.default += 1;
	outputScrollDefault.innerText = eventScrollCounter.default;
});

//throttling scrolling
document.addEventListener(
	"scroll",
	_.throttle(() => {
		eventScrollCounter.throttling += 1;
		outputScrollThrottling.innerText = eventScrollCounter.throttling;
	}, 1500)
	// underscore (_) in _.throttle means that this method came from lodash library
// second parameter ofd the throttle method is time in milliseconds
);
