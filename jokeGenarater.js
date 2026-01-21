
let Button = document.getElementById("btn")
//let jockInput = document.getElementById("jockInput") 

//Function to genarate jock using API call FN= GenerateJock
async function GenarateJock(){
  try{
    const response = await fetch("https://official-joke-api.appspot.com/random_joke");
    const jock = await response.json();
    let jockInput = document.getElementById("jockInput")
    jockInput.value = `${jock.setup}   ${jock.punchline}`
  }
  catch(error){
    alert("Failed to load joke");
  }
  
  
}


//eventlisterner for Genarate jock button
Button.addEventListener("click", GenarateJock)


//CODE WITHOUT API CALL   FN = generateJokes
const jokes = [
  "Why don’t scientists trust atoms? Because they make up everything!",
  "Why did the computer go to the doctor? Because it caught a virus!",
  "Why was the math book sad? Because it had too many problems.",
  "What do you call fake spaghetti? An impasta!",
  "Why did the scarecrow win an award? Because he was outstanding in his field!"
];

function generateJokes() {
  const randomIndex = Math.floor(Math.random() * jokes.length);
  document.getElementById("joke").innerText = jokes[randomIndex];
} 
