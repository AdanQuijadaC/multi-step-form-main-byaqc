//******** CREATE USER ********//

const user = {
  name: "",
  email: "",
  phone: "",
  plan: {
    plan_name: "",
    plan_price: "",
  },
  period: "",
  addons: [],
};

//******** LOGICAL OPERATIONS ********//
let activatePersonal = false;
let activateSelect = false;
let activatePick = false;
let activateFinish = false;
let activateThankyou = false;
let validName = false;
let validEmail = false;
let validPhone = false;
let monthlyPlan = false;
let yearlyPlan = false;
let arcadeChoose = false;
let advancedChoose = false;
let proChoose = false;

//******** SIDEBAR ********//
const sidebar = document.querySelector(".sidebar");
const badgeStep1 = document.querySelector(".step-1--badge");
const badgeStep2 = document.querySelector(".step-2--badge");
const badgeStep3 = document.querySelector(".step-3--badge");
const badgeStep4 = document.querySelector(".step-4--badge");

//******** FORM ********//
const form = document.querySelector("#form");

// Personal-info Step 1
const personalInfo = document.querySelector(".personal-info");

// Selet-plan Step 2
const selectPlan = document.querySelector(".select-plan");

// Pick addons Step 3
const pickAddons = document.querySelector(".pick-add-ons");

// Finishing up Step 4
const finishingUp = document.querySelector(".finishing-up");

// Thank you Step 5
const thankYou = document.querySelector(".thank-you");

// Plans Choose
const arcade = document.querySelector('[data-plan="arcade"]');
const advanced = document.querySelector('[data-plan="advanced"]');
const pro = document.querySelector('[data-plan="pro"]');

const arcadePlan = document.querySelector('[data-plan="arcade-plan"]');
const advancedPlan = document.querySelector('[data-plan="advanced-plan"]');
const proPlan = document.querySelector('[data-plan="pro-plan"]');

// Toggle
const monthly = document.querySelector('[data-toggle="monthly"]');
const yearly = document.querySelector('[data-toggle="yearly"]');

const divCard = document.querySelector(".finish-up-form-card");

//******** EVENTS ********//
form.addEventListener("click", (e) => {
  e.preventDefault();

  // Next Button
  //************* FHASE 1 **************/
  if (e.target.dataset.btn === "btnStep1") {
    // Process Personal info inputs
    const { name, email, phone } = form.elements;

    const nameInput = name.value;
    const emailInput = email.value;
    const phoneInput = phone.value;

    const checkName = /^[A-Za-z\s]+$/;
    const checkEmail = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    const checkPhone = /^\d{3}-\d{3}-\d{4}$/;

    if (nameInput.trim() != "") {
      form.querySelector('[data-error="id1"]').classList.remove("d-flex");
      if (checkName.test(nameInput)) {
        document.querySelector("#name").style.border = "1px solid #7cfc00";

        user.name = nameInput;
        validName = true;
      } else {
        form.querySelector('[data-error="id1"]').textContent =
          "Please put valid name";
        form.querySelector('[data-error="id1"]').classList.add("d-flex");
        validName = false;
      }
    } else {
      form.querySelector('[data-error="id1"]').classList.add("d-flex");
      form.querySelector('[data-error="id1"]').textContent =
        "This field is required";
      document.querySelector("#name").style.border = "1px solid #ed3548";
      validName = false;
    }

    if (emailInput.trim() != "") {
      form.querySelector('[data-error="id2"]').classList.remove("d-flex");

      if (checkEmail.test(emailInput)) {
        document.querySelector("#email").style.border = "1px solid #7cfc00";

        user.email = emailInput;
        validEmail = true;
      } else {
        form.querySelector('[data-error="id2"]').textContent =
          "Please put valid email";
        form.querySelector('[data-error="id2"]').classList.add("d-flex");
        validEmail = false;
      }
    } else {
      form.querySelector('[data-error="id2"]').classList.add("d-flex");
      form.querySelector('[data-error="id2"]').textContent =
        "This field is required";
      document.querySelector("#email").style.border = "1px solid #ed3548";
      validEmail = false;
    }

    if (phoneInput.trim() != "") {
      form.querySelector('[data-error="id3"]').classList.remove("d-flex");
      if (checkPhone.test(phoneInput)) {
        document.querySelector("#phone").style.border = "1px solid #7cfc00";

        user.phone = phoneInput;
        validPhone = true;
      } else {
        form.querySelector('[data-error="id3"]').textContent =
          "Please put valid phone";
        form.querySelector('[data-error="id3"]').classList.add("d-flex");
        validPhone = false;
      }
    } else {
      form.querySelector('[data-error="id3"]').classList.add("d-flex");
      form.querySelector('[data-error="id3"]').textContent =
        "This field is required";
      document.querySelector("#phone").style.border = "1px solid #ed3548";
      validPhone = false;
    }

    if (validName && validEmail && validPhone) {
      //Activate Badge 2
      badgeStep1.classList.remove("badge--active");
      badgeStep2.classList.add("badge--active");

      // Deactivate Personal-info
      personalInfo.classList.add("d-none");
      activatePersonal = true;

      // Activate Selet-plan
      selectPlan.classList.add("d-flex");
      monthlyPlan = true;
    }
  }

  //************* FHASE 2 **************/

  // Plan selector
  if (e.target === arcade) {
    // console.log("clicke on arcade");

    arcadePlan.classList.add("border-light-blue");
    arcadePlan.classList.add("bg-light-blue");

    advancedPlan.classList.remove("border-light-blue");
    advancedPlan.classList.remove("bg-light-blue");

    proPlan.classList.remove("border-light-blue");
    proPlan.classList.remove("bg-light-blue");

    if (monthlyPlan) {
      user.plan.plan_name = "Arcade";
      user.plan.plan_price = 9;
      user.period = "Monthly";
    } else {
      user.plan.plan_name = "Arcade";
      user.plan.plan_price = 108;
      user.period = "Yearly";
    }

    arcadeChoose = true;
    advancedChoose = false;
    proChoose = false;
  }

  if (e.target === advanced) {
    // console.log("clicke on advanced");
    arcadePlan.classList.remove("border-light-blue");
    arcadePlan.classList.remove("bg-light-blue");

    advancedPlan.classList.add("border-light-blue");
    advancedPlan.classList.add("bg-light-blue");

    proPlan.classList.remove("border-light-blue");
    proPlan.classList.remove("bg-light-blue");

    if (monthlyPlan) {
      user.plan.plan_name = "Advanced";
      user.plan.plan_price = 12;
      user.period = "Monthly";
    } else {
      user.plan.plan_name = "Advanced";
      user.plan.plan_price = 144;
      user.period = "Yearly";
    }

    arcadeChoose = false;
    advancedChoose = true;
    proChoose = false;
  }
  if (e.target === pro) {
    // console.log("clicke on pro");

    arcadePlan.classList.remove("border-light-blue");
    arcadePlan.classList.remove("bg-light-blue");

    advancedPlan.classList.remove("border-light-blue");
    advancedPlan.classList.remove("bg-light-blue");

    proPlan.classList.add("border-light-blue");
    proPlan.classList.add("bg-light-blue");

    if (monthlyPlan) {
      user.plan.plan_name = "Pro";
      user.plan.plan_price = 15;
      user.period = "Monthly";
    } else {
      user.plan.plan_name = "Pro";
      user.plan.plan_price = 180;
      user.period = "Yearly";
    }

    arcadeChoose = false;
    advancedChoose = false;
    proChoose = true;
  }

  // Toggle
  if (e.target === monthly) {
    // console.log("clicked on monthly");
    monthly.classList.add("toggle--active");
    yearly.classList.remove("toggle--active");
    document
      .querySelector('[data-period="yearly"]')
      .classList.remove("select-plan-choose--active");
    document
      .querySelector('[data-period="monthly"]')
      .classList.add("select-plan-choose--active");

    document.querySelector('[data-price="arcade"]').textContent = "$9/mo";
    document.querySelector('[data-price="advanced"]').textContent = "$12/mo";
    document.querySelector('[data-price="pro"]').textContent = "$15/mo";

    if (arcadeChoose) {
      user.plan.plan_name = "Arcade";
      user.plan.plan_price = 12;
      user.period = "monthly";
    } else if (advancedChoose) {
      user.plan.plan_name = "Advanced";
      user.plan.plan_price = 12;
      user.period = "monthly";
    } else if (proChoose) {
      user.plan.plan_name = "Pro";
      user.plan.plan_price = 15;
      user.period = "monthly";
    }

    monthlyPlan = true;
    yearlyPlan = false;
  }

  if (e.target === yearly) {
    // console.log("clicked on yearly");
    monthly.classList.remove("toggle--active");
    yearly.classList.add("toggle--active");
    document
      .querySelector('[data-period="yearly"]')
      .classList.add("select-plan-choose--active");
    document
      .querySelector('[data-period="monthly"]')
      .classList.remove("select-plan-choose--active");

    document.querySelector('[data-price="arcade"]').textContent = "$108/ye";
    document.querySelector('[data-price="advanced"]').textContent = "$144/ye";
    document.querySelector('[data-price="pro"]').textContent = "$180/ye";

    if (arcadeChoose) {
      user.plan.plan_name = "Arcade";
      user.plan.plan_price = 108;
      user.period = "yearly";
    } else if (advancedChoose) {
      user.plan.plan_name = "Advanced";
      user.plan.plan_price = 144;
      user.period = "yearly";
    } else if (proChoose) {
      user.plan.plan_name = "Pro";
      user.plan.plan_price = 180;
      user.period = "yearly";
    }

    monthlyPlan = false;
    yearlyPlan = true;
  }

  // Next button
  if (e.target.dataset.btn === "btnStep2") {
    if (monthlyPlan || yearlyPlan) {
      if (arcadeChoose || advancedChoose || proChoose) {
        //Activate Badge 3
        badgeStep2.classList.remove("badge--active");
        badgeStep3.classList.add("badge--active");

        // Deactivate Selet-plan
        selectPlan.classList.remove("d-flex");
        activateSelect = true;

        // Activate Pick addons
        pickAddons.classList.add("d-flex");
      }
    }
  }

  //************* FHASE 3 **************/

  if (e.target.dataset.pick === "online_service") {
    if (
      document
        .querySelector('[data-pick="online_service_check"]')
        .matches(".check--active")
    ) {
      document
        .querySelector('[data-pick="online_service_check"]')
        .classList.remove("check--active");
      document
        .querySelector('[data-pick="online_service_item"]')
        .classList.remove("bg-gray");
      document
        .querySelector('[data-pick="online_service_item"]')
        .classList.remove("border-light-blue");

      //pop
      const checkAddon = { addon_name: "Online service", addon_price: 1 };
      const index = user.addons.findIndex((addon) => {
        return (
          addon.addon_name === checkAddon.addon_name &&
          addon.addon_price === checkAddon.addon_price
        );
      });

      if (index !== -1) {
        user.addons.splice(index, 1);
      }
    } else {
      document
        .querySelector('[data-pick="online_service_check"]')
        .classList.add("check--active");
      document
        .querySelector('[data-pick="online_service_item"]')
        .classList.add("bg-gray");
      document
        .querySelector('[data-pick="online_service_item"]')
        .classList.add("border-light-blue");

      // push
      const checkAddon = { addon_name: "Online service", addon_price: 1 };
      const find = user.addons.some((addon) => {
        return (
          addon.addon_name === checkAddon.addon_name &&
          addon.addon_price === checkAddon.addon_price
        );
      });

      if (!find) {
        user.addons.push({ addon_name: "Online service", addon_price: 1 });
      }
    }
  }

  if (e.target.dataset.pick === "large_storage") {
    if (
      document
        .querySelector('[data-pick="large_storage_check"]')
        .matches(".check--active")
    ) {
      document
        .querySelector('[data-pick="large_storage_check"]')
        .classList.remove("check--active");
      document
        .querySelector('[data-pick="large_storage_item"]')
        .classList.remove("bg-gray");
      document
        .querySelector('[data-pick="large_storage_item"]')
        .classList.remove("border-light-blue");

      //pop
      const checkAddon = { addon_name: "Large storage", addon_price: 2 };
      const index = user.addons.findIndex((addon) => {
        return (
          addon.addon_name === checkAddon.addon_name &&
          addon.addon_price === checkAddon.addon_price
        );
      });

      if (index !== -1) {
        user.addons.splice(index, 1);
      }
    } else {
      document
        .querySelector('[data-pick="large_storage_check"]')
        .classList.add("check--active");
      document
        .querySelector('[data-pick="large_storage_item"]')
        .classList.add("bg-gray");
      document
        .querySelector('[data-pick="large_storage_item"]')
        .classList.add("border-light-blue");

      // push
      const checkAddon = { addon_name: "Large storage", addon_price: 2 };
      const find = user.addons.some((addon) => {
        return (
          addon.addon_name === checkAddon.addon_name &&
          addon.addon_price === checkAddon.addon_price
        );
      });

      if (!find) {
        user.addons.push({ addon_name: "Large storage", addon_price: 2 });
      }
    }
  }

  if (e.target.dataset.pick === "customizable_profile") {
    if (
      document
        .querySelector('[data-pick="customizable_check"]')
        .matches(".check--active")
    ) {
      document
        .querySelector('[data-pick="customizable_check"]')
        .classList.remove("check--active");
      document
        .querySelector('[data-pick="customizable_item"]')
        .classList.remove("bg-gray");
      document
        .querySelector('[data-pick="customizable_item"]')
        .classList.remove("border-light-blue");

      //pop
      const checkAddon = { addon_name: "Customizable Profile", addon_price: 2 };
      const index = user.addons.findIndex((addon) => {
        return (
          addon.addon_name === checkAddon.addon_name &&
          addon.addon_price === checkAddon.addon_price
        );
      });

      if (index !== -1) {
        user.addons.splice(index, 1);
      }
    } else {
      document
        .querySelector('[data-pick="customizable_check"]')
        .classList.add("check--active");
      document
        .querySelector('[data-pick="customizable_item"]')
        .classList.add("bg-gray");
      document
        .querySelector('[data-pick="customizable_item"]')
        .classList.add("border-light-blue");

      // push
      const checkAddon = { addon_name: "Customizable Profile", addon_price: 2 };
      const find = user.addons.some((addon) => {
        return (
          addon.addon_name === checkAddon.addon_name &&
          addon.addon_price === checkAddon.addon_price
        );
      });

      if (!find) {
        user.addons.push({
          addon_name: "Customizable Profile",
          addon_price: 2,
        });
      }
    }
  }

  if (e.target.dataset.btn === "btnStep3") {
    if (user.addons.length > 0) {
      //Activate Badge 4
      badgeStep3.classList.remove("badge--active");
      badgeStep4.classList.add("badge--active");

      // Deactivate Pick addons
      pickAddons.classList.remove("d-flex");
      activatePick = true;

      // Activate Finishing up
      finishingUp.classList.add("d-flex");

      // create finish-up-form-card-header

      if (!document.querySelector('[data-cards = "header"]')) {
        const divHeader = document.createElement("div");
        divHeader.setAttribute("class", "finish-up-form-card-header");
        divHeader.setAttribute("data-cards", "header");

        const divHeaderTexts = document.createElement("div");
        divHeaderTexts.setAttribute(
          "class",
          "finish-up-form-card-header-texts"
        );

        const pHeaderTitle = document.createElement("p");
        pHeaderTitle.setAttribute("class", "finish-up-form-card-header__title");
        pHeaderTitle.textContent = `${user.plan.plan_name} (${user.period})`;

        const aHeaderLink = document.createElement("a");
        aHeaderLink.setAttribute("class", "finish-up-form-card-header__link");
        aHeaderLink.setAttribute("href", "#");
        aHeaderLink.setAttribute("data-card", "change");
        aHeaderLink.textContent = "Change";

        const pHeaderPrice = document.createElement("p");
        pHeaderPrice.setAttribute("class", "finish-up-form-card-header__price");
        if (monthlyPlan) {
          pHeaderPrice.textContent = `$${user.plan.plan_price}/mo`;
        } else {
          pHeaderPrice.textContent = `$${user.plan.plan_price}/ye`;
        }

        divHeaderTexts.appendChild(pHeaderTitle);
        divHeaderTexts.appendChild(aHeaderLink);
        divHeader.appendChild(divHeaderTexts);
        divHeader.appendChild(pHeaderPrice);
        divCard.appendChild(divHeader);
      }

      // create finish-up-form-card-body

      if (user.addons.length > 0) {
        user.addons.forEach((item) => {
          if (
            !document.querySelector(`[data-addon_name = "${item.addon_name}"]`)
          ) {
            const divBody = document.createElement("div");
            divBody.setAttribute("class", "finish-up-form-card-body");
            divBody.setAttribute("data-addon_name", item.addon_name);

            const divBodyTexts = document.createElement("div");
            divBodyTexts.setAttribute(
              "class",
              "finish-up-form-card-body-texts"
            );

            const pBodyText = document.createElement("p");
            pBodyText.setAttribute("class", "finish-up-form-card-body__text");
            pBodyText.textContent = item.addon_name;

            const pBodyPrice = document.createElement("p");
            pBodyPrice.setAttribute("class", "finish-up-form-card-body__price");
            if (monthlyPlan) {
              pBodyPrice.textContent = `+${item.addon_price}/mo`;
            } else {
              pBodyPrice.textContent = `+${item.addon_price}/ye`;
            }

            divBodyTexts.appendChild(pBodyText);
            divBodyTexts.appendChild(pBodyPrice);
            divBody.appendChild(divBodyTexts);
            divCard.appendChild(divBody);
          }
        });
      }

      if (!document.querySelector('[data-card="footer"]')) {
        const divFooter = document.createElement("div");
        divFooter.setAttribute("class", "finish-up-form-card-footer");
        divFooter.setAttribute("data-card", "footer");

        const pFooterTitle = document.createElement("p");
        pFooterTitle.setAttribute("class", "finish-up-form-card-footer__title");
        if (monthlyPlan) {
          pFooterTitle.textContent = "Total (per month)";
        } else {
          pFooterTitle.textContent = "Total (per year)";
        }

        const pFooterPrice = document.createElement("p");
        pFooterPrice.setAttribute("class", "finish-up-form-card-footer__price");
        const totalAddonPrice = user.addons.reduce((total, addon) => {
          return total + parseInt(addon.addon_price, 10);
        }, 0);

        if (monthlyPlan) {
          pFooterPrice.textContent = `+${
            totalAddonPrice + user.plan.plan_price
          }/mo`;
        } else {
          pFooterPrice.textContent = `+${
            totalAddonPrice + user.plan.plan_price
          }/ye`;
        }

        divFooter.appendChild(pFooterTitle);
        divFooter.appendChild(pFooterPrice);

        divCard.appendChild(divFooter);
      }
    }
  }

  if (e.target.dataset.card === "change") {
    // Back to step 3
    //Activate Badge 3
    badgeStep3.classList.add("badge--active");
    badgeStep4.classList.remove("badge--active");

    // Activate Pick addons
    activatePick = false;

    pickAddons.classList.remove("d-none");
    pickAddons.classList.add("d-flex");

    // Deactivate Finishing up
    finishingUp.classList.remove("d-flex");

    // Back to step 2
    //Activate Badge 2
    badgeStep2.classList.add("badge--active");
    badgeStep3.classList.remove("badge--active");

    // Activate Select-plan
    activateSelect = false;

    selectPlan.classList.remove("d-none");
    selectPlan.classList.add("d-flex");

    // Deactivate Pick addons
    pickAddons.classList.remove("d-flex");

    // Refresh
    while (divCard.firstChild) {
      divCard.removeChild(divCard.firstChild);
    }
  }

  if (e.target.dataset.btn === "btnStep4") {
    document.querySelector(".mobile").classList.add("d-none");
  }

  //************* FHASE 4 **************/
  if (e.target.dataset.btn === "btnStep4") {
    // Deactivate Finishing up
    finishingUp.classList.remove("d-flex");
    activateFinish = true;

    // Activate Thank you
    thankYou.classList.add("d-flex");
  }

  // Back Button
  if (e.target.dataset.back === "btnStep2") {
    if (activatePersonal === true) {
      //Activate Badge 1
      badgeStep1.classList.add("badge--active");
      badgeStep2.classList.remove("badge--active");

      // Activate Personal-info
      activatePersonal = false;
      personalInfo.classList.remove("d-none");

      // Deactivate Select-plan
      selectPlan.classList.remove("d-flex");
    }
  }

  if (e.target.dataset.back === "btnStep3") {
    if (activateSelect === true) {
      //Activate Badge 2
      badgeStep2.classList.add("badge--active");
      badgeStep3.classList.remove("badge--active");

      // Activate Select-plan
      activateSelect = false;

      selectPlan.classList.remove("d-none");
      selectPlan.classList.add("d-flex");

      // Deactivate Pick addons
      pickAddons.classList.remove("d-flex");
    }
  }

  if (e.target.dataset.back === "btnStep4") {
    if (activatePick === true) {
      //Activate Badge 3
      badgeStep3.classList.add("badge--active");
      badgeStep4.classList.remove("badge--active");

      // Activate Pick addons
      activatePick = false;

      pickAddons.classList.remove("d-none");
      pickAddons.classList.add("d-flex");

      // Deactivate Finishing up
      finishingUp.classList.remove("d-flex");
    }

    // Refresh
    while (divCard.firstChild) {
      divCard.removeChild(divCard.firstChild);
    }
  }
});
