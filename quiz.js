/* Workspace Ôn thi trắc nghiệm: nhúng quiz.html (Kiến trúc máy tính, 85 câu) trong khung riêng.
   quiz.html tự lưu tiến độ và kết quả trên thiết bị; ở đây chỉ mở/đóng workspace và tải khung lần đầu mở. */
(function () {
    'use strict';
    function openQuizWorkspace() {
        toggleMainElements(false);
        document.getElementById('quizWorkspace').style.display = 'block';
        var f = document.getElementById('quizFrame');
        if (f && !f.getAttribute('src')) f.setAttribute('src', 'quiz.html?v=1');
        window.scrollTo({ top: 0 });
    }
    function closeQuizWorkspace() {
        toggleMainElements(true);
        document.getElementById('quizWorkspace').style.display = 'none';
    }
    window.openQuizWorkspace = openQuizWorkspace;
    window.closeQuizWorkspace = closeQuizWorkspace;
    document.addEventListener('DOMContentLoaded', function () {
        var c = document.getElementById('quizCloseBtn');
        if (c) c.addEventListener('click', closeQuizWorkspace);
    });
})();
