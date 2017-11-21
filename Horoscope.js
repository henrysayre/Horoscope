var signs = ["Aquarius","Pisces","Aries","Taurus","Gemini","Cancer","Leo","Virgo","Libra","Scorpio","Sagittarius","Capricorn"];
var dates = ["Try Again!"];
var years = ["Rabbit", "Dragon", "Snake", "Horse", "Goat"];
function onSubmit(){
    var year = parseInt(document.getElementById("selectBox3").value);
    var zodiac = determineZodiac(getZodiac(year));
    var day = document.getElementById("selectBox2").value;
    var month = document.getElementById("selectBox").value;
    var sign = determineSign(parseInt(month),parseInt(day));
    var message = determineHoroscope(sign);
    var name = document.getElementById("nameBox").value;
    document.getElementById("zodiac").innerHTML = zodiac;
    document.getElementById("sign").innerHTML = sign;
    document.getElementById("message").innerHTML = name + ", " + message;
    document.getElementById("image").innerHTML = "<img src='img/" + getImage(sign) + ".png'>";
    getZodiac(year);
    determineHoroscope(determineSign(), name);
}
function determineSign(month, day){
    if (month === 2 && day === 31 ){
        return dates[0];
    }
    if (month === 2 && day === 30){
        return dates[0];
    }
    if (month === 4 && day === 31){
        return dates[0];
    }
    if (month === 6 && day === 31){
        return dates[0];
    }
    if (month === 9 && day === 31){
        return dates[0];
    }
    if (month === 11 && day === 31){
        return dates[0];
    }
    if ((month === 1 && day >= 20) || (month === 2 && day <= 18 )){
        return signs[0];
    }
    if ((month === 2 && day >= 19) || (month === 3 && day <= 20)){
        return signs[1];
    }
    if ((month === 3 && day >= 21) || (month === 4 && day <= 19)){
        return signs[2];
    }
    if ((month === 4 && day >= 20) || (month === 5 && day <= 20)){
        return signs[3];
    }
    if ((month === 5 && day >= 21) || (month === 6 && day <= 20)){
        return signs[4];
    }
    if ((month === 6 && day >= 21) || (month === 7 && day <= 22)){
        return signs[5];
    }
    if ((month === 7 && day >= 23) || (month === 8 && day <= 22)){
        return signs[6];
    }
    if ((month === 8 && day >= 23) || (month === 9 && day <= 22)){
        return signs[7];
    }
    if ((month === 9 && day >= 23) || (month === 10 && day <= 22)){
        return signs[8];
    }
    if ((month === 10 && day >= 23) || (month === 11 && day <= 21)){
        return signs[9];
    }
    if ((month === 11 && day >= 22) || (month === 12 && day <= 21)){
        return signs[10];
    }
    if ((month === 12 && day >= 22) || (month === 1 && day <= 19)){
        return signs[11];
    }
}

function determineHoroscope(determineSign, name){
    if (determineSign === dates[0]){
        return "Try Again!";
    }
    if (determineSign === signs[0]){
        return " You're an Aquarius! When you hear about a major shift in your life that's just around the corner, " +
            "it doesn't frighten you at all. You're actually exhilarated! If a family member greets the news with less enthusiasm," +
            " though, try to do what you can to help them adjust. Tell them that nothing but the best is en route!";
    }
    if (determineSign === signs[1]){
        return " You're a Pisces! You may reach a new level of understanding you'd never have believed possible before. " +
            "If you start rehashing the past, however, make sure not to let it continue for long. " +
            "Guide the conversation toward the future!";
    }
    if (determineSign === signs[2]){
        return " You're an Aries! You want to make a change. Fortunately, that's exactly what's on the agenda right now, thanks to an impending offer that is pretty sweet." +
            " It may be so sweet, in fact, that you're tempted to jump on it right away. Moving quickly might not be a bad idea," +
            " but taking the time to check out the details first doesn't hurt.";
    }
    if (determineSign === signs[3]){
        return " You're a Taurus! If you like dancing to yesterday's top hits while wearing clothes that would embarrass a teenager, go for it." +
            " It's sure to be liberating -- not only for yourself but for your friends, who are eventually inspired by your fun-loving example.";
    }
    if (determineSign === signs[4]){
        return " You're a Gemini! If you've been a little careless about nurturing your artistic nature, now is definitely the time to turn it all around." +
            " Take a class, pick up a new book or magazine or talk with a total stranger on the street.";
    }
    if (determineSign === signs[5]){
        return " You're a Cancer!  If someone approaches you with a smirk and a question about what you've got up your sleeve today, " +
            "you shouldn't feel obliged to let them in on any secrets -- unless you want to, of course. " +
            "When you can't stand it for another moment, though, don't just stop at whispering the news to one person -- alert the media!";
    }
    if (determineSign === signs[6]){
        return " You're a Leo! You're happy to dispense a chilly stare and a quick glimpse of the back of your head. " +
            "On the other hand, if you've been deliberately avoiding a topic that someone close has been trying to bring up for weeks," +
            " you change your tune in a hurry. You may even be so wildly enthusiastic that they might wish they'd have waited!";
    }
    if (determineSign === signs[7]){
        return " You're a Virgo! You have the chance to turn one of your dreams into a real goal now, and to tackle that goal with your usual meticulous attention." +
            " If you're dealing (or want to be dealing) with long-distance travel, higher education or spiritual quests," +
            " you should have all the positive energy you could ever ask for to get the show on the road!";
    }
    if (determineSign === signs[8]){
        return " You're a Libra! You can talk almost anyone into almost anything, as long as you believe in your heart that it's the right thing." +
            " When you're approached today by someone who needs you to help them broadcast the unvarnished truth, you don't just accept the job" +
            " -- you volunteer for it enthusiastically!";
    }
    if (determineSign === signs[9]){
        return " You're a Scorpio! You may keep talking, but there should be absolutely no argument. " +
            "If you can't see eye to eye, you need to agree to disagree. " +
            "That might not sound like progress at first, but if you remember where you've come from, you should realize that it's not just progress" +
            " -- it's the beginning of a whole new style of communication!";
    }
    if (determineSign === signs[10]){
        return " You're a Sagittarius! All work and no play really does make life dull, you know, and besides, you have your reputation to consider!" +
            " You're seen as fun-loving, lighthearted and downright chipper, so give yourself at least a couple of hours off.";
    }
    if (determineSign === signs[11]){
        return " You're a Capricorn! If you've been dating someone casually, things should shake up right away. " +
            "One of you is sure to either want to make a commitment or say your (graceful) goodbyes -- but don't worry. " +
            "Your life is full of romance over the long run, and betting on anything other than commitment just isn't prudent.";
    }

}

function getImage(sign){
    if (sign === signs[0]){
        return "aquarius";
    }
    if (sign === signs[1]){
        return "pisces";
    }
    if (sign === signs[2]){
        return "aries";
    }
    if (sign === signs[3]){
        return "taurus";
    }
    if (sign === signs[4]){
        return "gemini";
    }
    if (sign === signs[5]){
        return "cancer";
    }
    if (sign === signs[6]){
        return "leo";
    }
    if (sign === signs[7]){
        return "virgo";
    }
    if (sign === signs[8]){
        return "libra";
    }
    if (sign === signs[9]){
        return "scorpio";
    }
    if (sign === signs[10]){
        return "sagittarius";
    }
    if (sign === signs[11]){
        return "capricorn";
    }
}

function getZodiac(year){
    if (year === 1999){
        return years[0];
    }
    if (year === 2000){
        return years[1];
    }
    if (year === 2001){
        return years[2];
    }
    if (year === 2002){
        return years[3]
    }
    if (year === 2003){
        return years[4];
    }
}

function determineZodiac(getZodiac){
    if (getZodiac === years[0]){
        return "Your zodiac sign is a Rabbit!";
    }
    if (getZodiac === years[1]){
        return "Your zodiac sign is a Dragon!";
    }
    if (getZodiac === years[2]){
        return "Your zodiac sign is a Snake!";
    }
    if (getZodiac === years[3]){
        return "Your zodiac sign is a Horse!";
    }
    if (getZodiac === years[4]){
        return "Your zodiac sign is a Goat!";
    }
}