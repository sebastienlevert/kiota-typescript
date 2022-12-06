import {deserializeIntoAttachment} from './deserializeIntoAttachment';
import {ReferenceAttachment} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoReferenceAttachment(referenceAttachment: ReferenceAttachment | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoAttachment(referenceAttachment),
    }
}
