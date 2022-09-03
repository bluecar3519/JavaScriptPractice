$(document).ready(function(){


    var practice = new Practice();
    var startTitle = 'Starting State of the Array';
    var endTitle = 'Ending State of the Array ';

    var cloneArray;
    var copyWithinArray;

    function reload(currentArray){

        cloneArray = new Array();
        copyWithinArray = new Array();

        copyWithinArray = currentArray; 

        //Clone the array
        cloneArray = [].concat(copyWithinArray);

        $('#cw-layout-init-array').val(copyWithinArray);

        practice.layoutArray('cw-layout-start-array', startTitle, copyWithinArray, 'cw-start');
        practice.layoutArray('cw-layout-end-array', endTitle, copyWithinArray, 'cw-end');


    }

    reload( ['Red', 'Blue', 'Orange', 'Green','Purple', 'Pink','Brown', 'Yellow'] );



    $( "#cw-layout-answer" ).click(function() {

        $( "#cw-layout-initial" ).click();

        console.log('------- Copy Within Button------- ');
        var target = $("#cw-layout-target").val();
        var start = $("#cw-layout-start").val();
        var end = $("#cw-layout-end").val();

        console.log('TARGET: ' + target);
        console.log('START: ' + start);
        console.log('END: ' + end);

  
        cloneArray.copyWithin(target, start, end);

        console.log('STARTING ARRAY : ' + copyWithinArray.toString() );
        console.log('COPY WITHIN ARRAY  : ' + cloneArray.toString() );

        practice.layoutArray('cw-layout-end-array', endTitle, cloneArray, 'cw-end');

        function callback(){

            function compareArray(this_layout, index, value){

                if(copyWithinArray[index].trim() != value.trim() ){
                    $( this_layout ).addClass('compare-tag'); 
                 }
            }

            return compareArray;

        }


        practice.findArray(callback, 'cw-end');

        

    });


    $( "#cw-layout-initial" ).click(function() {

        console.log('------- Initial Array ------- ');

        var newString = $('#cw-layout-init-array').val();

        newString.replace(" ", "")

        var newArray = newString.split(",");
        
        console.log('New Array: '+ newArray.toString());

        reload(newArray);


    });







});