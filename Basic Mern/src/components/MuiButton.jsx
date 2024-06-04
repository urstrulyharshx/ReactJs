import {Stack, Button } from "@mui/material"

export const MuiButton = () => {
  return (
    <Stack spacing={4}>
    <Stack spacing={2} direction={"row"} className="align-center justify-center top-10">
         <Button variant="contained" href="www.google.com">Contained</Button>
        <Button variant="text">Text</Button>
        <Button variant="outlined">Outlined</Button>
    </Stack>
    <Stack spacing={2} direction={"row"}>
        <Button variant="contained" color="primary">Primary</Button>
        <Button variant="contained" color="secondary">Secindary</Button>
        <Button variant="contained" color="error">Error</Button>
        <Button variant="contained" color="warning">Warning</Button>
        <Button variant="contained" color="info">Info</Button>
        <Button variant="contained" color="success">Success</Button>
    </Stack>
    <Stack display={"block"} direction={"row"} spacing={2}>
        <Button variant="contained" size="small">Small</Button><Button variant="contained" size="medium">Medium</Button><Button variant="contained" size="large"></Button>
    </Stack>
    </Stack>
  )
}
