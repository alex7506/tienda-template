(function () {
    "use strict";

    // ===== Back to Top =====
    var backToTop = document.getElementById('backToTop');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 120) {
            backToTop.style.display = 'flex';
        } else {
            backToTop.style.display = 'none';
        }
    });

    if (backToTop) {
        backToTop.addEventListener('click', function (e) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }


    // ===== Navbar hover dropdown (desktop only) =====
    var dropdowns = document.querySelectorAll('.main-nav .navbar .dropdown');

    function addNavbarHover() {
        dropdowns.forEach(function (dropdown) {
            dropdown.addEventListener('mouseenter', onDropdownEnter);
            dropdown.addEventListener('mouseleave', onDropdownLeave);
        });
    }

    function removeNavbarHover() {
        dropdowns.forEach(function (dropdown) {
            dropdown.removeEventListener('mouseenter', onDropdownEnter);
            dropdown.removeEventListener('mouseleave', onDropdownLeave);
        });
    }

    function onDropdownEnter() {
        var toggle = this.querySelector('[data-bs-toggle="dropdown"]');
        if (toggle && !this.querySelector('.dropdown-menu').classList.contains('show')) {
            toggle.click();
        }
    }

    function onDropdownLeave() {
        var toggle = this.querySelector('[data-bs-toggle="dropdown"]');
        if (toggle && this.querySelector('.dropdown-menu').classList.contains('show')) {
            toggle.click();
        }
    }

    function initNavbarHover() {
        if (window.innerWidth > 992) {
            addNavbarHover();
        } else {
            removeNavbarHover();
        }
    }

    initNavbarHover();
    window.addEventListener('resize', initNavbarHover);


    // ===== Quantity Input =====
    document.addEventListener('click', function (e) {
        if (e.target.closest('.qty-input .btn-plus')) {
            var input = e.target.closest('.qty-input').querySelector('input');
            input.value = (parseInt(input.value) || 0) + 1;
        }
        if (e.target.closest('.qty-input .btn-minus')) {
            var input = e.target.closest('.qty-input').querySelector('input');
            var val = parseInt(input.value) || 0;
            if (val > 1) input.value = val - 1;
        }
    });


    // ===== Category Sidebar — cerrar al salir el mouse =====
    var catSidebarWrapper = document.querySelector('.col-lg-3.d-none.d-lg-flex');
    var catSidebar = document.getElementById('catSidebar');

    if (catSidebarWrapper && catSidebar) {
        catSidebarWrapper.addEventListener('mouseleave', function () {
            var bsCollapse = bootstrap.Collapse.getInstance(catSidebar);
            if (bsCollapse && catSidebar.classList.contains('show')) {
                bsCollapse.hide();
            }
        });
    }


    // ===== Sticky navbar shadow on scroll =====
    var mainNav = document.querySelector('.main-nav');

    window.addEventListener('scroll', function () {
        if (mainNav) {
            mainNav.style.boxShadow = window.scrollY > 10
                ? '0 4px 16px rgba(0,0,0,.25)'
                : '0 2px 8px rgba(0,0,0,.2)';
        }
    });


    // ===== Related Slider =====
    var slider = document.getElementById('relatedSlider');
    if (slider) {
        var wrapper = slider.closest('.related-slider-wrapper');
        var btnPrev = wrapper.querySelector('.related-slider-btn.prev');
        var btnNext = wrapper.querySelector('.related-slider-btn.next');

        function getScrollAmount() {
            var card = slider.querySelector('.product-card');
            return card ? card.offsetWidth + 20 : 280;
        }

        btnPrev.addEventListener('click', function () {
            slider.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' });
        });

        btnNext.addEventListener('click', function () {
            slider.scrollBy({ left: getScrollAmount(), behavior: 'smooth' });
        });
    }

})();
