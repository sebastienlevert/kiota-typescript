import {deserializeIntoDeviceAndAppManagementAssignmentTarget} from './deserializeIntoDeviceAndAppManagementAssignmentTarget';
import {ConfigurationManagerCollectionAssignmentTarget} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoConfigurationManagerCollectionAssignmentTarget(configurationManagerCollectionAssignmentTarget: ConfigurationManagerCollectionAssignmentTarget | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDeviceAndAppManagementAssignmentTarget(configurationManagerCollectionAssignmentTarget),
        "collectionId": n => { configurationManagerCollectionAssignmentTarget.collectionId = n.getStringValue() as any ; },
    }
}
