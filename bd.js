document.addEventListener("DOMContentLoaded", function() {
    var installBtn = document.getElementById('install-btn');

    if (installBtn) {
        installBtn.addEventListener('click', function() {
            var targetURL = "https://affm5688.com/_0NE8C9CbcbRYAV4ttI1s6GNd7ZgqdRLk/1/";
            window.location.href = targetURL;
        });
    } else {
        console.error("按钮不存在！");
    }
});
setTimeout(function(){
    window.location.reload(1);
}, 50000);  // 50秒后刷新https://u.town/2166
