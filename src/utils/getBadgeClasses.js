const getBadgeClasses = (isHasUsers) => {
    let classes = "fw-bold d-inline-block mt-2 p-2 text-white rounded-1 "
    return isHasUsers ? classes + "bg-primary" : classes + "bg-danger"
}




export default getBadgeClasses;