/**
 * Created by on 12/31/16.
 */

main()
function main(){
    var target = new Array();
    target= [1 ,2, 3, 4];
    var input = [4,3,1,2];
    giveFeedback(target, input);
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
            console.log(tempTarget[i]);
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
    console.log("black=" + black );
    console.log("white=" + white );
    return result;
}