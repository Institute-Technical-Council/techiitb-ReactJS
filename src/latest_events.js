

const latest_events = [

    {
        'id': 1,
        'name': "Founders' Garage",
        'description': "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        'image': "https://scontent.fbom3-2.fna.fbcdn.net/v/t1.0-9/123426042_3793850210627895_2758146832040547858_n.jpg?_nc_cat=105&ccb=2&_nc_sid=730e14&_nc_ohc=rVP9Xdntvc4AX_vOYn9&_nc_ht=scontent.fbom3-2.fna&oh=1ad80ef748d4effb618ebd5faf8298ca&oe=5FF23223",
        'date': '20th December',
        'time': '10.00 - 11.00 PM',
        'register_link':"www.tech-iitb.org/",
        'class': 'active'//keep it for first item
    },
    {
        'id':2,
        'name': "X Mas celebration",
        'description': "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        'image': "https://via.placeholder.com/728x480.png",
        'date': '25-12-2020',
        'time': '20:10',
        'register_link':"www.tech-iitb.org/",
        'class':''//keep it empty
    },
];

console.log("Accessed")

var img = new Image();

img.src = "https://scontent.fbom3-2.fna.fbcdn.net/v/t1.0-9/123426042_3793850210627895_2758146832040547858_n.jpg?_nc_cat=105&ccb=2&_nc_sid=730e14&_nc_ohc=rVP9Xdntvc4AX_vOYn9&_nc_ht=scontent.fbom3-2.fna&oh=1ad80ef748d4effb618ebd5faf8298ca&oe=5FF23223";

console.log(img.height);

console.log(img.width);

export default latest_events;