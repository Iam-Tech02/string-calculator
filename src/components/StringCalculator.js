import React, { useState } from "react";
import { Container, TextareaAutosize, Button, Typography, Box, Alert } from "@mui/material";
import { add } from "../utils/CalculatorLogic";

const StringCalculator = () => {
    const [input, setInput] = useState("");
    const [result, setResult] = useState(null);
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setInput(e.target.value);
        setError("");  
    };

    const handleCalculate = () => {
        try {
            const sum = add(input);
            setResult(sum);
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <Container maxWidth="sm" sx={{ mt: 5 }}>
            <Box display="flex" flexDirection="column" gap={2}>
                <Typography variant="h4">String Calculator</Typography>

                <TextareaAutosize
                    minRows={4}
                    placeholder="Enter numbers (use // for custom delimiters)"
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

                {error && <Alert severity="error">{error}</Alert>}
                {result !== null && <Typography variant="h6">Result: {result}</Typography>}
            </Box>
        </Container>
    );
};

export default StringCalculator;
