import {deserializeIntoEntity} from './deserializeIntoEntity';
import {ContentSharingSession} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoContentSharingSession(contentSharingSession: ContentSharingSession | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(contentSharingSession),
    }
}
