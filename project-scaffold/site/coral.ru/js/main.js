import { hostReactAppReady, vidautoplay } from '/project-scaffold/site/common/js/utils';

hostReactAppReady().then(()=> {
    console.log('+++test');
    vidautoplay();
});
