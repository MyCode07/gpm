document.addEventListener('click', function (e) {
    let targetEl = e.target;

    if (targetEl.classList.contains('select-input')) {
        const ativeSelect = document.querySelector('.select-input._active');

        if (ativeSelect && ativeSelect !== targetEl) {
            ativeSelect.classList.remove('_active')
        }
        targetEl.classList.toggle('_active')
    }

    if ((targetEl.closest('.select-body') || targetEl.closest('.select-input')) && targetEl.hasAttribute('data-id')) {
        const ativeSelectOption = targetEl.closest('.select-body').querySelector('span._active');

        const select = targetEl.closest('.select-input');
        const label = select.querySelector('label')

        label.textContent = targetEl.textContent
        label.dataset.id = targetEl.dataset.id

        if (ativeSelectOption) {
            ativeSelectOption.classList.remove('_active')
        }
        targetEl.classList.add('_active')

        select.classList.remove('_active')
    }

    if (!targetEl.classList.contains('select-input') && !targetEl.closest('.select-input') && document.querySelector('.select-input._active')) {
        document.querySelector('.select-input._active').classList.remove('_active')
    }

    if (targetEl.classList.contains('more-filters')) {
        const grid = targetEl.previousElementSibling;

        grid.classList.toggle('_active')

        if (grid.classList.contains('_active')) {
            targetEl.textContent = targetEl.dataset.textHide
        }
        else {
            targetEl.textContent = targetEl.dataset.textShow
        }
    }
})