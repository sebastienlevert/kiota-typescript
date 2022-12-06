import {Privacy} from './index';
import {serializeSubjectRightsRequest} from './serializeSubjectRightsRequest';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePrivacy(writer: SerializationWriter, privacy: Privacy | undefined = {}) : void {
            writer.writeStringValue("@odata.type", privacy.odataType);
            writer.writeCollectionOfObjectValuesFromMethod("subjectRightsRequests", privacy.subjectRightsRequests as any, serializeSubjectRightsRequest);
}
