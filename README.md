# PSG - Project Structure Generator

> A standalone toolkit for starting project.

## Installation

`npm i -g project-structure-generator`

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

`touch <filenames>`

If you pass filename, will create empty file in current working directory.

```
For example)
C:\PSG\src> touch app.js
```

Then, create "app.js" file in "PSG\src".

If you passed path with filename, then create empty file in specified path.

```
For example)
C:\PSG\src> psg touch ../.env
```

Then, create ".env" file in "PSG".

Also, you can pass multiple file names. In that case, a corresponding blank file will be created.  
  
```
For example)
C:\PSG\src> psg touch .env .gitignore README.md 
```

Then, create ".env", ".gitignore", "README.md" file in "C:\PSG\src".

### cat

`cat <filenames>`

If you pass filename, will show content written.  
Also, you can pass multiple file names.

### kill-server

`kill-server <port>`

If you pass port server you want to kill use it, will be killed.

## Available Options

PSG supports serveral options. But these options must be use alone, not use together command.

### -v, --version

`<service_name> -v`  
`<service_name> --version`

Show service version

### -h, --help

`<service_name> -h`  
`<service_name> --help`

Show avvaiable options and commands

## How to contribute
### Get code
1. Clone this repository
```
git clone https://github.com/MinJunSeo/project-structure-generator.git
cd project-structure-generator
```

2. Install dependencis
```
npm i
```

3. Install this code globally
```
npm i -g
```

Then, you can use commands.

### Code Reivews

All of code require review. You can use GitHub pull requests for this purpose. Consult <a href="https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/about-pull-requests" target="_blank">GitHub Pull Request Help</a> for more information on using pull requests.

### Bug Report or Suggestions for new function

You can use issues for this purpose. Consult <a href="https://docs.github.com/en/github/managing-your-work-on-github/about-issues" target="_blank">GitHub Issues Help</a> for more information on using issues.

## Develop Diary and Review

- velog: <a href="https://velog.io/@shin0805/series/PSG-%ED%9A%8C%EA%B3%A0%EB%A1%9D" target="_blank">PSG ?????????</a>