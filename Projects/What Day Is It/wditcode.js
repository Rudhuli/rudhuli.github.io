let date = new Date();
let dayOfWeekNumber = date.getDay();
let nameOfDay;
let quote;

switch(dayOfWeekNumber) {
    case 0:
        nameOfDay = 'Sunday';
        quote = 'Sunday Funday.';
        break;
    case 1:
        nameOfDay = 'Monday';
        quote = 'Minecraft Mondays amirite?';
        break;
    case 2: 
        nameOfDay = 'Tuesday';
        quote = 'Taco Tuesdays. Send tweet.';
        break;
    case 3:
        nameOfDay = 'Wednesday';
        quote = 'Hump dddAAAAAAYYY!';
        break;
    case 4:
        nameOfDay = 'Thursday';
        quote = 'Thirsty Thursdays 🍹!';
        break;
    case 5:
        nameOfDay = 'Friday';
        quote = 'Gatt get down on Friday.';
        break;
    case 6:
        nameOfDay = 'Saturday';
        quote = 'Best day of the week TBH.';
        break;
        
}

let weekdayDiv = document.getElementById('weekday');
weekdayDiv.innerHTML = `${nameOfDay}`;

let quoteDiv = document.getElementById('phrase');
quoteDiv.innerHTML = `${quote}`;