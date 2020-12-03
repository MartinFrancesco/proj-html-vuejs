const app = new Vue({

  el: '#app',

  data: {
    mainMenu: [
              {
                id: '#hero-section',
                section: 'home'
              },
              {
                id: '#services',
                section: 'services'
              },
              {
                id: '#about',
                section: 'About'
              },
              {
                id: '#projects',
                section: 'projects'
              },
              {
                id: '#results',
                section: 'result'
              },
    ],
    projects: {
                topics: [
                  'all',
                  'institutional',
                  'social',
                  'events',
                  'innovation',
                  'enviroment',
                  'technology',
                ],
                photos: [
                  './img/project-1.jpg',
                  './img/project-2.jpg',
                  './img/project-3.jpg',
                  './img/project-4.jpg',
                  './img/project-5.jpg',
                  './img/project-6.jpg',
                ]
    },
    results: [
              {
                title: 'Certification',
                number: 128,
              },
              {
                title: 'Employees',
                number: 230,
              },
              {
                title: 'Customers',
                number: 517,
              },
              {
                title: 'Countries Served',
                number: 94,
              },
    ],
    footer: [
              {
                title: 'About',
                links: [
                  'The Company',
                  'Institutional',
                  'Social & Events',
                  'Innovation',
                  'Enviroment',
                  'Technology',
                ],
              },
              {
                title: 'Services',
                links: [
                  'Audit & Assurance',
                  'Financial Advisory',
                  'Analytics M&A',
                  'Middle Marketing',
                  'Legal Consulting',
                  'Regulatory Risk',
                ],
              },
              {
                title: 'Support',
                links: [
                  'Responsability',
                  'Terms of Use',
                  'About Cookies',
                  'Privacy Policy',
                  'Accessibility',
                  'Information',
                ],
              },
    ],

  },
  created () {
    window.addEventListener('scroll', this.onScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.onScroll);
  },
  methods: {

    onScroll (event) {
      // add/remove class




      // $(window).scroll(function() {
      //   if ($(document).scrollTop() > 200) {
      //     $('nav').addClass('transparent');
      //   } else {
      //     $('nav').removeClass('transparent');
      //   }
      // });

    },
  }
});
