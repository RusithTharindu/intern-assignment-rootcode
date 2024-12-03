import { useState } from "react";
import { Post } from "../types/index"
import Button from "./Button";
import { MessageCircle } from 'lucide-react';
import { MessageCircleDashed } from 'lucide-react';


interface PostListProps {
    posts: Post[];
}

const PostList: React.FC<PostListProps> = ({ posts }) => {
    const [selectedPostId, setSelectedPostId] = useState<number | null>(null);

    return(
        <div className="w-full flex flex-col justify-center">
            <div className="w-full flex flex-col">
                <h1 className="text-[30px] mt-10 mb-2 font-bold">Recent Posts</h1>
                <div className="w-full mb-6 h-[2px] bg-slate-500/30"></div>
            </div>

            {posts.map(post => (
                <div key={post.id} className="mb-10 py-4 px-6 border border-slate-500/80 hover:border-slate-300 rounded-xl text-black">
                    <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                    <p className="text-slate-600">{post.body}</p>

                    <div className='flex justify-end mt-5'>
                        <Button onClickFunc={() => setSelectedPostId(selectedPostId === post.id ? null : post.id)}
                        >
                            {selectedPostId === post.id ? <MessageCircleDashed size={24}/> : <MessageCircle size={24}/> }
                        </Button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default PostList;