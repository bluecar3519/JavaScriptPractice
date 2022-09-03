$(document).ready(function(){


    var practice = new Practice();
    var startTitle = 'Starting State of the Array';
    var endTitle = 'Ending State of the Array ';

    var cloneArray;
    var indexOfArray;

    function reload(currentArray){

        cloneArray = new Array();
        indexOfArray = new Array();

        indexOfArray = currentArray; 

        //Clone the array
        cloneArray = [].concat(indexOfArray);

        $('#io-layout-init-array').val(indexOfArray);

        practice.layoutArray('io-layout-start-array', startTitle, indexOfArray, 'io-start');
        practice.layoutArray('io-layout-end-array', endTitle, indexOfArray, 'io-end');


    }

    reload( ['Red', 'Blue', 'Orange', 'Green'] );


    $( "#io-layout-answer" ).click(function() {

        $( "#io-layout-initial" ).click();

        console.log('------- Index Of Button------- ');
        var element = $("#cw-layout-element").val();

        console.log('ELEMENT: ' + element);

        var index_of = cloneArray.indexOf(element);

        console.log(' ARRAY INDEX : ' + index_of);

        function callback(){

            function compareArray(this_layout, index, value){

                if( index == index_of ){
                    $( this_layout ).addClass('compare-tag'); 
                 }
            }

            return compareArray;

        }


        practice.findArray(callback, 'io-end');

    });


    $( "#io-layout-initial" ).click(function() {

        console.log('------- Initial Array ------- ');

        var newString = $('#io-layout-init-array').val();

        newString.replace(" ", "")

        var newArray = newString.split(",");
        
        console.log('New Array: '+ newArray.toString());

        reload(newArray);

    });



    





});