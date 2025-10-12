let currentFrame = 0;
const totalFrames = 34; // 总帧数（0-34）
const frameDelay = 24; // 每帧间隔毫秒数
let animationInterval = null;

// 创建动画图片元素
const wait_img = document.createElement("img");
wait_img.src = "./system/wait/dian_0.png";
wait_img.alt = "等待动画帧";
// 确保动画图片继承CSS中的自适应样式
document.getElementById('wait_anmation').appendChild(wait_img);

// 窗口大小改变时更新动画显示
window.addEventListener('resize', () => {
    // 强制重绘以确保尺寸正确
    updateFrame();
});

// 更新当前帧图片
function updateFrame() {
    wait_img.src = `./system/wait/dian_${currentFrame}.png`;
}

// 初始化动画
updateFrame();
animationInterval = setInterval(() => {
    currentFrame++;
    if (currentFrame > totalFrames) {
        currentFrame = 0;
    }
    updateFrame();
}, frameDelay);
