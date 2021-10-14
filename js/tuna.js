cheet('t u n a c a n', function () {
    let logo = document.querySelector('#tuna img');
    logo.src = "/images/tkg/tunacan.png"
    logo.outerHTML = `<a href="/tkg/">${logo.outerHTML}</a>`;
});