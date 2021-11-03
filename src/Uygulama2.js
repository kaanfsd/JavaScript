
/* İstediğiniz kadar parametre girerek o sayıların asallık durumunu
 inceleyen fonksiyon */

 function findPrime(...numbers){

    for (let i = 0; i < numbers.length; i++) {
        let isPrime = true
        let number = numbers[i];

        if (number == 2){
            isPrime = true
        }
        else if (number>1){ 
            for (let j = 2; j < number ; j++) {
            if (number % j == 0){
                isPrime = false
            }
                }
        }else{
            isPrime = false
        }
    isPrime ? console.log(number + " bir asal sayıdır.") : console.log(number + " bir asal sayı değildir.")
    }
}//findPrime(-21,-14,-1,0,1,2,3,4,5,51,983,1234)


// İki sayıyı arkadaş sayı olma durumuna göre inceleyen fonksiyon

function friendNumbers(numA, numB){

    let sumA = 0, sumB = 0
    let abudancyA = 0, abudancyB = 0

    for (let i = 1; i <= numA; i++){
      if (!(numA  % i)) {
        sumA += i;
      }
    }
    abudancyA = sumA/numA

    for (let i = 1; i <= numB; i++){
        if (!(numB  % i)) {
          sumB += i;
        }
      }
      abudancyB = sumB/numB
    
      if (abudancyB == abudancyA) {
          console.log(numA + " ve " + numB + " arkadaş sayılardır.")
      }else{
          console.log(numA + " ve " + numB + " arkadaş sayı değildir.")
      }
  }//   friendNumbers(12,23);
   //   friendNumbers(6,28);
   //   friendNumbers(12,234);
   //   friendNumbers(60,1170);
   //   friendNumbers(-1,1);

  


// 1000'e kadarki tüm mükemmel sayıları sunan fonksiyon

function perfectNumber(){
    for (let num = 1; num < 1000; num++) {
        let sum = 0;
    for (let i = 1; i <= num; i++){
      if (!(num % i)) {
        sum += i;
      }
    }
    if (sum==num*2) {
        console.log(num+" mükemmel sayıdır.")
    }
    }
    
  }//perfectNumber();
      
   
// 1000'e kadarki asal sayıları listeleyen fonksiyon
   function primeNumbers(range) {
    for (let counter = 2; counter <= range; counter++) {

        let isPrime = true;
        for (let i = 2; i <= counter; i++) {
            if (counter%i==0 && i!=counter) {
                isPrime = false;
            }
        }
        if (isPrime == true) {
                console.log(counter);
        }
    }
   }//primeNumbers(1000)
   
   
  
