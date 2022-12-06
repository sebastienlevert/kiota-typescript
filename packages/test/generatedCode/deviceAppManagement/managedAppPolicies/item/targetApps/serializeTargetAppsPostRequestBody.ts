import {serializeManagedMobileApp} from '../../../../models/serializeManagedMobileApp';
import {TargetAppsPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTargetAppsPostRequestBody(writer: SerializationWriter, targetAppsPostRequestBody: TargetAppsPostRequestBody | undefined = {}) : void {
            writer.writeCollectionOfObjectValuesFromMethod("apps", targetAppsPostRequestBody.apps as any, serializeManagedMobileApp);
}
