import React, {Component} from 'react';
import AppHeader from "../app-header/app-header";
import SearchPanel from "../search-panel/search-panel";
import PostFilter from "../post-filter/post-filter";
import PostList from "../post-list/post-list";
import PostAddForm from "../post-add-form/post-add-form";
import './app.css'

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {label: 'Going to learn React', important: true, id: 1},
                {label: 'That is so good', important: false, id: 2},
                {label: 'I need a break...', important: false, id: 3}
            ]
        };
        this.deleteItem = this.deleteItem.bind(this)
    }

    deleteItem(id) {
        this.setState(({data}) => {
            const index = data.findIndex((elem) => elem.id === id);

            const newData = [...data.slice(0, index), ...data.slice(index + 1)];
            return {
                data: newData
            }
        });
    }

    render() {
        return (
            <div className="app">
                <AppHeader/>
                <div className="search-panel d-flex">
                    <SearchPanel/>
                    <PostFilter/>
                </div>
                <PostList
                    posts={this.state.data}
                    onDelete={this.deleteItem}/>
                <PostAddForm/>
            </div>
        )
    }
}

