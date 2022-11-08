const url = "https://jsonplaceholder.typicode.com/posts";

const article = {
   title: "New Title",
   content: "New Content"
};

// ваша реалізація 
(async ()=>{
let response = await fetch(url, {
  method: 'POST',
  body: JSON.stringify(article)
});
})();
