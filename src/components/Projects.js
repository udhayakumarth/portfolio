import { Text, Paper, Container, List, Title, Center, Image, SimpleGrid, Badge, Divider } from '@mantine/core';
import { ReactComponent as GithubLogo } from '../images/github.svg';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function Projects() {
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

    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

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
                    <Text><span style={{ color: "#64ffda", fontSize: 22 }}>03.</span><b style={{ fontSize: 26 }}> &nbsp;Things I’ve Built</b><span><Divider my="sm" variant="dashed" /></span></Text>
                    <SimpleGrid cols={2} spacing="xl" style={{ marginTop: 50 }}>
                        <div>
                            <Paper style={{ background: "#2e353a" }} shadow="md" p="xl" radius={"md"}>
                                <Title order={4} style={{ marginTop: 10, cursor: "pointer" }} onClick={() => openInNewTab('https://github.com/udhayakumarth/paymint-web-app')}>Personal finance Manager <span>&nbsp;&nbsp;&nbsp;&nbsp;<GithubLogo /></span></Title>
                                <Text style={{ marginTop: 10 }}>Developed a comprehensive toolset that allows users to track income, expenses, and budgets, while offering valuable insights to improve financial health. Leveraging React.js and Redux.js</Text>
                                <Text>
                                    The application ensures secure data management and visualization through intuitive charts and graphs
                                </Text>
                                <Text style={{ color: "#64ffda", marginTop: 10, fontSize: "14px" }}> React &nbsp;&nbsp;&nbsp;&nbsp; Redux &nbsp;&nbsp;&nbsp;&nbsp; Chartjs &nbsp;&nbsp;&nbsp;&nbsp; Mantine UI &nbsp;&nbsp;&nbsp;&nbsp; Spring boot</Text>
                            </Paper>
                        </div>
                        <div>
                            <Paper style={{ background: "#2e353a" }} shadow="md" p="xl" radius={"md"}>
                                <Title order={4} style={{ marginTop: 10, cursor: "pointer" }} onClick={() => openInNewTab('https://github.com/udhayakumarth/frontend-house-recommendation')}>House Recommendation <span>&nbsp;&nbsp;&nbsp;&nbsp;<GithubLogo /></span></Title>
                                <Text style={{ marginTop: 10 }}>Developed a dynamic House Recommendation application using React, allowing users to create and customize housing layouts of any dimensions.</Text>
                                <Text>
                                    Implemented a scoring mechanism based on nearby services to recommend the best-suited house for rent.
                                </Text>
                                <Text style={{ color: "#64ffda", marginTop: 10, fontSize: "14px" }}> React &nbsp;&nbsp;&nbsp;&nbsp; Bootstrap</Text>
                            </Paper>
                        </div>
                        <div>
                            <Paper style={{ background: "#2e353a" }} shadow="md" p="xl" radius={"md"}>
                                <Title order={4} style={{ marginTop: 10, cursor: "pointer" }} onClick={() => openInNewTab('https://github.com/udhayakumarth/secure-data-sharing-for-autonomous-vehicles-using-blockchain')}>Secure data sharing for autonomous vehicles using blockchain <span>&nbsp;&nbsp;&nbsp;&nbsp;<GithubLogo /></span></Title>
                                <Text style={{ marginTop: 10 }}>Blockchain-based solution for secure data transfer in AVs, addressing ownership, trust, and transparency challenges.</Text>
                                <Text>
                                    Utilizing smart contracts and Merkle trees to ensure tamper-proof and auditable data sharing among vehicles.
                                </Text>
                                <Text style={{ color: "#64ffda", marginTop: 10, fontSize: "14px" }}> Blockchain &nbsp;&nbsp;&nbsp;&nbsp; Smart Contract &nbsp;&nbsp;&nbsp;&nbsp; Solidity</Text>
                            </Paper>
                        </div>
                        <div>
                            <Paper style={{ background: "#2e353a" }} shadow="md" p="xl" radius={"md"}>
                                <Title order={4} style={{ marginTop: 10, cursor: "pointer" }} onClick={() => openInNewTab('https://github.com/dev-sriramp/notitle')}>Operations Planning & Monitoring  <span>&nbsp;&nbsp;&nbsp;&nbsp;<GithubLogo /></span></Title>
                                <Text style={{ marginTop: 10 }}>Developed a web application and Android app to streamline task assignment and progress monitoring. Leveraging React.js, React Native, and Firebase technologies</Text>
                                <Text>
                                    The applications provided a seamless user experience on both web and mobile platforms.
                                </Text>
                                <Text style={{ color: "#64ffda", marginTop: 10, fontSize: "14px" }}> React &nbsp;&nbsp;&nbsp;&nbsp; React Native &nbsp;&nbsp;&nbsp;&nbsp; Firebase</Text>
                            </Paper>
                        </div>
                    </SimpleGrid>
                </Container>
            </div>
        </motion.div>

    )
}