import { Link } from "react-router-dom";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import { useSelector, useDispatch } from "react-redux";
import { StarToggleActon, ReadMailAction } from "../../Redux/Actions/Actions";

function SingleMail({ curr, index }) {
  const dispatch = useDispatch();

  return (
    <>
      <div key={index} className="AllMails-single-mail">
        <div className="AllMails-single-mail-checkbox-star">
          <input type="checkbox" />
        </div>
        <div
          className="AllMails-single-mail-checkbox-star"
          onClick={() => dispatch(StarToggleActon(curr?.id))}
        >
          {!curr?.star ? (
            <StarBorderIcon style={{ color: "gray" }} />
          ) : (
            <StarIcon style={{ color: "orange" }} />
          )}
        </div>
        <Link
          to="/id"
          className="link"
          onClick={() => dispatch(ReadMailAction(curr?.id))}
        >
          <div
            className={
              curr.read
                ? "AllMails-single-mail-sender ReadMail"
                : "AllMails-single-mail-sender"
            }
          >
            {curr?.from?.name}
          </div>
          <p
            className={
              curr.read
                ? "AllMails-single-mail-title ReadMail"
                : "AllMails-single-mail-title"
            }
          >
            {curr?.title?.slice(0, 55)}
          </p>
          <p
            className={
              curr.read
                ? "AllMails-single-mail-discription ReadMail"
                : "AllMails-single-mail-discription"
            }
          >
            &nbsp; - &nbsp; {curr?.discription?.slice(0, 55)}
          </p>
          <div className="AllMails-single-mail-send-time">
            {curr?.date} &nbsp;
          </div>
        </Link>
      </div>
    </>
  );
}

export default SingleMail;
