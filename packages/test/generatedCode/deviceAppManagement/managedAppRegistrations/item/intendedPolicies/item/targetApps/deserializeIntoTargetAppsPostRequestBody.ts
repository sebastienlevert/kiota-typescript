import {deserializeIntoManagedMobileApp} from '../../../../../../models/deserializeIntoManagedMobileApp';
import {TargetAppsPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTargetAppsPostRequestBody(targetAppsPostRequestBody: TargetAppsPostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "apps": n => { targetAppsPostRequestBody.apps = n.getCollectionOfObjectValuesFromMethod(deserializeIntoManagedMobileApp) as any ; },
    }
}
