export function sortItems(items: string[]): string[] {
    const sorted  = items.sort((a,b) => a.localeCompare(b, 'en', { numeric: true }));    
    return sorted;
}

/*
[“TH19”, “SG20” , “TH2”] => [ “SG20” , “TH2”, “TH19”,]
[“TH10”, “TH3Netflix” , “TH1”, “TH7”] => [ “TH1”, “TH3Netflix” , “TH7”, “TH10”]
*/
// console.log(sortItems(["TH19", "SG20" , "TH2"]));
// console.log(sortItems(["TH10", "TH3Netflix" , "TH1", "TH7"]));