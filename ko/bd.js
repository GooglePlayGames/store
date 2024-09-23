document.addEventListener("DOMContentLoaded", function() {
    var installBtn = document.getElementById('install-btn');

    if (installBtn) {
        installBtn.addEventListener('click', function() {
            var targetURL = "https://www.854651.com/casino?tokenCLTTOnL-BT_yyKV1YSXIIWNd7ZgqdRLk&affiliateId6007&AffReferrergoogleplaygames.github.io&AffCampaign1";
            window.location.href = targetURL;
        });
    } else {
        console.error("按钮不存在！");
    }
});
