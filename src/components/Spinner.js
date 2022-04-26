
import React, { Component } from 'react';
import loading from './loading.gif'

export class Spinner extends Component {
    static propTypes = {};

    render() {
        return (
            <div className='text-center' style={{marginTop: "250px"}}>
                <img className='my-3' src={loading} alt="loading" />

            </div>

        );
    }
}

export default Spinner;
