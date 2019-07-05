const json = {
  customer: {
    id: 'cus_FNYYt7D3uogt4L',
    object: 'customer',
    account_balance: 0,
    address: null,
    balance: 0,
    created: 1562317873,
    currency: null,
    default_source: 'card_1EsnR6Hc5JsCY4t1yOJwUUrk',
    delinquent: false,
    description: null,
    discount: null,
    email: 'member@keynes.fr',
    invoice_prefix: '8C8F2595',
    invoice_settings:
      {
        custom_fields: null,
        default_payment_method: null,
        footer: null
      },
    livemode: false,
    metadata: {},
    name: 'tim keynes',
    phone: null,
    preferred_locales: [],
    shipping: null,
    sources:
      {
        object: 'list',
        data: [[Object]],
        has_more: false,
        total_count: 1,
        url: '/v1/customers/cus_FNYYt7D3uogt4L/sources'
      },
    subscriptions:
      {
        object: 'list',
        data: [],
        has_more: false,
        total_count: 0,
        url: '/v1/customers/cus_FNYYt7D3uogt4L/subscriptions'
      },
    tax_exempt: 'none',
    tax_ids:
      {
        object: 'list',
        data: [],
        has_more: false,
        total_count: 0,
        url: '/v1/customers/cus_FNYYt7D3uogt4L/tax_ids'
      },
    tax_info: null,
    tax_info_verification: null
  },
  subscription: {
    id: 'sub_FNYYQtjEkvYx1n',
    object: 'subscription',
    application_fee_percent: null,
    billing: 'charge_automatically',
    billing_cycle_anchor: 1563613874,
    billing_thresholds: null,
    cancel_at: null,
    cancel_at_period_end: false,
    canceled_at: null,
    collection_method: 'charge_automatically',
    created: 1562317875,
    current_period_end: 1563613874,
    current_period_start: 1562317875,
    customer: 'cus_FNYYt7D3uogt4L',
    days_until_due: null,
    default_payment_method: null,
    default_source: null,
    default_tax_rates: [],
    discount: null,
    ended_at: null,
    items:
      {
        object: 'list',
        data: [[Object]],
        has_more: false,
        total_count: 1,
        url: '/v1/subscription_items?subscription=sub_FNYYQtjEkvYx1n'
      },
    latest_invoice: 'in_1EsnRnHc5JsCY4t1UjirXxqF',
    livemode: false,
    metadata: {},
    plan:
      {
        id: 'plan_FNYLzABRllwVoG',
        object: 'plan',
        active: true,
        aggregate_usage: null,
        amount: 3000,
        billing_scheme: 'per_unit',
        created: 1562317095,
        currency: 'eur',
        interval: 'month',
        interval_count: 1,
        livemode: false,
        metadata: {},
        nickname: 'SMALL TEAM',
        product: 'prod_FIGowODL8URvPV',
        tiers: null,
        tiers_mode: null,
        transform_usage: null,
        trial_period_days: 15,
        usage_type: 'licensed'
      },
    quantity: 1,
    schedule: null,
    start: 1562317875,
    start_date: 1562317875,
    status: 'trialing',
    tax_percent: null,
    trial_end: 1563613874,
    trial_start: 1562317875
  }

}
