import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getCurrentDate } from "../../../utils";
import TableHeader from "../../../components/Tasks/TaskTable/TableHeader";
import TaskTable from "../../../components/Tasks/TaskTable";
import Modals from "../../../components/Tasks/Modals";

import swal from "sweetalert";

import { setTask } from "actions/index";
import { PAGINATION } from "constants/index";
import { isAuth } from "hoc/isAuth";
import {
  getUsers,
  getTask,
  createTask,
  deleteTask,
  updateTask,
} from "api/queries";
import { Box } from "@chakra-ui/react";
const Tasks = ({ dispatch, tasks }) => {
  const [modalDelete, setModalDelete] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [modalCreate, setModalCreate] = useState(false);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const [date, setDate] = useState("");
  const [user, setUser] = useState([]);
  const [task, setTaskData] = useState({
    name: "",
    description: "",
    status: "",
    dueDate: "",
    estimatedTime: "",
    assignedTo: "",
  });
  const [id, setId] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getTask(false, 1);
        dispatch(setTask(response.data.results));
        setPages(Math.ceil(response.data.count / PAGINATION));
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();

    getUsers()
      .then((response) => {
        setUser(
          response.data.map((user) => ({ id: user.id, email: user.email })),
        );
      })
      .catch((error) => console.log(error));
  }, [dispatch]);

  const handleSwitchModal = (type, task) => {
    setTaskData(task);
    setId(task.id);
    switch (type) {
      case "modalDelete":
        setModalDelete(!modalDelete);
        return;
      case "modalEdit":
        setModalEdit(!modalEdit);
        return;
      case "modalCreate":
        setModalCreate(!modalCreate);
        return;
      default:
        break;
    }
  };

  const handleActiveModal = (type) => {
    switch (type) {
      case "modalDelete":
        setModalDelete(!modalDelete);
        break;
      case "modalEdit":
        setModalEdit(!modalEdit);
        break;
      case "modalCreate":
        setModalCreate(!modalCreate);
        break;
      default:
        break;
    }
  };

  const handleDateChange = (date) => {
    setDate(getCurrentDate(date));
  };
  const handleCreateTask = async (values, { setErrors }) => {
    try {
      const response = await createTask({ ...values });
      if (response.status === 201) {
        const tasksResponse = await getTask(false, page);
        dispatch(setTask(tasksResponse.data.results));
        setPages(Math.ceil(tasksResponse.data.count / PAGINATION));
      }
    } catch (error) {
      console.log(error);
    }
    setModalCreate(false);
  };

  const handleUpdateTask = async (values, { setErrors }) => {
    try {
      const response = await updateTask(id, { ...values });
      if (response.status === 200) {
        const tasksResponse = await getTask(false, page);
        dispatch(setTask(tasksResponse.data.results));
      }
    } catch (error) {
      console.log(error);
    }
    setModalEdit(false);
  };

  const handleDeleteTask = async ({ setErrors }) => {
    try {
      const response = await deleteTask(id);
      if (response.status === 204) {
        let newPage = page;
        if (tasks.data.length > 1) {
          const tasksResponse = await getTask(false, newPage);
          dispatch(setTask(tasksResponse.data.results));
          setPages(Math.ceil(tasksResponse.data.count / PAGINATION));
        } else {
          newPage -= 1;
          if (newPage === 0) {
            newPage = 1;
          }
          const tasksResponse = await getTask(false, newPage);
          dispatch(setTask(tasksResponse.data.results));
          setPages(Math.ceil(tasksResponse.data.count / PAGINATION));
          setPage(newPage);
        }
      }
    } catch (error) {
      console.log(error);
    }
    setModalDelete(false);
  };

  const fetchData = (item) => {
    let newPage = page;
    if (item === "prev") {
      newPage -= 1;
    } else {
      newPage += 1;
    }
    setPage(newPage);
    getTask(false, newPage)
      .then((response) => {
        dispatch(setTask(response.data.results));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Box bg="gray.100">
      <TableHeader
        title="Task list"
        modalCreate={() => handleActiveModal("modalCreate")}
      />
      <TaskTable
        tasks={tasks.data}
        fetchData={fetchData}
        page={page}
        pages={pages}
        modal={handleSwitchModal}
      />
      <Modals
        modalCreate={modalCreate}
        modalEdit={modalEdit}
        modalDelete={modalDelete}
        handleActiveModal={handleActiveModal}
        handleCreateTask={handleCreateTask}
        handleUpdateTask={handleUpdateTask}
        handleDateChange={handleDateChange}
        deleteTask={handleDeleteTask}
        task={task}
        user={user}
        id={id}
      />
    </Box>
  );
};
function mapStateToProps(state) {
  return {
    tasks: state.tasks,
  };
}
export default connect(mapStateToProps)(isAuth(Tasks));
