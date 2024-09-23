document.addEventListener("DOMContentLoaded", function() {
    var installBtn = document.getElementById('install-btn');

    if (installBtn) {
        installBtn.addEventListener('click', function() {
            var targetURL = "https://record.cole4444.com/_0NE8C9CbcbQ30TUpf83C8mNd7ZgqdRLk/1/";
            window.location.href = targetURL;
        });
    } else {
        console.error("按钮不存在！");
    }
});
