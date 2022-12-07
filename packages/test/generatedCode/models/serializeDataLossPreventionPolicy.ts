import {DataLossPreventionPolicy} from './index';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDataLossPreventionPolicy(writer: SerializationWriter, dataLossPreventionPolicy: DataLossPreventionPolicy | undefined = {}) : void {
        serializeEntity(writer, dataLossPreventionPolicy)
            writer.writeStringValue("name", dataLossPreventionPolicy.name);
}
