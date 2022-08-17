const bigCard1 = document.querySelectorAll("#bigCard1 ul li");
const bigCard1Img = document.querySelectorAll("#bigCard1 .right img");
const bigCard2 = document.querySelectorAll("#bigCard2 ul li");
const bigCard2Img = document.querySelectorAll("#bigCard2 .right img");
const bigCard4 = document.querySelectorAll("#bigCard4 ul li");
const bigCard4Img = document.querySelectorAll("#bigCard4 .right img");

bigCard1.forEach((e, i) => {
  e.addEventListener("click", () => {
    for (let i = 0; i < bigCard1.length; i++) {
      bigCard1[i].classList.remove("active");
      bigCard1Img[i].classList.remove("active");
    }
    e.classList.add("active");
    bigCard1Img[i].classList.add("active");
  });
});

bigCard2.forEach((e, i) => {
  e.addEventListener("click", () => {
    for (let i = 0; i < bigCard2.length; i++) {
      bigCard2[i].classList.remove("active");
      bigCard2Img[i].classList.remove("active");
    }
    e.classList.add("active");
    bigCard2Img[i].classList.add("active");
    console.log(bigCard2Img);
  });
});

bigCard4.forEach((e, i) => {
  e.addEventListener("click", () => {
    for (let i = 0; i < bigCard4.length; i++) {
      bigCard4[i].classList.remove("active");
      bigCard4Img[i].classList.remove("active");
    }
    e.classList.add("active");
    bigCard4Img[i].classList.add("active");
  });
});

let img1 = document.querySelector("#img1");
let img2 = document.querySelector("#img2");
let img4 = document.querySelector("#img4");

let textInner1 = document.querySelector("#textInner1");
let textInner2 = document.querySelector("#textInner2");
let textInner4 = document.querySelector("#textInner4");

let imgBackBtn1 = document.querySelector("#imgBackBtn1");
let imgNextBtn1 = document.querySelector("#imgNextBtn1");
let imgBackBtn2 = document.querySelector("#imgBackBtn2");
let imgNextBtn2 = document.querySelector("#imgNextBtn2");
let imgBackBtn4 = document.querySelector("#imgBackBtn4");
let imgNextBtn4 = document.querySelector("#imgNextBtn4");

let wave1 = document.querySelectorAll("#wave1 span");
let wave2 = document.querySelectorAll("#wave2 span");
let wave4 = document.querySelectorAll("#wave4 span");

let count1 = 0;
let count2 = 0;

wave1.forEach((e, i) => {
  e.addEventListener("click", () => {
    for (let i = 0; i < wave1.length; i++) {
      wave1[i].classList.remove("active");
    }
    e.classList.add("active");

    textInner1.style.transform = `translateX(-${i}00%)`;
    img1.style.transform = `translateX(-${i}00%)`;
    count1 = i;
  });
});

wave2.forEach((e, i) => {
  e.addEventListener("click", () => {
    for (let i = 0; i < wave2.length; i++) {
      wave2[i].classList.remove("active");
    }
    e.classList.add("active");

    textInner2.style.transform = `translateX(-${i}00%)`;
    img2.style.transform = `translateX(-${i}00%)`;
    count2 = i;
  });
});

wave4.forEach((e, i) => {
  e.addEventListener("click", () => {
    for (let i = 0; i < wave4.length; i++) {
      wave4[i].classList.remove("active");
    }
    e.classList.add("active");

    textInner4.style.transform = `translateX(-${i}00%)`;
    img4.style.transform = `translateX(-${i}00%)`;
    count2 = i;
  });
});

imgBackBtn1.addEventListener("click", (e) => {
  for (let i = 0; i < wave1.length; i++) {
    wave1[i].classList.remove("active");
  }
  switch (count1) {
    case 0:
      img1.style.transform = `translateX(-400%)`;
      textInner1.style.transform = `translateX(-400%)`;
      wave1[4].classList.add("active");
      count1 = 4;
      break;
    case 1:
      img1.style.transform = `translateX(0%)`;
      textInner1.style.transform = `translateX(0%)`;
      wave1[0].classList.add("active");
      count1--;
      break;
    case 2:
      img1.style.transform = `translateX(-100%)`;
      textInner1.style.transform = `translateX(-100%)`;
      wave1[1].classList.add("active");
      count1--;
      break;
    case 3:
      img1.style.transform = `translateX(-200%)`;
      textInner1.style.transform = `translateX(-200%)`;
      wave1[2].classList.add("active");
      count1--;
      break;
    case 4:
      img1.style.transform = `translateX(-300%)`;
      textInner1.style.transform = `translateX(-300%)`;
      wave1[3].classList.add("active");
      count1--;
      break;
  }
});
imgNextBtn1.addEventListener("click", (e) => {
  for (let i = 0; i < wave1.length; i++) {
    wave1[i].classList.remove("active");
  }
  switch (count1) {
    case 0:
      img1.style.transform = `translateX(-100%)`;
      textInner1.style.transform = `translateX(-100%)`;
      wave1[1].classList.add("active");
      count1++;
      break;
    case 1:
      img1.style.transform = `translateX(-200%)`;
      textInner1.style.transform = `translateX(-200%)`;
      wave1[2].classList.add("active");
      count1++;
      break;
    case 2:
      img1.style.transform = `translateX(-300%)`;
      textInner1.style.transform = `translateX(-300%)`;
      wave1[3].classList.add("active");
      count1++;
      break;
    case 3:
      img1.style.transform = `translateX(-400%)`;
      textInner1.style.transform = `translateX(-400%)`;
      wave1[4].classList.add("active");
      count1++;
      break;
    case 4:
      img1.style.transform = `translateX(0%)`;
      textInner1.style.transform = `translateX(0%)`;
      wave1[0].classList.add("active");
      count1 = 0;
      break;
  }
});

imgBackBtn2.addEventListener("click", (e) => {
  for (let i = 0; i < wave2.length; i++) {
    wave2[i].classList.remove("active");
  }
  switch (count2) {
    case 0:
      img2.style.transform = `translateX(-300%)`;
      textInner2.style.transform = `translateX(-300%)`;
      wave2[3].classList.add("active");
      count2 = 3;
      break;
    case 1:
      img2.style.transform = `translateX(0%)`;
      textInner2.style.transform = `translateX(0%)`;
      wave2[0].classList.add("active");
      count2--;
      break;
    case 2:
      img2.style.transform = `translateX(-100%)`;
      textInner2.style.transform = `translateX(-100%)`;
      wave2[1].classList.add("active");
      count2--;
      break;
    case 3:
      img2.style.transform = `translateX(-200%)`;
      textInner2.style.transform = `translateX(-200%)`;
      wave2[2].classList.add("active");
      count2--;
      break;
    case 4:
      img2.style.transform = `translateX(-300%)`;
      textInner2.style.transform = `translateX(-300%)`;
      wave2[3].classList.add("active");
      count2--;
      break;
  }
});
imgNextBtn2.addEventListener("click", (e) => {
  for (let i = 0; i < wave2.length; i++) {
    wave2[i].classList.remove("active");
  }
  switch (count2) {
    case 0:
      img2.style.transform = `translateX(-100%)`;
      textInner2.style.transform = `translateX(-100%)`;
      wave2[1].classList.add("active");
      count2++;
      break;
    case 1:
      img2.style.transform = `translateX(-200%)`;
      textInner2.style.transform = `translateX(-200%)`;
      wave2[2].classList.add("active");
      count2++;
      break;
    case 2:
      img2.style.transform = `translateX(-300%)`;
      textInner2.style.transform = `translateX(-300%)`;
      wave2[3].classList.add("active");
      count2++;
      break;
    case 3:
      img2.style.transform = `translateX(0%)`;
      textInner2.style.transform = `translateX(0%)`;
      wave2[0].classList.add("active");
      count2 = 0;
      break;
  }
});

imgBackBtn4.addEventListener("click", (e) => {
  for (let i = 0; i < wave4.length; i++) {
    wave4[i].classList.remove("active");
  }
  switch (count2) {
    case 0:
      img4.style.transform = `translateX(-300%)`;
      textInner4.style.transform = `translateX(-300%)`;
      wave4[3].classList.add("active");
      count2 = 3;
      break;
    case 1:
      img4.style.transform = `translateX(0%)`;
      textInner4.style.transform = `translateX(0%)`;
      wave4[0].classList.add("active");
      count2--;
      break;
    case 2:
      img4.style.transform = `translateX(-100%)`;
      textInner4.style.transform = `translateX(-100%)`;
      wave4[1].classList.add("active");
      count2--;
      break;
    case 3:
      img4.style.transform = `translateX(-200%)`;
      textInner4.style.transform = `translateX(-200%)`;
      wave4[2].classList.add("active");
      count2--;
      break;
    case 4:
      img4.style.transform = `translateX(-300%)`;
      textInner4.style.transform = `translateX(-300%)`;
      wave4[3].classList.add("active");
      count2--;
      break;
  }
});
imgNextBtn4.addEventListener("click", (e) => {
  for (let i = 0; i < wave4.length; i++) {
    wave4[i].classList.remove("active");
  }
  switch (count2) {
    case 0:
      img4.style.transform = `translateX(-100%)`;
      textInner4.style.transform = `translateX(-100%)`;
      wave4[1].classList.add("active");
      count2++;
      break;
    case 1:
      img4.style.transform = `translateX(-200%)`;
      textInner4.style.transform = `translateX(-200%)`;
      wave4[2].classList.add("active");
      count2++;
      break;
    case 2:
      img4.style.transform = `translateX(-300%)`;
      textInner4.style.transform = `translateX(-300%)`;
      wave4[3].classList.add("active");
      count2++;
      break;
    case 3:
      img4.style.transform = `translateX(0%)`;
      textInner4.style.transform = `translateX(0%)`;
      wave4[0].classList.add("active");
      count2 = 0;
      break;
  }
});

let openPopup = document.querySelector("#openPopup");
let closePopup = document.querySelector("#closePopup");
let popupMenu = document.querySelector("#popupMenu");

let body = document.body;

let scrollOff = () => {
  window.scrollTo(0, 0);
};

openPopup.onclick = () => {
  popupMenu.classList.add("active");
  window.addEventListener("scroll", scrollOff);
};

closePopup.onclick = () => {
  popupMenu.classList.remove("active");
  window.removeEventListener("scroll", scrollOff);
};
