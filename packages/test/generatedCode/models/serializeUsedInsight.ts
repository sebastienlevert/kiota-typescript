import {UsedInsight} from './index';
import {serializeEntity} from './serializeEntity';
import {serializeResourceReference} from './serializeResourceReference';
import {serializeResourceVisualization} from './serializeResourceVisualization';
import {serializeUsageDetails} from './serializeUsageDetails';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUsedInsight(writer: SerializationWriter, usedInsight: UsedInsight | undefined = {}) : void {
        serializeEntity(writer, usedInsight)
            writer.writeObjectValueFromMethod("lastUsed", usedInsight.lastUsed as any, serializeUsageDetails);
            writer.writeObjectValueFromMethod("resource", usedInsight.resource as any, serializeEntity);
            writer.writeObjectValueFromMethod("resourceReference", usedInsight.resourceReference as any, serializeResourceReference);
            writer.writeObjectValueFromMethod("resourceVisualization", usedInsight.resourceVisualization as any, serializeResourceVisualization);
}
