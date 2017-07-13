function initIndicator() {
    const indicator = document.createElement('aside');

    indicator.classList.add('indicator');

    Array.from(document.querySelectorAll('.box')).forEach((box, index) => {
        const item = document.createElement('div');

        item.classList.add('indicator-item');
        item.dataset.index = index + 1;
        item.textContent = index + 1;

        item.addEventListener('animationend', event => event.currentTarget.classList.remove('pulse'));

        indicator.appendChild(item);
    });

    document.body.appendChild(indicator);
}

function updateIndicator(entries, observer) {
    const indicator = document.querySelector('.indicator');

    entries.forEach(entry => {
        const index = entry.target.textContent.replace('#', '');
        const el = indicator.querySelector(`[data-index="${index}"]`);

        el.classList.add('pulse');
        el.classList.toggle('on', entry.isIntersecting);
    });
}

function updateIndicatorByRatio(entries, observer) {
    const indicator = document.querySelector('.indicator');
    const color = 'rgba(160, 230, 0, alpha)';

    entries.forEach(entry => {
        const index = entry.target.textContent.replace('#', '');
        const el = indicator.querySelector(`[data-index="${index}"]`);

        el.classList.add('pulse');
        el.style.backgroundColor = color.replace('alpha', entry.intersectionRatio);
    });
}

initIndicator();
