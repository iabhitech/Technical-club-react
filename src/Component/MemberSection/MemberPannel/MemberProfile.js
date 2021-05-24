import { Row, Col, Form,Container } from "react-bootstrap";
import style from "./memberprofile.module.css";
const MemberProfile = () => {
  return (
    <div className={style.memberprofile}>
        <Row>
                <input type="text" className={style.forminputtag} placeholder="Your Proffesion"/>
        </Row>
    </div>
  );
};
export default MemberProfile;
