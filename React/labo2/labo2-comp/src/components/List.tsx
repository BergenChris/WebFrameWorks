import ListItem from './ListItem';

interface ListProps {
    items:ListItem[]
}

const List = ({items}:ListProps) => {
    return(
        <div>
            {items.map((item: ListItem) =>{
                return <ListItem key={item.props} item={props}/>
            })}
        </div>
    );
}

export default List;
