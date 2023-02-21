import { Box, Card, CardContent, CardHeader, LinearProgress, List, ListItemButton, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { createAPIEndpoint, ENDPOINTS } from '../api'
import { getFormatedTime } from "../helper";
import useStateContext from "../Hooks/useStateContext";

export default function Quiz() {

    const [qns, setQns] = useState([])
    const [qnIndex, setQnIndex] = useState(0)
    const [timeTaken, setTimeTaken] = useState(0)
    const { context, setContext } = useStateContext()
    let timer;

    const startTimer = () => {
        timer = setInterval(() => {
            setTimeTaken(prev => prev + 1)
        }, [1000])
    }

    useEffect(() => {
        createAPIEndpoint(ENDPOINTS.question)
            .fetch()
            .then(res => {
                setQns(res.data)
                startTimer()
            })
            .catch(err => { console.log(err) })

        return () => { clearInterval(timer) }
    }, [])

    const updateAnswer = (id, optionIndex) => {
        const temp = [...context.selectedOptions]

        temp.push({
            id,
            selected: optionIndex
        })

        setContext({selectedOptions:[...temp]})
        // break point
    }

    return (
        qns.length !== 0
            ? <Card
                sx={{
                    maxWidth: 640, mx: 'auto', mt: 5,
                    '& .MuiCardHeader-action': { m: 0, alignSelf: 'center' }
                }}>
                <CardHeader
                    title={'Question ' + (qnIndex + 1) + ' of 5'}
                    action={<Typography>{getFormatedTime(timeTaken)}</Typography>}
                />
                <Box>
                    <LinearProgress variant="determinate" value={(qnIndex + 1) * 100 / 5} />
                </Box>
                <CardContent>
                    <Typography variant="h6">
                        {qns[qnIndex].questionText}
                    </Typography>
                    <List>
                        {qns[qnIndex].options.map((item, index) =>
                            <ListItemButton key={index} onClick={() => updateAnswer(qns[qnIndex].id, index)}
                                disableRipple>
                                <div>
                                    <b>{String.fromCharCode(65 + index) + ". "} </b>{item}
                                </div>
                            </ListItemButton>
                        )}
                    </List>
                </CardContent>
            </Card>

            : null
    )
}