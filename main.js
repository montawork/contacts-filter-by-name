filterInput.addEventListener('keyup', filterName);

function filterName() {
  const filterInput = document.getElementById('filterInput');
  // Get Value of input
  let value = filterInput.value.toUpperCase();
  // get names ul
  const ul = document.getElementById('names');
  // get li > ul
  const li = Array.from(ul.querySelectorAll('li.collection-item'));
  // loop through collection items
  for (let i = 0; i < li.length; i++) {
    // let a = li[i].getElementsByTagName('a')[0];
    let a = li[i].textContent;
    if (a.toUpperCase().indexOf(value) > -1) {
      li[i].style.display = '';
    } else {
      li[i].style.display = 'none';
    }
  }
}
