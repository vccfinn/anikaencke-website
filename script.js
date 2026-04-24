// Gallery data — manually curated from filenames
const galleries = {
    malerei: [
        {
            file: 'works/malerei/1. über den fluss, 2025 Tusche, Acrylfarben, Aquarellstifte auf Holzpappe          29,5 x 42 cm.jpg',
            title: 'über den fluss',
            details: '2025, Tusche, Acrylfarben, Aquarellstifte auf Holzpappe, 29,5 x 42 cm'
        },
        {
            file: 'works/malerei/2. königin, 2026 Tusche, Papier auf Holzpappe,            42 x 29,5 cm.jpeg',
            title: 'königin',
            details: '2026, Tusche, Papier auf Holzpappe, 42 x 29,5 cm'
        },
        {
            file: 'works/malerei/3. himmelsoweit, 2024 Acrylfarbe, Tusche, Aquarell, Acrylstifte auf Holzpappe             50 x 70 cm.jpg',
            title: 'himmelsoweit',
            details: '2024, Acrylfarbe, Tusche, Aquarell, Acrylstifte auf Holzpappe, 50 x 70 cm'
        },
        {
            file: 'works/malerei/4. mit dir,  2017 Tusche, Acryl, Graphit, Pappe, Transparentpapier auf Holzpappe,     100 x 70 cm.jpg',
            title: 'mit dir',
            details: '2017, Tusche, Acryl, Graphit, Pappe, Transparentpapier auf Holzpappe, 100 x 70 cm'
        },
        {
            file: 'works/malerei/5. verbunden,  2025 Tusche, Aquarell, Aquarellstifte       29,5 x 42 cm.jpg',
            title: 'verbunden',
            details: '2025, Tusche, Aquarell, Aquarellstifte, 29,5 x 42 cm'
        },
        {
            file: 'works/malerei/6.  hora de mare baixa, 2025 Tusche, Aquarell, Acrystifte auf Holzpappe    29,5 x 42 cm.jpg',
            title: 'hora de mare baixa',
            details: '2025, Tusche, Aquarell, Acrylstifte auf Holzpappe, 29,5 x 42 cm'
        },
        {
            file: 'works/malerei/7. o.T., 2026 Tusche, Pappe, Papier auf Holzpappe             70 x 50 cm.JPG',
            title: 'o.T.',
            details: '2026, Tusche, Pappe, Papier auf Holzpappe, 70 x 50 cm'
        },
        {
            file: 'works/malerei/8. dalla sorgente alla luce, sicilia, 2016 Tusche, Acrylstifte, Transparentpapier  auf Acrylpapier   31,5 x 23,5 cm.JPG',
            title: 'dalla sorgente alla luce, sicilia',
            details: '2016, Tusche, Acrylstifte, Transparentpapier auf Acrylpapier, 31,5 x 23,5 cm'
        },
        {
            file: 'works/malerei/9. rotkäppchen wartet auf den wolf, 2018,                  Graphit, Aquarell, Acrylstift, Acrylfarbe, Buntstift, Papier auf Holzpappe                70 cm x 100 cm .jpg',
            title: 'rotkäppchen wartet auf den wolf',
            details: '2018, Graphit, Aquarell, Acrylstift, Acrylfarbe, Buntstift, Papier auf Holzpappe, 70 x 100 cm'
        },
        {
            file: 'works/malerei/10. wieder, 2025 Tusche Graphit, Buntstift, farbiges Transparentpapier auf Holzpappe,      42 x 29,7 cm.jpg',
            title: 'wieder',
            details: '2025, Tusche, Graphit, Buntstift, farbiges Transparentpapier auf Holzpappe, 42 x 29,7 cm'
        },
        {
            file: 'works/malerei/11. o.T., 2020, Tusche, Aquarell, Acrylfarbe,Acrylstifte, Buntstifte  42 x 29,5 cm            .JPG',
            title: 'o.T.',
            details: '2020, Tusche, Aquarell, Acrylfarbe, Acrylstifte, Buntstifte, 42 x 29,5 cm'
        },
        {
            file: 'works/malerei/12. brulant, saint-pierre la mer 2017, Kreppband, Wachs, Graphit, Buntstift, Tombowstifte         33 x 24 cm.jpg',
            title: 'brulant, saint-pierre la mer',
            details: '2017, Kreppband, Wachs, Graphit, Buntstift, Tombowstifte, 33 x 24 cm'
        },
        {
            file: 'works/malerei/13. immer tiefer bis auf den grund  2020, Acrylfarbe, Tusche, Stifte, Transparentpapier auf Holzpappe,      70 x 50 cm.jpg',
            title: 'immer tiefer bis auf den grund',
            details: '2020, Acrylfarbe, Tusche, Stifte, Transparentpapier auf Holzpappe, 70 x 50 cm'
        },
        {
            file: 'works/malerei/14.see, 2022 Tusche, Acrylfarbe, Acrylstifte, Aquarell, Transparentpapier auf Holzpappe,    29,5 x 42 cm.JPG',
            title: 'see',
            details: '2022, Tusche, Acrylfarbe, Acrylstifte, Aquarell, Transparentpapier auf Holzpappe, 29,5 x 42 cm'
        },
        {
            file: 'works/malerei/15. o.T , 2019 Tusche, Acrylfarbe, Aquarellstifte, Buntstifte, Transparentpapier, Pappe auf Holzpappe          59,5 x 42 cm.jpg',
            title: 'o.T.',
            details: '2019, Tusche, Acrylfarbe, Aquarellstifte, Buntstifte, Transparentpapier, Pappe auf Holzpappe, 59,5 x 42 cm'
        },
        {
            file: 'works/malerei/16. saturo, 2024 Tusche, Acrylfarben, Acrylstifte, Transparentpapier auf Acrylpapier,     21 x 29,7 cm.jpg',
            title: 'saturo',
            details: '2024, Tusche, Acrylfarben, Acrylstifte, Transparentpapier auf Acrylpapier, 21 x 29,7 cm'
        },
        {
            file: 'works/malerei/17. weggeguckt,2017, Acrylfarben, Aquarell, Tombowstifte, versch. Papiere auf Holzpappe,            42 x 29,5 cm.JPG',
            title: 'weggeguckt',
            details: '2017, Acrylfarben, Aquarell, Tombowstifte, versch. Papiere auf Holzpappe, 42 x 29,5 cm'
        },
        {
            file: 'works/malerei/18.mil fontes, 2024 Tusche, Aquarell, Buntstifte, Acrylstifte auf Holzpappe           29,5 x 42 cm.jpg',
            title: 'mil fontes',
            details: '2024, Tusche, Aquarell, Buntstifte, Acrylstifte auf Holzpappe, 29,5 x 42 cm'
        },
        {
            file: 'works/malerei/19. still , 2026, Tusche, Transparentpapier auf Papier           14,8 x 21,00 cm.jpg',
            title: 'still',
            details: '2026, Tusche, Transparentpapier auf Papier, 14,8 x 21 cm'
        },
        {
            file: 'works/malerei/20. o.T., 2016, Graphit, Tombowstifte      42 x 29,5cm.JPG',
            title: 'o.T.',
            details: '2016, Graphit, Tombowstifte, 42 x 29,5 cm'
        },
        {
            file: 'works/malerei/21. bei mir, 2019 Tusche, Acrylstifte, Aquarellstifte       Acrylfarbe, versch.Papiere und Pappen auf Holzpappe          59,5 x 42 cm.jpg',
            title: 'bei mir',
            details: '2019, Tusche, Acrylstifte, Aquarellstifte, Acrylfarbe, versch. Papiere und Pappen auf Holzpappe, 59,5 x 42 cm'
        },
        {
            file: 'works/malerei/22. rio , 2025 Tusche, Aquarellstifte Acrylstifte auf Holzpappe           29,5 x 42cm.jpg',
            title: 'rio',
            details: '2025, Tusche, Aquarellstifte, Acrylstifte auf Holzpappe, 29,5 x 42 cm'
        },
        {
            file: 'works/malerei/23. das geheimnis der 3, 2019 Tusche, Acrylfarbe, Schellack, Graphit,Tombowstifte, Stoff, Pappen auf Holzpappe           100 x 70 cm.jpg',
            title: 'das geheimnis der 3',
            details: '2019, Tusche, Acrylfarbe, Schellack, Graphit, Tombowstifte, Stoff, Pappen auf Holzpappe, 100 x 70 cm'
        }
    ],
    zeichnung: [
        {
            file: 'works/zeichnung/meer 2015, Graphit, Graphitstaub, 73 x 102cm .JPG',
            title: 'meer',
            details: '2015, Graphit, Graphitstaub, 73 x 102 cm'
        },
        {
            file: 'works/zeichnung/meer 2 , 2015, Graphit, Graphitstaub auf Papier,  73 x 102cm .JPG',
            title: 'meer 2',
            details: '2015, Graphit, Graphitstaub auf Papier, 73 x 102 cm'
        },
        {
            file: 'works/zeichnung/meer 3 , 2015, Graphit, Graphitstaub, Buntstift 73 x 102cm.JPG',
            title: 'meer 3',
            details: '2015, Graphit, Graphitstaub, Buntstift, 73 x 102 cm'
        },
        {
            file: 'works/zeichnung/weich, 2025, Kohle auf Papier, 42x59cm.JPG',
            title: 'weich',
            details: '2025, Kohle auf Papier, 42 x 59 cm'
        },
        {
            file: 'works/zeichnung/2025, Kohle auf Papier, 42x59cm.jpg',
            title: 'o.T.',
            details: '2025, Kohle auf Papier, 42 x 59 cm'
        },
        {
            file: 'works/zeichnung/2025., Kohle auf Papier.jpg',
            title: 'o.T.',
            details: '2025, Kohle auf Papier'
        }
    ]
};

// State
let currentSection = 'malerei';
const currentSlide = { malerei: 0, zeichnung: 0 };
const isTransitioning = { malerei: false, zeichnung: false };

// Display a specific slide
function showSlide(gallery, index, instant) {
    if (isTransitioning[gallery]) return;

    const section = document.getElementById(gallery);
    if (!section) return;

    const img = section.querySelector('.slide-image');
    const titleEl = section.querySelector('.slide-title');
    const detailsEl = section.querySelector('.slide-details');
    const counterEl = section.querySelector('.slide-counter');
    const work = galleries[gallery][index];

    currentSlide[gallery] = index;

    // Update counter
    if (counterEl) {
        counterEl.textContent = (index + 1) + ' / ' + galleries[gallery].length;
    }

    if (instant) {
        const preload = new Image();
        preload.onload = function () {
            img.src = this.src;
            img.alt = work.title;
            titleEl.textContent = work.title;
            detailsEl.textContent = work.details;
            img.classList.add('loaded');
        };
        preload.src = encodeURI(work.file);
        return;
    }

    isTransitioning[gallery] = true;
    img.classList.remove('loaded');

    setTimeout(() => {
        const preload = new Image();
        preload.onload = function () {
            img.src = this.src;
            img.alt = work.title;
            titleEl.textContent = work.title;
            detailsEl.textContent = work.details;
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    img.classList.add('loaded');
                    isTransitioning[gallery] = false;
                });
            });
        };
        preload.onerror = function () {
            titleEl.textContent = work.title;
            detailsEl.textContent = work.details + ' (Bild nicht gefunden)';
            isTransitioning[gallery] = false;
        };
        preload.src = encodeURI(work.file);
    }, 250);
}

// Navigate (direction: -1 or +1)
function navigate(gallery, direction) {
    const total = galleries[gallery].length;
    let index = currentSlide[gallery] + direction;
    if (index >= total) index = 0;
    if (index < 0) index = total - 1;
    showSlide(gallery, index);
}

// Switch section
function switchSection(sectionId) {
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    const target = document.getElementById(sectionId);
    if (target) target.classList.add('active');

    document.querySelectorAll('[data-section]').forEach(a => a.classList.remove('active'));
    const activeLink = document.querySelector('[data-section="' + sectionId + '"]:not(.logo)');
    if (activeLink) activeLink.classList.add('active');

    currentSection = sectionId;
}

// Init
document.addEventListener('DOMContentLoaded', () => {

    // Hamburger menu
    const hamburger = document.querySelector('.hamburger');
    const sidebar = document.querySelector('.sidebar');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('open');
            sidebar.classList.toggle('menu-open');
        });
    }

    // Nav clicks
    document.querySelectorAll('[data-section]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            switchSection(link.dataset.section);
            // Close mobile menu
            if (hamburger) {
                hamburger.classList.remove('open');
                sidebar.classList.remove('menu-open');
            }
        });
    });

    // Arrow clicks
    document.querySelectorAll('.arrow-left').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const gallery = btn.closest('.slideshow').dataset.gallery;
            navigate(gallery, -1);
        });
    });

    document.querySelectorAll('.arrow-right').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const gallery = btn.closest('.slideshow').dataset.gallery;
            navigate(gallery, 1);
        });
    });

    // Click on image to advance
    document.querySelectorAll('.slide-image').forEach(img => {
        img.addEventListener('click', () => {
            const gallery = img.closest('.slideshow').dataset.gallery;
            navigate(gallery, 1);
        });
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!galleries[currentSection]) return;
        if (e.key === 'ArrowLeft') {
            e.preventDefault();
            navigate(currentSection, -1);
        }
        if (e.key === 'ArrowRight') {
            e.preventDefault();
            navigate(currentSection, 1);
        }
    });

    // Touch swipe navigation
    let touchStartX = 0;
    let touchEndX = 0;

    document.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    document.addEventListener('touchend', (e) => {
        if (!galleries[currentSection]) return;
        touchEndX = e.changedTouches[0].screenX;
        const diff = touchStartX - touchEndX;
        if (Math.abs(diff) > 50) {
            navigate(currentSection, diff > 0 ? 1 : -1);
        }
    }, { passive: true });

    // Load first slides instantly (no fade delay)
    showSlide('malerei', 0, true);
    showSlide('zeichnung', 0, true);
});
