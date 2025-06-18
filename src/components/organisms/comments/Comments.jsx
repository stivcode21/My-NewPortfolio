import { useEffect, useState } from "react";
import styles from "./Comments.module.css";
import { supabase } from "@/services/supabase";
import useModalFormStore from "@/store/ModalFormStore";
import { NotebookPen } from "lucide-react";
import PostComment from "../../atoms/postComment/PostComment";
import AnimatedBorderButton from "../../atoms/animatedBorderButton/AnimatedBorderButton";
import { useTranslation } from "react-i18next";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const { btnModalState, setModalState } = useModalFormStore();
  const { t } = useTranslation("contact");

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const { data, error } = await supabase
          .from("comments")
          .select("*")
          .eq("confirmed", true); // Only fetch confirmed comments

        if (error) throw error;
        setComments(data);
      } catch (error) {
        console.error("Error fetching comments:", error.message);
      }
    };

    fetchComments();
  }, []);

  return (
    <>
      <div className={styles.head}>
        <h3 className={styles.subtitle}>{t("guestbook.title")}</h3>
        {btnModalState ? (
          ""
        ) : (
          <AnimatedBorderButton
            onClick={() => setModalState(true)}
            small={true}
            className={styles.btn}
          >
            <NotebookPen size={20} />
          </AnimatedBorderButton>
        )}
      </div>
      <div className={styles.guestbook}>
        {[...comments]
          .sort((a, b) => a.id - b.id)
          .map((comment) => (
            <PostComment
              key={comment.id}
              avatar={comment.image}
              username={comment.name}
              comment={comment.comment}
              date={comment.date}
              pinned={comment.pinned}
              link={comment.url}
            />
          ))}
      </div>
    </>
  );
};

export default Comments;
