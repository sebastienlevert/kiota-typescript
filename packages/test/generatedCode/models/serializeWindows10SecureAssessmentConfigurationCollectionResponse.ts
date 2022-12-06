import {Windows10SecureAssessmentConfigurationCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeWindows10SecureAssessmentConfiguration} from './serializeWindows10SecureAssessmentConfiguration';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWindows10SecureAssessmentConfigurationCollectionResponse(writer: SerializationWriter, windows10SecureAssessmentConfigurationCollectionResponse: Windows10SecureAssessmentConfigurationCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, windows10SecureAssessmentConfigurationCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", windows10SecureAssessmentConfigurationCollectionResponse.value as any, serializeWindows10SecureAssessmentConfiguration);
}
