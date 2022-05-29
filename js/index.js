const elForm = document.querySelector(".form");
const elFormInput = document.querySelector(".form-input")
const elWalkTime = document.querySelector(".walk-time");
const elBikeTime = document.querySelector(".bike-time");
const elDriveTime = document.querySelector(".drive-time");
const elFlyTime = document.querySelector(".fly-time");

const walkSpeed = 3.60;
const bikeSpeed = 20.10;
const carSpeed = 70.00;
const planeSpeed = 800.00;

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  
  const inputValue = elFormInput.value;

  if(inputValue > 0){
    const walkTime = inputValue / walkSpeed;
    const walkHour = parseInt(walkTime, 10);
    const walkMinute = Math.round((parseFloat(walkTime.toFixed(2), 10) - walkHour) * 60);
    elWalkTime.textContent = ` ${walkHour} hours, ${walkMinute} min`;

    const bikeTime = inputValue / bikeSpeed;
    const bikeHour = parseInt(bikeTime, 10);
    const bikeMInute = Math.round((parseFloat(bikeTime.toFixed(2), 10) - bikeHour) *60);
    elBikeTime.textContent = `${bikeHour} hours, ${bikeMInute} min`;

    const carTime = inputValue / carSpeed;
    const carHour = parseInt(carTime, 10);
    const carMinute = Math.round((parseFloat(carTime.toFixed(2) , 10) - carHour) * 60);
    elDriveTime.textContent = `${carHour} hours, ${carMinute} min`;

    const planeTime = inputValue / planeSpeed;
    const planeHour = parseInt(planeTime, 10);
    const planeMinute = Math.round((parseFloat(planeTime.toFixed(2), 10) - planeHour) * 60);
    elFlyTime.textContent = `${planeHour} hours, ${planeMinute} min`
}
  
})

// keyingi vazifa 

const elNextForm = document.querySelector(".next-form");
const elNextIput = document.querySelector(".next-input");
const elNextResulat = document.querySelector(".next-result")

elNextForm.addEventListener("submit", function (evt) {

  evt.preventDefault();

  const nextInputValue = elNextIput.value;

  elNextResulat.textContent= (nextInputValue * 9/5 + 32 + (" F ")  );


})




