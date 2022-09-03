console.log(' ****** BEGIN ******');

console.log(' ----- copyWith(taget, start,end) ');

console.log(' (STEP 1) --------------------------------------------------');

var array1 = ['Red', 'Blue', 'Orange', 'Green','Purple', 'Pink','Brown', 'Yellow'];

console.log('START ARRAY: '+ array1.toString() );

var target = 0;
var start = 6;
var end = 7;
console.log('TARGET: '+ target + ' START: ' + start + ' END: ' + end);

array1.copyWithin(target, start, end);

console.log('END ARRAY: '+ array1.toString() );

console.log(' (STEP 2) --------------------------------------------------');

var array1 = ['Red', 'Blue', 'Orange', 'Green','Purple', 'Pink','Brown', 'Yellow'];

console.log('START ARRAY: '+ array1.toString() );

var target = 0;
var start = 3;
var end = 5;
console.log('TARGET: '+ target + ' START: ' + start + ' END: ' + end);

array1.copyWithin(target, start, end);

console.log('END ARRAY: '+ array1.toString() );

console.log(' (STEP 3) --------------------------------------------------');

var array1 = ['Red', 'Blue', 'Orange', 'Green','Purple', 'Pink','Brown', 'Yellow'];

console.log('START ARRAY: '+ array1.toString() );

var target = 0;
var start = 2;
var end = 8;
console.log('TARGET: '+ target + ' START: ' + start + ' END: ' + end);

array1.copyWithin(target, start, end);

console.log('END ARRAY: '+ array1.toString() );

console.log(' (STEP 4) --------------------------------------------------');

var array1 = ['Red', 'Blue', 'Orange', 'Green','Purple', 'Pink','Brown', 'Yellow', 'John'];

console.log('START ARRAY: '+ array1.toString() );

var target = 0;
var start = 2;
var end = 8;
console.log('TARGET: '+ target + ' START: ' + start + ' END: ' + end);

array1.copyWithin(target, start, end);

console.log('END ARRAY: '+ array1.toString() );

console.log(' (STEP 5) --------------------------------------------------');

var array1 = ['car','truck','boat','tom','ann','bill'];

console.log('START ARRAY: '+ array1.toString() );

var target = 0;
var start = 4;
var end = 6;
console.log('TARGET: '+ target + ' START: ' + start + ' END: ' + end);

array1.copyWithin(target, start, end);

console.log('END ARRAY: '+ array1.toString() );

console.log('--------------------------------------------------');



console.log(' ******* END *******')