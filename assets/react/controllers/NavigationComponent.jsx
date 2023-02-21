import React from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import classNames from 'classnames';
import { CaretDownIcon } from '@radix-ui/react-icons';
import './NavigationComponentStyle.css';
import LogoAmeliedev from '../../images/logo-ameliedev.svg';

const Navigation = () => {
    return (
        <NavigationMenu.Root className="NavigationMenuRoot">
            <NavigationMenu.List className="NavigationMenuList">
                <NavigationMenu.Item>
                    <NavigationMenu.Trigger className="NavigationMenuTrigger">
                        Amélie Alonah <CaretDownIcon className="CaretDown" aria-hidden />
                    </NavigationMenu.Trigger>
                    <NavigationMenu.Content className="NavigationMenuContent">
                        <ul className="List one">
                            <li style={{ gridRow: 'span 3' }}>
                                <NavigationMenu.Link asChild>
                                    <a className="Callout" href="/">
                                        <img className="LogoAmeliedev" src={LogoAmeliedev} alt={'Logo Amelie-dev'}/>
                                        <div className="CalloutHeading">Ameliedev</div>
                                        <p className="CalloutText">Architecte logicielle</p>
                                        <p className="CalloutText">Conceptrice Développeuse d'Applications</p>
                                        <p className="CalloutText">Web et web mobile</p>
                                    </a>
                                </NavigationMenu.Link>
                            </li>

                            <ListItem href="https://stitches.dev/" title="Stitches">
                                CSS-in-JS with best-in-class developer experience.
                            </ListItem>
                            <ListItem href="/colors" title="Colors">
                                Beautiful, thought-out palettes with auto dark mode.
                            </ListItem>
                            <ListItem href="https://icons.radix-ui.com/" title="Icons">
                                A crisp set of 15x15 icons, balanced and consistent.
                            </ListItem>
                        </ul>
                    </NavigationMenu.Content>
                </NavigationMenu.Item>

                <NavigationMenu.Item>
                    <NavigationMenu.Trigger className="NavigationMenuTrigger">
                        Overview <CaretDownIcon className="CaretDown" aria-hidden />
                    </NavigationMenu.Trigger>
                    <NavigationMenu.Content className="NavigationMenuContent">
                        <ul className="List two">
                            <ListItem title="Introduction" href="/docs/primitives/overview/introduction">
                                Build high-quality, accessible design systems and web apps.
                            </ListItem>
                            <ListItem title="Getting started" href="/docs/primitives/overview/getting-started">
                                A quick tutorial to get you up and running with Radix Primitives.
                            </ListItem>
                            <ListItem title="Styling" href="/docs/primitives/overview/styling">
                                Unstyled and compatible with any styling solution.
                            </ListItem>
                            <ListItem title="Animation" href="/docs/primitives/overview/animation">
                                Use CSS keyframes or any animation library of your choice.
                            </ListItem>
                            <ListItem title="Accessibility" href="/docs/primitives/overview/accessibility">
                                Tested in a range of browsers and assistive technologies.
                            </ListItem>
                            <ListItem title="Releases" href="/docs/primitives/overview/releases">
                                Radix Primitives releases and their changelogs.
                            </ListItem>
                        </ul>
                    </NavigationMenu.Content>
                </NavigationMenu.Item>

                <NavigationMenu.Item>
                    <NavigationMenu.Trigger className="NavigationMenuTrigger">
                        Réseaux
                        <CaretDownIcon className="CaretDown" aria-hidden />
                    </NavigationMenu.Trigger>
                    <NavigationMenu.Content className="NavigationMenuContent">
                        <ul className="List two">
                            <ListItem title="LinkedIn"  target={"blank"} href="https://www.linkedin.com/in/alonahamelie/">
                                On pourrait croire que je réponds sur LinkedIn comme sur Twitter, et c'est vrai.
                            </ListItem>
                            <ListItem className="ListItem" title="Github" target={"blank"} href="https://github.com/AmelieAlonah">
                                Pour faire genre tu regardes mes repos de code.
                            </ListItem>
                            <ListItem title="Noob De Dev" target={"blank"} href="https://www.noob-de-dev.fr">
                                Un blog, un peu vide, c'est pas faux.
                            </ListItem>
                            <ListItem title="Twitch" target={"blank"} href="https://www.twitch.tv/AlonahAmelie">
                                On fait des trucs, parfois.
                            </ListItem>
                            <ListItem title="Twitter" target={"blank"} href="https://www.twitter.com/AlonahAmelie">
                                Faut pas follow, vraiment.
                            </ListItem>
                        </ul>
                    </NavigationMenu.Content>
                </NavigationMenu.Item>

                <NavigationMenu.Indicator className="NavigationMenuIndicator">
                    <div className="Arrow" />
                </NavigationMenu.Indicator>
            </NavigationMenu.List>

            <div className="ViewportPosition">
                <NavigationMenu.Viewport className="NavigationMenuViewport" />
            </div>
        </NavigationMenu.Root>
    );
};

const ListItem = React.forwardRef(({ className, children, title, ...props }, forwardedRef) => (
    <li>
        <NavigationMenu.Link asChild>
            <a className={classNames('ListItemLink', className)} {...props} ref={forwardedRef}>
                <div className="ListItemHeading">{title}</div>
                <p className="ListItemText">{children}</p>
            </a>
        </NavigationMenu.Link>
    </li>
));

export default Navigation;