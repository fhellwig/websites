import styled from 'styled-components';
import {
  Card,
  CardBody,
  CardHeader,
  Page,
  PageBreak,
  PageContent,
  PageHeader,
  PageItem
} from './layout.js';

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
    <Page>
      <PageHeader>Frank Hellwig &mdash; Solution Architect</PageHeader>
      <PageContent>
        <PageItem>
          <Card>
            <Table>
              <caption>Current Employment</caption>
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
          </Card>
        </PageItem>
        <PageItem>
          <Card>
            <Table>
              <caption>Education</caption>
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
          </Card>
        </PageItem>
        <Card>
          <CardHeader>Recent Highlights</CardHeader>
          <CardBody>
            <p style={{ maxWidth: '40em' }}>
              Over the past year, I have been the principal SA enabling our
              company to win over $1.6B TCV of single-award, prime contracts
              with U.S. Federal Departments and Agencies.
            </p>
          </CardBody>
        </Card>
        <PageBreak />
      </PageContent>
    </Page>
  );
}
