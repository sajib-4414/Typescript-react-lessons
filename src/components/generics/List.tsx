//Using generic types. generic types are just parameterized types, you pass the type


// and based on that type the type in the destination is built
type ListProps<T> = {
    items: T[] 
    onClick: (value: T)=> void
}
export const List = <T extends {id: number}>({items, onClick}:ListProps<T>) =>{
    return(
        <div>
            <h2>List of items</h2>
            {items.map((item,index) => {
                return(
                    <div key={item.id} onClick={()=> onClick(item)}>
                        {item.id}
                    </div>
                )
            })}
        </div>
    )
}