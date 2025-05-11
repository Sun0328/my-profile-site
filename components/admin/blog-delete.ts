export default async function handleBlogDelete(blogId: string): Promise<{ success: boolean; error?: string }> {
    try {
        const response = await fetch(`/api/blog/${blogId}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            console.log("Blog deleted successfully");
            return { success: true };
        } else {
            const data = await response.json();
            return { 
                success: false, 
                error: data.error || 'Failed to delete blog' 
            };
        }
    } catch (error) {
        console.error('Error deleting blog:', error);
        return { 
            success: false, 
            error: 'Failed to delete blog' 
        };
    }
}