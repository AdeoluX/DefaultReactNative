const Samples = () => {
    return {
        "statuses": [
            {
                "id": 1,
                "image": require("./images/anotherWoman.jpg"),
                "name": "Christina"
            },
            {
                "id": 2,
                "image": require("./images/christian.jpg"),
                "name": "Charles"
            },
            {
                "id": 3,
                "image": require("./images/church.jpg"),
                "name": "Tegs"
            },
            {
                "id": 4,
                "image": require("./images/fineFemal.jpg"),
                "name": "Juwon"
            },
            {
                "id": 5,
                "image": require("./images/prayerWarrior.jpg"),
                "name": "Michael"
            }
        ],
        "prayers": [
            {
                id: 1,
                media: "",
                title: "Test of Faith.",
                description: "The just shall live by faith, let's build our faith together...",
                type: "sermon",
                audioUrl: 'https://s3.amazonaws.com/exp-us-standard/audio/playlist-example/Comfort_Fit_-_03_-_Sorry.mp3'
            },
            {
                id: 2,
                media: "",
                title: "A Job.",
                prayer: "Please pray for my sister who is applying for a job.",
                type: "prayer"
            },
            {
                id: 3,
                media: "",
                title: "The normal christian Life",
                description: "How do we live a normal christian life? A Life of victory...",
                type: "sermon",
                audioUrl: 'https://ia802802.us.archive.org/34/items/SERMONINDEX_SID2064/SID2064.mp3'
            }
        ]
    }
}

export default Samples;
