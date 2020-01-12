let msTens = document.querySelector('#msTens');
let msHun = document.querySelector('#msHundreds');
let secOnes = document.querySelector('#secondOnes');
let secTens = document.querySelector('#secondTens');

let time = 0;
let msHunTime = 0;
let secOnesTime = 0;
let secTensTime = 0;

let msTensCount = setInterval( () => {
   ++time;
   msTens.textContent = time;

// MS HUNDREDS
    if (time == 1) {
      msHunTime++;
      msHun.textContent = msHunTime;

      if (msHunTime == 10) {
        msHunTime = 0;
        msHun.textContent = msHunTime;
      }

  // SECONDS IN ONES
      if (msHunTime == 0) {
        secOnesTime++;
        secOnes.textContent = secOnesTime;

        if (secOnesTime == 10) {
          secOnesTime = 0;
          secOnes.textContent = secOnesTime;
        }

        // SECONDS IN TENS
          if (secOnesTime == 0) {
            secTensTime++;
            secTens.textContent = secTensTime;

            if (secTensTime == 1) {
              msTens.textContent = 0;
              let digits = document.querySelectorAll('.digits div');
                  digits.forEach(digit => digit.classList.add('redDigit'));

              clearInterval(msTensCount);
            }
          }
        }
      }

   if (time == 10) {
     time = 0;
     msTens.textContent = time;
   }


}, 10);
