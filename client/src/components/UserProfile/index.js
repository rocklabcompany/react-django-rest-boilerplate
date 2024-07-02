import React from "react";
import profileImg from "../../assets/profile-icon-png-898.png";
import {
  Box,
  Center,
  Divider,
  Text,
  Heading,
  VStack,
  Image,
} from "@chakra-ui/react";
const UserInfo = ({ profile, avatar }) => {
  return (
    <Box>
      <Center mt={4}>
        {avatar && avatar.length > 0 ? (
          <Image
            borderRadius="full"
            boxSize="150px"
            src={avatar}
            alt="avatar"
          />
        ) : profile && profile.avatar ? (
          <Image
            borderRadius="full"
            boxSize="150px"
            src={profile.avatar}
            alt="avatar"
          />
        ) : (
          <Image
            borderRadius="full"
            boxSize="150px"
            src={profileImg}
            alt="avatar"
          />
        )}
      </Center>
      <VStack spacing={4} mt={4} textAlign="center">
        <Heading size="md">{profile ? profile.username : "Username"}</Heading>
        <Divider />
        <Box>
          <Text fontSize="sm" color="gray.500">
            Email address
          </Text>
          <Text fontSize="md">{profile ? profile.email : "Email"}</Text>
        </Box>
      </VStack>
    </Box>
  );
};

export default UserInfo;
