import {deserializeIntoModifiedProperty} from './deserializeIntoModifiedProperty';
import {GroupType} from './groupType';
import {TargetResource} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTargetResource(targetResource: TargetResource | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "displayName": n => { targetResource.displayName = n.getStringValue() as any ; },
        "groupType": n => { targetResource.groupType = n.getEnumValue<GroupType>(GroupType) as any ; },
        "id": n => { targetResource.id = n.getStringValue() as any ; },
        "modifiedProperties": n => { targetResource.modifiedProperties = n.getCollectionOfObjectValuesFromMethod(deserializeIntoModifiedProperty) as any ; },
        "@odata.type": n => { targetResource.odataType = n.getStringValue() as any ; },
        "type": n => { targetResource.type = n.getStringValue() as any ; },
        "userPrincipalName": n => { targetResource.userPrincipalName = n.getStringValue() as any ; },
    }
}
