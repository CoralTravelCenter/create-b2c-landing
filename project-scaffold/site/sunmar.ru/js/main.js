import {
	hostReactAppReady,
	vimeoAutoPlay,
	setH1UnderKV,
} from "/project-scaffold/site/common/js/utils";

hostReactAppReady().then(() => {
	vimeoAutoPlay();
	setH1UnderKV();
});
