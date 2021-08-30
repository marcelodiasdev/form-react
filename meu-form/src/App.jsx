import { useState } from "react";
import "./App.css";

function App() {
  const [formValues, setFormValues] = useState({});
  const [isVisible, setIsVisible ] = useState(true); //camilaDev

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    const isCheckBox = type === 'ckeckbox'
    setIsVisible(!isVisible)

    const data = formValues[name] || {};
      if(isCheckBox) {
      data[value] = checked;
      

    }
    const newValue = (isCheckBox) ? data : value;
      setFormValues({ ...formValues, [name]: newValue, });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log("Rodou", data);
  };

  console.log("formValue", formValues);
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="name"
        onChange={handleInputChange}
        value={formValues.name || "" }
      />
      <input
        type="text"
        name="email"
        placeholder="email"
        onChange={handleInputChange}
        value={formValues.email || "" }
      />

      <select
        name="Language"
        onChange={handleInputChange}
        value={formValues.Language || "" }
      >
        <option value="JavaScript"> JavaScript </option>
        <option value="php"> PHP </option>
        <option value="ruby"> Ruby </option>
      </select>

      <div className="radios">
        <label>
          <input
            type="radio"
            value="cafe"
            name="drink"
            onChange={handleInputChange}
            checked={formValues.drink === "cafe"}
          /> Café
        </label>

        <label>
          <input
            type="radio"
            value="cha"
            name="drink"
            onChange={handleInputChange}
            checked={formValues.drink === "cha"}
          /> Chá
        </label>
      </div>

      <div className="checks">
          <label> <input type="checkbox" name="social" value="twitter" onChange={handleInputChange} checked={formValues.social && formValues.social.twitter}/>
           Twitter 
          </label>
          <label> <input type="checkbox" name="social" value="instagram" onChange={handleInputChange} checked={formValues.social && formValues.social.instagram}/>
           Instagram 
          </label>
          <label> <input type="checkbox" name="social" value="facebook" onChange={handleInputChange} checked={formValues.social && formValues.social.facebook}/>
           Facebook 
          </label>

      </div>

      <textarea
        name="bio"
        onChange={handleInputChange}
        value={formValues.bio || ""}
      ></textarea>

      <button type="submit" disabled={isVisible}> Enviar </button>
    </form>
  );
}

export default App;
