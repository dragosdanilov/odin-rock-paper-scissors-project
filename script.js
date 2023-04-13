function getComputerChoice() {
    const CHOICES = ["rock", "paper", "scissors"];
    let randomChoice = Math.floor(Math.random() * CHOICES.length)
    return CHOICES[randomChoice];
}