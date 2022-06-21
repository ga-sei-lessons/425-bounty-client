export default function BountyDetails({ bounty }) {
	return (
		<div>
			<h2>{bounty.name}</h2>
			
			<p>Wanted for: {bounty.wantedFor}</p>

			<h3>client: {bounty.client}</h3>

			<h3>ship: {bounty.ship}</h3>

			<h2>Credits: {bounty.reward}</h2>

			<p>last seen: {bounty.lastSeen}</p>
		</div>
	)
}