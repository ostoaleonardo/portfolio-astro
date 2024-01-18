const ENDPOINT = "https://api.lanyard.rest/v1/users/771148579356016650"
const ASSETS_URL = "https://cdn.discordapp.com/app-assets/"

export const getDiscordStatus = async () => {
    const discord = await fetch(ENDPOINT)
        .then((res) => res.json())
        .then((data) => data.data)
        .then((data) => formatDiscordStatus(data))
        .catch(() => { return { status: "offline", activity: "", details: "", image: "" } })

    return discord
}

const formatDiscordStatus = (discord: any) => {
    const { activities, discord_status } = discord

    if (activities.length === 0) {
        return {
            status: discord_status,
            activity: "",
            details: "",
            image: ""
        }
    }

    const { name, details, assets, application_id } = activities[0]
    const { large_image } = assets

    return {
        status: discord_status,
        activity: name,
        details,
        image: ASSETS_URL + application_id + "/" + large_image
    }
}
