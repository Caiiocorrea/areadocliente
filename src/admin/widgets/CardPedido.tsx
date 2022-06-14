import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Description from "@material-ui/icons/Description";
import React from "react";
// import { useTranslation } from "react-i18next";
import { Link as RouterLink } from "react-router-dom";

const meetings = [
  {
    id: "1",
    person: "Código Pedido",
    date: "Previsão de entrega",
    image: "img/portrait-1.jpg",
  }
];

const MeetingWidgets = () => {
  // const { t } = useTranslation();

  return (
    <React.Fragment>
      <Typography component="h2" marginBottom={3} variant="h2">
        {"Detalhes do Pedido"}
      </Typography>
      {meetings.map((meeting) => (
        <Card key={meeting.id}>
          <CardContent sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            {/* <Avatar
              alt={`${meeting.id} avatar`}
              src={meeting.image}
              sx={{ mr: 5 }}
            /> */}
            <Box sx={{ flexGrow: 6 }}>
              {/* CÓDIGO PEDIDO */}
              <Typography component="div" variant="h6">
                {meeting.person}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="div" marginBottom={2}>
                {"#112458"}
              </Typography>

              {/* DATA DA COMPRA */}
              <Typography component="div" variant="h6">
                {"Data compra"}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="div" marginBottom={2}>
                {"01/05/2022"}
              </Typography>

              {/* FORMA DE PAGAMENTO */}
              <Typography component="div" variant="h6">
                {"Forma Pagamento"}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="div" marginBottom={2}>
                {"Cartão de Crédito"}
              </Typography>
            </Box>

            <Box sx={{ flexGrow: 1 }}>
              <Typography component="div" variant="h6">
                {meeting.date}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="div" marginBottom={8}>
                {"08/06/2022"}
              </Typography>

              <IconButton
                aria-label="PDF"
                component={RouterLink}
                to={`/${process.env.PUBLIC_URL}/admin/profile`}
              >
                <SaveAlt sx={{ fontSize: 50 }}/>
              </IconButton>

              <IconButton
                aria-label="NF"
                component={RouterLink}
                to={`/${process.env.PUBLIC_URL}/admin/profile`}
              >
                <Description sx={{ fontSize: 50 }}/>
              </IconButton>

              {/* BOTOÇÕES DE AÇÃO */}
            </Box>
            {/* <IconButton
              aria-label="Go to meeting details"
              component={RouterLink}
              to={`/${process.env.PUBLIC_URL}/admin/profile`}
            >
              <ChevronRightIcon />
            </IconButton> */}

          </CardContent>
        </Card>
      ))}
    </React.Fragment>
  );
};

export default MeetingWidgets;
