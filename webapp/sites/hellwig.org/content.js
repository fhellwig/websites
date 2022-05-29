import { Box } from 'grommet';
import styled from 'styled-components';
import { Card, CardBody, CardHeader } from './card.js';
import { PageHeader } from './page-header.js';

const Table = styled.table`
  caption {
    border-bottom: solid 1px;
    font-weight: 500;
    font-size: 1.1em;
    padding-bottom: 2px;
  }
  thead {
    th {
      text-align: center;
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

export function Content() {
  return (
    <Box fill background="url(background.jpg)" direction="column">
      <PageHeader />
      {true && (
        <Box
          xxfill
          wrap
          direction="row"
          overflow={{ vertical: 'scroll', horizontal: 'hidden' }}
          justify="center"
        >
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
              <p style={{ maxWidth: '20em' }}>
                Over the past year, I have been the principal SA on bids
                totalling $1.6B TCV of single-award, prime contracts with U.S.
                Federal Departments and Agencies.
              </p>
            </CardBody>
          </Card>
          <Card style={{ maxWidth: '40em' }}>
            <CardHeader>Resume</CardHeader>
            <CardBody>
              <p>
                <a href="https://drive.google.com/file/d/1XPq5G1JxwfKMX-khcnqecxAwraSyWc1u/view?usp=sharing">
                  Resume Download Link (PDF)
                </a>
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
              <div style={{ maxWidth: '35em' }}>
                <ul>
                  <li>
                    U.S. Army Captain supporting the Strategic Defense
                    Initiative
                  </li>
                  <li>
                    Supported the U.S. Intelligence Communities for almost 20
                    years
                  </li>
                  <li>
                    Architect for the U-2R reconnaissance mission planning
                    system
                  </li>
                  <li>
                    Started and grew a technical consulting company supporting
                    CBP, IRS, and Northrop Grumman
                  </li>
                  <li>
                    Over ten years experience of deep technical proposal
                    experience with measurable wins of large (&gt; $500M)
                    contracts.
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
                  <a href="https://drive.google.com/file/d/1mL8gpxbt-eY8Y7kabwLift4XDWHY6KeE/view?usp=sharing">
                    Cloud Migrations - Lessons Learned (ACT-IAC White Paper
                    2018)
                  </a>
                </li>
                <li>
                  <a href="https://drive.google.com/file/d/1QQV-4GdA8Gh3bSUjzUovxP_y6s4KRUq-/view?usp=sharing">
                    Security Considerations for DoD Cloud Migrations (Buchanan &
                    Edwards White Paper 2017)
                  </a>
                </li>
                <li>
                  <a href="https://drive.google.com/file/d/1SQ7-uJyprk_gv35gEolydty_HfUrtCYt/view?usp=sharing">
                    5 Reasons to Move Your Line-of-Business Applications to The
                    Cloud (LinkedIn Article 2016)
                  </a>
                </li>
                <li>
                  <a href="https://drive.google.com/file/d/1uY2Vq2CBaIREacV-mglbO9Mpt-xek8qM/view?usp=sharing">
                    Implementing Associations (Dr. Dobb's Journal Article 1998)
                  </a>
                </li>
                <li>
                  <a href="https://drive.google.com/file/d/1vPommXKyYReyLDbKFJYuitbw6VnPBEJZ/view?usp=sharing">
                    A Secure SDS Software Library (Eleventh National Computer
                    Security Conference Paper 1988)
                  </a>
                </li>
              </ul>
            </CardBody>
          </Card>
          <Card style={{ maxWidth: '40em' }}>
            <CardHeader>Personal Information</CardHeader>
            <CardBody>
              <p>
                I am a commercial, instrument-rated pilot with over 1,500 hours.
                I own a Cirrus SR20 that I keep at KHEF. In my spare time, I
                enjoy flying with my wonderful wife, riding my motorcycle, and
                building various AR-platform rifles.
              </p>
            </CardBody>
          </Card>
        </Box>
      )}
    </Box>
  );
}
