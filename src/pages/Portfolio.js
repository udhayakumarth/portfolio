import Contact from "../components/contact/Contact";
import Feature from "../components/feature/Feature";
import Header from "../components/header/Header";
import { Container } from "@mantine/core";


export default function Portfolio() {
    return (
        <Container>
             <Header/>
             <Feature/>
             <Contact/>
        </Container>
           
    )
}