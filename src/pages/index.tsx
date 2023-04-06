import { TaskCard } from "@/components/TaskCard";
import { Task } from "@/types/Task";
import { Button, Flex, Image, Input, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";

export default function Home() {
  const [description, setDescription] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleInputTitle(text: string) {
    setTitle(text);
  }

  function handleDescription(text: string) {
    setDescription(text);
  }

  function handledate(date: string) {
    setDate(date);
  }

  function handleAddMission() {
    const newTask: Task = {
      id: tasks.length + 1,
      title,
      done: false,
      description,
      date,
    };

    setTasks([...tasks, newTask]); //ESOTU ADICIONANDO NOVOS VALORES NO ARRAY

    setTitle("");
    setDescription("");
    setDate("");
  }

  function handleDeleteMission(id: number) {
    const filteredTasks = tasks.filter((task) => {
      if (id !== task.id) {
        return task;
      }
    });
    setTasks(filteredTasks);
  }

  return (
    <Flex w="100%" justifyContent="center">
      <Flex
        justifyContent="center"
        alignItems="center"
        w="60%"
        direction="column"
      >
        <Image src="img-claro.png" alt="Foto da CT" />

        <Input
          placeholder="Digite a proxima missão"
          onChange={(e) => handleInputTitle(e.target.value)}
          value={title}
        />

        <Input
          type="datetime-local"
          placeholder="Qual a data da missão"
          onChange={(e) => handledate(e.target.value)}
          value={date}
        />

        <Input
          placeholder="Digite a descrição da missão"
          onChange={(e) => handleDescription(e.target.value)}
          value={description}
        />
        <Button onClick={handleAddMission}> Adicionar </Button>

        <VStack bg="red">
          {tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              handleDeleteMission={handleDeleteMission}
            />
          ))}
        </VStack>
      </Flex>
    </Flex>
  );
}
