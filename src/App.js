import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Albums from './components/Albums';
import Footer from './components/Footer';
import AddAlbum from './components/AddAlbum';

function App() {

    const [albums, setAlbums] = useState([]);
    useEffect(() => {
        fetch('https://6008fb580a54690017fc2817.mockapi.io/persons')
            .then(response => response.json())
            .then(data => setAlbums(data));
    }, []);

    const [myNames, setMyNames] = useState("Tuyên");
    const doiTen = () => {
        setMyNames('ok');

    }
    const [color, setColor] = useState("green");
    const changeColor = () => {
        setColor("red");
    };
    const renderAdd = (value)=>{
       setAlbums([
           ...albums,
           value
        
       ])
    }
    return (
        <div className="App" >
            < Header />

            <main>

                <div style={{ backgroundColor: color }}>ok</div>
                <button onClick={changeColor} >Đổi màu</button>
                <Banner />
                <AddAlbum onAddAlbum={renderAdd} />

                <div className="album py-5 bg-light">
                    <div className="container">
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                            {
                                albums.map((album, index) => <Albums
                                    name={album.name}
                                    des={album.des}
                                    avatar={album.avatar}

                                    
                                    key={index}
                                />)
                            }
                        </div>
                    </div>
                </div>
                {myNames}

            </main>
            <Footer />
        </div>


    );
}

export default App;