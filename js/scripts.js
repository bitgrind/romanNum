$(function(){

  var romanArray = [[1000,'M'],[500,'D'],[100,'C'],[50,'L'],[10,'X'],[5,'V'],[1,'I']];

  function findFactor(number){
    if(number == 0){
      return false;
    }
    $(romanArray).each(function(x){
      var factorNumber = this[0];
      var factorNumberArray = romanArray[x][0];
      var factorChar = romanArray[x][1];
      if((number/romanArray[x][0]) == 1){
        $("#outputNumber h2").append(factorChar);
      }
      if((number/romanArray[x][0]) > 1 && (number/romanArray[x-1][0]) < 1) {
        var highestFactor = (number/factorNumber);
        var factor = (number/factorNumber);
        var factorDecRemainder = (number%factorNumber);
        var factorRemainder = factor.toString();
        var beforeDecimalString = factorRemainder.split('.')[0];
        var afterDecimalString = factorRemainder.split('.')[1];
        var remainderHighestFactor = (number-this);
        var newRemainder = number - (beforeDecimalString * factorNumber);
        console.log("number: "+number+", factor"+factor+", newRemainder: "+newRemainder+", factorDecRemainder: "+factorDecRemainder);
        if(factor == 1.8){
          console.log("FOUND A 9!!! Index: "+romanArray[x][1]+", aboveIndex: "+romanArray[x-1][1]+", belowIndex: "+romanArray[x+1][1]);
          $("#outputNumber h2").append(romanArray[x+1][1]+romanArray[x-1][1]);
        }else if(beforeDecimalString == 4){
          console.log("R == than 4");
          console.log("newRemainder: "+newRemainder);
          $("#outputNumber h2").append(romanArray[x][1]+romanArray[x-1][1]);
          findFactor(newRemainder);
        }else if(beforeDecimalString < 4){
          console.log("R less than 4");
          console.log("number: "+number+", factor"+factor+", newRemainder: "+newRemainder);
          for(i=0;i < beforeDecimalString; i++){
            $("#outputNumber h2").append(factorChar);
          }
          findFactor(newRemainder);
        }
      }
    });
    $("#output h2").append(number);
  }

  $("#romanNumeral form").submit(function(){
    event.preventDefault();
    var number = parseInt($('#input').val());
    $("#outputNumber h2").html("");
    findFactor(number);
  });
});
