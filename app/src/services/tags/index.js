import { findTagByName } from "./http.js"


function getDonationIcon(){
    let a = findTagByName("Donations",'player')
    return {
        medium : a.iconUrls.medium,
        small : a.iconUrls.small
    }
}
function getTrophyIcon(){
    let a = findTagByName("Trophy Pushing",'clan')
    return {
        medium : a.iconUrls.medium,
        small : a.iconUrls.small
    }
}
function getClanIcon(){
    let a = findTagByName("Clan Capital",'clan')
    return {
        medium : a.iconUrls.medium,
        small : a.iconUrls.small
    }
}


export { getDonationIcon , getTrophyIcon ,getClanIcon }