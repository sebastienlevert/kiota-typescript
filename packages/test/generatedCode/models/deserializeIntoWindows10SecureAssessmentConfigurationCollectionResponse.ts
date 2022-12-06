import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoWindows10SecureAssessmentConfiguration} from './deserializeIntoWindows10SecureAssessmentConfiguration';
import {Windows10SecureAssessmentConfigurationCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWindows10SecureAssessmentConfigurationCollectionResponse(windows10SecureAssessmentConfigurationCollectionResponse: Windows10SecureAssessmentConfigurationCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(windows10SecureAssessmentConfigurationCollectionResponse),
        "value": n => { windows10SecureAssessmentConfigurationCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoWindows10SecureAssessmentConfiguration) as any ; },
    }
}
