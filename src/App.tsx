import React from "react";
import useThrottle from "./features/useThrottle";
import useFetchUser from "./features/useFetchUser";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "./features/components/Button.tsx";
import UserInfo from "./features/components/UserInfo.tsx";

const App: React.FC = (): JSX.Element => {
    const { item, fetchUser } = useFetchUser();

    const handleButtonClick = useThrottle(
        async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            event.stopPropagation();
            await fetchUser();
        },
        1000
    );

    return (
        <Container>
            <Typography variant="h4" component="h1" gutterBottom>
                Получить случайного пользователя
            </Typography>
            <Button onClick={handleButtonClick} />
            <UserInfo user={item} />
        </Container>
    );
};

export default App;
