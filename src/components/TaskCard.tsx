import { Task } from "@/types/Task";
import { Button, Flex, Text } from "@chakra-ui/react";

interface TaskProps {
  task: Task;
  handleDeleteMission: (id: number) => void;
}

export function TaskCard({ task, handleDeleteMission }: TaskProps) {
  return (
    <Flex direction="column" bg="yellow">
      <Text>{task.title}</Text>
      <Text>
        {new Date(task.date).toLocaleString("pt-BR", {
          year: "numeric",
          month: "numeric",
          day: "numeric",
        })}
      </Text>
      <Text>{task.description}</Text>

      <Flex>
        <Button>Editar</Button>
        <Button onClick={() => handleDeleteMission(task.id)}>Deletar</Button>
      </Flex>
    </Flex>
  );
}
