import React, { useEffect, useRef, useState } from 'react';
import './Chat.css';
import logo from '../assets/Logo.png';

const Chat = (props) => {

  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const chatEndRef = useRef(null);
  const inpToggleRef = useRef(true);

  const [chat, setChat] = useState([]);

  const userMsg = {
    type: "user",
    text: question,
    time: new Date().toLocaleTimeString()
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat]);

  useEffect(() => {
    inpToggleRef.current?.focus();
  }, [response]);
  async function handlesubmit() {
    if (!question.trim()) return;

    setChat(prev => [...prev, userMsg]);

    const prompt = question;
    setQuestion('');
    setLoading(true);
    setResponse('');

    try {
      const apiKey = import.meta.env.VITE_OPENROUTER_API_KEY;

      if (!apiKey) {
        throw new Error("OpenRouter API Key .env mein nahi mili bhai!");
      }

      console.log("OpenRouter ko message bhej rahe hain...");

      const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${apiKey}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "model": "google/gemini-2.0-flash-lite-001",
          "messages": [
            {
              "role": "system",
              "content": `Tumhe Mayank ne banaya hai. Tumhe logo ki personality adapt karne aur unke jaisi vibe dene ke liye banaya gaya hai. Tumhara naam AlterEgo hai — ek desi Indian dost. Tum hamesha respectfull language me hi baat karoge 'aap' kahke. Tum hamesha ${props.lang} me hi baat karoge. Hamesha ${props.lang === 'hinglish' ? 'casual Hinglish (Hindi + English mix)' : 'simple English'}  mein baat karo. Tumhara tone "${props.tone}" hai, isliye tum ${props.tone === "funny" ? "thode funny aur light" : props.tone === "serious" ? "thode serious aur focused" : props.tone === "savage" ? "thode savage aur witty" : "chill aur relaxed"} rehkar baat karo. Ek close friend ki tarah behave karo. Aur chill reh. Replies chote, friendly aur point par hone chahiye. 'Bhai', 'yaar', 'mast', 'tension nahi' jaise words use karo (agar Hinglish selected ho) aur user ki vibe samajh ke uske hisaab se respond karo. ${props.more ? `Additional Personality ${props.more}` : ""}`
            },
            {
              "role": "user",
              "content": prompt
            }
          ]
        })
      });

      const data = await res.json();

      if (data.error) {
        throw new Error(data.error.message);
      }

      const text = data.choices[0].message.content;

      const botMsg = {
        type: "bot",
        text: text,
        time: new Date().toLocaleTimeString()
      };

      setChat(prev => [...prev, botMsg]);

      setResponse(text);

    } catch (error) {
      console.error("API Error:", error);
      setResponse(`Error aa gayi: ${error.message}`);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="big_chat_box">
      <div className='chat_div'>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"></link>
        <div className="sub_chat">
          <nav className="navi">
            <div className="user_logo">
              <img src={logo} alt="logo" />
            </div>
            <div className="name_tone">
              <div className="chat_name">{props.name}</div>
              <div className="chat_tone">{props.tone}</div>
            </div>
          </nav>
          <div className="setting">
            <i className="fa-solid fa-gear"></i>
          </div>
        </div>

        <div className="main_chat_box">
          {chat.length === 0 ? (
            <div className="empty_chat">Start chatting</div>
          ) : (
            chat.map((m, i) => (
              <div key={i} className={m.type === "user" ? "user_que" : "ai-message"}>
                <div className={m.type === "user" ? "user_nm" : "bot_nm"}>
                  {m.type === "user" ? props.name : "AlterEgo"}
                </div>
                <p>{m.text}</p>
                <div className="curr_time">{m.time}</div>
              </div>
            ))
          )}
          {loading && (
            <div className="ai-message">
              <div className="bot_nm">AlterEgo</div>
              <p><i>Typing...</i></p>
            </div>
          )}
          <div ref={chatEndRef} />
        </div>

        <div className="typing_bar">
          <form action="" className="mid" onSubmit={(e) => {
            e.preventDefault();
            handlesubmit();
          }}>
            <input
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              className="type_text"
              autoFocus={true}
              placeholder='How are you buddy...'
              disabled={loading}
              ref={inpToggleRef}
            />
            <button
              className='send'
              type='submit'
              disabled={loading || !question}
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Chat;