
const UserComponent = (props) => {
    return (
        <div className="card">
            <h1>{props.name}</h1>
            <p className="title">CEO & Founder, {props.company.name}</p>
            <p>Website: <a href={props.website} target="_blank" >{props.website}</a></p>
            <div style={{ margin: "24px 0" }}>
            </div>
            <p><button>Contact</button></p>
        </div>
    );
}

export default UserComponent;