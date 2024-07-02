import React, { useEffect, useState } from "react";

import { getUsers } from "api/queries/index";
import { Box, Heading, Text } from "@chakra-ui/react";

const GetUsers = () => {
  const [userCount, setUserCount] = useState(0);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const users = await getUsers();
        setUserCount(users.data ? users.data.length : 0);
      } catch (error) {
        console.log("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <Box bg="gray.100" p={4} borderRadius="md" shadow="md">
      <Heading>
        <Text fontSize="xl" fontWeight="bold" mb={2}>
          Users: {userCount}
        </Text>
      </Heading>
    </Box>
  );
};

export default GetUsers;
