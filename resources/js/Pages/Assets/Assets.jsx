import React from "react";
import Types from "./Types";
import { Head } from "@inertiajs/react";

export default function Assets(props) {

    const { types } = props;
    return (
        <div className="container">
            <Head title="IR PMS - Assets" />
            <h1 className="text-center text-success">Assets</h1>
            <div className="row">
                <div className="col-4">
                    <Types types={types}/>
                </div>
            </div>


        </div>
    )
}
