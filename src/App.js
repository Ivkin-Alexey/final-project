import React from 'react';
import PokemonList from "./components/PokemonList";
import CaughtPokemonList from "./components/CaughtPokemonList";
import PokemonInfo from "./components/PokemonInfo"
import 'antd/dist/antd.css';

import {Layout, Menu} from 'antd';
import {Link, Route, Routes} from "react-router-dom";

const {Header, Content} = Layout;

function App() {

    return (
        <Layout style={{backgroundColor: 'white'}}>
            <Header style={{position: 'fixed', zIndex: '10', width: '100%', display: 'flex', justifyContent: 'center'}}>
                <Menu theme="dark" mode="horizontal">
                    <Menu.Item key="1">
                        <Link to='/'>All pokemons</Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link to='/caughtPokemons'>Caught pokemons</Link>
                    </Menu.Item>
                </Menu>
            </Header>
            <Content style={{marginTop: '64px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <Routes>
                        <Route exact path="/" element={<PokemonList/>}/>
                        <Route exact path="/caughtPokemons" element={<CaughtPokemonList/>}/>
                        <Route exact path="/info/:id" element={<PokemonInfo/>}/>
                    </Routes>
            </Content>
        </Layout>
    );
}

export default App;
