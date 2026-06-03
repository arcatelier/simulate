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

  /**
  * プラン選択後の背景色変更の処理
  */
  function selectPlan() {
    const planBoxes = document.querySelectorAll(".p-planBox");

    planBoxes.forEach(function(box) {
      box.addEventListener("click", function() {
        // 全部のis-selectedを外す
        planBoxes.forEach(function(card) {
          card.classList.remove("is-selected");
        });

        // クリックしたものだけis-selectedをつける
        box.classList.add("is-selected");
      });
    });
  }

  changeButtonText();
  selectPlan();
});
