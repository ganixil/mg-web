function Article(props){
    return(
        <>
            <p className="title">{props.title}</p>
            <p className="date">{props.date}</p>
        </>
    )
}

export default Article;