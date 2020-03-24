function validacija(){
    var ime = document.getElementById("username").value;
    var poruka = document.getElementById("poruka").value;
    var email = document.getElementById("em").value;
  var greska1 = {Polje:"Username",Tekst:"Niste uneli username"};
  var greska2 = {Polje:"Poruka",Tekst:"Niste uneli poruku"};
  var greska3 = {Polje:"Email",Tekst:"Niste uneli email"};
  var ispisImena = JSON.stringify(greska1,null,2);
  var ispisPoruka = JSON.stringify(greska2,null,2);
  var ispisEmail = JSON.stringify(greska3,null,2);
    try{
    if(ime == "") throw ispisImena;
    else if(poruka == "") throw ispisPoruka;
    else if(email == "") throw ispisEmail;
    }
    catch(err){
  alert(err);
     }
   
}