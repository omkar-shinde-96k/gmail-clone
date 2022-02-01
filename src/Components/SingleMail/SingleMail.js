import { Link } from "react-router-dom";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import { useSelector, useDispatch } from "react-redux";
import { StarToggleActon, ReadMailAction } from "../../Redux/Actions/Actions";
import "./SingleMail.scss";

import DeleteIcon from "@mui/icons-material/Delete";
import ArchiveIcon from "@mui/icons-material/Archive";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";

function SingleMail({ curr, index }) {
  const dispatch = useDispatch();

  return (
    <>
      <div key={index} className="single-mail">
        <div className="single-mail-checkbox-star-group">
          <div className="single-mail-checkbox-star">
            <input type="checkbox" />
          </div>
          <div
            className="single-mail-checkbox-star"
            onClick={() => dispatch(StarToggleActon(curr?.id))}
          >
            {!curr?.star ? (
              <StarBorderIcon style={{ color: "gray" }} />
            ) : (
              <StarIcon style={{ color: "orange" }} />
            )}
          </div>
        </div>
        <Link
          to={`/${curr.id}`}
          className="link"
          onClick={() => dispatch(ReadMailAction(curr?.id))}
        >
          <div className={
              curr.read ? "single-mail-sender ReadMail" : "single-mail-sender"
            }
          >
            {curr?.from?.name}
          </div>

          <div className="single-mail-title-discription">
            <p className={
                curr.read ? "single-mail-title ReadMail" : "single-mail-title"
              }
            >
              {curr?.title}
            </p>
            <p className="single-mail-discription">
              &nbsp; - {curr?.discription}
            </p>
          </div>
        </Link>
        <div className="single-mail-actions-btns">
          <div className="single-mail-action-single-btn">
            <ArchiveIcon />
          </div>
          <div className="single-mail-action-single-btn">
            <DeleteIcon />
          </div>
          <div className="single-mail-action-single-btn">
            <MarkEmailReadIcon />
          </div>
        </div>
        <div className="single-mail-send-time">{curr?.date} &nbsp;</div>
      </div>
    </>
  );
}

export default SingleMail;
