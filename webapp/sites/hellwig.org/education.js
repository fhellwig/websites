import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
  Text
} from 'grommet';

export function Education() {
  return (
    <Box>
      <Table>
        <TableHeader>
          <TableRow>
            <TableCell align="center" colSpan="2">
              <Text size="large">Education</Text>
            </TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>
              <strong>Johns Hopkins University</strong>
            </TableCell>
            <TableCell>Master of Science, Computer Science</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <strong>Northeastern University</strong>
            </TableCell>
            <TableCell>Bachelor of Science, Electrical Engineering</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Box>
  );
}
