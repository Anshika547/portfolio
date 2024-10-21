// Dynamic Background Effect
document.addEventListener('mousemove', function(e) {
    const x = e.pageX / window.innerWidth * 100;
    const y = e.pageY / window.innerHeight * 100;
    document.body.style.backgroundPosition = `${x}% ${y}%`;
});
