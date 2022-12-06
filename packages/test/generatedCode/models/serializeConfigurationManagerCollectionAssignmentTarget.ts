import {ConfigurationManagerCollectionAssignmentTarget} from './index';
import {serializeDeviceAndAppManagementAssignmentTarget} from './serializeDeviceAndAppManagementAssignmentTarget';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeConfigurationManagerCollectionAssignmentTarget(writer: SerializationWriter, configurationManagerCollectionAssignmentTarget: ConfigurationManagerCollectionAssignmentTarget | undefined = {}) : void {
        serializeDeviceAndAppManagementAssignmentTarget(writer, configurationManagerCollectionAssignmentTarget)
            writer.writeStringValue("collectionId", configurationManagerCollectionAssignmentTarget.collectionId);
}
