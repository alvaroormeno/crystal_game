$(document).ready(function() {


    var winCount = 0
    var lossCount = 0
    
    






    function reset(){

        compGuess = 0

        blueCrystal = 0
        redCrystal = 0
        greenCrystal = 0
        orangeCrystal = 0
        crystalNumber = 0

        

   

        compGuess = Math.floor(Math.random() * 200) 
        console.log(compGuess);
        $('#computerGuess').html(compGuess);
    
        blueCrystal =  Math.floor(Math.random() * 15) 
        console.log(blueCrystal);
        $('#blue').attr('value', blueCrystal);

        redCrystal =  Math.floor(Math.random() * 15) 
        console.log(redCrystal);
        $('#red').attr('value', redCrystal);
    
        greenCrystal =  Math.floor(Math.random() * 30)
        console.log(greenCrystal);
        $('#green').attr('value', greenCrystal);
    
        orangeCrystal =  Math.floor(Math.random() * 45)
        console.log(orangeCrystal);
        $('#orange').attr('value', orangeCrystal);

        //var crystalNumber = 0
        $('#totalCrystalNumber').html(crystalNumber);

    }

    reset();


    $('.button').click(function(){
    console.log("itworks")
    
        if($(this).hasClass('button')){
        console.log($(this).attr('value'));
        crystalScore = parseInt($(this).attr('value'));
        crystalNumber += crystalScore;
        $('#totalCrystalNumber').html(crystalNumber);
        };

        if(compGuess === crystalNumber){
        console.log("winnnnnnnn");
        winCount += 1
        $('#totalWins').html(winCount);
        reset();
        }else if (crystalNumber > compGuess) {
        console.log("looose");
        lossCount += 1
        $('#totalLoss').html(lossCount);
        reset();
        }
        





    });

})
