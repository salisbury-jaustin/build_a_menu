var Toolbar = {
    /* handles onclick events in the toolbar */
    click: function(buttonId) {
        switch (buttonId) { // determines which element to append to the doc
            case "headXL":
                $("#menu").append('<h1 class="content" contenteditable="true" placeholder="Menu Category..."></h1>');
                break;
            case 'headL':
                $("#menu").append('<h2 class="content" contenteditable="true" placeholder="Menu Category..."></h2>');
                break;
            case 'headM':
                $("#menu").append('<h3 class="content" contenteditable="true" placeholder="Menu Category..."></h3>');
                break;
            case 'headS':
                $("#menu").append('<h4 class="content" contenteditable="true" placeholder="Menu Category..."></h4>');
                break;
            case 'itemXL':
                $("#menu").append('<h1 class="content" contenteditable="true" placeholder="Menu item && Price..."></h1>');
                break;
            case 'itemL':
                $("#menu").append('<h2 class="content" contenteditable="true" placeholder="Menu item && Price..."></h2>');
                break;
            case 'itemM':
                $("#menu").append('<h3 class="content" contenteditable="true" placeholder="Menu item && Price..."></h3>');
                break;
            case 'itemS':
                $("#menu").append('<h4 class="content" contenteditable="true" placeholder="Menu item && Price..."></h4>');
                break;
            case 'descL':
                $("#menu").append('<p class="content" contenteditable="true" placeholder="Item description..."></p>');
                break;
            case 'descM':
                $("#menu").append('<p class="content" contenteditable="true" placeholder="Item description..."></p>');
                break;
            case 'descS':
                $("#menu").append('<p class="content" contenteditable="true" placeholder="Item description..."></p>');
        }
    }
}