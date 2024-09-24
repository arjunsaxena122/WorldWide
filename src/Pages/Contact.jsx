import { useNavigate } from "react-router-dom";

const Contact = () => {

  const navigate = useNavigate()

  // function handleButton(formData){
  //   const formInputData = Object.fromEntries(formData.entries())
  //   console.log(formInputData)
  // }

  function handleButton(e){
    e.preventDefault()
    const formData = new FormData(e.target)
    Object.fromEntries(formData.entries());
    navigate("/")
  }
  
  return (
    <section className="section-contact">
      <h2 className="container-title">Contact Us</h2>

      <div className="contact-wrapper container">

        {/* Form of Contact Page */}

        <form onSubmit={handleButton}>
          <input
            type="text"
            className="form-control"
            placeholder="enter your name"
            name="username"
            required
            autoComplete="off"
          />

          <input
            type="email"
            className="form-control"
            placeholder="Enter you email"
            name="email"
            required
            autoComplete="off"
          />

          <textarea
            className="form-control"
            rows="10"
            placeholder="Enter your message"
            name="message"
            required
            autoComplete="off"
          ></textarea>

          <button>
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact