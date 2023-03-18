import style from "./RightBody.module.css";
import EmailTitle from "./emailTitle";
import EmailContent from "./emailContent";
function RightBody() {
  return (
    <div className={style.emailBodyContainer}>
      <EmailTitle title="Lorem Ipsum" />
      <EmailContent />
    </div>
  );
}

export default RightBody;
