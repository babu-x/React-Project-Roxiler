// import Pagination from "react-bootstrap/Pagination";
import {
  TodoContainer,
  ButtonTCell,
  HeaderContainer,
  Input,
  Heading,
  TableContainer,
  InputContainer,
  AppContainer,
  // PagenationConatiner,
} from "./styledComponents";

import UserDetails from "../UserDeatils";
import Error from "../Error";
import { BiSearch } from "react-icons/bi";

import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";

import { styled } from "@mui/material/styles";

import { useEffect, useState } from "react";

const StyledTable = styled(Table)`
  width: 600px;
`;

const TCell = styled(TableCell)`
  font-size: 17px;
  font-weight: 600;
  color: #262727;
  font-family: "roboto";
`;

const DetailsTCell = styled(TableCell)`
  font-size: 16px;
  font-weight: 500;
  color: #262727;
  font-family: "roboto";
`;

const Todos = () => {
  const [todoData, setTodoData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [userData, setUserData] = useState([]);
  const [isActionButtonClicked, setIsActionButtonClicked] = useState(false);
  const [error, setError] = useState(false);
  // const [activePage, setActivePage] = useState(1);
  // const itemsPerPage = 10;

  const filterTodoData = (event) => {
    const userSearchedValue = event.target.value;
    const filterTodos = todoData.filter((eachTodo) =>
      eachTodo.title.toLowerCase().includes(userSearchedValue.toLowerCase())
    );
    setFilteredData(filterTodos);
  };

  // const startIndex = (activePage - 1) * itemsPerPage;
  // const endIndex = startIndex + itemsPerPage;
  // console.log(startIndex, endIndex);
  // const currentItems = filteredData.slice(startIndex, endIndex);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      if (response.ok) {
        const data = await response.json();
        setTodoData(data);
        setFilteredData(data);
      } else {
        console.log(`Error on fetching Todo data`);
      }
    };
    getData();
  }, []);

  const getUserDetails = async (id, title, userId) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    if (response.ok) {
      setIsActionButtonClicked(true);
      setError(false);
      const userDetails = await response.json();
      const updatedUserDetails = { ...userDetails, title, userId };
      console.log(updatedUserDetails);

      setUserData(updatedUserDetails);
    } else {
      console.log(`Error on fetching user data`);
      setError(true);
      setIsActionButtonClicked(false);
    }
  };

  // const handlePageChange = (pageNumber) => {
  //   setActivePage(pageNumber);
  // };

  // const getPaginationItems = () => {
  //   const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  //   const paginationItems = [];
  //   for (let number = 1; number <= totalPages; number++) {
  //     paginationItems.push(
  //       <Pagination.Item
  //         key={number}
  //         active={number === activePage}
  //         onClick={() => handlePageChange(number)}
  //       >
  //         {number}
  //       </Pagination.Item>
  //     );
  //   }
  //   return paginationItems;
  // };

  return (
    <>
      <AppContainer>
        <TodoContainer>
          <HeaderContainer>
            <Heading>Todos</Heading>
            <InputContainer>
              <BiSearch
                style={{ width: "23px", height: "23px", marginLeft: "8px" }}
              />
              <Input
                type="text"
                placeholder="Search..."
                onChange={(event) => {
                  filterTodoData(event);
                }}
              ></Input>
            </InputContainer>
          </HeaderContainer>

          <TableContainer>
            <StyledTable>
              <TableHead>
                <TableRow>
                  <TCell>Todo ID</TCell>
                  <TCell>Title</TCell>
                  <TCell>Status</TCell>
                  <TCell>Action</TCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredData.map((eachTodo) => (
                  <TableRow key={eachTodo.id}>
                    <DetailsTCell>{eachTodo.id}</DetailsTCell>
                    <DetailsTCell>{eachTodo.title}</DetailsTCell>
                    <DetailsTCell>
                      {eachTodo.completed ? "Completed" : "Incomplete"}
                    </DetailsTCell>
                    <DetailsTCell>
                      <ButtonTCell
                        onClick={() => {
                          getUserDetails(
                            eachTodo.id,
                            eachTodo.title,
                            eachTodo.userId
                          );
                        }}
                      >
                        View User
                      </ButtonTCell>
                    </DetailsTCell>
                  </TableRow>
                ))}
              </TableBody>
            </StyledTable>
          </TableContainer>
        </TodoContainer>
        {isActionButtonClicked && <UserDetails userDetails={userData} />}
        {error && <Error />}
      </AppContainer>
      {/* <PagenationConatiner>
        <Pagination>{getPaginationItems()}</Pagination>
      </PagenationConatiner> */}
    </>
  );
};

export default Todos;
