# 科技风格个人简历网站

一个现代化的个人简历网站，采用科技风格设计，具有丰富的动态效果和交互体验。

## 功能特点

### 1. 动态效果
- 粒子背景：使用 particles.js 实现的动态粒子效果
- 滚动动画：使用 AOS 库实现的滚动渐入效果
- 技能进度条：动态展示技能掌握程度
- 悬停效果：卡片、图标等元素的悬停动画

### 2. 页面结构
```
MyWeb/
├── index.html          # 首页（包含动态效果）
├── experience.html     # 工作经历页面
├── projects.html       # 项目作品页面
├── education.html      # 教育背景页面
├── contact.html        # 联系方式页面
├── styles.css          # 全局样式文件
├── main.js            # 全局脚本文件
└── images/            # 图片资源目录
    └── avatar.jpg     # 个人头像
```

### 3. 技术栈
- HTML5
- CSS3（动画、过渡效果）
- JavaScript（交互、动态效果）
- 第三方库：
  - particles.js（粒子效果）
  - AOS（滚动动画）
  - Font Awesome（图标）

### 4. 自定义内容

#### 个人信息
在 `index.html` 中：
```html
<div class="profile">
    <h1 class="name">您的姓名</h1>
    <p class="title">您的职位</p>
</div>
```

#### 社交链接
在 `index.html` 中：
```html
<div class="social-links">
    <a href="#" class="social-link"><i class="fab fa-github"></i></a>
    <a href="#" class="social-link"><i class="fab fa-linkedin"></i></a>
    <a href="#" class="social-link"><i class="fab fa-twitter"></i></a>
</div>
```

#### 技能展示
在 `index.html` 中：
```html
<div class="skill-item" data-aos="fade-up">
    <div class="skill-icon">💻</div>
    <h3>技能类别</h3>
    <p>技能描述</p>
    <div class="skill-progress">
        <div class="progress-bar" style="width: 90%"></div>
    </div>
</div>
```

### 5. 样式自定义

#### 主题颜色
在 `styles.css` 中：
```css
:root {
    --primary-color: #00ff9d;    /* 主色调 */
    --secondary-color: #0a192f;  /* 次要色调 */
    --text-color: #e6f1ff;       /* 文字颜色 */
    --accent-color: #64ffda;     /* 强调色 */
    --background-color: #020c1b; /* 背景色 */
}
```

#### 粒子效果
在 `main.js` 中：
```javascript
particlesJS('particles-js', {
    particles: {
        number: { value: 80 },
        color: { value: '#00ff9d' },
        // ... 其他配置
    }
});
```

### 6. 本地预览

1. 启动本地服务器：
```bash
cd MyWeb
python -m http.server 8000
```

2. 访问网站：
- 打开浏览器
- 访问地址：`http://localhost:8000`

### 7. 部署

网站已配置为 GitHub Pages，自动部署到：
- 主站：`https://nirvanaloop.github.io`
- 仓库：`https://github.com/NirvanaLoop/nirvanaloop.github.io`

### 8. 注意事项

1. 图片处理：
   - 头像图片放在 `images` 目录下
   - 建议使用优化后的图片格式
   - 图片大小建议控制在 200KB 以内

2. 性能优化：
   - 已配置延迟加载
   - 使用 CDN 加载第三方库
   - 优化了动画性能

3. 浏览器兼容：
   - 支持现代浏览器
   - 建议使用最新版本访问

### 9. 更新日志

#### 最新更新
- 添加粒子背景效果
- 添加社交链接图标
- 添加技术栈展示
- 添加技能进度条
- 添加滚动动画效果
- 优化移动端适配

### 10. 贡献

欢迎提交 Issue 和 Pull Request 来帮助改进项目。

### 11. 许可证

MIT License 