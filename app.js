const navDialog = document.getElementById('nav-dialog');

function handleMenu(){
    navDialog.classList.toggle('hidden');
}

// function setupIntersectionObserver(element , isLTR , speed){

//     const intersectionCallback = (entries) => {
//         const isintersecting = entries[0].isIntersecting;
        
//         if(isintersecting){
//             document.addEventListener('scroll' , scrollHandler)
//         }
//         else{
//             document.removeEventListener('scroll' , scrollHandler)
//         }
//     }
//     const intersectionObserver = new IntersectionObserver(intersectionCallback);

//     intersectionObserver.observe(element);

//     let initialTranslateLTR = -48*4;
//     let initialTranslateRTL = 36*4;

//     const scrollHandler = () => {
//         const translateX = (window.innerHeight - element.getBoundingClientRect().top) * speed ;

//         console.log(translateX);
        

//         let totalTranslate = 0;
//         if(isLTR){
//             totalTranslate = translateX + initialTranslateLTR
//         }
//         else{
//             totalTranslate = -(translateX + initialTranslateRTL)
//         }
//         element.style.transform = `translateX(${totalTranslate}px)`;
//     }

// }

// const line1 = document.querySelector('#line-1');
// const line2 = document.querySelector('#line-2');
// const line3 = document.querySelector('#line-3');

// setupIntersectionObserver(line1 , true , 0.15);
// setupIntersectionObserver(line2 , false , 0.15);
// setupIntersectionObserver(line3 , true , 0.15);




function setupIntersectionObserver(element , isLTR , speed){

    let initialTranslateLTR = -48 * 4;
    let initialTranslateRTL = 36 * 4;

    function scrollHandler(){
        const translateX = (window.innerHeight - element.getBoundingClientRect().top) * speed;

        let totalTranslate = 0;
        if(isLTR){
            totalTranslate = translateX + initialTranslateLTR;
        }
        else{
            totalTranslate = -(translateX + initialTranslateRTL);
        }

        element.style.transform = `translateX(${totalTranslate}px)`
    }


    function intersectionCallback(entries){
        const isIntersecting = entries[0].isIntersecting;
        
        if(isIntersecting){
            document.addEventListener('scroll' , scrollHandler)
        }
        else{
            document.removeEventListener('scroll' , scrollHandler)
        }
    }

    const inersectionObserver = new IntersectionObserver(intersectionCallback);

    inersectionObserver.observe(element);
}
const line1 = document.querySelector('#line-1');
const line2 = document.querySelector('#line-2');
const line3 = document.querySelector('#line-3');
const line4 = document.querySelector('#line-4');

setupIntersectionObserver(line1 , true , .15);
setupIntersectionObserver(line2 , false , .15);
setupIntersectionObserver(line3 , true , .15);
setupIntersectionObserver(line4 , true , .8);



const dt = document.querySelectorAll('.dt');
const dtArr = Object.values(dt);
const faqs = document.querySelectorAll('.faqs');
const faqsArr = Object.values(faqs);

faqsArr.forEach((value) => {

    const p = value.querySelector('p');

    value.addEventListener('click' , () => {
        p.classList.toggle('hidden');
    })
    
}) 

dtArr.forEach((value) => {
    const i = value.childNodes[3];

    value.addEventListener('click' , () => {
        i.classList.toggle('-rotate-180')
        
    })  
})


