# algorithms
Playing with algorithms

## sort
* selection
* bubble
* insertion

## search
* linear
* binary
* jump

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
        
