document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // 点击导航链接时关闭移动端菜单
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // 添加滚动效果
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(2, 12, 27, 0.95)';
        } else {
            navbar.style.background = 'rgba(2, 12, 27, 0.8)';
        }
    });

    // 头像上传和预览功能
    const avatarInput = document.getElementById('avatar-input');
    const avatarPreview = document.getElementById('avatar-preview');

    // 从本地存储加载头像
    const savedAvatar = localStorage.getItem('userAvatar');
    if (savedAvatar) {
        avatarPreview.src = savedAvatar;
    }

    avatarInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            // 检查文件类型
            if (!file.type.startsWith('image/')) {
                alert('请选择图片文件！');
                return;
            }

            // 检查文件大小（限制为2MB）
            if (file.size > 2 * 1024 * 1024) {
                alert('图片大小不能超过2MB！');
                return;
            }

            const reader = new FileReader();
            reader.onload = (e) => {
                // 预览图片
                avatarPreview.src = e.target.result;
                // 保存到本地存储
                localStorage.setItem('userAvatar', e.target.result);
            };
            reader.readAsDataURL(file);
        }
    });
}); 