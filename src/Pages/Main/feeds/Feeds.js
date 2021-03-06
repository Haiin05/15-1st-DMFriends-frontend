import React, { Component } from "react";
import "./Feeds.scss";
import Slider from "react-slick";
import "../Main.scss";
<<<<<<< HEAD
import { mainAPI } from "../../../config";
=======

>>>>>>> master
class Feeds extends Component {
  constructor() {
    super();
    this.share = React.createRef();
  }
  state = {
    feedImgs: [],
  };
<<<<<<< HEAD
=======

>>>>>>> master
  modalOn = () => {
    this.share.current.style.display = "block";
  };
  closeModal = () => {
    this.share.current.style.display = "none";
  };
<<<<<<< HEAD
  changeHeart = () => {
    const { feed } = this.props;
    feed.if_i_liked = !feed.if_i_liked;
    fetch(`${mainAPI}/board/main?id={feed.id}&if_i_liked={feed.if_i_liked}`)
      .then((result) => result.json())
      .then((result) => {
        this.setState({
          feeds: result.board_list,
        });
      });
  };
=======

  changeHeart = () => {
    const { feed } = this.props;

    this.setState({
      feed: feed,
    });
  };

>>>>>>> master
  render() {
    const { feed } = this.props;
    const settings = {
      dots: true,
      arrows: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <>
        <article className="feed">
          <section className="mainHeader">
            <div className="headerInfoBox">
              <div className="headerInfoImgBox">
                <img className="headerInfoImg" src={feed.thumb_image} alt="profile" />
              </div>
              <div className="headerInfoText">
                <div className="headerInfoId">{feed.uploader}</div>
<<<<<<< HEAD
                <div className="headerInfoTime">{feed.created_at.substring(8, 10)}시간 전</div>
=======
                <div className="headerInfoTime">{feed.created_at}&nbsp;전</div>
>>>>>>> master
              </div>
            </div>
          </section>
          <section className="mainFeed">
            <div className="feedImgBox">
              <Slider {...settings}>
                {feed.board_images &&
                  feed.board_images.map((img, idx) => (
                    <div className="feedImgMiniBox" key={idx}>
                      <img className="feedImg" src={img} alt="profile" />
                    </div>
                  ))}
              </Slider>
            </div>
          </section>
          <section className="feedIconBox">
            <div className="feedIconLeft">
              <img
                className="likeIcon"
                onClick={this.changeHeart}
<<<<<<< HEAD
                src={feed.if_i_liked ? "images/chaebinhan/Main/heart.png" : "images/chaebinhan/Main/like-black.png"}
=======
                src={feed.board_likes ? "images/chaebinhan/Main/heart.png" : "images/chaebinhan/Main/like-black.png"}
>>>>>>> master
                alt="like"
                value={feed.id}
              />
              <img className="replyIcon" src="images\chaebinhan\Main\reply-black.png" alt="reply" />
            </div>
            <div className="feedIconRight">
              <button
                onClick={this.modalOn}
                value={feed.id}
                type="button"
                className="feedShareBtn"
                id="feedShareModalBtn"
              >
                <img className="shareIcon" src="images\chaebinhan\Main\share-black.png" alt="reply" />
              </button>
            </div>
            <div id={feed.id} className="myModal" value={feed.id} ref={this.share}>
              <div className="modal-content">
                <div className="modalSectionHight">
                  <div className="shareText">공유하기</div>
                  <div className="modalSectiondawn">
                    <img className="shareIconItem" src="images\chaebinhan\Main\sns-kakao-talk-60.png" alt="kakao" />
                    <img className="shareIconItem" src="images\chaebinhan\Main\sns-facebook-60.png" alt="facebook" />
                    <img className="shareIconItem" src="images\chaebinhan\Main\sns-url-60.png" alt="share" />
                  </div>
                  <div className="close" value={feed.id} onClick={this.closeModal}>
                    닫기
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="bodyContentsBox">
            <div className="goodBox">
              <div className="good">좋아요</div>
              <div className="goodCount">{feed.board_likes}개</div>
            </div>
            <p className="bodyTitle">{feed.title}</p>
            <p className="bodyContents">{feed.content}</p>
          </section>
        </article>
      </>
    );
  }
}
<<<<<<< HEAD
=======

>>>>>>> master
export default Feeds;
