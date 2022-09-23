const smallCups = document.querySelectorAll('.box');
const litre = document.querySelectorAll('.litres');
const percent = document.querySelectorAll('.percent');
const abovePercent = document.querySelectorAll('.above-percent');
const remained = document.querySelectorAll('.center');

smallCups.forEach((box, index) => {
    box.addEventListener('click', () => highlight_cups(index));
})
function highlight_cups(index) {
    if (index == smallCups.length - 1) {
        if (smallCups[index].classList.contains('fill')) {
            index--;
        }
    }
    if (smallCups[index].classList.contains('fill') && !smallCups[index + 1].classList.contains('fill')) {
        index--;
    }
    smallCups.forEach((box, index1) => {
        if (index1 <= index) {
            box.classList.add('fill');
        } else {
            box.classList.remove('fill');
        }
    })
    bigCup(index);
}

function bigCup(index) {
    const fullCups = index + 1;

    if (fullCups === 0) {
        percent[0].style.display = 'none';
        litre[0].innerHTML = `2L`;
    } else {
        percent[0].innerHTML = `${12.5 * fullCups} % completed`;
        let height = fullCups * (322 / 8);
        percent[0].style.height = `${height}px`;
        percent[0].style.display = 'block';
        litre[0].innerHTML = `${2 - (fullCups * 0.25)}L`;
        // abovePercent[0].style.height = `${322 - height}px`;
        if (fullCups > 6) {
            percent[0].style.fontsize = '20px';
            litre[0].style.fontsize = '20px';
            // abovePercent[0].style.padding = '0';
        } else {
            percent[0].style.fontsize = '15px';
            litre[0].style.fontsize = '30px';
            // abovePercent[0].style.padding = '20% 0';
        }
    }
}