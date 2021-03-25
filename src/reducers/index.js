export const Resizing = (state = window.innerWidth, action) => {
    switch (action.type) {
        case "resizing":
            return state = action.payload;
    
        default:
            return state;
    }
}

