import {StsPolicy} from './index';
import {serializeDirectoryObject} from './serializeDirectoryObject';
import {serializePolicyBase} from './serializePolicyBase';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeStsPolicy(writer: SerializationWriter, stsPolicy: StsPolicy | undefined = {}) : void {
        serializePolicyBase(writer, stsPolicy)
            writer.writeCollectionOfObjectValuesFromMethod("appliesTo", stsPolicy.appliesTo as any, serializeDirectoryObject);
            writer.writeCollectionOfPrimitiveValues<string>("definition", stsPolicy.definition);
            writer.writeBooleanValue("isOrganizationDefault", stsPolicy.isOrganizationDefault);
}
