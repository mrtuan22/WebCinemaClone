const idYouTube = {
    idYB: "",
}

export const YouTuBeIdReducer = (state = idYouTube, action) => {
    switch (action.type) {
        case 'GET_YOUTUBE_ID': {
            let url = action.url;
            let ID = ''
            url = url.replace(/(>|<)/gi, '').split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
            if (url[2] !== undefined) {
                ID = url[2].split(/[^0-9a-z_\-]/i);
                ID = ID[0];
            }
            else {
                ID = url;
            }
            state.idYB = ID;
            return { ...state }
        }
        default:
            return { ...state }
    }
}