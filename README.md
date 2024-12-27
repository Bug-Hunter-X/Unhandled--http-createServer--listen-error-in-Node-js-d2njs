# Unhandled 'http.createServer' Listen Error in Node.js

This repository demonstrates a common yet subtle error in Node.js: unhandled errors during the `http.createServer().listen()` process.  The standard error handling mechanism for the server doesn't catch errors during the `listen()` call.

## Problem
The provided `bug.js` file showcases the issue.  The server starts and responds to requests normally. However, if the port is already in use or there's another issue preventing the server from listening, the application will not output any error and the 'error' event will never be triggered, leading to silent failures and potentially confusing debugging scenarios. 

## Solution
The `bugSolution.js` file offers a more robust approach by demonstrating error handling using the 'error' event of the server and more informative logging. This solution directly addresses the problem of the 'listen' method not emitting errors when there is something wrong.