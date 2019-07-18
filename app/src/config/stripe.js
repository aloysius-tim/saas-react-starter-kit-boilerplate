module.exports = {
  pk_live: 'pk_live_PAraCMQSMrrUURvk9vByp1QQ00V4nl50N2',
  pk_test: 'pk_test_FemwJfZOd0gaq7IwlVXgai8E00ebTszBaD',
  get pk() {
    return this.pk_test;
  },

  yearly: true,
  plans: [
    {
      id: 'plan_FS7wsGW6L2J9iI',
      yearly: 'plan_FS7wsGW6L2J9iI',
      yearlyPrice: 'Free',
      img: 'https://s21.postimg.cc/tpm0cge4n/space-ship.png',
      title: 'FREE',
      price: 'Free',
      features: ['DEDICATED', 'SIMPLE HORIZONTAL SCALABILITY'],
      freeTrial: true,
      trialDays: 15,
      featured: false,
    },

    {
      id: 'plan_FNYLzABRllwVoG',
      yearly: 'plan_FS7ul8DXKsDNlB',
      yearlyPrice: '299€/year',
      img: 'https://s28.postimg.cc/ju5bnc3x9/plane.png',
      title: 'SMALL TEAM',
      price: '30€/m',
      features: ['NEVER SLEEPS', 'MULTIPLE WORKERS FOR MORE POWERFUL APPS'],
      freeTrial: true,
      trialDays: 15,
      featured: true,
    },

    {
      id: 'plan_FNYMoUBlDHOlB0',
      yearly: 'plan_FS7t6MRh1jxBJ2',
      yearlyPrice: '999€/year',
      img: 'https://s21.postimg.cc/tpm0cge4n/space-ship.png',
      title: 'ENTERPRISE',
      price: '100€/m',
      features: ['DEDICATED', 'SIMPLE HORIZONTAL SCALABILITY'],
      freeTrial: true,
      trialDays: 15,
      featured: false,
    },
  ],
};
