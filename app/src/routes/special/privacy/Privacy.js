import React from 'react';
import Card from "../../../components/Layout/Card";

class Privacy extends React.Component {
  render() {
    let url = "https://saastr.co";
    let name = "SaaStr"
    let email = "hello@saastr.co";

    return (
      <div>
        <div className="header bg-gradient-primary py-7 py-lg-8">
          <div className="container">
            <div className="header-body text-center mb-7">
              <div className="row justify-content-center">
                <div className="col-lg-5 col-md-6">
                  <br/><h1 className="text-white">Privacy and Cookie Policy</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="separator separator-bottom separator-skew zindex-100">
            <svg x={0} y={0} viewBox="0 0 2560 100" preserveAspectRatio="none" version="1.1"
                 xmlns="http://www.w3.org/2000/svg">
              <polygon className="fill-default" points="2560 0 2560 100 0 100"/>
            </svg>
          </div>
        </div>

        <div className="container mt--8 pb-5">
          <div className="row justify-content-center">
            <Card>
              <br/><h2>1. Privacy Policy</h2>
              <p>We have implemented this Privacy and Cookie Policy, with the objective of providing our user and / or
                client
                with a safe and reliable service, wherein we guarantee compliance with the security measures on the
                processing
                of information as required by the Regulation (EU) 2016/679 (hereinafter General Data Protection Regulation),
                and the provisions of Law 34/2002 of 11 July on Information Society Services and Electronic Commerce in
                relation to cookies (hereinafter LSSICE).</p>
              <br/><h3>1.1. Channels by which we collect data</h3>
              <br/><h4>1.1.1 Contact Section of our Website</h4>
              <p>There is a section on our website titled “Contact Us”, an option the user can utilize to contact us and
                request or inquire about what they desire. Thus, we remind you that you can register on our platform as a
                User
                via an e-mail and password.</p>
              <br/><h4>1.1.2 Through our web page</h4>
              <p>We have some services where the user can register through home page via PopUp’s.</p>
              <br/><h4>1.1.3. Through our platform</h4>
              <p>Through our platform <a href={url} target="_blank"
                                         title={name}>{url}</a>, we only will collect your personal or
                contact details (full name, email, headline) the moment you register as a user within our platform.</p>
              <br/><h4>1.1.4. Through our contact email</h4>
              <p>Acting as a Professional or User, you can send us inquiries through our contact email <a
                href={`mailto:${email}`} title="{name} Email Address">{email}</a>.</p>
              <br/><h3>1.2. The Purpose and Processing of Data Collection</h3>
              <br/><h4>1.2.1. General Aspects</h4>
              <p>We will utilize the information provided by the user in accordance to what is indicated in section 1.1.1.
                and
                1.1.4, that is, that have been sent to us through our contact form or by email, in order to complete your
                request or answer your questions as well as to proceed to complete your registration, where appropriate.</p>
              <p>In order to register as a User on our platform, you will require validation either through your e-mail or
                through your LinkedIn username. This information will be necessary so that we can to provide the service
                requested and so that you can also publish relevant information of interest about your company, if you
                will.</p>
              <p>In this regard, as was already presented in the Legal Notice, please note that in order to be validated on
                our platform and be able to obtain our services . Therefore, if you were initially validated with an e-mail,
                you must also be validated through LinkedIn.</p>
              <br/><h4>1.2.2. Use of your Information</h4>
              <p>If you register on our platform, under no circumstance will we use your data for purposes other than to
                provide the service requested, that is, for reasons that are inconsistent with the sole purpose of providing
                you with information. In this regard, your information will not be sold or disclosed to third parties for
                any
                purpose, and as such you should be aware that your data would only be used to validate and recognize you as
                a
                User and / or Client of our platform and thus be able to provide the requested services.</p>
              <p>c) If you register on our platform , you accept that we will send you our newsletters or weekly bulletins.
                In
                the event that the user and / or client wishes to stop receiving these commercial communications,the user
                and
                / or client may request it so by means of an email to {email}.</p>
              <p>The personal data provided {name} shall be used to fulfil the purpose of the
                contractual relationship. The legal basis for the processing of personal data is: a) when
                the customer is a natural person, the execution of the contract to which the data
                subject is a party, and b) when the customer is a legal person, referred to the personal
                data of the contact persons, the legitimate interest. In the latter case, the customer
                undertakes the obligation to inform the parties concerned of the content of this
                clause.</p>
              <p>The data may be communicated to the following third-party recipients: Public
                Administrations for the fulfilment of legal obligations. In addition, they can
                communicate to the following categories of Processor: Providers of electronic
                communications, hosting, SaaS services such as CRM/ERP, management, accounting,
                auditing and lawyers. {name} may transfer personal data to Processors located
                in the United States of America who are members of the Privacy Shield, which has an
                adequacy decision from the Commission (Commission Implementing Decision (EU)
                2016/1250). The data will be kept for the duration of the entire contractual
                relationship and, once it has ended, for the legally established periods of storage and
                limitation of liability.</p>
              <p>The data subject may at any time exercise their rights of access, rectification, erasure,
                restriction of processing, object or data portability by sending an e-mail to
                {email} or by writing to {name}, Canòdrom - Parc de Recerca
                Creativa Concepción Arenal, 165, 08027 Barcelona, Spain. The data subject shall has the right to lodge a
                complaint to a supervisory authority. {name} informs you
                that not providing the information requested shall imply the impossibility of
                formalising or fulfilling the purpose of the contract.</p>
              <br/><h3>1.3. E-mail Alerts Subscription</h3>
              <p>In addition to collecting data in accordance with the provisions set forth by this Privacy Policy, you can
                subscribe or proceed to register on our platform so that we can generate and send multiple alerts that may
                be
                of interest and for which you will receive an e-mail or notification concerning:</p>
              <ul>
                <li>Information on your lastest searches and recommendations.</li>
              </ul>
              <br/><h3>1.4. Express Consent</h3>
              <p>To comply with the Law on Data Protection, we explicitly require the user to express their consent every
                time
                that we proceed to collect information, provided that they had not previously done so in that regard.</p>
              <p>By virtue, of accepting of our notices and policies, the user and/or client expressly authorizes
                {name}, to process their personal information in accordance to the purpose of our platform, in order to
                provide the service requested under here and keep them up to date on our services and platform, update all
                information about your profile, if any, and the dissemination of news, towards other User’s or interested
                parties and in accordance with all the goals here detailed.</p>
              <p>Thus, when filling out the contact form on our website <a href={url} title={name}
                                                                           target="_blank">{url}</a>; when
                registering on the platform or writing to our e-mail contact, they must freely and unequivocally check the
                boxes at the end of each form, thereby demonstrating their expressed consent for our company to process
                their
                information in accordance to the purpose mentioned in the previous section.</p>
              <p>Also by accepting our conditions at the time of registration and when contracting our services, you agree
                that we may use your company or corporate information for the purposes detailed herein, unable to lay claim
                for the marketing or presentation of their information towards third parties.</p>
              <p>By accepting our conditions, the User also agrees to observe and comply with all conditions imposed in all
                of
                our legal policies to ensure compliance with the fulfillment of the rights therein established, particularly
                in our Community Standards.</p>
              <br/><h3>1.5. Data processing</h3>
              <p>Purpose: Regulate the relationship between the Client, in its capacity as Controller of
                treatment, and {name}, in its capacity as Processor of Treatment, in order to
                comply with the provisions of the Article 28.3 of Regulation (EU) 2016/679
                (hereinafter, "the Regulation") and ensure the security of personal data. The Processor
                undertakes to process personal data only by following the instructions provided by
                Controller and guarantees that the persons authorised to process personal data
                undertake to respect confidentiality or will be subject to confidentiality by statutory
                obligation.</p>
              <p>Services and duration: The validity of this Contract will be equal to the duration of the
                provision of the services contracted by the Controller to the Processor, (hereinafter,
                "the Services").</p>
              <p>Nature and purpose of the treatment: The processing of personal data will be done
                solely and exclusively to provide the Services.
                Type of personal data and categories of interested parties: The types of personal data
                which will be processed by the Processor are email and fullname. The categories of interested parties are
                customer data base.</p>
              <p>Obligations and rights of the Controller: a) Deliver, or allow the access of the Processor
                to, the data in order to provide the Services. b) To comply with the duty of information
                provided for in the GDPR in relation to the data subjects and to obtain their prior
                consent to process their personal data for the purposes of advertising and commercial
                prospecting. The Controller exonerates the Processor of all responsibility in relation to
                such obligation. c) Carry out a privacy impact assessment to the protection of personal
                data by each of the treatment activities whose are carried out by the Processor, when
                it be appropriate. d) Carry out the corresponding prior consultations. e) Ensure, prior
                to and throughout the treatment, compliance with the Regulation by the Processor. f)
                Supervise the treatment, including carrying out inspections and audits.</p>
              <p>Obligations of the Processor: a) Processing personal data only following documented
                instructions from the Controller, including with regard to transfers of personal data,
                unless required to do so by Union or Member State law; in such case, the Processor
                will inform Controller of that legal requirement before processing, unless that Law
                prohibits such information on important grounds of public interests. b) Ensure that the
                persons authorised to process personal data have committed themselves to
                confidentiality or are under an appropriate statutory obligation of confidentiality. c)
                Take all measures required pursuant to Article 32 of the Regulation. d) Do not
                subcontract the processing of data to other Processors, without prior authorisation. e)
                Assist the Controller, taking into account the nature of the processing, by appropriate
                technical and organisational measures, insofar as this is possible, for the fulfilment of
                the Controller’s obligation to respond to requests for exercising the data subject’s
                rights. In this case, the Processor must communicate it by email to the following
                address <a href={`mailto:${email}`}>{email}</a>. The communication must be made
                immediately and in no case beyond the working day following the receipt of the request, together with, where
                appropriate, the information that may be relevant to respond the request. f) Assists the Controller in
                ensuring compliance with the obligations pursuant to Articles 32 to 36
                taking into account the nature of processing and the information available to the
                Processor. g) At the choice of the Controller, deletes or returns all the personal data to
                the Controller after the end of the provision of services relating to processing, and
                deletes existing copies unless Union or Member State law requires storage of the
                personal data. h) Makes available to the Controller all information necessary to
                demonstrate compliance with the obligations laid down in Article 28 of the Regulation,
                as well as to allow and contribute to audits, including inspections, conducted by the
                Controller or another auditor mandated by the controller. i) Inform the Controller
                immediately if, in the opinion of the Processor, when an instruction infringes the
                Regulation or other data protection rule from the Union or Member State. j) Comply
                with any other obligation set by the current data protection regulations. k) Notify to
                the Controller, without undue delay and where feasible, before the maximum period
                of 48 hours, through email, any personal data breach with all the relevant information
                for the documentation, resolution and communication of the incident.</p>
              <p>Subcontracting: The Processor is authorised to subcontract with the following
                categories of Processors: Suppliers of electronic communications and online office
                automation, hosting, SaaS services such as CRM / ERP, accounting, auditing and
                lawyers. When the Processor turns to another Processor to carry out certain treatment
                activities on behalf of the Client, he will impose to the other Processor, by agreement,
                the same data protection obligations as those stipulated in this Contract. If that other
                Processor fails to comply with their data protection obligations, the Processor will
                remain fully responsible with the Client for the fulfilment of the obligations of the
                other Processor.</p>
              <p>Applicable Law and Jurisdiction: Spanish laws will govern this Contract, and if there is
                any dispute it will be resolved in the courts of the domicile of Controller.</p>
              <br/><h3>1.6. Security Measures Taken with Data Collection</h3>
              <p>We use security systems that allow us to maintain the integrity, confidentiality and security of the data
                collected through our website or platform.</p>
              <p>However, the user and / or client, must understand, accept and comprehend that Internet security measures
                are
                not infallible; therefore, they are also required to take the necessary security measures that will enable
                them to rely on the accuracy of the website of which they are submitting information.</p>
              <p>{name} strives to ensure the privacy and security of the user and their password within our platform at
                all times, by always acting with the utmost diligence and implementing the necessary security measures. In
                this regard, the user and / or client must also correspond with implementing the necessary measures, for
                they
                are solely responsible for the protection of their password or information, {name} is not liable for
                situations where the user fails to implement the appropriate security measures, or for their consequences.
                Nor
                is it liable for causes or damages incurred by an unaffiliated third party to the company, or due to force
                majeure.</p>
              <p>To view what we are and are not responsible for, the user and / or client can visit and view the rest of
                our
                legal notices and policies applicable to this website and platform, as well as our Legal Notice, our
                Community
                Terms and Conditions of Use.</p>
              <br/><h2>2. Cookie policy</h2>
              <p>{name} uses cookies in order to improve our website navigation and offer better services to our users
                and / or clients. Therefore, we notify the user of the use of these cookies, which are installed from our
                website <a href={url} title={name} target="_blank">{url}</a>.</p>
              <p>For the purposes of this Cookies Policy, “to continue using” shall imply clicking on any button, checkbox
                or
                link of the Website as well as downloading any content from it or page scrolling.</p>
              <br/><h3>2.1. Definition of Cookies</h3>
              <p>A cookie is a file that is stored on your computer and / or mobile device when you browse certain websites
                such as this one. Among other things, cookies allow Websites to store and retrieve information about your
                browsing habits or your computer and, depending on the information they contain and the way you use your
                computer, can be used to recognize the User.</p>
              <p>Depending on their expiration and the purpose for which the data is collected by means of the cookies,
                there
                are different types of cookies.</p>
              <p>At the same time, depending on the purpose for which they are used for, cookies can be categorized as:</p>
              <p><b>Analytics Cookies.-</b> These cookies collect data to assess the use you make of the Website and the
                Website’s overall activity. The Web analytics is the measurement, collection and reporting of web data for
                purposes of understanding and optimizing the usage of the Website.</p>
              <p><b>Social Cookies.-</b> They are necessary for external social networks (Facebook, Google, Twitter,
                Pinterest, etc.). Their function is to control the interaction with the social widgets within the site.</p>
              <p><b>Behavioural Advertising Cookies.-</b> These cookies collect information regarding your preferences and
                personal choices on the Website. They allow us to customize the advertising in order for it to be relevant
                to
                the users and avoid showing already seen ads by the User.</p>
              <p><b>Technical Cookies.-</b> They are strictly necessary for the functioning of the Website, the browsing the
                User makes of it as well as the functionality and usability of the different options and services contained
                within the site.</p>
              <p><b>Customization Cookies.-</b> They allow the User to access and use the service based on certain
                preferences
                of predefined nature on his device or set by the User himself. For example, the language, the browser used
                to
                access the service, the design of the selected content, geolocation of the computer, regional settings of
                the
                location the services are accessed from.</p>
              <p><b>Third Party Cookies.-</b> Some Websites may set cookies belonging to third parties in order to manage
                and
                improve the services being offered.</p>
              <br/><h4>2.1.1 Types of Cookies We Use</h4>
              <p>We have designed a table in which the user can view the type of cookies used on our platform and their
                respective purpose. For this, it is important that the user be clear about the following:</p>
              <p><strong>Third Party Cookies:</strong> These are manages by other companies and are installed from their
                computers and / or domains to the users computer or device.</p>
              <p><strong>Our Own Cookies:</strong>These are managed by our company and are installed by our computers onto
                the
                user’s computer or device.</p>
              <p>Type of cookies we use:</p>
              <table className="table table-bordered">
                <tbody>
                <tr>
                  <th colSpan="2">Type and duration of Cookie</th>
                  <th>Purpose</th>
                  <th>Own/Third Party</th>
                </tr>
                <tr>
                  <td>_ga</td>
                  <td>2 years, by defect</td>
                  <td>It is used to monitor user behavior in our platform.</td>
                  <td>Google Analytics/Twitter</td>
                </tr>
                <tr>
                  <td>Login cookie – session</td>
                  <td>2 years, by defect</td>
                  <td>It is used to distinguish users that log in our platform</td>
                  <td>Google Analytics/Twitter</td>
                </tr>
                </tbody>
              </table>
              <br/><h3>2.1.2. Analytics Cookies</h3>
              <p><b><u>Google Analytics</u></b></p>
              <p>Our Website uses Google Analytics (third-party analytics cookies), a service provided by Google, Inc.
                (“Google”). Google Analytics cookies are used to allow {name} analyze the User’s interaction with the
                Website. The information generated by the cookie about your use of {name} (including you IP address)
                will be transmitted and stored by GOOGLE in servers located in the United Sates. Google will use such
                information on our behalf in order to track your use of {name}, to create reports regarding
                {name}᾽s activity and providing other services in connection with {name}᾽s activity. You can
                refuse the processing of your personal data or information by disabling the use of cookies on your browser’s
                settings. However, please note, that if you do this you may not be able to use the full functionality of
                {name}. By using {name} you acknowledge the processing of your data by Google in the manner and
                for the purposes mentioned above.</p>
              <p>You can find further information on Google Analytics cookies here.</p>
              <p><b><u>New Relic</u></b></p>
              <p>Our Website uses New Relic (third-party analytics cookies), a service provided by New Relic, Inc. (“New
                Relic”). New Relic cookies are used to allow {name} analyze the User’s interaction with the Website. The
                information generated by the cookie about your use of {name} (including you IP address) will be
                transmitted and stored by New Relic in servers located in the United Sates. By using {name} you
                acknowledge the processing of your data by Google in the manner and for the purposes mentioned above.</p>
              <p>You can find further information on New Relic cookies here.</p>
              <p><b><u>Heap Analytics</u></b></p>
              <p>Our Website uses Heap Analytics (third-party analytics cookies), a service provided by Heap, Inc. (“Heap”).
                Heap Analytics cookies are used to allow {name} analyze the User’s interaction with the Website. The
                information generated by the cookie about your use of {name} (including you IP address) will be
                transmitted and stored by Heap Analytics in servers located in the United Sates. By using {name} you
                acknowledge the processing of your data by Google in the manner and for the purposes mentioned above.</p>
              <p>You can find further information on Heap Analytics cookies here.</p>
              <br/><h3>2.1.3. Behavioural Advertising Cookies</h3>
              <p><b><u>DoubleClick</u></b></p>
              <p>Our Website uses Google Analytics (third-party advertising cookies), a service provided by Google, Inc.
                (“Google”). To create reports regarding {name}᾽s activity and providing other services in connection
                with {name}᾽s activity.</p>
              <p>You can find further information on Doubleclick cookies here.</p>
              <p><b><u>Google Adwords Conversion</u></b></p>
              <p>Our Website uses Google Adwords (third-party advertising cookies), a service provided by Google, Inc.
                (“Google”). To introduce advertisements in {name}᾽s website.</p>
              <p>You can find further information on Adwords Conversion cookies here.</p>
              <p><b><u>Google Dynamic Remarketing</u></b></p>
              <p>Our Website uses Google Dynamic Remarketing (third-party advertising cookies), a service provided by
                Google,
                Inc. (“Google”). To introduce advertisements in {name}᾽s website.</p>
              <p>You can find further information on Dynamic Remarketing cookies here.</p>
              <br/><h3>2.1.4. Cookies from Social Networks</h3>
              <p>{name}, does not manage the networks and / or platforms of a third party, therefore is not responsible
                for the cookies installed by these platforms. As a user and / or client of our platform, you are required to
                consult with their Privacy and Cookie Policy to be aware of the type and purpose and ultimately decide to
                accept or reject them.</p>
              <p>Cookies utilized by Facebook:</p>
              <p><a target="_blank" href="https://www.facebook.com/help/cookies" title="Cookies used by Facebook"
                    rel="nofollow">https://www.facebook.com/help/cookies</a></p>
              <p>Cookies utilized by Twitter:</p>
              <p><a target="_blank" href="https://twitter.com/privacy" title="Cookies used by Twitter"
                    rel="nofollow">https://twitter.com/privacy</a></p>
              <p>Cookies utilized by LinkedIn:</p>
              <p><a target="_blank" href="https://www.linkedin.com/legal/cookie-policy?trk=hb_ft_cookie"
                    title="Cookies used by LInkedIn"
                    rel="nofollow">https://www.linkedin.com/legal/cookie-policy?trk=hb_ft_cookie</a></p>
              <br/><h3>2.1.4. Cookies from Social Networks</h3>
              <p>{name}, does not manage the networks and / or platforms of a third party, therefore is not responsible
                for the cookies installed by these platforms. As a user and / or client of our platform, you are required to
                consult with their Privacy and Cookie Policy to be aware of the type and purpose and ultimately decide to
                accept or reject them.</p>
              <p>Cookies utilized by Facebook:</p>
              <p><a target="_blank" href="https://www.facebook.com/help/cookies" title="Cookies used by Facebook"
                    rel="nofollow">https://www.facebook.com/help/cookies</a></p>
              <p>Cookies utilized by Twitter:</p>
              <p><a target="_blank" href="https://twitter.com/privacy" title="Cookies used by Twitter"
                    rel="nofollow">https://twitter.com/privacy</a></p>
              <p>Cookies utilized by LinkedIn:</p>
              <p><a target="_blank" href="https://www.linkedin.com/legal/cookie-policy?trk=hb_ft_cookie"
                    title="Cookies used by LInkedIn"
                    rel="nofollow">https://www.linkedin.com/legal/cookie-policy?trk=hb_ft_cookie</a></p>
              <br/><h2>3. How to Disable Cookies in your Browser</h2>
              <p>If the user wishes to disable cookies from their browser, we provide them with some links that they can
                consult depending on the type of browser they have installed on their computer or terminal equipment.</p>
              <p>In Google Chrome:</p>
              <p><a target="_blank" href="https://support.google.com/chrome/answer/95647?hl=es"
                    title="Disable cookies in Chrome"
                    rel="nofollow">https://support.google.com/chrome/answer/95647?hl=es</a>
              </p>
              <p>In Safari:</p>
              <p><a target="_blank" href="https://support.apple.com/kb/ph5042" title="Disable cookies in Safari"
                    rel="nofollow">https://support.apple.com/kb/ph5042</a></p>
              <p>In Firefox:</p>
              <p><a target="_blank" href="https://support.mozilla.org/en-US/kb/disable-third-party-cookies"
                    title="Disable cookies in Firefox"
                    rel="nofollow">https://support.mozilla.org/en-US/kb/disable-third-party-cookies</a></p>
              <p>In Internet Explorer:</p>
              <p><a target="_blank" href="http://windows.microsoft.com/en-US/windows-vista/block-or-allow-cookies"
                    title="Disable cookies in Interet Explorer"
                    rel="nofollow">http://windows.microsoft.com/en-US/windows-vista/block-or-allow-cookies</a></p>
              <p>In Opera:</p>
              <p><a target="_blank" href="http://www.opera.com/help/tutorials/security/privacy/Privacy.js"
                    title="Disable cookies in Opera"
                    rel="nofollow">http://www.opera.com/help/tutorials/security/privacy/</a>
              </p>
              <p>We warn the user that uninstalling or disabling cookies from their browser can make it difficult or prevent
                them from accessing or browsing certain portions of our website.</p>
              <br/><h2>4. On the presence of {name} in social networks</h2>
              <p>{name} will have a corporate profile on the social networks Facebook, Twitter and LinkedIn.</p>
              <p>In light of this and in accordance with the provision set by the Data Protection Act, we are responsible
                for
                the processing of our users information in such networks. Thus, when the user joins our profile as a
                follower,
                you agree to this policy, where we have explained their rights and we inform them on how we will use their
                information.</p>
              <p>As a company or controller, we are required to provide confidentiality in the processing of their
                information
                and to ensure compliance with their rights, always in accordance with the provisions set by the Organic Law
                on
                Data Protection (Law No. 15/1999 of 13 December).</p>
              <p>Furthermore, we inform that although we only use these social networks to post news or relevant information
                related to the type of benefits or services that we offer, as well as to create topics of interest that we
                believe will appeal to our clients and / or users. Therefore it is possible that you may receive such news
                or
                content with this type of information on your Wall or profile.</p>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

export default (Privacy);
