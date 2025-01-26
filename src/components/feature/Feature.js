import { Text, Card, Button, Title, SimpleGrid } from "@mantine/core";
import { IconCurrencyRupee, IconHomeSearch } from '@tabler/icons-react';


const projectData = [
    {
        title: 'paymint-web-app',
        description:
            'Paymint - Empower your finances. Track income, expenses, budgets, goals & debt. Achieve financial well-being with insightful reports.',
        icon: IconCurrencyRupee,
        link: 'https://github.com/udhayakumarth/paymint-web-app'
    },
    {
        title: 'house-recommendation',
        description:
            'House Recommendation using a scoring mechanism based on nearby services to recommend the best-suited house for rent.',
        icon: IconHomeSearch,
        link: 'https://github.com/udhayakumarth/house-recommendation-web-app'
    }
];

export default function Feature() {
    const features = projectData.map((feature) => (
        <Card shadow="sm" padding="lg" radius="md" withBorder>
            <feature.icon size={50} stroke={2} />
            <Text fz="lg" fw={500} mt="md">
                {feature.title}
            </Text>
            <Text fz="sm" c="dimmed" mt="sm">
                {feature.description}
            </Text>

            <Button
                color="gray"
                fullWidth
                mt="md"
                radius="md"
                onClick={() => window.open(`${feature.link}`, "_blank")}
            >
                Know more
            </Button>
        </Card>
    ));

    return (
        <div>
            <Title order={3} style={{ paddingTop: "32px", paddingBottom: "16px" }}>
                Things I’ve Built:
            </Title>
            <SimpleGrid
                cols={{ base: 1, sm: 2, lg: 3 }}
                spacing={{ base: 10, sm: 'xl' }}
                verticalSpacing={{ base: 'md', sm: 'xl' }}
            >
                {features}
            </SimpleGrid>
        </div>
    )
}