import axios from "axios";
import moment from "moment";
import * as API_URL from "../index.js";

const getHeaders = () => ({
  Authorization: `Token ${JSON.parse(localStorage.getItem("token"))?.token}`,
});
export const getMe = (token) => {
  try {
    const response = axios({
      method: "get",
      url: API_URL.TOKEN_URL,
      headers: getHeaders(),
    });
    return response ? response : null;
  } catch (error) {
    console.log(error);
  }
};

export const getUsers = () => {
  const response = axios({
    method: "get",
    url: API_URL.USERS,
    headers: getHeaders(),
  });
  return response;
};

export const getUser = (userId) => {
  const response = axios({
    method: "get",
    url: API_URL.USERS + userId + "/",
    headers: getHeaders(),
  });
  return response;
};

export const login = async (values) => {
  const response = await axios.post(API_URL.LOGIN, { ...values });
  return response;
};

export const logout = async () => {
  const response = await axios({
    method: "post",
    url: API_URL.LOG_OUT,
    headers: getHeaders(),
  });
  return response;
};

export const confirmEmail = async (values) => {
  const response = await axios({
    method: "post",
    url: API_URL.CONFIRM_EMAIL,
    data: { ...values },
  });
  return response;
};

export const resetPassword = async (uid, token, values) => {
  const response = await axios({
    method: "post",
    url: API_URL.RESET_PASSWORD + uid + "/" + token + "/",
    data: {
      uid: uid,
      token: token,
      new_password1: values.newPassword1,
      new_password2: values.newPassword2,
    },
  });
  return response;
};
export const signUp = async (values) => {
  return await axios.post(API_URL.REGISTER, { ...values });
};

export const editProfile = async (values) => {
  if (values.avatar) {
    const response = await axios({
      method: "put",
      url: API_URL.TOKEN_URL,
      headers: getHeaders(),
      data: {
        username: values.username,
        email: values.email,
        avatar: values.avatar,
        auth_token: JSON.parse(localStorage.getItem("token"))?.token,
      },
    });
    return response;
  } else {
    const response = await axios({
      method: "put",
      url: API_URL.TOKEN_URL,
      headers: getHeaders(),
      data: {
        username: values.username,
        email: values.email,
        auth_token: JSON.parse(localStorage.getItem("token"))?.token,
      },
    });
    return response;
  }
};

export const getTask = async (all = false, page = null) => {
  if (all === true) {
    const response = await axios({
      method: "get",
      url: API_URL.GET_ALL_TASKS,
      headers: getHeaders(),
    });
    return response;
  } else if (page !== null) {
    const response = await axios({
      method: "get",
      url: API_URL.PAGINATE_TASKS + page,
      headers: getHeaders(),
    });
    return response;
  } else {
    return;
  }
};

export const createTask = async (values) => {
  const response = await axios({
    method: "post",
    url: API_URL.CRUD_TASKS,
    headers: getHeaders(),
    data: {
      name: values.title,
      description: values.description,
      estimated_time: values.estimatedTime,
      status: values.statusSelect,
      due_date: moment(values.dueDate).format("YYYY-MM-DD"),
      assigned_to_user: values.assignedTo.value,
    },
  });
  return response;
};

export const updateTask = async (taskId, values) => {
  const response = await axios({
    method: "put",
    url: API_URL.CRUD_TASKS + taskId + "/",
    headers: getHeaders(),
    data: {
      name: values.title,
      description: values.description,
      estimated_time: values.estimatedTime,
      status: values.statusSelect,
      due_date: moment(values.dueDate).format("YYYY-MM-DD"),
      assigned_to_user: values.assignedTo.value || values.assignedTo.id,
    },
  });
  return response;
};

export const deleteTask = async (taskId) => {
  const response = await axios({
    method: "delete",
    url: API_URL.CRUD_TASKS + taskId + "/",
    headers: getHeaders(),
    data: {
      auth_token: JSON.parse(localStorage.getItem("token"))?.token,
    },
  });
  return response;
};

export const verifyToken = async () => {
  const response = await axios({
    method: "get",
    url: API_URL.VERIFY_TOKEN,
    headers: getHeaders(),
  });
  return response;
};
