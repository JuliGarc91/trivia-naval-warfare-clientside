// const HowTo = () => {
//     return (
//         <div>
//             <h1 className="text-black text-4xl text-center text">Learn to Play Cadet</h1>
//              <h3 className="text-black ">Here is an over view of the misson</h3>
//               <p className="how-to-p text-black ">Naval Trivia Warfare combines the classic game of Battleship with educational trivia questions.
//                  Players must answer a trivia question correctly to launch an attack on their opponent's fleet.
//                   Incorrect answers result in a skipped turn. The objective is to sink all of the opponent's ships.</p>
//              <ol className="how-to-ol text-black">
//                 <li className="how-to-li text-black ml-7">1. Game Board</li>
//                  <p className="how-to-p text-black ">Each player has a 10x10 grid.</p>
//                  <p className="how-to-p text-black ">Ships are placed on the grid, either horizontally or vertically (not diagonally).
//                  Ships cannot overlap or be placed outside the grid.</p>
//                  <li className="how-to-li">2. Ships</li>
//                  <span className="how-to-span">
//                  Carrier: 5 spaces
//                  Battleship: 4 spaces
//                  Cruiser: 3 spaces
//                  Submarine: 3 spaces
//                  Destroyer: 2 spaces
//                  </span>
//                  <li className="how-to-li">3. Trivia Questions</li>
//                   <p className="how-to-p">A set of trivia questions related to naval history, ship types, or general knowledge is prepared.</p>
//                   <li className="how-to-li">4. The Attack</li>
//                    <span className="how-to-span">
//                    Before launching an attack, the player must answer a trivia question.

//                     If the answer is correct, the player can proceed to launch an attack.

//                     If the answer is incorrect, the player's turn is skipped.
//                    </span>
//                    <li className="how-to-li">5. Switching Turns</li>
//                     <p className="how-to-p">Players alternate turns, following the same process of answering a trivia question and, if correct, launching an attack.
//                     </p>
//                     <li className="how-to-li">6. Winning the Game</li>
//                     <span className="how-to-span">
//                     The game continues until one player sinks all of the opponent's ships.
//                     The first player to sink all of the opponent's ships wins the game.
//                     </span>
//              </ol>
//         </div>
//     )
// }
// export default HowTo

const HowTo = () => {
    return (
        <div className='h-auto flex flex-col'>
            <video className="absolute inset-0 w-full h-full object-cover" autoPlay loop muted style={{ zIndex: -1 }}>
                {/* maybe a ternary to show alt background in case video doesn't work */}
                {/* <source src="https://videos.pexels.com/video-files/854281/854281-hd_1280_720_25fps.mp4" /> */}
                <source src="https://videos.pexels.com/video-files/13740590/13740590-hd_1280_720_24fps.mp4" />
                <p className='text-center text-white mt-10 text-3xl' style={{ fontFamily: "Kode Mono, monospace", fontStyle: 'normal' }}>Error: Your browser does not support the video tag.</p>
            </video>
            <div className="text-white p-7 overflow-y-auto" style={{ fontFamily: "Kode Mono, monospace", fontStyle: 'normal' }}>
                <h1 className=" text-6xl text-center text">Learn to Play Cadet</h1>
                <h3 className="text-center text-3xl">Here is an over view of the misson</h3>
                <br/>
                <div className="flex flex-col gap-8 w-[50vw] m-auto overflow-y-auto">
                    <p className="how-to-p text-2xl">
                        Naval Trivia Warfare combines the classic game of Battleship with educational trivia questions.
                        Players must answer a trivia question correctly to launch an attack on their opponent's fleet.
                        Incorrect answers result in a skipped turn. The objective is to sink all of the opponent's ships.
                    </p>
                    <ol className="how-to-ol text-xl">
                        <li className="how-to-li  ml-7">1. Game Board</li>
                        <p className="how-to-p  ">Each player has a 10x10 grid.</p>
                        <p className="how-to-p  ">
                            Ships are placed on the grid, either horizontally or vertically (not diagonally).
                            Ships cannot overlap or be placed outside the grid.
                        </p>
                        <br/>
                        <li className="how-to-li ml-7">2. Ships</li>
                        {/* not sure why bullet points don't show up */}
                        <ul className="how-to-span indent-[10%] list-decimal">
                            <li>🚢 Carrier: 5 spaces</li>
                            <li>🚢 Battleship: 4 spaces</li>
                            <li>🚢 Cruiser: 3 spaces</li>
                            <li>🚢 Submarine: 3 spaces</li>
                            <li>🚢 Destroyer: 2 spaces</li>
                        </ul>
                        <br/>
                        <li className="how-to-li ml-7">3. Trivia Questions</li>
                        <p className="how-to-p">A set of trivia questions related to naval history, ship types, or general knowledge is prepared.</p>
                        <br/>
                        <li className="how-to-li ml-7">4. The Attack</li>
                        <span className="how-to-span">
                            Before launching an attack, the player must answer a trivia question.
                            If the answer is correct, the player can proceed to launch an attack.
                            If the answer is incorrect, the player's turn is skipped.
                        </span>
                        <br/>
                        <li className="how-to-li ml-7">5. Switching Turns</li>
                        <p className="how-to-p">
                            Players alternate turns, following the same process of answering a trivia question and, if correct, launching an attack.
                        </p>
                        <br/>
                        <li className="how-to-li ml-7">6. Winning the Game</li>
                        <span className="how-to-span">
                            The game continues until one player sinks all of the opponent's ships.
                            The first player to sink all of the opponent's ships wins the game.
                        </span>
                    </ol>
                </div>
             </div>
        </div>
    )
}
export default HowTo