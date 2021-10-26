import React from "react";

function Login() {
  return (
    <div className="row d-flex justify-content-center align-items-center" style={{ minHeight: "100vh", width: "100vw" }}>
      <div className="col-5">
        <div class="card o-hidden border-0 shadow-lg" style={{ backgroundColor: "#212121", borderRadius: "20px" }}>
          <div class="card-body p-0">
            <div class="p-5">
              <div class="text-center">
                <h1 class="h2 text-danger font-weight-bolder">Netfliks Admin</h1>
              </div>
              <form class="mt-4 user">
                <div class="form-group">
                  <label for="email">Username / Email</label>
                  <input type="text" class="form-control rounded-pill" autocomplete="off" placeholder="Enter your unique username or email" name="email" id="email" />
                </div>
                <div class="form-group">
                  <label for="password">Password</label>
                  <input id="password" type="password" autocomplete="off" class="form-control rounded-pill" name="password" placeholder="Enter you strong password" />
                </div>
                <button type="submit" class="btn btn-danger btn-block rounded-pill">
                  Sign In
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
