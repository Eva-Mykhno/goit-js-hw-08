const listCategories = document.querySelector('#categories');
const itemsCategories = document.querySelectorAll('.item');
console.log(`Number of categories: ${itemsCategories.length}`);

itemsCategories.forEach(item => {
  const titleCategories = item.querySelector('h2');
  console.log(`Category: ${titleCategories.textContent}`);

  const elementsCategories = item.querySelectorAll('li');
  console.log(`Elements: ${elementsCategories.length}`);
});
