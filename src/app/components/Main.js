import React from "react";

export const Main = (props) => {
        return (
            <div>
                <div className="row" style={{marginTop:20}}>

                </div>
                <div className="row">
                    <div className="col-xs-12">
                        <button
                            className="btn btn-primary"
                            onClick={() => props.changeUsername('Anna')}>Change the Username</button>
                    </div>
                </div>
            </div>
        );
}
