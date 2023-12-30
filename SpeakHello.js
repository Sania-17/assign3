var helloSpeaker = {}; // Create an object

helloSpeaker.speakWord = "Hello"; // Attach speakWord property to the object

// Attach the 'speak' function to the helloSpeaker object
helloSpeaker.speak = function (name) {
  console.log(helloSpeaker.speakWord + " " + name);
};
