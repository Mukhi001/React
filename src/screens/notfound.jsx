import { useNavigate } from "react-router-dom"

export const NotFound=()=>{
    const notFound=useNavigate();

    const notFoundHandler=()=>{
        notFound("/")
    }
    return (
        <>
        <h1>Not found 404</h1>

        <button onClick={notFoundHandler}>Back to home</button>
        </>
    )
}