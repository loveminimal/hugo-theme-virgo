import $ from '../libs/jquery.min';

export default function toggleToc (e) {
    e.stopPropagation()

    let toc = $('.toc'),
        po = $('.toc .page-operation');

    let _right = toc.css('right');

    if (_right === '-300px') {
        toc.css({ right: '16px' })
        po.css({ right: '24px' })

        $('body').click(toggleToc)
    } else {
        toc.css({ right: '-300px' })
        po.css({ right: '-300px' })
        $('body').unbind('click')
    }

}