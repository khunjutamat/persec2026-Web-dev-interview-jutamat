import { describe, it, expect } from 'vitest';
import { autocomplete } from '../src/question3';

describe('autocomplete', () => {
    it('should sort items correctly', () => {
        expect(autocomplete("th", ["Mother", "Think" , "Worthy", "Apple", "Android"], 2)).toEqual(["Think", "Mother"]); // example from QA
        expect(autocomplete("TH", ["TH19", "SG20" , "TH2"], 2)).toEqual(["TH2", "TH19"]);
        expect(autocomplete("th", ["Mother", "Think" , "Worthy", "ThAppleth", "Android", "with"], 2)).toEqual(["ThAppleth", "Think"]);
        expect(autocomplete("th", ["mother", "motherr"], 2)).toEqual(["mother", "motherr"]);
        expect(autocomplete("th", ["mother", "with", "Worthy"], 2)).toEqual(["mother", "Worthy"]);
        expect(autocomplete("th", ["With", "the", ""], 2)).toEqual(["the", "With"]);
        expect(autocomplete("th", ["Mother", "Think" , "Worthy", "ThAppleth"], 2)).toEqual(["ThAppleth", "Think",]);
        expect(autocomplete("th", ["Mother", "Think" , "Worthy", "ThAppleth", "Android", "with", "Worthyy"], 3)).toEqual(["ThAppleth", "Think", "Mother"]);
        
        expect(autocomplete("mO", ["monster", "monday", "moose", "mother", "mOment"], 3)).toEqual(["mOment", "monday", "monster"]);
        expect(autocomplete("SU", ["sunny", "sun", "sunset", "sunrise"], 4)).toEqual(["sun", "sunny", "sunrise", "sunset"]);
        expect(autocomplete("SU", ["sunny", "sun", "sunset", "sunrise"], 0)).toEqual([]);
        expect(autocomplete("SU", ["sunny", "sun", "sunset", "sunrise"], -2)).toEqual([]);
    });
});