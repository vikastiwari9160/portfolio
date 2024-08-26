const expertiseText = document.querySelector('.expertise');
const expertises = ['Full Stack Developer', 'Backend Developer', 'BlockChain Developer', 'Software Engineer', "Challenge Resolver"];
let index = 0;

function changeExpertise() {
    expertiseText.textContent = expertises[index];
    index = (index + 1) % expertises.length;
}

setInterval(changeExpertise, 3000);
