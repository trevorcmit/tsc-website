import React from 'react';
import ListItem from "./list-item"


type ListingProps = {
    posts: {
        slug: string
        title: string
        date: string
        excerpt: string
        description: string
        timeToRead?: number
        tag1: string
        tag2: string
    }[]
    className?: string
}

const Listing = ({ posts, className = `` }: ListingProps) => (
    <div className={className}>
        {posts.map((post) => (
            <ListItem key={post.slug} post={post} />
        ))}
    </div>
)

export default Listing