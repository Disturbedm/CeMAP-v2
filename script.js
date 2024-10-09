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
    { word: "Why do we need money ?", description: "We need a separate commodity...", topic: "1" },
    // ... (other card objects)
];

let currentCards = cards;
let currentIndex = 0; // Keep track of the current card index

function showCard(index) {
    if (currentCards.length > 0) {
        cardFront.textContent = currentCards[index].word;
        cardBack.textContent = currentCards[index].description;
        cardTopic.textContent = 'For details, refer to Topic: ' + currentCards[index].topic;

        questionMark.src = './QuestionMark.png';
        answerIcon.src = './AnswerIcon.png';

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
        currentIndex = randomIndex; // Update current index to the random card
        showCard(randomIndex);
    } else {
        cardFront.textContent = 'No cards have been added for this topic.';
        cardBack.textContent = '';
        cardTopic.textContent = ''; 
        questionMark.style.display = 'block';
        answerIcon.style.display = 'none';
        cardTopic.style.display = 'block';
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
    
    // Update display based on flip state
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

// Topic buttons
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
            currentCards = cards; // Show all cards
        } else {
            button.classList.toggle('selected-topic');
            const selectedTopics = Array.from(topicButtons)
                .filter(btn => btn.classList.contains('selected-topic'))
                .map(btn => btn.getAttribute('data-topic'));

            if (selectedTopics.length === 0) {
                currentCards = cards; // Show all cards if no topics are selected
            } else {
                currentCards = cards.filter(card => selectedTopics.includes(card.topic));
            }
        }

        showRandomCard();
    });
});

// Initialize with a random card
showRandomCard();

// Timer functionality
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
    timerInterval = null;
});

resetButton.addEventListener('click', () => {
    clearInterval(timerInterval);
    timerInterval = null;
    seconds = 0;
    timerDisplay.textContent = '00:00:00';
});
