import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListSubheader,
  Typography,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import Api from "../api";
import Schedules from "../components/Home/Schedules";
function Home() {
  //ini state
  const [students, setStudents] = useState([]);

  //define method
  const fetchDataStudents = async () => {
    //fetch data from API with Axios
    await Api.get("/api/students").then((response) => {
      //assign response data to state "students"
      setStudents(response.data.data);
    });
  };

  //run hook useEffect
  useEffect(() => {
    //call method "fetchDataStudents"
    fetchDataStudents();
  }, []);
  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        paddingTop: 8,
        paddingBottom: 10,
      }}
    >
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Hi, Firdaus Riawan"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              ></Typography>
              {"Welcome Back!"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Schedules />
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        // style={{ marginTop: "10px" }}
        sx={{ marginTop: "10px" }}
      >
        <Grid item xs={6}>
          <Card sx={{ margin: 1, height: "240px", maxHeight: "240px" }}>
            <CardMedia
              sx={{ height: 140 }}
              image="https://media.istockphoto.com/id/1288965449/vector/graphic-designer-creating-logo-design-vector-flat-isometric-illustration.jpg?s=612x612&w=0&k=20&c=G-Nhw42gJpuf72LBeh7dXHZddr7UV7bTt72ZEsqevzY="
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="body1" component="div">
                Desain Grafis
              </Typography>
              <Typography variant="body2" color="text.secondary">
                CL Ari Setiawan
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card sx={{ margin: 1, height: "240px", maxHeight: "240px" }}>
            <CardMedia
              sx={{ height: 140 }}
              image="https://y6a2n7m3.rocketcdn.me/wp-content/uploads/2020/07/SRE.jpg"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="body1" component="div">
                Infrastruktur Jaringan
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Riswandi
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card sx={{ margin: 1, height: "240px", maxHeight: "240px" }}>
            <CardMedia
              sx={{ height: 140 }}
              image="https://img.freepik.com/premium-vector/modern-isometric-design-cloud-server-management-man-working-data-center-room-managing-data-cloud-server-vector-illustration_142963-86.jpg?w=2000"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="body1" component="div">
                Management Server
              </Typography>
              <Typography variant="body2" color="text.secondary">
                CL.Ari Setiawan
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card sx={{ margin: 1, height: "240px", maxHeight: "240px" }}>
            <CardMedia
              sx={{ height: 140 }}
              image="https://img.freepik.com/free-vector/programming-concept-illustration_114360-1351.jpg?w=2000"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="body1" component="div">
                Pemograman Dasar
              </Typography>
              <Typography variant="body2" color="text.secondary">
                John Doe
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <List
        sx={{
          width: "100%",
          bgcolor: "background.paper",
        }}
        subheader={<ListSubheader component="div">Students</ListSubheader>}
      >
        {students.length > 0 ? (
          students.map((student, index) => (
            <ListItem alignItems="flex-start" key={index}>
              <ListItemAvatar>
                <Avatar alt={student.name} src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary={student.name}
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.secondary"
                    >
                      Teknik Komputer dan Jaringan
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
          ))
        ) : (
          <span>Data tidak ada</span>
        )}
      </List>
    </Box>
  );
}

export default Home;
