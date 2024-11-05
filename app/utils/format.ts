export function formatViews(views: number): string {
    if (views >= 1000000) {
        return `${(views / 1000000).toFixed(1)}M views`;
    } else if (views >= 1000) {
        return `${(views / 1000).toFixed(1)}K views`;
    }
    return `${views} views`;
}

export function formatTimeAgo(date: Date): string {
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    
    if (days > 30) {
        return `${Math.floor(days / 30)} months ago`;
    } else if (days > 0) {
        return `${days} days ago`;
    }
    return 'Today';
}