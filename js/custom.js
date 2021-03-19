var Toolbar = {
    /* handles onclick events in the toolbar */
    addCounter: 0, // tracks the number of elements in the menu
    deleteCounter: 0, // tracks the number of time delete button is clicked
    sortableCounter: 0, // tracks the number of times the sort button is clicked
    add: function(buttonId) {
        let counter = Toolbar.addCounter;
        let $row = $('<div class="row"></div>');
        $row.attr('id', `row${counter}`); // gives row a unique id
        $("#menu").append($row); 

        if ($(`#${buttonId}`).hasClass('heading')) { // if the the headings button was clicked 
            switch (buttonId) { // determines which heading element to append to the row 
                case "headXL":
                    $(`#row${counter}`).append('<h1 class="content headings editable" contenteditable="true" placeholder="Menu Category..."></h1>');
                    break;
                case 'headL':
                    $(`#row${counter}`).append('<h2 class="content headings editable" contenteditable="true" placeholder="Menu Category..."></h2>');
                    break;
                case 'headM':
                    $(`#row${counter}`).append('<h3 class="content headings editable" contenteditable="true" placeholder="Menu Category..."></h3>');
                    break;
                case 'headS':
                    $(`#row${counter}`).append('<h4 class="content headings editable" contenteditable="true" placeholder="Menu Category..."></h4>');
                    break;
            }
        } else  { // if items or description button was clicked
            switch (buttonId) {
                case 'items':
                    $(`#row${counter}`).append('<p class="content menuItems editable" contenteditable="true" placeholder="Menu item && Price..."></p>');
                    break;
                case 'desc':
                    $(`#row${counter}`).append('<p class="content descriptions editable" contenteditable="true" placeholder="Item description..."></p>');
                    break;
            }   
        }
        Toolbar.addCounter++;
    },
    delete: function() {
        Toolbar.deleteCounter++; // adds one to deleteCounter
        let $children = $("#menu").children(".row"); 
        if (Toolbar.deleteCounter%2 != 0) { // if counter is odd, add delete buttons to .row
            $("#delete").css("color", "red");
            let $button = $('<button class="delete">X</button>');
            $button.click(function() { // function for delete button
                $(this).parent().remove(); // removes parent (.row) of delete button
                if ($(".delete").length == 0) { // if there are no longer buttons (.delete) in the DOM
                    Toolbar.deleteCounter = 0; // set counter to 0 
                    $("#delete").css('color', 'white');
                }
            });
            $children.prepend($button); // add delete button
        } else {
            $("#delete").css('color', 'white');
            $(".delete").remove(); // every even click of the delete button will remove all delete buttons
        }
    },
    sortable: function() {
        if (Toolbar.sortableCounter == 0) {
            $("#menu").sortable(); // sortable requires initialization before being able to call 'enable' and 'disable' as args
        };
        Toolbar.sortableCounter++;
        if (Toolbar.sortableCounter%2 != 0) { // once initialized we can enable and disable sortable depending on our counter
            $("#sort").css("color", "red");
            $("#menu").sortable('enable');
        } else {
            $("#sort").css("color", "white");
            $("#menu").sortable('disable');
        }
    }

}