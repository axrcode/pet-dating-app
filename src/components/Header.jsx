import { Fragment } from "react"

const Header = () => {
    return (
        <Fragment>
            <h1 className="font-black text-5xl text-center md:w-1/2 mx-auto">
                Seguimiento Pacientes {''}
                <span className="text-indigo-600">Veterinaria</span>
            </h1>
        </Fragment>
    );
}

export default Header 