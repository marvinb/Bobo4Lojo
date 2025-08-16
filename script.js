document.addEventListener('DOMContentLoaded', () => {
    const mainTitle = document.getElementById('main-title');

    // Change the color of the main title after a short delay
    setTimeout(() => {
        mainTitle.style.color = 'lightblue';
        console.log('Title color changed!');
    }, 2000); // 2000 milliseconds = 2 seconds
});
