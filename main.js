document.addEventListener('DOMContentLoaded', function(){
    function darkMode(){
        const The_background = document.querySelector('.The_background');
        The_background.classList.toggle('dark')
    }
    const dark_button = document.querySelector('#dark_button');
    dark_button.addEventListener('click', darkMode);
    
})