import {PersonNamePronounciation} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePersonNamePronounciation(writer: SerializationWriter, personNamePronounciation: PersonNamePronounciation | undefined = {}) : void {
            writer.writeStringValue("displayName", personNamePronounciation.displayName);
            writer.writeStringValue("first", personNamePronounciation.first);
            writer.writeStringValue("last", personNamePronounciation.last);
            writer.writeStringValue("maiden", personNamePronounciation.maiden);
            writer.writeStringValue("middle", personNamePronounciation.middle);
}
