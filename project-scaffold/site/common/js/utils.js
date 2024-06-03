export async function hostReactAppReady(selector = "#__next > div", timeout = 500) {
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

export function vidautoplay() {
    const vboxes = document.querySelectorAll(".vimeo-video-box [data-vimeo-vid]");
    let players = {};
    if (vboxes.length) {
        getScript("https://player.vimeo.com/api/player.js", doio, !0)
    }
    const io_options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.33,
    };

    function doio() {
        const io = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                const targ = entry.target;
                if (entry.isIntersecting) {
                    if (players[targ.dataset.vimeoVid]) {
                        players[targ.dataset.vimeoVid].play()
                    } else {
                        players[targ.dataset.vimeoVid] = new Vimeo.Player(targ, {
                            id: targ.dataset.vimeoVid,
                            background: 1,
                            playsinline: 1,
                            autopause: 0,
                            title: 0,
                            byline: 0,
                            portrait: 0,
                            autoplay: 1,
                            muted: 1,
                        });
                        players[targ.dataset.vimeoVid].play();
                        players[targ.dataset.vimeoVid].on("play", function () {
                            this.element.parentElement.classList.add("playback");
                            document.querySelector('.kv-main-banner').classList.add("playback");
                        })
                    }
                } else {
                    players[targ.dataset.vimeoVid]?.pause()
                }
            })
        }, io_options);
        vboxes.forEach((box) => {
            io.observe(box)
        })
    }

    function getScript(scriptUrl, callback, async) {
        const script = document.createElement("script");
        if (async === !0) {
            script.async = !0
        }
        script.src = scriptUrl;
        script.onload = callback;
        document.body.appendChild(script)
    }
}