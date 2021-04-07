# PSG - Project Structure Generator

> A standalone toolkit for starting project.

## Installation
### Windows

`npm i -g`

## Before using service

If you want to use PSG service, you must execute this command.  
But, you can use any command with no enter this command other than `PSG make <filename>` command.

`psg init`

This is will generate a directory(named ".projectStructures") for management your project structure file.

> Note: Please enter this command at your project root directory.

### Rule for writing your project structure

You must follow these rules before writing your project structure at file.

1. If it's a directory, you must prefix it with /  
ex) /src, /.logs, /configs, ...

2. If it's a file, you must have an extension  
ex) index.js, README.md, ...

3. The file you write your project structure should have a .txt extension  
ex) sample.txt, projectStructre1.txt, ...

4. Make a relationship with the upper directory per 2 indentaion spaces  
```
ex)
/src
  image.js

Then, index.js is located in src directory.
```

## Available Commands

PSG supports serveral commands, for your project and manage file or directory.

### project-generate

> Note: You must execute psg init before executing this command.

`psg make <filename>`

If you pass filename that written at ./projectStructures, will generate for directory and file as is stated here.

If you already created file or directory stated, will be ignore.

### touch

`touch <filename>`

If you pass filename, will create empty file in current working directory.

```
For example)
PS PSG\src > touch app.js
```

Then, create "app.js" file in "PSG\src".

If you passed path with filename, then create empty file in specified path.

```
For example)
PS PSG\src > psg touch ../.env
```

Then, create ".env" file in "PSG".

## Available Options

PSG supports serveral options. But these options must be use alone, not use together command.

### -v, --version

`psg -v`  
`psg --version`

Show PSG service version

### -h, --help

`psg -h`
`psg --help`

Show PSG hint like this

```
Usage: app <command>

Options:
  -v, --version                 output the version number
  -h, --help                    display help for command 

Commands:
  init                          Project Structure Generator service init.
  project-generator <filename>  project structure generator
  mkdir <path>                  make new directory
  touch <filename>              make new empty file
```
