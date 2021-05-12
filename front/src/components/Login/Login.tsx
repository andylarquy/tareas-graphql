import { Visibility, VisibilityOff } from '@material-ui/icons'
import { useState } from 'react'
import './Login.css'

import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  FilledInput,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  Typography
} from '@material-ui/core'

export default function Login() {

  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  function handleLogin() {
    alert('TODO: Tirar un POST y loguear')
  }

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="80vh">

      <Card style={{
        minWidth: 360,
        maxWidth: 600,
        backgroundColor: '#e3d9cc'
      }}>

        <CardContent>
          <Typography color="textPrimary" variant="h3" align="center">
            Login
        </Typography>

          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="5%"
            my={5}>
            <FormControl variant="filled">
              <InputLabel htmlFor="input-email">Email</InputLabel>
              <FilledInput
                className="input-field"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
          </Box>

          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="5%">

            <FormControl variant="filled">
              <InputLabel htmlFor="input-password">Password</InputLabel>
              <FilledInput
                className="input-field"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setShowPassword(!showPassword)}
                      onMouseDown={(e) => e.preventDefault()}
                      edge="end"
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </Box>

        </CardContent>
        <CardActions style={{ justifyContent: 'center', marginBottom: '4%' }}>
          <Button
            variant="contained"
            size="large"
            color="primary"
            onClick={handleLogin}>
            Ingresar
          </Button>
        </CardActions>

      </Card>
    </Box >
  )
}
