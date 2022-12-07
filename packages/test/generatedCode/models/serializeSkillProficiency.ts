import {SkillProficiency} from './index';
import {serializeItemFacet} from './serializeItemFacet';
import {SkillProficiencyLevel} from './skillProficiencyLevel';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSkillProficiency(writer: SerializationWriter, skillProficiency: SkillProficiency | undefined = {}) : void {
        serializeItemFacet(writer, skillProficiency)
            writer.writeCollectionOfPrimitiveValues<string>("categories", skillProficiency.categories);
            writer.writeCollectionOfPrimitiveValues<string>("collaborationTags", skillProficiency.collaborationTags);
            writer.writeStringValue("displayName", skillProficiency.displayName);
            writer.writeEnumValue<SkillProficiencyLevel>("proficiency", skillProficiency.proficiency);
            writer.writeStringValue("thumbnailUrl", skillProficiency.thumbnailUrl);
            writer.writeStringValue("webUrl", skillProficiency.webUrl);
}
