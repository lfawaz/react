import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPosts } from '../actions/index'

class PostList extends Component {
  componentDidMount(){
    this.props.getPosts()
    console.log('Mounted!')

  }
  render(){

    const PostObject = this.props.PostList
    const PostList = Object.keys(PostObject).map(postkey =>
      <li className='list-group-item' key={postkey}>{PostObject[postkey].title}</li>
    )
    return(<div>
      <ul className='list-group'>
      <h3> Posts </h3>
      {PostList}
      </ul>
      </div>)
  }
}

function mapStateToProps({ PostList }){
  return { PostList }
}

export default connect(mapStateToProps, { getPosts })(PostList)
