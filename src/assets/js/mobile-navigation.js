const myButton = document.querySelector('nav > a');
const mobileNavigationContent = document.querySelector('nav > .content');

function myButtonClick() {
    if (mobileNavigationContent.classList.contains('open')) {
        mobileNavigationContent.classList.remove('open');
    } else {
        mobileNavigationContent.classList.add('open');
    }
}

myButton.onclick = myButtonClick;
