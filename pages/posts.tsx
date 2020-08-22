import {MainLayout} from "../components/MainLayout"
import Link from "next/link"
import {MyPost} from "../interfaces/post"
import {NextPageContext} from "next";

interface PostsPageProps {
    posts: MyPost[]
}

export default function Posts({posts}: PostsPageProps) {
    return (
        <MainLayout title={'Post Page'}>
            <h1>Posts</h1>
        <ul>
            {posts.map(post => (
                <li key={post.id}><Link href={`/post/[id]`} as={`/post/${post.id}`}><a>{post.title}</a></Link></li>
            ))}
        </ul>
        </MainLayout>
    )
}

Posts.getInitialProps = async ({req}: NextPageContext) => {
    if(!req){
        return {posts: null}
    }
    const response = await fetch('http://localhost:4200/posts')
    const posts: MyPost[] = await response.json()
    return {
        posts
    }
}