import React, { Component } from 'react';

export default class NavBar extends Component {
    render(){
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ml-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="https://www.google.com">Home <span class="sr-only">(current)</span></a>
                        </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}