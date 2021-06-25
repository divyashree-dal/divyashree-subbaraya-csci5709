usersData = [
    {
        id: "0F8JIqi4zwvb77FGz6Wt",
        lastName: "Fiedler",
        firstName: "Heinz-Georg",
        email: "heinz-georg.fiedler@example.com",
        title: "mr",
        picture: "https://randomuser.me/api/portraits/men/81.jpg"
        },
        {
        id: "0P6E1d4nr0L1ntW8cjGU",
        picture: "https://randomuser.me/api/portraits/women/74.jpg",
        lastName: "Hughes",
        email: "katie.hughes@example.com",
        title: "miss",
        firstName: "Katie"
        },
        {
        id: "1Lkk06cOUCkiAsUXFLMN",
        title: "mr",
        lastName: "Aasland",
        firstName: "Vetle",
        picture: "https://randomuser.me/api/portraits/men/97.jpg",
        email: "vetle.aasland@example.com"
        }
]

module.exports.addUserData = function (data) {
    usersData.push(data)
} 
module.exports.replaceUserData = function (data, id ) { 

    const userIndex = usersData.indexOf(usersData.find((user) => user.id === id));
    usersData[userIndex] = data

    return usersData[userIndex]
}

module.exports.users = usersData