import {InformationProtectionPolicy} from './index';
import {serializeEntity} from './serializeEntity';
import {serializeInformationProtectionLabel} from './serializeInformationProtectionLabel';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeInformationProtectionPolicy(writer: SerializationWriter, informationProtectionPolicy: InformationProtectionPolicy | undefined = {}) : void {
        serializeEntity(writer, informationProtectionPolicy)
            writer.writeCollectionOfObjectValuesFromMethod("labels", informationProtectionPolicy.labels as any, serializeInformationProtectionLabel);
}
