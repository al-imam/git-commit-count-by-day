### install dependence

```sh
  // install zx globally use one of them
  $ yarn install
  $ npm run install
  $ npm i -g zx
```

<br>

### after installing dependence make script executable

```sh
  $ chmod +x ./script.mjs
```

<br>

### run script boom!

```sh
    without executable permission
  $ zx script.mjs

    with executable permission
  $ ./script.mjs
```

```sh
  $ zx script.mjs --line=5
    Total 861
    2023-02-21 - 26
    2023-02-20 - 23
    2023-02-19 - 18
    2023-02-18 - 19
    2023-02-17 - 14
```

<br>

### arguments optional\*

| option        | value     | default |
| ------------- | --------- | ------- |
| --line        | number    | 5       |
| --goodColor   | Hex color | #69FF94 |
| --badColor    | Hex color | #FF6E6E |
| --normalColor | Hex color | #F1FA8C |
| --dateColor   | Hex color | #D6ACFF |
| --dashColor   | Hex color | #FFFFFF |
| --errorColor  | Hex color | #FF5555 |

<br />

<p align="center">Thanks</p>
