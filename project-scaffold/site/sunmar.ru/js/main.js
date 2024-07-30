import {
	hostReactAppReady,
	vimeoAutoPlay,
	setH1UnderKV,
} from '/site/common/js/utils';

hostReactAppReady().then(() => {
	vimeoAutoPlay();
	setH1UnderKV();
});
