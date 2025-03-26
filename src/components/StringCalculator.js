import React, { useState } from "react";
import { Container, TextareaAutosize, Button, Typography, Box } from "@mui/material";
import { add } from "../utils/CalculatorLogic";  // Import reusable logic

const StringCalculator = () => {
    const [input, setInput] = useState("");
    const [result, setResult] = useState(0);

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    const handleCalculate = () => {
        const sum = add(input);
        setResult(sum);
    };

    return (
        <Container maxWidth="sm" sx={{ mt: 5 }}>
            <Box display="flex" flexDirection="column" gap={2}>
                <Typography variant="h4">String Calculator</Typography>

                <TextareaAutosize
                    minRows={4}
                    placeholder="Enter numbers separated by commas"
                    value={input}
                    onChange={handleChange}
                    style={{
                        width: "100%",
                        padding: "10px",
                        fontSize: "16px",
                        borderRadius: "8px",
                        border: "1px solid #ccc",
                        outline: "none",
                    }}
                />

                <Button variant="contained" onClick={handleCalculate}>
                    Calculate
                </Button>

                <Typography variant="h6">Result: {result}</Typography>
            </Box>
        </Container>
    );
};

export default StringCalculator;
