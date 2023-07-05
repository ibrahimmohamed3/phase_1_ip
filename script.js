//select the necessary btns
let priBtn = document.getElementById('priBtn')
let btn1 = document.getElementById('btn1')
let btn2 = document.getElementById('btn2')
let btn3 = document.getElementById('btn3')
let btn4 = document.getElementById('btn4')
let btn5 = document.getElementById('btn5')
let btn6 = document.getElementById('btn6')
let btn7 = document.getElementById('btn7')
let btn8 = document.getElementById('btn8')
let btn9 = document.getElementById('btn9')
let btn10 = document.getElementById('btn10')
let btn11= document.getElementById('btn11')
let btn12= document.getElementById('btn12')

//add eventlistner to the main btn
priBtn.addEventListener('click',thanknote )

//fuction of alert 
function thanknote(){
    return alert('Thank you for chosing us')
}
fetch('http://localhost:3000/rooms/').then (response => console.log(response))
.then(data => data)

// Retrieve the room elements and store them in an array
const rooms = Array.from(document.querySelectorAll('.box'));

// Function to update the available rooms count
function updateAvailableRooms(roomIndex) {
  const roomElement = rooms[roomIndex];
  const availableRoomsElement = roomElement.querySelector('h3:nth-of-type(2)');

  let availableRooms = parseInt(availableRoomsElement.textContent.split(':')[1].trim());
  if (availableRooms > 0) {
    availableRooms--;
    availableRoomsElement.textContent = `Available rooms: ${availableRooms}`;
  } else {
    alert('Sorry, all rooms have been accommodated.');
  }
}

// Attach event listeners to the "Book Now" buttons
rooms.forEach((room, index) => {
  const bookNowButton = room.querySelector('button');
  bookNowButton.addEventListener('click', () => {
    updateAvailableRooms(index);
  });
});
