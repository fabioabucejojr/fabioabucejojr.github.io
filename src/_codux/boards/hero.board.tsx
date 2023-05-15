import React from 'react'
import { createBoard } from '@wixc3/react-board';
import Hero from '../../../script';

export default createBoard({
    name: 'Hero',
    Board: () => <div>
        <Script />
    </div>,
    environmentProps: {
        canvasWidth: 988
    }
});
