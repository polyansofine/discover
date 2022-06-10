import React, { useState, Fragment, useEffect } from "react";

const CollectAddress = (props) => {
    const { setCollectAdr, collectAddress } = props
    return <>
        <div style={{ height: 'auto' }} className="package-detail collectaddress">
            <div className="row" style={{ marginRight: 0, marginLeft: 0, textAlign: 'center', alignItems: 'center', marginBottom: 10 }}>

                <>
                    <div className="row">
                        <div className="col-5">
                            <p>
                                Address:
                            </p>
                        </div>
                        <div className="col-5">
                            <input type="text" value={collectAddress} onChange={(e) => { setCollectAdr(e) }}/>
                        </div>
                    </div>

                </>
            </div>
        </div>
    </>
}

export default CollectAddress