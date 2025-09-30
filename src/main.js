fetch ('https://pokeapi.co/api/v2/ability/7/')
.then (response => response.json())
.then (data => console.log(data))
.catch (error => console.error('Error:', error));

