const steps = [...document.getElementsByClassName('step')];
const lines = [...document.getElementsByClassName('line')];
const previous = document.getElementById('previous');
const next = document.getElementById('next');

next.addEventListener('click', () => {
    const lastStep = steps.findLast(step => [...step.classList].includes('active'));
    const nextStep = steps.indexOf(lastStep) + 1;
    const lastLine = lines.findLast(line => [...line.classList].includes('active'));
    const nextLine = lines.indexOf(lastLine) + 1;

    if (nextStep < steps.length && nextLine < lines.length) {
        previous.disabled = false;
        lines[nextLine].classList.add('active');
        steps[nextStep].classList.add('active');
        steps[nextStep].innerHTML = '✔';
    }
    if (nextStep + 1 === steps.length) {
        next.disabled = true;
    }
});

previous.addEventListener('click', () => {
    const lastStep = steps.findLast(step => [...step.classList].includes('active'));
    const currentStep = steps.indexOf(lastStep);
    const lastLine = lines.findLast(line => [...line.classList].includes('active'));
    const currentLine = lines.indexOf(lastLine);

    if (currentStep > -1 && currentLine > -1) {
        next.disabled = false;
        lines[currentLine].classList.remove('active');
        steps[currentStep].classList.remove('active');
        steps[currentStep].innerHTML = currentStep + 1;
    }
    if (currentStep === 1) {
        previous.disabled = true;
    }
});