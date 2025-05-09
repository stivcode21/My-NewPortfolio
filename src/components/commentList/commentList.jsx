import React, { useEffect, useState } from "react";
import styles from "./commentList.module.css";
import CommentCard from "../commentCard/commentCard";
import { supabase } from "@/services/supabase";
import { NotebookPen } from "lucide-react";
import useModalFormStore from "@/store/ModalFormStore";
import ButtonBorder from "../buttonBorder/buttonBorder";

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
          <ButtonBorder
            type="submit"
            onClick={() => setModalState(true)}
            small={true}
            className={styles.btn}
          >
            <NotebookPen size={20} />
          </ButtonBorder>
        )}
      </div>
      <div className={styles.guestbook}>
        {[...comments]
          .sort((a, b) => a.id - b.id)
          .map((comment) => (
            <CommentCard
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
