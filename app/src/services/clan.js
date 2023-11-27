import { clan } from "@/data/clan.js";

function getClan(){
    return clan
}
function getClanMembers(){
    return clan.memberList
}

export { getClan , getClanMembers }