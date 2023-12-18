export interface MainPageSchema {
    users: User[];
    isLoading: boolean;
    page: number;
}

export enum Color {
    RED,
    GREEN,
    BLUE,
}

export interface User {
    // Любимый цвет
    color: Color;
    // Полное имя
    name: string;
    // Скорость выполнения заезда
    speed: number;
    // Время заезда. Выражено в миллисекундах
    time: number;
}
