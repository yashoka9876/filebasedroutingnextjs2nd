import React from 'react'
import classes from './button.module.css'
import Link from 'next/link'
const Button = (props) => {
    if(props.link){
        return (
           <Link href={props.link}  className={classes.btn}>
             {props.children}
           </Link>
        )
    }
    return <button className={classes.btn} onClick={props.onCLick}>{props.children}</button>
}

export default Button