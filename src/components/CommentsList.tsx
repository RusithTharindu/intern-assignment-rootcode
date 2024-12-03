"use client";

import { useState, useEffect } from "react";
import { Comment } from "../types/index";
import Button from "./Button";
import { Pencil } from 'lucide-react';
import { Save } from 'lucide-react';
import { CirclePlus } from 'lucide-react';

interface CommentsListProps {
  postId: number;
}

const CommentsList: React.FC<CommentsListProps> = ({ postId }) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState<string>("");
  const [editCommentId, setEditCommentId] = useState<number | null>(null);
  const [updatedComment, setUpdatedComment] = useState<string>("");

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
      .then((res) => res.json())
      .then((data) => setComments(data))
      .catch((err) =>
        console.log("Error occured while fetching the comments: ", err)
      );
  }, [postId]);

  const handleAddingComment = () => {
    const newCommentData: Comment = {
      id: comments.length + 1,
      body: newComment,
      postId,
      name: "Groot",
      email: "test@root.com",
    };
    setComments([...comments, newCommentData]);
    setNewComment("");
  };

  const handleSavingEdit = (commentId: number) => {
    const updatedComments = comments.map((comment) =>
      comment.id === commentId ? { ...comment, body: updatedComment } : comment
    );
    setComments(updatedComments);
    setEditCommentId(null);
  };

  return (
    <div className="p-5">
        <p className="text-[20px] font-bold">Comments</p>
      {comments.map((comment) => (
        <div key={comment.id} className="border my-2 border-white/20 p-2">
          {editCommentId === comment.id ? (
            <textarea
              value={updatedComment}
              onChange={(e) => setUpdatedComment(e.target.value)}
              className="w-full border p-4 mb-2 text-black min-h-[120px] border-black rounded-xl"
            />
          ) : (
            <div className="border-t border-b py-2">
                <p className="text-[12px] my-2 text-slate-600/50">{comment.email}</p>
                <p>{comment.body}</p>
            </div>
          )}
          <div className="flex justify-end mt-2">
            {editCommentId === comment.id ? (
              <button
                onClick={() => handleSavingEdit(comment.id)}
                className="text-blue-500 hover:text-blue-500/50 hover:bg-slate-500/20 border p-[5px] rounded-full flex items-center justify-center"
              >
                <Save size={18}/>
                <p className="ml-2 text-[15px]">Save Comment</p>
              </button>
            ) : (
              <button
                onClick={() => {
                  setEditCommentId(comment.id);
                  setUpdatedComment(comment.body);
                }}
                className="text-blue-500 hover:text-blue-500/50 hover:bg-slate-500/20 border p-[5px] rounded-full flex items-center justify-center"
              >
                <Pencil size={18}/>
                <p className="ml-2 text-[15px]">Edit Comment</p>
              </button>
            )}
          </div>
        </div>
      ))}
      <div className="mb-4 border p-4">
        <p className="font-bold mb-2">Add a Comment</p>
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a new comment..."
          className="w-full border p-4 rounded border-black mb-2"
        />
        <div className="flex justify-end">
          <Button onClickFunc={handleAddingComment} classes={['flex','jusitfy-center', 'items-center', 'gap-2']}>
            <CirclePlus size={24}/>
            <p>Add Comment</p>
          </Button>
        </div>
      </div>
    </div>
  );
};
export default CommentsList;
