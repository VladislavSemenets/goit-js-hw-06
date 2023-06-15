const categoriesList = document.querySelectorAll('ul#categories li.item');
console.log(`Number of categories: ${categoriesList.length}`);
categoriesList.forEach((category) => {
    const categoryName = category.querySelector('h2').textContent;
    const categoryItem = category.querySelectorAll('li').length - 1;
    console.log(`Category: ${categoryName}`);
    console.log(`Elements : ${categoryItem}`);
})