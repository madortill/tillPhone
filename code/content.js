const DATA = { 
    // tillder
    "tillder": {
        icon: `../assets/images/homePage/tillder.png`,
        amountOfQuestions: 1, // how many questions will actualy appear
        appContent:  [
            {
                type: `binary`,
                src: `../assets/images/homePage/tillder.png`,
                question: `שאלת נכון או לא נכון שהתשובה אליה היא נכון`,
                correctAns: true,
                selectedAns: ``,
            },
        ],
    },
    // tillhang
    "tillhang": {
        icon: `../assets/images/homePage/tillhang.png`,
        amountOfQuestions: 2, // how many questions will actualy appear
        appContent:  [
            {
                type: `binary`,
                src: `../assets/images/homePage/tillder.png`,
                definition: `הגדרה של מושג כי מושג זה כיף`,
                answer: [// if you want two words put a dash between them, not more then 8 letters
                `מ`,
                `ו`,
                `ש`,
                `ג`,
                `-`,
                `א`
            ],
            },
            {
                type: `binary`,
                src: `../assets/images/homePage/tillder.png`,
                definition: `הגדרה של עוד מושג כי מושג זה כיף`,
                answer: [// if you want two words put a dash between them, not more then 8 letters
                `מ`,
                `ו`,
                `ש`,
                `ג`,
                `-`,
                `ב`
            ],
            },
        ],
    },
    // tillone
    "tillone": {
        icon: `../assets/images/homePage/tillone.png`,
        amountOfQuestions: 1, // how many questions will actualy appear
        appContent:  [
            {
                type: `multiple`,
                question: `שאלה שאלתית שיש לתשובות שלה אייקונים כי למה לא בעצם?`,
                answers: [`לטוס`, `לעשות אוריגאמי`, `לטייל`, `להיות בבית`, `לאהוב`, `לכתוב`,],
                icons: [
                    `../assets/images/tillone/world.svg`,
                    `../assets/images/tillone/paper-plane.svg`,
                    `../assets/images/tillone/marker.svg`,
                    `../assets/images/tillone/home.svg`,
                    `../assets/images/tillone/heart.svg`,
                    `../assets/images/tillone/document.svg`,
                ],
                correctAns: `ans1`,// location in answers array (start from 0)
                explanation: `התשובה הנכונה היא לעשות אורגאמי כמובן לא רואה אפשרות אחרת בכלל`,// explain why correct answer is correct
            },
            {
                type: `multiple`,
                question: `שאלה שאלתית שיש לתשובות שלה אייקונים כי למה לא בעצם?`,
                answers: [`לטוס`, `לעשות אוריגאמי`, `לטייל`, `להיות בבית`, `לאהוב`, `לכתוב`,],
                icons: [
                    `../assets/images/tillone/world.svg`,
                    `../assets/images/tillone/paper-plane.svg`,
                    `../assets/images/tillone/marker.svg`,
                    `../assets/images/tillone/home.svg`,
                    `../assets/images/tillone/heart.svg`,
                    `../assets/images/tillone/document.svg`,
                ],
                correctAns: `ans1`,// location in answers array (start from 0)
                explanation: `התשובה הנכונה היא לעשות אורגאמי כמובן לא רואה אפשרות אחרת בכלל`,// explain why correct answer is correct
            },
            {
                type: `multiple`,
                question: `שאלה שאלתית שיש לתשובות שלה אייקונים כי למה לא בעצם?`,
                answers: [`לטוס`, `לעשות אוריגאמי`, `לטייל`, `להיות בבית`, `לאהוב`, `לכתוב`,],
                icons: [
                    `../assets/images/tillone/world.svg`,
                    `../assets/images/tillone/paper-plane.svg`,
                    `../assets/images/tillone/marker.svg`,
                    `../assets/images/tillone/home.svg`,
                    `../assets/images/tillone/heart.svg`,
                    `../assets/images/tillone/document.svg`,
                ],
                correctAns: `ans1`,// location in answers array (start from 0)
                explanation: `התשובה הנכונה היא לעשות אורגאמי כמובן לא רואה אפשרות אחרת בכלל`,// explain why correct answer is correct
            },
        ],
    },
};