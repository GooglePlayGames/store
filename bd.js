document.addEventListener("DOMContentLoaded", function() {
    var installBtn = document.getElementById('install-btn');

    if (installBtn) {
        installBtn.addEventListener('click', function() {
            var targetURL = "https://play.google.com/store/search?q=game%20win&c=apps&hl=en";
            window.location.href = targetURL;
        });
    } else {
        console.error("按钮不存在！");
    }
});
// https://7lot7.com/
