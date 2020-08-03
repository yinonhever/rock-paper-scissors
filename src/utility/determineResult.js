const determineResult = (user, house) => {
    switch (user) {
        case "rock":
            switch (house) {
                case "paper": return "lose";
                case "scissors": return "win";
                case "lizard": return "win";
                case "spock": return "lose";
                default: return "draw";
            }
        case "paper":
            switch (house) {
                case "rock": return "win";
                case "scissors": return "lose";
                case "lizard": return "lose";
                case "spock": return "win";
                default: return "draw";
            }
        case "scissors":
            switch (house) {
                case "rock": return "lose";
                case "paper": return "win";
                case "lizard": return "win";
                case "spock": return "lose";
                default: return "draw";
            }
        case "lizard":
            switch (house) {
                case "rock": return "lose";
                case "paper": return "win";
                case "scissors": return "lose";
                case "spock": return "win";
                default: return "draw";
            }
        case "spock":
            switch (house) {
                case "rock": return "win";
                case "paper": return "lose";
                case "scissors": return "win";
                case "lizard": return "lose";
                default: return "draw";
            }
        default: return null;
    }
}

export default determineResult;