import { clanTag, playerTag, leagueTag } from "@/data/tags.js"

let tags = {
    "clan": clanTag,
    "player": playerTag,
    "league": leagueTag
}
function getTag(type, id) {
    return tags[type].find(e => e.id === id)
}
function findTagByName(name, type = 'league') {
    let a = tags[type].find(e => e.name === name)
    console.log('tagname is -- ', name, a)
    return a
}


function getAllTags() {
    return tags
}
function getTags(type) {
    return tags[type]
}
function getAllClanTag() {
    return getTags('clan')
}
function getAllLeagueTag() {
    return getTags('league')
}
function getAllPlayerTag() {
    return getTags('player')
}

export { findTagByName, getTag, getAllTags, getAllClanTag, getAllLeagueTag, getAllPlayerTag }