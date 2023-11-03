import { Text, Paper, Container, Image, Title, SimpleGrid, Divider } from '@mantine/core';
import { ReactComponent as LinkedIn } from '../images/linkedin.svg';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function Articals() {
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
                    <Text><span style={{ color: "#64ffda", fontSize: 22 }}>04.</span><b style={{ fontSize: 26 }}> &nbsp;Articles published</b><span><Divider my="sm" variant="dashed" /></span></Text>
                    <SimpleGrid cols={3} style={{ marginTop: 50 }}>
                        <div>
                            <Paper  style={{ background: "#2e353a" }} shadow="md" radius={"md"}>
                                <Image
                                    radius="md"
                                    h={200}
                                    src="https://media.licdn.com/dms/image/D5612AQGu7jK7RsH5Jw/article-cover_image-shrink_423_752/0/1697424504246?e=1704326400&v=beta&t=bgU8PIbdhPhIzrup-4U3Y48wE3ZC9kzACHZqXV215Bg"
                                />
                                <div style={{ padding: 20 }}>
                                    <Title order={4} style={{ marginTop: 10,cursor:"pointer" }} onClick={() => openInNewTab('https://www.linkedin.com/pulse/top-companies-coimbatore-udhayakumar-t-35i7c?trackingId=s8Jw%2FLUdQdKYQ5S2atQDgw%3D%3D&lipi=urn%3Ali%3Apage%3Ad_flagship3_detail_base%3BvqrkUuvPQUqsToqov%2Binaw%3D%3D')}>Top IT Companies in Coimbatore <span>&nbsp;&nbsp;&nbsp;&nbsp;<LinkedIn /></span></Title>
                                    <Text style={{ marginTop: 10 }}>2 min read on LinkedIn</Text>
                                    <Text style={{ marginTop: 10, fontSize: "14px" }}> <span style={{ color: "#64ffda" }}>2,523</span> Impressions &nbsp;&nbsp;&nbsp;&nbsp; <span style={{ color: "#64ffda" }}>560</span> Article views</Text>
                                </div>
                            </Paper>
                        </div>
                    </SimpleGrid>
                </Container>
            </div>
        </motion.div>

    )
}