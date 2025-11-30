/* Author: 老公的名字
   File: script.js
   Description: Form validation for Contact Page
*/

// 等待網頁載入完成後再執行
document.addEventListener("DOMContentLoaded", function () {

    // 找到表單
    const bookingForm = document.querySelector("form");

    // 如果這個頁面有表單，才執行驗證
    if (bookingForm) {
        bookingForm.addEventListener("submit", function (event) {

            // 取得輸入框的值
            const nameInput = document.getElementById("name");
            const emailInput = document.getElementById("email");
            const phoneInput = document.getElementById("phone");

            let isValid = true; // 預設驗證通過
            let errorMessage = ""; // 錯誤訊息收集

            // 1. 檢查名字 (不能是空的)
            if (nameInput.value.trim() === "") {
                isValid = false;
                nameInput.style.borderColor = "red"; // 變紅色警告
                errorMessage += "Please enter your Full Name.\n";
            } else {
                nameInput.style.borderColor = "#ccc"; // 恢復正常
            }

            // 2. 檢查 Email (簡單格式檢查)
            if (emailInput.value.trim() === "" || !emailInput.value.includes("@")) {
                isValid = false;
                emailInput.style.borderColor = "red";
                errorMessage += "Please enter a valid Email Address.\n";
            } else {
                emailInput.style.borderColor = "#ccc";
            }

            // 3. 檢查電話 (不能是空的)
            if (phoneInput.value.trim() === "") {
                isValid = false;
                phoneInput.style.borderColor = "red";
                errorMessage += "Please enter your Phone Number.\n";
            } else {
                phoneInput.style.borderColor = "#ccc";
            }

            // 如果有錯誤，阻止表單送出並顯示警告
            if (!isValid) {
                event.preventDefault(); // 阻止送出
                alert("Please correct the following errors:\n\n" + errorMessage);
            } else {
                // 驗證成功！
                alert("Thank you! Your booking request has been sent.");
                // 這裡會繼續執行 form 的 action (例如 Formspree)
            }
        });
    }
});