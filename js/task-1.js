const handleCategories = () => {
  const categoriesAmount = document.querySelectorAll("li.item");
  console.log("Number of categories:", categoriesAmount.length);

  categoriesAmount.forEach((el) => {
    const numOfCategories = el.querySelectorAll("li");
    console.log("Category:", el.firstElementChild.textContent);
    console.log(numOfCategories.length);
  });
};

handleCategories();
