import { NextResponse } from "next/server";
import { deletePosts, getById, updatePosts } from "../../../../../lib/data";
export const GET = async (req: Request, res: Response) => {
    const id = req.url.split("blogs/")[1];
    // get a post by id 
   
    try {
        const post = getById(id);
        if (!post) {
            return NextResponse.json({ message: "Error" }, {
                status: 404
            })
        }
        return NextResponse.json({ message: "OK", post }, {
            status: 200
        })
    } catch (error) {
        return NextResponse.json({ message: "Error", error }.error, {
            status: 500,
        });
    }
}


export const PUT = async (req: Request, res: Response) => {
    // update a post by id 
    const id = req.url.split("blogs/")[1];
    const { title, desc } = await req.json();
    try {
        const post = updatePosts(id, title, desc);
        return NextResponse.json({ message: "OK", post }, {
            status: 200
        })
    } catch(error) {
        return NextResponse.json({ message: "Error", error }.error, {
            status: 500,
        });
    }
}


export const DELETE = async (req: Request, res: Response) => {
    // DELETE a post by id

    const id = req.url.split("blogs/")[1];
    // get a post by id 
    try {
        deletePosts(id);
        return NextResponse.json({ message: "Deleted"  }, {
            status: 204
        })
    } catch (error) {
        return NextResponse.json({ message: "Error", error }.error, {
            status: 500,
        });
    }
}