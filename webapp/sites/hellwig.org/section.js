import styled from 'styled-components';
import { Card, CardBody, CardHeader } from './card.js';
import { InconvenientTruths } from './inconvenient-truths.js';

const Table = styled.table`
  caption {
    border-bottom: solid 1px;
    font-weight: 500;
    font-size: 1.1em;
    padding-bottom: 2px;
  }
  thead {
    th {
      text-align: left;
    }
  }
  tbody {
    th {
      font-weight: 500;
      text-align: left;
    }
    td,
    th {
      padding-right: 1em;
    }
  }
`;

const StyledSection = styled.section`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  ul {
    margin: 0;
    margin-block: 0;
    padding-left: 16px;
    li {
      padding-left: 8px;
    }
  }
  p {
    margin-top: 0;
    margin-bottom: 16px;
  }
`;

export function Section() {
  return (
    <StyledSection>
      <Card>
        <CardHeader>Current Employment</CardHeader>
        <CardBody>
          <Table>
            <tbody>
              <tr>
                <th>Company</th>
                <td>GovCIO</td>
              </tr>
              <tr>
                <th>Title</th>
                <td>Vice President</td>
              </tr>
              <tr>
                <th>Location</th>
                <td>Northern Virginia</td>
              </tr>
            </tbody>
          </Table>
        </CardBody>
      </Card>
      <Card>
        <CardHeader>Recent Highlights</CardHeader>
        <CardBody>
          <p>
            Over the past year, I have been the principal SA on bids totaling
            $1.6B TCV of single-award, prime contracts with U.S. Federal
            Departments and Agencies.
          </p>
        </CardBody>
      </Card>
      <Card>
        <CardHeader>Resume</CardHeader>
        <CardBody>
          <p style={{ textAlign: 'center' }}>
            <a href="./resume-frank-hellwig.pdf">Resume Download Link (PDF)</a>
          </p>
        </CardBody>
      </Card>
      <Card>
        <CardHeader>Education</CardHeader>
        <CardBody>
          <Table>
            <thead>
              <tr>
                <th>School</th>
                <th>Degree</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Johns Hopkins University</td>
                <td>Master of Science in Computer Science</td>
              </tr>
              <tr>
                <td>Northeastern University</td>
                <td>Bachelor of Science in Electrical Engineering</td>
              </tr>
            </tbody>
          </Table>
        </CardBody>
      </Card>
      <Card>
        <CardHeader>Career Summary</CardHeader>
        <CardBody>
          <div>
            <ul>
              <li>
                Over ten years experience of deep technical proposal experience
                with measurable wins of large (&gt; $500M) contracts.
              </li>
              <li>
                Started and grew a technical consulting company supporting CBP,
                IRS, and Northrop Grumman
              </li>
              <li>
                Architect for the U-2R reconnaissance mission planning system
              </li>
              <li>
                Supported the U.S. Intelligence Communities for almost 20 years
              </li>
              <li>
                U.S. Army Captain supporting the Strategic Defense Initiative
              </li>
            </ul>
          </div>
        </CardBody>
      </Card>

      <Card>
        <CardHeader>Publications</CardHeader>
        <CardBody>
          <ul>
            <li>
              <a href="./cloud-migrations-lessons-learned.pdf">
                Cloud Migrations - Lessons Learned (ACT-IAC White Paper 2018)
              </a>
            </li>
            <li>
              <a href="./security-considerations-for-dod-cloud-migrations.pdf">
                Security Considerations for DoD Cloud Migrations (Buchanan &
                Edwards White Paper 2017)
              </a>
            </li>
            <li>
              <a href="./5-reasons-to-move-your-line-of-business-applications-to-the-cloud.pdf">
                5 Reasons to Move Your Line-of-Business Applications to The
                Cloud (LinkedIn Article 2016)
              </a>
            </li>
            <li>
              <a href="./implementing-associations.pdf">
                Implementing Associations (Dr. Dobb's Journal Article 1998)
              </a>
            </li>
            <li>
              <a href="./a-secure-sds-software-library.pdf">
                A Secure SDS Software Library (Eleventh National Computer
                Security Conference Paper 1988)
              </a>
            </li>
          </ul>
        </CardBody>
      </Card>
      <Card>
        <CardHeader>Personal Information</CardHeader>
        <CardBody>
          <p>
            I am a commercial, instrument-rated pilot with over 1,500 hours. I
            own a Cirrus SR20 that I keep at KHEF. In my spare time, I enjoy
            flying with my wonderful wife, riding my motorcycle, and building
            various AR-platform rifles.
          </p>
        </CardBody>
      </Card>
      {false && <InconvenientTruths />}
    </StyledSection>
  );
}
