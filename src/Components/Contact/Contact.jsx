import React from "react";

const Contact = () => {
    return(
    <React.Fragment>
        <div className="my-5">
            <h1 className="text-center">📧</h1>
        </div>
        <div className="container contact_div">
            <div className="row">
                <div className="col-md-6 col-10 mx-auto">
                <form>    
                <div class="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Name</label>
                    <input type="text" className="form-control" id="validationCustom01" placeholder="Name" required/>
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Email</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" required/>
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label">Suggestion</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div class="col-12">
                   <button class="btn btn-outline-primary" type="submit">Contact</button>
                </div>
                </form>  
                </div>
            </div>
        </div>
    </React.Fragment>
    );
}

export default Contact;