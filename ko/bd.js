document.addEventListener("DOMContentLoaded", function() {
    var installBtn = document.getElementById('install-btn');

    if (installBtn) {
        installBtn.addEventListener('click', function() {
            var targetURL = "#";
            window.location.href = targetURL;
        });
    } else {
        console.error("按钮不存在！");
    }
});
