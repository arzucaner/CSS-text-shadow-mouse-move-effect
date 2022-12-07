const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 100; //100px

function shadow(e) {
  const width = hero.offsetWidth;
  const height = hero.offsetHeight;
  const { offsetWidth, offsetHeight: height } = hero;}

function shadow(e) {
   cost { offsetWidth: width, offsetHeight } = hero; 
   let { offsetX: x, offsetY: y } = e;

   console.log(x, y);

   console.log(this, e.target);
   if(this !== e.target) {
   }

   const xWalk = (x / width * walk) - (walk / 2);
   const yWalk = (y / height * walk) - (walk / 2);
   
   console.log(xWalk, yWalk);

}

hero.addEventListener('mousemove', shadow);