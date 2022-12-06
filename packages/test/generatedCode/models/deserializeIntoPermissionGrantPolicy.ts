import {deserializeIntoPermissionGrantConditionSet} from './deserializeIntoPermissionGrantConditionSet';
import {deserializeIntoPolicyBase} from './deserializeIntoPolicyBase';
import {PermissionGrantPolicy} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPermissionGrantPolicy(permissionGrantPolicy: PermissionGrantPolicy | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoPolicyBase(permissionGrantPolicy),
        "excludes": n => { permissionGrantPolicy.excludes = n.getCollectionOfObjectValuesFromMethod(deserializeIntoPermissionGrantConditionSet) as any ; },
        "includes": n => { permissionGrantPolicy.includes = n.getCollectionOfObjectValuesFromMethod(deserializeIntoPermissionGrantConditionSet) as any ; },
    }
}
