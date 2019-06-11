fetch('https://fe-apps.herokuapp.com/api/v1/whateverly/1811/lizAsbell/smoothies')
  .then(response => response.json())
  .then(data => data.smoothies)
  .then(smoothies => appendSmoothies(smoothies))

function appendSmoothies(smoothies) {
  smoothies.forEach(function(smoothie) {
    $('article').append(`<p class="name">${smoothie.name}</p>`);
    $('article').append(`<p>Ingredients: ${smoothie.ingredients} </p>`);
    $('article').append(`<p>Recipe: ${smoothie.recipe}</p>`);
    $('article').append(`<p class="servings">Servings: ${smoothie.servings}`)
  })
}
