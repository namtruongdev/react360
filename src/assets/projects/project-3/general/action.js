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
    if (config.status) {
      config.status = false;
      config.path = '/assets/projects/project-3/general/config.xml';
    }
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
  });

  const switchBtn1 = document.querySelector('#floor1');
  switchBtn1.addEventListener('click', (e) => {
    e.preventDefault();
    if (config.status) {
      config.status = false;
      config.path = '/assets/projects/project-3/general/config.xml';
    } else {
      config.status = true;
      config.path =
        '/assets/projects/project-3/Floor/Floor8/360_assets/Floor8.xml';
    }
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
  });

  const switchBtn2 = document.querySelector('#floor2');
  switchBtn2.addEventListener('click', (e) => {
    e.preventDefault();
    if (config.status) {
      config.status = false;
      config.path = '/assets/projects/project-3/general/config.xml';
    } else {
      config.status = true;
      config.path =
        '/assets/projects/project-3/Floor/Floor7/360_assets/Floor7.xml';
    }
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
  });

  const switchBtn3 = document.querySelector('#floor3');
  switchBtn3.addEventListener('click', (e) => {
    e.preventDefault();
    if (config.status) {
      config.status = false;
      config.path = '/assets/projects/project-3/general/config.xml';
    } else {
      config.status = true;
      config.path =
        '/assets/projects/project-3/Floor/Floor6/360_assets/Floor6.xml';
    }
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
  });

  const switchBtn4 = document.querySelector('#floor4');
  switchBtn4.addEventListener('click', (e) => {
    e.preventDefault();
    if (config.status) {
      config.status = false;
      config.path = '/assets/projects/project-3/general/config.xml';
    } else {
      config.status = true;
      config.path =
        '/assets/projects/project-3/Floor/Floor5/360_assets/Floor5.xml';
    }
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
  });

  const switchBtn5 = document.querySelector('#floor5');
  switchBtn5.addEventListener('click', (e) => {
    e.preventDefault();
    if (config.status) {
      config.status = false;
      config.path = '/assets/projects/project-3/general/config.xml';
    } else {
      config.status = true;
      config.path =
        '/assets/projects/project-3/Floor/Floor4/360_assets/Floor4.xml';
    }
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
  });

  const switchBtn6 = document.querySelector('#floor6');
  switchBtn6.addEventListener('click', (e) => {
    e.preventDefault();
    if (config.status) {
      config.status = false;
      config.path = '/assets/projects/project-3/general/config.xml';
    } else {
      config.status = true;
      config.path =
        '/assets/projects/project-3/Floor/Floor3/360_assets/Floor3.xml';
    }
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
  });

  const switchBtn7 = document.querySelector('#floor7');
  switchBtn7.addEventListener('click', (e) => {
    e.preventDefault();
    if (config.status) {
      config.status = false;
      config.path = '/assets/projects/project-3/general/config.xml';
    } else {
      config.status = true;
      config.path =
        '/assets/projects/project-3/Floor/Floor2/360_assets/Floor2.xml';
    }
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
  });

  const switchBtn8 = document.querySelector('#floor8');
  switchBtn8.addEventListener('click', (e) => {
    e.preventDefault();
    if (config.status) {
      config.status = false;
      config.path = '/assets/projects/project-3/general/config.xml';
    } else {
      config.status = true;
      config.path =
        '/assets/projects/project-3/Floor/Floor1/360_assets/Floor1.xml';
    }
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
  });

  const switchBtn9 = document.querySelector('#floor9');
  switchBtn9.addEventListener('click', (e) => {
    e.preventDefault();
    if (config.status) {
      config.status = false;
      config.path = '/assets/projects/project-3/general/config.xml';
    } else {
      config.status = true;
      config.path =
        '/assets/projects/project-3/Floor/Floor0/360_assets/Floor0.xml';
    }
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
  });

  const switchBtn10 = document.querySelector('#floor10');
  switchBtn10.addEventListener('click', (e) => {
    e.preventDefault();
    if (config.status) {
      config.status = false;
      config.path = '/assets/projects/project-3/general/config.xml';
    }
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
  });


  const spot0 = document.querySelector('#wr360DynamicSpot_spot0_wr360PlayerId');

  spot0.addEventListener('click', () => {
    window.location.assign(
      'https://studiotocdo.vn/wp-content/uploads/vv360/VV2%20116/tour.html'
    );
  });
};
