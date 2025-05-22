import React from 'react';
const List = ({links} :{links:string[]}) => {
    return (
        <div>
            {links.map((link)=>(
                <a href={link}>{link}</a>
            ))}
        </div>
    );
};


export default List;