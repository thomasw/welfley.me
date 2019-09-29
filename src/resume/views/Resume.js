// @flow
import React from 'react';
import { Helmet } from 'react-helmet-async';
import {
  faBriefcase,
  faGraduationCap
} from '@fortawesome/free-solid-svg-icons';

import {
  LimitWidthNarrow,
  Columns,
  FlexColumns
} from 'theme/components/layout';
import Footer from 'theme/components/Footer';

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
          content="Thomas Welfley builds engineering organizations and amazing software. From Python and JS microservices to SPAs and React Native mobile apps, I have extensive experience shipping software across all parts of the stack. Further, I can define and implement the hiring and management strategies required to scale. From inception to production, either as part of a team or independently, I make software happen. Just say the word and let's start building."
        />
        <meta
          name="keywords"
          content="resume, engineer, software engineer, python developer, developer, web developer, engineering manager, San Francisco, California, Welfley, Thomas, portfolio, resume"
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
                I build <strong>engineering organizations</strong> and amazing{' '}
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
                    Built and shipped a <strong>mobile app</strong> that alerts
                    people when they stop at places that impact their health and
                    that forecasts weight change based on activity and spending
                    patterns. Built systems to geolocate credit card
                    transactions based on profile and mobile device location
                    cues, health score businesses based on aggregate visitor
                    data, and <strong>React Native</strong> apps for{' '}
                    <strong>iOS</strong> and <strong>Android</strong>.
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
                    Reorganized <strong>global engineering team</strong>{' '}
                    supporting over 12 million users; enabled onboarding 40
                    additional engineers. Transitioned company from hiring
                    full-stack engineers to specialists; established
                    team-directed interview processes. Designed and executed
                    transition from monolithic architecture to{' '}
                    <strong>microservice architecture</strong>; from 13 deployed
                    frontends and services to 62. Executed{' '}
                    <strong>micro-frontend</strong> strategy for shipping UIs
                    with independent stacks. Architected and led the execution
                    of new partner <strong>APIs</strong>; secured strategic
                    partnership with Plesk and additional venture capital.
                  </p>
                  <h2>Director of Engineering</h2>
                  <p>
                    Decreased time to first release for new engineers from 3
                    months to 1 day. Executed transition from copypasta standard
                    library to over 100 well tested,{' '}
                    <strong>single purpose installables</strong>. Organized and
                    led a project to make millions of customer websites{' '}
                    <strong>responsive</strong> by default. Rebuilt UIs and
                    purchase flows to support 8 currencies and 18 languages,
                    securing strategic, multinational partnerships with Google.
                    Designed and secured the adoption of an organization-wide{' '}
                    <strong>code review</strong> process, managing the review of
                    6,000 pull requests per year.
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
                    <p>Founding member of UCF Student IT Advisory Council.</p>
                    <p>
                      3x AASCU presenter for leadership of colleges and
                      universities.
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
