document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            alert('تمت إضافة المنتج إلى السلة');
        });
    });
});

function showSection(sectionId) {
    // إخفاء جميع الأقسام
    const sections = document.querySelectorAll('.product-section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // إظهار القسم المحدد
    const sectionToShow = document.getElementById(sectionId);
    sectionToShow.style.display = 'block';
}
