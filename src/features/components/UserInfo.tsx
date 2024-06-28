import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {User} from "../useFetchUser.ts";

interface IUserInfoProps {
    user: User | null;
}

const UserInfo: React.FC<IUserInfoProps> = React.memo(({ user }) => {
    if (!user) return null;

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Имя пользователя</TableCell>
                        <TableCell>Номер телефона</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.phone}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
});

export default UserInfo;
