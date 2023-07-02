/* const view = document.querySelector("#view2");
view2.style.display = "flex";
const h2 = view.querySelector("h2");

const doSomething = () => {
  alert("doing something");
} */

//h2.addEventListener("click", doSomething, false);
//h2.removeEventListener("click", doSomething, false);

/* h2.addEventListener("click", (event) => {
    console.log(event.target);
    event.target.textContent = "Clicked"
}) */

document.addEventListener("readystatechange", (event) => {
    if (event.target.readyState === "complete"){
        console.log("readyState: complete");
        initApp();
    }
})

const initApp = () => {
    const view = document.querySelector("#view2");
    const h2 = view.querySelector("h2");
    view.style.display = "flex";

    view.addEventListener("click", (event) => {
        view.classList.toggle("darkblue")
    }, false) // if true the events propagates outside to inside

    h2.addEventListener("click", (event) => {
        //h2.classList.toggle("black")
        const myText = event.target.textContent;
        myText === "My 2nd View"
        ? (event.target.textContent = "Clicked")
        : (event.target.textContent = "My 2nd View")
    }, false)

    const nav = document.querySelector("nav");

    nav.addEventListener("mouseover", (event) => {
        event.target.classList.add("height100");
    })
    nav.addEventListener("mouseout", (event) => {
        event.target.classList.remove("height100");
    })

    const view3 = document.querySelector("#view3");
    const myForm = view3.querySelector("#myForm");
    myForm.addEventListener("submit", (event) => {
        event.preventDefault();
        console.log("submit event");
    })
}