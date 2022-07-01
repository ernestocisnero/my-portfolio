import { useState } from "react"


export const SimpleForm = () => {

    const [formState, setformState] = useState({
        username: '',
        email: ''
    });

    const { username, email } = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target;

        setformState({
            ...formState,
            [name]: value
        });
    }

    return (
        <>
            <div>Contact me:</div>
            <hr />

            <input
                type="text"
                className="form-control"
                placeholder="username"
                name="username"
                value={username}
                onChange={onInputChange}
            />

            <input
                type="email"
                className="form-control mt-2"
                placeholder="example@email.com"
                name="email"
                value={email}
                onChange={onInputChange}
            />

            <textarea
                className="form-control mt-3"
                name="textarea"
                placeholder="type your message here..."></textarea>

            <input
                className="btn btn-secondary mt-2"
                type="button"
                value="Send" />
        </>
    )
}




