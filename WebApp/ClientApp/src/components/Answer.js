import { Accordion, AccordionDetails, AccordionSummary, Box, CardMedia, List, ListItem, Typography } from "@mui/material";
import React, { useState } from "react";
import { BASE_URL } from "../api";
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown'
import { green, red, grey } from "@mui/material/colors";

export default function Answer({ qnAnswers }) {
    const [expanded, setExpanded] = useState(null);

    const handleChange = (index) => {
        setExpanded(index === expanded ? null : index);
    };

    const markCorrectOrNot = (qna, idx) => {
        if ([qna.answer, qna.selected].includes(idx)) {
            return { sx: {color: qna.answer === idx ? green[500] : red[500]}}
        }
    }

    return (
        <Box sx={{ mt: 5, width: '100%', maxWidth: 640, mx: 'auto' }}>
            {
                qnAnswers.map((item, index) =>
                (<Accordion disableGutters key={index}
                    expanded={expanded === index} onChange={() => handleChange(index)}>
                    <AccordionSummary expandIcon={<ExpandCircleDownIcon
                        sx={{
                            color: item.answer === item.selected ? green[500] : red[500]
                        }}
                    />}>
                        <Typography sx={{ width: '90%', flexShrink: 0 }}>
                            {item.questionText}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ backgroundColor: grey[900] }}>
                        {item.image ?
                            <CardMedia component="img"
                                image={BASE_URL + 'images/' + item.image}
                                sx={{ m: '10px auto', width: 'auto' }}
                            /> : null}
                        <List>
                            {item.options.map((i, j) =>
                                <ListItem key={j}>
                                    <Typography {...markCorrectOrNot(item, j)}>
                                        <b>
                                            {String.fromCharCode(65 + j) + ". "}
                                        </b>{i}
                                    </Typography>
                                </ListItem>)}
                        </List>
                    </AccordionDetails>
                </Accordion>))
            }
        </Box>
    )
}
