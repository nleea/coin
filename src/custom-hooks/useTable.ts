import { useState, useEffect } from "react";

const calculateRange = (data: Array<any>, rowsPerPage: number) => {
    const range = [];
    const num = Math.ceil(data.length / rowsPerPage);
    for (let i = 1; i <= num; i++) {
        range.push(i);
    }
    return range;
};

const sliceData = (data: Array<any>, page: number, rowsPerPage: number) => {
    return data.slice((page - 1) * rowsPerPage, page * rowsPerPage);
};

const useTable = (data: Array<any>, page: number, rowsPerPage: number) => {
    const [tableRange, setTableRange] = useState<Array<any>>([]);
    const [slice, setSlice] = useState<Array<any>>([]);

    useEffect(() => {
        const range = calculateRange(data, rowsPerPage);
        setTableRange([...range]);

        const slice = sliceData(data, page, rowsPerPage);
        setSlice([...slice]);
    }, [data, setTableRange, page, setSlice, rowsPerPage]);

    return { slice, range: tableRange };
};

export { useTable }
