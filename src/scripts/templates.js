import { projects, reviews } from "./data.js";

const templateProject = document.querySelector("[data-template='project-card']");
const projectsUl = document.querySelector("#projects ul");

const templateReview = document.querySelector("[data-template='review-card']");
const reviewsUl = document.querySelector("#reviews ul");

projects.forEach((project) => {
    const card = templateProject.content.cloneNode(true);
    const img = card.querySelector("img");
    img.src = project.image.src;
    img.alt = project.image.alt;
    const title = card.querySelector("h4");
    title.textContent = project.title;
    const description = card.querySelector("p");
    description.textContent = project.description;
    const tech = card.querySelectorAll("p")[1];
    tech.insertAdjacentHTML("beforeend", project.tech);
    const link = card.querySelector("a");
    link.href = project.link;
    
    projectsUl.appendChild(card);
});

reviews.forEach((review) => {
    const card = templateReview.content.cloneNode(true);
    const img = card.querySelector("img");
    img.src = review.image.src || "./assets/images/default-profile-img.png"; // Default image if none provided
    img.alt = review.image.alt;
    const name = card.querySelector("p");
    name.textContent = review.name;
    const reviewText = card.querySelector("blockquote");
    reviewText.textContent = review.text;

    reviewsUl.appendChild(card);
});
