const title =document.querySelector(`title`);

const CLICKED_CLASS = `clicked`;

function handleClicked() {
  const currentClass = title.className;
  if(currentClass !== CLICKED_CLASS) {
    title.className = CLICKED_CLASS;
  } else {
    title.className = "";
  }

};
for(let j=5; i>=1; j--;){
  console.log(' '.reapeat(5 - j)+'*'.repeat(j));
}