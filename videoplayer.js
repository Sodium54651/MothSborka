// player.js

// открытие модалки
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".vlinks").forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault(); // не качаем файл
            let videoSrc = this.getAttribute("href");

            let modal = document.getElementById("videoModal");
            let player = document.getElementById("videoPlayer");

            player.querySelector("source").setAttribute("src", videoSrc);
            player.load();
            modal.style.display = "block";
            player.play();
        });
    });

    // закрытие
    document.querySelector(".close").addEventListener("click", function() {
        let modal = document.getElementById("videoModal");
        let player = document.getElementById("videoPlayer");
        player.pause();
        modal.style.display = "none";
    });

    // клик мимо — тоже закрываем
    window.addEventListener("click", function(e) {
        let modal = document.getElementById("videoModal");
        if (e.target === modal) {
            modal.style.display = "none";
            document.getElementById("videoPlayer").pause();
        }
    });
});
