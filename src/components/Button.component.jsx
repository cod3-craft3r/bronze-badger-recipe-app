import React from "react";

export const Button = (props) => {
    //size = sm|md|lg
    //variant = primary|secondary
    const {size,variant} = props
    switch (variant) {
        case 'primary':
            switch (size) {
                case 'sm':
                 return(<button className='btn-primary m-1 p-2 text-sm ' {...props}>{props.children}</button>)
                case 'md':
                 return(<button className='btn-primary m-1 py-2 px-3 text-lg ' {...props}>{props.children}</button>)
                case 'lg':
                 return(<button className='btn-primary m-1 py-3 px-4 text-2xl ' {...props}>{props.children}</button>)
                default:
                    break;
            }
            break;
        case 'secondary':
            switch (size) {
                case 'sm':
                 return(<button className='btn-secondary m-1 p-[7px] text-sm' {...props}>{props.children}</button>)
                case 'md':
                 return(<button className='btn-secondary m-1 py-[7px] px-[11px] text-lg' {...props}>{props.children}</button>)
                case 'lg':
                 return(<button className='btn-secondary m-1 py-[11px] px-[15px] text-2xl' {...props}>{props.children}</button>)
                default:
                    break;
            }
            break;
    
        default:
            break;
    }
    
}
