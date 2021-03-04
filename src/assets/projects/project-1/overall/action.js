export const initializeAPIDemo = (api) => {
  window.$(function () {
    window.$('#floor4-image').maphilight();
  });

  let config = {
    status: false,
    path: '/assets/projects/project-1/overall/COR49_Billancourt.xml',
  };
  const switchBtn = document.querySelector('#switchBtn');
  switchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (config.status) {
      config.status = false;
      config.path = '/assets/projects/project-1/overall/COR49_Billancourt.xml';
    } else {
      config.status = true;
      config.path =
        '/assets/projects/project-2/overall/IntegrationTemplates/360_assets/VansShoe/VansShoe.xml';
    }
    api.reload(
      config.path,
      null,
      () => {
        const menu = document.querySelector('#menu');
        const spot4 = document.querySelector(
          '#wr360DynamicSpot_spot4_wr360PlayerId'
        );
        const spot6 = document.querySelector(
          '#wr360DynamicSpot_spot6_wr360PlayerId'
        );
        const spot7 = document.querySelector(
          '#wr360DynamicSpot_spot7_wr360PlayerId'
        );
        const spot8 = document.querySelector(
          '#wr360DynamicSpot_spot8_wr360PlayerId'
        );

        spot4.addEventListener('click', (e) => {
          e.preventDefault();
          const floor4 = document.querySelector('.floor-4');
          const closeFloor4 = document.querySelector('.closeFloor4');
          switchBtn.style.display = 'none';
          menu.style.display = 'none';
          floor4.style.background = '#fff';
          floor4.style.display = 'flex';
          floor4.style.justifyContent = 'center';
          floor4.style.alignItems = 'center';
          floor4.style.width = '100vw';
          floor4.style.height = '100vh';
          floor4.style.transition = 'opacity 1s ease';
          floor4.style.position = 'absolute';
          floor4.style.left = '0';
          floor4.style.top = '50%';
          floor4.style.transform = 'translateY(-50%)';
          floor4.style.zIndex = '11';
          floor4.style.opacity = 1;

          closeFloor4.addEventListener('click', () => {
            floor4.style.opacity = '0';
            switchBtn.style.display = 'block';
            menu.style.display = 'block';
            setTimeout(() => {
              floor4.style.zIndex = -1;
            }, 1000);
          });
        });

        spot6.addEventListener('click', (e) => {
          e.preventDefault();
          window.location.assign(
            'https://studiotocdo.vn/wp-content/uploads/vv360/VV2%20116/tour.html'
          );
        });

        spot7.addEventListener('click', () => {
          const img = document.querySelector('#popup');
          switchBtn.style.display = 'none';
          menu.style.display = 'none';
          img.src = '/assets/projects/project-1/overall/images/0001-hover.jpg';
          img.style.transition = 'opacity 1s ease';
          img.style.width = '100vw';
          img.style.position = 'absolute';
          img.style.left = '0';
          img.style.top = '50%';
          img.style.transform = 'translateY(-50%)';
          img.style.zIndex = '11';
          img.style.opacity = 1;
          img.style.cursor = 'pointer';
          img.addEventListener('click', () => {
            img.style.opacity = '0';
            switchBtn.style.display = 'block';
            menu.style.display = 'block';
            setTimeout(() => {
              img.src = '#';
            }, 1000);
          });
        });
      },
      api.images.getCurrentImageIndex()
    );
  });

  const menu = document.querySelector('#menu');
  const spot4 = document.querySelector('#wr360DynamicSpot_spot4_wr360PlayerId');
  const spot6 = document.querySelector('#wr360DynamicSpot_spot6_wr360PlayerId');
  const spot7 = document.querySelector('#wr360DynamicSpot_spot7_wr360PlayerId');
  const spot8 = document.querySelector('#wr360DynamicSpot_spot8_wr360PlayerId');

  spot4.addEventListener('click', (e) => {
    e.preventDefault();
    const floor4 = document.querySelector('.floor-4');
    const closeFloor4 = document.querySelector('.closeFloor4');
    switchBtn.style.display = 'none';
    menu.style.display = 'none';
    floor4.style.background = '#fff';
    floor4.style.display = 'flex';
    floor4.style.justifyContent = 'center';
    floor4.style.alignItems = 'center';
    floor4.style.width = '100vw';
    floor4.style.height = '100vh';
    floor4.style.transition = 'opacity 1s ease';
    floor4.style.position = 'absolute';
    floor4.style.left = '0';
    floor4.style.top = '50%';
    floor4.style.transform = 'translateY(-50%)';
    floor4.style.zIndex = '11';
    floor4.style.opacity = 1;
    window.$(function () {
      window.$('#floor4-image').maphilight();
    });
    closeFloor4.addEventListener('click', () => {
      floor4.style.opacity = '0';
      switchBtn.style.display = 'block';
      menu.style.display = 'block';
      setTimeout(() => {
        floor4.style.zIndex = -1;
      }, 1000);
    });
  });

  spot6.addEventListener('click', () => {
    window.location.assign(
      'https://studiotocdo.vn/wp-content/uploads/vv360/VV2%20116/tour.html'
    );
  });

  spot7.addEventListener('click', () => {
    const img = document.querySelector('#popup');
    switchBtn.style.display = 'none';
    menu.style.display = 'none';
    img.src = '/assets/projects/project-1/overall/images/0001-hover.jpg';
    img.style.transition = 'opacity 1s ease';
    img.style.width = '100vw';
    img.style.position = 'absolute';
    img.style.left = '0';
    img.style.top = '50%';
    img.style.transform = 'translateY(-50%)';
    img.style.zIndex = '11';
    img.style.opacity = 1;
    img.style.cursor = 'pointer';
    img.addEventListener('click', () => {
      img.style.opacity = '0';
      switchBtn.style.display = 'block';
      menu.style.display = 'block';
      setTimeout(() => {
        img.src = '#';
      }, 1000);
    });
  });
};
