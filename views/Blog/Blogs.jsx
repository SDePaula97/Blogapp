const React = require('react')
const Navbar = require('../components/Navbar')

class Blogs extends React.Component{
    render(){
        const {BlogModel} = this.props
        console.log(BlogModel);
        return(
            <div>
                <head>
                    <link rel='stylesheet' href='/CSS/app.css'/>
                </head>
                <Navbar />
           
            <div>
                <h1>Blog Posts</h1>

                <section className='blogSec'>
                    {BlogModel.map((blog) => (
                    <a href={`/blog/${blog._id}`}>
                        <div className='blogDiv'>
                            {blog.title}<br/>
                            by {blog.author}<br/>
                            {blog.body}<br/>
                            
                            <a href={`/blog/${blog._id}/edit`} className='btn'>Edit</a>

                            <form action={`/blog/${blog._id}?_method=DELETE`} method= 'post'><input type='submit' value='Delete' /></form>
                        
                        </div>
                    </a>
                    ))}
                </section>
            </div>
            </div>
        )
    }

}

module.exports= Blogs