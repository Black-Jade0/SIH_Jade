const Moreinfolink=({linkname,description})=>{
    return(
        <div>
        <p>{description}</p><br />
        <a href={linkname}>Link</a>
        </div>
    )
}

export default Moreinfolink;