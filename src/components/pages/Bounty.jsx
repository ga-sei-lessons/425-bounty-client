import { useParams } from "react-router-dom"

export default function Bounty() {

	const { id } = useParams()

	return (
		<div>
			hello i am one bounty details on {id}
		</div>
	)
}