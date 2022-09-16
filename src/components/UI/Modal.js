const Modal = ({changeModalState,children}) => {
    return <>
        <div onClick={changeModalState} className="loader-overlay"></div>
        <div className="modal">
            {children}
            {/* <button type="close" onClick={changeModalState}>X</button> */}
        </div>
    </>
}

export default Modal