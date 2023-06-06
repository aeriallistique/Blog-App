
document.addEventListener('DOMContentLoaded', ()=>{
  const allButtons = document.querySelector('.searchBtn');
  const searchBar = document.querySelector('.searchBar');
  const searchInput = document.getElementById('searchInput');
  const searchClose = document.getElementById('searchClose');

  if(allButtons){
    allButtons.addEventListener('click', function(){
      searchBar.style.visibility = "visible";
      searchBar.classList.add('open');
      this.setAttribute('aria-expanded', 'true');
      searchInput.focus();
    })
  } 
  

if(searchClose){
  searchClose.addEventListener('click', function(){
    searchBar.style.visibility = "hidden";
    searchBar.classList.remove('open');
    this.setAttribute('aria-expanded', 'false');
  })
}

})