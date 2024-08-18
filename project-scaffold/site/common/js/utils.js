export async function hostReactAppReady(
	selector = "#__next > div",
	timeout = 500,
) {
	return new Promise((resolve) => {
		const waiter = () => {
			const host_el = document.querySelector(selector);
			if (host_el?.getBoundingClientRect().height) {
				resolve();
			} else {
				setTimeout(waiter, timeout);
			}
		};
		waiter();
	});
}

export function getScript(scriptUrl, callback) {
	const script = document.createElement("script");
	script.async;
	script.src = scriptUrl;
	script.onload = callback;
	document.body.appendChild(script);
}

export function vimeoAutoPlay() {
	const vboxes = document.querySelectorAll(
		".vimeo-video-box [data-vimeo-vid]",
	);
	let players = {};
	if (vboxes.length) {
		getScript("https://player.vimeo.com/api/player.js", doio);
	}
	const io_options = {
		root: null,
		rootMargin: "0px",
		threshold: 0.33,
	};

	function doio() {
		const io = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				const targ = entry.target;
				if (entry.isIntersecting) {
					if (players[targ.dataset.vimeoVid]) {
						players[targ.dataset.vimeoVid].play();
					} else {
						players[targ.dataset.vimeoVid] = new Vimeo.Player(
							targ,
							{
								id: targ.dataset.vimeoVid,
								background: 1,
								playsinline: 1,
								autopause: 0,
								title: 0,
								byline: 0,
								portrait: 0,
								autoplay: 1,
								muted: 1,
							},
						);
						players[targ.dataset.vimeoVid].play();
						players[targ.dataset.vimeoVid].on("play", function () {
							this.element.parentElement.classList.add(
								"playback",
							);
						});
					}
				} else {
					players[targ.dataset.vimeoVid]?.pause();
				}
			});
		}, io_options);
		vboxes.forEach((box) => {
			io.observe(box);
		});
	}
}

export function mediaMatcher(size, callback) {
	const mobileWidthMediaQuery = window.matchMedia(`(max-width: ${size}px)`);
	callback(mobileWidthMediaQuery.matches);
	mobileWidthMediaQuery.addEventListener("change", (e) =>
		callback(e.matches),
	);
}

export function setH1UnderKV() {
	const h1 = document.querySelector("h1:not(.kv-headline)");
	const kv = document.querySelector(".kv-main-banner");
	if (h1) {
		h1.classList.add("under-kv");
		kv.prepend(h1);
	}
}

export function copyToClipboard(text) {
	try {
		navigator.clipboard.writeText(text);
	} catch {
		throw new Error(message);
	}
}

export function setYMTarget(selector, target_id, target) {
	selector.addEventListener("click", () => {
		ym(target_id, "reachGoal", target);
	});
}
