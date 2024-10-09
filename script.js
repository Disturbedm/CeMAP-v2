const flashcard = document.getElementById('flashcard');
const cardFront = document.getElementById('card-front');
const cardBack = document.getElementById('card-back');
const cardTopic = document.getElementById('card-topic');
const flipButton = document.getElementById('flip-button');
const nextButton = document.getElementById('next-button');
const questionMark = document.getElementById('question-mark');
const answerIcon = document.getElementById('answer-icon');

let cards = [
    { word: "Why do we need money ?", description: "We need a separate commodity that people will accept in exchange for any product, which forms a common denominator against which the value of all products can be measured.", topic: "1" },
    { word: "What is 'Inflation' ?", description: "Sustained increase in the general level of prices of goods and services.", topic: '1' },
    { word: "What is a 'Mutual Organisation ?", description: "'Mutual organisations' are owned by their members or customers" , topic: "1" },
    { word: "What is 'Intermediation'", description: "An entity that acts as the middleperson between two parties in a financial transaction. E.G : Banks or Building Society's.", topic: "1" },
    { word: "What is a 'Surplus party' ?", description: "A 'surplus party' is an individual or firm that is 'cash-rich', and wants to lend out their surplus funds in order to increase the value (usually through gaining interest).", topic: "1" },
    { word: "What is a 'Deficit party' ?", description: "A 'deficit party' is 'cash-poor', and is willing to pay money in the future to lend money now (usually through interest). This is the opposite of a 'surplus party'.", topic: "1" },
    { word: "Describe how someone borrowing money through an 'Intermediary' takes place.", description: "A financial 'intermediary' borrows money from a 'surplus party' who is 'cash-rich' and lends it to a 'deficit party' who is 'cash-poor'. The 'intermediary' charges interest to the 'deficit party' and pays some of this to the 'surplus party'. The 'intermediarys profit margin is the difference between the two interest rates.", topic: "1" },
    { word: "What is 'Disintermediation' ?", description: "'Disintermediation' is when borrowers and lenders interact directly rather that through an 'intermediary'. E.G : 'Crowdfunding'", topic: "1" },
    { word: "What does the following element resolve when it comes to 'Intermediation' - Geographic Location.", description: "'Geographic Location' helps solve the problem of distance between a 'surplus party' and a 'deficit party'. Without an 'intermediary', both parties may not otherwise be known to each other. But the parties each may have easy access to an 'intermediary' through a local branch.'", topic: "1" },
    { word: "What does the following element resolve when it comes to 'Intermediation' - Aggregation", description: "'Aggregation' is essentially is the act of 'Intermediary' being able to take money from different 'Surplus parties' to make sure they can satisfy a borrowers requirements. The 'intermediary' can overcome this by 'aggregating' small deposits. An example may be the 'intermediary' aggregates £5,000 from one 'surplus party', £7,000 from another and £8,000 from another to satisfy a borrower requesting £20,000.", topic: "1" },
    { word: "What does the following element resolve when it comes to 'Intermediation' - Maturity Transformation", description: "'Intermediaries' are able to offer a large amount of deposit accounts to a large amount of depositors, this helps ensure not all of the depositors funds are withdrawn at the same time. This prevents issues such as a borrower needing funds for longer period than a lender is prepared to part with. ", topic: "1" },
    { word: "What does the following element resolve when it comes to 'Intermediation' - Risk Transformation", description: "'Intermediaries' help lenders spread risk over a wide variety of borrowers so that, if a few fail to repay (ie - default), the intermediary can absorb the cost. This is useful as individual depositors are generally reluctant to lend all their savings to an individual or company due to the risk of default or fraud.", topic: "1" },
    { word: "What is a 'Retail Bank' ?", description: "A 'Bank' provides payment services, savings and loans to personal customers or smaller businesses.", topic: "1" },
    { word: "What is a 'Wholesale Bank' ?", description: "A 'Wholesale Bank' provides funding for other financial institutions or very large corporate clients.", topic: "1" },
    { word: "What is 'Life Assurance' ?", description: "'Life Assurance' provides payment, generally as a lump sum, but possibly as an income, on the death of the person covered by the policy. It is sometimes referred to as a life insurance or life cover.", topic: "1" },
    { word: "What is 'General Insurance' ?", description: "'General Insurance' is designed to protect policyholders from the financial consequences of adverse life events. Examples include household insurance, motor insurance, travel insurance and commercial property insurance.", topic: "1" },
    { word: "What is a 'Proprietary Organisation' ?", description: "'Proprietary Oragansation' are limited companies. A great majority of the large financial institutions are 'proprietary organisations. They are owned by shareholders, who have the right to a share in the distribution of the company's profits in the form of dividends. They also contribute to decisions about how the company is run by voting at shareholder meetings.", topic: "1" },
    { word: "What is a 'Mutual Organisation' ?", description: "'Mutual Organisations' are not constitued as a company and does not, therefore, have shareholders. The most common types being 'buildiing societies'. 'Mutual Organisations' are owned by it's memebers, who can determine how the organisation is managed, through 'general meetings'. Members are comprimised from its depositors and borrowers.", topic: "1" },
    { word: "Is a 'Building Society' a 'Proprietary Organisation' or a 'Mutual Organisation' ?", description: "'Building Societies' are considered a 'Mutual Organisation'. ", topic: "1" },
    { word: "What does it mean to 'Demutualise' ?", description: "'Demutualise' or 'Demutualisation' is when a 'building society' converts to a bank. Such a change requires the approval of its members.", topic: "1" },
    { word: "Explain what the 'Interbank Market' is. ", description: "The 'Interbank Market' is a way to recycle surplus cash between banks. Usually through specialist moneys brokers.", topic: "1" },
    { word: "What term refers to the regulators approach to preventing Banks that are involved in both Retail & Wholesale Banking from exposing their retail customer deposits ?", description: "The term is called 'Ring Fencing'.", topic: "1" },
    { word: "Are 'Building Societies' permitted to raise money on the 'Wholesale Market', and if so are they restricted in anyway ?", description: "Yes, 'Building Socieities' are permitted to to raise funds on the 'Wholesale Market' but they are only permitted to raise up to 50% of their liabilities. The remainder must come from deposits.", topic: "1" },
    { word: "Do Banks have any restrictions on raising funds through the 'Wholesale Market ?", description: "No. Unlike 'Building Societies', Banks do not have any restrictions on raising funds through the 'Wholesale Market'.", topic: "1" },
    { word: "'LIBOR' stands for what ?", description: "London Interbank Offered Rate.", topic: "1" },
    { word: "'SONIA' stands for what ?", description: "Sterling Overnight Index Average.", topic: "1" },
    { word: "Summarise the different roles carried out by the Bank of England.", description: "Issuer of bank notes, banker to the goverment, and banker to the bank", topic: "1" },
    { word: "Explain the Bank of Englands role in being - 'Issuer of banknotes'.", description: "The Bank of England has a duty to ensure an adaquate supply of notes is in circulation.", topic: "1" },
    { word: "Explain the Bank of Englands role in being - 'Banker to the goverment'.", description: "It is the holder of the goverments own account. The BOE provides fiinance to cover any deficit by making automatic loans. If there is a surplus the Bank may lend it out as part of it's general debt management policy (DMP).", topic: "1" },
    { word: "Explain the Bank of Englands role in being - 'Banker to the banks'.", description: "All major banks have accounts with the BOE for depositing or obtaining cash. In this capacity, the BOE can wield cosiderable influence over the rates of interest in various money markets by changing the rates it charges banks for borrowing or depositing.", topic: "1" },
    { word: "Explain the Bank of Englands role in being - 'Advisor to the goverment'.", description: "The BOE has built up specialised knowledge over many years regarding the UK's economy. Due to this it is able to help the goverment formulate it's monetary policy. The BOE roles in this was signficantly increased in 1997, when full responsibility was given to the MPC (Monetary Policy Committee) to set the UK's interest rates 8 times a year. This is done to ensure the goverment hits it's inflation target is met.", topic: "1" },
    // { word: "Test Card 2", description: "Test Description 2", topic: "1" },
    // { word: "Test Card 3", description: "Test Description 3", topic: "1" },
    // { word: "Test Card 3", description: "Test Description 3", topic: "1" },
    // { word: "Test Card 1", description: "Test Description 1", topic: "1" },
    // { word: "Test Card 2", description: "Test Description 2", topic: "1" },
    // { word: "Test Card 3", description: "Test Description 3", topic: "1" },
    // { word: "Test Card 2", description: "Test Description 2", topic: "1" },
    // { word: "Test Card 2", description: "Test Description 2", topic: "1" },
    // { word: "Test Card 3", description: "Test Description 3", topic: "1" },
    // { word: "Test Card 3", description: "Test Description 3", topic: "1" },
    // { word: "Test Card 1", description: "Test Description 1", topic: "1" },
    // { word: "Test Card 2", description: "Test Description 2", topic: "1" },
    // { word: "Test Card 3", description: "Test Description 3", topic: "1" },
    // { word: "Test Card 2", description: "Test Description 2", topic: "1" },
    // { word: "Test Card 2", description: "Test Description 2", topic: "1" },
    // { word: "Test Card 3", description: "Test Description 3", topic: "1" },
    // { word: "Test Card 3", description: "Test Description 3", topic: "1" },
    // { word: "Test Card 1", description: "Test Description 1", topic: "1" },
    // { word: "Test Card 2", description: "Test Description 2", topic: "1" },
    // { word: "Test Card 3", description: "Test Description 3", topic: "1" },
    // { word: "Test Card 2", description: "Test Description 2", topic: "1" },
    // { word: "Test Card 2", description: "Test Description 2", topic: "1" },
    // { word: "Test Card 3", description: "Test Description 3", topic: "1" },
    // { word: "Test Card 3", description: "Test Description 3", topic: "1" },
    // { word: "Test Card 1", description: "Test Description 1", topic: "1" },
    // { word: "Test Card 2", description: "Test Description 2", topic: "1" },
    // { word: "Test Card 3", description: "Test Description 3", topic: "1" },
    // { word: "Test Card 2", description: "Test Description 2", topic: "1" },
    // { word: "Test Card 2", description: "Test Description 2", topic: "1" },
    // { word: "Test Card 3", description: "Test Description 3", topic: "1" },
    // { word: "Test Card 3", description: "Test Description 3", topic: "1" },
    // { word: "Test Card 1", description: "Test Description 1", topic: "1" },
    // { word: "Test Card 2", description: "Test Description 2", topic: "1" },
    // { word: "Test Card 3", description: "Test Description 3", topic: "1" },
    // { word: "Test Card 2", description: "Test Description 2", topic: "1" },
    // { word: "Test Card 2", description: "Test Description 2", topic: "1" },
    // { word: "Test Card 3", description: "Test Description 3", topic: "1" },
    // { word: "Test Card 3", description: "Test Description 3", topic: "1" },
    // { word: "Test Card 1", description: "Test Description 1", topic: "1" },
    // { word: "Test Card 2", description: "Test Description 2", topic: "1" },
    // { word: "Test Card 3", description: "Test Description 3", topic: "1" },
    // { word: "Test Card 2", description: "Test Description 2", topic: "1" },
    // { word: "Test Card 2", description: "Test Description 2", topic: "1" },
    // { word: "Test Card 3", description: "Test Description 3", topic: "1" },
    // { word: "Test Card 3", description: "Test Description 3", topic: "1" },
    // { word: "Test Card 1", description: "Test Description 1", topic: "1" },
    // { word: "Test Card 2", description: "Test Description 2", topic: "1" },
    // { word: "Test Card 3", description: "Test Description 3", topic: "1" },
    // { word: "Test Card 2", description: "Test Description 2", topic: "1" },
    // { word: "Test Card 2", description: "Test Description 2", topic: "1" },
    // { word: "Test Card 3", description: "Test Description 3", topic: "1" },
    // { word: "Test Card 3", description: "Test Description 3", topic: "1" },
    // { word: "Test Card 1", description: "Test Description 1", topic: "1" },
    // { word: "Test Card 2", description: "Test Description 2", topic: "1" },
    // { word: "Test Card 3", description: "Test Description 3", topic: "1" },
    // { word: "Test Card 2", description: "Test Description 2", topic: "1" }

    
];

let currentCards = cards;

function showCard(index) {
    if (currentCards.length > 0) {
        cardFront.textContent = currentCards[index].word;
        cardBack.textContent = currentCards[index].description;
        console.log(currentCards[index].topic);
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

// Flip functionality
flipButton.addEventListener('click', () => {
    flashcard.classList.toggle('flipped');
    
    // Check if the card is flipped
    if (flashcard.classList.contains('flipped')) {
        // Hide the question mark and show the answer icon when the back is shown
        questionMark.style.display = 'none';
        answerIcon.style.display = 'block';
        cardTopic.style.display = 'block';
    } else {
        // Show the question mark and hide the answer icon when the front is shown
        questionMark.style.display = 'block';
        answerIcon.style.display = 'none';
        cardTopic.style.display = 'none';
    }
});

// Next button functionality
nextButton.addEventListener('click', () => {
    showRandomCard();
});

// Topic buttons
const topicButtons = document.querySelectorAll('.topic-button');

// Filter cards by selected topics
topicButtons.forEach(button => {
    button.addEventListener('click', () => {
        const selectedTopic = button.getAttribute('data-topic');

        if (selectedTopic === 'all') {
            // Clear all other selections
            topicButtons.forEach(btn => {
                if (btn !== button) {
                    btn.classList.remove('selected-topic');
                }
            });
            currentCards = cards; // Show all cards
        } else {
            // Toggle the selected class for non-"All" buttons
            button.classList.toggle('selected-topic');

            // Get the currently selected topics
            const selectedTopics = Array.from(topicButtons)
                .filter(btn => btn.classList.contains('selected-topic'))
                .map(btn => btn.getAttribute('data-topic'));

            if (selectedTopics.length === 0) {
                currentCards = cards; // Show all cards if no topics are selected
            } else {
                // Filter cards by selected topics
                currentCards = cards.filter(card => selectedTopics.includes(card.topic));
            }
        }

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