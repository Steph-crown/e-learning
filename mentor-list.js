$ = (x) => document.querySelector(x);

//Video.Placeholder
function avatar(color) {
  return `
   <div class='avatar'>
     <i class='fa fa-user avatarr' style="color:var(--${color});"></i>
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

var mentorList = [
    {
      subject:"Mathematics",
      tutor: "Hassan Sule"
    },
    {
      subject: "English",
      tutor: "Eze Onyinye"
    },
    {
      subject: "Further Mathematics",
      tutor: "Ayo Benjamin"
    },
    {
      subject: "Basic Technology",
      tutor: "Hassan Sule"
    },
    {
      subject: "Basic Science",
      tutor: "Hassan Sule"
    },
    {
    subject: "Basic Science",
    tutor: "Hassan Sule"
    },
    {
    subject: "Basic Science",
    tutor: "Hassan Sule"
    },
    {
    subject: "Basic Science",
    tutor: "Hassan Sule"
    },
    {
    subject: "Basic Science",
    tutor: "Hassan Sule"
    },
    {
    subject: "Basic Science",
    tutor: "Hassan Sule"
    },
    {
    subject: "Basic Science",
    tutor: "Hassan Sule"
    },
    {
    subject: "Basic Science",
    tutor: "Hassan Sule"
    },
    {
    subject: "Basic Science",
    tutor: "Hassan Sule"
    },
    {
    subject: "Basic Science",
    tutor: "Hassan Sule"
    },
    {
    subject: "Basic Science",
    tutor: "Hassan Sule"
    },
    {
    subject: "Basic Science",
    tutor: "Hassan Sule"
    }
  ]
    






  
  
//Sets posted videos
for (var i of mentorList) {
  video = `
    <div class="card" style="width: 45%; max-width:300px;">
      ${avatar(colors[Math.ceil(Math.random() * 4) - 1])}
      <div class="card-body">
        <h3 class="card-title">${i.tutor}</h3>
        <p class="card-text">${i.subject}</p>
        <a href="#" class="btn btn-secondary">Contact Tutor</a>
      </div>
    </div>
    `
    
    
  $('#mentors').innerHTML += video;
}