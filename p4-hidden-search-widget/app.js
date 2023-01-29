const icon = document.getElementById('icon');
const searchDiv = document.getElementById('expand');
const input = document.getElementById('search');

icon.addEventListener('click', () => {
    const classList = searchDiv.classList;
    if (classList.contains('expand')) {
        classList.remove('expand');
        input.placeholder = '';
    } else {
        classList.add('expand');
        input.placeholder = 'Enter text...';
    }
});