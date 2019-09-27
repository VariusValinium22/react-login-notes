import React, { Component } from 'react';

class Note extends Component {
    constructor() {
      super();
    }
    componentWillMount()
    {
      this.setState({
        title: this.props.title,
        body: this.props.body,
        editMode: false,
        finishedMode: true
      });
    }
    handleEdit() {
      this.setState({
        editMode: true
      });
    }
  
    handleSave() {
      this.setState({
      title: this.refs.titleContent.value,
      body: this.refs.bodyContent.value,
      editMode: false
      });
    }
    
    handleFinish() {
      this.setState({
        finishedMode: !this.state.finishedMode
      });
    }
  
    handleDelete() {
      this.props.deleteHandler(this.props.id);
    }  
  
    render() {
      let titleElement, 
      bodyElement,
      buttonArea, 
      finishCheck;
      if (this.state.editMode) {
        titleElement = 
        <textarea 
        ref="titleContent" 
        className="title-textarea" 
        defaultValue={this.state.title}></textarea>;      
       
        bodyElement = 
        <textarea 
        ref="bodyContent" 
        className="body-textarea" 
        defaultValue={this.state.body}></textarea>;
  
        buttonArea = 
        <div><button 
        className="btn btn-primary" 
        onClick={this.handleSave.bind(this)}>Save</button></div>;
      } 
      else {
        titleElement = <h5>{this.state.title}</h5>;
        bodyElement = <p>{this.state.body}</p>;
        if (this.state.finishedMode) {
          
          buttonArea = <div><button className="btn btn-info" 
          onClick={this.handleEdit.bind(this)}>Edit</button>
          
          <button className="btn btn-danger" 
          onClick={this.handleDelete.bind(this)}>Delete</button>
          
          <button className="btn btn-info" 
          onClick={this.handleFinish.bind(this)}>Unfinished</button>
          </div>;
        }
        else {
          
          buttonArea = <div>
            <button 
            className="btn btn-info" 
            onClick={this.handleEdit.bind(this)}>Edit</button>
            
            <button 
            className="btn btn-danger" 
            onClick={this.handleDelete.bind(this)}>Delete</button>
            
            <button 
            className="btn btn-info" 
            onClick={this.handleFinish.bind(this)}>Finished</button>
          </div>;
        }
      }
  
        if(!this.state.finishedMode) {
          finishCheck = <div>done: ✔</div>;
        }
        else{
          finishCheck = <div>done:x</div>;
        }
      
      return (
        <div className="loginBox">
          <div className="card card-view">
            <div className="card-body">
              {titleElement}
              {bodyElement}
              {buttonArea}
              {finishCheck}
            </div>
          </div>
        </div>
      );
    } 
  }  
  
  Note.defaultProps = {
      title: "A cool title",
      body: "A cool body"
    };
  
    export default Note