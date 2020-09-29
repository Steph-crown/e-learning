$ = (x) => document.querySelector(x);

//Video.Placeholder
function videoImage(color) {
  return `
   <div class='video ${color}'>
   </div>
    <div class='video-controls ${color}'>
      <i class='fa fa-backward icon'></i>
      <i class='fa fa-play icon'></i>
      <i class='fa fa-forward icon'></i>
    </div>
  `
}



$('.menu').addEventListener('click', () => {
  $('.content').style.display = "block";
})

$('#close').addEventListener('click', () => {
  $('.content').style.display = "none";
})
colors = ["blue", "red", "green", "yellow"]
var student = {
  name: "Michael",
  introVideo: videoImage("green"),
  freeTutorials: [
    {
      video: videoImage(colors[Math.ceil(Math.random() * 4) - 1]),
      course: "Circle Theorem",
      tutor: "Hassan Sule"
    },
    {
      video: videoImage(colors[Math.ceil(Math.random() * 4) - 1]),
      course: "Concord",
      tutor: "Eze Onyinye"
    },
    {
      video: videoImage(colors[Math.ceil(Math.random() * 4) - 1]),
      course: "Integral Calculus",
      tutor: "Ayo Benjamin"
    },
    {
      video: videoImage(colors[Math.ceil(Math.random() * 4) - 1]),
      course: "Simultaneous Equations",
      tutor: "Hassan Sule"
    },
    {
      video: videoImage(colors[Math.ceil(Math.random() * 4) - 1]),
      course: 'Factorization',
      tutor: "Hassan Sule"
    },
    {
      video: videoImage(colors[Math.ceil(Math.random() * 4) - 1]),
      course: 'Logic',
      tutor: "Hassan Sule"
    },
    {
      video: videoImage(colors[Math.ceil(Math.random() * 4) - 1]),
      course: "Trigonometry",
      tutor: "Hassan Sule"
    },
    {
      video: videoImage(colors[Math.ceil(Math.random() * 4) - 1]),
      course: "Geometrical Ratios",
      tutor: "Hassan Sule"
    },
    {
      video: videoImage(colors[Math.ceil(Math.random() * 4) - 1]),
      course: 'Logarithms',
      tutor: "Hassan Sule"
    },
    {
      video: videoImage(colors[Math.ceil(Math.random() * 4) - 1]),
      course: "Quadratic equations",
      tutor: "Hassan Sule"
    }
  ]
    
}



//Sets student name
$("#name").textContent = "Hi " + student.name;




  
  
//Sets posted videos
for (var i of student.freeTutorials) {
  video = `<div class=" vid col-sm-6 col-md-4 col-xl-3">
    ${i.video}
    <p>${i.course}</p>
    <small>${i.tutor}</small>
    <i class="fa fa-phone"></i>
    </div>`
    
    
  $('#posted-vid').innerHTML += video;
}