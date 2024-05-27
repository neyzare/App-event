import '../css/login.css';

export default () => (`
<div class="container login-container ">
<div class="row justify-content-center align-items-center d-flex align-items-center">
    <div class="col-md-6 login-form-1">
        <h3>Login</h3>
        <form>
            <div class="form-group">
                <input type="text" class="form-control" placeholder="Your Email" value="" />
            </div>
            <div class="form-group">
                <input type="password" class="form-control" placeholder="Your Password" value="" />
            </div>
            <div class="form-group">
                <input type="submit" class="btnSubmit" value="Login" />
            </div>
        </form>
    </div>
</div>
</div>
`);
