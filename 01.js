function translateToEmoji() {
    var textInput = document.getElementById("textInput").value;
    var emojiResult = document.getElementById("emojiResult");

    
    var emojiMap = {
        happy: "😊",
        sad: "😢",
        love: "❤️",
        cool: "😎",
        hello: "👋",
        unbelivable: "😮",
        kiss: "😘",
        laugh: "😂",
        yummy: "😋",
        angry:"😤😠",
        sleepy: "😴🥱",


    };

    
    var translatedText = textInput
        .toLowerCase()
        .replace(/\b\w+\b/g, function (word) {
            return emojiMap[word] || word;
        });

    // Display the translated text with emojis
    emojiResult.textContent = translatedText;
}