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
        amountOfQuestions: 1, // how many questions will actualy appear
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
                `א`,
                `ג`,
                `-`,
                `א`
            ],
            },
        ],
    },
};