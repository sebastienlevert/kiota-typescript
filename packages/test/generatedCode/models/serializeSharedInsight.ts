import {SharedInsight} from './index';
import {serializeEntity} from './serializeEntity';
import {serializeResourceReference} from './serializeResourceReference';
import {serializeResourceVisualization} from './serializeResourceVisualization';
import {serializeSharingDetail} from './serializeSharingDetail';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSharedInsight(writer: SerializationWriter, sharedInsight: SharedInsight | undefined = {}) : void {
        serializeEntity(writer, sharedInsight)
            writer.writeObjectValueFromMethod("lastShared", sharedInsight.lastShared as any, serializeSharingDetail);
            writer.writeObjectValueFromMethod("lastSharedMethod", sharedInsight.lastSharedMethod as any, serializeEntity);
            writer.writeObjectValueFromMethod("resource", sharedInsight.resource as any, serializeEntity);
            writer.writeObjectValueFromMethod("resourceReference", sharedInsight.resourceReference as any, serializeResourceReference);
            writer.writeObjectValueFromMethod("resourceVisualization", sharedInsight.resourceVisualization as any, serializeResourceVisualization);
            writer.writeCollectionOfObjectValuesFromMethod("sharingHistory", sharedInsight.sharingHistory as any, serializeSharingDetail);
}
