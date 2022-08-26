import Header from './header'


function Layout(props) {
    return <div>
        <Header />
        <main>{props.children}</main>
    </div>
}

export default Layout;