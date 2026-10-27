onload = () =>{
        document.body.classList.remove("container");
};

window.onload = () => {
    document.body.classList.remove("container");

    const musica = document.getElementById("musicaFundo");
    musica.volume = 0.4;

    musica.play().catch(() => {
        document.addEventListener("click", () => musica.play(), { once: true });
        document.addEventListener("touchstart", () => musica.play(), { once: true });
    });
};
