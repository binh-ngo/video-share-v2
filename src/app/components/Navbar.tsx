import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';


export const Navbar = () => {
    // TODO: double check page layout in next.config.js. Might need to change file structure to add more pages.
    return (
        <Nav className='bg-sky-300 flex justify-between mb-5'>
            <h1 className='text-black'>Video Share</h1>
            <div className="flex flex-row justify-between font-bold text-2xl">
                <Nav.Item>
                    <Nav.Link href="/home">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/login">Login</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/signup">Sign Up</Nav.Link>
                </Nav.Item>
            </div>
        </Nav>
    )
}