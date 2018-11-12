import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';

class PostsShow extends Component {
	componentDidMount() {
		const { id } = this.props.match.params;
		this.props.fetchPost(id);
	}

	render() {
		const { post } = this.props;
		if (!post) {
			return <div>Loading...</div>;
		}

		return (
			<div>
				<h3>{post.title}</h3>
				<h6>Categories: {post.categories}</h6>
				<p>{post.content}</p>
			</div>
		);
	}
}

function mapStateToProps(state, ownProps) {
	const { posts } = state; //This { posts } can be placed directly above in place of state but I used this method to console log the state to see what it is providing.
	console.log('this is the entire state',state);
	return { post: posts[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchPost })(PostsShow);