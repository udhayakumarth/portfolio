import { Container, Button, Title, Text } from '@mantine/core';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function IntroBanner() {
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
                    <div>
                        <Text fw={600} style={{ color: "#64ffda" }}>Hello, my name is</Text>
                        <Title style={{ textAlign: "left", fontSize: 64 }}>Udhayakumar Thangavel.</Title>
                        <Title style={{ textAlign: "left", fontSize: 64, color: "GrayText" }}>I build things for the web.</Title>
                        <Text fw={500} c="dimmed" maw={600} style={{ marginTop: 40, textAlign: "left" }}>A Computer Science and Engineering graduate with a certification in Java SE 8 Programming from Oracle. I have developed skills in various web technologies such as JavaScript, ReactJs, SpringBoot, MySQL and more through internships and personal projects.</Text>
                        <Button style={{ marginTop: 50 }} size="md" radius="md" variant="outline" color="#64ffda"><Text style={{ color: '#64ffda' }}>Get In Touch</Text></Button>
                    </div>
                </Container>
            </div>
        </motion.div>

    )
}