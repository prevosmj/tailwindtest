const bars = document.querySelector('#bars')
const menu = document.querySelector('#menu')

bars.addEventListener('click', () => {
    if(menu.classList.contains('hidden') && window.innerWidth < 768) {
        menu.classList.remove('hidden');
        menu.classList.add(
            'flex',
            'flex-col',
            'text-center',
            'bg-green-700',
            'w-full',
            'absolute',
            'top-16'
        );
    }
});

window.addEventListener('resize', () => {
    if(window.innerWidth > 768) {
        menu.classList.add('hidden')
        menu.classList.remove(
            'flex',
            'flex-col',
            'text-center',
            'bg-green-700',
            'w-full',
            'absolute',
            'top-16'
        );
    }
})