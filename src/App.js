import React from 'react';
import './App.css';
import {Sidebar, DropdownItem, Icon, Item, Logo, LogoText} from 'react-sidebar-ui'
import 'react-sidebar-ui/dist/index.css';

import Navbar from './Layout/Navbar';
import Dashboard from './Layout/Dashboard';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar bgColor='black' isCollapsed={false}>
        <Logo
          image='https://happytravel.viajes/wp-content/uploads/2020/04/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png'
          imageName='Foto perfil'/>
        <LogoText>User Name</LogoText>
        <DropdownItem
          values={['First', 'Second', 'Third']}
          bgColor={'black'}>
          ____________________________
        </DropdownItem>
        <Item bgColor='black'>
          <Icon><i className="fas fa-home"/></Icon>
          Dashboard
        </Item>
        <Item bgColor='black'>
          <Icon><i className="fas fa-info"/></Icon>
          Administración
        </Item>
        <Item bgColor='black'>
          <Icon><i className="far fa-address-book"/></Icon>
          Catalogo
        </Item>
      </Sidebar>
      <Dashboard />
    </div>
  );
}

export default App;
