/**
 * Created by IntelliJ IDEA.


 * To change this template use File | Settings | File Templates.
 */

var targetRow = generateRandomRow();
// main program
var count = 0;
var shown  = 0;

$("#myButton0").click(function () {

    var userRow = getInput(count);

    var feedbacks = giveFeedback(targetRow, userRow);

    var id="";
    for (var i =0; i < feedbacks[0] ; i++){
        id = '#result'.concat(String(count)+ shown);
        $(id).css({"background-color":"black"});
        shown++;
    }

    for (var k =0; k < feedbacks[1] ; k++){
        id = '#result'.concat(String(count)+ shown);
        $(id).css({"background-color":"white"});
        shown++;
    }


    //$(id).val(String("black:" + feedbacks[0]).concat(" ").concat("white:" + feedbacks[1]) );

    // document.write("black:" + feedbacks[0] + " ");
    // document.write("white:" + feedbacks[1] + '<br>');

    if (feedbacks[0] == 4) {
        document.write("you are the winner" + '<br>');
    }

//        }
    var correctAnswer = "";
    console.log(count)
    if (count == 6) {

        for (var j = 0; j < targetRow.length; j++) {
             correctAnswer = correctAnswer + targetRow[j] + " ";
        }
        prompt("the correct answer is"  + correctAnswer);
    }
    count++;
    shown =0;
});


function main() {
    var count = 0;
    var targetRow = generateRandomRow();
    //showArray(targetRow)
    while (count < 10) {

        var userRow = getInput(count);
        // document.write("getInput is done.");
        //showArray(userRow);

        // var feedbacks = giveFeedback(targetRow, userRow);

        // document.write("black:" + feedbacks[0] + " ");
        // document.write("white:" + feedbacks[1] + '<br>');
        document.write($('#myText').val());
//         if (feedbacks[0] == 4){
//             document.write("you are winner" + '<br>');
//         }
//         count++;
// //        }
//         if (count == 10){
//
//             for( var j = 0; j < targetRow.length ; j++) {
//                 document.write(targetRow[j] + " " );
//             }
//         }
    }
}

function getInput(index) {

    //var answer = prompt("enter your guess", "");
    var userInput = new Array();
    var id = '#myText'.concat(String(index));
    var answer = $(id).val();

    var strings = answer.split(" ");
    for (var i = 0; i < strings.length; i++) {
        userInput[i] = strings[i];

    }

    return userInput;
}

function generateRandomRow() {

    var count = 0;
    var targetRow = new Array();

    while (count < 4) {


        targetRow[count] = Math.floor(Math.random() * 8);
        count++;
    }

    return targetRow;
}
function giveFeedback(target, input) {
    var black = 0;
    var white = 0;
    var tempTarget = new Array();
    for (var k = 0; k < target.length; k++) {
        tempTarget[k] = target[k];
    }
    //showArray(tempTarget);
    //showArray(input);
    var result = new Array();
    for (var i = 0; i < tempTarget.length; i++) {
        // document.write(tempTarget[i] + " ");
        // document.write(input[i] + " ");
        if (tempTarget[i] == input[i]) {


            black++;
            tempTarget[i] = "10" + i;
            input[i] = "-10" + i;
        }
    }

    for (var h = 0; h < tempTarget.length; h++) {
        for (var j = 0; j < input.length; j++) {
            if (tempTarget[h] == input[j]) {

                white++;
                tempTarget[h] = "10" + h;
                input[j] = "-10" + j;
            }
        }
    }
    result[0] = black;
    result[1] = white;
    return result;
}
function showArray(myArray) {
    //document.writeln("showarray entering");
    for (var i = 0; i < myArray.length; i++) {
        document.write(myArray[i] + " ");
    }
    document.write('<br>');
    //document.writeln("showarray entering");

}
