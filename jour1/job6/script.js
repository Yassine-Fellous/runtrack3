function fizzbuzz(){

    for(i = 1; i <= 151;i++){
    console.log(i)
    if(i % 3 == 0 && i % 5 == 0 )
    console.log("FizzBuzz")
    else if(i % 3 == 0)
    console.log("Fizz")
    else if(i % 5 == 0)
    console.log("Buzz")
    }
}

console.log(fizzbuzz())