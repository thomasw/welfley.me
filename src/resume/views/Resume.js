// @flow
import React from 'react';
import { Helmet } from 'react-helmet-async';
import {
  faBriefcase,
  faGraduationCap,
  faArrowCircleRight
} from '@fortawesome/free-solid-svg-icons';

import {
  LimitWidthNarrow,
  Columns,
  FlexColumns
} from 'theme/components/layout';
import Footer from 'theme/components/Footer';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ContactInfo from '../components/ContactInfo';
import ResumeNav from '../components/ResumeNav';
import Lolipop from '../components/Lolipop';
import styles from './Resume.module.scss';

export default function Home() {
  return (
    <div>
      <Helmet>
        <title>Thomas Welfley: Resume</title>
        <meta
          name="description"
          content="Thomas Welfley builds amazing engineering organizations and software. From Python and JS microservices to SPAs and React Native mobile apps, I have extensive experience shipping software across all parts of the stack. Further, I can define and implement the hiring and management strategies required to scale. From inception to production, either as part of a team or independently, I make software happen. Just say the word and let's start building."
        />
        <meta
          name="keywords"
          content="engineer, software engineer, python developer, developer, web developer, engineering manager, vice president, CTO, director, San Francisco, California, Welfley, Thomas, portfolio, resume"
        />
      </Helmet>
      <ResumeNav />
      <div className={styles.resume}>
        <header>
          <LimitWidthNarrow>
            <FlexColumns>
              <div>
                <h1>Thomas welfley</h1>
                <h2>Engineering Manager</h2>
              </div>
              <ContactInfo />
            </FlexColumns>
          </LimitWidthNarrow>
        </header>
        <main>
          <section>
            <LimitWidthNarrow>
              <p>
                I build amazing <strong>engineering organizations</strong> and{' '}
                <strong>software</strong>. From <strong>Python</strong> and{' '}
                <strong>JS</strong> microservices to <strong>SPAs</strong> and{' '}
                <strong>React Native</strong> mobile apps, I have extensive
                experience shipping software across all parts of the stack.
                Further, I can define and implement the{' '}
                <strong>hiring and management strategies</strong> required to{' '}
                <strong>scale</strong>. From inception to production, either as
                part of a team or independently, I make software happen. Just
                say the word and <strong>let's start building</strong>.
              </p>
            </LimitWidthNarrow>
          </section>
          <section>
            <Lolipop icon={faBriefcase}>
              <FlexColumns>
                <div className={styles.timeRange}>
                  09.2016
                  <br />
                  Present
                </div>
                <div>
                  <h1>HipHipGo</h1>
                  <h2>Founder</h2>
                  <p>
                    Designed and built a product that forecasts user weight
                    change based on activity levels and spending patterns.
                    Shipped React Native <strong>mobile apps</strong> for{' '}
                    <strong>iOS</strong> and <strong>Android</strong> that alert
                    users when they visit places correlated with negative health
                    outcomes. Built systems to geolocate credit card
                    transactions based on profile and mobile device location
                    cues. Built systems to health score businesses based on
                    aggregate visitor data.
                  </p>
                </div>
              </FlexColumns>
              <FlexColumns>
                <div className={styles.timeRange}>
                  10.2011
                  <br />
                  09.2016
                </div>
                <div>
                  <h1>Yola, Inc.</h1>
                  <h2>VP of Engineering</h2>
                  <p>
                    Reorganized a <strong>global engineering team</strong>{' '}
                    supporting over 13 million users; enabled onboarding 40
                    additional engineers. Transitioned company from hiring full
                    stack engineers to specialists; established team-directed
                    interview processes. Designed and executed transition from
                    monolithic to <strong>microservice architecture</strong>,
                    from 13 deployed frontends and services to 62. Executed{' '}
                    <strong>microfrontend</strong> strategy for shipping UIs
                    with independent stacks. Architected and led the execution
                    of new partner <strong>APIs</strong> securing a strategic
                    partnership with Plesk and additional venture capital.
                  </p>
                  <h2>Director of Engineering</h2>
                  <p>
                    Decreased time to first release for new engineers from 3
                    months to 1 day. Executed transition from a copypasta
                    standard library to over 100 well tested,{' '}
                    <strong>single purpose installables</strong>. Organized and
                    led a project to make 9 million customer websites{' '}
                    <strong>responsive</strong> by default. Rebuilt UIs and
                    purchase flows to support 8 currencies and 18 languages,
                    securing strategic, multinational partnerships with Google.
                    Designed and secured the adoption of an organization-wide{' '}
                    <strong>code review</strong> process, ensuring the quality
                    of 6,000 pull requests per year.
                  </p>
                </div>
              </FlexColumns>
              <FlexColumns>
                <div className={styles.timeRange}>
                  09.2009
                  <br />
                  10.2011
                </div>
                <div>
                  <h1>Match Strike LLC</h1>
                  <h2>Cofounder, CTO</h2>
                  <p>
                    Designed and implemented new products; scaled{' '}
                    <strong>real-time web apps</strong> for educators to 10,000
                    online courses. Secured opportunity to pitch product to a
                    prominent seed capital firm. Worked extensively with
                    Facebook and Twitter APIs; shipped first open source Twitter
                    Streams API client for <strong>Python</strong>. Shipped
                    software for clients with hundreds of thousands of users.
                  </p>
                </div>
              </FlexColumns>
              <p className={styles.moreLink}>
                  Full History via LinkedIn
                  <FontAwesomeIcon icon={faArrowCircleRight} fixedWidth />
                </a>
              </p>
            </Lolipop>
          </section>
          <section>
            <Lolipop icon={faGraduationCap}>
              <FlexColumns>
                <div className={styles.timeRange}>
                  08.2002
                  <br />
                  12.2006
                </div>
                <div>
                  <h1>Bachelor of Science in Computer Science</h1>
                  <h3>University of Central Florida</h3>
                  <Columns className={styles.subColumns}>
                    <p>Founding member of UCF Student IT Advisory Council</p>
                    <p>
                      3x AASCU presenter for leadership of colleges and
                      universities
                    </p>
                  </Columns>
                </div>
              </FlexColumns>
            </Lolipop>
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
}
