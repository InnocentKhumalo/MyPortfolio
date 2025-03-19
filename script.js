document.addEventListener('DOMContentLoaded', function () {
    const inputs = [
        { input: document.getElementById('fullnameInput'), label: document.getElementById('FullNames') },
        { input: document.getElementById('emailInput'), label: document.getElementById('EmailAddress') },
        { input: document.getElementById('numberInput'), label: document.getElementById('UserNumber') }
    ];

    inputs.forEach(({ input, label }) => {
        input.addEventListener('focus', () => {
            label.style.transform = 'translateY(23px)';
            label.style.backgroundColor = 'rgba(6, 20, 37, 0.15)';
            label.style.backdropFilter = 'blur(15px)';
        });

        input.addEventListener('blur', () => {
            if (input.value === '') {
                label.style.transform = 'translateY(45px)';
                label.style.backgroundColor = '';
                label.style.backdropFilter = '';
            }
        });

        // Initial check to place the label correctly if there is a value
        if (input.value !== '') {
            label.style.transform = 'translateY(23px)';
            label.style.backgroundColor = 'rgba(6, 20, 37, 0.15)';
            label.style.backdropFilter = 'blur(15px)';
        }
    });
});


function showMenuBar() {
    if (document.getElementById('menu').style.display === "") {
        document.getElementById('menu').style.display = "block";
        document.getElementById("fa-bars").style.display = "none";
        document.getElementById("fa-close").style.display = "block";
    } else {
        document.getElementById('menu').style.display = "";
    }
}
function closeMenu() {
        document.getElementById('menu').style.display = "";
        document.getElementById('fa-bars').style.display = "block";
        document.getElementById('fa-close').style.display = "";
}

function openResume() {
    var resume = 'documents/Resume of Mr Khumalo.pdf';
    window.open(resume, '_blank');
}

function openPortfolio() {
    window.open("https://innocentkhumalo.github.io/Portfolio/Portfolio.html", "_blank");
}

function openLocalIT() {
    window.open("https://innocentkhumalo.github.io/LocalIT/", "_blank");
}
function openbeautySpa() {
    window.open("https://innocentkhumalo.github.io/BeautySpar/", "_blank");
}
function openCoinSimplicity() {
    window.open("https://innocentkhumalo.github.io/CoinSimplicity/", "_blank");
}
function openDPD() {
    window.open("https://deviseprojectdevelopment.co.za", "_blank");
}

function closeRecruitment() {
    document.getElementById('recruitment-form').style.display = "";
}
function openRecruitment() {
    document.getElementById('recruitment-form').style.display = "flex";
}
