// var active = true;
//
// try {
//     chrome.storage.sync.get({
//         activate: true
//     }, function (items) {
//         active = items.activate;
//         if (active) {
//             main();
//         }
//         track(items.activate ? "true" : "false");
//     });
// } catch (e) {
//     if (active) {
//         main();
//     }
// }


function imgError(image) {

    if($(image).attr("data-switched") == undefined) {

        $(image).attr("data-switched", "true");

        var h = $(image).attr('height');
        var w = $(image).attr('width');
        if(w == undefined || h == 0) {

            var ratio = {
                'height': 3,
                'width': 4
            };

            var newheight = ratio.width / ratio.height;

            h = image.width / newheight;

            // Usually known
            w = image.width;
        }

        image.src = 'http://placehold.it/' + w + 'x' + h + '?text=' + image.alt;

        return true;
    }
}


//Content script, image replacer
function main() {
    //Run on jQuery ready
    var allImgs = $(document).find('img');

    $.each(allImgs, function( key, value ) {
        $(value).bind('error', imgError(this));
    });

    console.log(allImgs);

}

main();


