
import { Box, Container, TextField, Typography, Button, Alert } from "@mui/material";
import { FormControlLabel, Checkbox, Link as MuiLink } from "@mui/material";
import Icon from "./Icon.png";
import { useEffect, useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router";
import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup"
import { loginSchema } from "../../validations/authSchemas";
import axios from "axios";

export default function Register() {

    useEffect(() => {
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "";
        };
    }, []);
    const navigate = useNavigate();
    const [serverError, setServerError] = useState(null);
    const [succes, setucces] = useState(false);

    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
        resolver: yupResolver(loginSchema), mode: "onBlur"
    })
    const onSubmit = async (data) => {
        console.log(data);
        try {
            const response = await axios.post('https://knowledgeshop.runasp.net/api/auth/Account/Login', data)
            setucces(true);
            navigate('/home');
        } catch (err) {
            console.log(err.response);
            setServerError("Registeration Failed");
        }
    }



  return
}
