import { useEffect, useState } from "react";
import styles from "./Comments.module.css";
import { supabase } from "@/services/supabase";
import useModalFormStore from "@/store/ModalFormStore";
import PostComment from "@/components/templates/postComment/PostComment";
import AnimatedBorderButton from "@/components/atoms/animatedBorderButton/AnimatedBorderButton";
import { useTranslation } from "react-i18next";
import { SendHorizontal } from "lucide-react";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const { btnModalState, commentDraft, setCommentDraft, setModalState } =
    useModalFormStore();
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
      </div>
      <div className={styles.guestbookShell}>
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
        <div className={styles.composer}>
          <div className={styles.composerFade} aria-hidden="true" />
          <input
            type="text"
            name="commentDraft"
            className={styles.composerField}
            aria-label={t("guestbook.comment-placeholder")}
            placeholder={t("guestbook.comment-placeholder")}
            value={commentDraft}
            onChange={(e) => setCommentDraft(e.target.value)}
          />
          {!btnModalState && (
            <AnimatedBorderButton
              onClick={() => setModalState(true)}
              small={true}
              className={styles.btn}
              disabled={commentDraft.trim() === ""}
            >
              <SendHorizontal size={20} />
            </AnimatedBorderButton>
          )}
        </div>
      </div>
    </>
  );
};

export default Comments;
