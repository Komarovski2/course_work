/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "230px"; //330
  document.getElementById("main").style.marginLeft = "230px"; //330
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

const aboutButton = document.querySelector('a[href="#About"]');
const aboutSection = document.getElementById('about-section');

aboutButton.addEventListener('click', function(event) {
  event.preventDefault(); // Запобігти стандартній поведінці посилання
  aboutSection.scrollIntoView({ behavior: 'smooth' }); // Плавно прокрутити до розділу
});















