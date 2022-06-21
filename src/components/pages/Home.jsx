import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Home() {
	// bounties from the backend
	const [bounties, setBounties] = useState([])

	useEffect(() => {
		const fetchBounties = async () => {
			try {
				const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/bounties`)
				setBounties(response.data)
				console.log(response.data)
			} catch (err) {
				console.log(err)
			}
		}
		fetchBounties()
	}, []) // get all the bounties when the page loads

	console.log('my server url is:', process.env.REACT_APP_SERVER_URL)
	return (
		<div>
			hello i am the home component
		</div>
	)
}