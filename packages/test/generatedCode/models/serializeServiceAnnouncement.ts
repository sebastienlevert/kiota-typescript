import {ServiceAnnouncement} from './index';
import {serializeEntity} from './serializeEntity';
import {serializeServiceHealth} from './serializeServiceHealth';
import {serializeServiceHealthIssue} from './serializeServiceHealthIssue';
import {serializeServiceUpdateMessage} from './serializeServiceUpdateMessage';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeServiceAnnouncement(writer: SerializationWriter, serviceAnnouncement: ServiceAnnouncement | undefined = {}) : void {
        serializeEntity(writer, serviceAnnouncement)
            writer.writeCollectionOfObjectValuesFromMethod("healthOverviews", serviceAnnouncement.healthOverviews as any, serializeServiceHealth);
            writer.writeCollectionOfObjectValuesFromMethod("issues", serviceAnnouncement.issues as any, serializeServiceHealthIssue);
            writer.writeCollectionOfObjectValuesFromMethod("messages", serviceAnnouncement.messages as any, serializeServiceUpdateMessage);
}
