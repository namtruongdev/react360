export const initializeAPIDemo = (api) => {
  window.$(function () {
    window.$('#floor4-image').maphilight();
  });

  let config = {
    status: false,
    path: '/assets/projects/project-3/general/config.xml',
  };
  const switchBtn0 = document.querySelector('#floor0');
  switchBtn0.addEventListener('click', (e) => {
    e.preventDefault();
    config.path = '/assets/projects/project-3/floor/Snow/360_assets/Snow.xml';
    try {
      api.reload(
        config.path,
        null,
        () => {
          const spot0 = document.querySelector(
            '#wr360DynamicSpot_spot0_wr360PlayerId'
          );

          spot0.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.assign(
              'https://studiotocdo.vn/wp-content/uploads/vv360/VV2%20116/tour.html'
            );
          });
        },
        api.images.getCurrentImageIndex()
      );
    } catch {
      console.warn('Ấn chậm thôi <3');
    }
  });

  const switchBtn1 = document.querySelector('#floor1');
  switchBtn1.addEventListener('click', (e) => {
    e.preventDefault();
    config.path =
      '/assets/projects/project-3/floor/Floor8/360_assets/Floor8.xml';
    try {
      api.reload(
        config.path,
        null,
        () => {
          const spot0 = document.querySelector(
            '#wr360DynamicSpot_spot0_wr360PlayerId'
          );

          spot0.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.assign(
              'https://studiotocdo.vn/wp-content/uploads/vv360/VV2%20116/tour.html'
            );
          });
        },
        api.images.getCurrentImageIndex()
      );
    } catch {
      console.warn('Ấn chậm thôi <3');
    }
  });

  const switchBtn2 = document.querySelector('#floor2');
  switchBtn2.addEventListener('click', (e) => {
    e.preventDefault();
    config.path =
      '/assets/projects/project-3/floor/Floor7/360_assets/Floor7.xml';

    try {
      api.reload(
        config.path,
        null,
        () => {
          const spot0 = document.querySelector(
            '#wr360DynamicSpot_spot0_wr360PlayerId'
          );

          spot0.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.assign(
              'https://studiotocdo.vn/wp-content/uploads/vv360/VV2%20116/tour.html'
            );
          });
        },
        api.images.getCurrentImageIndex()
      );
    } catch {
      console.warn('Ấn chậm thôi <3');
    }
  });

  const switchBtn3 = document.querySelector('#floor3');
  switchBtn3.addEventListener('click', (e) => {
    e.preventDefault();
    config.path =
      '/assets/projects/project-3/floor/Floor6/360_assets/Floor6.xml';

    try {
      api.reload(
        config.path,
        null,
        () => {
          const spot0 = document.querySelector(
            '#wr360DynamicSpot_spot0_wr360PlayerId'
          );

          spot0.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.assign(
              'https://studiotocdo.vn/wp-content/uploads/vv360/VV2%20116/tour.html'
            );
          });
        },
        api.images.getCurrentImageIndex()
      );
    } catch {
      console.warn('Ấn chậm thôi <3');
    }
  });

  const switchBtn4 = document.querySelector('#floor4');
  switchBtn4.addEventListener('click', (e) => {
    e.preventDefault();
    config.path =
      '/assets/projects/project-3/floor/Floor5/360_assets/Floor5.xml';

    try {
      api.reload(
        config.path,
        null,
        () => {
          const spot0 = document.querySelector(
            '#wr360DynamicSpot_spot0_wr360PlayerId'
          );

          spot0.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.assign(
              'https://studiotocdo.vn/wp-content/uploads/vv360/VV2%20116/tour.html'
            );
          });
        },
        api.images.getCurrentImageIndex()
      );
    } catch {
      console.warn('Ấn chậm thôi <3');
    }
  });

  const switchBtn5 = document.querySelector('#floor5');
  switchBtn5.addEventListener('click', (e) => {
    e.preventDefault();
    config.path =
      '/assets/projects/project-3/floor/Floor4/360_assets/Floor4.xml';

    try {
      api.reload(
        config.path,
        null,
        () => {
          const spot0 = document.querySelector(
            '#wr360DynamicSpot_spot0_wr360PlayerId'
          );

          spot0.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.assign(
              'https://studiotocdo.vn/wp-content/uploads/vv360/VV2%20116/tour.html'
            );
          });
        },
        api.images.getCurrentImageIndex()
      );
    } catch {
      console.warn('Ấn chậm thôi <3');
    }
  });

  const switchBtn6 = document.querySelector('#floor6');

  switchBtn6.addEventListener('click', (e) => {
    e.preventDefault();
    config.path =
      '/assets/projects/project-3/floor/Floor3/360_assets/Floor3.xml';

    try {
      api.reload(
        config.path,
        null,
        () => {
          const spot0 = document.querySelector(
            '#wr360DynamicSpot_spot0_wr360PlayerId'
          );

          spot0.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.assign(
              'https://studiotocdo.vn/wp-content/uploads/vv360/VV2%20116/tour.html'
            );
          });
        },
        api.images.getCurrentImageIndex()
      );
    } catch {
      console.warn('Ấn chậm thôi <3');
    }
  });

  const switchBtn7 = document.querySelector('#floor7');
  switchBtn7.addEventListener('click', (e) => {
    e.preventDefault();
    config.path =
      '/assets/projects/project-3/floor/Floor2/360_assets/Floor2.xml';

    try {
      api.reload(
        config.path,
        null,
        () => {
          const spot0 = document.querySelector(
            '#wr360DynamicSpot_spot0_wr360PlayerId'
          );

          spot0.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.assign(
              'https://studiotocdo.vn/wp-content/uploads/vv360/VV2%20116/tour.html'
            );
          });
        },
        api.images.getCurrentImageIndex()
      );
    } catch {
      console.warn('Ấn chậm thôi <3');
    }
  });

  const switchBtn8 = document.querySelector('#floor8');
  switchBtn8.addEventListener('click', (e) => {
    e.preventDefault();
    config.path =
      '/assets/projects/project-3/floor/Floor1/360_assets/Floor1.xml';

    try {
      api.reload(
        config.path,
        null,
        () => {
          const spot0 = document.querySelector(
            '#wr360DynamicSpot_spot0_wr360PlayerId'
          );

          spot0.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.assign(
              'https://studiotocdo.vn/wp-content/uploads/vv360/VV2%20116/tour.html'
            );
          });
        },
        api.images.getCurrentImageIndex()
      );
    } catch {
      console.warn('Ấn chậm thôi <3');
    }
  });

  const switchBtn9 = document.querySelector('#floor9');
  switchBtn9.addEventListener('click', (e) => {
    e.preventDefault();
    config.path =
      '/assets/projects/project-3/floor/Floor0/360_assets/Floor0.xml';

    try {
      api.reload(
        config.path,
        null,
        () => {
          const spot0 = document.querySelector(
            '#wr360DynamicSpot_spot0_wr360PlayerId'
          );

          spot0.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.assign(
              'https://studiotocdo.vn/wp-content/uploads/vv360/VV2%20116/tour.html'
            );
          });
        },
        api.images.getCurrentImageIndex()
      );
    } catch {
      console.warn('Ấn chậm thôi <3');
    }
  });

  const switchBtn10 = document.querySelector('#floor10');
  switchBtn10.addEventListener('click', (e) => {
    e.preventDefault();
    config.path = '/assets/projects/project-3/general/config.xml';

    try {
      api.reload(
        config.path,
        null,
        () => {
          const spot0 = document.querySelector(
            '#wr360DynamicSpot_spot0_wr360PlayerId'
          );

          spot0.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.assign(
              'https://studiotocdo.vn/wp-content/uploads/vv360/VV2%20116/tour.html'
            );
          });
        },
        api.images.getCurrentImageIndex()
      );
    } catch {
      console.warn('Ấn chậm thôi <3');
    }
  });

  const spot0 = document.querySelector('#wr360DynamicSpot_spot0_wr360PlayerId');

  spot0.addEventListener('click', () => {
    window.location.assign(
      'https://studiotocdo.vn/wp-content/uploads/vv360/VV2%20116/tour.html'
    );
  });
};
