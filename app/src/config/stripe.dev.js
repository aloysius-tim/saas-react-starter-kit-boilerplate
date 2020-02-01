module.exports = {
  pk_live: 'pk_live_PAraCMQSMrrUURvk9vByp1QQ00V4nl50N2',
  pk_test: 'pk_test_FemwJfZOd0gaq7IwlVXgai8E00ebTszBaD',
  get pk() {
    return this.pk_test;
  },

  /**
   * if yearly true, you offer yearly plans to users. Meaning you need for a single PLAN to define it on Stripe twice (for yearly and monthly) and below twice too.
   * Exemple: GOLD_PLAN_YEARLY & GOLD_PLAN_MONTHLY
   */
  yearly: true,
  plans: [
    {
      // Need to be the ID you will find once you defined the plan on Stripe !
      id: 'plan_FS7wsGW6L2J9iI',
      // See top comment about the monthly / yearly
      monthly: true,
      img: 'https://s21.postimg.cc/tpm0cge4n/space-ship.png',
      title: 'FREE',
      price: 'Free',
      features: ['DEDICATED', 'SIMPLE HORIZONTAL SCALABILITY'],
      freeTrial: true,
      // Need to be the same as when you defined it on Stripe
      trialDays: 15,
      // Visually featured !
      featured: false,
    },
    {
      /**
       * You can setup a FREE plan (only if you want..) ! Be sure you defined it as a 0€ PLAN on Stripe (Yes even if it's free)
       */
      id: 'plan_FS7wsGW6L2J9iI',
      monthly: false,
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
      monthly: true,
      img: 'https://s28.postimg.cc/ju5bnc3x9/plane.png',
      title: 'SMALL TEAM',
      price: '30€/m',
      features: ['NEVER SLEEPS', 'MULTIPLE WORKERS FOR MORE POWERFUL APPS'],
      freeTrial: true,
      trialDays: 15,
      featured: true,
    },
    {
      id: 'plan_FS7ul8DXKsDNlB',
      monthly: false,
      img: 'https://s28.postimg.cc/ju5bnc3x9/plane.png',
      title: 'SMALL TEAM',
      price: '299€/year',
      features: ['NEVER SLEEPS', 'MULTIPLE WORKERS FOR MORE POWERFUL APPS'],
      freeTrial: true,
      trialDays: 15,
      featured: true,
    },

    {
      id: 'plan_FNYMoUBlDHOlB0',
      monthly: true,
      img: 'https://s21.postimg.cc/tpm0cge4n/space-ship.png',
      title: 'ENTERPRISE',
      price: '100€/m',
      features: ['DEDICATED', 'SIMPLE HORIZONTAL SCALABILITY'],
      freeTrial: true,
      trialDays: 15,
      featured: false,
    },
    {
      id: 'plan_FS7t6MRh1jxBJ2',
      monthly: false,
      img: 'https://s21.postimg.cc/tpm0cge4n/space-ship.png',
      title: 'ENTERPRISE',
      price: '999€/year',
      features: ['DEDICATED', 'SIMPLE HORIZONTAL SCALABILITY'],
      freeTrial: true,
      trialDays: 15,
      featured: false,
    },
  ],
};
