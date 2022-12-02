export interface Review {
    id: number;
    description: string;
    liked: number;
    time: Date;
    app_user_id: number;
    place_id: number;
}
