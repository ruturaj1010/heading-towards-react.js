import React from 'react'

export default function Alert ( props ) {
    const capitalize = ( word ) => {
        const charStr = word.toLowerCase();

        return charStr.charAt( 0 ).toUpperCase() + charStr.slice( 1 );
    }
    return (
        <div style={{height : '48px'}}>
            { props.alert && ( <div className={ `alert alert-${props.alert.type} alert-dismissible fade show` } role="alert">
                <strong>{ capitalize( props.alert.type ) }</strong>:{ props.alert.msg }
            </div> ) }
        </div>
    )
}
