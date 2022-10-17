const React = require('react')


class Navbar extends React.Component {
    render() {
        return(
            <nav style={styles.container}>
                <a href='/'>Home</a>
                <a href='/blog'>Blogs</a>
                <a href='/blog/new'>Create New Blog</a>
                <a href='/user/signup'>Sign in</a>
                <a href='/user/signout'>Sign out</a>
            </nav>
        )
    }
}

const styles = {
    container : {
        display:"flex",
        justifyContent: 'space-between',
        background: '#CFD2CF'
    }
}


module.exports = Navbar