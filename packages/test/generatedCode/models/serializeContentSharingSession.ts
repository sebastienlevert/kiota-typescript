import {ContentSharingSession} from './index';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeContentSharingSession(writer: SerializationWriter, contentSharingSession: ContentSharingSession | undefined = {}) : void {
        serializeEntity(writer, contentSharingSession)
}
