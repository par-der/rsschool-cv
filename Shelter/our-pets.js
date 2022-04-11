const pets = [
    {
      "name": "Jennifer",
      "img": "../../assets/images/our-friends/pets-jennifer.png",
      "type": "Dog",
      "breed": "Labrador",
      "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
      "age": "2 months",
      "inoculations": ["none"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Sophia",
      "img": "../../assets/images/our-friends/pets-sophia.jpg",
      "type": "Dog",
      "breed": "Shih tzu",
      "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
      "age": "1 month",
      "inoculations": ["parvovirus"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Woody",
      "img": "../../assets/images/our-friends/pets-woody.png",
      "type": "Dog",
      "breed": "Golden Retriever",
      "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
      "age": "3 years 6 months",
      "inoculations": ["adenovirus", "distemper"],
      "diseases": ["right back leg mobility reduced"],
      "parasites": ["none"]
    },
    {
      "name": "Scarlett",
      "img": "../../assets/images/our-friends/pets-scarlett.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
      "age": "3 months",
      "inoculations": ["parainfluenza"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Katrine",
      "img": "../../assets/images/our-friends/pets-katrine.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
      "age": "6 months",
      "inoculations": ["panleukopenia"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Timmy",
      "img": "../../assets/images/our-friends/pets-timmy.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
      "age": "2 years 3 months",
      "inoculations": ["calicivirus", "viral rhinotracheitis"],
      "diseases": ["kidney stones"],
      "parasites": ["none"]
    },
    {
      "name": "Freddie",
      "img": "../../assets/images/our-friends/pets-freddie.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
      "age": "2 months",
      "inoculations": ["rabies"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Charly",
      "img": "../../assets/images/our-friends/pets-charly.jpg",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
      "age": "8 years",
      "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
      "diseases": ["deafness", "blindness"],
      "parasites": ["lice", "fleas"]
    }
  ]

const hamburgerIcon = document.querySelector('.hamburger');
const navigation = document.querySelector('.nav__list');
const navItems = document.querySelectorAll('.nav__item');
const backdrop = document.querySelector('.backdrop');

const petsContainer = document.querySelector('.pets');
const prevBtn = document.querySelector('.button_prev');
const nextBtn = document.querySelector('.button_next');

const modalWindow = document.querySelector('.modal');
const modalWindowCloseBtn = document.querySelector('.modal__close-button');

// adaptive menu creation

const closeHamburgerMenu = () => {
    hamburgerIcon.classList.remove('active');
    navigation.classList.remove('adaptive-menu');
    backdrop.classList.remove('active');
};

const toggleNavLinksTheme = () => {
    navItems.forEach(item => {
        item.classList.toggle('nav__item_dark');
        item.classList.toggle('nav__item_light');
        if (item.classList.contains('nav__item_light_active') || item.classList.contains('nav__item_dark_active')) {
            item.classList.toggle('nav__item_dark_active');
            item.classList.toggle('nav__item_light_active');
        }
    })
}

hamburgerIcon.addEventListener('click', () => {
    hamburgerIcon.classList.toggle('active');
    navigation.classList.toggle('adaptive-menu');
    backdrop.classList.toggle('active');
    toggleNavLinksTheme();
}); 

navigation.addEventListener('click', (event) => {
    if (event.target.classList.contains('nav__link')) {
        closeHamburgerMenu();
        toggleNavLinksTheme();
    }
});

backdrop.addEventListener('click', () => {
    closeHamburgerMenu();
    toggleNavLinksTheme();
});

// pets creation

let uniquePetIndexes = [4, 0, 2, 1, 5, 7, 3, 6];

const createPetBlock = (pet) => {
    const petBlock = document.createElement('div');
    petBlock.classList.add('pet');
    petsContainer.append(petBlock);

    const petCover = document.createElement('div');
    petCover.classList.add('pet__cover');
    petBlock.append(petCover);

    const petImg = document.createElement('img');
    petImg.classList.add('pet__img');
    petImg.src = pet['img'];
    petImg.alt = pet['name'];
    petCover.append(petImg);

    const petContent = document.createElement('div');
    petContent.classList.add('pet__content');
    petBlock.append(petContent);

    const petTitle = document.createElement('h3');
    petTitle.textContent = pet['name'];
    petContent.append(petTitle);

    const petButton = document.createElement('button');
    petButton.classList.add('button', 'button-oval', 'button-bordered');
    petButton.textContent = 'Learn more';
    petContent.append(petButton);

    petBlock.setAttribute('pet-id', pets.indexOf(pet));
    return petBlock;
}

const updatePets = () => {
    petsContainer.innerHTML = '';

    uniquePetIndexes.forEach(index => createPetBlock(pets[index]));
}



updatePets();

prevBtn.addEventListener('click', updatePets);
nextBtn.addEventListener('click', updatePets);

// modal window

petsContainer.addEventListener('click', (e) => {
    if (e.target.closest('.pet')) {
        createModalWindow(e.target.closest('.pet'));
        openModalWindow();
    }
})

modalWindow.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        closeModalWindow();
    }
})

const createModalWindow = (pet) => {
    const petId = pet.getAttribute('pet-id');
    const modalElements = document.querySelectorAll('[data-modal]');
    const modalImg = document.querySelector('.modal__img');
    modalImg.src = pets[petId]['img'];

    modalElements.forEach((elem) => {
        let data = pets[petId][elem.dataset.modal];

        if (Array.isArray(data)) {
            data = data.join(', ');
        }

        elem.textContent = data;
    })
}

const openModalWindow = () => {
    modalWindow.classList.add('active');
    backdrop.classList.add('active');
}

const closeModalWindow = () => {
    modalWindow.classList.remove('active');
    backdrop.classList.remove('active');
}

modalWindowCloseBtn.addEventListener('click', closeModalWindow);

