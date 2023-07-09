import moment from "moment/moment";
import "moment/locale/es";

moment.locale("es", {
  relativeTime: {
    future: "en %s",
    past: "hace %s",
    s: "unos segundos",
    ss: "%ds",
    m: "un minuto",
    mm: "%dm",
    h: "una hora",
    hh: "%dh",
    d: "un día",
    dd: "%d",
    M: "un mes",
    MM: "%dM",
    y: "un año",
    yy: "%a",
  },
});

export const timeAgo = (timestamp) => {
  const timeAgo = moment(timestamp).fromNow();
  return timeAgo;
};
