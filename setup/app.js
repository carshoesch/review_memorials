// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

/* variablen deklaration */
const btn_bwd = document.querySelector('.prev-btn');
const btn_fwd = document.querySelector('.next-btn');
const btn_rnd = document.querySelector('.random-btn');

/* img des angestellten */
const ini_state_img = document.getElementById("person-img");
/* name des angestellten */
let ini_state_author = document.getElementById('author');
/* job titel */
let ini_state_job = document.getElementById('job');
/* text steht in info */
let ini_state_info = document.getElementById('info');

let iniArrayNum = -1;

/* forwärts */
btn_fwd.addEventListener('click', () => {
  iniArrayNum += 1;
  if(iniArrayNum < reviews.length){
    ini_state_img.src = reviews[iniArrayNum].img;
    ini_state_author.textContent = reviews[iniArrayNum].name;
    ini_state_job.textContent = reviews[iniArrayNum].job;
    ini_state_info.textContent = reviews[iniArrayNum].text;
  console.log(ini_state_author);
  }else {
    iniArrayNum = 0
    ini_state_img.src = reviews[iniArrayNum].img;
    ini_state_author.textContent = reviews[iniArrayNum].name;
    ini_state_job.textContent = reviews[iniArrayNum].job;
    ini_state_info.textContent = reviews[iniArrayNum].text;
    console.log(ini_state_author);
  }
  
});
/* rückwärts */
btn_bwd.addEventListener("click", () => {
  iniArrayNum-=1;
  if (iniArrayNum < 0) {
    iniArrayNum = reviews.length-1;
    ini_state_img.src = reviews[iniArrayNum].img;
    ini_state_author.textContent = reviews[iniArrayNum].name;
    ini_state_job.textContent = reviews[iniArrayNum].job;
    ini_state_info.textContent = reviews[iniArrayNum].text;
    console.log(ini_state_author);
}else {
  ini_state_img.src = reviews[iniArrayNum].img;
  ini_state_author.textContent = reviews[iniArrayNum].name;
  ini_state_job.textContent = reviews[iniArrayNum].job;
  ini_state_info.textContent = reviews[iniArrayNum].text;
  console.log(ini_state_author);
}
});

/* random */
btn_rnd.addEventListener('click', () => {
  let randomNum = Math.floor(Math.random()*reviews.length)
  ini_state_img.src = reviews[randomNum].img;
  ini_state_author.textContent = reviews[randomNum].name;
  ini_state_job.textContent = reviews[randomNum].job;
  ini_state_info.textContent = reviews[randomNum].text;
  console.log(ini_state_author);
})




