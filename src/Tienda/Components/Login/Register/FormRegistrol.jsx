import { appFirebase } from "../../../helpers/credencialesFirebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import Swal from "sweetalert2/dist/sweetalert2.js";
import { RegisteFire } from "../../../helpers/RegisterFire";
import { useNavigate } from "react-router-dom";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import "../../../../assets/UserLogin.css";


const auth = getAuth(appFirebase);
const provider = new GoogleAuthProvider(appFirebase);
export const FromRegistrol = () => {
  let navigate = useNavigate();
  let data;
  const handlerSubmit = async (e) => {
    e.preventDefault();
    const Correo = e.target.email.value;
    const Contraseña = e.target.password.value;
    const Apellido = e.target.apellido.value;
    const Nombre = e.target.name.value;
    const Dni = e.target.dni.value;
    createUserWithEmailAndPassword(auth, Correo, Contraseña)
      .then((userCredential) => {
        const user = userCredential.user;
        data = {
          Correo,
          Contraseña,
          Apellido,
          Nombre,
          uid: user.uid,
          accessToken: user.accessToken,
          proveedor: "Correo Electronico",
          fechaCreacion: user.metadata.creationTime,
          Avatar: "",
        };
        RegisteFire(data);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Swal.fire({
          icon: "error",
          title: "Ya existe el usuario <br>" + Correo,
          text: "Intente con otro correo!",
        });
      });
  };

  const RegistroGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        data = {
          Correo: user.email,
          Contraseña: "",
          Apellido: user.displayName,
          Nombre: user.displayName,
          uid: user.uid,
          accessToken: user.accessToken,
          proveedor: credential.providerId,
          fechaCreacion: user.metadata.creationTime,
          Avatar: user.photoURL,
        };

        localStorage.setItem("logeado", JSON.stringify(user));
        window.location.href = window.location.href;
        window.location.replace("/");
        RegisteFire(data);
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        return;
        // ...
      });
  };

  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "info.main" }}></Avatar>
        <Typography component="h1" variant="h5">
          Registrate
        </Typography>
        <Box component="form" noValidate sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="nombre"
                required
                fullWidth
                id="name"
                label="Nombre"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="apellido"
                label="Apellido"
                name="apellido"
                autoComplete="family-name"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Correo Electrónico"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                ng-model="password"
                validate-password=""
                data-toggle-password=""
                />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                className=""
                control={<Checkbox value="" color="primary" />}
                label="Autorizo recibir comunicaciones promocionales y autorizo el uso de mi información para fines adicionales."
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                className=""
                control={<Checkbox value="" color="primary" />}
                label="Declaro que he leído y acepto la nueva Política de Privacidad Términos y Condiciones."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="info"
            sx={{ mt: 3, mb: 2 }}
          >
            Completar Registro
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Ya tienes una cuenta? Iniciar Sesión
              </Link>
            </Grid>
          </Grid>
        </Box>        
        <Grid
                item
                xs={12}
                my={2}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Link onClick={RegistroGoogle} href="#" alignCenter className="botonG">
                  <img src="https://www.solarwinds.com/-/media/solarwinds/swdcv2/licensed-products/service-desk/integrations/sd-integrations-logo-google-single-sign-on.ashx?rev=e5d31b9fa12848d3bd44c8c960d0dd3b&hash=7BD65F7FD1EF91A9248E1C4167CB01E4" />
                  {"Iniciar Sesión con Google"}
                </Link>
              </Grid>
      </Box>
    </Container>
  );
};
