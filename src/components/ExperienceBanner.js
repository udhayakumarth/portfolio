import { List, Timeline, Text, Divider, Container, Avatar, SimpleGrid } from '@mantine/core';
import { ReactComponent as IdCard } from '../images/Typing-bro.svg';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function ExperienceBanner() {
    const boxVariant = {
        visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
        hidden: { opacity: 0, scale: 0 }
    };

    const control = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            control.start("visible");
        } else {
            control.start("hidden");
        }
    }, [control, inView]);


    return (
        <motion.div
            className="box"
            ref={ref}
            variants={boxVariant}
            initial="hidden"
            animate={control}
        >
            <Container size={"lg"} style={{ marginTop: 150 }}>
                <SimpleGrid cols={2} >
                    <div>
                        <IdCard height={"400px"}></IdCard>
                    </div>
                    <div>
                        <Text><span style={{ color: "#64ffda", fontSize: 22 }}>02.</span><b style={{ fontSize: 26 }}> &nbsp;My journey</b><span><Divider my="sm" variant="dashed" /></span></Text>
                        <Timeline reverseActive style={{ marginTop: 50 }} color={"#64ffda"} active={3} bulletSize={30} lineWidth={2}>
                            <Timeline.Item bullet={<Avatar
                                size={35}
                                radius="xl"
                                src="https://raw.githubusercontent.com/udhayakumarth/udhayakumarth/main/virtusa_logo.jpeg"
                            />} title="Virtusa">
                                <Text c="dimmed" size="sm">Intern-Delivery | May 2023 - Aug 2023</Text>
                                <Text c="dimmed" size="sm">&nbsp;</Text>
                                <Text c="dimmed" size="sm">&nbsp;</Text>
                            </Timeline.Item>

                            <Timeline.Item bullet={

                                <Avatar
                                    size={35}
                                    radius="xl"
                                    src="https://raw.githubusercontent.com/udhayakumarth/udhayakumarth/main/zf_group_logo.jpeg"
                                />} title="ZF Group">
                                <Text c="dimmed" size="sm">Human Resources Intern | Apr 2022 - Jul 2022</Text>
                                <Text c="dimmed" size="sm">&nbsp;</Text>
                                <Text c="dimmed" size="sm">&nbsp;</Text>
                            </Timeline.Item>

                            <Timeline.Item title="KPR Institute of Engineering and Technology" bullet={<Avatar
                                size={35}
                                radius="xl"
                                src="https://raw.githubusercontent.com/udhayakumarth/udhayakumarth/main/kpr_institute_of_engineering_and_technology_logo.jpeg"
                            />} lineVariant="dashed">
                                <Text c="dimmed" size="sm">Undergraduate | B.E. Computer Science and Engineering | Oct 2019 - Apr 2023</Text>
                                <Text c="dimmed" size="sm">&nbsp;</Text>
                                <Text c="dimmed" size="sm">&nbsp;</Text>
                            </Timeline.Item>
                        </Timeline>
                    </div>

                </SimpleGrid>

            </Container>
        </motion.div>


    )
}