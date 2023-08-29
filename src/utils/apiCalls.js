//Get All Users Call

const URL = "http://localhost:4000"

export const GetAllUsers = async () => {
    try{
        let users = await fetch(URL + "/users", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const parsedUsers = users.json()
        return parsedUsers
    } catch(err) {
        console.log(err)
        return[]
    }
}