let speech = new SpeechSynthesisUtterance(); // JavaScript ka built-in constructor hai jo ek utterance object 
                                            // banata hai. Yeh object ek text-to-speech request ko represent karta hai.
let voices = [];
let voiceSelect = document.querySelector('select');

window.speechSynthesis.onvoiceschanged = () =>  // window.speechSynthesis -Yeh browser ka global object hai jo speech synthesis
                                               //  engine ko represent karta hai.


{
   voices = window.speechSynthesis.getVoices();
   speech.voice = voices[0];

   voices.forEach((voice,i) => (voiceSelect.options[i]= new Option(voice.name,i)));
};

voiceSelect.addEventListener("change",()=>{
     speech.voice = voices[voiceSelect.value];
})

document.querySelector('button').addEventListener('click',()=>{
    speech.text = document.querySelector('textarea').value;
    window.speechSynthesis.speak(speech);
})