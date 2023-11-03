import { Flex, Text, Center } from '@mantine/core';
import { ReactComponent as GithubLogo } from '../images/github.svg';
import { ReactComponent as LinkedIn } from '../images/linkedin.svg';

export default function Footer() {
    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
      };
    return (
        <div style={{marginTop:150}}>
            <Flex
                mih={50}
                gap="xl"
                justify="center"
                align="center"
                direction="row"
                wrap="nowrap"
            >
                <GithubLogo style={{cursor:"pointer" }} width={"26px"} height={"26"} onClick={() => openInNewTab('https://github.com/udhayakumarth')}></GithubLogo>
                <LinkedIn style={{cursor:"pointer" }} width={"26px"} height={"26"} onClick={() => openInNewTab('https://www.linkedin.com/in/udhayakumart')}></LinkedIn>
                
            </Flex>
            <Center>

                <br></br>
                <Text c="dimmed" style={{fontSize:"12px"}}>Email: dev.udhayakumar@gmail.com | Mobile: +91 6381173167</Text>
            </Center>
            <Center>

                <br></br>
                <Text c="dimmed" style={{fontSize:"12px"}}>Built by Udhayakumar using React & Mantine</Text>
            </Center>
        </div>
    )
}