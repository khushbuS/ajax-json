var t=1;
var pic = document.getElementById('final');
var animalContainer = document.getElementById("animal-info");
var cnt = document.getElementById("counter");
var btn = document.getElementById("btn");
btn.addEventListener("click", function(){
	if(t > 3)
	{
	  btn.classList.add("hide-me");
	  cnt.style.display = "none";
	  pic.innerHTML =  'All data fetched!';
	  return;
	}

 var ourRequest = new XMLHttpRequest();
ourRequest.open('GET','https://learnwebcode.github.io/json-example/animals-'+t+'.json');
ourRequest.onload = function() {
	if(ourRequest.status >= 200 && ourRequest.status < 400){
		  var ourData = JSON.parse(ourRequest.responseText);
   renderHtml(ourData);
	}
	else
	{
		console.log("Error");
	}
 
};
ourRequest.onerror = function(){
	console.log("Connection error !");
}
ourRequest.send();
cnt.innerHTML = t;
t++;


});

function renderHtml(data){
  var testString = "";
  for(i=0;i<data.length;i++)
  {
  	testString += "<p>"+ data[i].name +" is a "+ data[i].species + ' who likes to have ';
    for(var ii=0;ii<data[i].foods.likes.length;ii++)
        {
        	if(ii == data[i].foods.likes.length - 1)
        		testString += data[i].foods.likes[ii] ;
        	else{
        		testString += data[i].foods.likes[ii] +', ';
        	}

        }

    testString+= ' and dislikes ';
    
     for(var ii=0;ii<data[i].foods.dislikes.length;ii++)
         {
        	if(ii == data[i].foods.dislikes.length - 1)
        		testString += data[i].foods.dislikes[ii] +'.';
        	else{
        		testString += data[i].foods.dislikes[ii] +', ';
        	}

        }

    testString+='</li><hr>';
  }
  
  animalContainer.insertAdjacentHTML('beforeend', testString);

}
