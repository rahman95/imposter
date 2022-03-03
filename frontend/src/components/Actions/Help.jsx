import React, { useRef } from 'react'
import { Dialog } from '@reach/dialog'

import '@reach/dialog/styles.css'
import './Help.css'

const Help = ({ isOpen, setIsOpen }) => {
	const buttonRef = useRef()
	const close = () => setIsOpen(false)
	return (
		<div>
			<Dialog isOpen={isOpen} initialFocusRef={buttonRef} onDismiss={close}>
				<h2>Help</h2>
				<div>
					<h3>Requirements</h3>
					<p>
						The game is best enjoyed on a video call where everyone can see each others faces and reactions.
						Voice calls will also work but video is recommended.
					</p>
					<h3>Cards</h3>
					<p>
						<ul>
							<li>🃏 JOKER - Mafia</li>
							<li>♥️♠️♦️♣️ Any other Card - Civilian</li>
						</ul>
					</p>
					<h3>Objective</h3>
					<p>
						If you are part of the Mafia, the object of the game is to vote out all the other players. You
						need to do this by convincing others that you are a Civilian. If you are part of the Civilians,
						the object of the game is to find and vote out all the Mafia players. You will be randomly
						allocated a card and will vote to eliminate players after 3 minute rounds. You will need to
						speak to each other and try find something suspicious to try find the Mafia
					</p>
					<h3>Rules</h3>
					<p>
						<ul>
							<li>If you are a Mafia, do not reveal yourself.</li>
							<li>
								During the round you will be able to converse and try find the Mafia. Look out for
								changes in emotion/reactions etc.
							</li>
							<li>
								Vote for the person you suspect and give a reason for your choice. If you are a Mafia
								pick a target and suggest that they are suspicious, get others on your side.
							</li>
							<li>
								The person with the most votes is eliminated. If there is a tie, there will be a chance
								for another vote to break the tie.
							</li>
							<li>
								If you have the most votes, you have a quick chance to say some last words before you
								leave. Leave some advice for the others to act on and find the Mafia. Once this has been
								done you are eliminated from the game. You can no longer participate in the debate or
								vote on eliminating a player.
							</li>
						</ul>
					</p>
				</div>
				<div className="button-container">
					<button ref={buttonRef} onClick={close}>
						I understand the game
					</button>
				</div>
			</Dialog>
		</div>
	)
}

export default Help
