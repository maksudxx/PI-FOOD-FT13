export default function CardRecipe({id, name, summary}){
    return (
        <div>

            <h1>{name}</h1>
            <h2>{id}</h2>
            <p>{summary}</p>
        </div>
    )
}