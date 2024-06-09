const HowTo = () => {
    return (
        <div>
            <h1 className="text-black text-4xl text-center text">Learn to Play Cadet</h1>
             <h3 className="text-black ">Here is an over view of the misson</h3>
              <p className="how-to-p text-black ">Naval Trivia Warfare combines the classic game of Battleship with educational trivia questions.
                 Players must answer a trivia question correctly to launch an attack on their opponent's fleet.
                  Incorrect answers result in a skipped turn. The objective is to sink all of the opponent's ships.</p>
             <ol className="how-to-ol text-black">
                <li className="how-to-li text-black ml-7">1. Game Board</li>
                 <p className="how-to-p text-black ">Each player has a 10x10 grid.</p>
                 <p className="how-to-p text-black ">Ships are placed on the grid, either horizontally or vertically (not diagonally).
                 Ships cannot overlap or be placed outside the grid.</p>
                 <li className="how-to-li">2. Ships</li>
                 <span className="how-to-span">
                 Carrier: 5 spaces
                 Battleship: 4 spaces
                 Cruiser: 3 spaces
                 Submarine: 3 spaces
                 Destroyer: 2 spaces
                 </span>
                 <li className="how-to-li">3. Trivia Questions</li>
                  <p className="how-to-p">A set of trivia questions related to naval history, ship types, or general knowledge is prepared.</p>
                  <li className="how-to-li">4. The Attack</li>
                   <span className="how-to-span">
                   Before launching an attack, the player must answer a trivia question.

                    If the answer is correct, the player can proceed to launch an attack.

                    If the answer is incorrect, the player's turn is skipped.
                   </span>
                   <li className="how-to-li">5. Switching Turns</li>
                    <p className="how-to-p">Players alternate turns, following the same process of answering a trivia question and, if correct, launching an attack.
                    </p>
                    <li className="how-to-li">6. Winning the Game</li>
                    <span className="how-to-span">
                    The game continues until one player sinks all of the opponent's ships.
                    The first player to sink all of the opponent's ships wins the game.
                    </span>
             </ol>
        </div>
    )
}
export default HowTo