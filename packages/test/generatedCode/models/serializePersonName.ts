import {PersonName} from './index';
import {serializeItemFacet} from './serializeItemFacet';
import {serializePersonNamePronounciation} from './serializePersonNamePronounciation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePersonName(writer: SerializationWriter, personName: PersonName | undefined = {}) : void {
        serializeItemFacet(writer, personName)
            writer.writeStringValue("displayName", personName.displayName);
            writer.writeStringValue("first", personName.first);
            writer.writeStringValue("initials", personName.initials);
            writer.writeStringValue("languageTag", personName.languageTag);
            writer.writeStringValue("last", personName.last);
            writer.writeStringValue("maiden", personName.maiden);
            writer.writeStringValue("middle", personName.middle);
            writer.writeStringValue("nickname", personName.nickname);
            writer.writeObjectValueFromMethod("pronunciation", personName.pronunciation as any, serializePersonNamePronounciation);
            writer.writeStringValue("suffix", personName.suffix);
            writer.writeStringValue("title", personName.title);
}
