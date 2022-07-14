import React from 'react';

const Bookmark = ({status, onToggleBookMark, id}) => {
    return (
        <i
            onClick={() => onToggleBookMark(id)}
           className={status ? "bi bi-bookmark-fill" : "bi bi-bookmark"}>
        </i>
    );
};

export default Bookmark;