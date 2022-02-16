
const Alert = ({alert}) => {
    if (!alert.show) {
        return null 
    }

    else if (alert.type === 'success') {
        return (
            <div className="alert">
                Region added successfully 
            </div>
        )
    }
    else {
        return (
            <div className="alert error">
               Form is not complete
            </div>
        )
    }
}


export default Alert