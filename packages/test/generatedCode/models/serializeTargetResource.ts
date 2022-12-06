import {GroupType} from './groupType';
import {TargetResource} from './index';
import {serializeModifiedProperty} from './serializeModifiedProperty';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTargetResource(writer: SerializationWriter, targetResource: TargetResource | undefined = {}) : void {
            writer.writeStringValue("displayName", targetResource.displayName);
            writer.writeEnumValue<GroupType>("groupType", targetResource.groupType);
            writer.writeStringValue("id", targetResource.id);
            writer.writeCollectionOfObjectValuesFromMethod("modifiedProperties", targetResource.modifiedProperties as any, serializeModifiedProperty);
            writer.writeStringValue("@odata.type", targetResource.odataType);
            writer.writeStringValue("type", targetResource.type);
            writer.writeStringValue("userPrincipalName", targetResource.userPrincipalName);
}
