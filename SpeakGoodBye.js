var byeSpeaker = {}; // Create an object

byeSpeaker.speakWord = "Good Bye"; // Attach speakWord property to the object

// Attach the 'speak' function to the byeSpeaker object
byeSpeaker.speak = function (name) {
  console.log(byeSpeaker.speakWord + " " + name);
};
