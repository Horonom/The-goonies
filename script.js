$(document).ready(function() {
    $(window).scroll(function(event) {
        console.log("+")
        let s=$(this).scrollTop();
        let w=$(this).outerWidth();
        let h=$('.content').outerHeight();
        let h_b=$('.parallax').outerHeight();
        let p = s/h*100;
        let p_b = s/h_b*100;
        let o = 1-1/100*p_b;

        let content_bg_opacity = 1/100*p_b

        let rotate = 90 - (90 * p_b) / 400;

        let height = h / 0.8;


        let translate = p_b / -3;

        let translate_for_artefacts = p_b / -1;
 
        

        let z_1=1+(w/10000*p_b)
        $('.parallax__fog').css('transform', 'scale('+z_1+')')
        $('.parallax__fog').css('opacity', o);
        
        let z_5=1+(w/2000000*p)
        $('.sigma').css('transform', 'scale('+z_5+')')


        $('.border_line').css('height', height + 'px');



        

      
        
        $('.animation_part').css('transform', 'rotate('+rotate+'deg) translateY('+translate_for_artefacts+'px)');
       

        $('.people').css('transform', 'translateY('+translate+'px)');
        
        $('.div__title').css('opacity', o);


        let z_2=1+(w/5000000*p)
        $('.parallax_mountain1').css('transform', 'scale('+z_2+')')

        let hr=w/2000*p_b;
        let z_3=1+(w/100000*p_b)
        $('.parallax_mountain2').css('transform', 'translate3d('+hr+'px,0,0) scale('+z_3+')')

        let hr_1=w/1500*p_b;
        let z_4=1+(w/50000*p_b)
        $('.parallax_mountain3').css('transform', 'translate3d('+hr_1+'px,0,0) scale('+z_4+')')

        $('.black_bg').css('opacity', content_bg_opacity);
        
      
        
       
       
        
      
        
    });
});



const observer = new IntersectionObserver ((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }

    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


const chunk_img = document.getElementById('image_position_center')
const top_img = document.getElementById('top_img')
const last_img = document.getElementById('last_img')
const scared_goonies = document.getElementById('scared_goonies')
const gallary_mountain = document.getElementById('gallary_mountain')
const img_near_to_chunk = document.getElementById('img_near_to_chunk')



const h1_gallary = document.querySelector('.h1_gallary')
const gallary_button = document.querySelector('.btn')
const x = document.querySelector('.x')

gallary_button.addEventListener('click', function() {
   chunk_img.style.scale = '1.9'
   chunk_img.style.transform = "translate(100px)"

   img_near_to_chunk.style.scale = '1.6'
   img_near_to_chunk.style.transform = 'translate(35px, 140px)'
   
   top_img.style.scale = '4'
   top_img.style.transform = 'translate(40px, 59px)'

   gallary_mountain.style.scale = '1.5'
   gallary_mountain.style.transform = 'translate(5px, 150px)'
  

   scared_goonies.style.scale = '3'
   scared_goonies.style.transform = 'translate(39px, 98px)'
   scared_goonies.style.width = '118px'

   last_img.style.scale = '3'
   last_img.style.transform = 'translate(-79px, 40px)'

   gallary_button.style.opacity = '0' 

   h1_gallary.style.opacity = '0' 

   x.style.display = 'block';
})
x.addEventListener('click', function() {
    chunk_img.style.scale = '1';
    chunk_img.style.transform = "translate(0px)";
 
    img_near_to_chunk.style.scale = '1';
    img_near_to_chunk.style.transform = 'translate(0px, 0px)';
    
    top_img.style.scale = '1';
    top_img.style.transform = 'translate(0px, 0px)';
 
    gallary_mountain.style.scale = '1';
    gallary_mountain.style.transform = 'translate(0px, 0px)';
   
 
    scared_goonies.style.scale = '1';
    scared_goonies.style.transform = 'translate(0px, 0px)';
    scared_goonies.style.width = '100px';
 
    last_img.style.scale = '1';
    last_img.style.transform = 'translate(0px, 0px)';
 
    gallary_button.style.opacity = '1';
 
    h1_gallary.style.opacity = '1';

    x.style.display = 'none';
})
const links = document.querySelectorAll('.tab');

links.forEach((item) => {
      item.addEventListener('click', (e) => {
            e.preventDefault();

            let id = item.getAttribute('href');
            let formattierID = id.substring(1);
            let section = document.getElementById(formattierID);

            section.scrollIntoView({
                  behavior: 'smooth',
            });
      });
});
const skull = document.querySelector('.skull')
const map_bg = document.querySelector('.map_bg')

const main = document.querySelector('.main')

const header = document.querySelector('.header')

const footer = document.querySelector('.footer')

const circle = document.querySelector('.circle')

const circle_1 = document.querySelector('.circle_1')

const circle_2 = document.querySelector('.circle_2')

const modal_window_2  = document.querySelector('.modal_window_2')

const modal_window = document.querySelector('.modal_window')

const modal_window_1 = document.querySelector('.modal_window_1')

const map = document.getElementById('map')

const close_map = document.querySelector('.close_map')



skull.addEventListener('click', function() {
    main.style.display = 'none';
    header.style.display = 'none';
    footer.style.display = 'none';


    map_bg.style.width = '100%'
    map.style.display = 'block'
    
    

})
close_map.addEventListener('click', function() {
    main.style.display = 'block';
    header.style.display = 'block';
    footer.style.display = 'block';


    map_bg.style.width = '0%'
    map.style.display = 'none'
    
    

})

circle.addEventListener("mouseover", function() {
    setTimeout(() => {
        circle_1.style.display = 'block';
      }, "1000");

    

    modal_window.style.width = '200px'
    modal_window.style.opacity = '1'

})
circle.addEventListener("mouseout", function() {
    modal_window.style.width = '0px'
    modal_window.style.opacity = '0'
})
circle_1.addEventListener("mouseover", function () {
    setTimeout(() => {
        circle_2.style.display = 'block';
      }, "1000");

    modal_window_1.style.width = '200px'
    modal_window_1.style.opacity = '1'
})
circle_1.addEventListener("mouseout", function() {
    modal_window_1.style.width = '0px'
    modal_window_1.style.opacity = '0'
})
circle_2.addEventListener("mouseover", function() {
    modal_window_2.style.width = '200px'
    modal_window_2.style.opacity = '1'
})
circle_2.addEventListener("mouseout", function() {
    modal_window_2.style.width = '0px'
    modal_window_2.style.opacity = '0'
})

const chunk_video = document.getElementById('chunk');
const video = document.getElementById('myVideo')

chunk_video.addEventListener('click', function() {
    main.style.display = 'none';
    header.style.display = 'none';
    footer.style.display = 'none';

    video.style.display = 'block'

})
