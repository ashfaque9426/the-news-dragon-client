import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Terms and Conditions</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla quae in culpa error. Quis harum quas officiis odit vel labore, reiciendis amet quia esse ullam nisi iusto maxime, magni commodi, ea aut natus!</p>
            <p>Go back to <Link to="/register">Register</Link></p>
        </div>
    );
};

export default Terms;