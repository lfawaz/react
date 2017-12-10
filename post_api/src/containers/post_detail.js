import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deletePost } from '../actions/index'

class PostDetail extends Component {
  deletePost(){
    this.props.deletePost(this.props.match.params.id,() => {
      this.props.history.push('/')
    })
  }
  render(){

    return(
      <div>
        <button
        className="btn btn-danger text-xs-right"
        onClick={this.deletePost.bind(this)}
        >
        Delete Post
        </button>
        Post Detail!
        {this.props.post.title}

      </div>
    )
  }
}

function mapStateToProps({ PostList }, ownProps){
  return { post: PostList[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { deletePost })(PostDetail)
