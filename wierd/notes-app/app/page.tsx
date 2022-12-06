import CreateAccount from "./notes/CreateAccount";

export default function HomePage()
{
    return (
        <div>
            <h1>Home Page</h1>
            <p>Some Content</p>
            <input className="userName" id = "userName">

            </input>
            <input className="password" id = "password">
                
            </input>
            <CreateAccount />
        </div>
    );
}



