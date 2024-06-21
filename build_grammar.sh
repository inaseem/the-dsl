#!/bin/bash

# Set the path to the antlr4 jar file
ANTLR_JAR="antlr-4.13.1-complete.jar"

# Set the path to the grammar file
GRAMMAR_FILE="grammar/FormulaExpressions.g4"

# Set the output directory for the generated files
OUTPUT_DIR="src"

# Set the target language
TARGET_LANGUAGE="TypeScript"

# Check if the antlr4 jar file exists
if [ ! -f "$ANTLR_JAR" ]; then
    echo "Error: antlr4 jar file not found!"
    exit 1
fi

# Check if the grammar file exists
if [ ! -f "$GRAMMAR_FILE" ]; then
    echo "Error: grammar file not found!"
    exit 1
fi

# Create the output directory if it doesn't exist
mkdir -p "$OUTPUT_DIR"

# Generate the lexer and parser files
# check if there is an error retuerned from the code below echo accordingly
java -jar "$ANTLR_JAR" -Dlanguage="$TARGET_LANGUAGE" -o "$OUTPUT_DIR" "$GRAMMAR_FILE" -visitor
if [ $? -ne 0 ]; then
    echo "Error: antlr4 failed to generate the lexer and parser files!"
    exit 1
fi

echo "Build completed successfully!"

