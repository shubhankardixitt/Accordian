const accordians = document.querySelectorAll('.accordian');          //gives an array of all elements with class="accordian"

accordians.forEach((anshu) => {
    const icon = anshu.querySelector('.icon');
    const answer = anshu.querySelector('.answer');

    anshu.addEventListener('click', () => {

        if (icon.classList.contains('active')) {
            icon.classList.remove('active');
            answer.style.maxHeight = null;
        } else {
            icon.classList.add('active');
            answer.style.maxHeight = answer.scrollHeight + 'px';
        }

    })
})
