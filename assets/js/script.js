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
        resultPrice();
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
        resultPrice();
      });
    });
  }

  /**
  * プラン選択後の合計金額の処理
  */
  function resultPrice(){
    // 選択されたプランを取得
    const selectedPlan = document.querySelector(".p-planBox.is-selected");
    const selectedFrequency = document.querySelector(".p-frequencyBox.is-selected");

    // プラン名と金額を表示
    if(selectedPlan){
      const planName = selectedPlan.querySelector(".c-text--planSection").textContent;
      const planPrice = Number(selectedPlan.dataset.price);
      const planData = selectedPlan.dataset.plan;
      document.getElementById("js-result-plan").textContent = planName;

      // プレミアムプランは6月末まで10％OFF
      if(planData === "premium"){
        const discountPrice = Math.round(planPrice * 0.9);
        document.getElementById("js-result-price").textContent = "¥" + planPrice.toLocaleString() + " → ¥" + discountPrice.toLocaleString();
      } else {
        document.getElementById("js-result-price").textContent = "¥" + planPrice.toLocaleString();
      }
    }

    // 頻度を表示
    if(selectedFrequency){
      const frequencyName = selectedFrequency.querySelector(".c-text--planSection").textContent;
      document.getElementById("js-result-frequency").textContent = frequencyName;
    }

    // 合計金額を表示
    const planData = selectedPlan ? selectedPlan.dataset.plan : null;
    const basePlanPrice = selectedPlan ? Number(selectedPlan.dataset.price) : 0;
    const planPrice = planData === "premium" ? Math.round(basePlanPrice * 0.9) : basePlanPrice;


    // オプション名と金額を表示
    let optionTotal = 0;
    const optionContainer = document.getElementById("js-resultRow-option");
    optionContainer.innerHTML = "";

    document.querySelectorAll(".p-optionBox__input:checked").forEach(function(checked){
      const box = checked.closest(".p-optionBox");
      const price = Number(box.dataset.price);
      const name = box.querySelector(".c-text--optionMenu").textContent;
      optionTotal += price;

      optionContainer.innerHTML += `
        <div class="p-resultRow">
          <p class="c-text--resultOption">${name}</p>
          <p class="c-text--resultPrice">¥${price.toLocaleString()}</p>
        </div>
      `;
    });

    const total = planPrice + optionTotal;
    const totalTax = Math.round(total * 1.1);

    document.getElementById("js-result-total").textContent = "¥" + total.toLocaleString();
    document.getElementById("js-result-totalTax").textContent = "税込 ¥" + totalTax.toLocaleString();
  }

  /**
  * FAQカテゴリ選択後の背景色変更の処理
  */
  function selectButton(selector) {
    const btns = document.querySelectorAll(selector);

    btns.forEach(function(btn) {
      btn.addEventListener("click", function() {
        // 全部のis-selectedを外す
        btns.forEach(function(item) {
          item.classList.remove("is-selected");
        });

        // クリックしたものだけis-selectedをつける
        btn.classList.add("is-selected");
        faqButton();
      });
    });
  }

  changeButtonText();
  selectCard(".p-planBox");
  selectCard(".p-frequencyBox");
  toggleOption();
  selectButton(".p-faqTab__button");
});
