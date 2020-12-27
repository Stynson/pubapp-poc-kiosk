import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";
import React from "react";
import { useQuery } from "react-query";

async function fetchPlaces() {
    return (await fetch("https://pubapppoc.herokuapp.com/places")).json();
}

const Place = () => {
    const { isLoading, data } = useQuery("places", fetchPlaces);

    return (
        <>
            <TableContainer component={Paper}>
                <Table aria-label="places">
                    <TableHead>
                        <TableRow>
                            <TableCell>Név</TableCell>
                            <TableCell>Cím</TableCell>
                            <TableCell>Hosszúsági fok</TableCell>
                            <TableCell>Szélességi fok</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {isLoading ? (
                            <TableRow key={"loading"}>
                                <TableCell align="center" colSpan="4">
                                    Adatok betöltése
                                </TableCell>
                            </TableRow>
                        ) : data ? (
                            data.map((row) => (
                                <TableRow key={row.id} onClick={() => {
                                    window.location.href = "/place/234";
                                }}>
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell>{row.address}</TableCell>
                                    <TableCell>{row.longitude}</TableCell>
                                    <TableCell>{row.latitude}</TableCell>
                                </TableRow>
                            ))
                        ) : (
                            <TableRow key={"empty"}>
                                <TableCell align="center" colSpan="4">
                                    Nem található adat!
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
};

export default Place;
