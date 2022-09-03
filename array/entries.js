$(document).ready(function(){


    var practice = new Practice();

    var entriesArray;

    function reload(currentArray){

        cloneArray = new Array();
        entriesArray = new Array();

        entriesArray = currentArray; 

        //Clone the array
        cloneArray = [].concat(entriesArray);

        $('#en-layout-init-array').val(entriesArray);
    }

    reload( ['Red', 'Blue', 'Orange'] );









});