document.querySelectorAll('.question').forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const plusIcon = question.querySelector('.plush');
        const minusIcon = question.querySelector('.minus');

        if (answer.style.display === 'block') {
            answer.style.display = 'none';
            plusIcon.style.display = 'flex';
            minusIcon.style.display = 'none';
        } else {
            answer.style.display = 'block';
            plusIcon.style.display = 'none';
            minusIcon.style.display = 'flex';
        }
    });
});
