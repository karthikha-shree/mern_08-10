const game = () => {
    let playerScore = 0;
    let computerScore = 0;
    let moves = 0;

    // Emoji mapping
    const CHOICES = {
        'rock': '✊',
        'paper': '✋',
        'scissors': '✌️'
    };

    const playGame = () => {
        const rockBtn = document.querySelector('.rock');
        const paperBtn = document.querySelector('.paper');
        const scissorBtn = document.querySelector('.scissor');
        const playerOptions = [rockBtn, paperBtn, scissorBtn];
        const computerOptions = ['rock', 'paper', 'scissors'];

        playerOptions.forEach(option => {
            option.addEventListener('click', function() {
                // Disable buttons during animation
                playerOptions.forEach(btn => btn.disabled = true);

                const movesLeft = document.querySelector('.movesleft');
                moves++;
                movesLeft.innerText = `Moves Left: ${10 - moves}`;

                const choiceNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[choiceNumber];

                // Display choices with animation
                displayChoices(this.innerText.trim().split(' ')[1].toLowerCase(), computerChoice);

                // Delay winner calculation for animation
                setTimeout(() => {
                    winner(this.innerText.trim().split(' ')[1].toLowerCase(), computerChoice);
                    
                    // Re-enable buttons after animation
                    if (moves < 10) {
                        playerOptions.forEach(btn => btn.disabled = false);
                    }
                    
                    if (moves === 10) {
                        gameOver(playerOptions, movesLeft);
                    }
                }, 500);
            });
        });
    };

    const displayChoices = (player, computer) => {
        const playerChoiceDiv = document.querySelector('.player-choice');
        const computerChoiceDiv = document.querySelector('.computer-choice');

        playerChoiceDiv.textContent = CHOICES[player];
        computerChoiceDiv.textContent = CHOICES[computer];

        playerChoiceDiv.classList.add('winner');
        computerChoiceDiv.classList.add('winner');

        setTimeout(() => {
            playerChoiceDiv.classList.remove('winner');
            computerChoiceDiv.classList.remove('winner');
        }, 500);
    };

    const winner = (player, computer) => {
        const result = document.querySelector('.result');
        const playerScoreBoard = document.querySelector('.p-count');
        const computerScoreBoard = document.querySelector('.c-count');

        result.style.fontSize = '1.5rem';
        
        if (player === computer) {
            result.textContent = 'It\'s a Tie! 🤝';
            result.style.backgroundColor = '#666';
        } else if (
            (player === 'rock' && computer === 'scissors') ||
            (player === 'paper' && computer === 'rock') ||
            (player === 'scissors' && computer === 'paper')
        ) {
            result.textContent = 'You Won! 🎉';
            result.style.backgroundColor = '#4CAF50';
            playerScore++;
            playerScoreBoard.textContent = playerScore;
        } else {
            result.textContent = 'Computer Won! 🤖';
            result.style.backgroundColor = '#f44336';
            computerScore++;
            computerScoreBoard.textContent = computerScore;
        }
    };

    const gameOver = (playerOptions, movesLeft) => {
        const chooseMove = document.querySelector('.move');
        const result = document.querySelector('.result');
        const reloadBtn = document.querySelector('.reload');

        playerOptions.forEach(option => {
            option.style.display = 'none';
        });

        chooseMove.textContent = '🎮 Game Over!';
        movesLeft.style.display = 'none';

        if (playerScore > computerScore) {
            result.textContent = '🏆 Congratulations! You Won The Game!';
            result.style.backgroundColor = '#4CAF50';
        } else if (playerScore < computerScore) {
            result.textContent = '😔 Game Over! Computer Wins!';
            result.style.backgroundColor = '#f44336';
        } else {
            result.textContent = '🤝 It\'s a Tie!';
            result.style.backgroundColor = '#666';
        }

        reloadBtn.innerText = '🔄 Play Again';
        reloadBtn.style.display = 'block';
        
        reloadBtn.addEventListener('click', () => {
            window.location.reload();
        });
    };

    playGame();
};

// Start the game when the page loads
game();