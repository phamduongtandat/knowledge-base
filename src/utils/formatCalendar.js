const formatCalendar = (date) => {

    const parseDate = new Date(date)
    const result = parseDate.getFullYear() + '-' + (parseDate.getMonth() + 1).toString().padStart(2, '0') + '-' + parseDate.getDate().toString().padStart(2, '0')
    return result
}
export default formatCalendar