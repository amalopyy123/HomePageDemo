// js/script.js

document.addEventListener('DOMContentLoaded', function() {
    
    // 1. 获取元素
    const hamburger = document.getElementById('hamburger-btn');
    const navMenu = document.getElementById('nav-menu');

    // 2. 检查元素是否存在（防止在没有该元素的页面报错）
    if (hamburger && navMenu) {
        
        // 3. 添加点击事件
        hamburger.addEventListener('click', function() {
            // 切换菜单显示/隐藏
            navMenu.classList.toggle('open');
            
            // 切换按钮样式（变X）
            hamburger.classList.toggle('active');
        });
    }
});