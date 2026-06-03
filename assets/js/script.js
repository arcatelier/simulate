window.addEventListener("load", () => {
  document.body.classList.add("is-show");

  /**
  * ハンバーガーメニューコンテンツボタン制御処理
  */
  function changeButtonText() {
    const openBtn = document.querySelector(".js-menu-open");
    const closeBtn = document.querySelector(".js-menu-close");
    const nav = document.querySelector(".js-menu-content");

    openBtn.addEventListener("click", function () {
      nav.classList.add("is-open");
    });

    closeBtn.addEventListener("click", function () {
      nav.classList.remove("is-open");
    });
  }

  changeButtonText();
});
