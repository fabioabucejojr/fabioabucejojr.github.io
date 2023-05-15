import React from 'react';
import { createBoard } from '@wixc3/react-board';
import Footer from '../../../../script';

export default createBoard({
    name: 'Footer',
    Board: () => <Footer />,
    environmentProps: {
        canvasWidth: 715
    }
});
