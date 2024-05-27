import showdown from "showdown";

// add custom class name to paragraph with image
showdown.extension('paragraphImageClass', function () {
    return [{
        type: 'output',
        regex: /<p>(.*?)<img(.*?)\/>(.*?)<\/p>/g,
        replace: '<p class="image-paragraph">$1<img$2/>$3</p>'
    }];
});

showdown.extension('linkInlineClass', function () {
    return [{
        type: 'output',
        regex: /<a(.*?)>(.*?)<\/a>/g,
        replace: '<a class="link-inline"$1>$2</a>'
    }];
});
