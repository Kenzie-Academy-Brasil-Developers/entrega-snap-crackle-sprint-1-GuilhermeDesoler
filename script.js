/////////////////////////
// Solving SnapCrackle //
/////////////////////////

///////////////////////////////////////////
// Function SnapCrackle //
//////////////////////////

function snapCrackle(maxValue){
    let final = "Snap"
    for(let i = 2; i <= maxValue; i++){ // Since the first value is Snap, i goes from 2 to maxValue.
        if(i % 2 !== 0){ // If i isn't even then ...
            if(i % 5 === 0){ // And if i is multiple of five ...
                final = final + ", SnapCrackle"  // Write SnapCrackle.
            } else{
                final = final + ", Snap" // Otherwise just write Snap.
            }
        } else if(i % 5 === 0){ // Although if i isn't a even but multiple of 5.
            final = final + ", Crackle" // Write Crackle.
        }else{
            final = final + ", " + i // When i is even and not a multiple of five write i.
        }
    }
    return final
}
///////////////////////////////////////////

///////////////////////////////////////////
// Function SnapCracklePrime //
///////////////////////////////

function snapCracklePrime(maxValue){
    let final // Variable that will contain the final sequence.
    if(maxValue === 1){ // If the sequence has only one value than ...
        final = "Snap" // Just print Snap.
    let primo // Varaible that will contain the value of whether or not the number is prime.
    } else {
        final = "Snap, Prime" // Well, one isn't a prime by definition, but two is the only natural numbers that is even and prime.
        for(let i = 3; i <= maxValue; i++){ // First, let's assess whether or not i is a prime.
            for(let j = 2; j < i; j++){ // Lets execute a fast Eratostenes's sieve.
                if(i % j === 0){ // If i is divisible by anything but 1one or i, let's assume that j, than it isn`t prime, so ...
                    primo = false // Prime has the false value.
                    break // If it has only one value we can break the loop.
                }
                primo = true // Otherwise it's a prime.
            }
            if(primo){ // If it's prime ...
                if(i % 5 === 0){ // And a multiple of five ...
                    final = final + ", SnapCracklePrime"  // Write SnapCracklePrime. Obs.: Obviusly it's a odd number. 
                } else{ // When i is a prime but not a multiple of five ...
                    final = final + ", SnapPrime" // Write SnapPrime.
                }
            } else{ // If it isn't a prime 
                if(i % 2 !== 0){ // This time it can be a even number, let's verify when it isn't.
                    if(i % 5 === 0){ // If i is a multiple of five ...
                        final = final + ", SnapCrackle" // Write SnapCrackle.
                    }  else{ // 
                        final = final + ", Snap" // Write Snap.
                    }
                } else if(i % 5 === 0){ // Since here are the even numbers it can be a multiple of five ...
                    final = final + ", Crackle" // // Write Crackle.
                } else{ // The last option ...
                    final = final + ", " + i // Write i.
                }
            }
        }
    }
    return final
}
///////////////////////////////////////////