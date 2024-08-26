const expertiseText = document.querySelector('.expertise');
const expertises = ['Full Stack Developer', 'Backend Developer', 'Software Engineer', 'BlockChain Developer', "Challenge Resolver"];
let index = 0;

function changeExpertise() {
    expertiseText.textContent = expertises[index];
    index = (index + 1) % expertises.length;
}

setInterval(changeExpertise, 2000);