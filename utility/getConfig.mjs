export default ({
  line = 5,
  goodColor = "#69ff94",
  normalColor = "#f1fa8c",
  badColor = "#ff6e6e",
  dateColor = "#d6acff",
  dashColor = "#fff",
  errorColor = "#ff5555",
}) => ({
  line: line - 1,
  goodColor,
  normalColor,
  badColor,
  dateColor,
  dashColor,
  errorColor,
});
