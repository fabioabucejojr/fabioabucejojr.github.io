import React from 'react'
import { createBoard } from '@wixc3/react-board';
import Script from '../../../script';

export default createBoard({
    name: 'About',
    Board: () => <div>
        <Script />
    </div>
});
