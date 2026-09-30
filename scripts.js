
// const driftingThing = document.querySelector('.cloud');

// function restartAnimation() {
//   driftingThing.style.animation = 'none';
//   driftingThing.offsetHeight; // Force a reflow
//   driftingThing.style.animation = '';
// }

// window.addEventListener('resize', restartAnimation);


function displayImage(img, target, desc) {
    let imageframe = document.getElementById(target);
    imageframe.src = img.src;
    let description = document.getElementById(desc);
    description.innerHTML = img.alt;
    
}