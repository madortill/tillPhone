const DATA = { 
    // tillder
    "tillder": {
        "icon": "../assets/images/homePage/tillder.png",
        "amountOfQuestions": 2, // how many questions will actualy appear
        "appContent":  [
            {
                "type": "binary",
                "src": "../assets/images/homePage/tillder.png",
                "question": "שאלת נכון או לא נכון שהתשובה אליה היא נכון",
                "correctAns": true,
                "selectedAns": "",
            },
            {
                "type": "binary",
                "src": "../assets/images/homePage/tillder.png",
                "question": "שאלת נכון או לא נכון שהתשובה אליה היא לא נכון",
                "correctAns": false,
                "selectedAns": "",
            },
        ],
    },
    // tillhang
    "tillhang": {
        "icon": "../assets/images/homePage/tillhang.png",
        "amountOfQuestions": 2, // how many questions will actualy appear
        "appContent":  [
            {
                "src": "../assets/images/homePage/tillder.png",
                "definition": "הגדרה של מושג כי מושג זה כיף",
                "answer": [// if you want two words put a dash between them, not more then 8 letters
                    "מ",
                    "ו",
                    "ש",
                    "ג",
                    "-",
                    "א",
                ],
            },
            {
                "src": "../assets/images/homePage/tillder.png",
                "definition": "הגדרה של עוד מושג כי מושג זה כיף",
                "answer": [// if you want two words put a dash between them, not more then 8 letters
                    "מ",
                    "ו",
                    "ש",
                    "ג",
                    "-",
                    "ב",
                ],
            },
        ],
    },
    // tillone
    "tillone": {
        "icon": "../assets/images/homePage/tillOne.png",
        "amountOfQuestions": 2, // how many questions will actualy appear
        "appContent":  [
            {
                "question": "שאלה ששואלת מה עדיף לעשות?",
                "answers": ["לטוס", "לעשות אוריגאמי", "לטייל", "להיות בבית", "לאהוב", "לכתוב"],
                "icons": [
                    "../assets/images/tillone/world.svg",
                    "../assets/images/tillone/paper-plane.svg",
                    "../assets/images/tillone/marker.svg",
                    "../assets/images/tillone/home.svg",
                    "../assets/images/tillone/heart.svg",
                    "../assets/images/tillone/document.svg",
                ],
                "correctAns": "ans5",// location in answers array (start from 0)
                "explanation": "התשובה הנכונה היא לעשות אורגאמי כמובן לא רואה אפשרות אחרת בכלל",// explain why correct answer is correct
            },
            {
                "question": "שאלה שאלתית שיש לתשובות שלה אייקונים כי למה לא בעצם?",
                "answers": ["לטוס", "לעשות אוריגאמי", "לטייל", "להיות בבית", "לאהוב", "לכתוב"],
                "icons": [
                    "../assets/images/tillone/world.svg",
                    "../assets/images/tillone/paper-plane.svg",
                    "../assets/images/tillone/marker.svg",
                    "../assets/images/tillone/home.svg",
                    "../assets/images/tillone/heart.svg",
                    "../assets/images/tillone/document.svg",
                ],
                "correctAns": "ans1",// location in answers array (start from 0)
                "explanation": "התשובה הנכונה היא לעשות אורגאמי כמובן לא רואה אפשרות אחרת בכלל",// explain why correct answer is correct
            },
        ],
    },
    // tillgram
    "tillgram": {
        "icon": "../assets/images/homePage/tillgram.jpg",
        "appContent":  [
            {
                "title": "כותרת לנושא",
                "icon": "../assets/images/tillgram/dog.jpg",
                "text": "היי אני טקסט שנלווה לתמונה והוא גם מאוד קשור אליה ועוזר לתאר אותה ואת הקשר לנושא",
                "src": ["../assets/images/tillgram/exemplePic.jpg", "../assets/images/tillgram/exemple2.jpg", "../assets/images/tillgram/exemple3.jpg"],
                "currentPic": 0, // dont tuch
                "notRead": true,
            },
            {
                "title": "כותרת לנושא",
                "icon": "../assets/images/tillgram/dog.jpg",
                "text": "היי אני טקסט שנלווה לתמונה והוא גם מאוד קשור אליה ועוזר לתאר אותה ואת הקשר לנושא",
                "src": ["../assets/images/tillgram/exemplePic.jpg", "../assets/images/tillgram/exemple2.jpg", "../assets/images/tillgram/exemple3.jpg"],
                "currentPic": 0, // dont tuch
                "notRead": true,
            },
        ],
    },
    // tilloto
    "tilloto": {
        "icon": "../assets/images/homePage/tilloto.jpg",
        "amountOfQuestions": 6, // how many pers of cards will actualy appear
        "lose": 20, // how many attemptes they have until they lose
        "appContent":  [
            {
                "src": "../assets/images/tilloto/exemple1.jpg",
                "group": "1",
            },
            {
                "definitions": "כלב",
                "group": "1",
            },
            {
                "src": "../assets/images/tilloto/exemple6.jpg",
                "group": "2",
            },
            {
                "definitions": "פנדה",
                "group": "2",
            },
            {
                "src": "../assets/images/tilloto/exemple7.jpg",
                "group": "3",
            },
            {
                "definitions": "אריה",
                "group": "3",
            },
            {
                "src": "../assets/images/tilloto/exemple8.jpg",
                "group": "4",
            },
            {
                "definitions": "דולפין",
                "group": "4",
            },
            {
                "src": "../assets/images/tilloto/exemple4.jpg",
                "group": "5",
            },
            {
                "definitions": "סוס",
                "group": "5",
            },
            {
                "src": "../assets/images/tilloto/exemple5.jpg",
                "group": "6",
            },
            {
                "definitions": "זאב",
                "group": "6",
            },
        ],
    },
};