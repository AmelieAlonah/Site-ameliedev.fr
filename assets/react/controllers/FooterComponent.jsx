import React from 'react';
import * as Separator from '@radix-ui/react-separator';
import './FooterComponentStyle.css';

const FooterComponent = () => {
    return (
        <div className="Footer">
            <div style={{ width: '100%', maxWidth: 300, margin: '0 15px' }}>
                <div className="Text" style={{ fontWeight: 500 }}>
                    Ameliedev
                </div>
                <div className="Text">Site en cours de construction.</div>
                <Separator.Root className="SeparatorRoot" style={{ margin: '15px 0' }} />
                <div style={{ display: 'flex', height: 20, alignItems: 'center' }}>
                    <a target="_blank" href="https://noob-de-dev.fr/" className="Text">Blog</a>
                    <Separator.Root
                        className="SeparatorRoot"
                        decorative
                        orientation="vertical"
                        style={{ margin: '0 15px' }}
                    />
                    <div className="Text">CGU (à venir)</div>
                    <Separator.Root
                        className="SeparatorRoot"
                        decorative
                        orientation="vertical"
                        style={{ margin: '0 15px' }}
                    />
                    <div className="Text">CGV (à venir)</div>
                </div>
            </div>
        </div>
);

}

export default FooterComponent;