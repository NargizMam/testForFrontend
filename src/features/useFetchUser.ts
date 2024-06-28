import { useState, useCallback } from "react";
import {User} from "../types";

const URL = "https://jsonplaceholder.typicode.com/users";


interface UseFetchUserResult {
    item: User | null;
    fetchUser: () => Promise<void>;
}

const useFetchUser = (): UseFetchUserResult => {
    const [item, setItem] = useState<User | null>(null);
    const [cache, setCache] = useState<Map<number, User>>(new Map());

    const fetchUser = useCallback(async () => {
        try {
            const id = Math.floor(Math.random() * 10) + 1;

            if (cache.has(id)) {
                setItem(cache.get(id)!);
                return;
            }

            const response = await fetch(`${URL}/${id}`);
            if (!response.ok) {
                throw new Error("Не удалось получить пользователя");
            }
            const _user = (await response.json()) as User;
            setCache((prevCache) => new Map(prevCache).set(id, _user));
            setItem(_user);
        } catch (error) {
            console.error("Ошибка при получении пользователя:", error);
        }
    }, [cache]);

    return { item, fetchUser };
};

export default useFetchUser;
