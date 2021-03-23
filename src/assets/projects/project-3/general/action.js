export const initializeAPIDemo = (api) => {
  window.$(function () {
    window.$('#floor4-image').maphilight();
  });

  let config = {
    status: false,
    path: '/assets/projects/project-3/general/config.xml',
  };

  const popUp = document.querySelector('#popup');
  const virtual_360 = document.querySelector('#virtual_360');
  const image_360 = document.querySelector('#image_360');
  const switchBtn0 = document.querySelector('#floor0');
  const overlay = document.querySelector('#overlay');
  const icon_btn = document.querySelector('#iconPreview')

  switchBtn0.addEventListener('click', (e) => {
    overlay.style.display = 'block';
    popUp.style.display = 'none';
    e.preventDefault();
    config.path = '/assets/projects/project-3/snow/360_assets/Snow.xml';
    try {
      api.reload(
        config.path,
        null,
        () => {
          overlay.style.display = 'none';
        },
        api.images.getCurrentImageIndex()
      );
    } catch {
      console.warn('Ấn chậm thôi <3');
    }
  });

  const switchBtn1 = document.querySelector('#floor1');
  switchBtn1.addEventListener('click', (e) => {
    overlay.style.display = 'block';
    popUp.style.display = 'none';
    e.preventDefault();
    config.path =
      '/assets/projects/project-3/floor/Floor8/360_assets/Floor8.xml';
    try {
      api.reload(
        config.path,
        null,
        () => {
          overlay.style.display = 'none';
        },
        api.images.getCurrentImageIndex()
      );
    } catch {
      console.warn('Ấn chậm thôi <3');
    }
  });

  const switchBtn2 = document.querySelector('#floor2');
  switchBtn2.addEventListener('click', (e) => {
    overlay.style.display = 'block';
    popUp.style.display = 'none';
    e.preventDefault();
    config.path =
      '/assets/projects/project-3/floor/Floor7/360_assets/Floor7.xml';

    try {
      api.reload(
        config.path,
        null,
        () => {
          overlay.style.display = 'none';
        },
        api.images.getCurrentImageIndex()
      );
    } catch {
      console.warn('Ấn chậm thôi <3');
    }
  });

  const switchBtn3 = document.querySelector('#floor3');
  switchBtn3.addEventListener('click', (e) => {
    overlay.style.display = 'block';
    popUp.style.display = 'none';
    e.preventDefault();
    config.path =
      '/assets/projects/project-3/floor/Floor6/360_assets/Floor6.xml';

    try {
      api.reload(
        config.path,
        null,
        () => {
          overlay.style.display = 'none';
        },
        api.images.getCurrentImageIndex()
      );
    } catch {
      console.warn('Ấn chậm thôi <3');
    }
  });

  const switchBtn4 = document.querySelector('#floor4');
  switchBtn4.addEventListener('click', (e) => {
    overlay.style.display = 'block';
    popUp.style.display = 'none';
    e.preventDefault();
    config.path =
      '/assets/projects/project-3/floor/Floor5/360_assets/Floor5.xml';

    try {
      api.reload(
        config.path,
        null,
        () => {
          overlay.style.display = 'none';
        },
        api.images.getCurrentImageIndex()
      );
    } catch {
      console.warn('Ấn chậm thôi <3');
    }
  });

  const switchBtn5 = document.querySelector('#floor5');
  switchBtn5.addEventListener('click', (e) => {
    overlay.style.display = 'block';
    popUp.style.display = 'none';
    e.preventDefault();
    config.path =
      '/assets/projects/project-3/floor/Floor4/360_assets/Floor4.xml';

    try {
      api.reload(
        config.path,
        null,
        () => {
          overlay.style.display = 'none';
        },
        api.images.getCurrentImageIndex()
      );
    } catch {
      console.warn('Ấn chậm thôi <3');
    }
  });

  const switchBtn6 = document.querySelector('#floor6');
  switchBtn6.addEventListener('click', (e) => {
    overlay.style.display = 'block';
    popUp.style.display = 'none';
    e.preventDefault();
    config.path =
      '/assets/projects/project-3/floor/Floor3/360_assets/Floor3.xml';

    try {
      api.reload(
        config.path,
        null,
        () => {
          overlay.style.display = 'none';
        },
        api.images.getCurrentImageIndex()
      );
    } catch {
      console.warn('Ấn chậm thôi <3');
    }
  });

  const switchBtn7 = document.querySelector('#floor7');
  switchBtn7.addEventListener('click', (e) => {
    overlay.style.display = 'block';
    popUp.style.display = 'none';
    e.preventDefault();
    config.path =
      '/assets/projects/project-3/floor/Floor2/360_assets/Floor2.xml';

    try {
      api.reload(
        config.path,
        null,
        () => {
          overlay.style.display = 'none';
        },
        api.images.getCurrentImageIndex()
      );
    } catch {
      console.warn('Ấn chậm thôi <3');
    }
  });

  const switchBtn8 = document.querySelector('#floor8');
  switchBtn8.addEventListener('click', (e) => {
    overlay.style.display = 'block';
    popUp.style.display = 'none';
    e.preventDefault();
    config.path =
      '/assets/projects/project-3/floor/Floor1/360_assets/Floor1.xml';

    try {
      api.reload(
        config.path,
        null,
        () => {
          overlay.style.display = 'none';
        },
        api.images.getCurrentImageIndex()
      );
    } catch {
      console.warn('Ấn chậm thôi <3');
    }
  });

  const switchBtn9 = document.querySelector('#floor9');
  switchBtn9.addEventListener('click', (e) => {
    overlay.style.display = 'block';
    popUp.style.display = 'none';
    e.preventDefault();
    config.path =
      '/assets/projects/project-3/floor/Floor0/360_assets/Floor0.xml';

    try {
      api.reload(
        config.path,
        null,
        () => {
          overlay.style.display = 'none';
        },
        api.images.getCurrentImageIndex()
      );
    } catch {
      console.warn('Ấn chậm thôi <3');
    }
  });

  const switchBtn10 = document.querySelector('#floor10');
  switchBtn10.addEventListener('click', (e) => {
    overlay.style.display = 'block';
    e.preventDefault();
    config.path = '/assets/projects/project-3/general/config.xml';

    try {
      api.reload(
        config.path,
        null,
        () => {
          overlay.style.display = 'none';
          const spot2 = document.querySelector('#wr360DynamicSpot_spot2_wr360PlayerId');
          const spot3 = document.querySelector('#wr360DynamicSpot_spot3_wr360PlayerId');
          const spot5 = document.querySelector('#wr360DynamicSpot_spot5_wr360PlayerId');
          const spot7 = document.querySelector('#wr360DynamicSpot_spot7_wr360PlayerId');
          const spot8 = document.querySelector('#wr360DynamicSpot_spot8_wr360PlayerId');

          spot2.addEventListener('mouseenter', () => {
            spot2.append(popUp);
            popUp.style.display = 'flex';
            virtual_360.disabled = false;
            virtual_360.style.cursor = 'pointer';
            icon_btn.style.cursor = 'pointer';

            virtual_360.addEventListener('click', () => {
              preview.style.display = 'block'
              iframe.src = '/assets/projects/project-3/floor/Floor2/Virtual_360/tour.html';
              img.remove();
              preview.append(iframe);
            });

            image_360.addEventListener('click', () => {
              preview.style.display = 'block'
              img.src = "/assets/projects/project-3/floor/Floor2/360_image/T2_305B.jpg";
              iframe.remove();
              preview.append(img);
            });
          });

          spot2.addEventListener('mouseleave', () => {
            popUp.style.display = 'none';
          });

          spot3.addEventListener('mouseenter', () => {
            spot3.append(popUp);
            popUp.style.display = 'flex';
            icon_btn.style.cursor = 'pointer';
            virtual_360.disabled = false;
            virtual_360.style.cursor = 'pointer'

            virtual_360.addEventListener('click', () => {
              preview.style.display = 'block'
              iframe.src = '/assets/projects/project-3/floor/Floor3/Virtual_360/tour.html';
              img.remove();
              preview.append(iframe);
            });

            image_360.addEventListener('click', () => {
              preview.style.display = 'block'
              img.src = '/assets/projects/project-3/floor/Floor3/360_image/T3_202B.jpg';
              iframe.remove();
              preview.append(img);
            });
          });

          spot3.addEventListener('mouseleave', () => {
            popUp.style.display = 'none';
          });

          spot5.addEventListener('mouseenter', () => {
            spot5.append(popUp);
            popUp.style.display = 'flex';
            virtual_360.disabled = false;
            virtual_360.style.cursor = 'pointer'
            icon_btn.style.cursor = 'pointer';

            virtual_360.addEventListener('click', () => {
              preview.style.display = 'block'
              iframe.src = '/assets/projects/project-3/floor/Floor5/Virtual_360/tour.html';
              img.remove();
              preview.append(iframe);
            });

            image_360.addEventListener('click', () => {
              preview.style.display = 'block'
              img.src = '/assets/projects/project-3/floor/Floor5/360_image/T5_2001A.jpg';
              iframe.remove();
              preview.append(img);
            });
          });

          spot5.addEventListener('mouseleave', () => {
            popUp.style.display = 'none';
          });

          spot7.addEventListener('mouseenter', () => {
            spot7.append(popUp);
            popUp.style.display = 'flex';

            virtual_360.disabled = true;
            virtual_360.style.cursor = 'not-allowed'
            icon_btn.style.cursor = 'not-allowed';

            image_360.addEventListener('click', () => {
              preview.style.display = 'block'
              img.src = '/assets/projects/project-3/floor/Floor7/360_image/T7_402B.jpg';
              iframe.remove();
              preview.append(img);
            });
          });

          spot7.addEventListener('mouseleave', () => {
            popUp.style.display = 'none';
          })

          spot8.addEventListener('mouseenter', () => {
            spot8.append(popUp);
            popUp.style.display = 'flex';

            virtual_360.disabled = true;
            virtual_360.style.cursor = 'not-allowed'
            icon_btn.style.cursor = 'not-allowed';

            image_360.addEventListener('click', () => {
              preview.style.display = 'block'
              img.src = '/assets/projects/project-3/floor/Floor8/360_image/T8_402B.jpg';
              iframe.remove();
              preview.append(img);
            });
          });

          spot8.addEventListener('mouseleave', () => {
            popUp.style.display = 'none';
          });
        },
        api.images.getCurrentImageIndex()
      );
    } catch {
      console.warn('Ấn chậm thôi <3');
    }
  });

  const spot2 = document.querySelector('#wr360DynamicSpot_spot2_wr360PlayerId');
  const spot3 = document.querySelector('#wr360DynamicSpot_spot3_wr360PlayerId');
  const spot5 = document.querySelector('#wr360DynamicSpot_spot5_wr360PlayerId');
  const spot7 = document.querySelector('#wr360DynamicSpot_spot7_wr360PlayerId');
  const spot8 = document.querySelector('#wr360DynamicSpot_spot8_wr360PlayerId');
  const preview = document.querySelector('.preview_360');
  const closePreview = document.querySelector('.close-preview');
  const img = document.createElement('img');
  const iframe = document.createElement('iframe');

  spot2.addEventListener('mouseenter', () => {
    spot2.append(popUp);
    popUp.style.display = 'flex';

    virtual_360.disabled = false;
    virtual_360.style.cursor = 'pointer';
    icon_btn.style.cursor = 'pointer';

    virtual_360.addEventListener('click', () => {
      preview.style.display = 'block'
      iframe.src = '/assets/projects/project-3/floor/Floor2/Virtual_360/tour.html';
      img.remove();
      preview.append(iframe);
    });

    image_360.addEventListener('click', () => {
      preview.style.display = 'block'
      img.src = "/assets/projects/project-3/floor/Floor2/360_image/T2_305B.jpg";
      iframe.remove();
      preview.append(img);
    });
  });

  spot2.addEventListener('mouseleave', () => {
    popUp.style.display = 'none';
  });

  spot3.addEventListener('mouseenter', () => {
    spot3.append(popUp);
    popUp.style.display = 'flex';
    icon_btn.style.cursor = 'pointer';


    virtual_360.disabled = false;
    virtual_360.style.cursor = 'pointer'


    virtual_360.addEventListener('click', () => {
      preview.style.display = 'block'
      iframe.src = '/assets/projects/project-3/floor/Floor3/Virtual_360/tour.html';
      img.remove();
      preview.append(iframe);
    });

    image_360.addEventListener('click', () => {
      preview.style.display = 'block'
      img.src = '/assets/projects/project-3/floor/Floor3/360_image/T3_202B.jpg';
      iframe.remove();
      preview.append(img);
    });
  });

  spot3.addEventListener('mouseleave', () => {
    popUp.style.display = 'none';
  });

  spot5.addEventListener('mouseenter', () => {
    spot5.append(popUp);
    popUp.style.display = 'flex';
    virtual_360.disabled = false;
    virtual_360.style.cursor = 'pointer'
    icon_btn.style.cursor = 'pointer';


    virtual_360.addEventListener('click', () => {
      preview.style.display = 'block'
      iframe.src = '/assets/projects/project-3/floor/Floor5/Virtual_360/tour.html';
      img.remove();
      preview.append(iframe);
    });

    image_360.addEventListener('click', () => {
      preview.style.display = 'block'
      img.src = '/assets/projects/project-3/floor/Floor5/360_image/T5_2001A.jpg';
      iframe.remove();
      preview.append(img);
    });
  });

  spot5.addEventListener('mouseleave', () => {
    popUp.style.display = 'none';
  });

  spot7.addEventListener('mouseenter', () => {
    spot7.append(popUp);
    popUp.style.display = 'flex';

    virtual_360.disabled = true;
    virtual_360.style.cursor = 'not-allowed'
    icon_btn.style.cursor = 'not-allowed';



    image_360.addEventListener('click', () => {
      preview.style.display = 'block'
      img.src = '/assets/projects/project-3/floor/Floor7/360_image/T7_402B.jpg';
      iframe.remove();
      preview.append(img);
    });
  });

  spot7.addEventListener('mouseleave', () => {
    popUp.style.display = 'none';
  })

  spot8.addEventListener('mouseenter', () => {
    spot8.append(popUp);
    popUp.style.display = 'flex';

    virtual_360.disabled = true;
    virtual_360.style.cursor = 'not-allowed'
    icon_btn.style.cursor = 'not-allowed';


    image_360.addEventListener('click', () => {
      preview.style.display = 'block'
      img.src = '/assets/projects/project-3/floor/Floor8/360_image/T8_402B.jpg';
      iframe.remove();
      preview.append(img);
    });
  });

  spot8.addEventListener('mouseleave', () => {
    popUp.style.display = 'none';
  });

  img.addEventListener('click', (e) => {
    e.stopPropagation();
  });

  closePreview.addEventListener('click', () => {
    preview.style.display = 'none';
  });

  preview.addEventListener('click', () => {
    preview.style.display = 'none';
  });
};