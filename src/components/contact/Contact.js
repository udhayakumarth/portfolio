import { Text, Title, Box } from "@mantine/core";
import { IconAt, IconPhone, IconMapPin } from '@tabler/icons-react';


const contactData = [
    { title: 'Email', description: 'dev.udhayakumar@gmail.com', icon: IconAt },
    { title: 'Phone', description: '+91 6381173167', icon: IconPhone },
    { title: 'Address', description: 'Bengaluru, India', icon: IconMapPin }
];

export default function Contact() {
    const Contact = contactData.map((contact) => (
        <div style={{ display: "flex", alignItems: "center", paddingBottom: "16px" }}>
            <Box mr="md">
                <contact.icon size={24} />
            </Box>

            <div>
                <Text size="xs">
                    {contact.title}
                </Text>
                <Text>{contact.description}</Text>
            </div>
        </div>
    ));

    return (
        <div>
            <Title order={3} style={{ paddingTop: "32px", paddingBottom: "8px" }}>Contact me</Title>
            <Text size="xs" c="dimmed" style={{ paddingBottom: "16px" }}>
                Drop a email. If you have a intresting project.
            </Text>
            {Contact}
        </div>
    )
}