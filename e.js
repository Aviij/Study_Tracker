

let counted = document.getElementById("count-el")
let saved = document.getElementById("save-el")

let count = 0



const increment = () => {

 count+=1
 if( count <= 1){
    counted.innerText = count +"Hour"

 }else{
    counted.innerText = count +"Hours"
 }
 
     
}
//edit to be
function totalHours(){

    console.log(count)

}

//save function 
function save(){


    let countStr = count + " + "

    saved.textContent = saved.innerText+ countStr

    count = 0
    counted.innerText = count 

}


// reset function

function reset(){




    testStr = saved.innerText
    hardcodedStr = "Hours Studied :"

    if (  testStr === hardcodedStr ){

         
    } else {
        saved.innerText = hardcodedStr

    }


    count = 0
    counted.innerText = count 

}
   


 
