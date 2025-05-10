import { useEffect, useState } from "react";
import styles from "./CommentList.module.css";
import { supabase } from "@/services/supabase";
import useModalFormStore from "@/store/ModalFormStore";
import { NotebookPen } from "lucide-react";
import PostComment from "../postComment/PostComment";
import AnimatedBorderButton from "../animatedBorderButton/AnimatedBorderButton";

const CommentList = () => {
  const [comments, setComments] = useState([]);
  const { btnModalState, setModalState } = useModalFormStore();

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
        <h3 className={styles.subtitle}>Libro de visitas</h3>
        {btnModalState ? (
          ""
        ) : (
          <AnimatedBorderButton
            type="submit"
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

export default CommentList;
