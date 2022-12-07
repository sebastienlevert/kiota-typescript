import {deserializeIntoItemFacet} from './deserializeIntoItemFacet';
import {SkillProficiency} from './index';
import {SkillProficiencyLevel} from './skillProficiencyLevel';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSkillProficiency(skillProficiency: SkillProficiency | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoItemFacet(skillProficiency),
        "categories": n => { skillProficiency.categories = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "collaborationTags": n => { skillProficiency.collaborationTags = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "displayName": n => { skillProficiency.displayName = n.getStringValue() as any ; },
        "proficiency": n => { skillProficiency.proficiency = n.getEnumValue<SkillProficiencyLevel>(SkillProficiencyLevel) as any ; },
        "thumbnailUrl": n => { skillProficiency.thumbnailUrl = n.getStringValue() as any ; },
        "webUrl": n => { skillProficiency.webUrl = n.getStringValue() as any ; },
    }
}
