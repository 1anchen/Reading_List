document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector('#new-item-form');

  const handleFormSubmit = function(event){
    event.preventDefault();
    console.dir(event.target.category.value);
    const title = event.target.title.value;
    const author = event.target.author.value;
    const category = event.target.category.value;

    const readingList = document.querySelector('#reading-list');
    const div = document.createElement('h3');
    readingList.appendChild(div);
    div.textContent = `${title} ${author} ${category}`;
    this.reset();//this = form = event.target


  }

  form.addEventListener('submit',handleFormSubmit);

  const deleteAll = document.querySelector('#delete-all');

  const handleDeleteAll = function(event){
    const readingList = document.querySelector('#reading-list');
    readingList.innerHTML = ''
}
  deleteAll.addEventListener('click',handleDeleteAll);

})
