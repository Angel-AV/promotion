

const faqs = document.querySelectorAll(".faq")
const table = document.querySelector('.x');
const tableSecond = document.querySelector('.y');


const act = document.querySelector(".acting")
const tbAccord = document.querySelector(".accord")



faqs.forEach(function(faq){
    faq.addEventListener("click", function( ) {
        this.classList.toggle("active")
        if(faq.classList.contains('active') ) {
            if(faq.classList.contains('faq-dayly')) {
                table.classList.add('show-table')
            } else {
                tableSecond.classList.add('show-table')
            }
        }else {
            if(faq.classList.contains('faq-dayly')) {
                table.classList.remove('show-table')
            } else {
                tableSecond.classList.remove('show-table')
            }
        }
    })
})


act.addEventListener("click", () =>{
    act.classList.toggle("active")

    if(act.classList.contains("active")) {
        tbAccord.classList.add("open-table")
    }else{
        tbAccord.classList.remove("open-table")
    }
})





$('.carousel-container').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
     