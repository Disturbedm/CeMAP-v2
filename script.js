const flashcard = document.getElementById('flashcard');
const cardFront = document.getElementById('card-front');
const cardBack = document.getElementById('card-back');
const cardTopic = document.getElementById('card-topic');
const flipButton = document.getElementById('flip-button');
const randomButton = document.getElementById('random-button');
const nextButton = document.getElementById('next-button');
const questionMark = document.getElementById('question-mark');
const answerIcon = document.getElementById('answer-icon');


let cards = [
    { question: "Why do we need money ?", description: "We need a separate commodity that people will accept in exchange for any product, which forms a common denominator against which the value of all products can be measured.", topic: "1" },
    { question: "What is 'Inflation' ?", description: "Sustained increase in the general level of prices of goods and services.", topic: '1' },
    { question: "What is a 'Mutual Organisation ?", description: "'Mutual organisations' are owned by their members or customers" , topic: "1" },
    { question: "What is 'Intermediation'", description: "An entity that acts as the middleperson between two parties in a financial transaction. E.G : Banks or Building Society's.", topic: "1" },
    { question: "What is a 'Surplus party' ?", description: "A 'surplus party' is an individual or firm that is 'cash-rich', and wants to lend out their surplus funds in order to increase the value (usually through gaining interest).", topic: "1" },
    { question: "What is a 'Deficit party' ?", description: "A 'deficit party' is 'cash-poor', and is willing to pay money in the future to lend money now (usually through interest). This is the opposite of a 'surplus party'.", topic: "1" },
    { question: "Describe how someone borrowing money through an 'Intermediary' takes place.", description: "A financial 'intermediary' borrows money from a 'surplus party' who is 'cash-rich' and lends it to a 'deficit party' who is 'cash-poor'. The 'intermediary' charges interest to the 'deficit party' and pays some of this to the 'surplus party'. The 'intermediarys' profit margin is the difference between the two interest rates.", topic: "1" },
    { question: "What is 'Disintermediation' ?", description: "'Disintermediation' is when borrowers and lenders interact directly rather that through an 'intermediary'. E.G : 'Crowdfunding'", topic: "1" },
    { question: "What does the following element resolve when it comes to 'Intermediation' - Geographic Location.", description: "'Geographic Location' helps solve the problem of distance between a 'surplus party' and a 'deficit party'. Without an 'intermediary', both parties may not otherwise be known to each other. But the parties each may have easy access to an 'intermediary' through a local branch.'", topic: "1" },
    { question: "What does the following element resolve when it comes to 'Intermediation' - Aggregation", description: "'Aggregation' is essentially the act of an 'Intermediary' being able to take money from different 'Surplus parties' to make sure they can satisfy a borrowers requirements. The 'intermediary' can overcome this by 'aggregating' small deposits. An example may be the 'intermediary' aggregates £5,000 from one 'surplus party', £7,000 from another and £8,000 from another to satisfy a borrower requesting £20,000.", topic: "1" },
    { question: "What does the following element resolve when it comes to 'Intermediation' - Maturity Transformation", description: "'Intermediaries' are able to offer a large amount of deposit accounts to a large amount of depositors, this helps ensure not all of the depositors funds are withdrawn at the same time. This prevents issues such as a borrower needing funds for longer period than a lender is prepared to part with. ", topic: "1" },
    { question: "What does the following element resolve when it comes to 'Intermediation' - Risk Transformation", description: "'Intermediaries' help lenders spread risk over a wide variety of borrowers so that, if a few fail to repay (ie - default), the intermediary can absorb the cost. This is useful as individual depositors are generally reluctant to lend all their savings to an individual or company due to the risk of default or fraud.", topic: "1" },
    { question: "What is a 'Retail Bank' ?", description: "A 'Bank' provides payment services, savings and loans to personal customers or smaller businesses.", topic: "1" },
    { question: "What is a 'Wholesale Bank' ?", description: "A 'Wholesale Bank' provides funding for other financial institutions or very large corporate clients.", topic: "1" },
    { question: "What is 'Life Assurance' ?", description: "'Life Assurance' provides payment, generally as a lump sum, but possibly as an income, on the death of the person covered by the policy. It is sometimes referred to as a life insurance or life cover.", topic: "1" },
    { question: "What is 'General Insurance' ?", description: "'General Insurance' is designed to protect policyholders from the financial consequences of adverse life events. Examples include household insurance, motor insurance, travel insurance and commercial property insurance.", topic: "1" },
    { question: "What is a 'Proprietary Organisation' ?", description: "'Proprietary Oragansation' are limited companies. A great majority of the large financial institutions are 'proprietary organisations. They are owned by shareholders, who have the right to a share in the distribution of the company's profits in the form of dividends. They also contribute to decisions about how the company is run by voting at shareholder meetings.", topic: "1" },
    { question: "What is a 'Mutual Organisation' ?", description: "'Mutual Organisations' are not constitued as a company and does not, therefore, have shareholders. The most common types being 'buildiing societies'. 'Mutual Organisations' are owned by it's memebers, who can determine how the organisation is managed, through 'general meetings'. Members are comprimised from its depositors and borrowers.", topic: "1" },
    { question: "Is a 'Building Society' a 'Proprietary Organisation' or a 'Mutual Organisation' ?", description: "'Building Societies' are considered a 'Mutual Organisation'. ", topic: "1" },
    { question: "What does it mean to 'Demutualise' ?", description: "'Demutualise' or 'Demutualisation' is when a 'building society' converts to a bank. Such a change requires the approval of its members.", topic: "1" },
    { question: "Explain what the 'Interbank Market' is. ", description: "The 'Interbank Market' is a way to recycle surplus cash between banks. Usually through specialist moneys brokers.", topic: "1" },
    { question: "What term refers to the regulators approach to preventing Banks that are involved in both Retail & Wholesale Banking from exposing their retail customer deposits ?", description: "The term is called 'Ring Fencing'.", topic: "1" },
    { question: "Are 'Building Societies' permitted to raise money on the 'Wholesale Market', and if so are they restricted in anyway ?", description: "Yes, 'Building Socieities' are permitted to to raise funds on the 'Wholesale Market' but they are only permitted to raise up to 50% of their liabilities. The remainder must come from deposits.", topic: "1" },
    { question: "Do Banks have any restrictions on raising funds through the 'Wholesale Market ?", description: "No. Unlike 'Building Societies', Banks do not have any restrictions on raising funds through the 'Wholesale Market'.", topic: "1" },
    { question: "'LIBOR' stands for what ?", description: "London Interbank Offered Rate.", topic: "1" },
    { question: "'SONIA' stands for what ?", description: "Sterling Overnight Index Average.", topic: "1" },
    { question: "Summarise the different roles carried out by the Bank of England.", description: "Issuer of bank notes, banker to the goverment, and banker to the bank", topic: "1" },
    { question: "Explain the Bank of Englands role in being - 'Issuer of banknotes'.", description: "The Bank of England has a duty to ensure an adaquate supply of notes is in circulation.", topic: "1" },
    { question: "Explain the Bank of Englands role in being - 'Banker to the goverment'.", description: "It is the holder of the goverments own account. The BOE provides fiinance to cover any deficit by making automatic loans. If there is a surplus the Bank may lend it out as part of it's general debt management policy (DMP).", topic: "1" },
    { question: "Explain the Bank of Englands role in being - 'Banker to the banks'.", description: "All major banks have accounts with the BOE for depositing or obtaining cash. In this capacity, the BOE can wield cosiderable influence over the rates of interest in various money markets by changing the rates it charges banks for borrowing or depositing.", topic: "1" },
    { question: "Explain the Bank of Englands role in being - 'Advisor to the goverment'.", description: "The BOE has built up specialised knowledge over many years regarding the UK's economy. Due to this it is able to help the goverment formulate it's monetary policy. The BOE roles in this was signficantly increased in 1997, when full responsibility was given to the MPC (Monetary Policy Committee) to set the UK's interest rates 8 times a year. This is done to ensure the goverment hits it's inflation target is met.", topic: "1" },
    { question: "Summarise the different roles carried out by the bank of England.", description: "Issuer of banknotes, Banker to the goverment, Banker to the banks, Advisor to the government, Foreign exchange market, Lender of last resort, Maintaining economic stability.", topic: "1" },
    { question: "Outline the differences between a 'retail bank', a 'wholesale bank', a 'building society', and a 'credit union'", description: "'Retail Bank': Provides financial services to individuals and small businesses, profit-driven for shareholders. 'Wholesale Bank': Serves large businesses, institutions, and governments, also profit-driven. 'Building Society': Focuses on mortgages and savings for members, not-for-profit, reinvests profits for member benefits. 'Credit Union': Offers banking to members with a shared bond, not-for-profit, distributes surplus to members or improves services.", topic: "1" },
    { question: "Explain what is meant by the Libor and Sonia", description: "LIBOR was an estimated interbank lending rate with a broader currency scope, while SONIA is based on actual overnight GBP transactions and is being adopted as a more accurate benchmark. SONIA has replaced Libor.", topic: "1" },
    { question: "'Credit unions' cannot pay interest on savings. True or False?", description: "False. 'Credit unions' can choose to pay interest rates instead of dividends but they must show they have the necessary systems & controls in place & have at least £50k or 5 percent of total assets (whichever is greater) in reserve.", topic: "1" },
    { question: "Who is responsible for adminstrating 'Sonia'?", description: "'The Bank of England' is responsible for admistrating 'Sonia' (Sterling Overnight Index Average). ", topic: "1" },
    { question: "What organisation was established as a result of the Bank of England and Financial Services Act 2016?", description: "'Prudential Regulation Committee (PRC) -  This was due to the BOE modifying the Financial Services Act 2012 to give more powers to the Bank by bringing the PRA within it, ending it's status as a subsidiary, and therefore creating the PRC.", topic: "1" },
    { question: "What bodies are part of the 'Bank of England'?", description: "'Financial Policy Committee' (FPC), 'Monetary Policy Committee' (MPC) and 'Prudential Regulation Committee' (PRC).",  topic: "1" },
    { question: "If a building society 'demutualises' what legal status will it have?", description: "'Public Limited Copany'", topic: "1" },
    { question: "What unique feature do 'Credit Unions' offer for their products?", description: "Both a member's savings and loan balances are protected by life assurance. This means that, on death, a lump sum is used to pay off the loan and / or repay the savings balance.", topic: "1" },
    { question: "What part of the 'Bank of England' specifically looks at the economy in broad terms to identify and address risks that affect economic stability?", description: "The 'Financial Policy Committee'", topic: "1" },
    { question: "Is the 'Financial Policy Committee' part of the 'Bank of England'?", description: "Yes. The 'Financial Policy Committee' (FPC) sits within the 'Bank of England' to monitor and respond to systematic risks (risks that threaten the stability of the financial system as a whole). Other committees with the 'Bank of England' include the 'Monetary Policy Committee' and the 'Prudential Regulation Committee'.", topic: "1" },
    { question: "What is the primary role the financial service industry performs when we say it 'Oils the wheels of commerce and goverement'?", description: "The financial services industry exists largely to oil the wheels of commerce and government; it does this by channelling monies from those with a surplus, through savings and investments, and then lending monies to those in surplus, through loans and mortgages. As part of this role, the Financial Services industry will provide protection, pensions and investments. ", topic: "1" },
    { question: "What is 'Inflation'?", description: "A sustained increase in pricing for goods and services, resulting in 'too much money, chasing too few goods'. It can be defined in economic terminology as a situation where the rate of growth of the money supply is greater than the rate of growth of real goods or services.", topic: "2" },
    { question: "What is 'Disinflation'?", description: "A fall in the rate of 'Inflation', ie: prices are still rising, but less quickly than they were.", topic: "2" },
    { question: "What is 'Deflation'?", description: "A general fall in the price of goods and services. In other words, the 'Inflation' rate is below zero percent - a negative 'Inflation' rate.", topic: "2" },
    { question: "Name the 4 'Macroeconomic Objectives'?", description: "'Price stability', 'Low unemployment', 'Balance of payment equilibrium' and 'Satisfactory economic growth'.", topic: "2" },
    { question: "What is the 'Bank of Englands' annual target for inflation, as set by the government?", description: "The 'Inflation' target is 2%, with a divergence of 1% either way. Meaning the true answer is 1%-3%.", topic: "2" },
    { question: "Which body within the European System of Financial Supervision has direct supervisory responsibility for credit reference agencies?", description: "The European Securities and Markets Agency", topic: "2" },
    { question: "What is the FIRST tier of regulatory oversight in the UK?", description: "Acts of Parliament (eg: Financial Services and Markets Acts of 2000 and 2023), including onshored EU legislation.", topic: "2" },
    { question: "What is the SECOND tier of regulatory oversight in the UK?", description: "Regulatory bodies (monitoring regulations and issuing rules and requirements).", topic: "2" },
    { question: "What is the THIRD tier of regulatory oversight in the UK?", description: "Policies/practices of the finacial regulations and issuing rules and requirements.", topic: "2" },
    { question: "What is the FOURTH tier of regulatory oversight in the UK?", description: "Arbitration schemes (eg: Financial Ombudsman Scheme).", topic: "2" },
    { question: "What statement best describes fiscal policy?", description: "Government use of public sector spending, revenue, borrowing and saving to influence money supply and the level of economic activity", topic: "2" },
    { question: "Which of the following is NOT an aim of the 'European Supervisory Authorities'. 'To create a single EU rulebook by developing draft standards', 'To consider consumer protection issues', 'To draft statutory instruments binding on each EU country', or 'To conduct reviews of national supervisory authorities to improve consistency'", description: "'To draft statutory instruments binding on each EU country'", topic: "2" },
    { question: "In relation to UK taxation, what term is used to describe the place someone regards as their home?", description: "'Domicile' is the name given to the place that a person regards as their home.", topic: "3" },
    { question: "What is the maximum amount possible for spouses and civil partners to transfer up to from their basic personal allowance?", description: "'£1,260'. This is best their basic tax free allowance is £12,570. 10% is £1,257, but it is rounded up the £1,260.", topic: "3" },
    { question: "A person's domicile mainly affects a person's liability for which tax?", description: "A persons domicile mainly affects liability for 'Inheritance tax'.", topic: "4" },
    { question: "Roll-over relief is a relief from which of the following taxes?", description: "'Capital Gains Tax' - Roll-over relief allows capital gains tax to be deferred. It applies to business assets which are disposed of and then replaced by other business assets. Any tax due on a gain arising on the initial disposal is deferred until the assets purchased are disposed of.", topic: "4" },
    { question: "What is the purpose of a double taxation agreement?", description: "A double taxation agreement means that taxpayers are not taxed twice on income and gains. Without such an arrangement people may be taxed twice on income and gains arising in another country, once in that country and then again in the UK.", topic: "4" },
    { question: "When a 'chargeable lifetime transfer' is made, what MAXIMUM rate of inheritance tax, if any, can apply immediately?", description: "A chargeable lifetime transfer occurs when a gift in excess of the nil rate band is made into certain types of trust. Such a transfer is liable to inheritance tax at rate of 20%. Further inheritance tax is payable if the donor dies within 7 years of the gift.", topic: "4" },
    { question: "'Stamp Duty Land Tax' (SDLT) is payable buy the buyer or the seller?", description: "Stamp duty land tax is payable by the buyer, not the seller.", topic: "4" },
    { question: "Can 'Capital Gains Tax' (CGT) annual exempt amount be carried forward if all/partial amount of it is not utilised in that tax year?", description: "No. The CGT annual exempt amount cannot be carried forward if it remains unused. It is a case of 'use it or lose it' but a new allowance will be available in the next tax year.", topic: "4" },
    { question: "A residence nil rate band was introduced from April 2017 to help people protect the value of their MAIN residence from inheritance tax. What amount does this nil rate band cover upto before it starts to reduce the rate?", description: "£2 Million", topic: "4" },
    { question: "By what amount does the value of the residence nil rate band get reduced or 'taper off' when the net value of a persons estate exceeds an upper threshold", description: "The residence nil rate band is reduced at a rate of £1 of allowance for every £2 that the net value of the estate exceeds £2 million.", topic: "4" },
    { question: "Where someone buys a property in Wales, they should consider that they may be required to pay?", description: "Land transaction tax", topic: "4" },
    { question: "One of the eligibility criteria for Jobseeker’s Allowance is that the claimant must be...", description: "...out of work or working less than 16 hours a week and actively seeking work", topic: "5" },
    { question: "Which State benefit is currently in the process of being phased out and replaced by Personal Independence Payment?", description: "Disability Living Allowance", topic: "5" },
    { question: "Personal Independence Payment is composed of how many different components?", description: "2. PIP (like Disability Living Allowance) comprises two components; A care (daily living) component and a mobility component. Each component is payable at standard and enhanced rates.", topic: "5" },
    // { question: "Test Card 2", description: "Test Description 2", topic: "5" },
    // { question: "Test Card 2", description: "Test Description 2", topic: "5" },
    // { question: "Test Card 2", description: "Test Description 2", topic: "5" },
    // { question: "Test Card 2", description: "Test Description 2", topic: "5" },
    // { question: "Test Card 2", description: "Test Description 2", topic: "5" },
    // { question: "Test Card 2", description: "Test Description 2", topic: "5" },
    // { question: "Test Card 2", description: "Test Description 2", topic: "5" },
    // { question: "Test Card 2", description: "Test Description 2", topic: "5" },
    // { question: "Test Card 2", description: "Test Description 2", topic: "5" },
    // { question: "Test Card 2", description: "Test Description 2", topic: "5" },
    // { question: "Test Card 2", description: "Test Description 2", topic: "5" },
    // { question: "Test Card 2", description: "Test Description 2", topic: "5" },
    // { question: "Test Card 3", description: "Test Description 3", topic: "5" },
    // { question: "Test Card 2", description: "Test Description 2", topic: "5" },
    // { question: "Test Card 2", description: "Test Description 2", topic: "5" },
    // { question: "Test Card 3", description: "Test Description 3", topic: "5" },
    // { question: "Test Card 3", description: "Test Description 3", topic: "5" },
    // { question: "Test Card 1", description: "Test Description 1", topic: "5" },
    // { question: "Test Card 2", description: "Test Description 2", topic: "5" },
    // { question: "Test Card 3", description: "Test Description 3", topic: "5" },
    // { question: "Test Card 2", description: "Test Description 2", topic: "5" },
    // { question: "Test Card 2", description: "Test Description 2", topic: "5" },
    // { question: "Test Card 3", description: "Test Description 3", topic: "5" },
    // { question: "Test Card 3", description: "Test Description 3", topic: "5" },
    // { question: "Test Card 1", description: "Test Description 1", topic: "5" },
    // { question: "Test Card 2", description: "Test Description 2", topic: "5" },
    // { question: "Test Card 3", description: "Test Description 3", topic: "5" },
    // { question: "Test Card 2", description: "Test Description 2", topic: "5" },
    // { question: "Test Card 2", description: "Test Description 2", topic: "5" },
    // { question: "Test Card 3", description: "Test Description 3", topic: "5" },
    // { question: "Test Card 3", description: "Test Description 3", topic: "5" },
    // { question: "Test Card 1", description: "Test Description 1", topic: "5" },
    // { question: "Test Card 2", description: "Test Description 2", topic: "5" },
    // { question: "Test Card 3", description: "Test Description 3", topic: "5" },
    // { question: "Test Card 2", description: "Test Description 2", topic: "5" },
    // { question: "Test Card 2", description: "Test Description 2", topic: "5" },
    // { question: "Test Card 3", description: "Test Description 3", topic: "5" },
    // { question: "Test Card 3", description: "Test Description 3", topic: "5" },
    // { question: "Test Card 1", description: "Test Description 1", topic: "5" },
    // { question: "Test Card 2", description: "Test Description 2", topic: "5" },
    // { question: "Test Card 3", description: "Test Description 3", topic: "5" },
    // { question: "Test Card 2", description: "Test Description 2", topic: "5" },
    // { question: "Test Card 2", description: "Test Description 2", topic: "5" },
    // { question: "Test Card 3", description: "Test Description 3", topic: "5" },
    // { question: "Test Card 3", description: "Test Description 3", topic: "5" },
    // { question: "Test Card 1", description: "Test Description 1", topic: "5" },
    // { question: "Test Card 2", description: "Test Description 2", topic: "5" },
    // { question: "Test Card 3", description: "Test Description 3", topic: "5" },
    // { question: "Test Card 2", description: "Test Description 2", topic: "5" },
    // { question: "Test Card 2", description: "Test Description 2", topic: "5" },
    // { question: "Test Card 3", description: "Test Description 3", topic: "5" },
    // { question: "Test Card 3", description: "Test Description 3", topic: "5" },
    // { question: "Test Card 1", description: "Test Description 1", topic: "5" },
    // { question: "Test Card 2", description: "Test Description 2", topic: "5" },
    // { question: "Test Card 3", description: "Test Description 3", topic: "5" },
    // { question: "Test Card 2", description: "Test Description 2", topic: "5" }
];

let currentCards = cards;

let currentIndex = 0;
    
// Function to show the next card in sequence
function showNextCard() {
    if (currentCards.length > 0) {
        currentIndex = (currentIndex + 1) % currentCards.length; // Increment and loop if needed
        showCard(currentIndex);
    } else {
        cardFront.textContent = 'No cards available.';
        cardBack.textContent = '';
        cardTopic.textContent = '';
    }
}

nextButton.addEventListener('click', showNextCard);

showCard(currentIndex); // Show the first card initially



function showCard(index) {
    if (currentCards.length > 0) {
        cardFront.textContent = currentCards[index].question;
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

// Random button functionality
randomButton.addEventListener('click', () => {
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