export default function getStringBetween(string, start = null, end = null){
    return string.slice(
        start === null ? 0 : string.indexOf(start) + start.length,
        end === null ? string.length : string.lastIndexOf(end)
    )
  }