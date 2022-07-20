import { options } from "./options.js";

const generate = () => {
  const form = options.form[Math.floor(Math.random() * options.form.length)];

  const weapon =
    options.weapon[Math.floor(Math.random() * options.weapon.length)];

  const element =
    options.element[Math.floor(Math.random() * options.element.length)];

  const animal =
    options.animal[Math.floor(Math.random() * options.animal.length)];

  const specialBodyPart =
    options.specialBodyPart[
      Math.floor(Math.random() * options.specialBodyPart.length)
    ];

  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  const randomColor1 = Math.floor(Math.random() * 16777215).toString(16);
  const randomColor2 = Math.floor(Math.random() * 16777215).toString(16);

  const occupation =
    options.occupation[Math.floor(Math.random() * options.occupation.length)];

  const location =
    options.location[Math.floor(Math.random() * options.location.length)];

  const misc = options.misc[Math.floor(Math.random() * options.misc.length)];

  const posPersonality =
    options.posPersonality[
      Math.floor(Math.random() * options.posPersonality.length)
    ];
  
  const posPersonality2 =
    options.posPersonality[
      Math.floor(Math.random() * options.posPersonality.length)
    ];

  const nuePersonality =
    options.nuePersonality[
      Math.floor(Math.random() * options.nuePersonality.length)
    ];

  const negPersonality =
    options.negPersonality[
      Math.floor(Math.random() * options.negPersonality.length)
    ];
  
    const nuePersonality2 =
    options.nuePersonality[
      Math.floor(Math.random() * options.nuePersonality.length)
    ];

  const negPersonality2 =
    options.negPersonality[
      Math.floor(Math.random() * options.negPersonality.length)
    ];

    const likes =
    options.likes[
      Math.floor(Math.random() * options.likes.length)
    ];
    const likes2 =
    options.likes[
      Math.floor(Math.random() * options.likes.length)
    ];
    const likes3 =
    options.likes[
      Math.floor(Math.random() * options.likes.length)
    ];
    const likes4 =
    options.likes[
      Math.floor(Math.random() * options.likes.length)
    ];
    const likes5 =
    options.likes[
      Math.floor(Math.random() * options.likes.length)
    ];
    const likes6 =
    options.likes[
      Math.floor(Math.random() * options.likes.length)
    ];

  const trope = options.trope[Math.floor(Math.random() * options.trope.length)];

  document.querySelector(".formResult").innerHTML = form;
  document.querySelector(".weaponResult").innerHTML = weapon;
  document.querySelector(".elementResult").innerHTML = element;
  document.querySelector(".animalResult").innerHTML = animal;
  document.querySelector(".specialBodyPartResult").innerHTML = specialBodyPart;
  document.querySelector(".occupationResult").innerHTML = occupation;
  document.querySelector(".locationResult").innerHTML = location;
  document.querySelector(".miscResult").innerHTML = misc;
  document.querySelector(".posPersonalityResult").innerHTML = posPersonality;
    document.querySelector(".posPersonalityResult2").innerHTML = posPersonality2;
  document.querySelector(".nuePersonalityResult").innerHTML = nuePersonality;
    document.querySelector(".nuePersonalityResult2").innerHTML = nuePersonality2;
  document.querySelector(".negPersonalityResult").innerHTML = negPersonality;
    document.querySelector(".negPersonalityResult2").innerHTML = negPersonality2;
  document.querySelector(".tropeResult").innerHTML = trope;
  

  document.querySelector(".colorResult").style.backgroundColor =
    "#" + randomColor;
  document.querySelector(".colorResult").innerHTML = "#" + randomColor;
  document.querySelector(".colorResult1").style.backgroundColor =
    "#" + randomColor1;
  document.querySelector(".colorResult1").innerHTML = "#" + randomColor1;
  document.querySelector(".colorResult2").style.backgroundColor =
    "#" + randomColor2;
  document.querySelector(".colorResult2").innerHTML = "#" + randomColor2;


  document.querySelector(".likesResult").innerHTML = likes;
  document.querySelector(".likesResult2").innerHTML = likes2;
  document.querySelector(".likesResult3").innerHTML = likes3;
  document.querySelector(".likesResult4").innerHTML = likes4;
  document.querySelector(".likesResult5").innerHTML = likes5;
  document.querySelector(".likesResult6").innerHTML = likes6;
};

document.querySelector("button").addEventListener("click", generate);
