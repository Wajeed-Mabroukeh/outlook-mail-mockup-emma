import "./RightBody.css";
import EmailTitle from "./emailTitle";
import EmailContent from "./emailContent";
function RightBody() {
  return (
    <div className="emailBodyContainer">
      <EmailTitle />
      <EmailContent />
    </div>
  );
}

export default RightBody;
