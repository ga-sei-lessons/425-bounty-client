import { useState } from 'react'

export default function BountyCreateForm({ submitHandler }) {
	const [form, setForm] = useState({
		name: '',
		wantedFor: '',
		client: '',
		ship: '',
		reward: 100000,
		lastSeen: ''
	})

	return (
		<form onSubmit={e => submitHandler(e, form)}>
			<label htmlFor='name'>Name:</label>
			<input 
				type='text'
				id='name'
				value={form.name}
				onChange={e => setForm({ ...form, name: e.target.value})}
			/>

			<label htmlFor='wantedFor'>wantedFor:</label>
			<input 
				type='text'
				id='wantedFor'
				value={form.wantedFor}
				onChange={e => setForm({ ...form, wantedFor: e.target.value})}
			/>

			<label htmlFor='client'>client:</label>
			<input 
				type='text'
				id='client'
				value={form.client}
				onChange={e => setForm({ ...form, client: e.target.value})}
			/>

			<label htmlFor='ship'>ship:</label>
			<input 
				type='text'
				id='ship'
				value={form.ship}
				onChange={e => setForm({ ...form, ship: e.target.value})}
			/>

			<label htmlFor='reward'>reward:</label>
			<input 
				type='number'
				id='reward'
				value={form.reward}
				onChange={e => setForm({ ...form, reward: e.target.value})}
			/>

			<label htmlFor='lastSeen'>lastSeen:</label>
			<input 
				type='text'
				id='lastSeen'
				value={form.lastSeen}
				onChange={e => setForm({ ...form, lastSeen: e.target.value})}
			/>
			<button type="submit">Create</button>
		</form>
	)
}