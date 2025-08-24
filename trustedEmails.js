var arr = [
    {
        userName: "Test",
        lastName: "Test",
        email: "test.test@gmail.com"
    },
    {
        userName: "Dmitro",
        lastName: "Porohov",
        email: "dmitro.porohov@yahoo.com"
    },
    {
        userName: "Andrii",
        lastName: "",
        email: "andrii@mail.ru" //Нам такі не підходять

    }
];

// ^ - початок рядка
// [a-zA-Z0-9]+ - слово (латиниця + цифри)
// (\.[a-zA-Z0-9]+)? - друге слово з крапкою
// @ -  собачка
// (gmail\.com|yahoo\.com) - довірені пошти
// $ - кінець рядка

var emailRegex = /^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)?@(gmail\.com|yahoo\.com)$/;

var trustedEmails = arr
    .map(user => user.email)   
    .filter(email => emailRegex.test(email)); 

console.log(trustedEmails);

