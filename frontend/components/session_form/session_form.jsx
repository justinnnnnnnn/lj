import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  handleDemoSubmit(e) {
    e.preventDefault();
    this.props.processForm({username: 'stonkmaster421', password: '69'});
  }

  renderErrors() {
    if (!this.props.errors) return null;
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  demo() {
    if (window.location.href.split("/#/")[1] === 'signup') {
      return (null)
    } else {
      return (
        <div>
          <form>
            <div>
              <input type="submit" className="demo-submit" onClick={(e) => this.handleDemoSubmit(e)} value="DEMO LOGIN"/>
            </div>
          </form>
        </div>
      )
    }
  }

  whichSession() {
    if (window.location.href.split("/#/")[1] === 'signup') {
      return `Sign Up`
    } else {
      return `Sign In`
    }
  }


  
  render() {
    return (
      
      <div className="login-page">
        
        <div className="space-people">
          <img aria-hidden="true" src="https://cdn.robinhood.com/assets/generated_assets/1e23d6b90f0d905b425ea289de345ab1.jpg" srcSet="https://cdn.robinhood.com/assets/generated_assets/1e23d6b90f0d905b425ea289de345ab1.jpg 720w, https://cdn.robinhood.com/assets/generated_assets/632fcb3e7ed928b2a960f3e003d10b44.jpg 1440w" height="100%"/> 
        </div>
        
        <div className="login-form">
          <form onSubmit={this.handleSubmit} className="login-form-box">
            
            <div><header><h2 align-self="left">Welcome to Robinherd</h2></header></div>
           
            <div className="login-username">
              <label><div className="user-label">Username</div></label>
              <div className="user-field"><input type="text" value={this.state.username} onChange={this.update('username')} className="login-input"/></div>
            </div>
            
            <div className="login-password">
              <label><div className="pass-label">Password</div></label>
              <div className="pass-field"><input type="password" value={this.state.password} onChange={this.update('password')} className="login-input"/></div>
            </div>
            
            <div className="session-button">
              <input type="submit" className="session-submit" value={this.whichSession()}/>
            </div>

            {this.renderErrors()}
          
          </form>
          {this.demo()}
        </div>

      </div>
      
    
    );
  }
}

export default SessionForm;
