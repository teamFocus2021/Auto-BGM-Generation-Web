import React, { useEffect, useState } from 'react';
import { NextPageContext } from 'next';
import ReactPlayer from '../../components/result'

export default function Result() {

    return (
        <>          
            <div className="result_player">            
                <ReactPlayer />
            </div>

        </>
    )
}
