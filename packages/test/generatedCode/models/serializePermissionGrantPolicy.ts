import {PermissionGrantPolicy} from './index';
import {serializePermissionGrantConditionSet} from './serializePermissionGrantConditionSet';
import {serializePolicyBase} from './serializePolicyBase';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePermissionGrantPolicy(writer: SerializationWriter, permissionGrantPolicy: PermissionGrantPolicy | undefined = {}) : void {
        serializePolicyBase(writer, permissionGrantPolicy)
            writer.writeCollectionOfObjectValuesFromMethod("excludes", permissionGrantPolicy.excludes as any, serializePermissionGrantConditionSet);
            writer.writeCollectionOfObjectValuesFromMethod("includes", permissionGrantPolicy.includes as any, serializePermissionGrantConditionSet);
}
