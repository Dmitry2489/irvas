import calcScroll from './calcScroll';

const images = () => {
    const imgPopup = document.createElement('div'),
        workSection = document.querySelector('.works'),
        bigImage = document.createElement('img'),
        scroll = calcScroll();

    imgPopup.classList.add('popup');
    bigImage.classList.add('faded');

    imgPopup.appendChild(bigImage);
    imgPopup.style.justifyContent = 'center';
    imgPopup.style.alignItems = 'center';
    imgPopup.style.display = 'none';
    bigImage.style.cssText = 'width: 50%; height: 70%;';



    workSection.addEventListener('click', (e) => {
        workSection.appendChild(imgPopup);
        e.preventDefault();
        let target = e.target;
        if (target && target.classList.contains('preview')) {
            imgPopup.style.display = 'flex';
            document.body.style.overflow = 'hidden';
            document.body.style.marginRight = `${scroll}px`;

            const path = target.parentNode.getAttribute('href');
            bigImage.setAttribute('src', path);
        }

        if (target && target.matches('div.popup')) {
            imgPopup.style.display = 'none';
            document.body.style.overflow = '';
            document.body.style.marginRight = `0px`;
            imgPopup.remove();
        }
    });


};
export default images;