 let search = document.QuerySelsctor('.search-box');

document.querySelectoruerySelsctor("#search-icon").onclick = () => {
         search.classlist.toggle('active');
         navbar.classlist.remove('active');

}
let navbar = document.QuerySelsctor('.navbar');

document.querySelectoruerySelsctor("#menu-icon").onclick = () => {
         navbar.classlist.toggle('active');
         search.classlist.remove('active');
        
}
Window.onscroll = () => {
       navbar.classlist.remove('active');
       search.classlist.remove('active');
}



let header = document. querySelector('header');

window. addEventListener('scroll' , () => { 
          header.classList.toggle('shadow', window.scrollY > 0);
});