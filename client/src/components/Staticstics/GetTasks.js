import React, { useEffect, useState } from "react";

import { getTask } from "api/queries/index";
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Text,
} from "@chakra-ui/react";
import Chart from "chart.js/auto";
import { Pie } from "react-chartjs-2";

const GetTasks = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getTask(true);
        setTasks(response.data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchData();
  }, []);

  const stylesOnCard = { width: "22rem", marginTop: "1rem" };
  const data = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3],
        backgroundColor: ["red", "blue", "yellow"],
        borderWidth: 1,
      },
    ],
  };
  return (
    <Card bg="gray.100">
      <CardHeader>
        {" "}
        <Heading>
          <Text fontSize="xl" fontWeight="bold" mb={2}>
            Tasks: {tasks ? tasks.length : 0}
          </Text>
        </Heading>
      </CardHeader>
      <CardBody>
        <Box className="card-body" style={stylesOnCard}>
          {tasks ? (
            <Pie
              data={{
                labels: ["In progress", "Done", "To Do"],
                datasets: [
                  {
                    data: [
                      tasks.filter((task) => task.status === 0).length,
                      tasks.filter((task) => task.status === 1).length,
                      tasks.filter((task) => task.status === 2).length,
                    ],
                    backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C"],
                    hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#FFC870"],
                  },
                ],
              }}
              options={{ responsive: true }}
            />
          ) : null}
        </Box>
      </CardBody>
    </Card>
  );
};

export default GetTasks;
