import * as React from "react";
import { useTheme } from "@material-ui/styles";

const Logo = (props) => {
    const theme = useTheme();
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 378.9 110.9"
            {...props}
        >
            {/* <defs>
                <path
                    id="prefix__a"
                    d="M25.9 80.1V29.7h2.9l18.3 27.6 18.2-27.6h2.8v50.4h-2.7V34.2L47.7 60.8h-1.4L28.6 34.3V80h-2.7z"
                />
            </defs>
            <clipPath id="prefix__b">
                <use xlinkHref="#prefix__a" overflow="visible" />
            </clipPath>
            <path
                d="M25.9 82.3V31.9c7 9.9 13.9 19.8 20.9 29.8 6.2-9.9 12.3-19.8 18.5-29.8.5 16.5.9 32.9 1.4 49.4"
                clipPath="url(#prefix__b)"
                fill="none"
                stroke={theme.logoColor}
                strokeWidth={7}
                strokeMiterlimit={10}
            />
            <defs>
                <path
                    id="prefix__c"
                    d="M92.1 80.8c-2.4 0-4.5-.4-6.3-1.1-1.9-.7-3.5-1.8-4.8-3.3-1.3-1.5-2.3-3.4-3-5.8-.7-2.4-1.1-5.2-1.1-8.6 0-4 .4-7.3 1.3-10s2.1-4.8 3.6-6.4c1.5-1.6 3.3-2.7 5.3-3.5 2-.7 4.2-1.1 6.5-1.1 4.4 0 7.7 1.2 10 3.7 2.2 2.5 3.3 6.5 3.3 12.1v1.9c-.9 0-2.2.1-3.9.3-1.7.1-3.7.3-6 .4-2.4.2-5 .3-7.8.4-2.9.1-5.9.1-9.2.1 0 .3-.1.7-.1 1v1c0 4 .5 7.2 1.5 9.6 1 2.4 2.5 4.1 4.4 5.2 1.9 1.1 4.2 1.6 6.9 1.6 1.6 0 3.3-.1 4.9-.3 1.6-.2 3.1-.4 4.5-.7 1.4-.3 2.7-.6 3.8-.9l.5 2.3c-1.2.3-2.5.6-4 .9-1.5.3-3.1.5-4.8.7-1.8.4-3.6.5-5.5.5zM79.9 57.9c2.9 0 5.6 0 8.3-.1 2.6-.1 5.1-.2 7.2-.3 2.2-.1 4-.2 5.5-.3 1.5-.1 2.5-.2 3-.3 0-3.2-.4-5.8-1.2-7.8-.8-2-1.9-3.4-3.5-4.3-1.5-.9-3.5-1.4-6-1.4-1.4 0-2.9.2-4.4.6-1.5.4-2.9 1.2-4.1 2.2-1.2 1.1-2.3 2.5-3.2 4.4-.7 1.9-1.3 4.4-1.6 7.3z"
                />
            </defs>
            <clipPath id="prefix__d">
                <use xlinkHref="#prefix__c" overflow="visible" />
            </clipPath>
            <path
                d="M105.7 76.5c-6.4 5.1-14.3 6.4-19.9 3.2-6-3.5-7-10.8-7.6-15.3-.6-4.4-1.7-12 3.5-17.6 3.5-3.7 10.6-7.5 17-4.1 4.9 2.6 7.6 8.5 6.7 14.6-8.5.2-16.9.3-25.4.5"
                clipPath="url(#prefix__d)"
                fill="none"
                stroke={theme.logoColor}
                strokeWidth={7}
                strokeMiterlimit={10}
            />
            <defs>
                <path
                    id="prefix__e"
                    d="M114.8 80.1V26.8h2.8v18.3c1.5-.8 3-1.5 4.5-2.1 1.5-.6 3-1 4.6-1.4 1.6-.4 3.2-.5 5-.5 2.2 0 4 .4 5.5 1.1 1.5.7 2.7 1.9 3.5 3.4.8 1.5 1.2 3.4 1.2 5.7v28.8h-2.8V51.8c0-2.6-.7-4.6-2.1-6.1-1.4-1.5-3.5-2.2-6.4-2.2-1.5 0-3 .2-4.5.5s-2.9.8-4.3 1.4c-1.4.6-2.9 1.3-4.4 2.1v32.6h-2.6z"
                />
            </defs>
            <clipPath id="prefix__f">
                <use xlinkHref="#prefix__e" overflow="visible" />
            </clipPath>
            <path
                d="M115.6 81.5v-3.8c-.1-11.2-.1-22.4-.2-33.7v-.3c.2-6.1.3-12.2.5-18.2 1 7.2 2 14.5 2.9 21.7.3-1.1-2 1.6-.5.2 3.6-3.5 12.9-7.9 16.6-5.5 2.5 1.7 5 5.3 5 5.3v33.4"
                clipPath="url(#prefix__f)"
                fill="none"
                stroke={theme.logoColor}
                strokeWidth={6}
                strokeMiterlimit={10}
            />
            <g>
                <defs>
                    <path
                        id="prefix__g"
                        d="M176.4 80.1l-.5-3.7c-2.3 1.5-4.5 2.7-6.5 3.4-2 .7-4.1 1.1-6.2 1.1-4 0-7.2-1.6-9.4-4.9-2.3-3.2-3.4-7.9-3.4-14 0-4.8.6-8.8 1.8-11.9 1.2-3.1 3-5.4 5.4-6.8 2.4-1.4 5.6-2.2 9.4-2.2 1.3 0 2.8.1 4.3.2s3.1.4 4.7.8V26.8h2.8v53.3h-2.4zm-.5-6.2V44.4c-1.8-.4-3.4-.7-4.8-.9-1.4-.2-2.7-.3-3.9-.3-3.2 0-5.9.6-7.9 1.9-2.1 1.2-3.6 3.2-4.6 5.9-1 2.7-1.5 6.3-1.5 10.7 0 3.6.4 6.6 1.3 9 .9 2.5 2.1 4.3 3.7 5.6 1.6 1.3 3.5 1.9 5.7 1.9 1.3 0 2.6-.1 3.9-.4 1.2-.3 2.5-.8 3.9-1.4 1.2-.6 2.6-1.4 4.2-2.5z"
                    />
                </defs>
                <clipPath id="prefix__h">
                    <use xlinkHref="#prefix__g" overflow="visible" />
                </clipPath>
                <path
                    d="M176.8 74.9c.3 6.8.5 8.2.6 8.2.4 0 .7-21.2.4-41-.1-7.3-.3-13.4-.4-17.5-.9 5.9-1.8 11.7-2.6 17.6-.9-.4-10-4-17.2 1-3.4 2.4-4.9 5.7-5.4 6.8-2 4.4-1.5 8.3-.8 13.5.7 5.6 1.1 9 3.8 12.3.7.9 3.5 4.2 8.1 5 7.6 1.3 13.3-5.6 13.5-5.9z"
                    clipPath="url(#prefix__h)"
                    fill="none"
                    stroke={theme.logoColor}
                    strokeWidth={7}
                    strokeMiterlimit={10}
                />
            </g>
            <g>
                <defs>
                    <path
                        id="prefix__i"
                        d="M190.5 32c-.8 0-1.3-.1-1.5-.4-.2-.2-.4-.7-.4-1.5s.1-1.3.3-1.5c.2-.2.7-.3 1.5-.3.7 0 1.2.1 1.4.3.2.2.3.7.3 1.5s-.1 1.3-.3 1.5c-.1.3-.6.4-1.3.4zM189 80.1V41.8h2.8v38.3H189z"
                    />
                </defs>
                <clipPath id="prefix__j">
                    <use xlinkHref="#prefix__i" overflow="visible" />
                </clipPath>
                <path
                    d="M190.5 79.9l-.3-38c-1.1-3-2.1-6-3.2-9.1 2.5-2 5.1-4 7.6-6"
                    clipPath="url(#prefix__j)"
                    fill="none"
                    stroke={theme.logoColor}
                    strokeWidth={7}
                    strokeMiterlimit={10}
                />
            </g>
            <g>
                <defs>
                    <path
                        id="prefix__k"
                        d="M222.2 80.1V29.7c2.4-.2 4.6-.3 6.4-.5 1.8-.1 3.4-.2 4.9-.3 1.4 0 2.9-.1 4.3-.1 3.8 0 6.9.4 9.3 1.3 2.4.9 4.1 2.2 5.2 4 1.1 1.8 1.6 4.2 1.6 7.2s-.7 5.6-2.2 7.7c-1.4 2.2-3.4 3.7-5.8 4.4v.1c3.3.6 5.8 2 7.6 4.2 1.8 2.2 2.7 5.1 2.7 8.6 0 2.5-.3 4.6-1 6.4-.7 1.8-1.7 3.3-3.1 4.4-1.4 1.2-3.3 2-5.6 2.6s-5.1.8-8.3.8h-3c-1 0-1.9 0-2.8-.1-.9 0-1.9-.1-2.9-.1s-2.1-.1-3.3-.2c-1.2.2-2.5.1-4 0zm2.9-27h15.6c2.1 0 4-.5 5.5-1.4 1.6-1 2.8-2.3 3.6-4 .8-1.7 1.3-3.6 1.3-5.8 0-2.4-.5-4.5-1.4-6-.9-1.6-2.4-2.7-4.5-3.4-2.1-.7-4.8-1.1-8.1-1.1h-4.3c-.6 0-1.3.1-1.9.1-.7 0-1.5.1-2.4.1-1 0-2.1.1-3.4.2v21.3zm0 24.7c1.8.1 3.3.2 4.5.3 1.2.1 2.3.1 3.3.2 1 0 1.8.1 2.6.1h2.4c3.8 0 6.8-.4 9.1-1.2 2.3-.8 4-2 5-3.8 1-1.8 1.5-4 1.5-6.9 0-3.5-1.1-6.2-3.2-8.1-2.2-1.9-5.2-2.9-9.1-2.9h-16.1v22.3z"
                    />
                </defs>
                <clipPath id="prefix__l">
                    <use xlinkHref="#prefix__k" overflow="visible" />
                </clipPath>
                <path
                    d="M222.2 29.7c0 .3.7 23.6.7 23.9v.3c.2 8.7.5 17.3.7 26 1.1.3 2.7.6 4.7.9 4.2.5 14.7 1.8 22.2-4.4 1.5-1.3 6.1-5 5.8-9.9-.2-3.3-2.5-6-4.3-8-2.2-2.4-4.5-3.9-6-4.8-16.8-.8-20.9-.9-20.9-.7 0 .3 17.7 4.3 24.3-3.6 1.8-2.2 3.2-5.7 2.9-9.4-.1-1.1-.3-5-3.2-7.6-2.6-2.3-5.9-2.4-9.7-2.3-6 0-12.8.2-20.2.6"
                    clipPath="url(#prefix__l)"
                    fill="none"
                    stroke={theme.logoColor}
                    strokeWidth={7}
                    strokeMiterlimit={10}
                />
            </g>
            <g>
                <defs>
                    <path id="prefix__m" d="M264.6 80.1V29.7h2.9V57h30.9V29.7h2.8v50.4h-2.8V59.6h-30.9V80h-2.9z" />
                </defs>
                <clipPath id="prefix__n">
                    <use xlinkHref="#prefix__m" overflow="visible" />
                </clipPath>
                <path
                    d="M267.2 28.1c-2.3 35.6-2.9 53.5-1.8 53.6.8.1 2.3-8.3 4.7-25.2 7.8 1.1 16.4 1.8 25.8 1.5 1.9-.1 3.7-.2 5.6-.3l-1.5 24 .6-53.6"
                    clipPath="url(#prefix__n)"
                    fill="none"
                    stroke={theme.logoColor}
                    strokeWidth={7}
                    strokeMiterlimit={10}
                />
            </g>
            <g>
                <defs>
                    <path
                        id="prefix__o"
                        d="M308 80.1l17.9-51h2.7l18 51h-3.1l-5.2-15h-22.1l-5.3 15H308zm8.9-17.6h20.7L327.2 33l-10.3 29.5z"
                    />
                </defs>
                <clipPath id="prefix__p">
                    <use xlinkHref="#prefix__o" overflow="visible" />
                </clipPath>
                <path
                    d="M307.6 81.4c2.3-6.5 4.6-13.1 6.8-19.6 0 0 0 0 0 0s0 0 0 0 4.5-12.8 11.4-32.7l20.7 51c-3.4-5.5-6.8-11-10.3-16.5-7.3-.6-14.6-1.2-21.8-1.7"
                    clipPath="url(#prefix__p)"
                    fill="none"
                    stroke={theme.logoColor}
                    strokeWidth={7}
                    strokeMiterlimit={10}
                />
            </g> */}
            <text x="15" y="70" font-weight="bold" font-size="3em" fill={theme.logoColor}  strokeWidth={2} strokeMiterlimit={10} >White Coders</text>
            <path fill="none" stroke={theme.logoColor} strokeWidth={2} strokeMiterlimit={10} d="M12.7 14.8h349.7v83.3H12.7z" />
        </svg>
    );
};

export default Logo;
