import { Avatar, Stack, Text, Title } from "@mantine/core";

export default function HomeAuthor() {
  return (
    <Stack gap={24} align="center">
      <Avatar
        variant="outline"
        size={224}
        src="/image-author.jpg"
        style={{ border: "2px solid #1CA7C8" }}
      />

      <Text fz="md" fw="bold" c="#1CA7C8" lh={1}>
        Olá, meu nome é Fernanda_
      </Text>

      <Stack gap={24} align="center">
        <Title fz={60} fw="bold" lh={1}>
          Eu ensino{" "}
          <Text
            component="span"
            variant="gradient"
            gradient={{ from: "#8C61D5", to: "#1CA7C8", deg: 90 }}
            inherit
          >
            Programação
          </Text>
        </Title>

        <Text fz="md" fw={400} c="#6E859F" ta="center" lh={1} maw={600}>
          Sou Engenheira de Computação e Pedagoga. Ensino pensamento
          computacional para estudantes do Ensino Fundamental e Médio. Ensino
          sobre pensamento computacional usando HTML, CSS e JavaScript. Veja os
          projetos que já desenvolvi!
        </Text>
      </Stack>
    </Stack>
  );
}
