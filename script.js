const flashcard = document.getElementById('flashcard');
const cardFront = document.getElementById('card-front');
const cardBack = document.getElementById('card-back');
const cardTopic = document.getElementById('card-topic');
const flipButton = document.getElementById('flip-button');
const randomButton = document.getElementById('random-button');
const questionMark = document.getElementById('question-mark');
const answerIcon = document.getElementById('answer-icon');
const nextButton = document.getElementById('next-button');

let cards = [
    // your cards here...
];

let currentCards = cards;
let currentIndex = 0;

function showCard(index) {
    if (currentCards.length > 0) {
        cardFront.textContent = currentCards[index].word;
        cardBack.textContent = currentCards[index].description;
        cardTopic.textContent = 'For details, refer to Topic: ' + currentCards[index].topic;

        flashcard.classList.remove('flipped');
        questionMark.style.display = 'block';
        answerIcon.style.display = 'none';
        cardTopic.style.display = 'none';
    } else {
        cardFront.textContent = 'No cards available for the selected topic.';
        cardBack.textContent = '';
        cardTopic.textContent = '';
    }
}

function showRandomCard() {
    if (currentCards.length > 0) {
        const randomIndex = Math.floor(Math.random() * currentCards.length);
        showCard(randomIndex);
        currentIndex = randomIndex; // Update current index to maintain context
    } else {
        cardFront.textContent = 'No cards have been added for this topic.';
        cardBack.textContent = '';
        cardTopic.textContent = '';
    }
}

function showNextCard() {
    if (currentCards.length > 0) {
        currentIndex = (currentIndex + 1) % currentCards.length; // Loop back to the start
        showCard(currentIndex);
    }
}

// Flip functionality
flipButton.addEventListener('click', () => {
    flashcard.classList.toggle('flipped');

    if (flashcard.classList.contains('flipped')) {
        questionMark.style.display = 'none';
        answerIcon.style.display = 'block';
        cardTopic.style.display = 'block';
    } else {
        questionMark.style.display = 'block';
        answerIcon.style.display = 'none';
        cardTopic.style.display = 'none';
    }
});

// Next button functionality
nextButton.addEventListener('click', showNextCard);

// Random button functionality
randomButton.addEventListener('click', showRandomCard);

// Topic buttons functionality
const topicButtons = document.querySelectorAll('.topic-button');

topicButtons.forEach(button => {
    button.addEventListener('click', () => {
        const selectedTopic = button.getAttribute('data-topic');

        if (selectedTopic === 'all') {
            topicButtons.forEach(btn => {
                if (btn !== button) {
                    btn.classList.remove('selected-topic');
                }
            });
            currentCards = cards;
        } else {
            button.classList.toggle('selected-topic');

            const selectedTopics = Array.from(topicButtons)
                .filter(btn => btn.classList.contains('selected-topic'))
                .map(btn => btn.getAttribute('data-topic'));

            currentCards = selectedTopics.length === 0 ? cards : cards.filter(card => selectedTopics.includes(card.topic));
        }

        showRandomCard();
    });
});

// Initialize with the first card
showRandomCard();

// Timer functionality (if needed)
// const timerDisplay = document.getElementById('timer');
// const startButton = document.getElementById('start-button');
// const stopButton = document.getElementById('stop-button');
// const resetButton = document.getElementById('reset-button');
// let timerInterval, seconds = 0;
// // Timer functions...
