export default async function handleProjectDelete(projectId: string): Promise<{ success: boolean; error?: string }> {
    try {
        const response = await fetch(`/api/project/${projectId}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            console.log("Project deleted successfully");
            return { success: true };
        } else {
            const data = await response.json();
            return { 
                success: false, 
                error: data.error || 'Failed to delete project' 
            };
        }
    } catch (error) {
        console.error('Error deleting project:', error);
        return { 
            success: false, 
            error: 'Failed to delete project' 
        };
    }
}