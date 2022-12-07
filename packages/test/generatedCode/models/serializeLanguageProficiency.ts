import {LanguageProficiency} from './index';
import {LanguageProficiencyLevel} from './languageProficiencyLevel';
import {serializeItemFacet} from './serializeItemFacet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeLanguageProficiency(writer: SerializationWriter, languageProficiency: LanguageProficiency | undefined = {}) : void {
        serializeItemFacet(writer, languageProficiency)
            writer.writeStringValue("displayName", languageProficiency.displayName);
            writer.writeEnumValue<LanguageProficiencyLevel>("proficiency", languageProficiency.proficiency);
            writer.writeEnumValue<LanguageProficiencyLevel>("reading", languageProficiency.reading);
            writer.writeEnumValue<LanguageProficiencyLevel>("spoken", languageProficiency.spoken);
            writer.writeStringValue("tag", languageProficiency.tag);
            writer.writeStringValue("thumbnailUrl", languageProficiency.thumbnailUrl);
            writer.writeEnumValue<LanguageProficiencyLevel>("written", languageProficiency.written);
}
