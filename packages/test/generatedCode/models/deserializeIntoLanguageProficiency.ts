import {deserializeIntoItemFacet} from './deserializeIntoItemFacet';
import {LanguageProficiency} from './index';
import {LanguageProficiencyLevel} from './languageProficiencyLevel';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoLanguageProficiency(languageProficiency: LanguageProficiency | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoItemFacet(languageProficiency),
        "displayName": n => { languageProficiency.displayName = n.getStringValue() as any ; },
        "proficiency": n => { languageProficiency.proficiency = n.getEnumValue<LanguageProficiencyLevel>(LanguageProficiencyLevel) as any ; },
        "reading": n => { languageProficiency.reading = n.getEnumValue<LanguageProficiencyLevel>(LanguageProficiencyLevel) as any ; },
        "spoken": n => { languageProficiency.spoken = n.getEnumValue<LanguageProficiencyLevel>(LanguageProficiencyLevel) as any ; },
        "tag": n => { languageProficiency.tag = n.getStringValue() as any ; },
        "thumbnailUrl": n => { languageProficiency.thumbnailUrl = n.getStringValue() as any ; },
        "written": n => { languageProficiency.written = n.getEnumValue<LanguageProficiencyLevel>(LanguageProficiencyLevel) as any ; },
    }
}
