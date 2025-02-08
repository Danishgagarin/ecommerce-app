import { TableBody, TableCell, TableRow, Table, TableHead, Button} from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState} from 'react'
import { useNavigate, Link } from 'react-router-dom';


const Manage = () => {
    var [emp, setEmp] = useState([]);
    var navigate = useNavigate();
    useEffect(() => {
        axios
            .get("http://localhost:8012/view")
            .then((res) => {
                console.log(res);
                setEmp(res.data);
            })
            .catch((err) => console.log(err));
    }, []);

    const delValue = (id) => {
        console.log(id);
        axios
            .delete("http://localhost:8012/remove/" + id)
            .then((res) => {
                alert(res.data.message);
                window.location.reload();
            })
            .catch((err) => console.log(err));
    };

    const updateValue = (val) => {
        console.log("up clicked");
        navigate("/add", {state: { val }});
    };
  return (
    <>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Title</TableCell>
                    <TableCell><Link to="/add"><Button>Add</Button></Link></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {emp.map((val, i) => {
                        return (
                            <TableRow  key={val._id}>
                                <TableCell>{val.title}</TableCell>
                                <TableCell>
                                    <Button onClick={() => {delValue(val._id)}}>Del</Button>
                                    <Button onClick={() => {updateValue(val)}}>Update</Button>
                                </TableCell>
                            </TableRow>
                        )
                    })
                }
                
            </TableBody>

        </Table>
    </>
  )
}

export default Manage