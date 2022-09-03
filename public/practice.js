class Practice{

    constructor(){

    }

    layoutArray( tag_id, title, printArray, name){
        var print = printArray;
        var tags = '';

        //Label for the array 
         tags = tags + '<span class="name-tag" >'+title+'</span>';
         tags = tags + '<br> <br>'

        for(var m =0; m < print.length; m++){
            tags = tags + '<div class="'+ name +'" > ['+ m + '] = ' + print[m] + '</div><br>';
        }
        tags = tags + '<br> <br>'

        $('#'+tag_id).html(tags);

    }


    findArray(backCall, tag_id ){

        console.log('Main Tag Id: '+ tag_id);

        $( "." + tag_id).each(function() {

            var textHtml = $( this ).text(); 
             //console.log( textHtml );

             $( this ).removeClass('compare-tag'); 

             var rightBrace = textHtml.indexOf("[");
             var leftBrace = textHtml.indexOf("]");
             var equalSign= textHtml.indexOf("=");

             var index = textHtml.substring(rightBrace +1,leftBrace);

             var value = textHtml.substring(equalSign+1);

            var compareArray = backCall();

            compareArray(this, index, value);

          });


    }





}