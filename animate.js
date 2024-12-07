export const formQuestionsAnimate = (event) => {
    const startAnimate = () => {
        const animatedBlock = document.querySelector('.main-questions-form__wrapper')
        const square = animatedBlock.querySelectorAll('.i-square')

        let i = document.createElement('i')

        const randomX = Math.floor(Math.random() * animatedBlock.clientWidth) + 1
        const randomY = Math.floor(Math.random() * animatedBlock.clientHeight) + 1

        const getRandomTransitionValue = () => {
            return `${Math.random() * 400 - 220}px`
        }

        if(square.length > 260){
            return
        }

        i.classList.add('i-square')
        i.style.left = randomX + 'px'
        i.style.top = randomY + 'px'
        i.style.scale = `${Math.random() * 2 + 1}`
        i.style.setProperty('--x', getRandomTransitionValue())
        i.style.setProperty('--y', getRandomTransitionValue())

        animatedBlock.append(i)

        setTimeout(() => {
            animatedBlock.removeChild(i)
        }, 2000)
    }

    if(!event.target.closest('.questions-form')){
        startAnimate()
    }
}