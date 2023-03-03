import { filter } from 'lodash';
import { sentenceCase } from 'change-case';
import { useEffect, useState } from 'react';
// @mui
import {
  Card,
  Table,
  Stack,
  Paper,
  Avatar,
  Button,
  Popover,
  Checkbox,
  TableRow,
  MenuItem,
  TableBody,
  TableCell,
  Container,
  Typography,
  IconButton,
  TableContainer,
  TablePagination,
} from '@mui/material';
// components
import Label from '../../components/label';
import Iconify from '../../components/iconify';
import Loading from '../../components/Loading/Loading';
import DeleteModal from '../../components/dashboard/students/Deletemodal';
import EditModal from '../../components/dashboard/students/Editmodal';
// sections
import { UserListHead, UserListToolbar } from '../../components/dashboard/students';

import {AXIOS} from '../../config/axios.config';
// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: 'name', label: 'Name', alignRight: false },
  { id: 'status', label: 'Status', alignRight: false },
  { id: '' },
];

// ----------------------------------------------------------------------


function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function applySortFilter(array, comparator, query) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  if (query) {
    return filter(array, (_user) => _user.fullName.toLowerCase().indexOf(query.toLowerCase()) !== -1);
  }
  return stabilizedThis.map((el) => el[0]);
}

export default function StudentPage() {
  const [studentData, setSudentData] = useState({});

  const [DeleteModalIsOpen, setDeleteModalIsOpen] = useState(false);


  const [EditModalIsOpen, setEditModalIsOpen] = useState(false);

  const [loading, setLoading] = useState(false);

  const [page, setPage] = useState(0);

  const [order, setOrder] = useState('asc');

  const [selected, setSelected] = useState([]);

  const [orderBy, setOrderBy] = useState('name');

  const [filterName, setFilterName] = useState('');

  const [rowsPerPage, setRowsPerPage] = useState(5);

  const [students, setStudents] = useState([]);

  


  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = students.map((n) => n.fullName);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setPage(0);
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  const handleFilterByName = (event) => {
    setPage(0);
    setFilterName(event.target.value);
  };

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - students.length) : 0;

  const filteredUsers = applySortFilter(students, getComparator(order, orderBy), filterName);

  const isNotFound = !filteredUsers.length && !!filterName;

  const config = {
    headers:{
        "x-auth-token": localStorage.getItem('token'),
    }
  };
  
  const fetchStudents  = async () => {
    const res = await AXIOS.get('/api/student/getall', config);
    setStudents(res.data.result);
    setLoading(false);
    } 

  const deleteStudent = (id, setDeletingState) => {
    AXIOS.delete(`/api/student/${id}`, config).then(() => {
      fetchStudents();
      setDeletingState(false);
      setDeleteModalIsOpen(false);
    });
  }

  const updateStudent = (data, setEditingState) => {
    console.log('update is running');
    let id = data.id;
    delete data.id;
    console.log('data', data);
        AXIOS.put(`/api/student/${id}`, data, config).then(() => {
          console.log('doneeE');
          fetchStudents();
          setEditingState(false);
          setEditModalIsOpen(false);
        }).catch(err => {console.log('err: ', err);})
  }

  
  useEffect(()=>{
    setLoading(true);
    fetchStudents();
  }, [])

  return (
    <>
      {!loading && (
        <Container>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            mb={5}
          ></Stack>

          <Card>
            <Typography variant="h4" gutterBottom>
              User
            </Typography>
            <UserListToolbar
              numSelected={selected.length}
              filterName={filterName}
              onFilterName={handleFilterByName}
            />

            <TableContainer sx={{ minWidth: 900 }}>
              <Table>
                <UserListHead
                  order={order}
                  orderBy={orderBy}
                  headLabel={TABLE_HEAD}
                  rowCount={students.length}
                  numSelected={selected.length}
                  onRequestSort={handleRequestSort}
                  onSelectAllClick={handleSelectAllClick}
                />
                <TableBody>
                  {students
                    ?.slice(
                      page * rowsPerPage,
                      page * rowsPerPage + rowsPerPage
                    )
                    .map((row) => {
                      const { _id, fullName, isActive, profile, email, phoneNumber, birthDate, nationalId } = row;
                      const selectedUser = selected.indexOf(fullName) !== -1;
                      return (
                        <TableRow
                          hover
                          key={_id}
                          tabIndex={-1}
                          role="checkbox"
                          selected={selectedUser}
                        >
                          <TableCell component="th" scope="row" padding="none">
                            <Stack
                              direction="row"
                              alignItems="center"
                              spacing={2}
                            >
                              <Avatar
                                alt={fullName}
                                src={
                                  profile !== ""
                                    ? profile
                                    : "https://www.shutterstock.com/image-vector/default-avatar-profile-vector-user-260nw-1705357234.jpg"
                                }
                              />
                              <Typography variant="subtitle2" noWrap>
                                {fullName}
                              </Typography>
                            </Stack>
                          </TableCell>

                          <TableCell align="left">
                            <Label color={isActive ? "primary" : "error"}>
                              {isActive ? "Active" : "deactive"}
                            </Label>
                          </TableCell>
                          <TableCell>
                            <MenuItem
                              sx={{ color: "error.main" }}
                              onClick={() => {setDeleteModalIsOpen(true); setSudentData({_id, fullName, email});}}
                            >
                              <Iconify
                                icon={"eva:trash-2-outline"}
                                sx={{ mr: 2 }}
                              />
                              Delete
                            </MenuItem>
                          </TableCell>
                          <TableCell>
                            <MenuItem onClick={() => {setEditModalIsOpen(true); setSudentData({_id, fullName, email, phoneNumber, birthDate, nationalId });}}>
                              <Iconify icon={"eva:edit-fill"} sx={{ mr: 2 }} />
                              Edit
                            </MenuItem>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  {emptyRows > 0 && (
                    <TableRow style={{ height: 53 * emptyRows }}>
                      <TableCell colSpan={6} />
                    </TableRow>
                  )}
                </TableBody>

                {isNotFound && (
                  <TableBody>
                    <TableRow>
                      <TableCell align="center" colSpan={6} sx={{ py: 3 }}>
                        <Paper
                          sx={{
                            textAlign: "center",
                          }}
                        >
                          <Typography variant="h6" paragraph>
                            Not found
                          </Typography>

                          <Typography variant="body2">
                            No results found for &nbsp;
                            <strong>&quot;{filterName}&quot;</strong>.
                            <br /> Try checking for typos or using complete
                            words.
                          </Typography>
                        </Paper>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                )}
              </Table>
            </TableContainer>

            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={students.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Card>
        </Container>
      )}
      {loading && (
        <div className="flex h-[500px] w-[500px] justify-center items-center">
          <Loading />
        </div>
      )}
      {DeleteModalIsOpen && (
        <DeleteModal
          data={studentData}
          isOpen={DeleteModalIsOpen}
          handleClose={() => setDeleteModalIsOpen(false)}
          handleDelete = {deleteStudent}
        />
      )}
      {EditModalIsOpen && (
        <EditModal
          data={studentData}
          isOpen={EditModalIsOpen}
          handleClose={() => setEditModalIsOpen(false)}
          handleEdit = {updateStudent}
        />
      )}
    </>
  );
}
