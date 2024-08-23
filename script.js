const text="REALITY";
let chotu_text=document.getElementById("chotu_text");
let i=0;
function animate(){
   
      if(i<text.length){
         chotu_text.textContent=chotu_text.textContent+text[i];
         i++;
         setTimeout(animate,250);
      }else{
            setTimeout(() => {
                chotu_text.textContent = "";
                i = 0;
                animate();
            }, 1000); 
      }
     
   }
animate()
let counts=document.querySelectorAll(".count1");
let counts2=document.querySelectorAll(".count2");
let counts3=document.querySelectorAll(".count3");
let counts4=document.querySelectorAll(".count4");



// let i=0;

   counts.forEach((counter)=>{
      let count=0;
      let target=90;
      const updatecount=()=>{
        if(count<target){
            count=count+1;
            counter.innerText=`${count}%`;
            setTimeout(updatecount,50);
   }
};
  updatecount();
});
counts2.forEach((counter2)=>{
   let count2=0;
   let target2=65;
   const updatecount2=()=>{
     if(count2<target2){
         count2=count2+1;
         counter2.innerText=`${count2}%`;
         setTimeout(updatecount2,50);
}
};
updatecount2();
});
counts3.forEach((counter3)=>{
   let count3=0;
   let target3=75;
   const updatecount3=()=>{
     if(count3<target3){
         count3=count3+1;
         counter3.innerText=`${count3}%`;
         setTimeout(updatecount3,35);
}
};
updatecount3();
});
counts4.forEach((counter4)=>{
   let count4=0;
   let target4=80;
   const updatecount4=()=>{
     if(count4<target4){
         count4=count4+1;
         counter4.innerText=`${count4}%`;
         setTimeout(updatecount4,50);
}
};
updatecount4();
});
document.addEventListener("DOMContentLoaded", () => {
const animElements2 = document.querySelectorAll(".count_icon");
const animElements3 =document.querySelectorAll(".left_card");
const animElements4 =document.querySelectorAll(".right_card");
const animElements5 =document.querySelectorAll(".card1_container");
const animElements6 =document.querySelectorAll(".card2_container");
const animElements7 =document.querySelectorAll(".card3_container");





const animElements = document.querySelectorAll(".animate");
const observer = new IntersectionObserver((entries) => {
   entries.forEach(entry => {
     if (entry.isIntersecting) {
       entry.target.classList.add("show");
     }
   });
 }, { threshold: 0.1 });
 animElements.forEach(el => observer.observe(el));
 animElements2.forEach(el=>observer.observe(el));
 animElements3.forEach(el=>observer.observe(el));
 animElements4.forEach(el=>observer.observe(el));
});
