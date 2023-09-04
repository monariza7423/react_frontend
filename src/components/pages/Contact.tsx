import { FC, memo, useState } from "react";
import { Header } from "../layout/Header";
import { Footer } from "../layout/Footer";
import axios from "axios";
import '../../style/Contact.scss';
import { useNavigate } from "react-router-dom";

export const Contact: FC = memo(() => {
  const [ name, setName ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ message, setMessage ] = useState("");
  const navigate = useNavigate();

  const onChangeName = (e:React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }
  const onChangeEmail = (e:React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }
  const onChangeMessage = (e:React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/contact", {
        name,
        email,
        message
    });

    if (response.status === 200) {
      navigate("/contact_complete");
    } else {
      alert("問題が発生しました。もう一度お試しください。");
    }
    } catch (error) {
      console.error("送信中にエラーが発生しました:", error);
      alert("問題が発生しました。もう一度お試しください。");
    }
  }

  
  return (
    <>
    <Header />
    <div className="contact wrapper">
      <h1 className="page-title">CONTACT</h1>
      <form onSubmit={handleSubmit}>
        <div className="item">
          <label className="label">NAME</label>
          <input type="text" value={name} onChange={onChangeName} className="input" />
        </div>
        <div className="item">
          <label className="label">EMAIL</label>
          <input type="email" value={email} onChange={onChangeEmail} className="input" />
        </div>
        <div className="item">
          <label className="label">MESSAGE</label>
          <input type="textarea" value={message} onChange={onChangeMessage} className="input" />
        </div>
        <button type="submit">送信</button>
      </form>
    </div>
     <Footer />
    </>
  );
});