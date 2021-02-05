var Toolbar = {
    /* handles onclick events in the toolbar */
    click: function(buttonId) {
        switch (buttonId) {
            case "headXL":
                $("#menu").append('<h1 contenteditable="true">Placeholder</h1>');
                break;
            case 'headL':
                $("#menu").append('<h2 contenteditable="true">Placeholder</h2>');
                break;
            case 'headM':
                $("#menu").append('<h3 contenteditable="true">Placeholder</h3>');
                break;
            case 'headS':
                $("#menu").append('<h4 contenteditable="true">Placeholder</h4>');
                break;
            case 'itemXL':
                $("#menu").append('<h1 contenteditable="true">Placeholder</h1>');
                break;
            case 'itemL':
                $("#menu").append('<h2 contenteditable="true">Placeholder</h2>');
                break;
            case 'itemM':
                $("#menu").append('<h3 contenteditable="true">Placeholder</h3>');
                break;
            case 'itemS':
                $("#menu").append('<h4 contenteditable="true">Placeholder</h4>');
                break;
            case 'descL':
                $("#menu").append('<p contenteditable="true">Placeholder</p>');
                break;
            case 'descM':
                $("#menu").append('<p contenteditable="true">Placeholder</p>');
                break;
            case 'descS':
                $("#menu").append('<p contenteditable="true">Placeholder</p>');
        }
    }
}