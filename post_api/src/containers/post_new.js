import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { newPost } from '../actions/index'
import { connect } from 'react-redux'

class PostNew extends Component {
  constructor(props){
    super(props);

    this.state={
      title:"",
      categories: "",
      content:""
    }

    this.onTitleChange = this.onTitleChange.bind(this)
    this.onCategoriesChange = this.onCategoriesChange.bind(this)
    this.onContentChange = this.onContentChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  onTitleChange(e){
      this.setState({ title: e.target.value})
  }

  onCategoriesChange(e){
      this.setState({ categories: e.target.value})
  }

  onContentChange(e){
      this.setState({ content: e.target.value})
  }

  handleSubmit(event){
    event.preventDefault()

    this.props.newPost(this.state,() => {
        this.props.history.push('/')
      })

  }

  render(){
    return(

      <form onSubmit={this.handleSubmit}>
      <h2>Create Post</h2>
      <div className="form-group">
      <input
        type="text"
        name="title"
        className="form-control"
        placeholder="Enter Title"
        value={this.state.title}
        onChange={this.onTitleChange}
        />
      </div>

      <div className="form-group">
      <input
        type="text"
        name="categories"
        className="form-control"
        placeholder="Enter Categories"
        value={this.state.categories}
        onChange={this.onCategoriesChange}
        />
      </div>

      <div className="form-group">
      <input
        type="text"
        name="cotent"
        className="form-control"
        placeholder="Enter content here.."
        value={this.state.content}
        onChange={this.onContentChange}
        />
      </div>

      <div className="form-group">
      <button type="submit" className="btn btn-primary">Submit</button>
      <Link to="/" className="btn btn-danger">Cancel</Link>
      </div>
      </form>)

  }
}

export default connect(null,{ newPost })(PostNew)
