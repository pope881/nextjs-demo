import { useRouter } from 'next/router'
import NewMeetupForm from '../../components/meetups/NewMeetupForm'
import { Fragment } from 'react'
import Head from 'next/head'

const NewMeetupPage = () => {
	const router = useRouter()
	async function onAddMeetup(enteredMeetupData) {
		const response = await fetch('/api/new-meetup', {
			method: 'POST',
			body: JSON.stringify(enteredMeetupData),
			headers: {
				'Content-Type': 'application/json',
			},
		})
		const data = await response.json()
		console.log(data)

		router.push('/')
	}

	return (
		<Fragment>
			<Head>
				<title>Add a New Meetup</title>
				<meta name="description" content="Add your own meetups and create amazing networking opportunities"></meta>
			</Head>
			<NewMeetupForm onAddMeetup={onAddMeetup} />
		</Fragment>
	)
}

export default NewMeetupPage
