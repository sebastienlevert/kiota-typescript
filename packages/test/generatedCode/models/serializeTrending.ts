import {Trending} from './index';
import {serializeEntity} from './serializeEntity';
import {serializeResourceReference} from './serializeResourceReference';
import {serializeResourceVisualization} from './serializeResourceVisualization';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTrending(writer: SerializationWriter, trending: Trending | undefined = {}) : void {
        serializeEntity(writer, trending)
            writer.writeDateValue("lastModifiedDateTime", trending.lastModifiedDateTime);
            writer.writeObjectValueFromMethod("resource", trending.resource as any, serializeEntity);
            writer.writeObjectValueFromMethod("resourceReference", trending.resourceReference as any, serializeResourceReference);
            writer.writeObjectValueFromMethod("resourceVisualization", trending.resourceVisualization as any, serializeResourceVisualization);
            writer.writeNumberValue("weight", trending.weight);
}
