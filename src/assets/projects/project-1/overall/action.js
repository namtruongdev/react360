export const initializeAPIDemo = (api) => {
  api.hotspots.onAction(({ hotspotInfo }) => {
    const switchBtn = document.querySelector('#switchBtn');
    const menu = document.querySelector('#menu');
    switch (hotspotInfo.clickDataParam) {
      case 4:
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
          window.$('.test').maphilight();
        });
        closeFloor4.addEventListener('click', () => {
          floor4.style.opacity = '0';
          switchBtn.style.display = 'block';
          menu.style.display = 'block';
          setTimeout(() => {
            floor4.style.zIndex = -1;
          }, 1000);
        });
        break;
      case 6:
        window.location.assign(hotspotInfo.url);
        break;

      case 7:
        const img = document.querySelector('#popup');

        switchBtn.style.display = 'none';
        menu.style.display = 'none';
        img.src =
          '/assets/projects/project-1/overall/published/360_assets/COR49_Billancourt/images/0001-hover.jpg';
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
        break;

      default:
        alert('haha');
        break;
    }
  });

  let config = {
    status: false,
    path:
      '/assets/projects/project-1/overall/published/360_assets/COR49_Billancourt/COR49_Billancourt.xml',
  };

  // window.$(document).ready(function () {
  //   window.$('.spot3_indicator').css('opacity', '0');
  // });

  // window.$('.spot3_indicator').hover(
  //   function () {
  //     window.$(this).css('opacity', '1');
  //     window.$(this).css('transition', 'all .5s ease');
  //   },
  //   function () {
  //     window.$(this).css('opacity', '0');
  //     window.$(this).css('transition', 'all .5s ease');
  //   }
  // );

  window.$('#switchBtn').click((e) => {
    e.preventDefault();

    if (config.status) {
      config.status = false;
      config.path =
        '/assets/projects/project-1/overall/published/360_assets/COR49_Billancourt/COR49_Billancourt.xml';
    } else {
      config.status = true;
      config.path =
        '/assets/projects/project-2/overall/IntegrationTemplates/360_assets/VansShoe/VansShoe.xml';
    }

    api.reload(
      config.path,
      null,
      () => {
        // window.$(document).ready(function () {
        //   window.$('.spot3_indicator').css('opacity', '0');
        // });
        // window.$('.spot3_indicator').hover(
        //   function () {
        //     window.$(this).css('opacity', '1');
        //     window.$(this).css('transition', 'all .5s ease');
        //   },
        //   function () {
        //     window.$(this).css('transition', 'all .5s ease');
        //     window.$(this).css('opacity', '0');
        //   }
        // );
      },
      api.images.getCurrentImageIndex()
    );
  });
};
