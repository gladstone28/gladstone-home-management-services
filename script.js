document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('learnMoreBtn').addEventListener('click', function() {
        document.querySelector('#services').scrollIntoView({ behavior: 'smooth' });
    });
});
