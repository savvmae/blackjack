/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/


function handValue (hand) {
  let faceCards = ["K", "J", "Q"];
  let total = 0;
  let a = 0;
  let numberCards = ['2', '3', '4', '5', '6', '7', '8', '9', '10'];
  for(i = 0; i < hand.length; i ++) {
    if (faceCards.indexOf(hand[i]) != -1) {
      total += 10;
      }
    else if (numberCards.indexOf(hand[i]) != -1) {
        total += parseInt(hand[i]);
      }
    else {
      a += 1;
    }
  }
  for(j = 0; j <= a; j ++) {
    if(a >= 1){
      if(total >= 11) {
        total += 1;
        a -= 1;
      } else if (total <=10) {
        total += 11;
        a -= 1;
      }
    }
  }
  return total;
}







/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
