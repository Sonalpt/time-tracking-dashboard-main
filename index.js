const timeSelector = document.querySelectorAll("li");
const times = document.querySelectorAll('.daily, .weekly, .monthly');
const dailyTimes = document.querySelectorAll('.daily');
const weeklyTimes = document.querySelectorAll('.weekly');
const monthlyTimes = document.querySelectorAll('.monthly');
console.log(monthlyTimes);
console.log(times);
console.log(timeSelector);


const dailySelector = () => {
    times.forEach((time) => {
        time.classList.add('invisible');    
    });
    dailyTimes.forEach((dailyTime) => {
        dailyTime.classList.remove('invisible');
    });   
};

const weeklySelector = () => {
    times.forEach((time) => {
        time.classList.add('invisible');    
    });
    weeklyTimes.forEach((weeklyTime) => {
        weeklyTime.classList.remove('invisible');
    });   
};

const monthlySelector = () => {
    times.forEach((time) => {
        time.classList.add('invisible');    
    });
    monthlyTimes.forEach((monthlyTime) => {
        monthlyTime.classList.remove('invisible');
    });   
};








timeSelector.forEach((selector) => {
    selector.addEventListener('click', (e) => {
        switch (e.target.innerText) {
            case "Daily":
              dailySelector();
              break;
            case "Weekly":
              weeklySelector();              
              break;
            case "Monthly":
                monthlySelector();
              break;
            default:
              nul;
          }
    });
});

