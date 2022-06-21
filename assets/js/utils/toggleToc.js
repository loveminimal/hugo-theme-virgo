import $ from '../libs/jquery.min';

export default function () {
    // console.log('toglle toc...')
    let toc = $('.toc'),
        po = $('.toc .page-operation');

    let _right = toc.css('right');
    // console.log(_right)

    if (_right === '-300px') {
        toc.css({ right: '16px' })
        po.css({ right: '24px' })
    } else {
        toc.css({ right: '-300px' })
        po.css({ right: '-300px' })
    }

}