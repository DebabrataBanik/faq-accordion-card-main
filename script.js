const faq = document.querySelector('.faq__container');
const questions = faq.querySelectorAll('.question')

function remove(el){
  el.classList.remove('selected')
  const arrow = el.querySelector('img')
  arrow.classList.remove('inverted')
  const answer = el.nextElementSibling
  answer.classList.remove('show')
}

function hideAll(){
  questions.forEach(q => {
    remove(q)
  })
}

questions.forEach(question => {
  question.addEventListener('click', () => {

    const isOpen = question.classList.contains('selected');
    if (!isOpen) {
      hideAll();
    }

    question.classList.toggle('selected')
    const arrow = question.querySelector('img')
    arrow.classList.toggle('inverted')
    const answer = question.nextElementSibling
    answer.classList.toggle('show')
  
  })
})