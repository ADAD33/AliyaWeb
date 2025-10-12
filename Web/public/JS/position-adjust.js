// 等待DOM加载完成
document.addEventListener('DOMContentLoaded', function() {
    // 获取元素
    const playerChoiceImg = document.getElementById('wait');
    const chatContainer = document.getElementById('chat-container');
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('send-btn');
    const chatBox = document.getElementById('chat-box');
    
    // 调整位置的函数
    function adjustPositions() {
        if (playerChoiceImg && chatContainer && userInput && sendButton) {
            // 获取PlayerChoice.png的位置信息
            const imgRect = playerChoiceImg.getBoundingClientRect();
            const imgLeft = imgRect.left;
            
            // 计算chat-container的右侧位置：图片左边距 - 15px
            const containerRight = window.innerWidth - imgLeft + 15;
            chatContainer.style.right = containerRight + 'px';
            
            // 可选：如果需要同时调整输入区域的位置
            // 获取发送按钮的宽度
            const sendBtnWidth = sendButton.offsetWidth;
            
            // 设置发送按钮的右边框距离chat-container右边框10px
            sendButton.style.right = (containerRight + 10) + 'px';
            
            // 计算输入框的右边框位置：发送按钮左边框 - 8px
            const sendBtnLeft = window.innerWidth - (parseInt(sendButton.style.right) + sendBtnWidth);
            const inputRight = window.innerWidth - (sendBtnLeft - 8);
            
            // 设置输入框的右边框位置
            userInput.style.right = inputRight + 'px';
        }
    }
    
    // 图片加载完成后调整位置
    if (playerChoiceImg.complete) {
        adjustPositions();
    } else {
        playerChoiceImg.addEventListener('load', adjustPositions);
    }
    
    // 窗口大小改变时重新调整位置
    window.addEventListener('resize', adjustPositions);
    
    // 发送按钮宽度可能动态变化时也需要调整
    const observer = new ResizeObserver(adjustPositions);
    if (sendButton) {
        observer.observe(sendButton);
    }
});
