"use client";
import "./style/custom-styles.css";
import React, { useEffect, useState } from "react";
import { Button, Select } from "antd";
import { getAllData, getDataById } from "../server/actions/actions";
import { I_select } from "../interface/interface";
import Tree, { DataNode } from "antd/es/tree";
import { buildTree } from "@/helpers/buildTree";
import { buildSeclect } from "@/helpers/buildSelect";

const YourComponent = () => {
    const [dataSelect, setDataSelect] = useState<I_select[]>([]);

    const [dataTree, setDataTree] = useState<DataNode>();

    const fetchData = async () => {
        const response = await getAllData();

        if (!response) return;

        const dataSelect = buildSeclect(response);
        const dataTree = buildTree(response);

        setDataSelect(dataSelect);

        if (!dataTree) return;

        setDataTree(dataTree as DataNode);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handlMyAction = () => {};

    const handleChange = async (value: string) => {
        const result = await getDataById(+value);

        const dataTree = buildTree(result, +value);

        if (!dataTree) return;

        setDataTree(dataTree as DataNode);
    };

    return (
        <div className="container">
            <div className="flex flex-col items-center ">
                <div>
                    <div className="flex items-center">
                        <span className="pr-2">Choose:</span>
                        {dataSelect.length > 0 && <Select defaultValue={dataSelect[0].label} style={{ width: 200 }} onChange={handleChange} options={dataSelect} />}
                    </div>
                    <div>
                        <Button onClick={handlMyAction} type="primary">
                            Primary Button
                        </Button>
                    </div>
                    <div className="pl-20">{dataTree && <Tree treeData={[dataTree]} />}</div>
                </div>
            </div>
        </div>
    );
};

export default YourComponent;
