import React from 'react';
import './App.css';
import { AppShell, AspectRatio, Button, Center, Container, Group, Header, Highlight, Input, Space } from '@mantine/core';
import { Logo } from './assets/images';
import { IconMapPin } from '@tabler/icons';


function App() {
  return (
    <div className="App">
      <AppShell
      header={<Header height={70} px='xl'>
        <Logo />
      </Header>}
      >
        <Center>
        <Highlight highlight={'distance'}
        sx={{color:'#1B31A8'}}
        highlightStyles={(theme) => ({
        fontWeight: 700,
        WebkitBackgroundClip: 'text'
      })}>
        Let's calculate distance from Google maps
        </Highlight>
        </Center>
    <Container size={272} ml={156} mt={24}> 
    <Input.Wrapper
      id="input-Origin"
      label="Origin"
      size='xs'
    >
      <Input id="input-Origin" placeholder="Origin" icon={<IconMapPin color='darkred'/>}/>
    </Input.Wrapper>
    <Space h="xl"/>
    <Button ml={349}>Calculate</Button>
    <Space w="lg"/>
    <AspectRatio ratio={16 / 9} >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.3063874233135!2d-74.04668908358428!3d40.68924937933441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25090129c363d%3A0x40c6a5770d25022b!2sStatue%20of%20Liberty%20National%20Monument!5e0!3m2!1sen!2sru!4v1644262070010!5m2!1sen!2sru"
        title="Google map"
        frameBorder="0"
      />
      </AspectRatio>
    </Container>     
      </AppShell>
    </div>
  );
}

export default App;
