import { Link } from "react-router-dom";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import { useSelector, useDispatch } from "react-redux";

import {
  StarToggleActon,
  ReadMailAction,
  ArchiveMailAction,
} from "../../Redux/Actions/Actions";
import "./SingleMail.scss";

import { TrashMailAction } from "../../Redux/Actions/Actions";

import DeleteIcon from "@mui/icons-material/Delete";
import ArchiveIcon from "@mui/icons-material/Archive";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";

function SingleMail({ curr, index }) {
  const dispatch = useDispatch();

  return (
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
        to={`id/${curr.id}`}
        className="link"
        onClick={() => dispatch(ReadMailAction(curr?.id))}
      >
        <div
          className={
            curr.read ? "single-mail-sender ReadMail" : "single-mail-sender"
          }
        >
          {curr?.from?.name}
        </div>

        <div className="single-mail-title-discription">
          <p
            className={
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
      <div
        className="single-mail-actions-btns"
        style={{ color: "rgba(138, 132, 132, 0.801)" }}
      >
        <div className="single-mail-action-single-btn">
          <ArchiveIcon onClick={() => dispatch(ArchiveMailAction(curr.id))} />
        </div>
        <div
          className="single-mail-action-single-btn"
          style={{ color: "rgba(138, 132, 132, 0.801)" }}
        >
          <DeleteIcon onClick={() => dispatch(TrashMailAction(curr.id))} />
        </div>
        <div className="single-mail-action-single-btn">
          {!curr.read ? (
            <MarkEmailReadIcon
              onClick={() => dispatch(ReadMailAction(curr?.id))}
              style={{ color: "rgba(138, 132, 132, 0.801)" }}
            />
          ) : (
            <MarkEmailReadIcon
              style={{ color: "green" }}
              onClick={() => dispatch(ReadMailAction(curr?.id))}
            />
          )}
        </div>
      </div>
      <div
        className={
          curr.read ? "single-mail-send-time ReadMail" : "single-mail-send-time"
        }
      >
        {curr.id} Jan &nbsp;
      </div>
    </div>
  );
}

export default SingleMail;
