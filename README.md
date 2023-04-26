# Process big file

<h2>Version 1.0</h2>

<h2>What is it?</h2>

An <strong>Process Big File</strong> program is program, that will try to read the contents of the file(free_company_dataser.csv) into memory.

<h2>How to run the program?</h2>

If you want to run this program, you need install
node.js packet.
After you should write in terminal </br>

`node index.js`

<h2>Run result example</h2>

```
node index.js 

Error: Cannot create a string longer than 0x1fffffe8 characters
    at Object.slice (node:buffer:594:37)
    at Buffer.toString (node:buffer:812:14)
    at FSReqCallback.readFileAfterClose [as oncomplete] (node:internal/fs/read_file_context:63:23)
    
```
