export async function email({
	to,
	title,
	body,
}: {
	to: string,
	title: string,
	body: string	
}) {

	/// must add logo of the app to the email
	console.error("email is not implemented yet")

	return {
		ok: false,
		error: "email is not implemented yet",
	}
}