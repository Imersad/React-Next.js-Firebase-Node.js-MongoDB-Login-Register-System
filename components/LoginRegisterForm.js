import React from 'react';

const LoginRegisterForm = ({ email, setEmail, password, setPassword, btnName, handleSubmit }) => (
  <div className="col-md-6">
    <div className="form-group">
      <label>Email</label>
      <input
        className="form-control"
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
    </div>
    <div className="form-group">
      <label>Password</label>
      <input
        className="form-control"
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
    </div>
    <div>
      <button
        className="btn btn-primary"
        onClick={handleSubmit}
      >
        { btnName }
      </button>
    </div>
  </div>
);

export default LoginRegisterForm;
