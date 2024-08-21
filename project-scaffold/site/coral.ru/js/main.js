import {
	hostReactAppReady,
	vimeoAutoPlay,
	setH1UnderKV,
} from "../../common/js/utils";

hostReactAppReady().then(() => {
	vimeoAutoPlay();

	// Функция прячет системный заголовок под баннер
	setH1UnderKV();
});
