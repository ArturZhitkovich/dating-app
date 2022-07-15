import React from 'react';

const Bookmark = ({status, onToggleBookMark, id}) => {
    // смотри, ты сделал комопнент, и чтобы его правильно использовать, ты должен говорить каждому разработчику, что тебе надо писать дополнительную логику на обработку 
    
    return (
        <i
            onClick={() => onToggleBookMark(id)}
           className={status ? "bi bi-bookmark-fill" : "bi bi-bookmark"}>
        </i>
    );
};

export default Bookmark;
