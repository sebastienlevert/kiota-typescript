import {AppManagementPolicy} from './index';
import {serializeAppManagementConfiguration} from './serializeAppManagementConfiguration';
import {serializeDirectoryObject} from './serializeDirectoryObject';
import {serializePolicyBase} from './serializePolicyBase';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAppManagementPolicy(writer: SerializationWriter, appManagementPolicy: AppManagementPolicy | undefined = {}) : void {
        serializePolicyBase(writer, appManagementPolicy)
            writer.writeCollectionOfObjectValuesFromMethod("appliesTo", appManagementPolicy.appliesTo as any, serializeDirectoryObject);
            writer.writeBooleanValue("isEnabled", appManagementPolicy.isEnabled);
            writer.writeObjectValueFromMethod("restrictions", appManagementPolicy.restrictions as any, serializeAppManagementConfiguration);
}
