const URL = "http://localhost:4000"


//Get All Users Call
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

//Get User By ID
export const GetOneUser = async (id) => {
    try{
        let data = await fetch(URL + `/users/${id}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const parsedData = data.json()
        console.log(parsedData)
        return parsedData

    } catch(err) {
        console.log(err)
    }
}