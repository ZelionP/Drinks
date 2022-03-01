import { Link } from "react-router-dom"

const Error = () =>{
    return (
        <section className="section">
            <div className="error-container">
                <h1>404 - THIS PAGE NOT FOUND</h1>
                <Link to = "/" className="btn btn-back-home">Back Home</Link>
            </div>
        </section>
    )
}
export default Error