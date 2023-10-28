function openMenu() {
  document.getElementById("myMenu").style.height = "100%";
}
function closeMenu() {
  document.getElementById("myMenu").style.height = "0%";
}

  setTimeout(function() {
    document.querySelector('.loader-container').style.display = 'none';
    document.querySelector('.main-content').classList.add('visible');
    document.body.style.overflow = "auto"
    }, 2000);