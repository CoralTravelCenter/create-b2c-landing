import {
	hostReactAppReady,
	vimeoAutoPlay,
	setH1UnderKV,
} from "../../common/js/utils";

hostReactAppReady().then(() => {
	vimeoAutoPlay();
	setH1UnderKV();
});
