document.querySelectorAll('.tooltip').forEach(item => {
    const tooltipText = item.querySelector('.tooltiptext');
    const OFFSET_X = -20;
    const OFFSET_Y = 0;
    
    item.addEventListener('mousemove', event => {
        requestAnimationFrame(() => {
            const windowHeight = window.innerHeight;
            const tooltipHeight = tooltipText.offsetHeight;
            const cursorY = event.pageY;
            let yPosition = cursorY;
            if (cursorY + tooltipHeight > windowHeight) {
                yPosition = windowHeight - tooltipHeight - 10;
            }
            tooltipText.style.left = `${event.pageX + OFFSET_X}px`;
            tooltipText.style.top = `${yPosition + OFFSET_Y}px`;
        });
    });
});
if ('ontouchstart' in window || window.matchMedia("(pointer: coarse)").matches) {
    document.querySelectorAll('.tooltip').forEach(item => {
        item.addEventListener('click', event => {
            event.stopPropagation();
            document.querySelectorAll('.tooltip .tooltiptext').forEach(tip => {
                tip.classList.remove('mobile-tooltip-active');
            });
            const tooltipText = item.querySelector('.tooltiptext');
            tooltipText.classList.toggle('mobile-tooltip-active');
        });
    });
    document.body.addEventListener('click', () => {
        document.querySelectorAll('.tooltip .tooltiptext').forEach(tip => {
            tip.classList.remove('mobile-tooltip-active');
        });
    });
}