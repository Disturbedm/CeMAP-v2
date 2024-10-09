const flashcard = document.getElementById('flashcard');
const cardFront = document.getElementById('card-front');
const cardBack = document.getElementById('card-back');
const cardTopic = document.getElementById('card-topic');
const flipButton = document.getElementById('flip-button');
const randomButton = document.getElementById('random-button');
const nextButton = document.getElementById('next-button'); // Next button
const questionMark = document.getElementById('question-mark');
const answerIcon = document.getElementById('answer-icon');

let cards = [
    { word: "Why do we need money ?", description: "We need a separate commodity that people will accept in exchange for any product, which forms a common denominator against which the value of all products can be measured.", topic: "1" },
    // ... (rest of your cards)
];

let currentCards = cards;
let currentIndex = 0; // Track the current card index

function showCard(index) {
    if (currentCards.length > 0 && index < currentCards.length) {
        cardFront.textContent = currentCards[index].word;
        cardBack.textContent = currentCards[index].description;
        cardTopic.textContent = 'For details, refer to Topic: ' + currentCards[index].topic;
        questionMark.src = './QuestionMark.png';
        answerIcon.src = './AnswerIcon.png';

        flashcard.classList.remove('flipped');
        questionMark.style.display = 'block';
        answerIcon.style.display = 'none';
        cardTopic.style.display = 'none'; 
    }
}

function showRandomCard() {
    if (currentCards.length > 0) {
        const randomIndex = Math.floor(Math.random() * currentCards.length);
        currentIndex = randomIndex; // Update current index
        showCard(randomIndex);
    } else {
        cardFront.textContent = 'No cards have been added for this topic.';
        cardBack.textContent = '';
        cardTopic.textContent = ''; // Clear topic
        questionMark.style.display = 'block';
        answerIcon.style.display = 'none';
        cardTopic.style.display = 'block';
    }
}

// Show next card
function showNextCard() {
    if (currentCards.length > 0) {
        currentIndex = (currentIndex + 1) % currentCards.length; // Cycle through cards
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

// Random button functionality
randomButton.addEventListener('click', () => {
    showRandomCard();
});

// Next button functionality
nextButton.addEventListener('click', () => {
    showNextCard();
});

// Topic buttons
const topicButtons = document.querySelectorAll('.topic-button');

// Filter cards by selected topics
topicButtons.forEach(button => {
    button.addEventListener('click', () => {
        const selectedTopic = button.getAttribute('data-topic');

        if (selectedTopic === 'all') {
            topicButtons.forEach(btn => {
                if (btn !== button) {
                    btn.classList.remove('selected-topic');
                }
            });
            currentCards = cards; // Show all cards
        } else {
            button.classList.toggle('selected-topic');

            const selectedTopics = Array.from(topicButtons)
                .filter(btn => btn.classList.contains('selected-topic'))
                .map(btn => btn.getAttribute('data-topic'));

            currentCards = selectedTopics.length === 0 ? cards : cards.filter(card => selectedTopics.includes(card.topic));
        }

        currentIndex = 0; // Reset index when changing topics
        showRandomCard();
    });
});

// Initialize with the first card
showRandomCard();

let timerInterval;
let seconds = 0;

const timerDisplay = document.getElementById('timer');
const startButton = document.getElementById('start-button');
const stopButton = document.getElementById('stop-button');
const resetButton = document.getElementById('reset-button');

function updateTimer() {
    seconds++;
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    timerDisplay.textContent = 
        `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
}

startButton.addEventListener('click', () => {
    if (!timerInterval) {
        timerInterval = setInterval(updateTimer, 1000);
    }
});

stopButton.addEventListener('click', () => {
    clearInterval(timerInterval);
    timerInterval = null; // Reset the interval variable
});

resetButton.addEventListener('click', () => {
    clearInterval(timerInterval);
    timerInterval = null; // Reset the interval variable
    seconds = 0; // Reset seconds
    timerDisplay.textContent = '00:00:00'; // Reset display
});
