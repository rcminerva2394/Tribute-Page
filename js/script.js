// This is for the count-up when user reached the section of by the numbers
const numbersEl = document.querySelector('.numbers');
const observer = new IntersectionObserver(
    function (entries) {
        const ent = entries[0];
        if (ent.isIntersecting === true) {
            const countUp = (id, max) => {
                let counts = setInterval(updated);
                let upto = 0;
                function updated() {
                    let count = document.querySelector(id);
                    // to make count up or increment a bit faster for bigger values
                    if (max > 2000) {
                        count.innerHTML = upto += 10;
                    } else {
                        count.innerHTML = ++upto;
                    }

                    if (upto === max) {
                        clearInterval(counts);
                    }
                }
            };
            countUp('#year', 60);
            countUp('#hectares', 4000);
            countUp('#pairs', 400);
        }
    },
    {
        root: null,
        threshold: 0,
    }
);
observer.observe(numbersEl);
