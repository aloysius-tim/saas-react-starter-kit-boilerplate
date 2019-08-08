/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Card from '../../../components/Layout/Card';

class Legal extends React.Component {
  render() {
    const url = 'https://saastr.co';
    const name = 'SaaStr';
    const email = 'hello@saastr.co';
    const tel = '+33 06 06 06 06 06';
    return (
      <div>
        <div className="header bg-gradient-primary py-7 py-lg-8">
          <div className="container">
            <div className="header-body text-center mb-7">
              <div className="row justify-content-center">
                <div className="col-lg-5 col-md-6">
                  <h1 className="text-white">Legal Notice</h1>
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
            <Card
              header={
                <div>
                  <h2>1. Who are we?</h2>
                  <p>
                    {name} Inc, is a company that aims to contribute to the
                    overall improvement of businesses and the economy, on the
                    one hand, by supporting entrepreneurs helping them to find
                    their best customers or their investors.
                  </p>
                  <p>
                    Therefore, providing stakeholders, through its domain{' '}
                    <a href={url} title="{name} Website">
                      {url}
                    </a>, with an online platform that automates the email
                    guessing technology and aggregate social information about
                    the contacts.
                  </p>
                  <p>
                    Through this platform, {name} Inc helps the user to find the
                    information needed, according to their profile and
                    interests.
                  </p>
                  <p>
                    In compliance with the provisions of the regulations,
                    detailed below are the contact details and identification of
                    our company:
                  </p>
                  <p>&nbsp;</p>
                  <table className="table">
                    <tbody>
                      <tr>
                        <th />
                        <th>Our Information</th>
                      </tr>
                      <tr>
                        <th>Domain:</th>
                        <td>
                          <a href={url} title="{name} Website">
                            {url}
                          </a>{' '}
                          (hereinafter “the website”)
                        </td>
                      </tr>
                      <tr>
                        <th>Contact Email:</th>
                        <td>
                          <a href={`mailto:${{ email }}`} title="{name}">
                            {email}
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <th>Telephone:</th>
                        <td>
                          <a href={`tel:${tel}`} title="Telephone">
                            {tel}
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <p>&nbsp;</p>
                  <h2>2. Purpose of this legal notice</h2>
                  <p>
                    This Legal Notice is intended to inform the user about the
                    person behind this website and to make them aware of all the
                    conditions of use thereof, as well as the designated limits
                    and responsibilities of all the involved parties, all this
                    in compliance with the rules on data protection, e-commerce
                    and other applicable regulations. Along with this Legal
                    Notice, the user shall be provided with the appropriate
                    Privacy and Cookie policy, as well as with the applicable
                    community terms and general terms, which will inform of all
                    legal aspects to consider when using this website and our
                    services.
                  </p>
                  <h2>3. Services offered by our platform</h2>
                  <h3>3.1. General terms</h3>
                  <p>
                    {name} offers conducting market research that is focused on
                    two types of users or people:
                  </p>
                  <p>
                    A service that can be used by entrepreneurs, that will grant
                    them information, for example, on potential leads:
                    business/corporate email address, social network associates.
                  </p>
                  <p>
                    Users can also add or remove leads, as they see fit,
                    according to their interests and as enabled by our platform,
                    as will be observed while browsing through it.
                  </p>
                  <h3>3.2. Functioning of the Platform</h3>
                  <p>
                    In order to be eligible to obtain the study of interest, it
                    is necessary that the User enter our platform and proceed to
                    indicate the lead of interest on the search engine that will
                    appear at the top as well as be validated on our platform,
                    (See next point), following the steps that are there
                    indicated.
                  </p>
                  <h2>4. Website Access Requirements</h2>
                  <h3>4.1. General Aspects</h3>
                  <h4>4.1.1. Eligibility Requirements</h4>
                  <p>
                    To enjoy our services the User must have sufficient capacity
                    to contract, read and understand this Legal Notice, and to
                    gather and respect the provisions set forth by the other
                    applicable policies to our platform, as well as to be
                    validated as a Registered User of our platform.
                  </p>
                  <p>
                    You are required to be of <strong>legal age</strong> to be a
                    User of this website and to be able to contract our
                    services.
                  </p>
                  <p>
                    In this regard, if the owner of the platform detects that a
                    minor has contracted any of its services, this will
                    automatically lead to the cancellation of services.
                  </p>
                  <p>
                    If a User detects that a minor has contracted any of our
                    services, please proceed to let us know in/with as much
                    detail as possible by sending an email to{' '}
                    <a
                      href={`mailto:${{ email }}`}
                      title="{name} Email Address"
                    >
                      info@{name}.com
                    </a>.
                  </p>
                  <h4>4.1.2. Commitment and Acceptance of our Policies</h4>
                  <p>
                    The user, when accepting our legal notices, also accepts our
                    conditions freely and unequivocally having specified so when
                    contracting and /or registering for our services, with an
                    “x” in the box that applies and where duly noted.
                  </p>
                  <p>
                    The client and/or user agrees to adopt and implement the
                    appropriate security measures to prevent or minimize
                    unauthorized use of their account and / or passwords, by
                    taking the necessary steps to ensure that others do not gain
                    unauthorized access to it.
                  </p>
                  <h3>4.2. Guest User</h3>
                  <p>
                    All persons interested in obtaining information on their
                    possible competitors can access our website, to validate a
                    business idea or if is interested in investing in a
                    particular project or business sector.
                  </p>
                  <p>
                    While it is not required to register as a User in order to
                    enter and browse through our website, it is required to do
                    so in order to gain access to any type of report on a
                    specific company or sector.
                  </p>
                  <h3>4.3. Registered User</h3>
                  <p>
                    In the event that the User is interested in receiving
                    additional information concerning specific leads, User
                    self-registration will be required, to which will be
                    essential that they either confirm with their username and
                    password on the social network LinkedIn; having already read
                    and agreed to this Privacy Policy.
                  </p>
                  <h2>5. User obligations</h2>
                  <p>
                    The user that navigates and utilizes our website for the
                    services listed in this Legal Notice and on our website,
                    agrees to the following responsibilities:
                  </p>
                  <ul>
                    <li>Be of legal age to utilize our services.</li>
                    <li>
                      As a client and/or user, be obligated to respect the
                      contents of the website and carry out the necessary
                      procedures to register and comply with the required terms.
                    </li>
                    <li>
                      Send information through the set channels of communication
                      (web forms, email, telephone) that is real, legitimate,
                      current and sufficient personal or business data, as
                      necessary.
                    </li>
                    <li>
                      Keep your username and password safely, by applying the
                      necessary security measures to maintain the privacy,
                      discretion and good use of them. For example, by not
                      sharing it with a third party, and by changing it from
                      time to time (see item relating to the security of our
                      Legal Notice and Privacy Policy).
                    </li>
                    <li>
                      Meet the community terms, which also form an integral part
                      of this Legal Notice.
                    </li>
                    <li>
                      Exempt {name} from all liability and hold it harmless
                      against all the actions identified as being restrictive in
                      this Legal Notice and/or other legal conditions; to
                      indemnify {name} at all times and to answer for all
                      damages caused to a third party.
                    </li>
                  </ul>
                  <h2>
                    6. Contents and Intellectual and Industrial Property policy
                  </h2>
                  <h3>6.1. Type of Content Available on our Platform</h3>
                  <p>
                    We have the following content available on our website:
                    description of the platform’s services of our company or
                    business, as well as the services that we offer.
                  </p>
                  <p>
                    We have the following content available on our website:
                    description of the platform’s services of our company or
                    business, as well as the services that we offer.
                  </p>
                  <h4>6.1.1. Intellectual Property Policy</h4>
                  <p>
                    Our Intellectual Property policy applies to entire website,
                    our blog and the content or materials disseminated by them,
                    as well as on the shipments of newsletters or newsletters to
                    which the user has subscribed to, where appropriate and on
                    the design content, on the part created by the company or
                    its system, for the market research generated in response to
                    the request by the user or client.
                  </p>
                  <p>
                    All content and graphical elements, (images, articles, news,
                    videos, information, sounds, text, logos, database, software
                    or source codes…) of this website or blog, belong to the
                    owner of this platform, as its creator, or to a third party
                    who they have authorized its use to, and as such are
                    protected by the applicable Copyright Act.
                  </p>
                  <h4>
                    6.1.2. User Limits Regarding the Access and Use of our
                    Content
                  </h4>
                  <p>
                    Access to the intellectual property contained in our
                    platform by the user does not entail the transfer of any
                    rights over to them. Therefore, any use or reproduction made
                    by users of such content, or other content that may be
                    included in future should be carried out in accordance with
                    the provisions and legal policies set forth herein, always
                    respecting the applicable legal limitations, in addition to
                    our community terms.
                  </p>
                  <p>In particular, the following is prohibited:</p>
                  <ul>
                    <li>
                      The reproduction, processing, distribution, and public
                      communication, the making it available to the public or
                      any other exploitation of content of this webpage and
                      blog, as well as of the market studies obtained for profit
                      and for its own purposes, as shall be stated, without the
                      proper consent in writing of the stakeholders.
                    </li>
                    <li>
                      Nor can links be inserted to this website and its blog
                      without the proper consent of the owner and, where
                      appropriate, will only allow links to the home page of
                      this website and blog.
                    </li>
                  </ul>
                  <p>
                    If you wish to request any type of authorization to use or
                    publish any of our content found on the website or our blog,
                    please contact us by email at{' '}
                    <a
                      href={`mailto:${{ email }}`}
                      title="{name} Email Address"
                    >
                      info@{name}.com
                    </a>.
                  </p>
                  <h4>6.1.3. Permitted Uses</h4>
                  <p>
                    As a user you can display the elements of the website and
                    blog and even print, copy and store them on the hard drive
                    of your computer or any other hardware, provided that it is
                    solely and exclusively for your personal and private use,
                    therefore any commercial use, distribution, and modification
                    or alternation is absolutely forbidden.
                  </p>
                  <p>
                    However, as an exception to what is indicated in paragraph 2
                    above, we allow the user to make a reference to the articles
                    published on the website or blog in social networks, through
                    actions such as a “tweet, retweet, share, blogging” or
                    similar, provided that, when doing so our ownership is
                    respected or that the people you have specified in the
                    relevant articles or contents are properly acknowledged.
                  </p>
                  <h3>
                    6.2. Concerning the Corresponding Software and Design of the
                    Platform
                  </h3>
                  <p>
                    The owner of this website is the patentee of the algorithm
                    associated to our platform used to obtain the information we
                    provide users for our services. In this regard, we have
                    applied for a patent before the US Patent and Trademark
                    Office so that we can take credit against any third party,
                    provided that this occurs.
                  </p>
                  <p>
                    {name} also owns the graphic and corporate designs
                    associated with the website and platform, additionally
                    having the permits and licenses available of all third
                    parties involved, if any, therein.
                  </p>
                  <p>
                    Therefore, any use of the programming codes, software or
                    design by the users or clients is not allowed, thus will be
                    held responsible for any misuse or prejudice carried out
                    against the rights of the owner of the platform, or a third
                    party.
                  </p>
                  <p>
                    Furthermore, by no means, can you extract, manipulate, copy,
                    compile or decompile any element that constitutes neither
                    the platform nor its algorithm, for other purposes or to
                    escape the scope of the provision of services by users of
                    the platform, legal action can be taken against them if any
                    action is detected in this regard.
                  </p>
                  <p>
                    Matters not covered by our Legal Notices/disclaimers, will
                    be sought to be in compliance with the regulations provided
                    via the applicable rights on intellectual and industrial
                    property.
                  </p>
                  <h2>7. Privacy and Cookie Policy</h2>
                  <p>
                    {name} cares about the privacy of its users and / or
                    clients, which is why it has developed a Privacy and Cookie
                    Policy that will allow the user to learn about their rights,
                    the purpose of why we process their information and the type
                    of cookies we use in this website and with our services.
                  </p>
                  <p>
                    You can find our Privacy and Cookie Policy{' '}
                    <a href="/privacy" title="{name} Privacy and Cookie Policy">
                      clicking here
                    </a>.
                  </p>
                  <h2>8. Incoterms</h2>
                  <p>
                    Once the report has been requested, following the steps
                    found on our platform, the User will can immediately see the
                    market study, in which the information that had been
                    requested will be detailed.
                  </p>
                  <p>
                    {' '}
                    If the User completes their report request and it does not
                    arrive or have any question about, please, we inquire that
                    they contact our team to{' '}
                    <a
                      href={`mailto:${{ email }}`}
                      title="{name} Email Address"
                    >
                      info@{name}.com
                    </a>.
                  </p>
                  <h2>9. Security conditions</h2>
                  <p>
                    All processing of personal information carried out by our
                    platform or by any other system, will be equipped with the
                    corresponding security measures needed for the type of
                    information being processed, thus complying with the
                    provisions set forth by the Data Protection Regulation.
                  </p>
                  <p>
                    We warn and inform the user that the information provided to
                    us as a client, is only used to provide the service
                    requested; we do not share, sell or transfer the information
                    to a third party (see Privacy Policy). The goal of our
                    service is to provide clients with a superior service, and
                    by no means is it to market their information, therefore
                    they can rest assure in this regard.
                  </p>
                  <h2>10. Social media access and use policy</h2>
                  <p>
                    {name} operates in the following social networks: Facebook,
                    Twitter, Instagram and LinkedIn.
                  </p>
                  <p>
                    We inform users that these social networks are managed by a
                    third party, therefore when one chooses to link to our
                    profile as a follower in these networks, such as through
                    your login or user ID in LinkedIn, you agree to read and
                    accept the terms and legal policies of that platform.
                  </p>
                  <p>
                    These actions are your sole responsibility; {name} is not to
                    be held responsible for anything that relates to the
                    administration, the management and/or results of such
                    networks, unless it is something related to their own
                    service.
                  </p>
                  <h2>11. Warranty</h2>
                  <h3>11.1. Details regarding the information sent</h3>
                  <p>
                    We guarantee that the market research generated from the
                    contracting of our services, and in response to requests
                    made by our Clients, has the greatest detail on investment,
                    competitors, acquisitions, bankruptcies or unsuccessful
                    situations of the requested sectors, besides informing on
                    the state of the market and other statistical data,
                    according to the service selected.
                  </p>
                  <h3>11.2. Online Security Guarantee</h3>
                  <p>
                    This website complies with the highest standards of Internet
                    security, including high-security servers, HTTPS security
                    protocols in all contracting and registration processes.
                  </p>
                  <h3>11.3. Privacy</h3>
                  <p>
                    IN {name} we are particularly concerned with ensuring the
                    confidentiality of the information provided by our Clients,
                    and therefore we rely on taking all necessary measures to
                    prevent the risk of personal or confidential data loss. For
                    more information, the User may refer to our Privacy Policy.
                  </p>
                  <h2>12. Client or User responsabilities</h2>
                  <p>
                    As a Client, the User agrees to make proper use of our
                    services and products without violating current legislation,
                    or infringing the rights and interests of a third party.
                  </p>
                  <p>
                    The Client also guarantees the accuracy and veracity of the
                    information provided when filling out the forms for
                    contracting the service, avoiding the creation of damages to{' '}
                    {name} arising from inaccuracies of the same.
                  </p>
                  <p>
                    When contracting our services, the User will always be of
                    legal age, an indispensable requirement to contract.
                  </p>
                  <p>
                    The Client will also be responsible for respecting the
                    conditions and the form or implementation of the services
                    detailed in the conditions that apply, where appropriate, as
                    well as in our Community Standards.
                  </p>
                  <p>
                    Failure to meet any of these conditions may result in the
                    withdrawal or cancellation of services by
                    {name} without prior notice and without entitling you to any
                    compensation.
                  </p>
                  <h2>13. Exemptions from liability</h2>
                  <p>
                    The User must understand that the studies and reports issued
                    by {name} were obtained from automated analysis of other
                    databases and other information that is circulating in the
                    network, on platforms or extracted from what is known as Big
                    Data. In virtue of, {name} does not control the relevance,
                    veracity or accuracy of the entirety of the data extracted
                    so that, in no case, is it liable for information that is
                    not accurate, truthful, current or any information
                    derivative of an error from the source from which such
                    information was extracted from.
                  </p>
                  <p>
                    Thus, in an expository and non exhaustive manner, {name} is
                    not be liable under no circumstance in the event of:
                  </p>
                  <ul>
                    <li>
                      Errors or confusion related to names, data or information
                      from failed pages or original sources from which they were
                      extracted.
                    </li>
                    <li>
                      Lack of detailed information on specific a sector if you
                      can prove that on the sector there is significant lack of
                      information on the Internet.
                    </li>
                    <li>
                      Misuse or abuse by the User of information obtained from
                      our services, as well as their misinterpretations of it.
                    </li>
                    <li>
                      Damage or injury that occurred as a result of the use of
                      information extracted from our services.
                    </li>
                  </ul>
                  <p>
                    See also section 7 of our Community Terms and Conditions of
                    Use.
                  </p>
                  <p>
                    Our services are used to obtain more details and information
                    on sectors that may be of interest to the User entrepreneur
                    or investor. If User is not used to the interpretation of
                    the results obtained, we recommended they contact a
                    counselor who can guide them through it. Under no
                    circumstance, if any, shall {name} be responsible for the
                    interpretation that the User or his Advisor give the
                    information obtained from our website or as a result of our
                    studies.
                  </p>
                  <h2>14. Data processing</h2>
                  <p>
                    Purpose: Regulate the relationship between the Client, in
                    its capacity as Controller of treatment, and {name}, in its
                    capacity as Processor of Treatment, in order to comply with
                    the provisions of the Article 28.3 of Regulation (EU)
                    2016/679 (hereinafter, "the Regulation") and ensure the
                    security of personal data. The Processor undertakes to
                    process personal data only by following the instructions
                    provided by Controller and guarantees that the persons
                    authorised to process personal data undertake to respect
                    confidentiality or will be subject to confidentiality by
                    statutory obligation.
                  </p>
                  <p>
                    Services and duration: The validity of this Contract will be
                    equal to the duration of the provision of the services
                    contracted by the Controller to the Processor, (hereinafter,
                    "the Services").
                  </p>
                  <p>
                    Nature and purpose of the treatment: The processing of
                    personal data will be done solely and exclusively to provide
                    the Services.
                  </p>
                  <p>
                    Type of personal data and categories of interested parties:
                    The types of personal data which will be processed by the
                    Processor are email and fullname. The categories of
                    interested parties are customer data base.
                  </p>
                  <p>Obligations and rights of the Controller:</p>
                  <p>a) Deliver, or allow the access of the Processor</p>
                  to, the data in order to provide the Services. <p />
                  <p>b) To comply with the duty of information</p>
                  provided for in the GDPR in relation to the data subjects and
                  to obtain their prior consent to process their personal data
                  for the purposes of advertising and commercial prospecting.
                  The Controller exonerates the Processor of all responsibility
                  in relation to such obligation. <p />
                  <p>
                    c) Carry out a privacy impact assessment to the protection
                    of personal data by each of the treatment activities whose
                    are carried out by the Processor, when it be appropriate.{' '}
                  </p>
                  <p>d) Carry out the corresponding prior consultations.</p>
                  <p>
                    e) Ensure, prior to and throughout the treatment, compliance
                    with the Regulation by the Processor.{' '}
                  </p>
                  <p>
                    f) Supervise the treatment, including carrying out
                    inspections and audits.
                  </p>
                  <p>Obligations of the Processor: </p>
                  <p>
                    a) Processing personal data only following documented
                    instructions from the Controller, including with regard to
                    transfers of personal data, unless required to do so by
                    Union or Member State law; in such case, the Processor will
                    inform Controller of that legal requirement before
                    processing, unless that Law prohibits such information on
                    important grounds of public interests.
                  </p>
                  <p>
                    b) Ensure that the persons authorised to process personal
                    data have committed themselves to confidentiality or are
                    under an appropriate statutory obligation of
                    confidentiality.
                  </p>
                  <p>
                    c) Take all measures required pursuant to Article 32 of the
                    Regulation.
                  </p>
                  <p>
                    d) Do not subcontract the processing of data to other
                    Processors, without prior authorisation.
                  </p>
                  <p>
                    e) Assist the Controller, taking into account the nature of
                    the processing, by appropriate technical and organisational
                    measures, insofar as this is possible, for the fulfilment of
                    the Controller’s obligation to respond to requests for
                    exercising the data subject’s rights. In this case, the
                    Processor must communicate it by email to the following
                    address <a href={`mailto:${{ email }}`}>info@{name}.com</a>.
                    The communication must be made immediately and in no case
                    beyond the working day following the receipt of the request,
                    together with, where appropriate, the information that may
                    be relevant to respond the request.
                  </p>
                  <p>
                    f) Assists the Controller in ensuring compliance with the
                    obligations pursuant to Articles 32 to 36 taking into
                    account the nature of processing and the information
                    available to the Processor.
                  </p>
                  <p>
                    g) At the choice of the Controller, deletes or returns all
                    the personal data to the Controller after the end of the
                    provision of services relating to processing, and deletes
                    existing copies unless Union or Member State law requires
                    storage of the personal data.
                  </p>
                  <p>
                    h) Makes available to the Controller all information
                    necessary to demonstrate compliance with the obligations
                    laid down in Article 28 of the Regulation, as well as to
                    allow and contribute to audits, including inspections,
                    conducted by the Controller or another auditor mandated by
                    the controller.
                  </p>
                  <p>
                    i) Inform the Controller immediately if, in the opinion of
                    the Processor, when an instruction infringes the Regulation
                    or other data protection rule from the Union or Member
                    State.
                  </p>
                  <p>
                    j) Comply with any other obligation set by the current data
                    protection regulations.
                  </p>
                  <p>
                    k) Notify to the Controller, without undue delay and where
                    feasible, before the maximum period of 48 hours, through
                    email, any personal data breach with all the relevant
                    information for the documentation, resolution and
                    communication of the incident.
                  </p>
                  <p />Subcontracting: The Processor is authorised to
                  subcontract with the following categories of Processors:
                  Suppliers of electronic communications and online office
                  automation, hosting, SaaS services such as CRM / ERP,
                  accounting, auditing and lawyers. When the Processor turns to
                  another Processor to carry out certain treatment treatment
                  activities on behalf of the Client, he will impose to the
                  other Processor, by agreement, the same data protection
                  obligations as those stipulated in this Contract. If that
                  other Processor fails to comply with their data protection
                  obligations, the Processor will remain fully responsible with
                  the Client for the fulfilment of the obligations of the other
                  Processor.<p />
                  <p />Applicable Law and Jurisdiction: Spanish laws will govern
                  this Contract, and if there is any dispute it will be resolved
                  in the courts of the domicile of Controller.<p />
                  <h2>
                    15. Changes to this legal notice and supplementary texts
                  </h2>
                  <p>
                    {name} reserves the right to modify this legal notice in
                    order to adapt it to new regulations, commercial, marketing
                    and/or new internal parameter requirements that facilitate
                    web usability.
                  </p>
                  <p>
                    These changes will be notified in due course, through our
                    platform, so that our clients and/or users can become
                    familiar with the contents thereof and, if necessary, accept
                    or reject (if you do not agree with) the respective
                    conditions.
                  </p>
                  <p>
                    This Legal Notice is further complemented by the Privacy and
                    Cookie Policy applicable to this platform, as well as the
                    community terms and conditions applicable to our services.
                    All these texts, link and affect our users therefore we
                    recommend that they are read and understood by the same,
                    which must be understood and accepted when registering to
                    our services or when contracting them, as discussed in our
                    platform or website.
                  </p>
                  <h2>16. Governing language</h2>
                  <p>
                    In the event of a disagreement arising between the text of
                    these Terms and any translation thereof, the Spanish version
                    shall prevail under any circumstance since the service
                    provider is situated in Spain. In the event of conflict
                    arising between the Spanish version of the Terms and
                    Conditions and its possible translations, the Spanish
                    version shall prevail.
                  </p>
                  <h2>17. Governing Law and Jurisdiction</h2>
                  <p>
                    This Legal Notice is governed in each and every one of its
                    ends by Spanish Law, including: the Law No. 34/2002 on
                    Information Society Services and Electronic Commerce, Law
                    No. 7/1998 on General Conditions of Contract, Law No.
                    26/1984 for the Protection of Consumers and Users, Act No.
                    7/1996 for Retail Trade, and any other laws are that may
                    apply.
                  </p>
                  <p>
                    In the event where any conflict or discrepancy in the
                    interpretation or application of these terms or notice
                    arises, the Courts and Tribunals that are familiar with the
                    case, if any, shall be those that will govern the
                    interpretation and enforcement of the terms of the contract
                    an governing jurisdiction. In the event that the user’s
                    situation is as a client, the agreement shall be governed by
                    and construed in accordance with the jurisdiction of their
                    corresponding home courts. If your situation is, instead, as
                    a legal person, apply the corresponding law of the
                    registered office of the provider, in the governing courts
                    that are familiar with the case, in the city of Barcelona.
                  </p>
                  <h2>18. Subject to other legal policies</h2>
                  <p>
                    These conditions are complemented by other legal policies
                    set out in our website, and in our Legal Notice, Privacy and
                    Cookie Policy and our Community Terms, in addition to any
                    other that is deemed added or complemented, following at all
                    times the provisions set forth by the law in force.
                  </p>
                </div>
              }
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Legal;
