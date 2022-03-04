
const Student = {
    FirstName: "Oscar",
    LastName: "Cardenas",
    Email: "oscarfish1000@gmail.com",
    PIDM: 1093846,
    School: "UIW",
    GradeLevel: "Senior",
    Image: "OC.jpg",
    ImageAlt: "Image of Oscar Cardenas"
};

const content = `
    <h1 class="FullName">${Student.FirstName} ${Student.LastName}</h1>
    <ul class="StudentInfo">
      <li class="email">Email:<span> ${
        Student.Email
      }l</span></li>
      <li class="ID">ID:<span> ${
        Student.PIDM
      }</span></li>
      <li class="School">School:<span> ${
        Student.School
      }</span></li>
      <li class="GradeLvl">Grade Level:<span> ${
        Student.GradeLevel
      } </span></li>
    </ul>  
`;

const addFigure = (dataObj) => {
    let newFig = document.createElement("figure");
    let newImg = document.createElement("img");
    newFig.setAttribute("src", dataObj.Image);
    newImg.setAttribute("alt",dataObj.ImageAlt);
    newFig.setAttribute("style",'margin-right: 10%;');
    newFig.append(newImg);
    return newFig;
    };

const createArticle = (Student) =>  {
    let newElement = document.createElement("article");
    newElement.innerHTML = content;
    newElement.prepend(addFigure(Student));
    return newElement;
  };


document.querySelector("main").append(createArticle(Student));