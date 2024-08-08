$(document).ready(function() {
    const sentences = [
        "...",
        "welcome to your new life",
        "are you ready to start over?"
    ];

    let currentSentenceIndex = 0;
    let currentCharIndex = 0;

    function typeSentence() {
        const currentSentence = sentences[currentSentenceIndex];
        const currentSentenceElement = $(`#sentence${currentSentenceIndex + 1}`);

        if (currentCharIndex < currentSentence.length) {
            currentSentenceElement.text(currentSentence.substring(0, currentCharIndex + 1));
            currentSentenceElement.show();
            currentCharIndex++;
            setTimeout(typeSentence, 75); // Adjust typing speed
        } else {
            // After typing the current sentence, stay visible for 3 seconds before typing the next
            if (currentSentenceIndex < sentences.length - 1) {
                setTimeout(function() {
                    currentSentenceElement.fadeOut(500, function() {
                        currentSentenceIndex++;
                        currentCharIndex = 0;
                        currentSentenceElement.text(""); // Clear the current sentence text
                        setTimeout(typeSentence, 1000); // Delay before typing the next sentence
                    });
                }, 3000); // Stay visible for 3 seconds
            } else {
                // For the last sentence, show the button
                setTimeout(function() {
                    $('#yes-button').show();
                }, 3000); // Show the button after 3 seconds
            }
        }
    }

    // Start typing animation with an initial delay
    setTimeout(typeSentence, 1500);

    // Click event handler for the YES button
    $('#yes-button').on('click', function() {
        window.location.href = './eye.html';
    });
});