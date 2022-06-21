import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import BountyCreateForm from '../BountyCreateForm'

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

	// submit handler function
	const handleSubmit = async (e, form, setForm) => {
		e.preventDefault()
		// axios to POST a new bounty using the form state
		console.log('the form data is:', form)
		try {
			// post to the backend
			// axios.post(url, request body/form data, options)
			const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/bounties`, form)
			// update state with the new data to see it
			// option 1 -- add this new bounty into state
			setBounties([...bounties, response.data])
			// option 2 -- we can get all the bounties from the backend and set them in state
			// const bountiesResponse = await axios.get(`${process.env.REACT_APP_SERVER_URL}/bounties`)
			// setBounties(bountiesResponse.data)


			// console.log(response)
			// clear the form -- ????
			// form has submitted correctly -- clear it
			setForm({
				name: '',
				wantedFor: '',
				client: '',
				ship: '',
				reward: 100000,
				lastSeen: ''
			})
		} catch (err) {
			console.warn('submit error: ', err)
		}
	}

	console.log('my server url is:', process.env.REACT_APP_SERVER_URL)
	const bountyLinks = bounties.map((bounty, idx) => {
		return (
			<div key={`bountylink${idx}`}>
				<Link to={`/bounties/${bounty._id}`}>{bounty.name}</Link>
			</div>
		)
	})
	return (
		<div>
			<h1>Create New Bounty:</h1>
			<BountyCreateForm 
				submitHandler={handleSubmit}
			/>
			<h1>Current Bounties:</h1>

			{bountyLinks}
		</div>
	)
}