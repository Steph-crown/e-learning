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
var mentor = {
  name: "Abeeb Afolabi",
  tags: [
    "Mathematics",
    "F. Mathematics",
    "Geometry",
    "Algebra",
    'Quantitative Reasoning',
    "Calculus"
  ],
  introVideo: videoImage("green"),
  postedVideos: [
    {
      video: videoImage(colors[Math.ceil(Math.random() * 4) - 1]),
      course: "Circle Theorem"
    },
    {
      video: videoImage(colors[Math.ceil(Math.random() * 4) - 1]),
      course: "Differential Calculus"
    },
    {
      video: videoImage(colors[Math.ceil(Math.random() * 4) - 1]),
      course: "Integral Calculus"
    },
    {
      video: videoImage(colors[Math.ceil(Math.random() * 4) - 1]),
      course: "Simultaneous Equations"
    },
    {
      video: videoImage(colors[Math.ceil(Math.random() * 4) - 1]),
      course: 'Factorization'
    },
    {
      video: videoImage(colors[Math.ceil(Math.random() * 4) - 1]),
      course: 'Logic'
    },
    {
      video: videoImage(colors[Math.ceil(Math.random() * 4) - 1]),
      course: "Trigonometry"
    },
    {
      video: videoImage(colors[Math.ceil(Math.random() * 4) - 1]),
      course: "Geometrical Ratios"
    },
    {
      video: videoImage(colors[Math.ceil(Math.random() * 4) - 1]),
      course: 'Logarithms'
    },
    {
      video: videoImage(colors[Math.ceil(Math.random() * 4) - 1]),
      course: "Quadratic equations"
    }
  ]
    
}



//Sets mentors name
$("#name").textContent = mentor.name;

//Sets mentors tags
for (var i of mentor.tags) {
  $('#tags').innerHTML += `<b class="tag">${i}</b>`;
}


//Sets intro video
$("#intro-vid").innerHTML = mentor.introVideo
  
  
//Sets posted videos
for (var i of mentor.postedVideos) {
  video = `<div class=" vid col-sm-6 col-md-4 col-xl-3">
    ${i.video}
    <p>${i.course}</p>
    </div>`
    
    
  $('#posted-vid').innerHTML += video;
}