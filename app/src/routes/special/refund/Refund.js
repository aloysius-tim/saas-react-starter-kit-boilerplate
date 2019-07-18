/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Card from '../../../components/Layout/Card';

class Refund extends React.Component {
  render() {
    const domain = 'saastr.co';
    const name = 'SaaStr';
    return (
      <div>
        <div className="header bg-gradient-primary py-7 py-lg-8">
          <div className="container">
            <div className="header-body text-center mb-7">
              <div className="row justify-content-center">
                <div className="col-lg-5 col-md-6">
                  <h1 className="text-white">
                    Payment, subscription, upgrading, downgrading and
                    cancellation Terms
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="separator separator-bottom separator-skew zindex-100">
            <svg
              x={0}
              y={0}
              viewBox="0 0 2560 100"
              preserveAspectRatio="none"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polygon
                className="fill-default"
                points="2560 0 2560 100 0 100"
              />
            </svg>
          </div>
        </div>

        <div className="container mt--8 pb-5">
          <div className="row justify-content-center">
            <Card>
              <p>
                <strong>
                  {name} does not provide refunds to users who request
                  cancellation of Services, regardless of the reason for the
                  request. By agreeing Terms&amp;Conditions when registering for
                  the first time, all users accept this refund policy with no
                  exceptions.
                </strong>{' '}
                You may cancel your account at any time up to 24h prior payday,
                via email to info(at){domain}, suport(at){domain} or in the
                Settings section of your account's dashboard. If you cancel
                premium Services, the cancellation will take effect at the end
                of your current billing period. Thereafter, {name} will cease
                charging you for paid services and will disable your paid
                account.
              </p>
              <p>
                {name} service is billed in advance on a monthly basis (thirty
                days), the official currency of the tool is USD and is
                non-refundable. There will be no refunds nor credits for partial
                months of service, upgrade/downgrade refunds, or refunds for
                months unused with an open account.{' '}
                <strong>
                  In order to treat everyone equally, no exceptions will be
                  made.
                </strong>
              </p>
              <p>
                When you register as pay user, the subscription can't be
                refunded. A valid credit card or PayPal account is required for
                paying accounts. The user recognises the payment method
                provided, either credit card or PayPal account is valid.
                Confirms that belongs to his/her personally or to the company
                where is working on. The user is responsible to provide valid
                and truthful information that recognise the cardholder as the
                purchaser of the service. There will be no refunds nor any type
                of compensation if the user provides fraudulent billing
                information that is not real or truthful. {name} will do its
                best to prevent fraudulent transactions using protection systems
                such as Radar fraud protection, provided by Stripe, our payment
                processor platform.
              </p>
              <p>
                You can cancel your subscription anytime up to 24h before payday
                by contacting us by mail (info(at){domain}). At the end of the
                monthly subscription period, you will automatically be signed up
                and billed for an additional subscription term of 30 days. If
                you do not wish your subscription to auto-renew, you must
                previously contact us by mail, prior payment day (note that our
                servers are running in CEST time zone)
              </p>
              <p>
                Any plans, offers and price can be modified or cancelled at any
                time without notice or explanation.
              </p>
              <p>
                For any upgrade or downgrade in plan level, the credit card
                provided will automatically be charged the new rate on your next
                billing cycle. Downgrading your Service may cause the loss of
                Content, features, or capacity of your Account. We do not accept
                any liability for such loss.
              </p>
              <p>
                If you cancel the Service before the end of your current paid up
                month, your cancellation will take effect immediately and you
                will not be charged again (remember our servers are running in
                CEST time zone)
              </p>
              <p>
                {domain}, in its sole discretion, has the right to suspend or
                terminate your account and refuse all current or future use of
                the Service, or any other {domain} service, for any reason at
                any time. Such termination of the Service will result in the
                deactivation or deletion of your Account or your access to your
                Account, and the forfeiture and relinquishment of all Content in
                your Account. {domain} reserves the right to refuse service to
                anyone for any reason at any time.
              </p>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

export default Refund;
