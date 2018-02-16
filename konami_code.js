const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

function init() {
  // Write your JavaScript code inside the init() function
  let index = 0;
  
    document.body.addEventListener('keydown', function(event){

    let key = parseInt(e.which);

    if(event.which === code[index]){

    }if(index === code.length){
      alert("You only went and did it. You are the king of the konami code!");

      index = 0;
    }else{
      index = 0;
    }
  })
}
