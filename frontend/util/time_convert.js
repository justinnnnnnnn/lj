// export function convertTimestamp(timestamp) {
//   var d = new Date(timestamp * 1000),
//     yyyy = d.getFullYear(),
//     mm = ("0" + (d.getMonth() + 1)).slice(-2),
//     dd = ("0" + d.getDate()).slice(-2),
//     hh = d.getHours(),
//     h = hh,
//     min = ("0" + d.getMinutes()).slice(-2),
//     ampm = "AM",
//     time;
//   if (hh > 12) {
//     h = hh - 12;
//     ampm = "PM";
//   } else if (hh === 12) {
//     h = 12;
//     ampm = "PM";
//   } else if (hh == 0) {
//     h = 12;
//   }
//   time = h + ":" + min + ":" + ampm + ", " + mm + "/" + dd + "/" + yyyy;
//   return time;
// }
export function convertTimestamp(timestamp) {
  var d = new Date(timestamp * 1000),
    yyyy = d.getFullYear(),
    mm = ("0" + (d.getMonth() + 1)).slice(-2),
    dd = ("0" + d.getDate()).slice(-2),
    hh = d.getHours(),
    h = hh,
    min = ("0" + d.getMinutes()).slice(-2),
    ampm = "AM",
    time;
  if (hh > 12) {
    h = hh - 12;
    ampm = "PM";
  } else if (hh === 12) {
    h = 12;
    ampm = "PM";
  } else if (hh == 0) {
    h = 12;
  }
  date = yyyy + "/" + dd + "/" + mm;
  return date;
}
