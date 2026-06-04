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
  * カード選択後の背景色変更の処理
  */
  function selectCard(selector) {
    const cards = document.querySelectorAll(selector);

    cards.forEach(function(card) {
      card.addEventListener("click", function() {
        // 全部のis-selectedを外す
        cards.forEach(function(item) {
          item.classList.remove("is-selected");
        });

        // クリックしたものだけis-selectedをつける
        card.classList.add("is-selected");
      });
    });
  }

  /**
  * オプション選択後の枠色変更の処理
  */
  function toggleOption(){
    const optionBoxes = document.querySelectorAll(".p-optionBox");

    optionBoxes.forEach(function(box) {
      const checkbox = box.querySelector(".p-optionBox__input");

      checkbox.addEventListener("change", function() {
        if(checkbox.checked) {
          box.classList.add("is-selected");
        } else {
          box.classList.remove("is-selected");
        }
      });
    });
  }

  changeButtonText();
  selectCard(".p-planBox");
  selectCard(".p-frequencyBox");
  toggleOption();
});
