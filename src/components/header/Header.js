import { Group, Avatar, Badge, Title, Text, ActionIcon, UnstyledButton, SimpleGrid } from '@mantine/core';
import { IconBrandGithub, IconBrandLinkedin, IconBrandLeetcode,   IconCode,   IconDatabase,   IconNetwork,   IconSpy,   IconWorldWww,   IconCoffee,   IconBrandJavascript,   IconApi,   IconBrandAws } from '@tabler/icons-react';

const skillData = [
    { name: "Programming" },
    { name: "Database" },
    { name: "Network" },
    { name: "Security" },
    { name: "Web Application" },
    { name: "Java" },
    { name: "JavaScript" },
    { name: "Spring Boot" },
    { name: "Rest Api" },
    { name: "React" },
    { name: "Aws" },
    { name: "git" }
]

const mockdata = [
    { title: 'Programming', icon: IconCode, color: 'violet' },
    { title: 'Database', icon: IconDatabase, color: 'indigo' },
    { title: 'Network', icon: IconNetwork, color: 'blue' },
    { title: 'Security', icon: IconSpy, color: 'green' },
    { title: 'Web Application', icon: IconWorldWww, color: 'teal' },
    { title: 'Java', icon: IconCoffee, color: 'cyan' },
    { title: 'JavaScript', icon: IconBrandJavascript, color: 'pink' },
    { title: 'Rest API', icon: IconApi, color: 'red' },
    { title: 'Aws', icon: IconBrandAws, color: 'orange' },
];

export default function Header() {
    const skills = skillData.map((skill) => (
        <Badge style={{ color: "#999999" }} color="gray" size="sm">{skill.name}</Badge>
    ));

    const items = mockdata.map((item) => (
        <UnstyledButton key={item.title}>
            <item.icon color={[item.color][6]} size={32} />
            <Text size="xs" mt={7}>
                {item.title}
            </Text>
        </UnstyledButton>
    ));

    return (
        <div>
            <Group style={{ paddingTop: "32px" }}>
                <Avatar
                    size={94}
                    radius="md"
                    src="https://raw.githubusercontent.com/udhayakumarth/portfolio/refs/heads/main/src/images/self_image.jpeg"
                />
                <div>
                    <Title order={2}>
                        Udhayakumar
                    </Title>
                    <Text size="xs" c="dimmed">
                        Software Engineer
                    </Text>
                    <Group style={{ paddingTop: "4px" }}>
                        <a
                            href="https://github.com/udhayakumarth"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ textDecoration: 'none', color: 'inherit' }}
                        >
                            <ActionIcon size="lg" variant="default" radius="xl">
                                <IconBrandGithub size={18} stroke={1.5} />
                            </ActionIcon>
                        </a>
                        <a
                            href="https://leetcode.com/u/udhayakumarth/"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ textDecoration: 'none', color: 'inherit' }}
                        >
                            <ActionIcon size="lg" variant="default" radius="xl">
                                <IconBrandLeetcode size={18} stroke={1.5} />
                            </ActionIcon>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/udhayakumarth"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ textDecoration: 'none', color: 'inherit' }}
                        >
                            <ActionIcon size="lg" variant="default" radius="xl">
                                <IconBrandLinkedin size={18} stroke={1.5} />
                            </ActionIcon>
                        </a>
                    </Group>
                </div>

            </Group>
            <Text c="dimmed" mt="md" style={{ paddingBottom: "4px" }}>
                A software engineer with 1 year of experience specializing in back-end web development. Skilled in designing, implementing, and optimizing server-side applications. Below are the things I'm good at.
            </Text>
            <SimpleGrid cols={3} mt="md">
                {items}
            </SimpleGrid>

        </div>
    )
}