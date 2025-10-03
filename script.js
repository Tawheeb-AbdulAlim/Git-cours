// نموذج تسجيل الدخول
document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();
    document.getElementById("loginMessage").textContent = "تم تسجيل الدخول بنجاح (تجريبي)";
});

// نموذج إنشاء حساب جديد
document.getElementById("signupForm").addEventListener("submit", function(e) {
    e.preventDefault();
    document.getElementById("signupMessage").textContent = "تم إنشاء الحساب بنجاح (تجريبي)";
});
