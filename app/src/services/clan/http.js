import axiosInstance from "@/services/_http"

async function getClan(tag){
    let url = `https://api.clashofclans.com/v1/clans/${encodeURIComponent(tag)}`
    let response = await axiosInstance.get(url)

    let member = response.memberList.map((m) => ({
        tag:m.tag,
        name:m.name,
        role:m.role,
        xp:m.expLevel,
        leagueName:m.league.name,
        leagueIcon:(m.league.iconUrls.tiny)? m.league.iconUrls.tiny:m.league.iconUrls.small,
        trophee:m.trophies,
        donation:m.donations,
        donationRecu:m.donationsReceived
    }))

    return {
        tag:response.tag,
        name:response.name,
        description:response.description,
        locationName:response.location.name,
        locationCountryCode:response.location.countryCode,
        badgeUrl:response.badgeUrls.medium,
        clanLevel:response.clanLevel,
        clanPoints:response.clanPoints,
        clanLeagueName:response.capitalLeague.name,
        clanWarLeagueName:response.clanWarLeagueName,
        members:member
    }
}

export { getClan }