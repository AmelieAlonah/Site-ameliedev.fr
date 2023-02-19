import React from 'react';
import * as HoverCard from '@radix-ui/react-hover-card';
import PPAlonah from '../../images/pp-alonah.png';
import './CardComponentStyle.css';

const HoverCardDemo = () => (
    <HoverCard.Root>
        <HoverCard.Trigger asChild>
            <a
                className="ImageTrigger"
                href="https://twitter.com/AlonahAmelie"
                target="_blank"
                rel="noreferrer noopener"
            >
                <img
                    className="Image normal"
                    src={PPAlonah}
                    alt="AlonahAmelie"
                />
            </a>
        </HoverCard.Trigger>
        <HoverCard.Portal>
            <HoverCard.Content className="HoverCardContent" sideOffset={5}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
                    <img
                        className="Image large"
                        src={PPAlonah}
                        alt="AlonahAmelie"
                    />
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 15 }}>
                        <div>
                            <div className="Text bold">AlonahAmelie</div>
                            <div className="Text faded">@AlonahAmelie</div>
                        </div>
                        <div className="CardText">
                            Développeuse FullRED
                            @thetribeio
                            | Speakeuse | Motivator
                            @motivher
                            | Étudiante
                            @Epitech
                            | http://wlo.link/@AlonahAmelie | TW: instable, vulgaire hystérique, lead meute
                        </div>
                        <div style={{ display: 'flex', gap: 15 }}>
                            <div style={{ display: 'flex', gap: 5 }}>
                                <div className="CardText bold">0</div> <div className="Text faded">Following</div>
                            </div>
                            <div style={{ display: 'flex', gap: 5 }}>
                                <div className="CardText bold">+- 2k</div> <div className="Text faded">Followers</div>
                            </div>
                        </div>
                    </div>
                </div>

                <HoverCard.Arrow className="HoverCardArrow" />
            </HoverCard.Content>
        </HoverCard.Portal>
    </HoverCard.Root>
);

export default HoverCardDemo;