import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
  Text
} from 'grommet';

export function Employment() {
  return (
    <Box>
      <Table size="small">
        <TableHeader>
          <TableRow>
            <TableCell align="center" colSpan="2">
              <Text size="large">Current Employment</Text>
            </TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>
              <strong>Employer</strong>
            </TableCell>
            <TableCell>GovCIO</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <strong>Title</strong>
            </TableCell>
            <TableCell>Vice President</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <strong>Location</strong>
            </TableCell>
            <TableCell>Northern Virginia</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Box>
  );
}
