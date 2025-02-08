
import { TextField, Button } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Add = () => {
    const [inputs, setInputs] = useState({
        title: "",
        price: "",
        description: "",
        category: "",
        image: "",
        rating: { rate: "", count: "" }
    });

    const location = useLocation();
    const navigate = useNavigate();

    // If there is data in location.state (for updating)
    useEffect(() => {
        if (location.state?.val) {
            setInputs(location.state.val); // Populate the form with existing data
        }
    }, [location.state]);

    const inputHandler = (e) => {
        const { name, value } = e.target;
        if (name === "rate" || name === "count") {
            setInputs((prev) => ({
                ...prev,
                rating: { ...prev.rating, [name]: value }
            }));
        } else {
            setInputs((prev) => ({ ...prev, [name]: value }));
        }
    };

    const addHandler = () => {
        const method = location.state?.val ? "put" : "post"; // Check if it's update or add
        const url = location.state?.val
            ? `http://localhost:8012/update/${location.state.val._id}` // Update URL
            : "http://localhost:8012/add"; // Add URL
        
        axios[method](url, inputs)
            .then((res) => {
                alert(location.state?.val ? "Updated successfully!" : "Added successfully!");
                navigate("/manage"); // Redirect to manage page
            })
            .catch((err) => console.log(err));
    };

    return (
        <div>
            <TextField
                label="Title"
                fullWidth
                name="title"
                value={inputs.title}
                onChange={inputHandler}
            />
            <TextField
                label="Price"
                fullWidth
                name="price"
                value={inputs.price}
                onChange={inputHandler}
            />
            <TextField
                label="Description"
                fullWidth
                name="description"
                value={inputs.description}
                onChange={inputHandler}
            />
            <TextField
                label="Category"
                fullWidth
                name="category"
                value={inputs.category}
                onChange={inputHandler}
            />
            <TextField
                label="Image URL"
                fullWidth
                name="image"
                value={inputs.image}
                onChange={inputHandler}
            />
            <TextField
                label="Rating (Rate)"
                fullWidth
                name="rate"
                value={inputs.rating.rate}
                onChange={inputHandler}
            />
            <TextField
                label="Rating (Count)"
                fullWidth
                name="count"
                value={inputs.rating.count}
                onChange={inputHandler}
            />

            <Button variant="contained" color="primary" onClick={addHandler} style={{ marginTop: "16px" }}>
                {location.state?.val ? "Update" : "Add"}
            </Button>
        </div>
    );
};

export default Add;

// import { TextField } from '@mui/material'
// import React from 'react'
// import { useState } from 'react'
// import axios from 'axios'


// const Add = (props) => {
//   const [inputs, setInputs] = useState({
//       title: "",
//       price: "",
//       description: "",
//       category: "",
//       image: "",
//       rating: { rate: "", count: "" } // Fix: Make rating an object
//     });
  
//   var location = useLocation();
//   var navigate =  useNavigate();
//   console.log("loc", location.state);

//   const inputHandler = (e) => {
//     setInputs({...inputs, [e.target.name] : e.target.value});
//     console.log(inputs);
//   };

//   const addHandler = () => {
//     console.log("clicked");
//     if(location.state !== null){
//       axios
//         .put("")
//     }
//   }

//   return (
//     <>

//     <div>
//         <TextField variant="outlined" label="Title" fullWidth margin="normal" />
//         <TextField variant="outlined" label="Price" fullWidth margin="normal" />
//         <TextField variant="outlined" label="Description" fullWidth margin="normal" />
//         <TextField variant="outlined" label="Category" fullWidth margin="normal" />
//         <TextField variant="outlined" label="Image URL" fullWidth margin="normal" />

        
//         <TextField variant="outlined" label="Rating (Rate)" fullWidth margin="normal" />
//         <TextField variant="outlined" label="Rating (Count)" fullWidth margin="normal" />
//     </div>
//     </>
//   )
// }

// export default Add