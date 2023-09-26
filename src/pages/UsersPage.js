import { useFormik } from "formik";
const URL = "https://jsonplaceholder.typicode.com/users";

export function UsersPage() {
  const formik = useFormik({
    initialValues: {
      name: "",
      username: "",
      email: "",
      number: "",
      website: "",
    },
    onSubmit: (values) => {
      fetch(URL, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(values),
      }).then((response) => {
        if (response.status === 201) {
          alert("Success");
        } else {
          alert("Error");
        }
      });
    },
  });
  return (
    <>
      <h1>Users Page</h1>
      <form onSubmit={formik.handleSubmit}>
        <input
          onChange={formik.handleChange}
          type="text"
          placeholder="Name"
          name="name"
          value={formik.values.name}
        />
        <input
          onChange={formik.handleChange}
          type="text"
          placeholder="Username"
          name="username"
          value={formik.values.username}
        />
        <input
          onChange={formik.handleChange}
          type="email"
          placeholder="Email"
          name="email"
          value={formik.values.email}
        />
        <input
          onChange={formik.handleChange}
          type="number"
          placeholder="Phone number"
          name="number"
          value={formik.values.number}
        />
        <input
          onChange={formik.handleChange}
          type="text"
          placeholder="Website"
          name="website"
          value={formik.values.website}
        />
        <button type="submit">SEND</button>
      </form>
    </>
  );
}
