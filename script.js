let stars = document.getElementById('stars');
let meteorid = document.getElementById('meteorid');
let rocket = document.getElementById('rpcket');
let text = document.getElementById('text');

window.addEventListener('scroll', function() {
    let value = window.scrollY;
    stars.style.left = value * 0.25 +'px';
    rocket.style.top = value * -0.5 +'px';
    
});