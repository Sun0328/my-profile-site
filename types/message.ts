export interface Message {
    id: string;
    created_at: string;
    content: string;
    sender?: string;
    sender_avatar?: string;
}