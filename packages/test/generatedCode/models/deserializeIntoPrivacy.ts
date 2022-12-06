import {deserializeIntoSubjectRightsRequest} from './deserializeIntoSubjectRightsRequest';
import {Privacy} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPrivacy(privacy: Privacy | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { privacy.odataType = n.getStringValue() as any ; },
        "subjectRightsRequests": n => { privacy.subjectRightsRequests = n.getCollectionOfObjectValuesFromMethod(deserializeIntoSubjectRightsRequest) as any ; },
    }
}
