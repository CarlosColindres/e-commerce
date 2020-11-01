import React, { Component } from 'react'
import {data} from '../data/directory.data'
import MenuItem from './MenuItem'

export default class DirectoryMenu extends Component {
    state = {
        sections: data
    }
    render() {
        return (
            <div className="directory-menu">
                {
                    this.state.sections.map(({title,imageUrl,id,size}) => <MenuItem title={title} imgUrl={imageUrl} size={size} key={id}/>)
                }
            </div>
        )
    }
}
