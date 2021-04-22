export const initializeAPIDemo = (api) => {
  window.$(function () {
    window.$('#floor-7').maphilight();
  });

  let config = {
    status: false,
    path: '/assets/projects/project-3/general/config.xml',
  };

  const popUp = document.querySelector('#popup');
  const virtual_360 = document.querySelector('#virtual_360');
  const image_360 = document.querySelector('#image_360');
  const highlight = document.querySelector('#highlight');
  const generalSnowBtn = document.querySelector('#general-snow');
  const overlay = document.querySelector('#overlay');
  const icon_btn = document.querySelector('#iconPreview');
  const icon_highlight = document.querySelector('#icon-highlight');
  const icon_3D = document.querySelector('#icon-3D');

  const img = document.createElement('img');
  const img_floor7 = document.querySelector('.floor-7');
  const room_1 = document.querySelector('.room_1');
  const room_01 = document.querySelector('#room_01');
  const room_2 = document.querySelector('.room_2');
  const room_02 = document.querySelector('#room_02');
  const room_3 = document.querySelector('.room_3');
  const room_03 = document.querySelector('#room_03');
  const room_4 = document.querySelector('.room_4');
  const room_04 = document.querySelector('#room_04');
  const room_5 = document.querySelector('.room_5');
  const room_05 = document.querySelector('#room_05');
  const room_6 = document.querySelector('.room_6');
  const room_06 = document.querySelector('#room_06');
  const room_7 = document.querySelector('.room_7');
  const room_07 = document.querySelector('#room_07');
  const room_8 = document.querySelector('.room_8');
  const room_08 = document.querySelector('#room_08');
  const room_9 = document.querySelector('.room_9');
  const room_09 = document.querySelector('#room_09');
  const room_10 = document.querySelector('.room_10');
  const room_1_0 = document.querySelector('#room_10');

  const preview = document.querySelector('.preview_360');
  const iframe = document.createElement('iframe');
  const closePreview = document.querySelector('.close-preview');

  const drone_view = document.querySelector('#drone-view');

  drone_view.addEventListener('click', () => {
    preview.style.display = 'block';
    iframe.src =
      '/assets/projects/project-3/droneView/tour.html';
    preview.append(iframe);
  });

  closePreview.addEventListener('click', () => {
    iframe.remove();
    preview.style.display = 'none';
  });

  preview.addEventListener('click', () => {
    preview.style.display = 'none';
  });

  const generalBtn = document.querySelector('#general');

  generalBtn.addEventListener('click', (e) => {
    overlay.style.display = 'block';
    e.preventDefault();
    config.path = '/assets/projects/project-3/general/config.xml';

    try {
      api.reload(
        config.path,
        null,
        () => {
          overlay.style.display = 'none';
          const spot2 = document.querySelector(
            '#wr360DynamicSpot_spot2_wr360PlayerId'
          );
          const spot3 = document.querySelector(
            '#wr360DynamicSpot_spot3_wr360PlayerId'
          );
          const spot5 = document.querySelector(
            '#wr360DynamicSpot_spot5_wr360PlayerId'
          );
          const spot7 = document.querySelector(
            '#wr360DynamicSpot_spot7_wr360PlayerId'
          );
          const spot8 = document.querySelector(
            '#wr360DynamicSpot_spot8_wr360PlayerId'
          );

          spot2.addEventListener('mouseenter', () => {
            spot2.append(popUp);
            popUp.style.display = 'block';
            virtual_360.disabled = false;
            virtual_360.style.cursor = 'pointer';
            icon_btn.style.cursor = 'pointer';
            highlight.disabled = true;
            highlight.style.cursor = 'not-allowed'
            icon_highlight.style.cursor = 'not-allowed';

            virtual_360.addEventListener('click', () => {
              preview.style.display = 'block';
              iframe.src =
                '/assets/projects/project-3/floor/Floor2/Virtual_360/tour.html';
              img.remove();
              preview.append(iframe);
            });

            image_360.addEventListener('click', () => {
              preview.style.display = 'block';
              img.src =
                '/assets/projects/project-3/floor/Floor2/360_image/T2_305B.jpg';
              iframe.remove();
              preview.append(img);
            });
          });

          spot2.addEventListener('mouseleave', () => {
            popUp.style.display = 'none';
          });

          spot3.addEventListener('mouseenter', () => {
            spot3.append(popUp);
            popUp.style.display = 'block';
            icon_btn.style.cursor = 'pointer';
            virtual_360.disabled = false;
            virtual_360.style.cursor = 'pointer';
            highlight.disabled = true;
            highlight.style.cursor = 'not-allowed'
            icon_highlight.style.cursor = 'not-allowed';

            virtual_360.addEventListener('click', () => {
              preview.style.display = 'block';
              iframe.src =
                '/assets/projects/project-3/floor/Floor3/Virtual_360/tour.html';
              img.remove();
              preview.append(iframe);
            });

            image_360.addEventListener('click', () => {
              preview.style.display = 'block';
              img.src =
                '/assets/projects/project-3/floor/Floor3/360_image/T3_202B.jpg';
              iframe.remove();
              preview.append(img);
            });
          });

          spot3.addEventListener('mouseleave', () => {
            popUp.style.display = 'none';
          });

          spot5.addEventListener('mouseenter', () => {
            spot5.append(popUp);
            popUp.style.display = 'block';
            virtual_360.disabled = false;
            virtual_360.style.cursor = 'pointer';
            icon_btn.style.cursor = 'pointer';
            highlight.disabled = true;
            highlight.style.cursor = 'not-allowed'
            icon_highlight.style.cursor = 'not-allowed';

            virtual_360.addEventListener('click', () => {
              preview.style.display = 'block';
              iframe.src =
                '/assets/projects/project-3/floor/Floor5/Virtual_360/tour.html';
              img.remove();
              preview.append(iframe);
            });

            image_360.addEventListener('click', () => {
              preview.style.display = 'block';
              img.src =
                '/assets/projects/project-3/floor/Floor5/360_image/T5_2001A.jpg';
              iframe.remove();
              preview.append(img);
            });
          });

          spot5.addEventListener('mouseleave', () => {
            popUp.style.display = 'none';
          });

          spot7.addEventListener('mouseenter', () => {
            spot7.append(popUp);
            popUp.style.display = 'block';

            virtual_360.disabled = true;
            virtual_360.style.cursor = 'not-allowed';
            icon_btn.style.cursor = 'not-allowed';
            highlight.disabled = false;
            highlight.style.cursor = 'pointer'
            icon_highlight.style.cursor = 'pointer';

            image_360.addEventListener('click', () => {
              preview.style.display = 'block';
              img.src =
                '/assets/projects/project-3/floor/Floor7/360_image/T7_402B.jpg';
              iframe.remove();
              preview.append(img);
            });

            highlight.addEventListener('click', () => {
              document
                .querySelectorAll(
                  '.info, .info div, .info p, .info h4, .info sup, .info svg, .info img, .info a'
                )
                .forEach(function (x) {
                  x.setAttribute('coords', '');
                  x.setAttribute('shape', '');
                });

              room_01.addEventListener('mouseenter', () => {
                room_1.style.display = 'flex';
              });

              room_01.addEventListener('mouseleave', () => {
                room_1.style.display = 'none';
              });

              room_01.append(room_1);

              room_01.addEventListener('mouseenter', (e) => {
                var top = e.clientY,
                  left = e.clientX;
                room_1.style.top = top - 5 + 'px';
                room_1.style.left = left - 5 + 'px';
              });

              room_02.addEventListener('mouseenter', () => {
                room_2.style.display = 'flex';
              });

              room_02.addEventListener('mouseleave', () => {
                room_2.style.display = 'none';
              });

              room_02.append(room_2);

              room_02.addEventListener('mouseenter', (e) => {
                var top = e.clientY,
                  left = e.clientX;
                room_2.style.top = top - 5 + 'px';
                room_2.style.left = left - 5 + 'px';
              });

              room_03.addEventListener('mouseenter', () => {
                room_3.style.display = 'flex';
              });

              room_03.addEventListener('mouseleave', () => {
                room_3.style.display = 'none';
              });

              room_03.append(room_3);

              room_03.addEventListener('mouseenter', (e) => {
                var top = e.clientY,
                  left = e.clientX;
                room_3.style.top = top - 235 + 'px';
                room_3.style.left = left - 100 + 'px';
              });

              room_04.addEventListener('mouseenter', () => {
                room_4.style.display = 'flex';
              });

              room_04.addEventListener('mouseleave', () => {
                room_4.style.display = 'none';
              });

              room_04.append(room_4);

              room_04.addEventListener('mouseenter', (e) => {
                var top = e.clientY,
                  left = e.clientX;
                room_4.style.top = top - 5 + 'px';
                room_4.style.left = left + 'px';
              });

              room_05.addEventListener('mouseenter', () => {
                room_5.style.display = 'flex';
              });

              room_05.addEventListener('mouseleave', () => {
                room_5.style.display = 'none';
              });

              room_05.append(room_5);

              room_05.addEventListener('mouseenter', (e) => {
                var top = e.clientY,
                  left = e.clientX;
                room_5.style.top = top - 5 + 'px';
                room_5.style.left = left - 5 + 'px';
              });

              room_06.addEventListener('mouseenter', () => {
                room_6.style.display = 'flex';
              });

              room_06.addEventListener('mouseleave', () => {
                room_6.style.display = 'none';
              });

              room_06.append(room_6);

              room_06.addEventListener('mouseenter', (e) => {
                var top = e.clientY,
                  left = e.clientX;
                room_6.style.top = top - 5 + 'px';
                room_6.style.left = left - 5 + 'px';
              });

              room_07.addEventListener('mouseenter', () => {
                room_7.style.display = 'flex';
              });

              room_07.addEventListener('mouseleave', () => {
                room_7.style.display = 'none';
              });

              room_07.append(room_7);

              room_07.addEventListener('mouseenter', (e) => {
                var top = e.clientY,
                  left = e.clientX;
                room_7.style.top = top + 10 + 'px';
                room_7.style.left = left - 400 + 'px';
              });

              room_08.addEventListener('mouseenter', () => {
                room_8.style.display = 'flex';
              });

              room_08.addEventListener('mouseleave', () => {
                room_8.style.display = 'none';
              });

              room_08.append(room_8);

              room_08.addEventListener('mouseenter', (e) => {
                var top = e.clientY,
                  left = e.clientX;
                room_8.style.top = top - 5 + 'px';
                room_8.style.left = left - 5 + 'px';
              });

              room_09.addEventListener('mouseenter', () => {
                room_9.style.display = 'flex';
              });

              room_09.addEventListener('mouseleave', () => {
                room_9.style.display = 'none';
              });

              room_09.append(room_9);

              room_09.addEventListener('mouseenter', (e) => {
                var top = e.clientY,
                  left = e.clientX;
                room_9.style.top = top - 220 + 'px';
                room_9.style.left = left - 380 + 'px';
              });

              room_1_0.addEventListener('mouseenter', () => {
                room_10.style.display = 'flex';
              });

              room_1_0.addEventListener('mouseleave', () => {
                room_10.style.display = 'none';
              });

              room_1_0.append(room_10);

              room_1_0.addEventListener('mouseenter', (e) => {
                var top = e.clientY,
                  left = e.clientX;
                room_10.style.top = top - 210 + 'px';
                room_10.style.left = left - 5 + 'px';
              });

              img_floor7.style.display = 'block';
              img_floor7.style.zIndex = '999';
              img_floor7.style.position = 'absolute';
              closePreview.addEventListener('click', () => {
                img_floor7.style.display = 'none';
              });
              window.$(function () {
                window.$('#floor7-image').maphilight();
              });
            });
          });

          spot7.addEventListener('mouseleave', () => {
            popUp.style.display = 'none';
          });

          spot8.addEventListener('mouseenter', () => {
            spot8.append(popUp);
            popUp.style.display = 'block';

            virtual_360.disabled = true;
            virtual_360.style.cursor = 'not-allowed';
            icon_btn.style.cursor = 'not-allowed';
            highlight.disabled = true;
            highlight.style.cursor = 'not-allowed'
            icon_highlight.style.cursor = 'not-allowed';

            image_360.addEventListener('click', () => {
              preview.style.display = 'block';
              img.src =
                '/assets/projects/project-3/floor/Floor8/360_image/T8_402B.jpg';
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

  generalSnowBtn.addEventListener('click', (e) => {
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

  const switchBtn1 = document.querySelector('#floor-8');
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

  const switchBtn2 = document.querySelector('#floor-7');
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

  const switchBtn3 = document.querySelector('#floor-6');
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

  const switchBtn4 = document.querySelector('#floor-5');
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

  const switchBtn5 = document.querySelector('#floor-4');
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

  const switchBtn6 = document.querySelector('#floor-3');
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

  const switchBtn7 = document.querySelector('#floor-2');
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

  const switchBtn8 = document.querySelector('#floor-1');
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

  const switchBtn9 = document.querySelector('#floor-0');
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

  const spot2 = document.querySelector('#wr360DynamicSpot_spot2_wr360PlayerId');
  const spot3 = document.querySelector('#wr360DynamicSpot_spot3_wr360PlayerId');
  const spot5 = document.querySelector('#wr360DynamicSpot_spot5_wr360PlayerId');
  const spot7 = document.querySelector('#wr360DynamicSpot_spot7_wr360PlayerId');
  const spot8 = document.querySelector('#wr360DynamicSpot_spot8_wr360PlayerId');

  spot2.addEventListener('mouseenter', () => {
    spot2.append(popUp);
    popUp.style.display = 'block';

    virtual_360.disabled = false;
    virtual_360.style.cursor = 'pointer';
    icon_btn.style.cursor = 'pointer';
    highlight.disabled = true;
    highlight.style.cursor = 'not-allowed'
    icon_highlight.style.cursor = 'not-allowed';

    virtual_360.addEventListener('click', () => {
      preview.style.display = 'block';
      iframe.src =
        '/assets/projects/project-3/floor/Floor2/Virtual_360/tour.html';
      img.remove();
      preview.append(iframe);
    });

    image_360.addEventListener('click', () => {
      preview.style.display = 'block';
      img.src = '/assets/projects/project-3/floor/Floor2/360_image/T2_305B.jpg';
      iframe.remove();
      preview.append(img);
    });
  });

  spot2.addEventListener('mouseleave', () => {
    popUp.style.display = 'none';
  });

  spot3.addEventListener('mouseenter', () => {
    spot3.append(popUp);
    popUp.style.display = 'block';
    icon_btn.style.cursor = 'pointer';

    virtual_360.disabled = false;
    virtual_360.style.cursor = 'pointer';
    highlight.disabled = true;
    highlight.style.cursor = 'not-allowed'
    icon_highlight.style.cursor = 'not-allowed';

    virtual_360.addEventListener('click', () => {
      preview.style.display = 'block';
      iframe.src =
        '/assets/projects/project-3/floor/Floor3/Virtual_360/tour.html';
      img.remove();
      preview.append(iframe);
    });

    image_360.addEventListener('click', () => {
      preview.style.display = 'block';
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
    popUp.style.display = 'block';
    virtual_360.disabled = false;
    virtual_360.style.cursor = 'pointer';
    icon_btn.style.cursor = 'pointer';
    highlight.disabled = true;
    highlight.style.cursor = 'not-allowed'
    icon_highlight.style.cursor = 'not-allowed';

    virtual_360.addEventListener('click', () => {
      preview.style.display = 'block';
      iframe.src =
        '/assets/projects/project-3/floor/Floor5/Virtual_360/tour.html';
      img.remove();
      preview.append(iframe);
    });

    image_360.addEventListener('click', () => {
      preview.style.display = 'block';
      img.src =
        '/assets/projects/project-3/floor/Floor5/360_image/T5_2001A.jpg';
      iframe.remove();
      preview.append(img);
    });
  });

  spot5.addEventListener('mouseleave', () => {
    popUp.style.display = 'none';
  });

  spot7.addEventListener('mouseenter', () => {
    spot7.append(popUp);
    popUp.style.display = 'block';

    virtual_360.disabled = true;
    virtual_360.style.cursor = 'not-allowed';
    icon_btn.style.cursor = 'not-allowed';
    highlight.disabled = false;
    highlight.style.cursor = 'pointer'
    icon_highlight.style.cursor = 'pointer';

    image_360.addEventListener('click', () => {
      preview.style.display = 'block';
      img.src = '/assets/projects/project-3/floor/Floor7/360_image/T7_402B.jpg';
      iframe.remove();
      preview.append(img);
    });

    highlight.addEventListener('click', () => {
      document
        .querySelectorAll(
          '.info, .info div, .info p, .info h4, .info sup, .info svg, .info img, .info a'
        )
        .forEach(function (x) {
          x.setAttribute('coords', '');
          x.setAttribute('shape', '');
        });

      room_01.addEventListener('mouseenter', () => {
        room_1.style.display = 'flex';
      });

      room_01.addEventListener('mouseleave', () => {
        room_1.style.display = 'none';
      });

      room_01.append(room_1);

      room_01.addEventListener('mouseenter', (e) => {
        var top = e.clientY,
          left = e.clientX;
        room_1.style.top = top - 5 + 'px';
        room_1.style.left = left - 5 + 'px';
      });

      room_02.addEventListener('mouseenter', () => {
        room_2.style.display = 'flex';
      });

      room_02.addEventListener('mouseleave', () => {
        room_2.style.display = 'none';
      });

      room_02.append(room_2);

      room_02.addEventListener('mouseenter', (e) => {
        var top = e.clientY,
          left = e.clientX;
        room_2.style.top = top - 5 + 'px';
        room_2.style.left = left - 5 + 'px';
      });

      room_03.addEventListener('mouseenter', () => {
        room_3.style.display = 'flex';
      });

      room_03.addEventListener('mouseleave', () => {
        room_3.style.display = 'none';
      });

      room_03.append(room_3);

      room_03.addEventListener('mouseenter', (e) => {
        var top = e.clientY,
          left = e.clientX;
        room_3.style.top = top - 235 + 'px';
        room_3.style.left = left - 100 + 'px';
      });

      room_04.addEventListener('mouseenter', () => {
        room_4.style.display = 'flex';
      });

      room_04.addEventListener('mouseleave', () => {
        room_4.style.display = 'none';
      });

      room_04.append(room_4);

      room_04.addEventListener('mouseenter', (e) => {
        var top = e.clientY,
          left = e.clientX;
        room_4.style.top = top - 5 + 'px';
        room_4.style.left = left + 'px';
      });

      room_05.addEventListener('mouseenter', () => {
        room_5.style.display = 'flex';
      });

      room_05.addEventListener('mouseleave', () => {
        room_5.style.display = 'none';
      });

      room_05.append(room_5);

      room_05.addEventListener('mouseenter', (e) => {
        var top = e.clientY,
          left = e.clientX;
        room_5.style.top = top - 5 + 'px';
        room_5.style.left = left - 5 + 'px';
      });

      room_06.addEventListener('mouseenter', () => {
        room_6.style.display = 'flex';
      });

      room_06.addEventListener('mouseleave', () => {
        room_6.style.display = 'none';
      });

      room_06.append(room_6);

      room_06.addEventListener('mouseenter', (e) => {
        var top = e.clientY,
          left = e.clientX;
        room_6.style.top = top - 5 + 'px';
        room_6.style.left = left - 5 + 'px';
      });

      room_07.addEventListener('mouseenter', () => {
        room_7.style.display = 'flex';
      });

      room_07.addEventListener('mouseleave', () => {
        room_7.style.display = 'none';
      });

      room_07.append(room_7);

      room_07.addEventListener('mouseenter', (e) => {
        var top = e.clientY,
          left = e.clientX;
        room_7.style.top = top + 10 + 'px';
        room_7.style.left = left - 400 + 'px';
      });

      room_08.addEventListener('mouseenter', () => {
        room_8.style.display = 'flex';
      });

      room_08.addEventListener('mouseleave', () => {
        room_8.style.display = 'none';
      });

      room_08.append(room_8);

      room_08.addEventListener('mouseenter', (e) => {
        var top = e.clientY,
          left = e.clientX;
        room_8.style.top = top - 5 + 'px';
        room_8.style.left = left - 5 + 'px';
      });

      room_09.addEventListener('mouseenter', () => {
        room_9.style.display = 'flex';
      });

      room_09.addEventListener('mouseleave', () => {
        room_9.style.display = 'none';
      });

      room_09.append(room_9);

      room_09.addEventListener('mouseenter', (e) => {
        var top = e.clientY,
          left = e.clientX;
        room_9.style.top = top - 220 + 'px';
        room_9.style.left = left - 380 + 'px';
      });

      room_1_0.addEventListener('mouseenter', () => {
        room_10.style.display = 'flex';
      });

      room_1_0.addEventListener('mouseleave', () => {
        room_10.style.display = 'none';
      });

      room_1_0.append(room_10);

      room_1_0.addEventListener('mouseenter', (e) => {
        var top = e.clientY,
          left = e.clientX;
        room_10.style.top = top - 210 + 'px';
        room_10.style.left = left - 5 + 'px';
      });

      img_floor7.style.display = 'block';
      img_floor7.style.zIndex = '999';
      img_floor7.style.position = 'absolute';
      closePreview.addEventListener('click', () => {
        img_floor7.style.display = 'none';
      });
      window.$(function () {
        window.$('#floor7-image').maphilight();
      });
    });
  });

  spot7.addEventListener('mouseleave', () => {
    popUp.style.display = 'none';
  });

  spot8.addEventListener('mouseenter', () => {
    spot8.append(popUp);
    popUp.style.display = 'block';

    virtual_360.disabled = true;
    virtual_360.style.cursor = 'not-allowed';
    icon_btn.style.cursor = 'not-allowed';
    highlight.disabled = true;
    highlight.style.cursor = 'not-allowed'
    icon_highlight.style.cursor = 'not-allowed';

    image_360.addEventListener('click', () => {
      preview.style.display = 'block';
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

  const floor_0 = document.querySelector("#floor-0");
  floor_0.addEventListener('click', () => {
    popUp.style.display = 'flex';
    popUp.style.top = '5%';
    popUp.style.left = '50%';
    popUp.style.width = 'auto';
    popUp.style.zIndex = '9999';
    image_360.disabled = true;
    image_360.style.cursor = 'not-allowed';
    icon_3D.style.cursor = 'not-allowed';
    virtual_360.disabled = true;
    virtual_360.style.cursor = 'not-allowed';
    icon_btn.style.cursor = 'not-allowed';
    highlight.disabled = true;
    highlight.style.cursor = 'not-allowed';
    icon_highlight.style.cursor = 'not-allowed';
    virtual_360.style.marginRight = '20px';
    virtual_360.style.width = '145px';
    virtual_360.style.border = '1px solid';
    virtual_360.style.padding = '3%';
    image_360.style.marginRight = '20px';
    image_360.style.width = '145px';
    image_360.style.border = '1px solid';
    image_360.style.padding = '3%';
    highlight.style.marginRight = '20px';
    highlight.style.width = '145px';
    highlight.style.border = '1px solid';
    highlight.style.padding = '3%';
  });

  const floor_1 = document.querySelector("#floor-1");
  floor_1.addEventListener('click', () => {
    popUp.style.display = 'flex';
    popUp.style.top = '5%';
    popUp.style.left = '50%';
    popUp.style.width = 'auto';
    popUp.style.zIndex = '9999';
    image_360.disabled = true;
    image_360.style.cursor = 'not-allowed';
    icon_3D.style.cursor = 'not-allowed';
    virtual_360.disabled = true;
    virtual_360.style.cursor = 'not-allowed';
    icon_btn.style.cursor = 'not-allowed';
    highlight.disabled = true;
    highlight.style.cursor = 'not-allowed';
    icon_highlight.style.cursor = 'not-allowed';
    virtual_360.style.marginRight = '20px';
    virtual_360.style.width = '145px';
    virtual_360.style.border = '1px solid';
    virtual_360.style.padding = '3%';
    image_360.style.marginRight = '20px';
    image_360.style.width = '145px';
    image_360.style.border = '1px solid';
    image_360.style.padding = '3%';
    highlight.style.marginRight = '20px';
    highlight.style.width = '145px';
    highlight.style.border = '1px solid';
    highlight.style.padding = '3%';
  });

  const floor_2 = document.querySelector("#floor-2");
  floor_2.addEventListener('click', () => {
    popUp.style.display = 'flex';
    popUp.style.top = '5%';
    popUp.style.left = '50%';
    popUp.style.width = 'auto';
    popUp.style.zIndex = '9999';
    image_360.disabled = false;
    image_360.style.cursor = 'pointer';
    icon_3D.style.cursor = 'pointer';
    virtual_360.disabled = false;
    virtual_360.style.cursor = 'pointer';
    icon_btn.style.cursor = 'pointer';
    highlight.disabled = true;
    highlight.style.cursor = 'not-allowed';
    icon_highlight.style.cursor = 'not-allowed';
    virtual_360.style.marginRight = '20px';
    virtual_360.style.width = '145px';
    virtual_360.style.border = '1px solid';
    virtual_360.style.padding = '3%';
    image_360.style.marginRight = '20px';
    image_360.style.width = '145px';
    image_360.style.border = '1px solid';
    image_360.style.padding = '3%';
    highlight.style.marginRight = '20px';
    highlight.style.width = '145px';
    highlight.style.border = '1px solid';
    highlight.style.padding = '3%';

    virtual_360.addEventListener('click', () => {
      preview.style.display = 'block';
      iframe.src =
        '/assets/projects/project-3/floor/Floor2/Virtual_360/tour.html';
      img.remove();
      preview.append(iframe);
    });

    image_360.addEventListener('click', () => {
      preview.style.display = 'block';
      img.src =
        '/assets/projects/project-3/floor/Floor2/360_image/T2_305B.jpg';
      iframe.remove();
      preview.append(img);
    });
  });

  const floor_3 = document.querySelector("#floor-3");
  floor_3.addEventListener('click', () => {
    popUp.style.display = 'flex';
    popUp.style.top = '5%';
    popUp.style.left = '50%';
    popUp.style.width = 'auto';
    popUp.style.zIndex = '9999';
    image_360.disabled = false;
    image_360.style.cursor = 'pointer';
    icon_3D.style.cursor = 'pointer';
    virtual_360.disabled = false;
    virtual_360.style.cursor = 'pointer';
    icon_btn.style.cursor = 'pointer';
    highlight.disabled = true;
    highlight.style.cursor = 'not-allowed';
    icon_highlight.style.cursor = 'not-allowed';
    virtual_360.style.marginRight = '20px';
    virtual_360.style.width = '145px';
    virtual_360.style.border = '1px solid';
    virtual_360.style.padding = '3%';
    image_360.style.marginRight = '20px';
    image_360.style.width = '145px';
    image_360.style.border = '1px solid';
    image_360.style.padding = '3%';
    highlight.style.marginRight = '20px';
    highlight.style.width = '145px';
    highlight.style.border = '1px solid';
    highlight.style.padding = '3%';

    virtual_360.addEventListener('click', () => {
      preview.style.display = 'block';
      iframe.src =
        '/assets/projects/project-3/floor/Floor3/Virtual_360/tour.html';
      img.remove();
      preview.append(iframe);
    });

    image_360.addEventListener('click', () => {
      preview.style.display = 'block';
      img.src = '/assets/projects/project-3/floor/Floor3/360_image/T3_202B.jpg';
      iframe.remove();
      preview.append(img);
    });
  });

  const floor_4 = document.querySelector("#floor-4");
  floor_4.addEventListener('click', () => {
    popUp.style.display = 'flex';
    popUp.style.top = '5%';
    popUp.style.left = '50%';
    popUp.style.width = 'auto';
    popUp.style.zIndex = '9999';
    image_360.disabled = true;
    image_360.style.cursor = 'not-allowed';
    icon_3D.style.cursor = 'not-allowed';
    virtual_360.disabled = true;
    virtual_360.style.cursor = 'not-allowed';
    icon_btn.style.cursor = 'not-allowed';
    highlight.disabled = true;
    highlight.style.cursor = 'not-allowed';
    icon_highlight.style.cursor = 'not-allowed';
    virtual_360.style.marginRight = '20px';
    virtual_360.style.width = '145px';
    virtual_360.style.border = '1px solid';
    virtual_360.style.padding = '3%';
    image_360.style.marginRight = '20px';
    image_360.style.width = '145px';
    image_360.style.border = '1px solid';
    image_360.style.padding = '3%';
    highlight.style.marginRight = '20px';
    highlight.style.width = '145px';
    highlight.style.border = '1px solid';
    highlight.style.padding = '3%';
  });

  const floor_5 = document.querySelector("#floor-5");
  floor_5.addEventListener('click', () => {
    popUp.style.display = 'flex';
    popUp.style.top = '5%';
    popUp.style.left = '50%';
    popUp.style.width = 'auto';
    popUp.style.zIndex = '9999';
    image_360.disabled = false;
    image_360.style.cursor = 'pointer';
    icon_3D.style.cursor = 'pointer';
    virtual_360.disabled = false;
    virtual_360.style.cursor = 'pointer';
    icon_btn.style.cursor = 'pointer';
    highlight.disabled = true;
    highlight.style.cursor = 'not-allowed';
    virtual_360.style.marginRight = '20px';
    virtual_360.style.width = '145px';
    virtual_360.style.border = '1px solid';
    virtual_360.style.padding = '3%';
    image_360.style.marginRight = '20px';
    image_360.style.width = '145px';
    image_360.style.border = '1px solid';
    image_360.style.padding = '3%';
    highlight.style.marginRight = '20px';
    highlight.style.width = '145px';
    highlight.style.border = '1px solid';
    highlight.style.padding = '3%';

    virtual_360.addEventListener('click', () => {
      preview.style.display = 'block';
      iframe.src =
        '/assets/projects/project-3/floor/Floor5/Virtual_360/tour.html';
      img.remove();
      preview.append(iframe);
    });

    image_360.addEventListener('click', () => {
      preview.style.display = 'block';
      img.src =
        '/assets/projects/project-3/floor/Floor5/360_image/T5_2001A.jpg';
      iframe.remove();
      preview.append(img);
    });
  });

  const floor_6 = document.querySelector("#floor-6");
  floor_6.addEventListener('click', () => {
    popUp.style.display = 'flex';
    popUp.style.top = '5%';
    popUp.style.left = '50%';
    popUp.style.width = 'auto';
    popUp.style.zIndex = '9999';
    image_360.disabled = true;
    image_360.style.cursor = 'not-allowed';
    icon_3D.style.cursor = 'not-allowed';
    virtual_360.disabled = true;
    virtual_360.style.cursor = 'not-allowed';
    icon_btn.style.cursor = 'not-allowed';
    highlight.disabled = true;
    highlight.style.cursor = 'not-allowed';
    icon_highlight.style.cursor = 'not-allowed';
    virtual_360.style.marginRight = '20px';
    virtual_360.style.width = '145px';
    virtual_360.style.border = '1px solid';
    virtual_360.style.padding = '3%';
    image_360.style.marginRight = '20px';
    image_360.style.width = '145px';
    image_360.style.border = '1px solid';
    image_360.style.padding = '3%';
    highlight.style.marginRight = '20px';
    highlight.style.width = '145px';
    highlight.style.border = '1px solid';
    highlight.style.padding = '3%';
  });

  const floor_7 = document.querySelector("#floor-7");
  floor_7.addEventListener('click', () => {
    popUp.style.display = 'flex';
    popUp.style.top = '5%';
    popUp.style.left = '50%';
    popUp.style.width = 'auto';
    popUp.style.zIndex = '9999';
    image_360.disabled = false;
    image_360.style.cursor = 'pointer';
    icon_3D.style.cursor = 'pointer';
    highlight.disabled = false;
    highlight.style.cursor = 'pointer';
    icon_highlight.style.cursor = 'pointer';
    virtual_360.disabled = true;
    virtual_360.style.cursor = 'not-allowed';
    icon_btn.style.cursor = 'not-allowed';
    virtual_360.style.marginRight = '20px';
    virtual_360.style.width = '145px';
    virtual_360.style.border = '1px solid';
    virtual_360.style.padding = '3%';
    image_360.style.marginRight = '20px';
    image_360.style.width = '145px';
    image_360.style.border = '1px solid';
    image_360.style.padding = '3%';
    highlight.style.marginRight = '20px';
    highlight.style.width = '145px';
    highlight.style.border = '1px solid';
    highlight.style.padding = '3%';

    image_360.addEventListener('click', () => {
      preview.style.display = 'block';
      img.src = '/assets/projects/project-3/floor/Floor7/360_image/T7_402B.jpg';
      iframe.remove();
      preview.append(img);
    });

    highlight.addEventListener('click', () => {
      document
        .querySelectorAll(
          '.info, .info div, .info p, .info h4, .info sup, .info svg, .info img, .info a'
        )
        .forEach(function (x) {
          x.setAttribute('coords', '');
          x.setAttribute('shape', '');
        });

      room_01.addEventListener('mouseenter', () => {
        room_1.style.display = 'flex';
      });

      room_01.addEventListener('mouseleave', () => {
        room_1.style.display = 'none';
      });

      room_01.append(room_1);

      room_01.addEventListener('mouseenter', (e) => {
        var top = e.clientY,
          left = e.clientX;
        room_1.style.top = top - 5 + 'px';
        room_1.style.left = left - 5 + 'px';
      });

      room_02.addEventListener('mouseenter', () => {
        room_2.style.display = 'flex';
      });

      room_02.addEventListener('mouseleave', () => {
        room_2.style.display = 'none';
      });

      room_02.append(room_2);

      room_02.addEventListener('mouseenter', (e) => {
        var top = e.clientY,
          left = e.clientX;
        room_2.style.top = top - 5 + 'px';
        room_2.style.left = left - 5 + 'px';
      });

      room_03.addEventListener('mouseenter', () => {
        room_3.style.display = 'flex';
      });

      room_03.addEventListener('mouseleave', () => {
        room_3.style.display = 'none';
      });

      room_03.append(room_3);

      room_03.addEventListener('mouseenter', (e) => {
        var top = e.clientY,
          left = e.clientX;
        room_3.style.top = top - 235 + 'px';
        room_3.style.left = left - 100 + 'px';
      });

      room_04.addEventListener('mouseenter', () => {
        room_4.style.display = 'flex';
      });

      room_04.addEventListener('mouseleave', () => {
        room_4.style.display = 'none';
      });

      room_04.append(room_4);

      room_04.addEventListener('mouseenter', (e) => {
        var top = e.clientY,
          left = e.clientX;
        room_4.style.top = top - 5 + 'px';
        room_4.style.left = left + 'px';
      });

      room_05.addEventListener('mouseenter', () => {
        room_5.style.display = 'flex';
      });

      room_05.addEventListener('mouseleave', () => {
        room_5.style.display = 'none';
      });

      room_05.append(room_5);

      room_05.addEventListener('mouseenter', (e) => {
        var top = e.clientY,
          left = e.clientX;
        room_5.style.top = top - 5 + 'px';
        room_5.style.left = left - 5 + 'px';
      });

      room_06.addEventListener('mouseenter', () => {
        room_6.style.display = 'flex';
      });

      room_06.addEventListener('mouseleave', () => {
        room_6.style.display = 'none';
      });

      room_06.append(room_6);

      room_06.addEventListener('mouseenter', (e) => {
        var top = e.clientY,
          left = e.clientX;
        room_6.style.top = top - 5 + 'px';
        room_6.style.left = left - 5 + 'px';
      });

      room_07.addEventListener('mouseenter', () => {
        room_7.style.display = 'flex';
      });

      room_07.addEventListener('mouseleave', () => {
        room_7.style.display = 'none';
      });

      room_07.append(room_7);

      room_07.addEventListener('mouseenter', (e) => {
        var top = e.clientY,
          left = e.clientX;
        room_7.style.top = top + 10 + 'px';
        room_7.style.left = left - 400 + 'px';
      });

      room_08.addEventListener('mouseenter', () => {
        room_8.style.display = 'flex';
      });

      room_08.addEventListener('mouseleave', () => {
        room_8.style.display = 'none';
      });

      room_08.append(room_8);

      room_08.addEventListener('mouseenter', (e) => {
        var top = e.clientY,
          left = e.clientX;
        room_8.style.top = top - 5 + 'px';
        room_8.style.left = left - 5 + 'px';
      });

      room_09.addEventListener('mouseenter', () => {
        room_9.style.display = 'flex';
      });

      room_09.addEventListener('mouseleave', () => {
        room_9.style.display = 'none';
      });

      room_09.append(room_9);

      room_09.addEventListener('mouseenter', (e) => {
        var top = e.clientY,
          left = e.clientX;
        room_9.style.top = top - 220 + 'px';
        room_9.style.left = left - 380 + 'px';
      });

      room_1_0.addEventListener('mouseenter', () => {
        room_10.style.display = 'flex';
      });

      room_1_0.addEventListener('mouseleave', () => {
        room_10.style.display = 'none';
      });

      room_1_0.append(room_10);

      room_1_0.addEventListener('mouseenter', (e) => {
        var top = e.clientY,
          left = e.clientX;
        room_10.style.top = top - 210 + 'px';
        room_10.style.left = left - 5 + 'px';
      });

      img_floor7.style.display = 'block';
      img_floor7.style.zIndex = '999';
      img_floor7.style.position = 'absolute';
      closePreview.addEventListener('click', () => {
        img_floor7.style.display = 'none';
      });
      window.$(function () {
        window.$('#floor7-image').maphilight();
      });
    });
  });

  const floor_8 = document.querySelector("#floor-8");
  floor_8.addEventListener('click', () => {
    popUp.style.display = 'flex';
    popUp.style.top = '5%';
    popUp.style.left = '50%';
    popUp.style.width = 'auto';
    popUp.style.zIndex = '9999';
    image_360.disabled = false;
    image_360.style.cursor = 'pointer';
    icon_3D.style.cursor = 'pointer';
    virtual_360.disabled = true;
    virtual_360.style.cursor = 'not-allowed';
    icon_btn.style.cursor = 'not-allowed';
    highlight.disabled = true;
    highlight.style.cursor = 'not-allowed';
    icon_highlight.style.cursor = 'not-allowed';
    virtual_360.style.marginRight = '20px';
    virtual_360.style.width = '145px';
    virtual_360.style.border = '1px solid';
    virtual_360.style.padding = '3%';
    image_360.style.marginRight = '20px';
    image_360.style.width = '145px';
    image_360.style.border = '1px solid';
    image_360.style.padding = '3%';
    highlight.style.marginRight = '20px';
    highlight.style.width = '145px';
    highlight.style.border = '1px solid';
    highlight.style.padding = '3%';

    image_360.addEventListener('click', () => {
      preview.style.display = 'block';
      img.src = '/assets/projects/project-3/floor/Floor8/360_image/T8_402B.jpg';
      iframe.remove();
      preview.append(img);
    });
  });
};
