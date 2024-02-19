

function Search(){

    const [search,setSearch] = useState('');

    return (
        <>
            <input type="text" onChange={(e)=>{setSearch(e.target.value)}} value ={search}/>
            <button type='button'>Search</button>
        </>
    )
}

export default Search;