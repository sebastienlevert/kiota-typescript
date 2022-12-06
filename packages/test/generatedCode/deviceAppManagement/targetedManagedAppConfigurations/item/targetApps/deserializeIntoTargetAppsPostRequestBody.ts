import {deserializeIntoManagedMobileApp} from '../../../../models/deserializeIntoManagedMobileApp';
import {TargetedManagedAppGroupType} from '../../../../models/targetedManagedAppGroupType';
import {TargetAppsPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTargetAppsPostRequestBody(targetAppsPostRequestBody: TargetAppsPostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "appGroupType": n => { targetAppsPostRequestBody.appGroupType = n.getEnumValue<TargetedManagedAppGroupType>(TargetedManagedAppGroupType) as any ; },
        "apps": n => { targetAppsPostRequestBody.apps = n.getCollectionOfObjectValuesFromMethod(deserializeIntoManagedMobileApp) as any ; },
    }
}
