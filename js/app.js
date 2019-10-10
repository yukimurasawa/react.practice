class Header extends React.Component {
    render() {
        return(
            <header className="header"></header>
        );
    }
}

class Footer extends React.Component {
    render() {
        return(
            <footer className="footer"></footer>
        );
    }
}

class SideArea extends React.Component {
    render() {
        return(
            <div className="side-wrap"></div>
        );
    }
}

class MainArea extends React.Component {
    render() {
        return(
            <div className="main-wrap">
            <Header />
            <Footer />
            </div>
        );
    }
}

class App extends React.Component {
    render() {
        return (
        <div className="wrap">
            <SideArea />
            <MainArea />
        </div>
        );
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('root')
);