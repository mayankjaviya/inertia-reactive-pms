import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm } from "@inertiajs/react";
import React, { useEffect, useState } from "react";

export default function Types(props) {
    const { types } = props;
    const [ showNewType, setShowNewType ] = useState(false);
    const { data, setData, post, processing, errors , reset , clearErrors } = useForm({
        name: "",
        color: ""
    });

    useEffect(() => {
        setTimeout(() => {
            clearErrors();
        },5000);
    },[errors]);

    const saveType = (e) => {
        e.preventDefault();
        post('/types',{
            onSuccess: () => {
                reset();
                setShowNewType(false)
            }
        });

    }


    return (
        <>
            <h5 className="text-center text-success">Types <span className="ms-2" role="button" onClick={() => setShowNewType(!showNewType)}><FontAwesomeIcon className="text-success" icon={faSquarePlus}/></span></h5>
            <div className=" border rounded p-2">
                { showNewType &&
                        <form onSubmit={saveType}>
                    <div className="d-flex align-items-center justify-content-center">
                        <div className="card w-100">
                            <div className="card-body py-2">
                                <div className="d-flex align-items-center row ">
                                    <div className="col-9">
                                        <input type="text" name="name" id="name" className="form-control" value={data.name} onChange={e => setData('name',e.target.value)} required/>
                                    </div>
                                    <div className="col-3 px-2">
                                        <input type="color" name="name" id="name" className="form-control p-0" value={data.color} onChange={e => setData('color',e.target.value)}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="btn text-success ms-2 fs-5" disabled={processing}>Add</button>
                    </div>
                    { errors.name && <span className="text-danger">{errors.name}</span> }
                        </form>
                }

                <div className="m-2 d-flex justify-content-center flex-wrap">
                    { types.map((type,index) => (
                        <span className="badge m-2" style={{ backgroundColor : type.color }} key={index}><h6 className="mb-0">{type.name + "(" + type.tasks_count + ")"}</h6></span>
                    )) }
                </div>
            </div>
        </>
    )

}
