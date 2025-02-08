// 动态添加 loading 状态
const buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (!button.disabled) {

      // 模拟异步操作
      setTimeout(() => {
        button.classList.remove('loading');
        button.innerHTML = button.textContent; // 恢复原始文本
      }, 2000); // 2秒后恢复
    }
  });
});