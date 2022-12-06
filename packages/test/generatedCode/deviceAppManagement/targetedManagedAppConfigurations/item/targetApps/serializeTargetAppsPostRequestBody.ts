import {serializeManagedMobileApp} from '../../../../models/serializeManagedMobileApp';
import {TargetedManagedAppGroupType} from '../../../../models/targetedManagedAppGroupType';
import {TargetAppsPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTargetAppsPostRequestBody(writer: SerializationWriter, targetAppsPostRequestBody: TargetAppsPostRequestBody | undefined = {}) : void {
            writer.writeEnumValue<TargetedManagedAppGroupType>("appGroupType", targetAppsPostRequestBody.appGroupType);
            writer.writeCollectionOfObjectValuesFromMethod("apps", targetAppsPostRequestBody.apps as any, serializeManagedMobileApp);
}
