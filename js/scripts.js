// Toggles class open to display/hide the whole navigation
$( ".navigation-toggle" ).click(function() {
    $( ".bk-extendednavigation" ).toggleClass( "open" );
});


// Toggles class open to add noscroll to body
$( ".navigation-toggle" ).click(function() {
    $( "body" ).toggleClass( "noscroll" );
});


// Toggles class open to add to folder
$( ".navigation-item.folder .item-name--parent" ).click(function() {
    $( ".navigation-item.folder" ).toggleClass( "folder-open" );
});
