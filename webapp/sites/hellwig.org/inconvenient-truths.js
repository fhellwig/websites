import { Card, CardBody, CardHeader } from './card.js';

export function InconvenientTruths() {
  return (
    <Card>
      <CardHeader>Inconvenient Truths</CardHeader>
      <CardBody>
        <ul>
          <li>
            <a href="https://ucr.fbi.gov/crime-in-the-u.s/2019/crime-in-the-u.s.-2019/tables/expanded-homicide-data-table-8.xls">
              Inconvenient Truth #1
            </a>
          </li>
          <li>
            <a href="https://ucr.fbi.gov/crime-in-the-u.s/2018/crime-in-the-u.s.-2018/tables/expanded-homicide-data-table-6.xls">
              Inconvenient Truth #2
            </a>
          </li>
          <li>
            <a href="https://www.eia.gov/energyexplained/us-energy-facts/imports-and-exports.php">
              Inconvenient Truth #3
            </a>
          </li>
          <li>
            <a href="https://www.pewresearch.org/fact-tank/2021/11/09/whats-happening-at-the-u-s-mexico-border-in-7-charts/ft_21-11-01_mexicoborder_1a/">
              Inconvenient Truth #4
            </a>
          </li>
          <li>
            <a href="./bill-of-rights.png">Inconvenient Truth #5</a>
          </li>
        </ul>
      </CardBody>
    </Card>
  );
}
