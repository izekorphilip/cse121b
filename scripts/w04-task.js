/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Philip Izekor",
    photo: 'images/myphoto.jpg',
    favoriteFoods: ["Beans", 
        "Rice", 
        "Chichen",
        "Egg Sauce", 
        "Shawama", 
        "Pizza",
        "menlo soup"
    ],
    hobbies: ['Reading',
        'Typing', 'Football',
        'filming', 
        'Video Editing', 
        'scripting'
    ],
    placesLived: [],
};


/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push( 
    {
    place: 'Benin City, Nigeria',
    length: '25 years',
    },
    {
    place: 'Abuja',
    length: '2 month'
}
);


/* DOM Manipulation - Output */
document.querySelector('#name').textContent = myProfile.name;
/* Name */

/* Photo with attributes */
document.querySelector('#photo').setAttribute("src", myProfile.photo);
document.querySelector('#photo').setAttribute("alt", `This the image of ${myProfile.name}`);

/* Favorite Foods List*/

myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});
/* Hobbies List */
myProfile.hobbies.forEach(hobbies => {
    let li = document.createElement('li');
    li.textContent = hobbies;
    document.querySelector('#hobbies').appendChild(li);
});

/* Places Lived DataList */

myProfile.placesLived.forEach(places =>{
    let dt = document.createElement('dt');
    let dd = document.createElement('dd');
    dt.textContent = places.place;
    dd.textContent = places.length;
    document.querySelector('#places-lived').appendChild(dt);
    document.querySelector('#places-lived').appendChild(dd);
})
