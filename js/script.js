// for adding items to the list
function newItem() {
    let li = $('<li></li>');
    let textValue = $('#input').val();
    li.append(document.createTextNode(textValue));


    if (textValue == '') {
        alert('This field is required');
    }
    else {
        $('#list').append(li);
        console.log(textValue);
    }


    //deleting the item by clicking on cross and striking the item in double click. 
    let crossOutButton = $('<crossOutButton></crossOutButton>');
    crossOutButton.append(document.createTextNode('X'));
    li.append(crossOutButton);


    crossOutButton.on('click', function () {
        li.addClass('delete');
    });

    li.on('dblclick', function () {
        li.toggleClass('strike');
    });

    // rearranging the list
    $('#list').sortable();


}