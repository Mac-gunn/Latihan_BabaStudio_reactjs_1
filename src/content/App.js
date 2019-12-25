import React, { Component } from 'react';

class App extends Component{
    render(){
        return(
            <div className="wrapper">
                <div className="header">
                    <div className="navbar">
                        <div className="logo">
                            <img className="imgfluid" src={require('../logo/babastudio-logo.png')} />
                        </div>
                        <div className="menu">
                            <ul>
                                <li><a>Home</a></li>
                                <li><a>Blogs</a></li>
                                <li><a>Gallery</a></li>
                                <li><a>Contacts</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="slider">
                    <div className="slider_content">
                        <img className="imageslider" src={require('../images/banner-desktop.jpg')}/>
                    </div>
                <h2 className="dataprestasi">Prestasi Murid BabaStudio</h2>
                <div className="content">
                    <div className="content-gambar">
                        <div className="image">
                            <img className="imgsliderr" src={require('../images/21cineplex.jpg')}/>
                            <div className="contentimage">
                                <h2 className="fontimage">www.21cineplex.com</h2>
                            </div>
                        </div>
                        <div className="image">
                            <img className="imgsliderr" src={require('../images/bpn.jpg')}/>
                            <div className="contentimage">
                                <h2 className="fontimage">www.bpn.go.id</h2>
                            </div>
                        </div>
                        <div className="image">
                            <img className="imgsliderr" src={require('../images/republika.jpg')}/>
                            <div className="contentimage">
                                <h2 className="fontimage">www.republika.co.id</h2>
                            </div>
                        </div>
                    <div className="content-gambar">
                        <h2 className="dataprestasi">tempat kursus BabaStudio</h2>
                        <div className="content-youtube">
                            <iframe width="500" height="315" src="https://www.youtube.com/embed/XbGs_qK2PQA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <div className="content-map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.7937277593246!2d106.78101223287933!3d-6.22136197205978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f12d6144eb23%3A0x85efbed6649a9fa3!2sBaba%20Studio!5e0!3m2!1sid!2sid!4v1575993683917!5m2!1sid!2sid" width="500px" height="315px" frameborder="0" allowfullscreen=""></iframe>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}
export default App;
