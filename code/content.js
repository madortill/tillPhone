const DATA = { 
    // tillder
    "tillder": {
        "icon": "../assets/images/homePage/tillder.svg",
        "amountOfQuestions": 2, // how many questions will actualy appear
        "appContent":  [
            {
                "type": "binary",
                "src": "../assets/images/tillder/dog.jpg",
                "question": "שאלת נכון או לא נכון שהתשובה אליה היא נכון",
                "correctAns": true,
                "selectedAns": "",
            },
            {
                "type": "binary",
                "src": "../assets/images/tillder/exemple6.jpg",
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
    // tillsms
    "tillsms": {
        "icon": "../assets/images/homePage/tillsms.webp",
        "amountOfQuestions": 2, // how many questions will actualy appear
        "appContent": [
            {
                pic: "../assets/images/tillsms/example1.jpg",
                title: "תרגול בנושא 1",
                curretntQuestion: 0,
                content: [
                {
                    type: `manyChoices`,
                    question: `שאלה עם המון אפשרויות שאפשר לבחור מהן כמה שרוצים`,
                    // recomended: no more than 16 answers, 8 if the are longer than one word
                    answers: [ "תשובה 1", "תשובה 2", "תשובה 3", "תשובה 4", "תשובה 5", "תשובה 6", "תשובה 7", "תשובה 8", "תשובה 9", "תשובה 10", "תשובה 11", "תשובה 12", "תשובה 13", "תשובה 14", "תשובה 15", "תשובה 16",],// the legth will determine how many answers will apear
                    correctAns: [`ans1`, `ans2`, `ans5`] // the legth will determine how many answers are reqwiered
                },
                {
                    type: `manyChoices`,
                    question: `שאלה עם המון אפשרויות שאפשר לבחור מהן כמה שרוצים`,
                    // recomended: no more than 16 answers, 8 if the are longer than one word
                    answers: [ "בדיקה 1", "תשובה 2", "תשובה 3", "תשובה 4", "תשובה 5", "תשובה 6", "תשובה 7", "תשובה 8", "תשובה 9", "תשובה 10", "תשובה 11", "תשובה 12", "תשובה 13", "תשובה 14", "תשובה 15", "תשובה 16",],// the legth will determine how many answers will apear
                    correctAns: [`ans1`, `ans2`, `ans5`] // the legth will determine how many answers are reqwiered
                },
            ],},
            {
                pic: "../assets/images/tillsms/example1.jpg",
                title: "תרגול בנושא 2",
                curretntQuestion: 0,
                content: [
                {
                    type: `multipleAllPic`,
                    question: `שאלה אמריקאית שהתשובות שלה הן תמונות`,
                    answers: [`./assets/panda.jpg`, `./assets/dog.jpg`, `./assets/panda.jpg`, `./assets/dog.jpg`],// the legth will determine how many pics will be im the question, one correct ans
                    correctAns: `ans1`
                },
            ],},
            {
                pic: "../assets/images/tillsms/example1.jpg",
                title: "תרגול בנושא 3",
                curretntQuestion: 0,
                content: [
                {
                    "type": "binary",
                    "src": "../assets/images/tillder/exemple6.jpg",
                    "question": "שאלת נכון או לא נכון שהתשובה אליה היא לא נכון",
                    "correctAns": false,
                    "selectedAns": "",
                },
                {
                    "type": "binary",
                    "src": "../assets/images/tillder/exemple6.jpg",
                    "question": "שאלת נכון או לא נכון שהתשובה אליה היא לא נכון",
                    "correctAns": false,
                    "selectedAns": "",
                },
                {
                    "type": "binary",
                    "src": "../assets/images/tillder/exemple6.jpg",
                    "question": "שאלת נכון או לא נכון שהתשובה אליה היא לא נכון",
                    "correctAns": false,
                    "selectedAns": "",
                },
            ],},
        ]
        
    },
};