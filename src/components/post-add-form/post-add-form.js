import React from 'react';

const PostAddForm = (props) => {
    const {onAdd} = props;
    return (
        <div className="bottom-panel d-flex">
            <input type="text"
                   placeholder="О чем вы думаете"
                   className="form-control new-post-label"
            />
            <button
                type="submit"
                className="btn btn-outline-secondary"
                onClick={() => onAdd('hello')}>
                Добавить
            </button>
        </div>
    )
}
export default PostAddForm;