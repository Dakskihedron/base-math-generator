function toggleDark() {
    document.body.classList.toggle('dark');
}

function checkDark() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.classList.toggle('dark');
    } 
}