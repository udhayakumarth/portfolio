import { Container, Text, Center, Image, SimpleGrid, Divider } from '@mantine/core';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";


export default function AboutMe() {
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
            <div>
                <Container size={"lg"} style={{ marginTop: 150 }}>
                    <SimpleGrid cols={2} >
                        <div>
                            <Text><span style={{ color: "#64ffda", fontSize: 22 }}>01.</span><b style={{ fontSize: 26 }}> &nbsp;About me</b><span><Divider my="sm" variant="dashed" /></span></Text>
                            <Text fw={500} style={{ marginTop: 50 }}>Hello!, I'm Udhayakumar, from Tiruppur, also known as Knitwear capital of India.</Text>
                            <Text fw={500} style={{ marginTop: 20 }}>I have a Bachalors degree in Computer Science and Engineering with a certification in Java SE 8 Programming from Oracle. I did Internship in companys like <span style={{ color: "#64ffda" }}> ZF Group</span> and <span style={{ color: "#64ffda" }}> Virtusa</span>.</Text>
                            <Text fw={500} style={{ marginTop: 20 }}>Here are a few of the other activities that I love to do!</Text>
                            <SimpleGrid style={{ marginTop: 30 }} cols={3} >
                                <Text style={{ color: "#64ffda" }}> <span style={{ fontSize: 16 }}>&#10147;</span> Coding</Text>
                                <Text style={{ color: "#64ffda" }}><span style={{ fontSize: 16 }}>&#10147;</span> Reading</Text>
                                <Text style={{ color: "#64ffda" }}><span style={{ fontSize: 16 }}>&#10147;</span> Travel</Text>
                            </SimpleGrid>

                        </div>
                        <div>
                            <Center style={{ marginTop: 50 }}>
                                <Image
                                    radius="md"
                                    h={300}
                                    w="auto"
                                    fit="contain"
                                    src="https://avatars.githubusercontent.com/u/60465112?v=4"
                                />
                            </Center>
                        </div>
                    </SimpleGrid>
                </Container>
            </div>
        </motion.div>

    )
}