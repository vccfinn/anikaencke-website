// Gallery data — manually curated from filenames
const galleries = {
    malerei: [
        {
            file: 'works/malerei/ über den fluss, 2025 Tusche, Acrylfarben, Aquarellstifte auf Holzpappe 29,5x42 cm.jpg',
            title: 'über den fluss',
            details: '2025, Tusche, Acrylfarben, Aquarellstifte auf Holzpappe, 29,5 x 42 cm'
        },
        {
            file: 'works/malerei/himmelsoweit, 2024,Acrylfarbe,Tusche ,Aquarell, Acrylstifte auf Holzpappe 50x70.cm.jpg',
            title: 'himmelsoweit',
            details: '2024, Acrylfarbe, Tusche, Aquarell, Acrylstifte auf Holzpappe, 50 x 70 cm'
        },
        {
            file: 'works/malerei/Iimmer tiefer bis auf den grund  2020, Acrylfarbe, Tusche, Stifte, Papier auf Holzpappe, 70x50cm.jpg',
            title: 'immer tiefer bis auf den grund',
            details: '2020, Acrylfarbe, Tusche, Stifte, Papier auf Holzpappe, 70 x 50 cm'
        },
        {
            file: 'works/malerei/meergleisig, 2017, Acrylstifte ,Buntstifteauf Aquarellpapier, 21 x 29,7cm.jpg',
            title: 'meergleisig',
            details: '2017, Acrylstifte, Buntstifte auf Aquarellpapier, 21 x 29,7 cm'
        },
        {
            file: 'works/malerei/mil fontes, 2024, Tusche, Aquarelll,Buntstifte Acrylstifte auf Holzpappe29,5x42cm.jpg',
            title: 'mil fontes',
            details: '2024, Tusche, Aquarell, Buntstifte, Acrylstifte auf Holzpappe, 29,5 x 42 cm'
        },
        {
            file: 'works/malerei/rio ,2025, Tusche, Eachsmaler, Acrylstifte auf Hilzpappe 29,5x42cm.jpg',
            title: 'rio',
            details: '2025, Tusche, Wachsmaler, Acrylstifte auf Holzpappe, 29,5 x 42 cm'
        },
        {
            file: 'works/malerei/saturo, 2024., Tusche, Acrylfarben, Acrylstifte, Transparentpapier auf Acrylpapier, 21 x 29,7 cm.jpg',
            title: 'saturo',
            details: '2024, Tusche, Acrylfarben, Acrylstifte, Transparentpapier auf Acrylpapier, 21 x 29,7 cm'
        },
        {
            file: 'works/malerei/verbunden 2025,, Tusche, Aquarell 29,5x42cm.jpg',
            title: 'verbunden',
            details: '2025, Tusche, Aquarell, 29,5 x 42 cm'
        },
        {
            file: 'works/malerei/wieder, 2025 Tusche Graphit, farbiges transpparentpapier auf Holzpappe, 42x 29,7cm.jpg',
            title: 'wieder',
            details: '2025, Tusche, Graphit, farbiges Transparentpapier auf Holzpappe, 42 x 29,7 cm'
        },
        {
            file: 'works/malerei/2026, Tusche ,Papier auf Holzpappe, 42 x 29,5.jpeg',
            title: 'o.T.',
            details: '2026, Tusche, Papier auf Holzpappe, 42 x 29,5 cm'
        },
        {
            file: 'works/malerei/2026, Tusche auf Papier 14,8 x 21,00 cm.jpg',
            title: 'o.T.',
            details: '2026, Tusche auf Papier, 14,8 x 21 cm'
        },
        {
            file: 'works/malerei/I2026, , Tusche auf Holzpappe ,i70x50cm.JPG',
            title: 'o.T.',
            details: '2026, Tusche auf Holzpappe, 70 x 50 cm'
        },
        {
            file: 'works/malerei/Das Geheimnis der 3, 2019 ,.Tusche, Acrylfarbe,Schellack, 100x 70 cm, Graphit,Tombowstifte, Stoff, ,Pappen auf Holzpappe ,.jpg',
            title: 'Das Geheimnis der 3',
            details: '2019, Tusche, Acrylfarbe, Schellack, Graphit, Tombowstifte, Stoff, Pappen auf Holzpappe, 100 x 70 cm'
        },
        {
            file: 'works/malerei/Im blauen Meer, 2019, Acrylstifte,Acryl, Aquarellstifte, Tusche, Graphit, Pappe auf Holzpappe, 70x50 cm.jpg',
            title: 'Im blauen Meer',
            details: '2019, Acrylstifte, Acryl, Aquarellstifte, Tusche, Graphit, Pappe auf Holzpappe, 70 x 50 cm'
        },
        {
            file: 'works/malerei/mit dir 2017, Tusche, Acryl, Graphit, Pappe auf Holzpappe, 100x70 cm.jpg',
            title: 'mit dir',
            details: '2017, Tusche, Acryl, Graphit, Pappe auf Holzpappe, 100 x 70 cm'
        },
        {
            file: 'works/malerei/Tischleindeckdich, 2024, Aquarell, Acrylstifte,Tusche auf Aquarellpapier .jpg',
            title: 'Tischleindeckdich',
            details: '2024, Aquarell, Acrylstifte, Tusche auf Aquarellpapier'
        },
        {
            file: 'works/malerei/eiszeit, 2026, Tusche, Papier auf Papier, 14,8 x 21cm, 000cm.JPG',
            title: 'eiszeit',
            details: '2026, Tusche, Papier auf Papier, 14,8 x 21 cm'
        },
        {
            file: 'works/malerei/see,2022,AcrylfarbeAcrylstifte, Aquarelll, Transparentpapier auf Holzpappe , 29,5x42cm.JPG',
            title: 'see',
            details: '2022, Acrylfarbe, Acrylstifte, Aquarell, Transparentpapier auf Holzpappe, 29,5 x 42 cm'
        },
        {
            file: 'works/malerei/sicilia, 2016, Tusche, Acrylstifte, Papier auf Papier 31,5x 23,5cm.JPG',
            title: 'sicilia',
            details: '2016, Tusche, Acrylstifte, Papier auf Papier, 31,5 x 23,5 cm'
        },
        {
            file: 'works/malerei/2016, Acryl Pappe auf Holz , 14,7x21cm.jpg',
            title: 'o.T.',
            details: '2016, Acryl, Pappe auf Holz, 14,7 x 21 cm'
        },
        {
            file: 'works/malerei/2017,Acrylfarben Buntstifte, Tombowstifte..Klebe, band, Transparentpapier  auf Aquarellpapierj, 30 x 40 cm.jpg',
            title: 'o.T.',
            details: '2017, Acrylfarben, Buntstifte, Tombowstifte, Klebeband, Transparentpapier auf Aquarellpapier, 30 x 40 cm'
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

    // Nav clicks
    document.querySelectorAll('[data-section]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            switchSection(link.dataset.section);
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

    // Load first slides instantly (no fade delay)
    showSlide('malerei', 0, true);
    showSlide('zeichnung', 0, true);
});
