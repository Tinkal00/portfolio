let skills=document.querySelector("#skills");
let education=document.querySelector("#education");
let projects=document.querySelector("#projects");
let skillsInfo=document.querySelector("#skills-info");
let educationInfo=document.querySelector("#education-info");
let projectsInfo=document.querySelector("#projects-info");

skills.addEventListener("click", ()=>{
       skillsInfo.style.visibility="visible";
       educationInfo.style.visibility="hidden";
       projectsInfo.style.visibility="hidden";
})
education.addEventListener("click", ()=>{
    educationInfo.style.visibility="visible";
    projectsInfo.style.visibility="hidden";
    skillsInfo.style.visibility="hidden";
})
projects.addEventListener("click", ()=>{
    projectsInfo.style.visibility="visible";
    educationInfo.style.visibility="hidden";
    skillsInfo.style.visibility="hidden";
})

document.getElementById("submit-btn").addEventListener("click", function(event) {
    event.preventDefault();
    document.querySelectorAll("#feedback input, #feedback textarea").forEach(field => {
        field.value = "";
    });
    location.reload(); 
});
