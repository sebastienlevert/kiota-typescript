import {ReferenceAttachment} from './index';
import {serializeAttachment} from './serializeAttachment';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeReferenceAttachment(writer: SerializationWriter, referenceAttachment: ReferenceAttachment | undefined = {}) : void {
        serializeAttachment(writer, referenceAttachment)
}
