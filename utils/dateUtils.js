import moment from "moment/moment";
const formatDate = (date) => {
    return moment(new Date(date)).format("Do MMMM YYYY")
}

export {formatDate}