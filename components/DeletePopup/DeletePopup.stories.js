import DeletePopup from "./index"

export default {
    title: "DeletePopup",
    component: DeletePopup,
}

const oneEvent = {
    eventImage: "https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_2x3.jpg",
    eventName: "WHAT THE FUCK"
}

export const Default = (args) => <DeletePopup singleEvent={oneEvent} />
export const Error = (args) => <DeletePopup />