import * as React from "react"
import { Link } from "gatsby"


type ListItemProps = {
    post: {
        slug: string
        title: string
        date: string
        excerpt: string
        description: string
        timeToRead?: number
        tag1: string
        tag2: string
    }
}

const ListItem = ({ post }: ListItemProps) => (
    <div>
        <Link to={post.slug} >
            {post.title}
        </Link>
        <p>
            <time>{post.date}</time>
            <text>{` — `}</text>
            <text>{post.tag1}</text>
            <text>{`, `}</text>
            <text>{post.tag2}</text>
        </p>
    </div>
)

export default ListItem