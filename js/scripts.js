$(function(){

  var romanArray = [[1000,'M'],[500,'D'],[100,'C'],[50,'L'],[10,'X'],[5,'V'],[1,'I']];

  function findFactor(number){
    console.log("Factor Start Number: "+number);
    $(romanArray).each(function(x){
      //x = index
      var factorNumber = this[0];
      var factorNumberArray = romanArray[x][0];
      // console.log("factorNumber: "+factorNumber);
      // console.log("factorNumberArray: "+factorNumberArray);
      var factorChar = romanArray[x][1];
      //console.log('index: '+romanArray[0][0]+", number: "+number+", this: "+this[0]);
      if((number/romanArray[x][0]) == 1){
        console.log('even number'+number/romanArray[x][0]);
        $("#outputNumber h2").append(factorChar);
      }
      if((number/romanArray[x][0]) > 1 && (number/romanArray[x-1][0]) < 1) {
        console.log("found the highest factor: "+factorNumber);
        console.log("highest factor divison: "+number/factorNumber);
        var highestFactor = (number/factorNumber);
        var factor = (number/factorNumber);
        console.log('factor amount'+factor);
        var factorRemainder = factor.toString();
        var beforeDecimalString = factorRemainder.split('.')[0];
        var afterDecimalString = factorRemainder.split('.')[1];
        console.log("Before Decimal: "+beforeDecimalString +", After Decimal: "+afterDecimalString);
        var remainderHighestFactor = (number-this);
        if(beforeDecimalString == 4){
          console.log('use subtraction: factor: '+romanArray[x-1][0]);
          var newFactorRemainder = (romanArray[x][0])-romanArray[x-1][0];
          $("#outputNumber h2").append(romanArray[x][1]+romanArray[x-1][1]);
        }else{
          for(i=0;i < beforeDecimalString; i++){
          console.log(factorChar);
          $("#outputNumber h2").append(factorChar);
          }
        }
        var newRemainder = number - (beforeDecimalString * factorNumber);
        console.log(newRemainder);
        findFactor(newRemainder);
      }
    });
    $("#output h2").append(number);
  }

  $("#romanNumeral form").submit(function(){
    event.preventDefault();
    var number = parseInt($('#input').val());
    findFactor(number);
    //$("#outputNumber h2").text("");
  });
});
