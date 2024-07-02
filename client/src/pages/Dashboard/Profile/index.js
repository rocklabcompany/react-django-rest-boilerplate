import React, { useEffect, useState } from "react";

import UserProfile from "components/UserProfile";
import UserEditForm from "components/Forms/UserEditForm";
import { getBase64 } from "utils";

import { isAuth } from "../../../hoc/isAuth";

import { editProfile, getMe } from "api/queries/index";
import { Box, Flex, Stack } from "@chakra-ui/react";

const Profile = (props) => {
  const [avatar, setAvatar] = useState("");
  const [user, setUser] = useState(null);
  const [imageError, setImageError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getMe(localStorage.getItem("token"));
        setUser(response.data);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);

  const handleImageChange = (e) => {
    if (!e.target.files) {
      return;
    }
    let file = e.target.files[0];
    if (file.size <= 1048576) {
      getBase64(file)
        .then((image) => (file = image))
        .then(() => {
          setAvatar(file);
          setImageError(null);
        });
    } else {
      setImageError("Max size 1MB");
    }
  };

  const handleEditUser = (values, { setErrors }) => {
    try {
      editProfile({
        username: values.username,
        email: values.email,
        avatar: avatar,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Flex bg="gray.100" h="100vh" w="100vw">
      <Stack direction="row" w="100vw">
        <Box w="40%">
          <UserProfile profile={user} avatar={avatar} />
        </Box>
        <Box w="60%">
          <UserEditForm
            initialValues={user}
            handleEditUser={handleEditUser}
            handleImageChange={handleImageChange}
            error={imageError}
          />
        </Box>
      </Stack>
    </Flex>
  );
};

export default Profile;
