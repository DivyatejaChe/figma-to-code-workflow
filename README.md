# Overview

- In this project, we will see how FIGMA Variables (that stores design tokens) are exported from FIGMA to Code using FIGMA API and Style-Dictionary

- FIGMA is considered as source of truth

## Tooling Required

- FIGMA: FIGMA Variables API only available for Enterprise Account with Editor Access
- StyelDictionary: Allows us to transform our design tokens into various formats.

# Workflow

## Step-1: Connecting to FIGMA Variables API

1. Create a new personal access token - Settings -> "Personal Access Tokens"
2. Identify the "fileKey" value for the specific design system from where we want to export FIGMA Variables
3. Run the following command: curl -H 'X-FIGMA-TOKEN: <personal access token>' 'https://api.figma.com/v1/files/:file_key/variables/local'
4. This generates a JSON-version of FIGMA Variables

## Step-2: Converting Variables to Tokens

To-be-expanded

## Step-3: Configuring Style-dictionary

To-be-expanded

## Step-4: Styles Generation

> npm run build
