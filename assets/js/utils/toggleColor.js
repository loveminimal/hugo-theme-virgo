// 引入 DarkReader ，进行主题明暗模式切换
// https://github.com/darkreader/darkreader
import { enable, disable, isEnabled } from 'js/libs/darkreader.min';

if (localStorage.getItem('dark')) {
    enable({
        brightness: 100,
        contrast: 90,
        sepia: 10,
    });
}

export default function toggleColor () {
    let _isEnabled = isEnabled();

    if (_isEnabled) {
        disable();
        localStorage.removeItem('dark')

    } else {

        enable({
            brightness: 100,
            contrast: 90,
            sepia: 10,
        });
        localStorage.setItem('dark', true);
    }
}