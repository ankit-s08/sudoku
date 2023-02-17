/*
const calAverage = function(num1 , num2 , num3){
    return (num1 + num2 + num3)/3;
}

const checkWinner = function(avgDolhins , avgKoalas){
    if(avgDolhins = 2*avgKoalas)
        return "${avgDolhins} wins!!!" ;
    
    else if(avgKoalas = 2*avgDolhins)
        return "${avgKoalas} wins!!!" ;
    
    else
        return "no one wins!!!";
}
*/
const myfunction = function(){
    for(let i=1; i<=9; i++)
    {
        let elem1 = document.getElementById(i);
        
        for(let j = i+1; j<=9; j++)
        {    
            let elem2 = document.getElementById(j);

            if(elem1.value==null || elem2.value==null){
                break;
                console.log(elem1 + " is null");
            }

            console.log(elem2);
            if(elem1.value == elem2.value){
                elem2.style = "background-color: #1098ad";
                elem1.style = "background-color: #1098ad";
                console.log(elem1.value +","+elem2.value);
            }
            else if(elem1.value != elem2.value){
                elem2.style = "background-color: #00f2ff";
                elem1.style = "background-color: #00f2ff";
                console.log(elem1.value +","+elem2.value);
            }
        }
    }
}
