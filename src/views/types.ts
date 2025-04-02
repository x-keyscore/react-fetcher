export interface User {
    picture: string;
    email: string;
    name: {
        title: string;
        first: string;
        last: string;
    };
    gender: string;
    location: {
        city: string;
        state: string;
        country: string;
    }
}

export type UserState = User | "unset" | "error";