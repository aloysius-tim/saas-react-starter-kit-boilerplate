module.exports = {
  pk_live: "pk_live_PAraCMQSMrrUURvk9vByp1QQ00V4nl50N2",
  pk_test: "pk_test_FemwJfZOd0gaq7IwlVXgai8E00ebTszBaD",
  get pk () {
    return this.pk_test;
  },

  plans: [

    {
      id: 'plan_FNYLbAbbWZd8Tv',
      img: 'https://s22.postimg.cc/8mv5gn7w1/paper-plane.png',
      title: 'PERSONAL',
      price: '15€/m',
      features: [
        'CUSTOM DOMAINS',
        'SLEEPS AFTER 30 MINS OF INACTIVITY'
      ],
      freeTrial: true,
      featured: false
    },

    {
      id: 'plan_FNYLzABRllwVoG',
      img: 'https://s28.postimg.cc/ju5bnc3x9/plane.png',
      title: 'SMALL TEAM',
      price: '30€/m',
      features: [
        'NEVER SLEEPS',
        'MULTIPLE WORKERS FOR MORE POWERFUL APPS'
      ],
      freeTrial: true,
      featured: true
    },

    {
      id: 'plan_FNYMoUBlDHOlB0',
      img: 'https://s21.postimg.cc/tpm0cge4n/space-ship.png',
      title: 'ENTERPRISE',
      price: '100€/m',
      features: [
        'DEDICATED',
        'SIMPLE HORIZONTAL SCALABILITY'
      ],
      freeTrial: true,
      featured: false
    }

  ]
};
