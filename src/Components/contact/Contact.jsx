import { useState } from "react";
import { useForm } from "react-hook-form";
import { contactsCol } from "../../config/firebase/firebase";
import { addDoc } from "firebase/firestore";
import "./Contact.css";

export default function Contact() {
  const [isOpen, setIsOpen] = useState(true);
  const [styles, setStyles] = useState({
    transform: `scale(1)`,
  });
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    addDoc(contactsCol, data);
    reset();
    setIsOpen(true);
    setTimeout(() => {
      setStyles({
        transform: `scale(1)`,
      });
    }, 300);
  };
  const closePopup = () => {
    setTimeout(() => {
      setIsOpen(false);
    }, 300);
    setStyles({
      transform: `scale(0)`,
    });
  };

  return (
    <section id="contact" className="contact">
      <div className="container d-flex flex-column align-items-center gap-5">
        {isOpen && (
          <div className="overlay" onClick={closePopup}>
            <div style={styles} className="popup">
              <button onClick={closePopup} className="close_btn">
                <i className="bx bx-x"></i>
              </button>
              <h2>
                <i className="bx bxs-check-square"></i> Your Message is
                Delevired
              </h2>
              <h3>Thanks For Your Support</h3>
            </div>
          </div>
        )}
        <h2 className="section_title">CONTACT</h2>
        <img src="../../../assets/separatorBlack.svg" className="my-3" alt="" />
        <form onSubmit={handleSubmit(onSubmit)} action="">
          <input
            type="text"
            {...register("userName", { required: true })}
            placeholder="ENTER YOUR NAME*"
          />
          <input
            type="email"
            {...register("email", { required: true })}
            placeholder="ENTER YOUR EMAIL*"
          />
          <input
            type="number"
            {...register("phone")}
            placeholder="PHONE NUMBER"
          />
          <textarea
            name=""
            id=""
            cols="30"
            rows="6"
            {...register("message", { required: true })}
            placeholder="YOUR MESSAGE*"
          ></textarea>
          <button type="submit">SUBMIT</button>
        </form>
      </div>
    </section>
  );
}
