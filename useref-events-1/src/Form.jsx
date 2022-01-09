import { useEffect, useRef, useState } from "react";

export default function Form() {
  const [formState, setFormState] = useState({
    name: "",
    gender: "",
    maritalStatus: false,
    image: null
  });

  const handleFormUpdate = (e) => {
    const { name, value, type, checked } = e.target;

    const val = type === "checkbox" ? checked : value;

    setFormState({
      ...formState,
      [name]: val
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
  };

  const imageRef = useRef(null)

  useEffect(() => {
    console.log("inside useEffect", imageRef)
  }, [])

  const handleImageUpload = (e) => {
    const file = e.target.files[0]
    setFormState({
      ...formState,
      image: file
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          onChange={handleFormUpdate}
          value={formState.name}
          type="text"
          name="name"
        />
      </div>
      <div>
        <select
          onChange={handleFormUpdate}
          value={formState.gender}
          name="gender"
        >
          <option key="Male" value="Male">
            Male
          </option>
          <option key="Female" value="Female">
            Female
          </option>
        </select>
      </div>
      <div>
        <label>Marital Status</label>
        <input
          onChange={handleFormUpdate}
          checked={formState.maritalStatus}
          type="checkbox"
          name="maritalStatus"
        />
      </div>
      <div>
        <label>Upload Photo : </label>
        <input
          type="file"
          ref={imageRef}
          onChange={handleImageUpload}
        />
      </div>
    </form>
  );
}
