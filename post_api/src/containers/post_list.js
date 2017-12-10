import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPosts } from '../actions/index'
import { Link } from 'react-router-dom'

class PostList extends Component {
  componentDidMount(){
    this.props.getPosts()
    console.log('Mounted!')

  }
  render(){

    const PostObject = this.props.PostList
    const PostList = Object.keys(PostObject).map(postkey =>
      <li className='list-group-item' key={postkey}>
      <Link to={`/post/${postkey}`}>{PostObject[postkey].title}</Link>
      </li>
    )
    return(<div>
      <div className="text-xs-right">
      <Link className="btn btn-primary" to="/post/new">Add Post</Link>
      </div>
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
