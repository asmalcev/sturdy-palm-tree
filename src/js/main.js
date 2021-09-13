import { LightingParticles } from './LightingParticles'
import { ScrollActivator } from './ScrollActivator'
import { ListOfClosable } from './ListOfClosable'

import '../css/animations.css'
import '../css/index.css'
import '../css/media.css'
import { GooglePhotoGallery } from './GooglePhotoGallery'

window.addEventListener('load', () => {
  const cursorStyle = document.createElement('style')
  cursorStyle.innerHTML = '* { cursor: url(images/cursor.png) 6 6, pointer; }'
  document.head.appendChild(cursorStyle)

  const scene1Canvas = new LightingParticles('#particles', '#lighter')
  const scrllAct = new ScrollActivator('scroll')

  const closelst = new ListOfClosable(
    document.querySelector('#close-list'),
    [
      {
        label: 'JavaScript',
        p: '<span class="secondary">Skills:</span> React, Webpack, Node.js, AJAX, Canvas, WebSocket'
      },
      {
        label: 'C++',
        p: '<span class="secondary">Skills:</span> SDL1.2, SDL2'
      },
      {
        label: 'Python',
        p: '<span class="secondary">Skills:</span> Django, Uvicorn, WSGI, ASGI'
      },
      {
        label: 'Other',
        p: '<span class="secondary">Skills:</span> Git, SQL, Algorithms and Structs of data'
      },
    ])

  const gpg = new GooglePhotoGallery([
    'https://lh3.googleusercontent.com/pw/ACtC-3dqJrFjvDNctoj0JMBKnZSEZ5MEHkY2wclwHeF6defUod_qFpPUIG7efsfaKy0KLn1XtNK3rrFnx33yZ1cvTqZH_-FnMfd5GjTo9KOTn_PY-weN2Xrk1MODlnp-ouS_91KHA5RT8_Y83p9TCo9y_boQLg=w1260-h945-no?authuser=0',
    'https://lh3.googleusercontent.com/pw/ACtC-3cceCtmtEEmveWhr791Qe1QxDledMIJ4PPtO13gLw27u4VHnE4zwdpX6Ap9V21b4kKI-70Qd7oHNHW-PHp-iV0HEfvZu98RRBzymxq_JTZNHQRMD8Pgt1DrWHR5eEqt8DzAblU34P0MNYfAD0yTxOukvA=w1260-h945-no?authuser=0',
    'https://lh3.googleusercontent.com/pw/ACtC-3eX4ShFiSu7lku-FbyDG_BCRXuEzcFu9yu_N8kC5EeAPqzPN9foNkbF-8HzKYtkkJ_Kva1JDTtm5PNCYH8H-hSlDZJk92l_40exd5skpqezbVEqPNN4l-QWYnCax0hNXpBNXaraOG5yukg63FODqkfw6g=w1260-h945-no?authuser=0',
    'https://lh3.googleusercontent.com/pw/ACtC-3fYzy70Up_VSrRTCjxk_Dz1IHvdUs_lpgbpocv0XFLOZNvWmj9NGFDpZTjIIzbugGEdlSW-3kGL_FPXmFipeXKJU9v3lfzAj4vsyIjUxrMRftm6kFx4mmipG_BIvGBuHj1x9hnY8-tU-djkETeFGI2kYA=w1260-h945-no?authuser=0',
    'https://lh3.googleusercontent.com/pw/ACtC-3egLVinw4SJS6bCF0ttlHGC35D7bf4XPLs_y3UtSYcWlx5dJnCbZb_vQ1GAp2sCSvZvXgW93V4hRcNT-QFuXL0IoJMwJA_KP-v4yG8UBXrKu0cqKznAjbxqtcAXHMkLF7M4cCRVxuMu3xAkhwhWkV9F4A=w1260-h945-no?authuser=0',
    'https://lh3.googleusercontent.com/pw/ACtC-3fUr_UCSn9v8GQEooz-It8mY4_cVKJXYpjn5NgBgx6-iS0dcZH5DtdWqZyWL2xaCJY2sLYqbaVIJp2GgkY8XmlKqXtjolVRTsmdI_u34rLR5ZaSiwcT2ji0PvGIGJfGfKCrMV-yWXJn6QBdoukH0g3qRA=w1418-h945-no?authuser=0',
    'https://lh3.googleusercontent.com/pw/ACtC-3eS8X4Qpd1N9inYrdHqch2p2NuyQivYihqmZOGyIoc-BA9qrPqajw-Gg65BmX2-RZRGSURG83o_G5i5C2vfazhBc1mDScmUCeixPBMSqsI5KNH6o76ue634IATqGs5PsSmt6oW7Mx3_a_pcqK6tbrXyuw=w1418-h945-no?authuser=0',
    'https://lh3.googleusercontent.com/pw/ACtC-3f9oiLVJDsGUfgSdAKititqnyZBOlm1ZWjaCxZjr1vXWVa2jVoqviPMODZPjPvzF0JMqyACzO-43Kuggixr2WdGPZmgLjl3fRdSPJcLs9Ay9Vzf6W13n6aNW8jq99L2jNNk-F96LpivuY8m_YqatV_K9w=w1260-h945-no?authuser=0',
    'https://lh3.googleusercontent.com/pw/ACtC-3emUEbYxNFzY7oEMU0XHxgF3NqgIKgAZNkkMyXPBwpuSV0KUBrPy5qv6LWK4bL6RlW1kdcD6BVaxb04pavEvZTNYpjrXOg5zOmzW23afuHokhVNlpiU_TjzkZz4h9tOxlG3O1aofBmLKojyWO13Y3A7tA=w1418-h945-no?authuser=0'
  ], document.querySelector('#gallery'))
})