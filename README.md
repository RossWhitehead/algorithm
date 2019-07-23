# Algorithms
Playing with algorithms

## Sort
* selection
* bubble
* insertion

## Search
* linear
* binary
* jump

## Data structures
* Queue
* FastQueue
* Stack
* LinkedList
* Tree

## VSCode launch config for debugging Mocha tests
```
{
    "type": "node",
    "request": "launch",
    "name": "Mocha Tests",
    "program": "${workspaceFolder}/node_modules/mocha/bin/_mocha",
    "args": [
        "--timeout",
        "999999",
        "--colors",
        "${workspaceFolder}/tests/**/*.spec.js"
    ],
    "internalConsoleOptions": "openOnSessionStart"
}
```
        
