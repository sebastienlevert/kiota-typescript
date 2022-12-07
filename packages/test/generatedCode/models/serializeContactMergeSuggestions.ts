import {ContactMergeSuggestions} from './index';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeContactMergeSuggestions(writer: SerializationWriter, contactMergeSuggestions: ContactMergeSuggestions | undefined = {}) : void {
        serializeEntity(writer, contactMergeSuggestions)
            writer.writeBooleanValue("isEnabled", contactMergeSuggestions.isEnabled);
}
