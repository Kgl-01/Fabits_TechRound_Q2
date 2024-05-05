import * as styleX from "@stylexjs/stylex"
import ProfileImage from "../../assets/memoji.png"

const styles = styleX.create({
  card: {
    width: "100%",
    padding: "0.4rem 2rem 0.4rem 0.7rem",
    background: "#E7EDFC",
    borderRadius: "1rem",
    marginTop: "2.5rem",
  },
  username: {
    color: "#000",
    fontWeight: "600",
  },
  userMail: {
    color: "#5D5D5D",
    fontSize: "0.85rem",
  },
  figure: {
    display: "flex",
    margin: 0,
    gap: "0.7rem",
  },
})

const UserCard = () => {
  return (
    <div {...styleX.props(styles.card)}>
      <figure {...styleX.props(styles.figure)}>
        <img src={ProfileImage} />
        <figcaption>
          <div {...styleX.props(styles.username)}>Dhruv.S</div>
          <div {...styleX.props(styles.userMail)}>dhruv@fabits.com</div>
        </figcaption>
      </figure>
    </div>
  )
}

export default UserCard
