### install dependence

```sh
  # install zx globally
  $ npm i -g zx
  # or install locally
  $ npm i
```

<br>

<br>

### run script boom!

```sh
  #  without executable permission
  $ zx index.mjs

  # with executable permission
  $ ./index.mjs
```

```sh
  $ zx index.mjs --line=5
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
