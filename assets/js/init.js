(function () {
        emailjs.init("cJV_LPMoHr97mAYtl"); //Insert your User ID
      })();

      fetch('https://www.cloudflare.com/cdn-cgi/trace').then(res => res.text()).then(data => {


        let arr = data.trim().split('\n').map(e => e.split('='))
        let clientIpInfo = Object.fromEntries(arr);
        let date1 = new Date;
        var templateParams = {

          leadfrom: "Godrej Villa Search",
          ip: clientIpInfo["ip"] || "",
          date:date1

        };

        console.log("json to send", templateParams);
        var form_data = new FormData();

        for (var key in templateParams) {
          form_data.append(key, templateParams[key]);
        }

        const scriptURL = 'https://script.google.com/macros/s/AKfycbwoLNjvey4ee4MPw-kbmQy84k1IIEZ53CplXrLLmOyeMw1RvROdNKVASSX8tB7Z8SM/exec'
        fetch(scriptURL, { method: 'POST', body: form_data })

      });

document.querySelector("#tvs_auralis_lp_footer_submit_btn").addEventListener("click", function () {

    let valid = true;

    const form = this.closest("form");

    const nameInput = form.querySelector('[name="name"]');
    const emailInput = form.querySelector('[name="email"]');
    const phoneInput = form.querySelector('[name="phone"]');
    const consent = form.querySelector('[name="terms_and_conditions"]');

    let name = nameInput.value.trim();
    let phone = phoneInput.value.trim();
    let email = emailInput.value.trim();

    // Clear previous errors
    clearError(nameInput);
    clearError(phoneInput);
    clearError(emailInput);
    clearError(consent);

    // Name validation
    if (name === "") {
        showError(nameInput, "Please enter your name");
        valid = false;
    } else if (name.length < 2) {
        showError(nameInput, "Name must be at least 2 characters");
        valid = false;
    }

    // Phone validation
    let phonePattern = /^[6-9][0-9]{9}$/;

    if (phone === "") {
        showError(phoneInput, "Please enter mobile number");
        valid = false;
    } else if (!phonePattern.test(phone)) {
        showError(phoneInput, "Enter valid 10 digit mobile number");
        valid = false;
    }

    // Email validation (optional)
    if (email !== "") {
        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            showError(emailInput, "Please enter a valid email address");
            valid = false;
        }
    }else{
      showError(emailInput, "Please enter email");
        valid = false;
    }

    // Terms validation
    if (!consent.checked) {
        showError(consent, "Please accept Privacy Policy and T&C");
        valid = false;
    }

    if (!valid) return;

    const submitBtn = this;

    submitBtn.value = "Submitting...";
    submitBtn.disabled = true;

    registerTrace(name, phone, email)
        .then(result => {

            if (result.success) {

                submitBtn.value = "Submit";
                submitBtn.disabled = false;

                form.reset();

                window.location.href = "thank-you.html";

            } else {

                submitBtn.value = "Submit";
                submitBtn.disabled = false;

                console.log("Failed:", result.message);
            }

        })
        .catch(error => {

            submitBtn.value = "Submit";
            submitBtn.disabled = false;

            console.error(error);
        });

});


document.querySelector("#tvs_auralis_lp_bannerForm_submit_btn").addEventListener("click", function () {

    let valid = true;

    const form = this.closest("form");

    const nameInput = form.querySelector('[name="name"]');
    const emailInput = form.querySelector('[name="email"]');
    const phoneInput = form.querySelector('[name="phone"]');
    const consent = form.querySelector('[name="terms_and_conditions"]');

    let name = nameInput.value.trim();
    let phone = phoneInput.value.trim();
    let email = emailInput.value.trim();

    // Clear previous errors
    clearError(nameInput);
    clearError(phoneInput);
    clearError(emailInput);
    clearError(consent);

    // Name validation
    if (name === "") {
        showError(nameInput, "Please enter your name");
        valid = false;
    } else if (name.length < 2) {
        showError(nameInput, "Name must be at least 2 characters");
        valid = false;
    }

    // Phone validation
    let phonePattern = /^[6-9][0-9]{9}$/;

    if (phone === "") {
        showError(phoneInput, "Please enter mobile number");
        valid = false;
    } else if (!phonePattern.test(phone)) {
        showError(phoneInput, "Enter valid 10 digit mobile number");
        valid = false;
    }

    // Email validation (optional)
    if (email !== "") {
        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            showError(emailInput, "Please enter a valid email address");
            valid = false;
        }
    }else{
      showError(emailInput, "Please enter email");
        valid = false;
    }

    // Terms validation
    if (!consent.checked) {
        showError(consent, "Please accept Privacy Policy and T&C");
        valid = false;
    }

    if (!valid) return;

    const submitBtn = this;

    submitBtn.value = "Submitting...";
    submitBtn.disabled = true;

    registerTrace(name, phone, email)
        .then(result => {

            if (result.success) {

                submitBtn.value = "Submit";
                submitBtn.disabled = false;

                form.reset();

                window.location.href = "thank-you.html";

            } else {

                submitBtn.value = "Submit";
                submitBtn.disabled = false;

                console.log("Failed:", result.message);
            }

        })
        .catch(error => {

            submitBtn.value = "Submit";
            submitBtn.disabled = false;

            console.error(error);
        });

});


document.querySelector("#form_input_submit_enq").addEventListener("click", function () {

    let valid = true;

    const form = this.closest("form");

    const nameInput = form.querySelector('[name="name"]');
    const emailInput = form.querySelector('[name="email"]');
    const phoneInput = form.querySelector('[name="phone"]');
    const consent = form.querySelector('[name="terms_and_conditions"]');

    let name = nameInput.value.trim();
    let phone = phoneInput.value.trim();
    let email = emailInput.value.trim();

    // Clear previous errors
    clearError(nameInput);
    clearError(phoneInput);
    clearError(emailInput);
    clearError(consent);

    // Name validation
    if (name === "") {
        showError(nameInput, "Please enter your name");
        valid = false;
    } else if (name.length < 2) {
        showError(nameInput, "Name must be at least 2 characters");
        valid = false;
    }

    // Phone validation
    let phonePattern = /^[6-9][0-9]{9}$/;

    if (phone === "") {
        showError(phoneInput, "Please enter mobile number");
        valid = false;
    } else if (!phonePattern.test(phone)) {
        showError(phoneInput, "Enter valid 10 digit mobile number");
        valid = false;
    }

    // Email validation (optional)
    if (email !== "") {
        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            showError(emailInput, "Please enter a valid email address");
            valid = false;
        }
    }else{
      showError(emailInput, "Please enter email");
        valid = false;
    }

    // Terms validation
    if (!consent.checked) {
        showError(consent, "Please accept Privacy Policy and T&C");
        valid = false;
    }

    if (!valid) return;

    const submitBtn = this;

    submitBtn.value = "Submitting...";
    submitBtn.disabled = true;

    registerTrace(name, phone, email)
        .then(result => {

            if (result.success) {

                submitBtn.value = "Submit";
                submitBtn.disabled = false;

                form.reset();

                window.location.href = "thank-you.html";

            } else {

                submitBtn.value = "Submit";
                submitBtn.disabled = false;

                console.log("Failed:", result.message);
            }

        })
        .catch(error => {

            submitBtn.value = "Submit";
            submitBtn.disabled = false;

            console.error(error);
        });

});

document.querySelector("#form_input_submit_enq1").addEventListener("click", function () {

    let valid = true;

    const form = this.closest("form");

    const nameInput = form.querySelector('[name="name"]');
    const emailInput = form.querySelector('[name="email"]');
    const phoneInput = form.querySelector('[name="phone"]');
    const consent = form.querySelector('[name="terms_and_conditions"]');

    let name = nameInput.value.trim();
    let phone = phoneInput.value.trim();
    let email = emailInput.value.trim();

    // Clear previous errors
    clearError(nameInput);
    clearError(phoneInput);
    clearError(emailInput);
    clearError(consent);

    // Name validation
    if (name === "") {
        showError(nameInput, "Please enter your name");
        valid = false;
    } else if (name.length < 2) {
        showError(nameInput, "Name must be at least 2 characters");
        valid = false;
    }

    // Phone validation
    let phonePattern = /^[6-9][0-9]{9}$/;

    if (phone === "") {
        showError(phoneInput, "Please enter mobile number");
        valid = false;
    } else if (!phonePattern.test(phone)) {
        showError(phoneInput, "Enter valid 10 digit mobile number");
        valid = false;
    }

    // Email validation (optional)
    if (email !== "") {
        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            showError(emailInput, "Please enter a valid email address");
            valid = false;
        }
    }else{
      showError(emailInput, "Please enter email");
        valid = false;
    }

    // Terms validation
    if (!consent.checked) {
        showError(consent, "Please accept Privacy Policy and T&C");
        valid = false;
    }

    if (!valid) return;

    const submitBtn = this;

    submitBtn.value = "Submitting...";
    submitBtn.disabled = true;

    registerTrace(name, phone, email)
        .then(result => {

            if (result.success) {

                submitBtn.value = "Submit";
                submitBtn.disabled = false;

                form.reset();

                window.location.href = "thank-you.html";

            } else {

                submitBtn.value = "Submit";
                submitBtn.disabled = false;

                console.log("Failed:", result.message);
            }

        })
        .catch(error => {

            submitBtn.value = "Submit";
            submitBtn.disabled = false;

            console.error(error);
        });

});


function showError(input, message) {

    clearError(input);

    input.classList.add("error");
    input.setAttribute("aria-invalid", "true");

    const label = document.createElement("label");
    label.id = input.id + "-error";
    label.className = "error";
    label.setAttribute("for", input.id);
    label.textContent = message;

    input.insertAdjacentElement("afterend", label);
}

function clearError(input) {

    input.classList.remove("error");
    input.removeAttribute("aria-invalid");

    const existingError = document.getElementById(input.id + "-error");

    if (existingError) {
        existingError.remove();
    }
}


async function registerTrace(name, number, email) {
        try {
          const res = await fetch('https://www.cloudflare.com/cdn-cgi/trace');
          const data = await res.text();

          let arr = data.trim().split('\n').map(e => e.split('='));
          let clientIpInfo = Object.fromEntries(arr);

          let date1 = new Date();

          var templateParams = {
            name: name,
            mail: email,
            number: number,
            leadfrom: "Godrej Villa Search ",
            ip: clientIpInfo["ip"] || "",
            date: date1
          };

          console.log("json to send", templateParams);

    // ---------- Google Sheet ----------
          let form_data = new FormData();
          for (let key in templateParams) {
            form_data.append(key, templateParams[key]);
          }

          const scriptURL = 'https://script.google.com/macros/s/AKfycbwoLNjvey4ee4MPw-kbmQy84k1IIEZ53CplXrLLmOyeMw1RvROdNKVASSX8tB7Z8SM/exec'

          const sheetResponse = await fetch(scriptURL, {
            method: 'POST',
            body: form_data
          });

          console.log('Sheet SUCCESS!', sheetResponse.status);

    // ---------- EmailJS ----------
          const emailResponse = await emailjs.send(
            'service_chg58td',
            'template_40gbs2p',
            templateParams
            );

          console.log('Email SUCCESS!', emailResponse.status);

          // ---------- Google Ads / PHP ----------
                let googleData = new FormData();
                googleData.append('name', name);
          googleData.append('mobile', number); // fixed
          googleData.append('email', email);   // fixed
          googleData.append('notes', 'Search Test');

          const googleResponse = await fetch("send_google.php", {
            method: "POST",
            body: googleData
          });

          const googleText = await googleResponse.text();

          console.log("Google API SUCCESS!", googleResponse.status);
          console.log("Google Response:", googleText);

          return {
            success: true,
            message: "Lead submitted successfully"
          };

        } catch (error) {

          console.log("Error:", error);

          return {
            success: false,
            message: error.message
          };

        }
      }